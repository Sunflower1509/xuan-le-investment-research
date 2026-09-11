#!/usr/bin/env node

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const researchPath = path.join(root, "src/data/research-data.js");
const mappingPath = path.join(root, "src/data/company-logos.js");
const logoDir = path.join(root, "assets/images/logos");
const sourceHost = "symbol-search.tradingview.com";
const assetHost = "s3-symbol-logo.tradingview.com";
const schema = "tradingview-exact-symbol-svg-v1";
const version = "20260911-logo2";
const concurrency = 4;

// Pages runs this before validation so coverage, mapping metadata and local logo assets stay one-to-one.
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const normalizeTicker = (value) => String(value || "").trim().toUpperCase();
const stripMarkup = (value) => String(value || "").replace(/<[^>]*>/g, "").trim();
const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const localAssetPath = (value) => String(value || "").split(/[?#]/, 1)[0];

const loadWindowValue = (file, key) => {
  if (!fs.existsSync(file)) return null;
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  return context.window[key] || null;
};

const fetchWithRetry = async (url, attempt = 0) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "accept": "application/json,text/plain,*/*",
      "user-agent": "Mozilla/5.0 (compatible; XuanLeTVSLogoSync/2.0)",
      "origin": "https://www.tradingview.com",
      "referer": "https://www.tradingview.com/"
    },
    signal: AbortSignal.timeout(20_000)
  });
  if ((response.status === 429 || response.status >= 500) && attempt < 4) {
    await sleep(900 * (attempt + 1));
    return fetchWithRetry(url, attempt + 1);
  }
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response;
};

const pooledMap = async (items, worker) => {
  const output = new Array(items.length);
  let cursor = 0;
  const run = async () => {
    while (cursor < items.length) {
      const index = cursor++;
      output[index] = await worker(items[index]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length || 1) }, run));
  return output;
};

