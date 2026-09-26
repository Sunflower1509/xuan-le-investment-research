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

test("Market Decision Brief runtime contract is v2.2", () => {
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.version, "2.2.0");
  assert.match(MARKET_DECISION_BRIEF_STANDARD.name, /Semantic Data Color & Layout Consolidation/);
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.typography.headlineDate.position, "kicker-above-headline");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.typography.metric.size, "22px");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.layout.desktop, "analysis:minmax(0,1fr) + snapshot:340px");
  assert.deepEqual(
    [...MARKET_DECISION_BRIEF_STANDARD.semanticParts.supported],
    ["valueParts", "changeParts", "signalParts", "detailParts"]
  );
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.semanticParts.inheritance, "atomic-value-over-row-tone");
});

test("semantic palette meets WCAG AA normal-text contrast on white", () => {
  const white = "#FFFFFF";
  for (const key of ["positive", "negative", "warning", "neutral", "ink"]) {
    const color = MARKET_DECISION_BRIEF_STANDARD.palette[key];
    assert.ok(contrast(color, white) >= 4.5, `${key} ${color} must be >=4.5:1 on white`);
  }
});

test("direction metadata keeps non-color cues", () => {
  assert.deepEqual(
    { symbol: marketDirectionMeta("up").symbol, label: marketDirectionMeta("up").label },
    { symbol: "▲", label: "Tăng" }
  );
  assert.deepEqual(
    { symbol: marketDirectionMeta("down").symbol, label: marketDirectionMeta("down").label },
    { symbol: "▼", label: "Giảm" }
  );
});

test("snapshot state differentiates price breadth liquidity and technical assessment", () => {
  assert.equal(marketSnapshotStateMeta("price_up").tone, "positive");
  assert.equal(marketSnapshotStateMeta("breadth_negative").label, "Độ rộng tiêu cực");
  assert.equal(marketSnapshotStateMeta("liquidity_below_average").tone, "warning");
  assert.equal(marketSnapshotStateMeta("technical_negative").label, "Kỹ thuật yếu");
});

test("25 Sep entry carries v2.2 concise headline and atomic semantic parts", () => {
  const daily = loadDaily();
  const entry = daily.entries.find((item) => item.date === "2026-09-25");
  assert.ok(entry, "Missing 25/09/2026 market view");
  const validation = validateMarketDecisionBrief(entry);
  assert.equal(validation.applies, true);
  assert.equal(validation.valid, true, `Missing: ${validation.missing.join(", ")}`);
  assert.equal(entry.brief.headline, "Hồi kỹ thuật nhưng chưa qua cổng xác nhận");
  assert.equal(entry.brief.evidence.length, 3);
  entry.brief.evidence.forEach((item) => {
    assert.ok(Array.isArray(item.signalParts) && item.signalParts.length > 0, `${item.label} missing signalParts`);
    assert.ok(Array.isArray(item.detailParts) && item.detailParts.length > 0, `${item.label} missing detailParts`);
  });

  const breadth = entry.brief.evidence.find((item) => item.label === "Độ rộng");
  assert.equal(breadth.signalParts[0].text, "▼ 176 giảm");
  assert.equal(breadth.signalParts[0].tone, "negative");
  assert.equal(breadth.signalParts[2].text, "▲ 132 tăng");
  assert.equal(breadth.signalParts[2].tone, "positive");
  assert.equal(breadth.detailParts[0].tone, "neutral");
  assert.equal(breadth.detailParts[2].tone, "negative");

  const liquidityMetric = entry.metrics.find((item) => item.label === "GIÁ TRỊ KHỚP LỆNH");
  assert.equal(liquidityMetric.snapshotState, "liquidity_below_average");
  assert.equal(liquidityMetric.changeParts[0].text, "−18,0%");
  assert.equal(liquidityMetric.changeParts[0].tone, "negative");
  assert.equal(liquidityMetric.tone, "warning");

  const technical = entry.metrics.find((item) => item.label === "VỊ THẾ KỸ THUẬT");
  assert.equal(technical.valueParts[0].tone, "positive");
  assert.equal(technical.valueParts[2].tone, "negative");
});

