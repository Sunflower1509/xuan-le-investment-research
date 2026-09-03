#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = path.join(root, "src/data/research-data.js");
const VIETNAM_TZ = "Asia/Ho_Chi_Minh";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SECONDARY_CLOSE_OVERRIDES = Object.freeze({
  "2026-08-28": Object.freeze({
    MSR: Object.freeze({
      close: 47200,
      source: "https://vn.investing.com/equities/masan-resources-corp-historical-data",
      reason: "CafeF 28/08 lệch giá đóng cửa; Investing lịch sử xác nhận 47.200, trùng VNDIRECT."
    }),
    OIL: Object.freeze({
      close: 13600,
      source: "https://vn.investing.com/equities/petrovietnam-oil-historical-data",
      reason: "CafeF 28/08 lệch giá đóng cửa; Investing lịch sử xác nhận 13.600, trùng VNDIRECT."
    }),
    PHP: Object.freeze({
      close: 47000,
      source: "https://vn.investing.com/equities/port-of-hai-phong-jsc-historical-data",
      reason: "CafeF 28/08 lệch giá đóng cửa; Investing lịch sử xác nhận 47.000, trùng VNDIRECT."
    })
  })
});

const argValue = (name, fallback = null) => {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};

const isoDateInVietnam = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: VIETNAM_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const value = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
};

const validIsoDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value || "");
const finite = (value) => Number.isFinite(Number(value)) ? Number(value) : null;
const normalizedPrice = (value) => {
  const parsed = finite(value);
  if (!(parsed > 0)) return null;
  return parsed < 1000 ? Math.round(parsed * 1000) : Math.round(parsed);
};

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const stripHtml = (value) => String(value ?? "")
  .replace(/<[^>]*>/g, " ")
  .replace(/&nbsp;|&#160;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/\s+/g, " ")
  .trim();

const parseViNumber = (value) => {
  const text = stripHtml(value).replace(/\./g, "").replace(",", ".").replace(/[^0-9.+-]/g, "");
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : null;
};

const fetchText = async (url, retries = 4) => {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: "text/html,application/json,text/plain,*/*",
          "user-agent": "Mozilla/5.0 XuanLeTVS-EOD-Integrity-Gate/2.0"
        },
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < retries) await sleep(attempt * 750);
    }
  }
  throw lastError;
};

const fetchJson = async (url, retries = 4) => JSON.parse(await fetchText(url, retries));

const validateOhlc = (quote, source) => {
  const fields = ["open", "high", "low", "close"];
  if (fields.some((field) => !(quote[field] > 0))) throw new Error(`${source} incomplete OHLC`);
  if (quote.high < Math.max(quote.open, quote.close) || quote.low > Math.min(quote.open, quote.close) || quote.low > quote.high) {
    throw new Error(`${source} inconsistent OHLC`);
  }
  return quote;
};

export const parseVndirect = (payload, ticker, date) => {
  const rows = Array.isArray(payload?.data) ? payload.data : [];
  const row = rows.find((item) => String(item.code || "").toUpperCase() === ticker && String(item.date) === date);
  if (!row) throw new Error("VNDIRECT missing row");

  const quote = validateOhlc({
    open: normalizedPrice(row.open),
    high: normalizedPrice(row.high),
    low: normalizedPrice(row.low),
    close: normalizedPrice(row.close)
  }, "VNDIRECT");
  const volume = finite(row.nmVolume ?? row.totalVolume ?? row.volume);
  let changePct = finite(row.pctChange ?? row.changePct);
  const reference = finite(row.basicPrice ?? row.referencePrice ?? row.reference ?? row.refPrice);
  const rawClose = finite(row.close);
  const calculatedChangePct = rawClose !== null && reference ? (rawClose / reference - 1) * 100 : null;
  if (changePct === null) changePct = calculatedChangePct;
  if (!(volume >= 0) || changePct === null) throw new Error("VNDIRECT incomplete row");
  if (calculatedChangePct !== null && Math.abs(changePct - calculatedChangePct) > 0.001) {
    throw new Error(`VNDIRECT changePct mismatch ${changePct} vs ${calculatedChangePct}`);
  }
  return {
    ...quote,
    volume: Math.round(volume),
    changePct: Math.round(changePct * 10000) / 10000
  };
};

