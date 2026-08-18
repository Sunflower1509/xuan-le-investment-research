#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = path.join(root, "src/data/research-data.js");
const VIETNAM_TZ = "Asia/Ho_Chi_Minh";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

const epochRangeForVietnamDate = (date) => {
  const [year, month, day] = date.split("-").map(Number);
  const startMs = Date.UTC(year, month - 1, day) - 7 * 60 * 60 * 1000;
  return {
    from: Math.floor(startMs / 1000),
    to: Math.floor((startMs + 24 * 60 * 60 * 1000 - 1000) / 1000)
  };
};

const fetchJson = async (url, retries = 4) => {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json, text/plain, */*",
          "user-agent": "XuanLeTVS-EOD-Integrity-Gate/1.0"
        },
        signal: AbortSignal.timeout(15000)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < retries) await sleep(attempt * 750);
    }
  }
  throw lastError;
};

const parseVndirect = (payload, ticker, date) => {
  const rows = Array.isArray(payload?.data) ? payload.data : [];
  const row = rows.find((item) => String(item.code || "").toUpperCase() === ticker && String(item.date) === date)
    || rows.find((item) => String(item.date) === date);
  if (!row) throw new Error("VNDIRECT missing row");

  const close = normalizedPrice(row.close);
  const volume = finite(row.nmVolume ?? row.totalVolume ?? row.volume);
  let changePct = finite(row.pctChange ?? row.changePct);
  if (changePct === null) {
    const reference = finite(row.basicPrice ?? row.referencePrice ?? row.reference ?? row.refPrice);
    const rawClose = finite(row.close);
    if (rawClose !== null && reference) changePct = (rawClose / reference - 1) * 100;
  }
  if (!(close > 0) || !(volume >= 0) || changePct === null) throw new Error("VNDIRECT incomplete row");
  return {
    close,
    volume: Math.round(volume),
    changePct: Math.round(changePct * 10000) / 10000
  };
};

const parseDnse = (payload, date) => {
  const closes = Array.isArray(payload?.c) ? payload.c : [];
  const volumes = Array.isArray(payload?.v) ? payload.v : [];
  const timestamps = Array.isArray(payload?.t) ? payload.t : [];
  if (!closes.length) throw new Error("DNSE missing row");
  const close = normalizedPrice(closes.at(-1));
  if (!(close > 0)) throw new Error("DNSE invalid close");
  if (timestamps.length) {
    const timestampDate = isoDateInVietnam(new Date(Number(timestamps.at(-1)) * 1000));
    if (timestampDate !== date) throw new Error(`DNSE date ${timestampDate}`);
  }
  const volume = volumes.length ? finite(volumes.at(-1)) : null;
  return { close, volume: volume === null ? null : Math.round(volume) };
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
  const { from, to } = epochRangeForVietnamDate(date);
  const results = await runBatch(coverage, 6, async (item) => {
    const ticker = String(item.ticker || "").toUpperCase();
    const priceSource = `https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:${ticker}~date:${date}&size=10`;
    const priceSourceSecondary = `https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=${from}&to=${to}&symbol=${ticker}&resolution=1D`;
    try {
      const [vndirectPayload, dnsePayload] = await Promise.all([fetchJson(priceSource), fetchJson(priceSourceSecondary)]);
      const primary = parseVndirect(vndirectPayload, ticker, date);
      const secondary = parseDnse(dnsePayload, date);
      if (primary.close !== secondary.close) throw new Error(`close mismatch ${primary.close} vs ${secondary.close}`);
      return {
        ok: true,
        quote: {
          ticker,
          ...primary,
          priceDate: date,
          priceSource,
          priceSourceSecondary,
          secondaryVolume: secondary.volume
        }
      };
    } catch (error) {
      return { ok: false, ticker, error: String(error?.message || error) };
    }
  });

  const quotes = results.filter((result) => result.ok).map((result) => result.quote);
  const errors = results.filter((result) => !result.ok);
  return { quotes, errors };
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
  if (targetDate === before.meta.updated) {
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
  for (const item of after.coverage) {
    const quote = quoteMap.get(String(item.ticker).toUpperCase());
    item.close = quote.close;
    item.changePct = quote.changePct;
    item.volume = quote.volume;
    item.priceDate = quote.priceDate;
    item.priceSource = quote.priceSource;
    item.priceSourceSecondary = quote.priceSourceSecondary;
    if (quote.secondaryVolume !== null && quote.secondaryVolume !== quote.volume) {
      volumeMismatches.push({ ticker: quote.ticker, vndirect: quote.volume, dnse: quote.secondaryVolume, diff: quote.volume - quote.secondaryVolume });
    }
  }

  after.meta.updated = targetDate;
  after.meta.release = targetDate;
  const matchedVolumes = tickers.length - volumeMismatches.length;
  const mismatchText = volumeMismatches.length
    ? volumeMismatches.map((entry) => `${entry.ticker}: VNDIRECT ${entry.vndirect.toLocaleString("vi-VN")} vs DNSE ${entry.dnse.toLocaleString("vi-VN")} (chênh ${Math.abs(entry.diff).toLocaleString("vi-VN")})`).join("; ")
    : "không có chênh lệch";
  after.meta.note = `Giá đóng cửa, biến động và khối lượng khớp lệnh của ${tickers.length}/${tickers.length} mã được khóa tại phiên ${targetDate.split("-").reverse().join("/")}. Giá đóng cửa ${tickers.length}/${tickers.length} mã khớp trực tiếp giữa VNDIRECT Finfo và DNSE EnTrade. Khối lượng khớp ${matchedVolumes}/${tickers.length} mã giữa hai nguồn; ${mismatchText}. Website dùng nmVolume từ VNDIRECT Finfo theo quy ước nguồn chính và không suy diễn nguyên nhân sai khác. Không dùng chuỗi giá lịch sử đã điều chỉnh; phần trăm biến động lấy từ dữ liệu phiên VNDIRECT. Vùng mua, fair value, target, stop, recommendation và điều kiện hành động giữ nguyên theo hồ sơ đang công bố.`;

  if (immutableProjection(before) !== immutableProjection(after)) {
    throw new Error("Phát hiện thay đổi ngoài whitelist market fields/meta; hủy cập nhật.");
  }

  await fs.writeFile(DATA_PATH, `window.RESEARCH_DATA = ${JSON.stringify(after, null, 2)};\n`, "utf8");
  const payload = {
    status: "verified",
    date: targetDate,
    coverageCount: tickers.length,
    verifiedCount: verified.quotes.length,
    volumeMatched: matchedVolumes,
    volumeMismatches
  };
  await writeStatus(statusFile, payload);
  await writeOutput("status", payload.status);
  await writeOutput("date", targetDate);
  await writeOutput("coverage_count", tickers.length);
  console.log(JSON.stringify(payload, null, 2));
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