const validateSvg = (buffer, ticker) => {
  const text = buffer.toString("utf8").trim();
  if (!/^(?:<!--[^]*?-->\s*)?<svg\b/i.test(text) || !/<\/svg>\s*$/i.test(text)) {
    throw new Error(`${ticker}: tài sản nguồn không phải SVG hoàn chỉnh`);
  }
  if (/<(?:script|foreignObject|iframe|object|embed)\b/i.test(text)) {
    throw new Error(`${ticker}: SVG chứa phần tử không an toàn`);
  }
  if (/\son[a-z]+\s*=/i.test(text) || /(?:href|src)\s*=\s*["'](?:https?:|javascript:)/i.test(text)) {
    throw new Error(`${ticker}: SVG chứa tham chiếu ngoài hoặc event handler`);
  }
  if (buffer.length < 180 || buffer.length > 250_000) {
    throw new Error(`${ticker}: kích thước SVG bất thường (${buffer.length} byte)`);
  }
};

const resolveSymbol = async ({ ticker, exchange }) => {
  const url = new URL(`https://${sourceHost}/symbol_search/v3`);
  url.searchParams.set("text", ticker);
  url.searchParams.set("hl", "1");
  url.searchParams.set("exchange", exchange);
  url.searchParams.set("lang", "en");
  url.searchParams.set("search_type", "stock");
  url.searchParams.set("domain", "production");
  const payload = await (await fetchWithRetry(url)).json();
  const exact = (payload.symbols || []).filter((item) => (
    normalizeTicker(stripMarkup(item.symbol)) === ticker
      && normalizeTicker(item.exchange || item.source_id) === exchange
  ));
  if (exact.length !== 1) throw new Error(`${ticker}/${exchange}: cần đúng 1 kết quả nguồn, nhận ${exact.length}`);
  const match = exact[0];
  const logoid = match.logo?.logoid || match.logoid;
  if (!logoid || (match.logo?.style && match.logo.style !== "single")) {
    throw new Error(`${ticker}/${exchange}: thiếu logo doanh nghiệp dạng single`);
  }
  if (!/^VN[A-Z0-9]{10}$/.test(String(match.isin || ""))) {
    throw new Error(`${ticker}/${exchange}: ISIN nguồn không hợp lệ (${match.isin || "trống"})`);
  }
  return {
    ticker,
    exchange,
    company: stripMarkup(match.description),
    isin: String(match.isin),
    logoid: String(logoid),
    queryUrl: url.href,
    sourceUrl: `https://${assetHost}/${logoid}--big.svg`
  };
};

const preserveLockedLogo = async (universeItem, locked) => {
  if (!locked || normalizeTicker(locked.exchange) !== universeItem.exchange) return null;
  if (!/^VN[A-Z0-9]{10}$/.test(String(locked.isin || ""))) return null;
  let source;
  let query;
  try {
    source = new URL(locked.sourceUrl);
    query = new URL(locked.queryUrl);
  } catch {
    return null;
  }
  if (source.hostname !== assetHost || query.hostname !== sourceHost) return null;
  const relativePath = localAssetPath(locked.path);
  const absolutePath = path.join(root, relativePath);
  if (!relativePath.startsWith("assets/images/logos/") || !fs.existsSync(absolutePath)) return null;
  const buffer = await fsp.readFile(absolutePath);
  validateSvg(buffer, universeItem.ticker);
  const hash = sha256(buffer);
  if (locked.sha256 && locked.sha256 !== hash) throw new Error(`${universeItem.ticker}: local logo hash drift`);
  return {
    ticker: universeItem.ticker,
    exchange: universeItem.exchange,
    company: locked.company,
    isin: locked.isin,
    sourceUrl: locked.sourceUrl,
    queryUrl: locked.queryUrl,
    path: `${relativePath}?v=${version}`,
    bytes: buffer.length,
    sha256: hash,
    reused: true
  };
};

const run = async () => {
  const research = loadWindowValue(researchPath, "RESEARCH_DATA");
  if (!research || !Array.isArray(research.coverage)) throw new Error("Không đọc được RESEARCH_DATA.coverage");
  const universe = research.coverage.map((item) => ({ ticker: normalizeTicker(item.ticker), exchange: normalizeTicker(item.exchange) }));
  if (!universe.length) throw new Error("Coverage trống; không đồng bộ logo.");
  if (new Set(universe.map((item) => item.ticker)).size !== universe.length) throw new Error("Coverage có ticker trùng");

  const previous = loadWindowValue(mappingPath, "COMPANY_LOGOS");
  const previousByTicker = new Map(Object.entries(previous?.logos || {}));
  const preserved = [];
  const unresolved = [];
  for (const item of universe) {
    const locked = previousByTicker.get(item.ticker);
    const kept = await preserveLockedLogo(item, locked);
    if (kept) preserved.push(kept); else unresolved.push(item);
  }

  const resolved = await pooledMap(unresolved, resolveSymbol);
  for (const item of resolved) {
    const locked = previousByTicker.get(item.ticker);
    if (locked && (normalizeTicker(locked.exchange) !== item.exchange || locked.isin !== item.isin)) {
      throw new Error(`${item.ticker}: nhận diện nguồn đổi từ ${locked.exchange}/${locked.isin} sang ${item.exchange}/${item.isin}`);
    }
  }

  await fsp.mkdir(logoDir, { recursive: true });
  const downloaded = await pooledMap(resolved, async (item) => {
    const buffer = Buffer.from(await (await fetchWithRetry(item.sourceUrl)).arrayBuffer());
    validateSvg(buffer, item.ticker);
    const relativePath = `assets/images/logos/${item.ticker.toLowerCase()}.svg`;
    await fsp.writeFile(path.join(root, relativePath), buffer);
    return { ...item, path: `${relativePath}?v=${version}`, bytes: buffer.length, sha256: sha256(buffer), reused: false };
  });

  const combined = [...preserved, ...downloaded].sort((a, b) => a.ticker.localeCompare(b.ticker));
  if (combined.length !== universe.length) throw new Error(`Logo count ${combined.length} != coverage ${universe.length}`);
  const logos = Object.fromEntries(combined.map((item) => [item.ticker, {
    path: item.path,
    alt: `Logo ${item.company} (${item.ticker})`,
    exchange: item.exchange,
    isin: item.isin,
    company: item.company,
    sourceUrl: item.sourceUrl,
    queryUrl: item.queryUrl,
    sha256: item.sha256,
    bytes: item.bytes
  }]));
  const payload = {
    meta: {
      schema,
      count: combined.length,
      synced: "2026-09-11",
      source: "TradingView exact symbol search locked by ticker + exchange + ISIN; unchanged verified local SVGs are reused and only missing tickers are resolved/downloaded"
    },
    logos
  };
  await fsp.writeFile(mappingPath, `window.COMPANY_LOGOS = ${JSON.stringify(payload, null, 2)};\n`);

  const expected = new Set(combined.map((item) => `${item.ticker.toLowerCase()}.svg`));
  const unexpected = (await fsp.readdir(logoDir)).filter((file) => file.endsWith(".svg") && !expected.has(file));
  if (unexpected.length) throw new Error(`Thư mục logo có tài sản ngoài universe: ${unexpected.join(", ")}`);

  console.log(JSON.stringify({
    ok: true,
    schema,
    coverage: universe.length,
    reused: preserved.length,
    resolvedNew: resolved.length,
    downloadedNew: downloaded.length,
    localAssets: combined.length,
    mapped: Object.keys(logos).length,
    totalBytes: combined.reduce((sum, item) => sum + item.bytes, 0)
  }, null, 2));
};

run().catch((error) => {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
});