export const parseCafeF = (html, date) => {
  if (typeof html !== "string" || !html.length) throw new Error("CafeF empty page");
  const [, month, day] = date.match(/^(\d{4})-(\d{2})-(\d{2})$/) || [];
  if (!day || !month) throw new Error(`CafeF invalid date ${date}`);
  const displayDate = `${day}/${month}`;
  const re = new RegExp(
    `<tr[^>]*>\\s*<td[^>]*class=["']col1["'][^>]*>\\s*${escapeRegex(displayDate)}\\s*<\\/td>`
      + `[\\s\\S]*?<td[^>]*class=["']col2["'][^>]*>[\\s\\S]*?<div[^>]*class=["']l["'][^>]*>([^<]+)<\\/div>`
      + `[\\s\\S]*?<div[^>]*class=['"][^'"]*r[^'"]*['"][^>]*>([^<]+)<\\/div>`
      + `[\\s\\S]*?<td[^>]*class=["']col3["'][^>]*>([^<]+)<\\/td>`,
    "i"
  );
  const match = html.match(re);
  if (!match) throw new Error("CafeF missing row");
  const closeRaw = parseViNumber(match[1]);
  const changeText = stripHtml(match[2]);
  const volumeRaw = parseViNumber(match[3]);
  const pctMatch = changeText.match(/\(([+-]?[\d.,]+)%\)/);
  const changePct = pctMatch ? parseViNumber(pctMatch[1]) : null;
  if (!(closeRaw > 0) || !(volumeRaw >= 0) || changePct === null) throw new Error("CafeF incomplete row");
  return {
    close: normalizedPrice(closeRaw),
    volume: Math.round(volumeRaw),
    changePct
  };
};

export const secondaryCloseDecision = ({ ticker, date, primaryClose, cafeFClose }) => {
  if (primaryClose === cafeFClose) {
    return { ok: true, mode: "cafef-direct", source: `https://cafef.vn/du-lieu/DuLieu.aspx?cat_id=1009&symbol=${ticker}` };
  }
  const override = SECONDARY_CLOSE_OVERRIDES?.[date]?.[ticker] || null;
  if (override && override.close === primaryClose) {
    return { ok: true, mode: "third-source-override", source: override.source, reason: override.reason, cafeFClose };
  }
  return { ok: false, mode: "mismatch", cafeFClose, primaryClose };
};

const loadResearch = async () => {
  const code = await fs.readFile(DATA_PATH, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: DATA_PATH });
  return sandbox.window.RESEARCH_DATA;
};

const runBatch = async (items, concurrency, worker) => {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(runners);
  return results;
};

const verifyDate = async (coverage, date) => {
  const results = await runBatch(coverage, 5, async (item) => {
    const ticker = String(item.ticker || "").toUpperCase();
    const priceSource = `https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:${ticker}~date:${date}&size=10`;
    const cafeFSource = `https://cafef.vn/du-lieu/DuLieu.aspx?cat_id=1009&symbol=${ticker}`;
    try {
      const [vndirectPayload, cafeFHtml] = await Promise.all([fetchJson(priceSource), fetchText(cafeFSource)]);
      const primary = parseVndirect(vndirectPayload, ticker, date);
      const secondary = parseCafeF(cafeFHtml, date);
      const closeDecision = secondaryCloseDecision({ ticker, date, primaryClose: primary.close, cafeFClose: secondary.close });
      if (!closeDecision.ok) {
        throw new Error(`secondary close mismatch VNDIRECT=${primary.close} CafeF=${secondary.close}`);
      }
      return {
        ok: true,
        quote: {
          ticker,
          ...primary,
          priceDate: date,
          priceSource,
          priceSourceSecondary: closeDecision.source,
          cafeFSource,
          cafeFClose: secondary.close,
          secondaryVolume: secondary.volume,
          secondaryChangePct: secondary.changePct,
          closeVerificationMode: closeDecision.mode,
          closeVerificationReason: closeDecision.reason || null
        }
      };
    } catch (error) {
      return { ok: false, ticker, error: String(error?.message || error) };
    }
  });

  return {
    quotes: results.filter((result) => result.ok).map((result) => result.quote),
    errors: results.filter((result) => !result.ok)
  };
};

