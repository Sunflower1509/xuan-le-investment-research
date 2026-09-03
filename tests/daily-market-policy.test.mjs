import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  DAILY_PLAYBOOK_POLICY_START,
  DAILY_PLAYBOOK_STATE_ORDER,
  REQUIRED_DAILY_PLAYBOOK_LENGTH,
  dailyPlaybookStateMeta,
  validateDailyPlaybookPolicy,
} from "../src/scripts/daily-market-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const loadDaily = () => {
  const context = { window: {} };
  const source = fs.readFileSync(path.join(root, "src/data/daily-insights.js"), "utf8");
  vm.runInNewContext(source, context, { filename: "src/data/daily-insights.js" });
  return context.window.DAILY_MARKET_INSIGHTS;
};

const row = (date, states = DAILY_PLAYBOOK_STATE_ORDER) => ({
  date,
  playbook: states.map((state, index) => ({ state, if: `IF ${index + 1}`, then: `THEN ${index + 1}` })),
});

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

test("three-state policy accepts exactly positive / neutral / risk_off", () => {
  const result = validateDailyPlaybookPolicy(row(DAILY_PLAYBOOK_POLICY_START));
  assert.equal(result.applies, true);
  assert.equal(result.valid, true);
});

test("three-state policy rejects 4 cases from policy start", () => {
  const result = validateDailyPlaybookPolicy(row("2026-09-04", ["positive", "neutral", "risk_off", "neutral"]));
  assert.equal(result.valid, false);
  assert.match(result.message, /đúng 3 trường hợp/);
});

test("three-state policy rejects duplicate, missing or reordered states", () => {
  assert.equal(validateDailyPlaybookPolicy(row("2026-09-04", ["positive", "positive", "risk_off"])).valid, false);
  assert.equal(validateDailyPlaybookPolicy(row("2026-09-04", ["positive", "neutral", "unknown"])).valid, false);
  assert.equal(validateDailyPlaybookPolicy(row("2026-09-04", ["neutral", "positive", "risk_off"])).valid, false);
});

test("three-state policy does not retroactively rewrite older market views", () => {
  const legacy = { date: "2026-09-02", playbook: Array.from({ length: 4 }, (_, i) => ({ if: `IF ${i}`, then: `THEN ${i}` })) };
  const result = validateDailyPlaybookPolicy(legacy);
  assert.equal(result.applies, false);
  assert.equal(result.valid, true);
});

test("state metadata produces three unique finance labels", () => {
  const labels = DAILY_PLAYBOOK_STATE_ORDER.map((state) => dailyPlaybookStateMeta(state)?.label);
  assert.deepEqual(labels, ["TĂNG DẦN", "GIỮ / CHỜ", "GIẢM RỦI RO"]);
  assert.equal(new Set(labels).size, 3);
});

test("published market views from 03/09/2026 onward comply with the locked state order", () => {
  const daily = loadDaily();
  const governed = daily.entries.filter((entry) => entry.date >= DAILY_PLAYBOOK_POLICY_START);
  assert.ok(governed.length >= 1, "Phải có ít nhất một nhận định thuộc policy mới");
  for (const entry of governed) {
    assert.equal(entry.playbook?.length, REQUIRED_DAILY_PLAYBOOK_LENGTH, `${entry.date} phải có đúng 3 trường hợp`);
    assert.deepEqual(Array.from(entry.playbook, (item) => item.state), Array.from(DAILY_PLAYBOOK_STATE_ORDER));
    const result = validateDailyPlaybookPolicy(entry);
    assert.equal(result.valid, true, `${entry.date}: ${result.message}`);
  }
});

test("daily action palette meets WCAG AA normal-text contrast", () => {
  const css = fs.readFileSync(path.join(root, "src/styles/site.css"), "utf8");
  const classes = ["positive", "neutral", "risk-off"];
  for (const className of classes) {
    const match = css.match(new RegExp(`\\.daily-action-row\\.${className}\\{--action:(#[0-9a-f]{6});--action-soft:(#[0-9a-f]{6})\\}`, "i"));
    assert.ok(match, `Thiếu palette cho ${className}`);
    assert.ok(contrast(match[1], match[2]) >= 4.5, `${className} không đạt contrast 4.5:1`);
  }
});
