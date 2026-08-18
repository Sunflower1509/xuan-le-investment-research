#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { projectTradeLedger } from "../src/scripts/trade-ledger.mjs";
import { parseActionTrigger } from "../src/scripts/action-trigger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://sunflower1509.github.io/xuan-le-investment-research/";
const errors = [];

const fail = (scope, message) => errors.push(`${scope}: ${message}`);
const readText = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
const localPath = (reference) => String(reference || "").split(/[?#]/, 1)[0];
const exists = (relativePath) => fs.existsSync(path.join(root, localPath(relativePath)));
const isPositive = (value) => Number.isFinite(value) && value > 0;
const isHttps = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};
const isIsoDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day;
};
const loadWindowData = (relativePath, key) => {
  const context = { window: {} };
  vm.runInNewContext(readText(relativePath), context, { filename: relativePath });
  return context.window[key];
};
const assertUnique = (values, scope) => {
  const seen = new Set();
  values.forEach((value) => {
    if (!value || seen.has(value)) fail(scope, `giá trị trống hoặc trùng lặp: ${String(value)}`);
    seen.add(value);
  });
};
const listFiles = (relativeDir, extension) => fs.readdirSync(path.join(root, relativeDir), { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(extension))
  .map((entry) => path.posix.join(relativeDir, entry.name));
const validatePdf = (relativePath, scope) => {
  if (!exists(relativePath)) {
    fail(scope, `thiếu PDF ${relativePath}`);
    return;
  }
  const signature = fs.readFileSync(path.join(root, localPath(relativePath))).subarray(0, 5).toString("ascii");
  if (signature !== "%PDF-") fail(scope, `tệp không có chữ ký PDF hợp lệ: ${relativePath}`);
};
const validateWebp = (relativePath, scope) => {
  if (!exists(relativePath)) {
    fail(scope, `thiếu ảnh ${relativePath}`);
    return;
  }
  const data = fs.readFileSync(path.join(root, localPath(relativePath)));
  if (data.length < 12 || data.subarray(0, 4).toString("ascii") !== "RIFF" || data.subarray(8, 12).toString("ascii") !== "WEBP") {
    fail(scope, `tệp không có chữ ký WebP hợp lệ: ${relativePath}`);
  }
};

let research;
let daily;
let ledger;
try {
  research = loadWindowData("src/data/research-data.js", "RESEARCH_DATA");
  daily = loadWindowData("src/data/daily-insights.js", "DAILY_MARKET_INSIGHTS");
  ledger = JSON.parse(readText("src/data/trade-ledger.json"));
} catch (error) {
  fail("Dữ liệu", error.message);
}

const referencedPdfs = new Set();
const referencedReportImages = new Set();

if (!research || typeof research !== "object") {
  fail("Research", "không đọc được RESEARCH_DATA");
} else {
  if (!isIsoDate(research.meta?.updated)) fail("Research meta", "updated phải là ngày ISO hợp lệ");
  if (!isIsoDate(research.meta?.release)) fail("Research meta", "release phải là ngày ISO hợp lệ");
  if (!Array.isArray(research.reports) || !research.reports.length) fail("Research", "danh sách báo cáo đang trống");
  if (!Array.isArray(research.coverage) || !research.coverage.length) fail("Research", "danh sách coverage đang trống");

  const reports = Array.isArray(research.reports) ? research.reports : [];
  const coverage = Array.isArray(research.coverage) ? research.coverage : [];
  assertUnique(reports.map((report) => report.id), "Report id");
  assertUnique(reports.map((report) => `${report.ticker}:${report.reportType || "valuation"}:${report.date}`), "Report edition");
  assertUnique(coverage.map((item) => item.ticker), "Coverage ticker");
  const reportIds = new Set(reports.map((report) => report.id));

  reports.forEach((report) => {
    const scope = `Báo cáo ${report.ticker || report.id || "không rõ"}`;
    if (!report.id || !report.ticker || !report.company || !isIsoDate(report.date)) fail(scope, "thiếu id, ticker, doanh nghiệp hoặc ngày hợp lệ");
    if (!report.file) {
      fail(scope, "thiếu đường dẫn PDF");
    } else {
      const pdf = localPath(report.file);
      referencedPdfs.add(pdf);
      validatePdf(pdf, scope);
    }
    if (!report.visual?.src || !report.visual?.alt) {
      fail(scope, "thiếu ảnh bìa hoặc alt text");
    } else {
      const image = localPath(report.visual.src);
      referencedReportImages.add(image);
      validateWebp(image, scope);
    }
  });

  coverage.forEach((item) => {
    const scope = `Coverage ${item.ticker || "không rõ"}`;
    if (!item.ticker || !item.company || !item.exchange || !item.sector) fail(scope, "thiếu trường nhận diện bắt buộc");
    if (!isPositive(item.close)) fail(scope, "giá đóng cửa phải lớn hơn 0");
    if (!isIsoDate(item.priceDate) || item.priceDate !== research.meta?.updated) fail(scope, `priceDate phải trùng meta.updated (${research.meta?.updated})`);
    if (!isHttps(item.priceSource)) fail(scope, "priceSource phải là HTTPS hợp lệ");
    if (item.priceSourceSecondary && !isHttps(item.priceSourceSecondary)) fail(scope, "priceSourceSecondary phải là HTTPS hợp lệ");
    if (item.reportId && !reportIds.has(item.reportId)) fail(scope, `reportId không tồn tại: ${item.reportId}`);
    if (item.action?.eligibility === "active") {
      if (!parseActionTrigger(item.action)) fail(scope, "điều kiện kích hoạt active không hợp lệ theo shared Trigger Engine");
      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của điều kiện active không hợp lệ");
    }
  });

  if (ledger) {
    const projection = projectTradeLedger(ledger, coverage);
    projection.issues.forEach((entry) => fail("Trade ledger", `${entry.code}: ${entry.message}`));
  }
}

if (!daily || typeof daily !== "object") {
  fail("Nhận định ngày", "không đọc được DAILY_MARKET_INSIGHTS");
} else {
  if (!isIsoDate(daily.updated)) fail("Nhận định ngày", "updated phải là ngày ISO hợp lệ");
  const entries = Array.isArray(daily.entries) ? daily.entries : [];
  if (!entries.length) fail("Nhận định ngày", "danh sách nhận định đang trống");
  assertUnique(entries.map((entry) => entry.id), "Daily id");
  assertUnique(entries.map((entry) => entry.date), "Daily date");
  entries.forEach((entry) => {
    const scope = `Nhận định ${entry.date || entry.id || "không rõ"}`;
    if (!isIsoDate(entry.date) || !entry.title || !entry.thesis) fail(scope, "thiếu ngày, tiêu đề hoặc luận điểm chính");
    if (!Array.isArray(entry.sources) || !entry.sources.length) fail(scope, "phải có ít nhất một nguồn");
    (entry.sources || []).forEach((source) => {
      if (isHttps(source?.url)) return;
      const sourcePath = localPath(source?.url);
      if (!sourcePath || !exists(sourcePath)) {
        fail(scope, `nguồn không phải HTTPS hoặc tệp cục bộ không tồn tại: ${source?.url || "trống"}`);
        return;
      }
      if (sourcePath.toLowerCase().endsWith(".pdf")) {
        referencedPdfs.add(sourcePath);
        validatePdf(sourcePath, scope);
      }
    });
  });
}

listFiles("reports", ".pdf").forEach((file) => {
  if (!referencedPdfs.has(file)) fail("Artifact", `PDF không được dữ liệu nào tham chiếu: ${file}`);
});
listFiles("assets/images/reports", ".webp").forEach((file) => {
  if (!referencedReportImages.has(file)) fail("Artifact", `ảnh báo cáo không được dữ liệu nào tham chiếu: ${file}`);
});

let html = "";
let css = "";
try {
  html = readText("index.html");
  css = readText("assets/css/site.min.css");
  if (!css.trim()) fail("Build", "assets/css/site.min.css đang trống");
  if (!readText("assets/js/site.min.js").trim()) fail("Build", "assets/js/site.min.js đang trống");
} catch (error) {
  fail("Build", error.message);
}

if (html) {
  const ids = [...html.matchAll(/\bid=(['"])([^'"]+)\1/g)].map((match) => match[2]);
  assertUnique(ids, "HTML id");
  const idSet = new Set(ids);
  [...html.matchAll(/\bhref=(['"])#([^'"]+)\1/g)].forEach((match) => {
    if (!idSet.has(match[2])) fail("HTML anchor", `không tìm thấy đích #${match[2]}`);
  });

  const sectionOrder = [...html.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)].map((match) => match[2]);
  const expectedOrder = ["overview", "daily-market", "position-ledger", "action-radar", "research"];
  if (sectionOrder.join(",") !== expectedOrder.join(",")) {
    fail("Bố cục", `thứ tự section đã đổi: ${sectionOrder.join(" → ")}`);
  }

  const canonical = html.match(/<link\b[^>]*\brel=(['"])canonical\1[^>]*\bhref=(['"])([^'"]+)\2[^>]*>/i)?.[3]
    || html.match(/<link\b[^>]*\bhref=(['"])([^'"]+)\1[^>]*\brel=(['"])canonical\3[^>]*>/i)?.[2];
  if (canonical !== siteUrl) fail("SEO", `canonical phải là ${siteUrl}`);
  if (!html.includes(`<meta property="og:url" content="${siteUrl}">`)) fail("SEO", "og:url thiếu hoặc không khớp canonical");

  const preloadTag = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => match[0])
    .find((tag) => /\brel=(['"])preload\1/i.test(tag) && /\bas=(['"])image\1/i.test(tag));
  const preloadHref = preloadTag?.match(/\bhref=(['"])([^'"]+)\1/i)?.[2];
  const cssHeroPath = css.match(/url\((['"]?)([^)'"\s]*advisor-banner-3d-v2\.webp(?:\?[^)'"\s]*)?)\1\)/i)?.[2];
  if (!preloadHref || !cssHeroPath) {
    fail("Hero preload", "không tìm thấy preload hoặc URL nền hero");
  } else {
    const preloadUrl = new URL(preloadHref, siteUrl).href;
    const cssUrl = new URL(cssHeroPath, `${siteUrl}assets/css/site.min.css`).href;
    if (preloadUrl !== cssUrl) fail("Hero preload", `URL preload (${preloadUrl}) không khớp CSS (${cssUrl})`);
  }
}

try {
  const robots = readText("robots.txt");
  const sitemap = readText("sitemap.xml");
  if (!robots.includes(`Sitemap: ${siteUrl}sitemap.xml`)) fail("SEO", "robots.txt chưa khai báo sitemap chuẩn");
  if (!sitemap.includes(`<loc>${siteUrl}</loc>`)) fail("SEO", "sitemap.xml chưa khai báo URL chính");
} catch (error) {
  fail("SEO", error.message);
}

if (errors.length) {
  console.error(`Site audit failed (${errors.length} lỗi):`);
  errors.forEach((message) => console.error(`- ${message}`));
  process.exitCode = 1;
} else {
  console.log(`Site audit passed: ${research.reports.length} báo cáo, ${research.coverage.length} mã, ${daily.entries.length} nhận định, ${ledger.events.length} sự kiện vị thế.`);
}
