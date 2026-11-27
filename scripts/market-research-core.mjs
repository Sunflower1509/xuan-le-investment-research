// AUTO MARKET RESEARCH V1.0 — read-only pilot.
// No order execution, portfolio advice, or production publishing.
import { createHash } from "node:crypto";

export const validDate = d => typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d) &&
  Number.isFinite(Date.parse(d+"T00:00:00Z")) && new Date(d+"T00:00:00Z").toISOString().slice(0,10)===d;
const number = x => (typeof x==="number" || (typeof x==="string" && /^-?\d+(?:\.\d+)?$/.test(x))) && Number.isFinite(Number(x)) ? Number(x) : null;
const positive = x => number(x)!==null && number(x)>0;
const integer = x => Number.isInteger(number(x)) && number(x)>=0;
const round2 = x => Math.round(x*100)/100;
const same = (a,b) => number(a)!==null && number(b)!==null && round2(number(a))===round2(number(b));
const mean = a => a.reduce((s,x)=>s+x,0)/a.length;
const fmt = (v,d=2) => v.toLocaleString("vi-VN",{minimumFractionDigits:d,maximumFractionDigits:d});
export const hash = text => createHash("sha256").update(text).digest("hex");
export const FINFO = "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices";
export const CAFEF = "https://s.cafef.vn/Ajax/PageNew/DataHistory/PriceHistory.ashx";

export function parseFinfo(payload,date) {
  if (!validDate(date) || !Array.isArray(payload?.data)) throw Error("Invalid Finfo history");
  const rows=payload.data.map(r=>{
    if(r.code!=="VNINDEX" || !validDate(r.date) || r.date>date) throw Error("Unexpected symbol or date");
    const row={date:r.date,close:number(r.close),high:number(r.high),low:number(r.low),open:number(r.open),pct:number(r.pctChange),matchedVnd:number(r.nmValue),
      breadth:{advance:number(r.nmAdvances),decline:number(r.nmDeclines),unchanged:number(r.nmNoChange)}};
    if(![row.close,row.high,row.low,row.open].every(positive)||row.high<Math.max(row.open,row.close)||row.low>Math.min(row.open,row.close)||row.pct===null) throw Error("Invalid OHLC "+r.date);
    return row;
  }).sort((a,b)=>a.date.localeCompare(b.date));
  if(!rows.length||rows.at(-1).date!==date||new Set(rows.map(r=>r.date)).size!==rows.length) throw Error("Missing target or duplicate history");
  return rows;
}

// Candidate adapter. It is NOT treated as full-scope validation merely because
// a response has a turnover field. Exact field mapping must pass live audit.
export function parseCafeF(payload,date) {
  if(!validDate(date)) throw Error("Invalid CafeF target");
  const rows=payload?.Data?.Data;
  if(!Array.isArray(rows)) throw Error("Unexpected CafeF schema");
  const d=date.split("-").reverse().join("/");
  const matches=rows.filter(r=>r.Ngay===d);
  if(matches.length!==1) throw Error("CafeF missing or duplicate exact-date row");
  const r=matches[0];
  if(!positive(r.GiaDongCua)) throw Error("CafeF close missing");
  // Do not infer percent from absolute change or infer turnover units.
  return {date,close:number(r.GiaDongCua),raw:r};
}

export function inspectCore(rows,locked,cafe,date) {
  const row=rows.at(-1);
  const vn=locked?.indices?.find(x=>x.code==="VN-INDEX");
  const b=locked?.breadth;
  const issues=[];
  if(!validDate(date)||row?.date!==date||locked?.date!==date) issues.push("Sai hoặc thiếu ngày khóa EOD");
  if(!same(row?.close,vn?.close)||!same(row?.pct,vn?.changePct)) issues.push("Chỉ số Finfo khác dữ liệu đã khóa");
  if(!cafe||cafe.date!==date||!same(cafe.close,row?.close)) issues.push("Chưa đối chiếu điểm đóng cửa độc lập");
  if(!positive(row?.matchedVnd)) issues.push("Thiếu giá trị khớp lệnh");
  if(!b||!["advance","decline","unchanged"].every(k=>integer(b[k])&&integer(row?.breadth?.[k])&&b[k]===row.breadth[k])) issues.push("Thiếu hoặc lệch độ rộng");
  // The locked snapshot and Finfo are the same publisher, not independent.
  // No approved independent full-scope turnover/breadth adapter yet.
  issues.push("Chưa nghiệm thu nguồn độc lập cho % thay đổi, khớp toàn HOSE và độ rộng cùng phạm vi");
  return {publicationAllowed:false,issues,labels:{close:cafe&&cafe.date===date&&same(cafe.close,row?.close)?"ĐÃ ĐỐI CHIẾU":"CHƯA ĐỦ CĂN CỨ",pct:"1 NGUỒN",matched:"PHẠM VI CHƯA NGHIỆM THU",breadth:"1 NGUỒN"}};
}

// Compute only on a certified contiguous trading calendar; never infer gaps
// from weekdays because holidays and exchange closures change.
export function computeIndicators(rows,certifiedDates) {
  if(!Array.isArray(rows)||!Array.isArray(certifiedDates)||certifiedDates.length!==rows.length||
    rows.some((r,i)=>!validDate(r.date)||r.date!==certifiedDates[i]||!positive(r.close)||(i>0&&r.date<=rows[i-1].date))) throw Error("History not anchored to certified trading calendar");
  const ma=n=>rows.length>=n?mean(rows.slice(-n).map(r=>r.close)):null;
  return {ma20:ma(20),ma50:ma(50),ma200:ma(200),slope20:rows.length>=25?ma(20)-mean(rows.slice(-25,-5).map(r=>r.close)):null,first:rows[0]?.date??null,last:rows.at(-1)?.date??null,count:rows.length};
}
export function makePreview(row,gate) {
  if(!row||!validDate(row.date)||!positive(row.close)||number(row.pct)===null) throw Error("Invalid preview input");
  const date=row.date.split("-").reverse().join("/");
  const direction=row.pct>0?"tăng":row.pct<0?"giảm":"đi ngang";
  const change=row.pct===0?"": " "+fmt(Math.abs(row.pct))+"%";
  // Draft for technical review only; never exported into website runtime.
  return {date:row.date,publicationAllowed:false,title:"Bản rà soát dữ liệu VN-Index "+date,
    narrative:"Theo dữ liệu Finfo của phiên "+date+", VN-Index "+direction+change+", đóng cửa tại "+fmt(row.close)+" điểm. Đây là bản rà soát nguồn, chưa phải bản tin được nghiệm thu. Cần hoàn tất đối chiếu độc lập và phạm vi thống kê trước khi công bố.",
    missing:gate.issues,disclaimer:"Thông tin thị trường phục vụ nghiên cứu, không phải khuyến nghị giao dịch."};
}
