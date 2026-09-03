import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  DAILY_PLAYBOOK_POLICY_START,
  REQUIRED_DAILY_PLAYBOOK_LENGTH,
  validateDailyPlaybookPolicy,
} from "../src/scripts/daily-market-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const loadDaily = () => {
  const context = { window: {} };
  const source = fs.readFileSync(path.join(root, "src/data/daily-insights.js"), "utf8");
  vm.runInNewContext(source, context, { filename: "src/data/daily-insights.js" });
  return context.window.DAILY_MARKET_INSIGHTS;
};

const row = (date, length) => ({
  date,
  playbook: Array.from({ length }, (_, index) => ({ if: `IF ${index + 1}`, then: `THEN ${index + 1}` })),
});

test("three-state policy accepts exactly 3 cases from policy start", () => {
  const result = validateDailyPlaybookPolicy(row(DAILY_PLAYBOOK_POLICY_START, 3));
  assert.equal(result.applies, true);
  assert.equal(result.valid, true);
});

test("three-state policy rejects 4 cases from policy start", () => {
  const result = validateDailyPlaybookPolicy(row("2026-09-04", 4));
  assert.equal(result.applies, true);
  assert.equal(result.valid, false);
  assert.match(result.message, /đúng 3 trường hợp/);
});

test("three-state policy does not retroactively rewrite older market views", () => {
  const result = validateDailyPlaybookPolicy(row("2026-09-02", 4));
  assert.equal(result.applies, false);
  assert.equal(result.valid, true);
});

test("published market views from 03/09/2026 onward comply with exactly 3 cases", () => {
  const daily = loadDaily();
  const governed = daily.entries.filter((entry) => entry.date >= DAILY_PLAYBOOK_POLICY_START);
  assert.ok(governed.length >= 1, "Phải có ít nhất một nhận định thuộc policy mới");

  for (const entry of governed) {
    assert.equal(entry.playbook?.length, REQUIRED_DAILY_PLAYBOOK_LENGTH, `${entry.date} phải có đúng 3 trường hợp`);
    const result = validateDailyPlaybookPolicy(entry);
    assert.equal(result.valid, true, `${entry.date}: ${result.message}`);
  }

  const target = governed.find((entry) => entry.date === "2026-09-03");
  assert.ok(target, "Thiếu nhận định 03/09/2026");
  assert.equal(target.playbook.length, 3);
});
