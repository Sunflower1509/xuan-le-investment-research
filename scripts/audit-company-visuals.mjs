#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCHEMA = "verified-core-asset-webp-v1";
const EXPECTED_COVERAGE_TARGET = 125;
const EXPECTED_WIDTH = 960;
const EXPECTED_HEIGHT = 540;
const MIN_QUALITY_SCORE = 8;

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
  assert(visuals?.meta?.rollout === true, "Company visual phải ở trạng thái rollout=true.");
  assert(Number(visuals?.meta?.coverageTarget) === EXPECTED_COVERAGE_TARGET, `coverageTarget phải là ${EXPECTED_COVERAGE_TARGET}.`);
  assert(String(visuals?.meta?.standardVersion || "") === "CIVS-1.0", "standardVersion phải là CIVS-1.0.");

  const coverage = Array.isArray(research?.coverage) ? research.coverage : [];
  assert(coverage.length === EXPECTED_COVERAGE_TARGET, `Coverage Universe phải có ${EXPECTED_COVERAGE_TARGET} mã, hiện có ${coverage.length}.`);
  const coverageByTicker = new Map(coverage.map((item) => [String(item?.ticker || "").toUpperCase(), item]));

  const entries = Object.values(visuals?.visuals || {});
  assert(entries.length >= 1 && entries.length <= EXPECTED_COVERAGE_TARGET, `Số company visual không hợp lệ: ${entries.length}.`);

  const logoMap = logos?.logos || {};
  const tickers = new Set();
  const hashes = new Set();
  const sourceImages = new Set();
  const audited = [];

  for (const entry of entries) {
    const ticker = String(entry.ticker || "").toUpperCase();
    assert(ticker, "Có company visual thiếu ticker.");
    assert(!tickers.has(ticker), `${ticker}: ticker visual bị trùng.`);
    tickers.add(ticker);

    assert(entry.kind === "company-asset" && entry.verified === true, `${ticker}: visual phải là verified company-asset.`);
    assert(coverageByTicker.has(ticker), `${ticker}: không thuộc Coverage Universe.`);
    assert(logoMap[ticker]?.path, `${ticker}: thiếu logo đã xác minh trong COMPANY_LOGOS.`);
    assert(["A", "B", "C"].includes(String(entry.sourceTier || "")), `${ticker}: sourceTier phải là A/B/C.`);
    assert(String(entry.identityType || "").trim().length >= 3, `${ticker}: thiếu identityType.`);
    assert(Number(entry.qualityScore) >= MIN_QUALITY_SCORE && Number(entry.qualityScore) <= 10, `${ticker}: qualityScore phải nằm trong ${MIN_QUALITY_SCORE}–10.`);

    const coverageItem = coverageByTicker.get(ticker);
    if (coverageItem?.sector && entry.sector) assert(coverageItem.sector === entry.sector, `${ticker}: sector visual (${entry.sector}) khác coverage (${coverageItem.sector}).`);

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

    audited.push({ ticker, sector: entry.sector, sourceTier: entry.sourceTier, identityType: entry.identityType, qualityScore: Number(entry.qualityScore), sourceHost, imageHost, dimensions, bytes: buffer.length, sha256: hash });
  }

  const missing = [...coverageByTicker.keys()].filter((ticker) => !tickers.has(ticker)).sort();
  assert(visuals.meta.count === entries.length, "meta.count không khớp số visual thực tế.");
  assert(visuals.meta.verifiedCount === entries.length, "meta.verifiedCount không khớp số visual thực tế.");
  assert(visuals.meta.pendingCount === missing.length, "meta.pendingCount không khớp số mã chưa chuẩn hóa.");
  assert(visuals.meta.target === `${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`, "meta.target chưa được sync đúng.");

  console.log(JSON.stringify({
    ok: true,
    schema: SCHEMA,
    standardVersion: visuals.meta.standardVersion,
    coverageTarget: EXPECTED_COVERAGE_TARGET,
    verifiedCount: audited.length,
    pendingCount: missing.length,
    rolloutProgressPct: Number(((audited.length / EXPECTED_COVERAGE_TARGET) * 100).toFixed(1)),
    missingTickers: missing,
    audited
  }, null, 2));
};

try {
  run();
} catch (error) {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
}
