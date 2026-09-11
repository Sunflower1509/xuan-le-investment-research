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
  }),
  "2026-09-03": Object.freeze({
    PHP: Object.freeze({
      close: 47000,
      source: "https://kbbuddywts.kbsec.com.vn/sas/kbsv-stock-data-store/stock/PHP/historical-quotes",
      reason: "CafeF lịch sử 03/09 trả 47.100; KBS và Vietcap cùng xác nhận OHLC 47.0/47.7/46.7/47.0, khối lượng 126.600, giá đóng cửa 47.000, trùng VNDIRECT."
    })
  }),
  "2026-09-04": Object.freeze({
    OIL: Object.freeze({
      close: 13700,
      source: "https://vnsignal.vn/co-phieu/oil",
      reason: "CafeF 04/09 trả 13.600; VNSignal lúc 15:19 ngày 04/09 và Investing lịch sử cùng xác nhận giá 13.700, trùng VNDIRECT."
    }),
    PHP: Object.freeze({
      close: 46500,
      source: "https://vn.investing.com/equities/port-of-hai-phong-jsc-historical-data",
      reason: "CafeF 04/09 trả 46.400; Investing lịch sử và Cophieu68 cùng xác nhận OHLC 47.3/48.0/46.0/46.5, khối lượng 151.600, giá đóng cửa 46.500, trùng VNDIRECT."
    })
  }),
  "2026-09-07": Object.freeze({
    MSR: Object.freeze({
      close: 48500,
      source: "https://vn.investing.com/equities/masan-resources-corp-historical-data",
      reason: "CafeF 07/09 trả 48.400; HNX chính thức và Investing lịch sử cùng xác nhận 48.500, trùng VNDIRECT."
    }),
    OIL: Object.freeze({
      close: 13500,
      source: "https://vn.investing.com/equities/petrovietnam-oil-historical-data",
      reason: "CafeF 07/09 trả 13.400; HNX chính thức và Investing lịch sử cùng xác nhận 13.500, trùng VNDIRECT."
    }),
    PHP: Object.freeze({
      close: 45800,
      source: "https://vn.investing.com/equities/port-of-hai-phong-jsc-historical-data",
      reason: "CafeF 07/09 trả 45.600; Investing lịch sử và VNSignal cùng xác nhận 45.800, trùng VNDIRECT."
    })
  }),
  "2026-09-08": Object.freeze({
    DRI: Object.freeze({
      close: 14700,
      source: "https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart",
      reason: "CafeF 08/09 trả 14.600; Vietcap VCI lịch sử đúng ngày xác nhận OHLC 14.3/14.8/14.2/14.7, khối lượng 1.104.800; KBS date-specific cũng xác nhận đóng cửa 14.700, trùng VNDIRECT."
    }),
    MSR: Object.freeze({
      close: 47900,
      source: "https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart",
      reason: "CafeF 08/09 trả 47.700; Vietcap VCI lịch sử đúng ngày xác nhận OHLC 48.9/48.9/47.1/47.9, khối lượng 1.948.500; KBS date-specific cũng xác nhận đóng cửa 47.900, trùng VNDIRECT."
    }),
    VGI: Object.freeze({
      close: 86200,
      source: "https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart",
      reason: "CafeF 08/09 trả 85.900; Vietcap VCI lịch sử đúng ngày xác nhận OHLC 86.4/86.5/85.6/86.2, khối lượng 98.900; KBS date-specific cũng xác nhận đóng cửa 86.200, trùng VNDIRECT."
    })
  }),
  "2026-09-10": Object.freeze({
    DRI: Object.freeze({
      close: 14700,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DRI/data_day?sdate=10-09-2026&edate=10-09-2026",
      reason: "CafeF 10/09 trả 14.600; KBS date-specific xác nhận OHLC 15.0/15.0/14.5/14.7, khối lượng 858.800 và Cophieu68 lịch sử đúng ngày ghi 14.700, trùng VNDIRECT."
    }),
    OIL: Object.freeze({
      close: 13800,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=10-09-2026&edate=10-09-2026",
      reason: "CafeF 10/09 trả 13.700; KBS date-specific xác nhận OHLC 14.0/14.1/13.6/13.8, khối lượng 1.302.700; Cophieu68 và 24HMoney lịch sử đúng ngày cùng ghi 13.800, trùng VNDIRECT."
    })
  })
  ,"2026-09-11": Object.freeze({
    DRI: Object.freeze({
      close: 14500,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DRI/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 14.400; KBS date-specific xác nhận OHLC 14.7/14.7/14.3/14.5, khối lượng 676.700, giá đóng cửa 14.500, trùng VNDIRECT."
    }),
    OIL: Object.freeze({
      close: 13800,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 13.700; KBS date-specific xác nhận OHLC 13.9/14.5/13.6/13.8, khối lượng 3.534.100; HNX sau phiên hiển thị OIL 13.800, trùng VNDIRECT."
    }),
    PHP: Object.freeze({
      close: 45500,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/PHP/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 45.400; KBS date-specific xác nhận OHLC 46.0/47.3/44.9/45.5, khối lượng 234.800, giá đóng cửa 45.500, trùng VNDIRECT."
    }),
    VGI: Object.freeze({
      close: 84000,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/VGI/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 84.100; KBS date-specific xác nhận OHLC 85.8/86.6/83.9/84.0, khối lượng 279.300, giá đóng cửa 84.000, trùng VNDIRECT."
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
  const [, , month, day] = date.match(/^(\d{4})-(\d{2})-(\d{2})$/) || [];
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

export const parseKbsDaily = (payload, date) => {
  const rows = Array.isArray(payload?.data_day) ? payload.data_day : [];
  const row = rows.find((item) => {
    const raw = item?.t ?? item?.time;
    if (raw == null) return false;
    const text = String(raw);
    if (text === date || text.startsWith(date + "T") || text.startsWith(date + " ")) return true;
    const numeric = /^\d+$/.test(text) ? Number(text) : null;
    const parsed = numeric !== null
      ? new Date(numeric < 1e12 ? numeric * 1000 : numeric)
      : new Date(text);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
  });
  if (!row) throw new Error("KBS missing row");
  const quote = validateOhlc({
    open: normalizedPrice(row.o ?? row.open),
    high: normalizedPrice(row.h ?? row.high),
    low: normalizedPrice(row.l ?? row.low),
    close: normalizedPrice(row.c ?? row.close)
  }, "KBS");
  const volume = finite(row.v ?? row.volume);
  if (!(volume >= 0)) throw new Error("KBS incomplete row");
  return { ...quote, volume: Math.round(volume) };
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
    const priceSource = "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:" + ticker + "~date:" + date + "&size=10";
    const cafeFSource = "https://cafef.vn/du-lieu/DuLieu.aspx?cat_id=1009&symbol=" + ticker;
    const match = date.match(/^\d{4}-(\d{2})-(\d{2})$/) || [];
    const month = match[1];
    const day = match[2];
    if (!month || !day) return { ok: false, ticker, error: "Invalid KBS date " + date };
    const kbsDate = day + "-" + month + "-" + date.slice(0, 4);
    const kbsSource = "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/" + ticker + "/data_day?sdate=" + kbsDate + "&edate=" + kbsDate;
    try {
      const [vndirectPayload, cafeFHtml] = await Promise.all([fetchJson(priceSource), fetchText(cafeFSource)]);
      const primary = parseVndirect(vndirectPayload, ticker, date);
      let secondary;
      let secondaryProvider;
      let closeDecision;
      let cafeFClose = null;
      try {
        secondary = parseCafeF(cafeFHtml, date);
        secondaryProvider = "CafeF";
        cafeFClose = secondary.close;
        closeDecision = secondaryCloseDecision({ ticker, date, primaryClose: primary.close, cafeFClose });
        if (!closeDecision.ok) {
          throw new Error("secondary close mismatch VNDIRECT=" + primary.close + " CafeF=" + secondary.close);
        }
      } catch (cafeFError) {
        const message = String(cafeFError?.message || cafeFError);
        if (!/CafeF missing row/i.test(message)) throw cafeFError;
        const kbsPayload = await fetchJson(kbsSource);
        secondary = parseKbsDaily(kbsPayload, date);
        secondaryProvider = "KBS";
        if (secondary.close !== primary.close) {
          throw new Error("secondary close mismatch VNDIRECT=" + primary.close + " KBS=" + secondary.close);
        }
        closeDecision = {
          ok: true,
          mode: "kbs-fallback",
          source: kbsSource,
          reason: "CafeF chưa có dòng EOD đúng ngày; KBS date-specific OHLC hợp lệ xác nhận giá đóng cửa trùng VNDIRECT."
        };
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
          cafeFClose,
          secondaryProvider,
          secondaryClose: secondary.close,
          secondaryVolume: secondary.volume,
          secondaryChangePct: secondary.changePct ?? null,
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
  const kbsFallbacks = [];
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
        secondary: quote.secondaryVolume,
        provider: quote.secondaryProvider,
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
    if (quote.closeVerificationMode === "kbs-fallback") {
      kbsFallbacks.push({
        ticker: quote.ticker,
        close: quote.close,
        source: quote.priceSourceSecondary,
        reason: quote.closeVerificationReason
      });
    }
  }

  after.meta.updated = targetDate;
  after.meta.release = targetDate;
  const matchedVolumes = tickers.length - volumeMismatches.length;
  const directCloseMatches = tickers.length - closeOverrides.length - kbsFallbacks.length;
  const mismatchText = volumeMismatches.length
    ? volumeMismatches.map((entry) => entry.ticker + ": VNDIRECT " + entry.vndirect.toLocaleString("vi-VN") + " vs " + entry.provider + " " + entry.secondary.toLocaleString("vi-VN") + " (chênh " + Math.abs(entry.diff).toLocaleString("vi-VN") + ")").join("; ")
    : "không có chênh lệch";
  const overrideText = closeOverrides.length
    ? closeOverrides.map((entry) => entry.ticker + ": CafeF " + entry.cafef.toLocaleString("vi-VN") + " khác VNDIRECT " + entry.vndirect.toLocaleString("vi-VN") + "; nguồn thứ ba xác nhận VNDIRECT (" + entry.source + ")").join("; ")
    : "không có ngoại lệ";
  const fallbackText = kbsFallbacks.length
    ? kbsFallbacks.length + "/" + tickers.length + " mã dùng KBS date-specific vì CafeF chưa có dòng EOD đúng ngày; từng dòng KBS có OHLC hợp lệ và giá đóng cửa trùng VNDIRECT"
    : "không dùng fallback KBS";
  after.meta.note = "Giá đóng cửa, biến động và khối lượng khớp lệnh của " + tickers.length + "/" + tickers.length + " mã được khóa tại phiên " + targetDate.split("-").reverse().join("/") + ". VNDIRECT Finfo là nguồn chính và từng dòng được kiểm tra tính hợp lệ OHLC/nmVolume/pctChange. Giá đóng cửa khớp trực tiếp CafeF " + directCloseMatches + "/" + tickers.length + " mã; " + fallbackText + ". " + closeOverrides.length + "/" + tickers.length + " ngoại lệ CafeF được nguồn thứ ba độc lập xác nhận trùng VNDIRECT: " + overrideText + ". Khối lượng khớp trực tiếp VNDIRECT-nguồn đối chiếu " + matchedVolumes + "/" + tickers.length + " mã; " + mismatchText + ". Website dùng nmVolume và pctChange từ VNDIRECT theo quy ước nguồn chính; fallback KBS chỉ được phép khi CafeF thiếu đúng dòng ngày mục tiêu, không được dùng để che sai khác giá. Vùng mua, fair value, target, stop, recommendation và điều kiện hành động giữ nguyên theo hồ sơ đang công bố.";

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
    kbsFallbackCount: kbsFallbacks.length,
    kbsFallbacks,
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