const immutableProjection = (input) => {
  const clone = structuredClone(input);
  delete clone.meta.updated;
  delete clone.meta.release;
  delete clone.meta.note;
  for (const item of clone.coverage || []) {
    for (const key of ["close", "changePct", "volume", "priceDate", "priceSource", "priceSourceSecondary"]) delete item[key];
  }
  return JSON.stringify(clone);
};

const isHttpsUrl = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

export const isCoverageCurrent = (coverage, date) => Array.isArray(coverage)
  && coverage.length > 0
  && coverage.every((item) => item?.priceDate === date
    && finite(item.close) > 0
    && item.changePct != null
    && finite(item.changePct) !== null
    && item.volume != null
    && finite(item.volume) >= 0
    && isHttpsUrl(item.priceSource)
    && isHttpsUrl(item.priceSourceSecondary));

const writeOutput = async (key, value) => {
  if (!process.env.GITHUB_OUTPUT) return;
  await fs.appendFile(process.env.GITHUB_OUTPUT, `${key}=${String(value)}\n`, "utf8");
};

const writeStatus = async (statusFile, payload) => {
  if (!statusFile) return;
  await fs.writeFile(path.resolve(root, statusFile), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
};

const run = async () => {
  const targetDate = argValue("--date", isoDateInVietnam());
  const statusFile = argValue("--status-file", null);
  const maxAttempts = Number(argValue("--max-attempts", "3"));
  const waitMs = Number(argValue("--wait-ms", "30000"));
  if (!validIsoDate(targetDate)) throw new Error(`Ngày mục tiêu không hợp lệ: ${targetDate}`);

  const before = await loadResearch();
  if (!before || !Array.isArray(before.coverage) || !before.coverage.length) throw new Error("Coverage trống hoặc không đọc được.");
  const tickers = before.coverage.map((item) => String(item.ticker || "").toUpperCase());
  if (new Set(tickers).size !== tickers.length || tickers.some((ticker) => !/^[A-Z0-9]{2,8}$/.test(ticker))) {
    throw new Error("Coverage có ticker trùng hoặc sai định dạng.");
  }
  if (targetDate < before.meta.updated) throw new Error(`Không cho phép cập nhật lùi ngày ${targetDate} < ${before.meta.updated}.`);
  if (targetDate === before.meta.updated && isCoverageCurrent(before.coverage, targetDate)) {
    const payload = { status: "already-current", date: targetDate, coverageCount: tickers.length };
    await writeStatus(statusFile, payload);
    await writeOutput("status", payload.status);
    await writeOutput("date", targetDate);
    console.log(JSON.stringify(payload));
    return;
  }

  let verified = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const result = await verifyDate(before.coverage, targetDate);
    console.log(`EOD verification attempt ${attempt}/${maxAttempts}: ${result.quotes.length}/${tickers.length}`);
    if (result.quotes.length === tickers.length && result.errors.length === 0) {
      verified = result;
      break;
    }
    const onlyMissingRows = result.quotes.length === 0 && result.errors.length === tickers.length
      && result.errors.every((entry) => /missing row/i.test(entry.error));
    if (attempt < maxAttempts) {
      await sleep(waitMs);
      continue;
    }
    if (onlyMissingRows) {
      const payload = { status: "not-ready", date: targetDate, coverageCount: tickers.length, errors: result.errors };
      await writeStatus(statusFile, payload);
      await writeOutput("status", payload.status);
      await writeOutput("date", targetDate);
      console.log(JSON.stringify(payload));
      return;
    }
    throw new Error(`EOD ${targetDate} không vượt Data Gate: verified=${result.quotes.length}/${tickers.length}; ${JSON.stringify(result.errors)}`);
  }

  const quoteMap = new Map(verified.quotes.map((quote) => [quote.ticker, quote]));
  if (quoteMap.size !== tickers.length || tickers.some((ticker) => !quoteMap.has(ticker))) throw new Error("Tập quote không khớp coverage.");

  const after = structuredClone(before);
  const volumeMismatches = [];
  const closeOverrides = [];
  for (const item of after.coverage) {
    const quote = quoteMap.get(String(item.ticker).toUpperCase());
    item.close = quote.close;
    item.changePct = quote.changePct;
    item.volume = quote.volume;
    item.priceDate = quote.priceDate;
    item.priceSource = quote.priceSource;
    item.priceSourceSecondary = quote.priceSourceSecondary;
    if (quote.secondaryVolume !== quote.volume) {
      volumeMismatches.push({
        ticker: quote.ticker,
        vndirect: quote.volume,
        cafef: quote.secondaryVolume,
        diff: quote.volume - quote.secondaryVolume
      });
    }
    if (quote.closeVerificationMode === "third-source-override") {
      closeOverrides.push({
        ticker: quote.ticker,
        vndirect: quote.close,
        cafef: quote.cafeFClose,
        source: quote.priceSourceSecondary,
        reason: quote.closeVerificationReason
      });
    }
  }

  after.meta.updated = targetDate;
  after.meta.release = targetDate;
  const matchedVolumes = tickers.length - volumeMismatches.length;
  const directCloseMatches = tickers.length - closeOverrides.length;
  const mismatchText = volumeMismatches.length
    ? volumeMismatches.map((entry) => `${entry.ticker}: VNDIRECT ${entry.vndirect.toLocaleString("vi-VN")} vs CafeF ${entry.cafef.toLocaleString("vi-VN")} (chênh ${Math.abs(entry.diff).toLocaleString("vi-VN")})`).join("; ")
    : "không có chênh lệch";
  const overrideText = closeOverrides.length
    ? closeOverrides.map((entry) => `${entry.ticker}: CafeF ${entry.cafef.toLocaleString("vi-VN")} khác VNDIRECT ${entry.vndirect.toLocaleString("vi-VN")}; nguồn thứ ba xác nhận VNDIRECT (${entry.source})`).join("; ")
    : "không có ngoại lệ";
  after.meta.note = `Giá đóng cửa, biến động và khối lượng khớp lệnh của ${tickers.length}/${tickers.length} mã được khóa tại phiên ${targetDate.split("-").reverse().join("/")}. VNDIRECT Finfo là nguồn chính và từng dòng được kiểm tra tính hợp lệ OHLC/nmVolume/pctChange. Giá đóng cửa khớp trực tiếp CafeF ${directCloseMatches}/${tickers.length} mã; ${closeOverrides.length}/${tickers.length} ngoại lệ CafeF được nguồn thứ ba độc lập xác nhận trùng VNDIRECT: ${overrideText}. Khối lượng khớp trực tiếp VNDIRECT-CafeF ${matchedVolumes}/${tickers.length} mã; ${mismatchText}. Website dùng nmVolume và pctChange từ VNDIRECT theo quy ước nguồn chính; không tự hòa giải hoặc suy diễn nguyên nhân sai khác giữa nguồn. Vùng mua, fair value, target, stop, recommendation và điều kiện hành động giữ nguyên theo hồ sơ đang công bố.`;

  if (immutableProjection(before) !== immutableProjection(after)) {
    throw new Error("Phát hiện thay đổi ngoài whitelist market fields/meta; hủy cập nhật.");
  }

  await fs.writeFile(DATA_PATH, `window.RESEARCH_DATA = ${JSON.stringify(after, null, 2)};\n`, "utf8");
  const payload = {
    status: "verified",
    date: targetDate,
    coverageCount: tickers.length,
    verifiedCount: verified.quotes.length,
    closeDirectMatched: directCloseMatches,
    closeOverrides,
    volumeMatched: matchedVolumes,
    volumeMismatches
  };
  await writeStatus(statusFile, payload);
  await writeOutput("status", payload.status);
  await writeOutput("date", targetDate);
  await writeOutput("coverage_count", tickers.length);
  console.log(JSON.stringify(payload, null, 2));
};

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  run().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
