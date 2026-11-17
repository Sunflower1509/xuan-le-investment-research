#!/usr/bin/env node
// Append-only watchlist exit history, never an executed broker trade or Trade Ledger event.
import fs from "node:fs";
import vm from "node:vm";
import { INDIVIDUAL_RECOMMENDATIONS } from "../src/data/individual-recommendations.mjs";
import { planIndividualExits } from "../src/scripts/individual-recommendations-core.mjs";
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync("src/data/research-data.js","utf8"),sandbox);
const file="src/data/individual-recommendations-exits.json";
const state=JSON.parse(fs.readFileSync(file,"utf8"));
const extra=JSON.parse(fs.readFileSync("src/data/individual-nt2-eod.json","utf8"));
const result=planIndividualExits(INDIVIDUAL_RECOMMENDATIONS,sandbox.window.RESEARCH_DATA,extra,state);
if(result.added.length)fs.writeFileSync(file,JSON.stringify(result.nextState,null,2)+"\n");
console.log(JSON.stringify({
  policy:"individual-eod-5-7-v1",
  eod:sandbox.window.RESEARCH_DATA.meta.updated,
  added:result.added.map(x=>({ticker:x.ticker,date:x.date,close:x.close,lossPct:x.deltaPct,severity:x.severity})),
  archivedTotal:result.nextState.events.length
},null,2));
