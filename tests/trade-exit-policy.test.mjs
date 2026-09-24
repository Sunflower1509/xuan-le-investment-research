import test from "node:test";
import assert from "node:assert/strict";
import { evaluateAutomaticExit, nearestLockedTarget, TRADE_EXIT_POLICY } from "../src/scripts/trade-exit-policy.mjs";
import { processEodLedger } from "../scripts/process-trade-ledger.mjs";
import { projectTradeLedger } from "../src/scripts/trade-ledger.mjs";

const sourceUrl = "https://example.com/eod";

const position = (overrides = {}) => ({
  tradeId: "ABC-2026-09-01",
  ticker: "ABC",
  status: "open",
  activatedAt: "2026-09-01",
  lastEventDate: "2026-09-01",
  activationPrice: 100,
  zoneLow: 95,
  zoneHigh: 105,
  stop: 90,
  targets: [115, 125],
  remainingFraction: 1,
  ...overrides
});

const quote = (close, date = "2026-09-24") => ({
  ticker: "ABC",
  close,
  priceDate: date,
  priceSource: sourceUrl
});

test("exit policy is EOD-close based and closes the remaining position", () => {
  assert.equal(TRADE_EXIT_POLICY.version, 1);
  assert.equal(TRADE_EXIT_POLICY.basis, "eod-close");
  assert.equal(TRADE_EXIT_POLICY.executionPrice, "same-eod-close");
  assert.equal(TRADE_EXIT_POLICY.closeScope, "remaining-position");
  assert.deepEqual([...TRADE_EXIT_POLICY.precedence], ["stoploss", "zone_floor_break", "target"]);
});

test("target uses the nearest positive locked target", () => {
  assert.equal(nearestLockedTarget([125, 115, null, -1]), 115);
  assert.equal(nearestLockedTarget([]), null);
  assert.equal(evaluateAutomaticExit(position(), quote(114)), null);
  const hit = evaluateAutomaticExit(position(), quote(115));
  assert.equal(hit.reason, "target");
  assert.equal(hit.triggerPrice, 115);
  assert.equal(hit.price, 115);
  const gap = evaluateAutomaticExit(position(), quote(121));
  assert.equal(gap.reason, "target");
  assert.equal(gap.price, 121, "Reference exit price must be actual EOD close, not assumed target fill");
});

test("stop closes at or below the locked stop", () => {
  assert.equal(evaluateAutomaticExit(position(), quote(91)), null);
  assert.equal(evaluateAutomaticExit(position(), quote(90)).reason, "stoploss");
  assert.equal(evaluateAutomaticExit(position(), quote(86)).reason, "stoploss");
});

test("range lower boundary is inclusive; only a close strictly below it invalidates", () => {
  assert.equal(evaluateAutomaticExit(position(), quote(95)), null);
  const broken = evaluateAutomaticExit(position(), quote(94.99));
  assert.equal(broken.reason, "zone_floor_break");
  assert.equal(broken.triggerPrice, 95);
});

test("one-sided triggers have no synthetic lower buy-zone floor", () => {
  const oneSided = position({ zoneLow: null, zoneHigh: null, triggerType: "at-or-below", triggerPrice: 100, stop: 90, targets: [115] });
  assert.equal(evaluateAutomaticExit(oneSided, quote(94)), null);
  assert.equal(evaluateAutomaticExit(oneSided, quote(90)).reason, "stoploss");
});

test("hard-risk precedence is stop before zone floor before target", () => {
  const malformedOverlap = position({ zoneLow: 95, stop: 96, targets: [94] });
  const result = evaluateAutomaticExit(malformedOverlap, quote(94));
  assert.equal(result.reason, "stoploss");
});

test("stale quote cannot generate an automatic exit", () => {
  assert.equal(evaluateAutomaticExit(position({ lastEventDate: "2026-09-24" }), quote(80, "2026-09-23")), null);
});

const baseAction = {
  zoneLow: 95,
  zoneHigh: 105,
  basisDate: "2026-08-31",
  eligibility: "active",
  recommendation: "MUA",
  stop: 90,
  targets: [115, 125]
};

const coverage = (close, date = "2026-09-24") => [{
  ticker: "ABC",
  close,
  priceDate: date,
  priceSource: sourceUrl,
  action: baseAction
}];

