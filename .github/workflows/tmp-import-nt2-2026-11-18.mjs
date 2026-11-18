import fs from "node:fs";
import vm from "node:vm";
import { parseVndirect } from "../../scripts/update-eod-market-data.mjs";

const researchPath="src/data/research-data.js";
const indexPath="index.html";
fs.copyFileSync(indexPath,"/tmp/index-before.html");

const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(researchPath,"utf8"),sandbox,{filename:researchPath});
const d=sandbox.window.RESEARCH_DATA;
if(!d||!Array.isArray(d.reports)||!Array.isArray(d.coverage)) throw new Error("RESEARCH_DATA invalid");
const vals0=d.reports.filter(r=>r.reportType!=="trading");
if(vals0.length!==135||d.coverage.length!==135) throw new Error("Expected 135/135 baseline");
if(d.reports.some(r=>r.ticker==="NT2")||d.coverage.some(c=>c.ticker==="NT2")) throw new Error("NT2 unexpectedly exists before import");
if(d?.meta?.updated!=="2026-11-17") throw new Error("Expected repository-wide EOD 2026-11-17");

const headers={accept:"application/json,text/plain,*/*","user-agent":"Mozilla/5.0 XuanLeTVS-Valuation-Import/6.0"};
for(const exp of [
  {date:"2026-11-17",close:24200,volume:2785900,changePct:2.1097},
  {date:"2026-11-18",close:23900,volume:1035300,changePct:-1.2397}
]){
  const source="https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:NT2~date:"+exp.date+"&size=10";
  const payload=await fetch(source,{headers}).then(r=>{if(!r.ok) throw new Error("NT2 VNDIRECT HTTP "+r.status+" "+exp.date); return r.json();});
  const row=parseVndirect(payload,"NT2",exp.date);
  if(row.close!==exp.close||row.volume!==exp.volume||Math.abs(row.changePct-exp.changePct)>0.02){
    throw new Error("NT2 VNDIRECT mismatch "+exp.date+" "+JSON.stringify(row));
  }
}

const visual=(ticker,date,file)=>({
  src:"assets/images/reports/"+ticker.toLowerCase()+".webp?v="+date.replaceAll("-","")+"-cover1",
  alt:"Trang bìa báo cáo định giá "+ticker+" ngày "+date.split("-").reverse().join("/"),
  caption:"Bìa báo cáo định giá "+ticker,
  sourceLabel:"Xuân Lê TVS Equity Research",
  sourceUrl:file,
  kind:"report-cover"
});

const nt2={
  id:"NT2-20261118",
  ticker:"NT2",
  company:"CTCP Điện lực Dầu khí Nhơn Trạch 2",
  sector:"Tiện ích / nhiệt điện khí",
  exchange:"HOSE",
  date:"2026-11-18",
  recommendation:"THEO DÕI / CHỜ",
  status:"wait",
  marketPrice:23900,
  marketPriceDate:"2026-11-18",
  baseValue:27572,
  valueLabel:"Giá trị kỳ vọng có điều kiện",
  rangeLow:18158,
  rangeHigh:35799,
  gapLabel:"P0 23.900 đồng/cp thấp hơn GTKV 27.572 đồng/cp khoảng 13,3%, nhưng giá vẫn cao hơn ngưỡng biên an toàn M 18.158 đồng và phiên 18/11 chưa có xác nhận khối lượng; trạng thái 1-3 tuần CHỜ.",
  method:"PP-12 DCF dự án hữu hạn đến 2036 60% + PP-16 EV/EBITDA nhiệt điện 40%; PP-18 chỉ kiểm tra, trọng số 0%",
  summary:"NT2 có dải giá trị có điều kiện 18.158-35.799 đồng/cp và GTKV 27.572 đồng/cp. Báo cáo tự đánh giá độ tin cậy THẤP, cổng dữ liệu CHƯA ĐẠT; hợp đồng bán điện hữu hạn tới 2036 và công nợ EPTC là rủi ro trọng yếu. Giá 18/11 ở trên MA20/MA50 nhưng khối lượng chỉ 0,71 lần bình quân 20 phiên, nên không có trạng thái CÓ MUA.",
  action:{
    zoneLow:22300,
    zoneHigh:22500,
    baseValue:27572,
    stop:21600,
    targets:[24500,25300],
    basisDate:"2026-11-18",
    recommendation:"CHỜ - CHƯA XÁC NHẬN KHỐI LƯỢNG",
    eligibility:"inactive",
    condition:"Nếu giá hồi về 22.300-22.500 đồng/cp và đồng thời có xác nhận xu hướng, dòng tiền, sức mạnh tương đối, nền giá và thanh khoản thì mới xét CÓ MUA. Stop tham chiếu 21.600 đồng, thấp hơn cận trên vùng mua 4,0%; mục tiêu 24.500 và 25.300 đồng; R/R theo mục tiêu 1 tại cận trên là 2,22. Nếu chưa đủ khối lượng/xác nhận thì tiếp tục CHỜ và không đặt lệnh chỉ vì giá thấp hơn GTKV."
  },
  file:"reports/NT2_2026-11-18.pdf",
  edition:"Bản định giá 18.11.2026"
};
nt2.visual=visual(nt2.ticker,nt2.date,nt2.file);

