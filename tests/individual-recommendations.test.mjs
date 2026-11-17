import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { INDIVIDUAL_RECOMMENDATIONS as CONFIG } from "../src/data/individual-recommendations.mjs";
import {
  validateIndividualRecommendations,validateNt2Snapshot,validateIndividualExitState,
  buildIndividualRows,planIndividualExits
} from "../src/scripts/individual-recommendations-core.mjs";

const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(new URL("../src/data/research-data.js",import.meta.url),"utf8"),sandbox);
const research=sandbox.window.RESEARCH_DATA;
const nt2=JSON.parse(fs.readFileSync(new URL("../src/data/individual-nt2-eod.json",import.meta.url),"utf8"));
const exits=JSON.parse(fs.readFileSync(new URL("../src/data/individual-recommendations-exits.json",import.meta.url),"utf8"));
const empty=()=>({schemaVersion:1,events:[]});
const rows=buildIndividualRows(CONFIG,research,nt2,exits);
const by=new Map(rows.map(r=>[r.ticker,r]));
const nearly=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,String(a)+" differs from "+String(b));

test("Exactly four user-specified technical zones; preserve Research Terminal without fake NT2 coverage",()=>{
  assert.equal(validateIndividualRecommendations(CONFIG),true);
  assert.deepEqual(CONFIG.entries.map(x=>[x.ticker,x.zoneLow,x.zoneHigh]),[
    ["POW",12000,12500],["NT2",23000,23500],["VIX",12000,12500],["SHS",12000,12500]
  ]);
  assert.equal(CONFIG.publishedOn,"2026-11-17");
  assert.equal(research.coverage.find(x=>x.ticker==="NT2"),undefined);
  assert.equal(rows.length,4);
});
test("Check midpoint, five-seven loss thresholds and model-only 2R/3R expected outcomes",()=>{
  for(const ticker of ["POW","VIX","SHS"]){
    let r=by.get(ticker);
    assert.equal(r.midpoint,12250);
    nearly(r.stopFive,11637.5);nearly(r.stopSeven,11392.5);
    assert.equal(r.target1,13500);assert.equal(r.target2,14100);
    assert.ok(r.rr1>=2 && r.rr2>=3);
  }
  const r=by.get("NT2");
  assert.equal(r.midpoint,23250);
  nearly(r.stopFive,22087.5);nearly(r.stopSeven,21622.5);
  assert.equal(r.target1,25600);assert.equal(r.target2,26750);
  assert.ok(r.rr1>=2 && r.rr2>=3);
});
test("Latest verified EOD preserves independent dated NT2 snapshot and never treats stale NT2 as fresh",()=>{
  assert.equal(validateNt2Snapshot(nt2),true);
  const currentDate=research.meta.updated;
  assert.match(currentDate,/^20\\d{2}-\\d{2}-\\d{2}$/);
  assert.equal(research.marketSession.date,currentDate);
  assert.ok(research.coverage.every(item=>item.priceDate===currentDate));
  for(const ticker of ["POW","VIX","SHS"]){
    const quote=research.coverage.find(item=>item.ticker===ticker);
    assert.ok(quote && Number.isFinite(quote.close));
    assert.equal(by.get(ticker).close,quote.close);
    assert.equal(by.get(ticker).fresh,true);
  }
  const independent=by.get("NT2");
  assert.equal(independent.close,nt2.close);
  assert.equal(independent.fresh,nt2.priceDate===currentDate);
  if(nt2.priceDate<currentDate) assert.equal(independent.deltaPct,null);
  if(currentDate==="2026-11-16"){
    assert.deepEqual(["POW","NT2","VIX","SHS"].map(t=>by.get(t).close),[12850,23700,12800,13000]);
    assert.ok(rows.every(r=>r.fresh && r.relation==="above" && r.deltaPct>0 && r.exclusion===null));
  }
  assert.ok(validateIndividualExitState(CONFIG,exits));
});
test("A -5% close triggers one exclusion; -7% or lower triggers critical severity",()=>{
  const future=structuredClone(research);
  future.meta.updated="2026-11-17";
  for(const q of future.coverage)q.priceDate="2026-11-17";
  future.coverage.find(q=>q.ticker==="POW").close=11637.5;
  const nextNt2={...nt2,priceDate:"2026-11-17",close:23000,low:22950};
  const breach=planIndividualExits(CONFIG,future,nextNt2,empty());
  assert.deepEqual(breach.added.map(x=>x.ticker),["POW"]);
  assert.equal(breach.added[0].severity,"stop-5");
  assert.equal(breach.nextState.events.length,1);
  future.coverage.find(q=>q.ticker==="VIX").close=11000;
  const severe=planIndividualExits(CONFIG,future,nextNt2,breach.nextState);
  assert.deepEqual(severe.added.map(x=>x.ticker),["VIX"]);
  assert.equal(severe.added[0].severity,"critical-7");
  assert.equal(severe.nextState.events.length,2);
  const again=planIndividualExits(CONFIG,future,nextNt2,severe.nextState);
  assert.equal(again.added.length,0);
  future.coverage.find(q=>q.ticker==="VIX").close=14000;
  assert.equal(planIndividualExits(CONFIG,future,nextNt2,severe.nextState).rows.find(x=>x.ticker==="VIX").exclusion.severity,"critical-7");
});
test("Never backdate loss events to previous session or compare stale NT2 snapshot",()=>{
  const historical=structuredClone(research);
  historical.meta.updated="2026-11-16";
  for(const q of historical.coverage) q.priceDate="2026-11-16";
  historical.coverage.find(q=>q.ticker==="SHS").close=11000;
  assert.equal(planIndividualExits(CONFIG,historical,nt2,empty()).added.length,0);
  const future=structuredClone(research);
  future.meta.updated="2026-11-17";
  for(const q of future.coverage)q.priceDate="2026-11-17";
  const oldNt2={...nt2,close:19000,low:18900};
  assert.equal(planIndividualExits(CONFIG,future,oldNt2,empty()).added.length,0);
  const nt2Row=buildIndividualRows(CONFIG,future,oldNt2,empty()).find(x=>x.ticker==="NT2");
  assert.equal(nt2Row.fresh,false);
  assert.equal(nt2Row.deltaPct,null);
});
test("Duplicate, retroactive and edited event evidence fails integrity validation",()=>{
  const future=structuredClone(research);
  future.meta.updated="2026-11-17";
  for(const q of future.coverage)q.priceDate="2026-11-17";
  future.coverage.find(q=>q.ticker==="POW").close=11000;
  const valid=planIndividualExits(CONFIG,future,{...nt2,priceDate:"2026-11-17"},empty()).nextState;
  assert.equal(validateIndividualExitState(CONFIG,valid),true);
  const corrupted=JSON.parse(JSON.stringify(valid));
  corrupted.events[0].close=12400;
  assert.equal(validateIndividualExitState(CONFIG,corrupted),false);
  assert.throws(()=>planIndividualExits(CONFIG,future,nt2,corrupted));
});
test("Ten tracked configurations share exactly one reference portfolio table with one filter",()=>{
  const html=fs.readFileSync(new URL("../index.html",import.meta.url),"utf8");
  const sections=[...html.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)].map(m=>m[2]);
  assert.deepEqual(sections,["overview","daily-market","reference-portfolio","position-ledger","action-radar","research"]);
  assert.match(html,/id="reference-portfolio"/);
  assert.match(html,/id="individual-recommendations"/); // backward-compatible old anchor
  assert.doesNotMatch(html,/data-role="individual-recommendations-root"/);
  assert.match(html,/value="additional">Bốn mã bổ sung/);
  assert.match(html,/value="original">Sáu mã gốc/);
  assert.equal((html.match(/data-role="reference-portfolio-desktop"/g)||[]).length,1);
  assert.equal((html.match(/data-role="reference-portfolio-filter"/g)||[]).length,1);
  const entry=fs.readFileSync(new URL("../src/index.js",import.meta.url),"utf8");
  assert.match(entry,/import "\.\/scripts\/reference-portfolio\.mjs"/);
  assert.doesNotMatch(entry,/import "\.\/scripts\/individual-recommendations\.mjs"/);
  const css=fs.readFileSync(new URL("../src/index.css",import.meta.url),"utf8");
  assert.doesNotMatch(css,/individual-recommendations\.css/);
  const renderer=fs.readFileSync(new URL("../src/scripts/reference-portfolio.mjs",import.meta.url),"utf8");
  assert.match(renderer,/buildReferencePortfolio/);
  assert.match(renderer,/buildIndividualRows/);
  assert.match(renderer,/rows = \[\.\.\.original, \.\.\.added\]/);
  assert.match(renderer,/visibleByTicker/);
  assert.match(renderer,/T1 • Kịch bản 2R/);
  assert.match(renderer,/T2 • Kịch bản 3R/);
  const workflows=["pages.yml","eod-daily.yml"].map(p=>fs.readFileSync(new URL("../.github/workflows/"+p,import.meta.url),"utf8"));
  assert.ok(workflows.every(x=>x.includes("process-individual-recommendations-exits.mjs")));
  assert.match(workflows[1],/update-individual-nt2-eod\.mjs/);
});
