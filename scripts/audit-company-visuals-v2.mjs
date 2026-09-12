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

const run = () => {
  const visuals = loadWindowData("src/data/company-visuals.js", "COMPANY_VISUALS");
  const logos = loadWindowData("src/data/company-logos.js", "COMPANY_LOGOS");
  const research = loadWindowData("src/data/research-data.js", "RESEARCH_DATA");
  const registry = JSON.parse(fs.readFileSync(path.join(root, "src/data/company-visual-candidates.json"), "utf8"));

  assert(visuals?.meta?.schema === SCHEMA, `Sai schema: ${visuals?.meta?.schema}`);
  assert(visuals?.meta?.standardVersion === "CIVS-1.0", "standardVersion phải CIVS-1.0.");
  assert(visuals?.meta?.rollout === true && visuals?.meta?.complete === true, "CIVS phải rollout=true và complete=true.");
  assert(Number(visuals?.meta?.coverageTarget) === EXPECTED, `coverageTarget phải ${EXPECTED}.`);
  assert(Number(visuals?.meta?.verifiedCount) === EXPECTED && Number(visuals?.meta?.pendingCount) === 0, "verifiedCount/pendingCount chưa hoàn tất 125/125.");
  assert(Number(visuals?.meta?.rolloutProgressPct) === 100, "rolloutProgressPct phải 100.");
  assert(registry?.meta?.schema === "civs-candidate-registry-v1", "Candidate registry sai schema.");
  assert(Number(registry?.meta?.candidateCount) === 116, "Candidate registry phải có 116 mã bổ sung.");

  const coverage = Array.isArray(research?.coverage) ? research.coverage : [];
  assert(coverage.length === EXPECTED, `Coverage Universe hiện ${coverage.length}, cần ${EXPECTED}.`);
  const coverageTickers = new Set(coverage.map((item) => String(item?.ticker || "").toUpperCase()));
  assert(coverageTickers.size === EXPECTED, "Coverage ticker bị trùng hoặc trống.");
  const logoMap = logos?.logos || {};
  assert(Object.keys(logoMap).length === EXPECTED, "COMPANY_LOGOS không đủ 125.");

  const entries = Object.values(visuals?.visuals || {});
  assert(entries.length === EXPECTED, `CIVS phải có ${EXPECTED} visual, hiện ${entries.length}.`);
  const seenTickers = new Set();
  const hashes = new Set();
  const audited = [];

  for (const entry of entries) {
    const ticker = String(entry?.ticker || "").toUpperCase();
    assert(ticker && coverageTickers.has(ticker), `${ticker || "?"}: không thuộc Coverage Universe.`);
    assert(!seenTickers.has(ticker), `${ticker}: ticker visual bị trùng.`);
    seenTickers.add(ticker);
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
      assert(b && [b.identityAccuracy,b.economicRelevance,b.sourceAuthority,b.visualQuality,b.recencyNonMisleading].every((v) => Number(v) >= 1 && Number(v) <= 2), `${ticker}: thiếu Quality Gate breakdown.`);
      assert(Object.values(b).reduce((sum, v) => sum + Number(v), 0) === Number(entry.qualityScore), `${ticker}: qualityScore không khớp breakdown.`);
    }
    audited.push({ ticker, tier: entry.sourceTier, type: entry.identityType, score: Number(entry.qualityScore), bytes: buffer.length, sha256: hash, sourceHost: sourceUrl.hostname, imageHost });
  }

  for (const ticker of coverageTickers) assert(seenTickers.has(ticker), `${ticker}: Coverage Universe thiếu company visual.`);
  assert(visuals.meta.count === EXPECTED, "meta.count phải 125.");
  assert(visuals.meta.target === `${WIDTH}x${HEIGHT}`, "meta.target sai.");
  console.log(JSON.stringify({ ok: true, schema: SCHEMA, standardVersion: "CIVS-1.0", complete: true, coverage: `${audited.length}/${EXPECTED}`, uniqueHashes: hashes.size, minScore: Math.min(...audited.map((x) => x.score)), maxScore: Math.max(...audited.map((x) => x.score)), audited: audited.sort((a,b) => a.ticker.localeCompare(b.ticker)) }, null, 2));
};

try { run(); } catch (error) { console.error(error?.stack || String(error)); process.exitCode = 1; }