test("renderer uses one semantic-parts function for evidence and snapshot", () => {
  const app = read("src/scripts/app.js");
  assert.match(app, /const dailySemanticPartsHtml = \(parts, fallback, fallbackTone = "neutral"\) =>/);
  assert.equal(app.includes("dailyMetricPartsHtml"), false);
  assert.match(app, /dailySemanticPartsHtml\(item\.signalParts, item\.signal \|\| item\.text, item\.tone\)/);
  assert.match(app, /dailySemanticPartsHtml\(item\.detailParts, item\.detail \|\| item\.text, "neutral"\)/);
  assert.match(app, /dailySemanticPartsHtml\(metric\.valueParts, metric\.value, tone\)/);
  assert.match(app, /dailySemanticPartsHtml\(metric\.changeParts, metric\.change, stateMeta\.tone\)/);
});

test("headline date is a vertical kicker and action-like suffix is guarded", () => {
  const app = read("src/scripts/app.js");
  const css = read("src/styles/market-decision-brief.css");
  assert.match(app, /const dailyHeadlineTitle = \(entry\) =>/);
  assert.match(app, /const actionLike = \/phong thu\|giam rui ro\|cho xac nhan/);
  assert.match(app, /<time class="daily-title-date" datetime="\$\{escapeHtml\(entry\.date\)\}">/);
  assert.equal(app.includes("daily-title-separator"), false);
  assert.match(css, /\.daily-title-line \{\s*display:\s*block;/);
  assert.match(css, /\.daily-title-date \{[\s\S]*display:\s*block;/);
  assert.equal(/grid-template-columns:\s*auto auto minmax\(0, 1fr\)/.test(css), false);
});

test("evidence matrix is two-column and parent row cannot recolor mixed signal values", () => {
  const css = read("src/styles/market-decision-brief.css");
  const app = read("src/scripts/app.js");
  assert.match(css, /\.daily-key-readings article \{[\s\S]*grid-template-columns:\s*86px minmax\(0, 1fr\)/);
  assert.match(css, /\.daily-reading-content \{/);
  assert.equal(css.includes(".daily-key-readings article.negative .daily-reading-signal"), false);
  assert.equal(css.includes(".daily-key-readings article.positive .daily-reading-signal"), false);
  assert.equal(css.includes(".daily-key-readings article.warning .daily-reading-signal"), false);
  assert.match(css, /\.daily-semantic-text\.positive \{ color: var\(--brief-positive\); \}/);
  assert.match(css, /\.daily-semantic-text\.negative \{ color: var\(--brief-negative\); \}/);
  assert.match(css, /\.daily-semantic-text\.warning \{ color: var\(--brief-warning\); \}/);
  assert.match(css, /\.daily-semantic-text\.neutral \{ color: var\(--brief-neutral\); \}/);
  assert.equal(app.includes("FACT → INTERPRETATION"), false);
});

test("snapshot is compacted for v2.2 without losing tabular numbers", () => {
  const css = read("src/styles/market-decision-brief.css");
  assert.match(css, /\.daily-snapshot-row \{[\s\S]*padding:\s*9px 12px 10px;/);
  assert.match(css, /\.daily-direction \{[\s\S]*min-height:\s*20px;/);
  assert.match(css, /\.daily-snapshot-value \{[\s\S]*font-size:\s*22px;/);
  assert.match(css, /\.daily-semantic-text \{[\s\S]*font-variant-numeric:\s*tabular-nums;/);
});

test("future-generation prompt and standard lock v2.2 atomic coloring", () => {
  const prompt = read("docs/prompt-nhan-dinh-vnindex-v3.md");
  const standard = read("docs/market-decision-brief-standard.md");
  assert.match(prompt, /MARKET DECISION BRIEF v2\.2/);
  assert.match(prompt, /signalParts/);
  assert.match(prompt, /detailParts/);
  assert.match(prompt, /Tone của row không được nhuộm sai màu child value/);
  assert.match(standard, /Daily Market Research Brief v2\.2/);
  assert.match(standard, /Atomic semantic color contract/);
  assert.match(standard, /date kicker riêng ngay trên headline/);
});
