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
const baseline = ["DXP", "DHC", "GAS", "FPT", "HPG", "VHM", "BID", "DBC", "FRT"];

test("company identity visual rollout targets the full 125-code coverage universe", () => {
  assert.equal(visuals.meta.schema, "verified-core-asset-webp-v1");
  assert.equal(visuals.meta.standardVersion, "CIVS-1.0");
  assert.equal(visuals.meta.rollout, true);
  assert.equal(visuals.meta.coverageTarget, 125);
  assert.equal(research.coverage.length, 125);
  assert.ok(Object.keys(visuals.visuals).length >= baseline.length);
  assert.ok(Object.keys(visuals.visuals).length <= visuals.meta.coverageTarget);
  for (const ticker of baseline) assert.ok(visuals.visuals[ticker], `${ticker} baseline visual must remain present`);
});

test("every published company visual carries strict CIVS source and quality metadata", () => {
  const coverage = new Map(research.coverage.map((item) => [item.ticker, item]));
  for (const [ticker, item] of Object.entries(visuals.visuals)) {
    assert.equal(item.ticker, ticker);
    assert.equal(item.kind, "company-asset");
    assert.equal(item.verified, true);
    assert.ok(coverage.has(ticker), `${ticker} must belong to Coverage Universe`);
    assert.match(item.sourceUrl, /^https:\/\//);
    assert.ok(item.sourceImageUrl?.startsWith("https://") || item.sourceDiscovery, `${ticker} must have sourceImageUrl or sourceDiscovery`);
    assert.ok(["A", "B", "C"].includes(item.sourceTier), `${ticker} sourceTier must be A/B/C`);
    assert.ok(typeof item.identityType === "string" && item.identityType.length >= 3, `${ticker} identityType is required`);
    assert.ok(Number(item.qualityScore) >= 8 && Number(item.qualityScore) <= 10, `${ticker} qualityScore must be 8–10`);
    if (item.sourceImageUrl) assert.doesNotMatch(item.sourceImageUrl, /(unsplash|pexels|pixabay|shutterstock|alamy|istock|freepik|midjourney|openai)/i);
  }
});

test("DXP no longer relies on a video thumbnail and resolves a first-party infrastructure image", () => {
  const dxp = visuals.visuals.DXP;
  assert.equal(dxp.sourceUrl, "https://doanxaport.com.vn/gioi-thieu/");
  assert.equal(dxp.sourceDiscovery?.type, "img-alt");
  assert.equal(dxp.sourceDiscovery?.value, "Cơ sở hạ tầng");
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
  assert.doesNotMatch(module, /#report-dialog|report-visual-dialog/);
});

test("sync and audit scripts are rollout-aware, fail-closed and support official-page discovery", () => {
  const sync = fs.readFileSync(path.join(root, "scripts/sync-company-visuals.mjs"), "utf8");
  const audit = fs.readFileSync(path.join(root, "scripts/audit-company-visuals.mjs"), "utf8");
  assert.match(sync, /sourceDiscovery/);
  assert.match(sync, /img-alt/);
  assert.match(sync, /og:image/);
  assert.match(sync, /qualityScore/);
  assert.match(sync, /coverageTarget/);
  assert.doesNotMatch(sync, /entries\.length !== 9/);
  assert.match(audit, /Coverage Universe/);
  assert.match(audit, /missingTickers/);
  assert.match(audit, /MIN_QUALITY_SCORE/);
  assert.doesNotMatch(audit, /EXPECTED_COUNT = 9/);
});

test("CIVS standard is documented and deployment still audits before publishing", () => {
  const standard = fs.readFileSync(path.join(root, "docs/company-identity-visual-standard.md"), "utf8");
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
  assert.match(standard, /Quality Gate/i);
  assert.match(standard, />= 8\/10|8\/10/);
  assert.match(standard, /125\/125/);
  assert.match(standard, /fail-closed/i);
  assert.match(workflow, /node scripts\/sync-company-visuals\.mjs/);
  assert.match(workflow, /node scripts\/audit-company-visuals\.mjs/);
  assert.match(workflow, /Post-deploy byte verification/);
});
