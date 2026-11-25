import test from "node:test";
import assert from "node:assert/strict";
import { inspectRepositorySession, comparePublicSession, readPublicSessionDate } from "../scripts/eod-watchdog-health.mjs";

const date="2026-11-25";
const html=d=>'<p class="terminal-eyebrow" data-role="coverage-eod-label">Action Radar • EOD '+d+'</p>';
const data={meta:{updated:date},coverage:[{ticker:"TEST",priceDate:date,close:10000,changePct:0,volume:0,priceSource:"https://example.com/a",priceSourceSecondary:"https://example.org/b"}],marketSession:{date,indices:["VN-INDEX","VN30","HNX-INDEX"].map(code=>({code,close:100})),breadth:{advance:1,decline:2,unchanged:0}}};
test("public watchdog distinguishes stale, current, malformed and newer pages",()=>{
  assert.equal(readPublicSessionDate(html("25.11.2026")),date);
  assert.equal(comparePublicSession(html("23.11.2026"),date).needsPages,true);
  assert.equal(comparePublicSession(html("25.11.2026"),date).needsPages,false);
  assert.throws(()=>comparePublicSession(html("26.11.2026"),date),/refuse rollback/);
  assert.throws(()=>comparePublicSession("<html></html>",date),/missing or invalid/);
  assert.throws(()=>comparePublicSession(html("31.11.2026"),date),/missing or invalid/);
});
test("repository watchdog requires complete same-date coverage and index data",()=>{
  assert.equal(inspectRepositorySession(data,date).needsEod,false);
  assert.equal(inspectRepositorySession({...data,coverage:[]},date).needsEod,true);
  assert.equal(inspectRepositorySession({...data,marketSession:{...data.marketSession,date:"2026-11-23"}},date).needsEod,true);
  assert.equal(inspectRepositorySession(data,"2026-11-26").needsEod,true);
  assert.throws(()=>inspectRepositorySession({...data,coverage:[]},"2026-11-23"),/refuse rollback/);
});
