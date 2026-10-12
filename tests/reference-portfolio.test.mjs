import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { REFERENCE_PORTFOLIO } from "../src/data/reference-portfolio.mjs";
import {
  buildReferencePortfolio,
  buildReferencePortfolioRow,
  validateReferencePortfolio
} from "../src/scripts/reference-portfolio-core.mjs";

const script = fs.readFileSync(new URL("../src/data/research-data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(script, context);
const research = context.window.RESEARCH_DATA;
const rows = buildReferencePortfolio(REFERENCE_PORTFOLIO, research);
const byTicker = new Map(rows.map((row) => [row.ticker, row]));
const closeTo = (actual, target) => assert.ok(Math.abs(actual - target) < 0.0001, `${actual} !== ${target}`);

test("Six exact approved AmiBroker zones, no NVB and no duplicated tickers", () => {
  assert.equal(validateReferencePortfolio(REFERENCE_PORTFOLIO), true);
  assert.deepEqual(REFERENCE_PORTFOLIO.entries.map((e) => [e.ticker, e.zoneLow, e.zoneHigh]), [
    ["BSR", 29500, 30000],
    ["VPB", 23000, 24000],
    ["HDB", 22000, 22800],
    ["DGW", 46000, 47500],
    ["GMD", 53000, 54500],
    ["GVR", 32000, 33000]
  ]);
  assert.equal(REFERENCE_PORTFOLIO.approvedOn, "2026-10-12");
  assert.equal(rows.length, 6);
  assert.equal(byTicker.has("NVB"), false);
});

test("Midpoints and 5% reference warning thresholds must not round prematurely", () => {
  const expectations = {
    BSR: [29750, 28262.5], VPB: [23500, 22325],
    HDB: [22400, 21280], DGW: [46750, 44412.5],
    GMD: [53750, 51062.5], GVR: [32500, 30875]
  };
  for (const [ticker, [midpoint, stop]] of Object.entries(expectations)) {
    assert.equal(byTicker.get(ticker).midpoint, midpoint);
    assert.equal(byTicker.get(ticker).stopReference, stop);
  }
});

test("Latest locked EOD yields exact reproducible comparisons, not trade returns", () => {
  assert.equal(research.meta.updated, "2026-10-09");
  const expectation = {
    BSR: [31050, "above", 4.369747899159663],
    VPB: [23800, "inside", 1.2765957446808525],
    HDB: [22400, "inside", 0],
    DGW: [47250, "inside", 1.0695187165775448],
    GMD: [55000, "above", 2.325581395348841],
    GVR: [32850, "inside", 1.076923076923086]
  };
  for (const [ticker, [close, relation, difference]] of Object.entries(expectation)) {
    const row = byTicker.get(ticker);
    assert.equal(row.close, close);
    assert.equal(row.priceDate, "2026-10-09");
    assert.equal(row.zoneRelation, relation);
    closeTo(row.differencePct, difference);
  }
});

test("BSR old valuation veto remains visible; portfolio zone never changes report action", () => {
  const bsr = research.coverage.find((c) => c.ticker === "BSR");
  assert.equal(bsr.action.eligibility, "veto");
  assert.equal(byTicker.get("BSR").reportVeto, true);
  assert.equal(byTicker.get("BSR").researchState, "report-veto");
  assert.equal(bsr.action.zoneLow, null);
  assert.equal(bsr.action.triggerPrice, 14591);
});

test("Missing, stale or unverified EOD must never fabricate percent changes", () => {
  const config = { ticker: "VPB", zoneLow: 23000, zoneHigh: 24000 };
  const base = { close: 23750, changePct: 1.0, priceDate: "2026-10-12",
    priceSource: "https://example.com/eod", action: { eligibility: "active" } };
  for (const invalid of [{ ...base, close: null }, { ...base, priceDate: "2026-10-09" },
    { ...base, priceSource: "http://unsafe.com" }, { ...base, changePct: null }]) {
    const row = buildReferencePortfolioRow(config, invalid, "2026-10-12");
    assert.equal(row.close, null);
    assert.equal(row.differencePct, null);
    assert.equal(row.zoneRelation, "unavailable");
    assert.equal(row.researchState, "data-unavailable");
  }
});

test("At midpoint, top, below lower zone and below -5% trigger separate labels", () => {
  const entry = { ticker: "VPB", zoneLow: 23000, zoneHigh: 24000 };
  const quote = (close) => ({ close, changePct: 0, priceDate: "2026-10-12",
    priceSource: "https://example.com/eod", action: { eligibility: "active" } });
  assert.equal(buildReferencePortfolioRow(entry, quote(23500), "2026-10-12").differencePct, 0);
  assert.equal(buildReferencePortfolioRow(entry, quote(24000), "2026-10-12").zoneRelation, "inside");
  assert.equal(buildReferencePortfolioRow(entry, quote(22900), "2026-10-12").researchState, "below-zone");
  const stop = buildReferencePortfolioRow(entry, quote(22325), "2026-10-12");
  assert.equal(stop.stopBreached, true);
  assert.equal(stop.researchState, "stop-warning");
  assert.equal(buildReferencePortfolioRow(entry, quote(24200), "2026-10-12").zoneRelation, "above");
});

test("Integration markup is inserted exactly after market commentary, never inside ledger", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const sections = [...html.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)]
    .map((match) => match[2]);
  assert.deepEqual(sections, [
    "overview", "daily-market", "reference-portfolio", "position-ledger", "action-radar", "research"
  ]);
  assert.match(html, /data-role="reference-portfolio-desktop"/);
  assert.match(html, /data-role="reference-portfolio-mobile"/);
  const js = fs.readFileSync(new URL("../src/index.js", import.meta.url), "utf8");
  assert.match(js, /import "\.\/scripts\/reference-portfolio\.mjs"/);
  assert.match(js, /import "\.\/scripts\/app\.js"/);
});
