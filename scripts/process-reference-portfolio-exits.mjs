#!/usr/bin/env node
// Deterministic append-only EOD exclusions for the PUBLIC reference watchlist.
// Never edits report valuation actions, Trade Ledger, or broker positions.
import fs from "node:fs";
import vm from "node:vm";
import { REFERENCE_PORTFOLIO } from "../src/data/reference-portfolio.mjs";
import { planReferencePortfolioExits } from "../src/scripts/reference-portfolio-core.mjs";

const dataPath = "src/data/research-data.js";
const statePath = "src/data/reference-portfolio-exits.json";
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context, { filename: dataPath });
const source = context.window.RESEARCH_DATA;
const existing = JSON.parse(fs.readFileSync(statePath, "utf8"));
const { nextState, added } = planReferencePortfolioExits(REFERENCE_PORTFOLIO, source, existing);

if (added.length > 0) {
  fs.writeFileSync(statePath, JSON.stringify(nextState, null, 2) + "\n");
}
console.log(JSON.stringify({
  policy: REFERENCE_PORTFOLIO.stopPolicyVersion,
  effectiveFrom: REFERENCE_PORTFOLIO.stopPolicyEffectiveFrom,
  eod: source?.meta?.updated,
  added: added.map((item) => ({
    ticker: item.ticker, date: item.date,
    referenceMidpoint: item.midpoint, observedClose: item.close,
    differencePct: item.differencePct, severity: item.severity
  })),
  excludedTotal: nextState.events.length
}, null, 2));
