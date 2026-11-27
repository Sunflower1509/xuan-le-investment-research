import test from "node:test";
import assert from "node:assert/strict";
import {validDate,parseFinfo,parseCafeF,inspectCore,computeIndicators,makePreview} from "../scripts/market-research-core.mjs";
// Synthetic fixtures only; these numbers are never production data.
const date="2026-11-26";
const raw={code:"VNINDEX",date,close:1000,open:1010,high:1020,low:990,pctChange:-1,nmValue:1000000000000,nmAdvances:10,nmDeclines:20,nmNoChange:3};
const locked={date,indices:[{code:"VN-INDEX",close:1000,changePct:-1}],breadth:{advance:10,decline:20,unchanged:3}};
const caf={Data:{Data:[{Ngay:"26/11/2026",GiaDongCua:1000}]}};
test("date and exact session validation",()=>{
  assert.equal(validDate("2026-02-30"),false);
  assert.throws(()=>parseFinfo({data:[{...raw,date:"2026-11-27"}]},date));
  assert.throws(()=>parseFinfo({data:[raw,raw]},date));
  assert.throws(()=>parseFinfo({data:[{...raw,close:null}]},date));
  assert.throws(()=>parseFinfo({data:[{...raw,high:900}]},date));
  assert.throws(()=>parseFinfo({data:[]},date));
});
test("second-source mismatch and missing field never become verified",()=>{
  const rows=parseFinfo({data:[raw]},date);
  assert.throws(()=>parseCafeF({Data:{Data:[]}},date));
  assert.throws(()=>parseCafeF({Data:{Data:[{Ngay:"25/11/2026",GiaDongCua:1000}]}},date));
  assert.throws(()=>parseCafeF({Data:{Data:[{Ngay:"26/11/2026",GiaDongCua:null}]}},date));
  assert.equal(inspectCore(rows,locked,{date,close:999},date).labels.close,"CHƯA ĐỦ CĂN CỨ");
  assert.equal(inspectCore(rows,locked,parseCafeF(caf,date),date).labels.close,"ĐÃ ĐỐI CHIẾU");
  assert.equal(inspectCore(rows,locked,parseCafeF(caf,date),date).publicationAllowed,false);
  const missing=parseFinfo({data:[{...raw,nmValue:null,nmAdvances:null}]},date);
  assert.ok(inspectCore(missing,locked,null,date).issues.includes("Thiếu giá trị khớp lệnh"));
});
test("history MA windows and gap rejection across 30 synthetic sessions",()=>{
  const dates=Array.from({length:30},(_,i)=>new Date(Date.UTC(2026,8,1+i)).toISOString().slice(0,10));
  const rows=dates.map((date,i)=>({date,close:100+i}));
  assert.equal(computeIndicators(rows,dates).ma20,119.5);
  assert.equal(computeIndicators(rows,dates).slope20,5);
  assert.equal(computeIndicators(rows,dates).ma50,null);
  assert.throws(()=>computeIndicators(rows.filter((_,i)=>i!==5),dates));
  assert.throws(()=>computeIndicators(rows,[...dates].reverse()));
});
test("draft is marked non-publishable and generated only from exact data",()=>{
  const rows=parseFinfo({data:[raw]},date);
  const preview=makePreview(rows[0],inspectCore(rows,locked,parseCafeF(caf,date),date));
  assert.equal(preview.publicationAllowed,false);
  assert.match(preview.narrative,/giảm 1,00%/);
  assert.match(preview.narrative,/chưa phải bản tin được nghiệm thu/);
});
