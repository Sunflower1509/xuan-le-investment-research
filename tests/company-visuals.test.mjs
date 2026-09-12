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

const expected = ["DXP", "DHC", "GAS", "FPT", "HPG", "VHM", "BID", "DBC", "SSI"];

test("company identity visual pilot is deliberately limited to nine verified tickers", () => {
  assert.equal(visuals.meta.schema, "verified-core-asset-webp-v1");
  assert.equal(visuals.meta.pilot, true);
  assert.deepEqual(Object.keys(visuals.visuals).sort(), [...expected].sort());
  for (const ticker of expected) {
    const item = visuals.visuals[ticker];
    assert.equal(item.kind, "company-asset");
    assert.equal(item.verified, true);
    assert.match(item.sourceUrl, /^https:\/\//);
    assert.match(item.sourceImageUrl, /^https:\/\//);
    assert.doesNotMatch(item.sourceImageUrl, /(unsplash|pexels|pixabay|shutterstock|alamy|istock|freepik|midjourney|openai)/i);
  }
});

test("pilot represents nine distinct research sectors", () => {
  const reportByTicker = new Map(
    research.reports
      .filter((report) => report.reportType !== "trading")
      .map((report) => [report.ticker, report])
  );
  const sectors = new Set();
  for (const ticker of expected) {
    const report = reportByTicker.get(ticker);
    assert.ok(report, `${ticker} must have a valuation report`);
    assert.equal(visuals.visuals[ticker].sector, report.sector);
    sectors.add(report.sector);
  }
  assert.equal(sectors.size, expected.length);
});

test("production bundle loads company visual data and non-invasive card enhancer", () => {
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

test("deployment pipeline synchronizes and audits visuals before publishing", () => {
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
  assert.match(workflow, /node scripts\/sync-company-visuals\.mjs/);
  assert.match(workflow, /node scripts\/audit-company-visuals\.mjs/);
  assert.match(workflow, /assets\/images\/company-visuals/);
  assert.match(workflow, /src\/data\/company-visuals\.js/);
});
