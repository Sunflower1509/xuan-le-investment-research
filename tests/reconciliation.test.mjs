import assert from "node:assert/strict";
import test from "node:test";
import { processEodLedger } from "../scripts/process-trade-ledger.mjs";
import { reconcileTradeLedger } from "../scripts/reconcile-trade-ledger.mjs";

const source = {
  meta: { updated: "2026-08-19" },
  reports: [{ id: "ABC-20260819", ticker: "ABC", date: "2026-08-19", file: "reports/ABC.pdf" }],
  coverage: [{
    ticker: "ABC",
    close: 100,
    priceDate: "2026-08-19",
    priceSource: "https://example.com/abc",
    action: {
      zoneLow: 95,
      zoneHigh: 105,
      basisDate: "2026-08-18",
      eligibility: "active",
      recommendation: "MUA",
      stop: 90,
      targets: [120]
    }
  }]
};

const beforeLedger = () => ({
  meta: {
    schemaVersion: 2,
    startedAt: "2026-08-13",
    dataMode: "EOD",
    performanceBasis: "gross-reference",
    owner: "Test",
    automation: {
      version: 3,
      enabled: true,
      trigger: "eod-close-crossed-locked-buy-ceiling",
      baselineDate: "2026-08-12",
      lastEvaluatedAt: "2026-08-18",
      lastEvaluatedQuotes: {
        ABC: {
          date: "2026-08-18",
          close: 110,
          relation: "above",
          zoneLow: 95,
          zoneHigh: 105,
          zoneBasisDate: "2026-08-18",
          eligibility: "active"
        }
      }
    }
  },
  events: []
});

test("reconciliation xác nhận expected activation bằng actual event", () => {
  const before = beforeLedger();
  const after = processEodLedger(source, before).ledger;
  const result = reconcileTradeLedger(source, before, after);
  assert.equal(result.ok, true);
  assert.equal(result.expected.length, 1);
  assert.equal(result.actual.length, 1);
  assert.equal(result.expected[0].id, "auto-ABC-2026-08-19");
});

test("reconciliation xác nhận cả trường hợp đóng cửa xuyên dưới cận dưới", () => {
  const belowSource = structuredClone(source);
  belowSource.coverage[0].close = 92;
  const before = beforeLedger();
  const after = processEodLedger(belowSource, before).ledger;
  const result = reconcileTradeLedger(belowSource, before, after);
  assert.equal(result.ok, true);
  assert.equal(result.expected.length, 1);
  assert.equal(result.expected[0].relationAfter, "below");
  assert.equal(result.actual.length, 1);
});

test("reconciliation không tạo expected muộn khi giá hồi từ dưới vùng vào trong vùng", () => {
  const reboundSource = structuredClone(source);
  reboundSource.coverage[0].close = 100;
  const before = beforeLedger();
  before.meta.automation.lastEvaluatedQuotes.ABC.close = 92;
  before.meta.automation.lastEvaluatedQuotes.ABC.relation = "below";
  const after = processEodLedger(reboundSource, before).ledger;
  const result = reconcileTradeLedger(reboundSource, before, after);
  assert.equal(result.ok, true);
  assert.equal(result.expected.length, 0);
  assert.equal(result.actual.length, 0);
});

test("reconciliation fail nếu engine đáng lẽ kích hoạt nhưng event bị thiếu", () => {
  const before = beforeLedger();
  const after = processEodLedger(source, before).ledger;
  after.events = [];
  const result = reconcileTradeLedger(source, before, after);
  assert.equal(result.ok, false);
  assert.equal(result.missing.length, 1);
  assert.equal(result.missing[0].id, "auto-ABC-2026-08-19");
});

test("reconciliation fail nếu xuất hiện automatic event ngoài expected set", () => {
  const before = beforeLedger();
  const after = structuredClone(before);
  after.meta.automation.lastEvaluatedAt = "2026-08-19";
  after.meta.automation.lastEvaluatedQuotes.ABC = {
    date: "2026-08-19",
    close: 110,
    relation: "above",
    zoneLow: 95,
    zoneHigh: 105,
    zoneBasisDate: "2026-08-18",
    eligibility: "active"
  };
  after.events.push({
    id: "auto-ABC-2026-08-19",
    tradeId: "ABC-2026-08-19",
    type: "activated",
    mode: "automatic-eod",
    ticker: "ABC",
    date: "2026-08-19",
    price: 100,
    zoneLow: 95,
    zoneHigh: 105,
    zoneBasisDate: "2026-08-18",
    stop: 90,
    targets: [120],
    activationRelation: "inside-zone",
    confirmation: {
      trigger: "eod-close-crossed-locked-buy-ceiling",
      priceTriggerPassed: true,
      eligibilityAtTrigger: "active",
      noHardVeto: true,
      lockedActionUnchangedSincePreviousEod: true,
      previousQuote: { date: "2026-08-18", close: 110, relation: "above" }
    },
    sourceUrl: "https://example.com/abc"
  });
  const noTransitionSource = structuredClone(source);
  noTransitionSource.coverage[0].close = 110;
  const result = reconcileTradeLedger(noTransitionSource, before, after);
  assert.equal(result.ok, false);
  assert.equal(result.unexpected.length >= 1, true);
});
