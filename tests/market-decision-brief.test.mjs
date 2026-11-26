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

test("Market Decision Brief runtime contract is v3.0", () => {
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.version, "3.0.0");
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.layoutGuards.locked, true);
  assert.match(MARKET_DECISION_BRIEF_STANDARD.layout.desktop, /facts → analysis/);
  assert.match(MARKET_DECISION_BRIEF_STANDARD.layoutGuards.changePolicy, /version-bump/);
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

test("renderer uses dedicated scoped v3 modules", () => {
  assert.match(read("src/scripts/app.js"), /mountDailyMarket/);
  assert.match(read("src/scripts/daily-market-renderer.mjs"), /normalizeDailyInsight/);
  assert.match(read("src/styles/market-decision-brief.css"), /#daily-market \.dmv3-value/);
  assert.match(read("docs/market-decision-brief-standard.md"), /v3\.0/);
  assert.match(read("docs/prompt-nhan-dinh-vnindex-v3.md"), /displayBrief/);
});