d.reports.push(nt2);
d.reports.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))||String(a.ticker||"").localeCompare(String(b.ticker||""))||String(a.reportType||"valuation").localeCompare(String(b.reportType||"valuation")));

d.coverage.push({
  ticker:"NT2",
  company:nt2.company,
  sector:"Điện",
  exchange:"HOSE",
  reportId:nt2.id,
  close:24200,
  priceDate:"2026-11-17",
  changePct:2.1097,
  volume:2785900,
  priceSource:"https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:NT2~date:2026-11-17&size=10",
  priceSourceSecondary:"https://web.stockbiz.vn/Stocks/NT2/LookupQuote.aspx?Date=17%2F11%2F2026",
  action:structuredClone(nt2.action)
});
d.coverage.sort((a,b)=>String(a.ticker||"").localeCompare(String(b.ticker||"")));

let note=String(d.meta?.note||"");
for(const [from,to] of [
  ["Giá đóng cửa, biến động và khối lượng khớp lệnh của 135/135 mã","Giá đóng cửa, biến động và khối lượng khớp lệnh của 136/136 mã"],
  ["Giá đóng cửa khớp trực tiếp CafeF 0/135 mã","Giá đóng cửa khớp trực tiếp CafeF 0/136 mã"],
  ["135/135 mã dùng KBS date-specific vì CafeF chưa có dòng EOD đúng ngày","135/136 mã dùng KBS date-specific vì CafeF chưa có dòng EOD đúng ngày; NT2 dùng Stockbiz exact-date làm nguồn đối chiếu phụ"],
  ["0/135 ngoại lệ CafeF","0/136 ngoại lệ CafeF"],
  ["Khối lượng khớp trực tiếp VNDIRECT-nguồn đối chiếu 131/135 mã","Khối lượng khớp trực tiếp VNDIRECT-nguồn đối chiếu 132/136 mã"]
]){
  if(!note.includes(from)) throw new Error("meta.note baseline token missing: "+from);
  note=note.replace(from,to);
}
d.meta.note=note;

const vals=d.reports.filter(r=>r.reportType!=="trading");
const cov=d.coverage.find(x=>x.ticker==="NT2");
if(vals.length!==136||d.coverage.length!==136) throw new Error("Expected 136/136 after NT2 addition");
if(new Set(vals.map(r=>r.ticker)).size!==136||new Set(d.coverage.map(c=>c.ticker)).size!==136) throw new Error("Ticker uniqueness invariant failed");
if(vals.filter(x=>x.ticker==="NT2").length!==1||!cov||cov.reportId!==nt2.id||cov.close!==24200||cov.priceDate!=="2026-11-17"||cov.volume!==2785900) throw new Error("NT2 report/coverage invariant failed");
fs.writeFileSync(researchPath,"window.RESEARCH_DATA = "+JSON.stringify(d,null,2)+";\n");

let html=fs.readFileSync(indexPath,"utf8");
html=html.replace('data-role="report-tab-count">135</span>','data-role="report-tab-count">136</span>');
html=html.replace('data-role="coverage-tab-count">135</span>','data-role="coverage-tab-count">136</span>');
if((html.match(/data-role="report-tab-count">136<\/span>/g)||[]).length!==1||(html.match(/data-role="coverage-tab-count">136<\/span>/g)||[]).length!==1) throw new Error("Index counters invalid");
fs.writeFileSync(indexPath,html);

