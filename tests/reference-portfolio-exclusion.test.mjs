import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { REFERENCE_PORTFOLIO } from "../src/data/reference-portfolio.mjs";
import {
  buildReferencePortfolio,
  planReferencePortfolioExits,
  validateReferencePortfolioExitState
} from "../src/scripts/reference-portfolio-core.mjs";

const storedState = JSON.parse(fs.readFileSync(new URL("../src/data/reference-portfolio-exits.json", import.meta.url), "utf8"));
const dataScript = fs.readFileSync(new URL("../src/data/research-data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(dataScript, context);
const storedEod = context.window.RESEARCH_DATA;
const blankState = () => ({ schemaVersion: 1, events: [] });
const midpoint = (entry) => (entry.zoneLow + entry.zoneHigh) / 2;
const makeSource = (date = "2026-10-28", overrides = {}) => ({
  meta: { updated: date },
  coverage: REFERENCE_PORTFOLIO.entries.map((entry) => ({
    ticker: entry.ticker,
    close: overrides[entry.ticker] ?? midpoint(entry),
    changePct: 0,
    priceDate: date,
    priceSource: "https://example.com/verified-eod",
    action: { eligibility: "active" }
  }))
});

test("Policy is strict EOD close at or below minus five percent, with seven percent severity", () => {
  assert.equal(REFERENCE_PORTFOLIO.stopPercent, 5);
  assert.equal(REFERENCE_PORTFOLIO.criticalPercent, 7);
  assert.equal(REFERENCE_PORTFOLIO.stopPolicyEffectiveFrom, "2026-10-28");
  assert.ok(validateReferencePortfolioExitState(REFERENCE_PORTFOLIO, blankState()));
});

test("Historical fixed 28/10 DGW breach yields one archival event, preserving reference prices", () => {
  const historicFixture = makeSource("2026-10-28", { DGW: 42350 });
  const { nextState, added, rows } = planReferencePortfolioExits(REFERENCE_PORTFOLIO, historicFixture, blankState());
  assert.deepEqual(added.map((event) => event.ticker), ["DGW"]);
  assert.equal(added[0].date, "2026-10-28");
  assert.equal(added[0].close, 42350);
  assert.equal(added[0].midpoint, 46750);
  assert.equal(added[0].stopReference, 44412.5);
  assert.ok(Math.abs(added[0].differencePct - (-9.411764705882353)) < 0.00000001);
  assert.equal(added[0].severity, "critical-7");
  assert.equal(rows.filter((row) => !row.exclusion).length, 5);
  assert.equal(rows.find((row) => row.ticker === "DGW").exclusion.id, "risk-stop-DGW-2026-10-28");
  assert.deepEqual(nextState.events, added);
});

test("Persisted 28/10 DGW evidence remains valid and never duplicates on changing EOD", () => {
  assert.equal(validateReferencePortfolioExitState(REFERENCE_PORTFOLIO, storedState), true);
  assert.ok(storedState.events.some((event) => event.ticker === "DGW" && event.date === "2026-10-28"));
  const before = JSON.stringify(storedState);
  const result = planReferencePortfolioExits(REFERENCE_PORTFOLIO, storedEod, storedState);
  assert.equal(JSON.stringify(storedState), before, "Plan must not mutate existing evidence.");
  assert.ok(result.nextState.events.some((event) => event.id === "risk-stop-DGW-2026-10-28"));
  assert.equal(result.rows.find((row) => row.ticker === "DGW").exclusion.date, "2026-10-28");
  for (const event of storedState.events) {
    assert.equal(result.nextState.events.filter((item) => item.ticker === event.ticker).length, 1);
    assert.deepEqual(result.nextState.events.find((item) => item.ticker === event.ticker), event);
  }
  const currentBreachSet = buildReferencePortfolio(REFERENCE_PORTFOLIO, storedEod)
    .filter((row) => row.stopBreached && row.close !== null).map((row) => row.ticker).sort();
  const archivedSet = result.rows.filter((row) => row.exclusion).map((row) => row.ticker).sort();
  for (const ticker of currentBreachSet) assert.ok(archivedSet.includes(ticker), ticker + " must not evade stop.");
  const repeat = planReferencePortfolioExits(REFERENCE_PORTFOLIO, storedEod, result.nextState);
  assert.equal(repeat.added.length, 0, "Applying an EOD twice must not add duplicate exits.");
  assert.equal(repeat.nextState, result.nextState);
});

test("Boundary precision: minus 4.98% stays, exactly minus 5% leaves", () => {
  const above = planReferencePortfolioExits(REFERENCE_PORTFOLIO, makeSource("2026-10-28", { VPB: 22330 }), blankState());
  assert.equal(above.added.length, 0);
  const equals = planReferencePortfolioExits(REFERENCE_PORTFOLIO, makeSource("2026-10-28", { VPB: 22325 }), blankState());
  assert.deepEqual(equals.added.map((event) => event.ticker), ["VPB"]);
  assert.equal(equals.added[0].severity, "stop-5");
  assert.ok(Math.abs(equals.added[0].differencePct + 5) < 0.0000001);
});

test("Seven percent or worse is critical but produces one archive event, not two", () => {
  const boundary = planReferencePortfolioExits(REFERENCE_PORTFOLIO, makeSource("2026-10-28", { VPB: 21855 }), blankState());
  assert.equal(boundary.added.length, 1);
  assert.equal(boundary.added[0].severity, "critical-7");
  assert.ok(Math.abs(boundary.added[0].differencePct + 7) < 0.0000001);
});

test("Prior trading sessions do not retroactively remove securities before effective date", () => {
  const earlier = planReferencePortfolioExits(REFERENCE_PORTFOLIO, makeSource("2026-10-27", { VPB: 20000 }), blankState());
  assert.equal(earlier.added.length, 0);
  assert.equal(earlier.nextState.events.length, 0);
});

test("An already archived ticker never rejoins on a price rebound", () => {
  const dgwHistory = { schemaVersion: 1, events: storedState.events.filter((event) => event.ticker === "DGW") };
  assert.equal(validateReferencePortfolioExitState(REFERENCE_PORTFOLIO, dgwHistory), true);
  const rebound = planReferencePortfolioExits(REFERENCE_PORTFOLIO, makeSource("2026-10-29", { DGW: 52000 }), dgwHistory);
  assert.equal(rebound.added.length, 0);
  assert.equal(rebound.rows.find((row) => row.ticker === "DGW").exclusion.id, "risk-stop-DGW-2026-10-28");
  assert.equal(rebound.rows.filter((row) => !row.exclusion).length, 5);
});

test("Stale or unverified EOD cannot automatically delete from the public watchlist", () => {
  const wrongDate = makeSource("2026-10-28", { VPB: 20000 });
  wrongDate.coverage.find((item) => item.ticker === "VPB").priceDate = "2026-10-27";
  assert.equal(planReferencePortfolioExits(REFERENCE_PORTFOLIO, wrongDate, blankState()).added.length, 0);
  const badSource = makeSource("2026-10-28", { VPB: 20000 });
  badSource.coverage.find((item) => item.ticker === "VPB").priceSource = "http://untrusted.test";
  assert.equal(planReferencePortfolioExits(REFERENCE_PORTFOLIO, badSource, blankState()).added.length, 0);
});

test("Invalid, duplicate or edited exclusion evidence fails closed", () => {
  const copy = JSON.parse(JSON.stringify(storedState));
  copy.events[0].close = 50000;
  assert.equal(validateReferencePortfolioExitState(REFERENCE_PORTFOLIO, copy), false);
  assert.throws(() => planReferencePortfolioExits(REFERENCE_PORTFOLIO, storedEod, copy));
  const duplicate = JSON.parse(JSON.stringify(storedState));
  duplicate.events.push({ ...duplicate.events[0], id: "risk-stop-DGW-2026-10-29", date: "2026-10-29" });
  assert.equal(validateReferencePortfolioExitState(REFERENCE_PORTFOLIO, duplicate), false);
});

test("Additional EOD breaches append without overwriting historic DGW event", () => {
  const dgwHistory = { schemaVersion: 1, events: storedState.events.filter((event) => event.ticker === "DGW") };
  const next = planReferencePortfolioExits(REFERENCE_PORTFOLIO, makeSource("2026-10-29", { VPB: 21800 }), dgwHistory);
  assert.deepEqual(next.added.map((event) => event.ticker), ["VPB"]);
  assert.equal(next.nextState.events.length, 2);
  assert.deepEqual(next.nextState.events[0], dgwHistory.events[0]);
  assert.equal(next.rows.filter((row) => !row.exclusion).length, 4);
});

test("Source and public runtime retain the archive processor and its read-only separation", () => {
  const source = fs.readFileSync(new URL("../src/scripts/reference-portfolio.mjs", import.meta.url), "utf8");
  const eodWorkflow = fs.readFileSync(new URL("../.github/workflows/eod-daily.yml", import.meta.url), "utf8");
  const pagesWorkflow = fs.readFileSync(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const processor = fs.readFileSync(new URL("../scripts/process-reference-portfolio-exits.mjs", import.meta.url), "utf8");
  assert.match(source, /reference-portfolio-exits\.json/);
  assert.match(html, /<option value="excluded">Đã loại \(lịch sử\)<\/option>/);
  assert.match(eodWorkflow, /node scripts\/process-reference-portfolio-exits\.mjs/);
  assert.match(pagesWorkflow, /node scripts\/process-reference-portfolio-exits\.mjs/);
  assert.doesNotMatch(processor, /trade-ledger\.json/);
  const rows = buildReferencePortfolio(REFERENCE_PORTFOLIO, storedEod, storedState);
  assert.equal(rows.length, REFERENCE_PORTFOLIO.entries.length);
  assert.equal(rows.filter((row) => row.exclusion).length, storedState.events.length);
  assert.equal(rows.filter((row) => !row.exclusion).length + storedState.events.length, 6);
});
