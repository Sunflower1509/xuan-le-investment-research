#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const researchPath = path.join(root, "src/data/research-data.js");
const mappingPath = path.join(root, "src/data/company-logos.js");
const liveBase = process.argv.find((value) => value.startsWith("--base-url="))?.slice("--base-url=".length).replace(/\/+$/, "") || null;
const expectedSchema = "tradingview-exact-symbol-svg-v1";
const expectedCount = 108;
const errors = [];

const loadWindowValue = (file, key) => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  return context.window[key];
};
const normalizeTicker = (value) => String(value || "").trim().toUpperCase();
const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];
const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const fail = (scope, message) => errors.push(`${scope}: ${message}`);
const validateSvg = (buffer, scope) => {
  const text = buffer.toString("utf8").trim();
  if (!/^(?:<!--[^]*?-->\s*)?<svg\b/i.test(text) || !/<\/svg>\s*$/i.test(text)) fail(scope, "không phải SVG hoàn chỉnh");
  if (/<(?:script|foreignObject|iframe|object|embed)\b/i.test(text)) fail(scope, "chứa phần tử không an toàn");
  if (/\son[a-z]+\s*=/i.test(text) || /(?:href|src)\s*=\s*["'](?:https?:|javascript:)/i.test(text)) fail(scope, "chứa tham chiếu ngoài hoặc event handler");
};
const pooledMap = async (items, concurrency, worker) => {
  const output = new Array(items.length);
  let cursor = 0;
  const run = async () => {
    while (cursor < items.length) {
      const index = cursor++;
      output[index] = await worker(items[index]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return output;
};

const research = loadWindowValue(researchPath, "RESEARCH_DATA");
const mapping = loadWindowValue(mappingPath, "COMPANY_LOGOS");
const coverage = research.coverage.map((item) => ({ ticker: normalizeTicker(item.ticker), exchange: normalizeTicker(item.exchange) }));
const entries = Object.entries(mapping?.logos || {}).sort(([a], [b]) => a.localeCompare(b));

if (coverage.length !== expectedCount) fail("Coverage", `phải có ${expectedCount} mã, hiện có ${coverage.length}`);
if (mapping?.meta?.schema !== expectedSchema) fail("Mapping", `schema phải là ${expectedSchema}`);
if (mapping?.meta?.count !== expectedCount) fail("Mapping", `meta.count phải là ${expectedCount}`);
if (entries.length !== expectedCount) fail("Mapping", `phải có ${expectedCount} ticker, hiện có ${entries.length}`);

const coverageByTicker = new Map(coverage.map((item) => [item.ticker, item]));
const seenPaths = new Set();
for (const [ticker, logo] of entries) {
  const expected = coverageByTicker.get(ticker);
  const asset = localPath(logo.path);
  if (!expected) fail(ticker, "mapping không thuộc coverage hiện hành");
  if (expected && logo.exchange !== expected.exchange) fail(ticker, `sàn mapping ${logo.exchange} không khớp ${expected.exchange}`);
  if (!/^VN[A-Z0-9]{10}$/.test(String(logo.isin || ""))) fail(ticker, `ISIN không hợp lệ (${logo.isin || "trống"})`);
  if (asset !== `assets/images/logos/${ticker.toLowerCase()}.svg`) fail(ticker, `đường dẫn không chuẩn (${asset})`);
  if (seenPaths.has(asset)) fail(ticker, `dùng trùng đường dẫn ${asset}`);
  seenPaths.add(asset);
  if (!String(logo.alt || "").includes(ticker)) fail(ticker, "alt text thiếu ticker");
  if (!String(logo.sourceUrl || "").startsWith("https://s3-symbol-logo.tradingview.com/")) fail(ticker, "sourceUrl không thuộc nguồn đã khóa");

  const absolute = path.join(root, asset);
  if (!fs.existsSync(absolute)) {
    fail(ticker, `thiếu file local ${asset}`);
    continue;
  }
  const buffer = fs.readFileSync(absolute);
  validateSvg(buffer, ticker);
  if (buffer.length !== logo.bytes) fail(ticker, `số byte ${buffer.length} không khớp mapping ${logo.bytes}`);
  if (sha256(buffer) !== logo.sha256) fail(ticker, "SHA-256 local không khớp mapping");
}

for (const item of coverage) if (!mapping.logos[item.ticker]) fail(item.ticker, "coverage thiếu logo mapping");
const diskFiles = fs.readdirSync(path.join(root, "assets/images/logos"))
  .filter((file) => file.endsWith(".svg"));
if (diskFiles.length !== expectedCount) fail("Assets", `phải có ${expectedCount} SVG, hiện có ${diskFiles.length}`);

let liveChecked = 0;
if (liveBase) {
  const results = await pooledMap(entries, 12, async ([ticker, logo]) => {
    const url = `${liveBase}/${logo.path}`;
    const response = await fetch(url, { cache: "no-store", headers: { "cache-control": "no-cache" } });
    if (!response.ok) return { ticker, error: `HTTP ${response.status}`, url };
    const contentType = response.headers.get("content-type") || "";
    const buffer = Buffer.from(await response.arrayBuffer());
    if (!contentType.includes("image/svg+xml")) return { ticker, error: `Content-Type ${contentType || "trống"}`, url };
    if (sha256(buffer) !== logo.sha256) return { ticker, error: "SHA-256 live không khớp local", url };
    return { ticker, bytes: buffer.length, hash: logo.sha256 };
  });
  for (const result of results) {
    if (result.error) fail(`Live ${result.ticker}`, result.error);
    else liveChecked += 1;
  }
}

if (errors.length) {
  console.error(`Company logo audit failed (${errors.length} lỗi):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({
    ok: true,
    coverage: coverage.length,
    mapped: entries.length,
    localAssets: diskFiles.length,
    localHashesVerified: entries.length,
    liveBase,
    liveDownloadedAndHashVerified: liveChecked,
    schema: mapping.meta.schema
  }, null, 2));
}