const research = (close, date = "2026-09-24") => ({
  meta: { updated: date },
  reports: [],
  coverage: coverage(close, date)
});

const activationEvent = {
  id: "manual-ABC-2026-09-01",
  tradeId: "ABC-2026-09-01",
  type: "activated",
  mode: "manual",
  ticker: "ABC",
  date: "2026-09-01",
  price: 100,
  zoneLow: 95,
  zoneHigh: 105,
  zoneBasisDate: "2026-08-31",
  stop: 90,
  targets: [115, 125],
  confirmation: {
    noHardVeto: true,
    reportConditionsPassed: true
  },
  sourceUrl
};

const ledger = () => ({
  meta: {
    schemaVersion: 2,
    startedAt: "2026-08-13",
    dataMode: "EOD",
    performanceBasis: "gross-reference",
    owner: "Test",
    automation: {
      version: 4,
      enabled: true,
      trigger: "eod-close-crossed-locked-buy-ceiling",
      baselineDate: "2026-08-12",
      lastEvaluatedAt: "2026-09-23",
      lastEvaluatedQuotes: {
        ABC: {
          date: "2026-09-23",
          close: 100,
          relation: "inside",
          zoneLow: 95,
          zoneHigh: 105,
          zoneBasisDate: "2026-08-31",
          eligibility: "active"
        }
      }
    }
  },
  events: [activationEvent]
});

test("processor closes an existing open position at target using EOD close", () => {
  const result = processEodLedger(research(118), ledger());
  assert.equal(result.stats.closed, 1);
  assert.equal(result.stats.closedTarget, 1);
  const exit = result.ledger.events.at(-1);
  assert.equal(exit.type, "closed");
  assert.equal(exit.mode, "automatic-eod");
  assert.equal(exit.reason, "target");
  assert.equal(exit.price, 118);
  assert.equal(exit.exitPolicy.triggerPrice, 115);
  const projected = projectTradeLedger(result.ledger, coverage(118));
  assert.equal(projected.issues.length, 0);
  assert.equal(projected.positions[0].status, "closed");
  assert.equal(projected.positions[0].closeReason, "target");
});

test("processor closes an existing open position below zone floor even before stop", () => {
  const result = processEodLedger(research(93), ledger());
  assert.equal(result.stats.closedZoneFloor, 1);
  assert.equal(result.stats.closedStop, 0);
  assert.equal(result.ledger.events.at(-1).reason, "zone_floor_break");
});

test("processor gives stoploss precedence if both stop and zone floor are breached", () => {
  const result = processEodLedger(research(88), ledger());
  assert.equal(result.stats.closedStop, 1);
  assert.equal(result.ledger.events.at(-1).reason, "stoploss");
});

test("automatic close is idempotent on rerun of the same EOD", () => {
  const first = processEodLedger(research(118), ledger());
  const second = processEodLedger(research(118), first.ledger);
  assert.equal(second.stats.closed, 0);
  assert.equal(second.ledger.events.length, first.ledger.events.length);
});

test("a ticker auto-closed on an EOD cannot reactivate on that same EOD", () => {
  const base = ledger();
  base.meta.automation.lastEvaluatedQuotes.ABC = {
    date: "2026-09-23",
    close: 110,
    relation: "above",
    zoneLow: 95,
    zoneHigh: 105,
    zoneBasisDate: "2026-08-31",
    eligibility: "active"
  };
  const result = processEodLedger(research(93), base);
  assert.equal(result.stats.closedZoneFloor, 1);
  assert.equal(result.stats.activated, 0);
  assert.equal(result.ledger.events.filter((event) => event.type === "activated").length, 1);
});

test("projector rejects a forged automatic close that does not satisfy policy", () => {
  const forged = ledger();
  forged.events.push({
    id: "auto-close-forged",
    tradeId: activationEvent.tradeId,
    type: "closed",
    mode: "automatic-eod",
    ticker: "ABC",
    date: "2026-09-24",
    price: 100,
    reason: "target",
    sourceUrl,
    exitPolicy: {
      version: 1,
      basis: "eod-close",
      executionPrice: "same-eod-close",
      rule: "target",
      triggerPrice: 115
    }
  });
  const projected = projectTradeLedger(forged, coverage(100));
  assert.equal(projected.issues.length, 1);
  assert.equal(projected.issues[0].code, "automatic_exit_not_confirmed");
});