const replacements={
  "scripts/sync-company-visuals.mjs":[["const EXPECTED = 135;","const EXPECTED = 136;"]],
  "scripts/sync-company-visuals-core.mjs":[["const EXPECTED = 135;","const EXPECTED = 136;"],["const REGISTRY_EXPECTED = 126;","const REGISTRY_EXPECTED = 127;"]],
  "scripts/audit-company-visuals-core.mjs":[["const EXPECTED = 135;","const EXPECTED = 136;"],["const REGISTRY_EXPECTED = 126;","const REGISTRY_EXPECTED = 127;"],["meta.candidateCount phải 133.","meta.candidateCount không khớp EXPECTED."],["133/133 complete phải có 133 unique hashes.","CIVS complete phải có EXPECTED unique hashes."]],
  "scripts/ensure-company-visual-candidates.mjs":[["const EXPECTED = 135;","const EXPECTED = 136;"],["const REGISTRY_EXPECTED = 126;","const REGISTRY_EXPECTED = 127;"]],
  "tests/civs-fetch-fallback.test.mjs":[["135-candidate state","136-candidate state"],["/const EXPECTED = 135/","/const EXPECTED = 136/"]],
  "tests/individual-recommendations.test.mjs":[
    ["Exactly four user-specified technical zones; preserve Research Terminal without fake NT2 coverage","Exactly four user-specified technical zones; official NT2 coverage must be linked to the latest valuation"],
    ["  assert.equal(research.coverage.find(x=>x.ticker===\"NT2\"),undefined);","  const officialNt2=research.coverage.find(x=>x.ticker===\"NT2\");\n  assert.ok(officialNt2);\n  assert.equal(officialNt2.reportId,\"NT2-20261118\");\n  assert.equal(officialNt2.priceDate,research.meta.updated);\n  assert.equal(officialNt2.close,24200);\n  assert.match(officialNt2.priceSource,/vndirect/i);"]
  ],
  "tests/company-visuals.test.mjs":[
    ["complete 135-code coverage","complete 136-code coverage"],
    ["visuals.meta.coverageTarget, 135","visuals.meta.coverageTarget, 136"],
    ["research.coverage.length, 135","research.coverage.length, 136"],
    ["registry.meta.coverageTarget, 135","registry.meta.coverageTarget, 136"],
    ["registry.meta.candidateCount, 126","registry.meta.candidateCount, 127"],
    ["registry.candidates.length, 126","registry.candidates.length, 127"],
    ["registryTickers.size, 126","registryTickers.size, 127"],
    ["union.size, 135","union.size, 136"],
    ["exactly 135 unique tickers","exactly 136 unique tickers"],
    ["resumable, 135-aware","resumable, 136-aware"],
    ["/const EXPECTED = 135/","/const EXPECTED = 136/"],
    ["/const REGISTRY_EXPECTED = 126/","/const REGISTRY_EXPECTED = 127/"],
    ["/135\\/135/","/136\\/136/"]
  ],
  "docs/company-identity-visual-standard.md":[
    ["Coverage Universe 135","Coverage Universe 136"],
    ["**135/135 mã trong Coverage Universe**","**136/136 mã trong Coverage Universe**"],
    ["rollout 135 mã","rollout 136 mã"],
    ["coverageTarget = 135","coverageTarget = 136"],
    ["**126 mã bổ sung**","**127 mã bổ sung**"],
    ["đúng **135 mã**","đúng **136 mã**"],
    ["quay về universe 134","quay về universe 135"]
  ]
};
for(const [file,pairs] of Object.entries(replacements)){
  let s=fs.readFileSync(file,"utf8");
  for(const [from,to] of pairs){
    if(!s.includes(from)) throw new Error(file+" missing expected token: "+from);
    s=s.split(from).join(to);
  }
  fs.writeFileSync(file,s);
}

const candidatePath="src/data/company-visual-candidates.json";
const registry=JSON.parse(fs.readFileSync(candidatePath,"utf8"));
if(Number(registry?.meta?.coverageTarget)!==135||Number(registry?.meta?.candidateCount)!==126||!Array.isArray(registry.candidates)||registry.candidates.length!==126) throw new Error("candidate registry baseline drift");
if(registry.candidates.some(x=>x.ticker==="NT2")) throw new Error("NT2 candidate unexpectedly exists");
registry.candidates.push({
  ticker:"NT2",
  sourceUrl:"https://www.pvpnt2.vn/",
  officialDomain:"pvpnt2.vn",
  sourceTier:"A",
  identityType:"gas-power-plant",
  keywords:["NT2","Nhơn Trạch 2","nhà máy điện","điện khí","power plant","turbine"]
});
registry.candidates.sort((a,b)=>String(a.ticker).localeCompare(String(b.ticker)));
registry.meta.coverageTarget=136;
registry.meta.candidateCount=127;
registry.meta.updated="2026-11-18";
if(registry.candidates.length!==127||new Set(registry.candidates.map(x=>x.ticker)).size!==127) throw new Error("candidate registry invariant failed");
fs.writeFileSync(candidatePath,JSON.stringify(registry,null,2)+"\n");

const before=fs.readFileSync("/tmp/index-before.html","utf8");
const after=fs.readFileSync(indexPath,"utf8");
const restored=after.replace('data-role="report-tab-count">136</span>','data-role="report-tab-count">135</span>').replace('data-role="coverage-tab-count">136</span>','data-role="coverage-tab-count">135</span>');
if(restored!==before) throw new Error("index.html changed beyond the two counters");
const order=[...after.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)].map(m=>m[2]);
const expected=["overview","daily-market","reference-portfolio","position-ledger","action-radar","research"];
if(order.join(",")!==expected.join(",")) throw new Error("Section order changed");

console.log(JSON.stringify({ok:true,valuationCount:vals.length,coverageCount:d.coverage.length,nt2:{reportId:nt2.id,reportP0:23900,coverageClose:24200,coverageDate:"2026-11-17"},sectionOrder:order},null,2));
