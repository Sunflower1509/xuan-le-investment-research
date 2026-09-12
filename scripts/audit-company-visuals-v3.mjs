#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCHEMA = "verified-core-asset-webp-v1";
const EXPECTED = 125;
const WIDTH = 960;
const HEIGHT = 540;
const MIN_SCORE = 8;
const STOCK_RE = /(unsplash|pexels|pixabay|shutterstock|alamy|istock|freepik|midjourney|openai)/i;
const REQUIRE_COMPLETE = process.env.CIVS_REQUIRE_COMPLETE === "1";

const loadWindowData = (relativePath, key) => {
  const filename = path.join(root, relativePath);
  const code = fs.readFileSync(filename, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename });
  return context.window[key];
};
const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];
const hashFile = (filename) => crypto.createHash("sha256").update(fs.readFileSync(filename)).digest("hex");
const dimensions = (filename) => {
  const [width, height] = execFileSync("identify", ["-format", "%w %h", filename], { encoding: "utf8" }).trim().split(/\s+/).map(Number);
  return { width, height };
};
const hostMatches = (host, domain) => host === domain || host.endsWith(`.${domain}`);
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const auditPublished = (entry, logoMap, coverageTickers, hashes) => {
  const ticker = String(entry?.ticker || "").toUpperCase();
  assert(ticker && coverageTickers.has(ticker), `${ticker || "?"}: không thuộc Coverage Universe.`);
  assert(logoMap[ticker]?.path, `${ticker}: thiếu logo local.`);
  assert(entry.kind === "company-asset" && entry.verified === true, `${ticker}: phải verified company-asset.`);
  assert(["A", "B", "C"].includes(String(entry.sourceTier || "")), `${ticker}: sourceTier không hợp lệ.`);
  assert(String(entry.identityType || "").length >= 3, `${ticker}: thiếu identityType.`);
  assert(Number(entry.qualityScore) >= MIN_SCORE && Number(entry.qualityScore) <= 10, `${ticker}: qualityScore ${entry.qualityScore} ngoài 8–10.`);
  assert(entry.sourceUrl && entry.sourceImageUrl, `${ticker}: thiếu sourceUrl/sourceImageUrl.`);
  assert(!STOCK_RE.test(entry.sourceImageUrl), `${ticker}: phát hiện nguồn stock/generative.`);

  let sourceUrl, imageUrl;
  try { sourceUrl = new URL(entry.sourceUrl); imageUrl = new URL(entry.sourceImageUrl); }
  catch { throw new Error(`${ticker}: URL nguồn không hợp lệ.`); }
  assert(sourceUrl.protocol === "https:" && imageUrl.protocol === "https:", `${ticker}: URL nguồn phải HTTPS.`);
  const officialDomain = String(entry.officialDomain || "").toLowerCase();
  assert(officialDomain && hostMatches(sourceUrl.hostname.toLowerCase(), officialDomain), `${ticker}: sourceUrl ngoài officialDomain ${officialDomain}.`);
  const imageHost = imageUrl.hostname.toLowerCase();
  const allowed = new Set((entry.allowedImageHosts || []).map((host) => String(host).toLowerCase()));
  assert(hostMatches(imageHost, officialDomain) || allowed.has(imageHost), `${ticker}: image host ${imageHost} chưa whitelist.`);
  if (!hostMatches(imageHost, officialDomain)) assert(entry.embeddedImageHostVerified === true || entry.sourceDiscovery?.resolvedFromOfficialPage === true, `${ticker}: external CDN thiếu provenance official-page.`);

  const assetRelative = localPath(entry.src);
  assert(/^assets\/images\/company-visuals\/[a-z0-9]+\.webp$/.test(assetRelative), `${ticker}: asset path sai ${assetRelative}.`);
  const assetPath = path.join(root, assetRelative);
  assert(fs.existsSync(assetPath), `${ticker}: thiếu asset ${assetRelative}.`);
  const buffer = fs.readFileSync(assetPath);
  assert(buffer.length > 10_000, `${ticker}: WebP quá nhỏ (${buffer.length} bytes).`);
  assert(buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP", `${ticker}: asset không phải WebP.`);
  const size = dimensions(assetPath);
  assert(size.width === WIDTH && size.height === HEIGHT, `${ticker}: asset ${size.width}x${size.height}, cần ${WIDTH}x${HEIGHT}.`);
  assert(Number(entry.width) === WIDTH && Number(entry.height) === HEIGHT, `${ticker}: metadata output size sai.`);
  assert(Number(entry.sourceWidth) >= 640 && Number(entry.sourceHeight) >= 360, `${ticker}: source dimensions dưới chuẩn.`);
  const hash = hashFile(assetPath);
  assert(hash === entry.sha256, `${ticker}: SHA metadata không khớp.`);
  assert(String(entry.src).includes(`?v=${hash.slice(0, 12)}`), `${ticker}: cache token không khớp hash.`);
  assert(!hashes.has(hash), `${ticker}: visual trùng nội dung với mã khác.`);
  hashes.add(hash);

  if (entry.sourceDiscovery?.type === "hero-auto") {
    assert(entry.sourceDiscovery?.resolvedFromOfficialPage === true, `${ticker}: hero-auto chưa xác nhận embedded provenance.`);
    const b = entry.sourceDiscovery?.qualityBreakdown;
    assert(b && [b.identityAccuracy, b.economicRelevance, b.sourceAuthority, b.visualQuality, b.recencyNonMisleading].every((v) => Number(v) >= 1 && Number(v) <= 2), `${ticker}: thiếu Quality Gate breakdown.`);
    assert(Object.values(b).reduce((sum, v) => sum + Number(v), 0) === Number(entry.qualityScore), `${ticker}: qualityScore không khớp breakdown.`);
  }

  return { ticker, tier: entry.sourceTier, type: entry.identityType, score: Number(entry.qualityScore), bytes: buffer.length, sha256: hash, sourceHost: sourceUrl.hostname, imageHost };
};

const auditPending = (entry, logoMap, coverageTickers) => {
  const ticker = String(entry?.ticker || "").toUpperCase();
  assert(ticker && coverageTickers.has(ticker), `${ticker || "?"}: pending visual không thuộc Coverage Universe.`);
  assert(logoMap[ticker]?.path, `${ticker}: pending visual thiếu logo local.`);
  assert(entry.kind === "company-asset", `${ticker}: pending kind phải company-asset.`);
  assert(entry.verified !== true, `${ticker}: pending visual không được verified=true.`);
  assert(!entry.src && !entry.sha256, `${ticker}: pending visual không được publish asset/hash.`);
  assert(/^https:\/\//.test(String(entry.sourceUrl || "")), `${ticker}: pending sourceUrl phải HTTPS.`);
  assert(["A", "B", "C"].includes(String(entry.sourceTier || "")), `${ticker}: pending sourceTier không hợp lệ.`);
  assert(String(entry.identityType || "").length >= 3, `${ticker}: pending thiếu identityType.`);
  return ticker;
};

const run = () => {
  const visuals = loadWindowData("src/data/company-visuals.js", "COMPANY_VISUALS");
  const logos = loadWindowData("src/data/company-logos.js", "COMPANY_LOGOS");
  const research = loadWindowData("src/data/research-data.js", "RESEARCH_DATA");
  const registry = JSON.parse(fs.readFileSync(path.join(root, "src/data/company-visual-candidates.json"), "utf8"));

  assert(visuals?.meta?.schema === SCHEMA, `Sai schema: ${visuals?.meta?.schema}`);
  assert(visuals?.meta?.standardVersion === "CIVS-1.0", "standardVersion phải CIVS-1.0.");
  assert(visuals?.meta?.rollout === true, "CIVS phải rollout=true.");
  assert(Number(visuals?.meta?.coverageTarget) === EXPECTED, `coverageTarget phải ${EXPECTED}.`);
  assert(registry?.meta?.schema === "civs-candidate-registry-v1", "Candidate registry sai schema.");
  assert(Number(registry?.meta?.candidateCount) === 116, "Candidate registry phải có 116 mã bổ sung.");

  const coverage = Array.isArray(research?.coverage) ? research.coverage : [];
  assert(coverage.length === EXPECTED, `Coverage Universe hiện ${coverage.length}, cần ${EXPECTED}.`);
  const coverageTickers = new Set(coverage.map((item) => String(item?.ticker || "").toUpperCase()));
  assert(coverageTickers.size === EXPECTED, "Coverage ticker bị trùng hoặc trống.");
  const logoMap = logos?.logos || {};
  assert(Object.keys(logoMap).length === EXPECTED, "COMPANY_LOGOS không đủ 125.");

  const entries = Object.values(visuals?.visuals || {});
  assert(entries.length === EXPECTED, `CIVS candidate set phải có ${EXPECTED} mã sau sync, hiện ${entries.length}.`);
  const seenTickers = new Set();
  const hashes = new Set();
  const audited = [];
  const pending = [];

  for (const entry of entries) {
    const ticker = String(entry?.ticker || "").toUpperCase();
    assert(!seenTickers.has(ticker), `${ticker}: ticker visual bị trùng.`);
    seenTickers.add(ticker);
    if (entry.verified === true) audited.push(auditPublished(entry, logoMap, coverageTickers, hashes));
    else pending.push(auditPending(entry, logoMap, coverageTickers));
  }

  for (const ticker of coverageTickers) assert(seenTickers.has(ticker), `${ticker}: Coverage Universe thiếu CIVS candidate.`);
  assert(Number(visuals.meta.verifiedCount) === audited.length, `verifiedCount ${visuals.meta.verifiedCount} không khớp ${audited.length}.`);
  assert(Number(visuals.meta.pendingCount) === pending.length, `pendingCount ${visuals.meta.pendingCount} không khớp ${pending.length}.`);
  assert(Number(visuals.meta.count) === audited.length, `meta.count phải bằng số visual published ${audited.length}.`);
  assert(Number(visuals.meta.candidateCount || EXPECTED) === EXPECTED, "meta.candidateCount phải 125.");
  assert(visuals.meta.target === `${WIDTH}x${HEIGHT}`, "meta.target sai.");
  const expectedProgress = Number(((audited.length / EXPECTED) * 100).toFixed(1));
  assert(Number(visuals.meta.rolloutProgressPct) === expectedProgress, `rolloutProgressPct phải ${expectedProgress}.`);

  const complete = audited.length === EXPECTED && pending.length === 0;
  assert(Boolean(visuals.meta.complete) === complete, `meta.complete không khớp trạng thái ${audited.length}/${EXPECTED}.`);
  if (REQUIRE_COMPLETE) assert(complete, `CIVS_REQUIRE_COMPLETE=1 nhưng mới đạt ${audited.length}/${EXPECTED}.`);
  if (complete) assert(hashes.size === EXPECTED, "125/125 complete phải có 125 unique hashes.");

  console.log(JSON.stringify({
    ok: true,
    schema: SCHEMA,
    standardVersion: "CIVS-1.0",
    complete,
    coverage: `${audited.length}/${EXPECTED}`,
    pendingCount: pending.length,
    pendingTickers: pending.sort(),
    uniqueHashes: hashes.size,
    minScore: audited.length ? Math.min(...audited.map((item) => item.score)) : null,
    maxScore: audited.length ? Math.max(...audited.map((item) => item.score)) : null
  }, null, 2));
};

try { run(); } catch (error) { console.error(error?.stack || String(error)); process.exitCode = 1; }
