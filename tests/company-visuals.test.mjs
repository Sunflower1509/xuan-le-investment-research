import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const loadWindowData = (relativePath, key) => {
  const filename = path.join(root, relativePath);
  const code = fs.readFileSync(filename, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename });
  return context.window[key];
};

const visuals = loadWindowData("src/data/company-visuals.js", "COMPANY_VISUALS");
const research = loadWindowData("src/data/research-data.js", "RESEARCH_DATA");
const registry = JSON.parse(fs.readFileSync(path.join(root, "src/data/company-visual-candidates.json"), "utf8"));
const baseline = ["DXP", "DHC", "GAS", "FPT", "HPG", "VHM", "BID", "DBC", "FRT"];

test("CIVS rollout is structurally capable of complete 125-code coverage", () => {
  assert.equal(visuals.meta.schema, "verified-core-asset-webp-v1");
  assert.equal(visuals.meta.standardVersion, "CIVS-1.0");
  assert.equal(visuals.meta.rollout, true);
  assert.equal(visuals.meta.coverageTarget, 125);
  assert.equal(research.coverage.length, 125);
  assert.equal(registry.meta.schema, "civs-candidate-registry-v1");
  assert.equal(registry.meta.candidateCount, 116);
  assert.equal(registry.candidates.length, 116);
  const registryTickers = new Set(registry.candidates.map((item) => item.ticker));
  assert.equal(registryTickers.size, 116);
  for (const ticker of baseline) assert.ok(visuals.visuals[ticker], `${ticker} baseline visual must remain present`);
  const union = new Set([...Object.keys(visuals.visuals), ...registryTickers]);
  assert.equal(union.size, 125, "baseline visuals + candidate registry must cover exactly 125 unique tickers");
  for (const item of registry.candidates) {
    assert.match(item.sourceUrl, /^https:\/\//, `${item.ticker} sourceUrl must be HTTPS`);
    assert.ok(["A", "B", "C"].includes(item.sourceTier), `${item.ticker} sourceTier must be A/B/C`);
    assert.ok(item.officialDomain && item.sourceUrl.includes(item.officialDomain), `${item.ticker} officialDomain must match sourceUrl`);
    assert.ok(Array.isArray(item.keywords) && item.keywords.length >= 3, `${item.ticker} needs economic-identity keywords`);
  }
});

test("every published visual preserves strict CIVS source and quality metadata", () => {
  const coverage = new Set(research.coverage.map((item) => item.ticker));
  for (const [ticker, item] of Object.entries(visuals.visuals)) {
    assert.equal(item.ticker, ticker);
    assert.equal(item.kind, "company-asset");
    assert.ok(coverage.has(ticker), `${ticker} must belong to Coverage Universe`);
    assert.match(item.sourceUrl, /^https:\/\//);
    assert.ok(["A", "B", "C"].includes(item.sourceTier), `${ticker} sourceTier must be A/B/C`);
    assert.ok(typeof item.identityType === "string" && item.identityType.length >= 3, `${ticker} identityType is required`);
    if (item.verified !== true) {
      assert.ok(!item.src && !item.sha256, `${ticker} pending visual must not be published`);
      continue;
    }
    assert.ok(item.sourceImageUrl?.startsWith("https://"), `${ticker} published visual needs sourceImageUrl`);
    assert.ok(Number(item.qualityScore) >= 8 && Number(item.qualityScore) <= 10, `${ticker} qualityScore must be 8–10`);
    assert.doesNotMatch(item.sourceImageUrl, /(unsplash|pexels|pixabay|shutterstock|alamy|istock|freepik|midjourney|openai)/i);
  }
});

test("DXP remains standardized to first-party port infrastructure", () => {
  const dxp = visuals.visuals.DXP;
  assert.equal(dxp.sourceUrl, "https://doanxaport.com.vn/gioi-thieu/");
  assert.equal(dxp.sourceTier, "A");
  assert.equal(dxp.identityType, "core-port-infrastructure");
  assert.ok(Number(dxp.qualityScore) >= 8);
  assert.doesNotMatch(String(dxp.sourceImageUrl || ""), /youtube|youtu\.be/i);
});

test("production bundle keeps company visuals non-invasive and limited to research cards", () => {
  const index = fs.readFileSync(path.join(root, "src/index.js"), "utf8");
  const module = fs.readFileSync(path.join(root, "src/scripts/company-visual-cards.js"), "utf8");
  assert.match(index, /data\/company-visuals\.js/);
  assert.match(index, /scripts\/company-visual-cards\.js/);
  assert.match(module, /\.report-card-v4/);
  assert.match(module, /\.report-visual-card/);
  assert.match(module, /company-visual-logo/);
  assert.match(module, /NGUỒN DN ↗/);
  assert.match(module, /MutationObserver/);
  assert.match(module, /!visual\?\.verified/);
  assert.doesNotMatch(module, /#report-dialog|report-visual-dialog/);
});

test("v3 sync and audit are resumable, 125-aware, provenance-aware and fail-safe", () => {
  const syncWrapper = fs.readFileSync(path.join(root, "scripts/sync-company-visuals.mjs"), "utf8");
  const auditWrapper = fs.readFileSync(path.join(root, "scripts/audit-company-visuals.mjs"), "utf8");
  const sync = fs.readFileSync(path.join(root, "scripts/sync-company-visuals-v3.mjs"), "utf8");
  const audit = fs.readFileSync(path.join(root, "scripts/audit-company-visuals-v3.mjs"), "utf8");
  assert.match(syncWrapper, /sync-company-visuals-v3\.mjs/);
  assert.match(auditWrapper, /audit-company-visuals-v3\.mjs/);
  assert.match(sync, /hero-auto/);
  assert.match(sync, /resolvedFromOfficialPage/);
  assert.match(sync, /qualityBreakdown/);
  assert.match(sync, /entries\.length !== 125/);
  assert.match(sync, /pendingCount/);
  assert.match(sync, /sanitizeFailedEntry/);
  assert.match(sync, /safe report-cover fallback/);
  assert.match(audit, /verifiedCount/);
  assert.match(audit, /pendingCount/);
  assert.match(audit, /external CDN thiếu provenance/);
  assert.match(audit, /candidate set phải có/);
  assert.match(audit, /CIVS_REQUIRE_COMPLETE/);
});

test("deployment still synchronizes, audits and verifies live bytes before publish", () => {
  const standard = fs.readFileSync(path.join(root, "docs/company-identity-visual-standard.md"), "utf8");
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
  assert.match(standard, /Quality Gate/i);
  assert.match(standard, /8\/10/);
  assert.match(standard, /125\/125/);
  assert.match(standard, /fail-closed/i);
  assert.match(workflow, /node scripts\/sync-company-visuals\.mjs/);
  assert.match(workflow, /node scripts\/audit-company-visuals\.mjs/);
  assert.match(workflow, /Post-deploy byte verification/);
});
