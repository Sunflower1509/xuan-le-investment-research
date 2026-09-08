#!/usr/bin/env node

import fs from "node:fs";

const scriptPath = "scripts/update-eod-market-data.mjs";
let script = fs.readFileSync(scriptPath, "utf8");

if (script.includes("export const parseKbsDaily")) {
  console.log("KBS fallback parser already present; no duplicate source patch applied.");
} else {
  const secondaryMarker = "\nexport const secondaryCloseDecision = ({ ticker, date, primaryClose, cafeFClose }) => {";
  if (!script.includes(secondaryMarker)) throw new Error("secondaryCloseDecision marker not found");

  const kbsParser = `
export const parseKbsDaily = (payload, date) => {
  const rows = Array.isArray(payload?.data_day) ? payload.data_day : [];
  const row = rows.find((item) => {
    const raw = item?.t ?? item?.time;
    if (raw == null) return false;
    const text = String(raw);
    if (text === date || text.startsWith(date + "T") || text.startsWith(date + " ")) return true;
    const numeric = /^\\d+$/.test(text) ? Number(text) : null;
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
`;
  script = script.replace(secondaryMarker, kbsParser + secondaryMarker);

  const verifyStart = script.indexOf("const verifyDate = async (coverage, date) => {");
  const verifyEnd = script.indexOf("\n\nconst immutableProjection", verifyStart);
  if (verifyStart < 0 || verifyEnd < 0) throw new Error("verifyDate boundaries not found");

  const verifyReplacement = `const verifyDate = async (coverage, date) => {
  const results = await runBatch(coverage, 5, async (item) => {
    const ticker = String(item.ticker || "").toUpperCase();
    const priceSource = "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:" + ticker + "~date:" + date + "&size=10";
    const cafeFSource = "https://cafef.vn/du-lieu/DuLieu.aspx?cat_id=1009&symbol=" + ticker;
    const match = date.match(/^\\d{4}-(\\d{2})-(\\d{2})$/) || [];
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
};`;
  script = script.slice(0, verifyStart) + verifyReplacement + script.slice(verifyEnd);

  const postStart = script.indexOf("  const after = structuredClone(before);");
  const postEnd = script.indexOf("\n\n  if (immutableProjection(before)", postStart);
  if (postStart < 0 || postEnd < 0) throw new Error("post-processing boundaries not found");

  const postReplacement = `  const after = structuredClone(before);
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
  after.meta.note = "Giá đóng cửa, biến động và khối lượng khớp lệnh của " + tickers.length + "/" + tickers.length + " mã được khóa tại phiên " + targetDate.split("-").reverse().join("/") + ". VNDIRECT Finfo là nguồn chính và từng dòng được kiểm tra tính hợp lệ OHLC/nmVolume/pctChange. Giá đóng cửa khớp trực tiếp CafeF " + directCloseMatches + "/" + tickers.length + " mã; " + fallbackText + ". " + closeOverrides.length + "/" + tickers.length + " ngoại lệ CafeF được nguồn thứ ba độc lập xác nhận trùng VNDIRECT: " + overrideText + ". Khối lượng khớp trực tiếp VNDIRECT-nguồn đối chiếu " + matchedVolumes + "/" + tickers.length + " mã; " + mismatchText + ". Website dùng nmVolume và pctChange từ VNDIRECT theo quy ước nguồn chính; fallback KBS chỉ được phép khi CafeF thiếu đúng dòng ngày mục tiêu, không được dùng để che sai khác giá. Vùng mua, fair value, target, stop, recommendation và điều kiện hành động giữ nguyên theo hồ sơ đang công bố.";`;
  script = script.slice(0, postStart) + postReplacement + script.slice(postEnd);

  const payloadNeedle = "    closeDirectMatched: directCloseMatches,\n    closeOverrides,";
  if (!script.includes(payloadNeedle)) throw new Error("payload marker not found");
  script = script.replace(payloadNeedle, "    closeDirectMatched: directCloseMatches,\n    kbsFallbackCount: kbsFallbacks.length,\n    kbsFallbacks,\n    closeOverrides,");
  fs.writeFileSync(scriptPath, script);
}

const testPath = "tests/eod-market-data.test.mjs";
let tests = fs.readFileSync(testPath, "utf8");
if (!tests.includes("parseKbsDaily")) {
  const importNeedle = 'import { isCoverageCurrent, parseCafeF, parseVndirect, secondaryCloseDecision } from "../scripts/update-eod-market-data.mjs";';
  if (!tests.includes(importNeedle)) throw new Error("test import marker not found");
  tests = tests.replace(importNeedle, 'import { isCoverageCurrent, parseCafeF, parseKbsDaily, parseVndirect, secondaryCloseDecision } from "../scripts/update-eod-market-data.mjs";');
  const insertNeedle = '\ntest("giá đóng cửa khớp CafeF được xác minh trực tiếp", () => {';
  if (!tests.includes(insertNeedle)) throw new Error("test insertion marker not found");
  const kbsTest = `
test("KBS chỉ chấp nhận đúng dòng OHLC ngày yêu cầu", () => {
  const payload = { data_day: [{ t: "2026-08-20T00:00:00", o: 10000, h: 11000, l: 9000, c: 10500, v: 123456 }] };
  assert.deepEqual(parseKbsDaily(payload, date), { open: 10000, high: 11000, low: 9000, close: 10500, volume: 123456 });
  assert.throws(() => parseKbsDaily(payload, "2026-08-21"), /missing row/);
});
`;
  tests = tests.replace(insertNeedle, kbsTest + insertNeedle);
  fs.writeFileSync(testPath, tests);
}

console.log("KBS fallback patch prepared.");
