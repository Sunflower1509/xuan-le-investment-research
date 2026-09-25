import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  MARKET_DECISION_BRIEF_STANDARD,
  marketDirectionMeta,
  marketSnapshotStateMeta,
  validateMarketDecisionBrief
} from "../src/scripts/market-decision-brief.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const loadDaily = () => {
  const context = { window: {} };
  vm.runInNewContext(read("src/data/daily-insights.js"), context, { filename: "src/data/daily-insights.js" });
  vm.runInNewContext(read("src/data/daily-insights-auto.js"), context, { filename: "src/data/daily-insights-auto.js" });
  return context.window.DAILY_MARKET_INSIGHTS;
};

const channel = (value) => {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const raw = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((offset) => Number.parseInt(raw.slice(offset, offset + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

test("Market Decision Brief v2 locks type scale, measure and responsive hierarchy", () => {
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.version, "2.0.0");
  assert.match(MARKET_DECISION_BRIEF_STANDARD.name, /Typography & Information Hierarchy Hardening v2/);
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.typography.thesis.size, "16px");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.typography.thesis.measure, "64ch");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.typography.metric.family, "ui");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.measures.headline, "30ch");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.layout.shellArchive, "220px");
});

test("semantic market palette meets WCAG AA normal-text contrast on white", () => {
  const white = "#FFFFFF";
  for (const key of ["positive", "negative", "warning", "neutral", "ink"]) {
    const color = MARKET_DECISION_BRIEF_STANDARD.palette[key];
    assert.ok(contrast(color, white) >= 4.5, `${key} ${color} must be >=4.5:1 on white`);
  }
});

test("direction metadata never relies on color alone", () => {
  const up = marketDirectionMeta("up");
  const down = marketDirectionMeta("down");
  assert.equal(up.symbol, "▲");
  assert.equal(up.label, "Tăng");
  assert.equal(down.symbol, "▼");
  assert.equal(down.label, "Giảm");
});

test("snapshot state metadata differentiates price breadth liquidity and technical state", () => {
  assert.equal(marketSnapshotStateMeta("price_down").label, "Giảm");
  assert.equal(marketSnapshotStateMeta("breadth_negative").label, "Độ rộng tiêu cực");
  assert.equal(marketSnapshotStateMeta("liquidity_below_average").label, "Dưới TB20");
  assert.equal(marketSnapshotStateMeta("liquidity_below_average").tone, "warning");
  assert.equal(marketSnapshotStateMeta("technical_negative").label, "Kỹ thuật yếu");
});

test("latest published market view carries v2 evidence and snapshot-state schema", () => {
  const daily = loadDaily();
  const entry = daily.entries.find((item) => item.date === "2026-09-24");
  assert.ok(entry, "Missing 24/09/2026 market view");
  const validation = validateMarketDecisionBrief(entry);
  assert.equal(validation.applies, true);
  assert.equal(validation.valid, true, `Missing: ${validation.missing.join(", ")}`);
  assert.equal(entry.brief.evidence.length, 3);
  assert.equal(entry.brief.actions.length, 3);
  entry.brief.evidence.forEach((item) => {
    assert.ok(item.signal, `${item.label} must have a scan-friendly signal`);
    assert.ok(item.detail, `${item.label} must have a separate interpretation/detail`);
  });
  assert.deepEqual(
    Array.from(entry.metrics.map((metric) => metric.snapshotState)),
    ["price_down", "breadth_negative", "liquidity_below_average", "technical_negative"]
  );
});

test("renderer removes date from headline and creates semantic reading layers", () => {
  const app = read("src/scripts/app.js");
  assert.match(app, /class="daily-session-date"/);
  assert.match(app, /PHIÊN \$\{date\(entry\.date\)\}/);
  assert.match(app, /<h3 id="daily-brief-title-\$\{escapeHtml\(entry\.id\)\}">\$\{escapeHtml\(entry\.title\)\}<\/h3>/);
  assert.equal(
    /<h3[^>]*><time/.test(app),
    false,
    "Session date must remain metadata, not part of the research headline"
  );
  assert.match(app, /class="daily-executive-thesis"/);
  assert.match(app, />Luận điểm chính<\/h4>/);
  assert.match(app, /class="daily-evidence-strip"/);
  assert.match(app, />Bằng chứng thị trường<\/h4>/);
  assert.match(app, /class="daily-reading-signal"/);
  assert.match(app, /class="daily-decision-bar/);
  assert.match(app, /marketSnapshotStateMeta\(metric\.snapshotState, metric\.direction, metric\.tone\)/);
});

test("decision bar is nested in the narrative before the snapshot closes", () => {
  const app = read("src/scripts/app.js");
  const narrativeStart = app.indexOf('class="daily-brief-narrative"');
  const decision = app.indexOf('class="daily-decision-bar', narrativeStart);
  const narrativeEnd = app.indexOf("</section>", decision);
  const snapshot = app.indexOf('class="daily-market-snapshot"', narrativeStart);
  assert.ok(narrativeStart >= 0 && decision > narrativeStart);
  assert.ok(decision < snapshot, "Decision bar should fill the narrative column before the snapshot");
  assert.ok(narrativeEnd < snapshot);
});

test("archive renderer removes repeated edition decoration from non-latest items", () => {
  const app = read("src/scripts/app.js");
  assert.match(app, /index === 0 \? '<i>MỚI NHẤT<\/i>' : ""/);
  assert.equal(app.includes('escapeHtml(item.edition)'), false);
  assert.equal(app.includes('• BẢN NHANH'), false);
});

test("v2 CSS locks readable type roles and bounded measures", () => {
  const css = read("src/styles/market-decision-brief.css");
  assert.match(css, /--brief-body:\s*16px/);
  assert.match(css, /--brief-metric:\s*24px/);
  assert.match(css, /grid-template-columns:\s*minmax\(0, 1fr\) 360px/);
  assert.match(css, /max-width:\s*64ch/);
  assert.match(css, /font-size:\s*clamp\(32px, 2\.15vw, 36px\)/);
  assert.match(css, /\.daily-snapshot-value[\s\S]*font-family:\s*var\(--font-ui\)/);
  assert.match(css, /font-variant-numeric:\s*tabular-nums/);
  assert.match(css, /@media \(max-width: 760px\)/);
});

test("future VNINDEX prompt and standard reference v2 contract", () => {
  const prompt = read("docs/prompt-nhan-dinh-vnindex-v3.md");
  const standard = read("docs/market-decision-brief-standard.md");
  assert.match(prompt, /MARKET DECISION BRIEF v2\.0/);
  assert.match(prompt, /snapshotState:/);
  assert.match(prompt, /signal: "▼ Dưới MA20 \/ MA200"/);
  assert.match(standard, /Typography & Information Hierarchy Hardening v2/);
  assert.match(standard, /LABEL → SIGNAL → INTERPRETATION/);
  assert.match(standard, /liquidity_below_average/);
});
