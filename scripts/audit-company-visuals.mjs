#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCHEMA = "verified-core-asset-webp-v1";
const EXPECTED_COUNT = 9;
const EXPECTED_WIDTH = 960;
const EXPECTED_HEIGHT = 540;

const loadWindowData = (relativePath, key) => {
  const filename = path.join(root, relativePath);
  const code = fs.readFileSync(filename, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename });
  return context.window[key];
};

const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];
const hashFile = (filename) => crypto.createHash("sha256").update(fs.readFileSync(filename)).digest("hex");
const identifyDimensions = (filename) => {
  const output = execFileSync("identify", ["-format", "%w %h", filename], { encoding: "utf8" }).trim();
  const [width, height] = output.split(/\s+/).map(Number);
  return { width, height };
};
const hostMatchesDomain = (host, domain) => host === domain || host.endsWith(`.${domain}`);
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const run = () => {
  const visuals = loadWindowData("src/data/company-visuals.js", "COMPANY_VISUALS");
  const logos = loadWindowData("src/data/company-logos.js", "COMPANY_LOGOS");
  const research = loadWindowData("src/data/research-data.js", "RESEARCH_DATA");

  assert(visuals?.meta?.schema === SCHEMA, `Sai schema company visual: ${visuals?.meta?.schema || "trống"}`);
  assert(visuals?.meta?.pilot === true, "Company visual audit hiện chỉ cho phép pilot=true.");
  const entries = Object.values(visuals?.visuals || {});
  assert(entries.length === EXPECTED_COUNT, `Pilot phải có ${EXPECTED_COUNT} mã, hiện có ${entries.length}.`);

  const valuationReports = (research?.reports || []).filter((report) => report?.reportType !== "trading");
  const reportByTicker = new Map(valuationReports.map((report) => [String(report.ticker || "").toUpperCase(), report]));
  const logoMap = logos?.logos || {};
  const sectors = new Set();
  const hashes = new Set();
  const sourceImages = new Set();
  const audited = [];

  for (const entry of entries) {
    const ticker = String(entry.ticker || "").toUpperCase();
    assert(ticker, "Có company visual thiếu ticker.");
    assert(entry.kind === "company-asset" && entry.verified === true, `${ticker}: visual phải là verified company-asset.`);
    assert(reportByTicker.has(ticker), `${ticker}: không có hồ sơ định giá trong RESEARCH_DATA.`);
    assert(logoMap[ticker]?.path, `${ticker}: thiếu logo đã xác minh trong COMPANY_LOGOS.`);

    const report = reportByTicker.get(ticker);
    assert(report.sector === entry.sector, `${ticker}: sector visual (${entry.sector}) khác report (${report.sector}).`);
    sectors.add(entry.sector);

    for (const [label, value] of [["sourceUrl", entry.sourceUrl], ["sourceImageUrl", entry.sourceImageUrl]]) {
      let url;
      try { url = new URL(value); } catch { throw new Error(`${ticker}: ${label} không phải URL hợp lệ.`); }
      assert(url.protocol === "https:", `${ticker}: ${label} phải dùng HTTPS.`);
    }

    const sourceHost = new URL(entry.sourceUrl).hostname.toLowerCase();
    const imageHost = new URL(entry.sourceImageUrl).hostname.toLowerCase();
    const officialDomain = String(entry.officialDomain || "").toLowerCase();
    assert(officialDomain && hostMatchesDomain(sourceHost, officialDomain), `${ticker}: sourceUrl không thuộc officialDomain.`);
    const allowedImageHosts = new Set((entry.allowedImageHosts || []).map((host) => String(host).toLowerCase()));
    assert(hostMatchesDomain(imageHost, officialDomain) || allowedImageHosts.has(imageHost), `${ticker}: sourceImageUrl host chưa được whitelist.`);
    assert(!/(unsplash|pexels|pixabay|shutterstock|alamy|istock|freepik|midjourney|openai)/i.test(entry.sourceImageUrl), `${ticker}: phát hiện nguồn stock/generative bị cấm.`);
    assert(!sourceImages.has(entry.sourceImageUrl), `${ticker}: trùng sourceImageUrl với visual khác.`);
    sourceImages.add(entry.sourceImageUrl);

    const assetRelative = localPath(entry.src);
    assert(/^assets\/images\/company-visuals\/[a-z0-9]+\.webp$/.test(assetRelative), `${ticker}: đường dẫn asset không đúng chuẩn: ${assetRelative}`);
    const assetPath = path.join(root, assetRelative);
    assert(fs.existsSync(assetPath), `${ticker}: thiếu WebP local ${assetRelative}.`);
    const buffer = fs.readFileSync(assetPath);
    assert(buffer.length > 10_000, `${ticker}: WebP quá nhỏ/bất thường (${buffer.length} bytes).`);
    assert(buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP", `${ticker}: file không phải WebP hợp lệ.`);

    const dimensions = identifyDimensions(assetPath);
    assert(dimensions.width === EXPECTED_WIDTH && dimensions.height === EXPECTED_HEIGHT, `${ticker}: sai kích thước ${dimensions.width}x${dimensions.height}.`);
    assert(entry.width === EXPECTED_WIDTH && entry.height === EXPECTED_HEIGHT, `${ticker}: metadata kích thước chưa đồng bộ.`);
    assert(Number(entry.sourceWidth) >= 640 && Number(entry.sourceHeight) >= 360, `${ticker}: ảnh nguồn dưới chuẩn tối thiểu.`);

    const hash = hashFile(assetPath);
    assert(entry.sha256 === hash, `${ticker}: SHA-256 metadata không khớp file.`);
    assert(String(entry.src).includes(`?v=${hash.slice(0, 12)}`), `${ticker}: version token không khớp SHA-256.`);
    assert(!hashes.has(hash), `${ticker}: nội dung ảnh trùng một company visual khác.`);
    hashes.add(hash);

    audited.push({ ticker, sector: entry.sector, sourceHost, imageHost, dimensions, bytes: buffer.length, sha256: hash });
  }

  assert(sectors.size === EXPECTED_COUNT, `Pilot phải đại diện ${EXPECTED_COUNT} nhóm ngành khác nhau, hiện chỉ có ${sectors.size}.`);
  assert(visuals.meta.count === EXPECTED_COUNT, "meta.count không khớp số visual thực tế.");
  assert(visuals.meta.target === `${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`, "meta.target chưa được sync đúng.");

  console.log(JSON.stringify({ ok: true, schema: SCHEMA, count: audited.length, distinctSectors: sectors.size, audited }, null, 2));
};

try {
  run();
} catch (error) {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
}
