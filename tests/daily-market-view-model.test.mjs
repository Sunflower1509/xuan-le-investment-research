import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { STATUS, LEGACY_STATUS, normalizeDailyInsight, filterArchive, publicText } from "../src/scripts/daily-market-view-model.mjs";
const context=vm.createContext({window:{}});
const imports=[...fs.readFileSync("src/index.js","utf8").matchAll(/^import\s+["']\.\/data\/(daily-insights[^"']*\.js)["'];?$/gm)];
for(const m of imports)vm.runInContext(fs.readFileSync("src/data/"+m[1],"utf8"),context,{filename:m[1]});
const entries=context.window.DAILY_MARKET_INSIGHTS.entries;
const entry=date=>entries.find(x=>x.date===date);
test("historical records are immutable and all labels mapped",()=>{
 const before=JSON.stringify(entries);
 const old=entries.filter(x=>x.date<="2026-11-25");
 assert.equal(old.length,71);
 for(const e of old){
   assert.ok(LEGACY_STATUS[e.sentimentLabel],e.date+" "+e.sentimentLabel);
   const m=normalizeDailyInsight(e);
   assert.ok(m.headline&&STATUS[m.status],e.date);
   assert.equal(m.id,e.id);
   assert.equal(m.date,e.date);
   assert.equal(m.scenarios.length,e.playbook?.length||0,e.date);
   for(let i=0;i<m.scenarios.length;i++){
     assert.equal(m.scenarios[i].condition,e.playbook[i].if.trim());
     assert.equal(m.scenarios[i].conclusion,e.playbook[i].then.trim());
   }
   assert.deepEqual(m.sources.map(x=>x.url),Array.from(e.sources,x=>x.url),e.date+" source links");
 }
 assert.equal(JSON.stringify(entries),before);
});
test("four representative records retain exact source values",()=>{
 for(const date of ["2026-11-25","2026-11-23","2026-09-17","2026-07-17"]){
   const e=entry(date);assert.ok(e,date);
   const m=normalizeDailyInsight(e);
   for(const raw of e.metrics||[]){
     const displayed=[...m.metrics,...m.extraMetrics].find(x=>x.label===publicText(raw.label));
     assert.ok(displayed,date+" "+raw.label);
     assert.equal(displayed.value,publicText(raw.value));
     assert.equal(displayed.change,publicText(raw.change));
   }
   assert.deepEqual(m.levels.map(x=>x.value),Array.from(e.levels||[],x=>x.value));
 }
});
test("latest insufficient assessment stays grey; no duplicate dataStatus",()=>{
 const e=entry("2026-11-25"), m=normalizeDailyInsight(e);
 assert.equal(m.status,"insufficient_data");
 assert.equal(STATUS[m.status].tone,"unknown");
 assert.equal(m.metrics.find(x=>x.key==="vnIndex").value,"1.687,45");
 assert.equal(m.metrics.find(x=>x.key==="liquidity").value,"8.809 tỷ");
 assert.equal(m.quality.length,new Set(m.quality).size);
});
test("legacy date, two scenarios, and month/search filtering",()=>{
 assert.equal(normalizeDailyInsight(entry("2026-07-17")).scenarios.length,2);
 assert.match(normalizeDailyInsight(entry("2026-07-20")).publication,/21\/07\/2026/);
 assert.ok(filterArchive(entries,"2026-11","").every(e=>e.date.startsWith("2026-11")));
 assert.ok(filterArchive(entries,"","25/11/2026").some(e=>e.date==="2026-11-25"));
});
test("missing fields, unsafe links and unlike scopes are not invented",()=>{
 const e={id:"x",date:"2026-11-26",sentimentLabel:"UNKNOWN",displayBrief:{schemaVersion:3,marketFacts:{liquidity:{matchedValue:123,scope:"HOSE",averageComparison:{scope:"VN-Index",period:20,changePct:-5}}},sources:[{label:"invalid",url:"javascript:alert(1)"}]}};
 const m=normalizeDailyInsight(e);
 assert.equal(m.status,"insufficient_data");
 assert.equal(m.metrics.length,1);
 assert.equal(m.metrics[0].change,"");
 assert.equal(m.sources.length,0);
});
