// Presentation adapter only. Never write to the historical store.
export const STATUS = Object.freeze({
 positive:{label:"TÍCH CỰC",tone:"positive",symbol:"▲",description:"Các yếu tố xác nhận thuận lợi."},
 neutral:{label:"TRUNG TÍNH – CHỜ XÁC NHẬN",tone:"neutral",symbol:"–",description:"Xu hướng chưa được xác nhận rõ ràng."},
 cautious:{label:"THẬN TRỌNG",tone:"warning",symbol:"!",description:"Các yếu tố rủi ro hoặc điều kiện bất lợi chiếm ưu thế."},
 defensive:{label:"PHÒNG THỦ",tone:"negative",symbol:"▼",description:"Rủi ro cao, trọng tâm nghiên cứu là bảo toàn vốn."},
 insufficient_data:{label:"CHƯA ĐỦ DỮ LIỆU",tone:"unknown",symbol:"?",description:"Dữ liệu chưa đủ để đưa ra đánh giá toàn diện."}
});
export const LEGACY_STATUS = Object.freeze({
 "TÍCH CỰC CÓ ĐIỀU KIỆN":"positive","TÍCH CỰC • CHỜ NHỊP RUNG":"positive",
 "KHỎE • CHỜ ĐIỂM MUA":"neutral","TÍCH LŨY CÓ ĐIỀU KIỆN":"neutral","GIỮ / CHỜ":"neutral","CHỜ XÁC NHẬN":"neutral","THEO DÕI":"neutral","CHỜ / TRADING NGẮN":"neutral",
 "KHÔNG":"cautious","THẬN TRỌNG":"cautious",
 "CHỜ / PHÒNG THỦ":"defensive","PHÒNG THỦ":"defensive","PHÒNG THỦ / CHỜ XÁC NHẬN":"defensive","PHÒNG THỦ / GIẢM RỦI RO":"defensive","PHÒNG THỦ / HẠ RỦI RO":"defensive","GIẢM RỦI RO":"defensive",
 "CHƯA ĐÁNH GIÁ":"insufficient_data"
});
const list = x => Array.isArray(x) ? x : [];
const clean = x => typeof x === "string" ? x.trim() : "";
const present = x => x !== null && x !== undefined && !["","—","–","N/A"].includes(String(x).trim());
const unique = xs => [...new Set(xs.filter(present))];
export const searchKey = x => String(x ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/đ/g,"d").trim();
export function publicText(value) {
 let s=clean(value);
 const replacements=[
 [/EOD đã khóa/giu,"Số liệu cuối phiên đã chốt"],[/MARKET SNAPSHOT/giu,"Số liệu phiên"],
 [/cổng (?:số )?lõi đạt có giới hạn/giu,"Số liệu chính đã kiểm chứng, còn một số giới hạn"],
 [/không tự tạo mốc vô hiệu/giu,"Chưa đủ căn cứ xác định ngưỡng vô hiệu của nhận định"],
 [/theo quy tắc chấm điểm của Prompt/giu,"Theo phương pháp đánh giá"],
 [/hard veto/giu,"điều kiện hạn chế bắt buộc"],[/chặn cứng/giu,"điều kiện hạn chế bắt buộc"],[/\bVETO\b/giu,"điều kiện hạn chế"],
 [/Confluence Score/giu,"Điểm tổng hợp các yếu tố thị trường"],[/Data Gate/giu,"Kiểm tra độ đầy đủ của dữ liệu"],
 [/Sổ gốc/giu,"hồ sơ theo dõi lịch sử"],[/\bTB(5|10|20)\b/giu,"bình quân $1 phiên"],[/\bEOD\b/giu,"cuối phiên"],
 [/nghiên cứu rút gọn/giu,"phạm vi đánh giá còn giới hạn"],[/rút gọn/giu,"phạm vi đánh giá còn giới hạn"],
 [/\bv3\.3\.1\b/giu,"phương pháp nghiên cứu"],[/\bPrompt\b/giu,"phương pháp đánh giá"],[/\brulebook\b/giu,"bộ nguyên tắc nghiên cứu"],
 [/\bScore\b/giu,"điểm đánh giá"],[/\bR\s*:\s*R\b/giu,"tỷ lệ lợi nhuận/rủi ro"],
 [/\bstoploss\b/giu,"ngưỡng cắt lỗ"],[/\bmargin\b/giu,"đòn bẩy tài chính"],[/\bleaders?\b/giu,"cổ phiếu dẫn dắt"],
 [/\btrading\b/giu,"giao dịch ngắn hạn"],[/\bretest\b/giu,"kiểm định lại vùng giá"],[/\bbreakout\b/giu,"vượt vùng kháng cự"],
 [/\brisk[- ]off\b/giu,"suy yếu"],[/\bmid[- ]cap\b/giu,"nhóm vốn hóa trung bình"],[/\bcoverage\b/giu,"phạm vi cổ phiếu theo dõi"],
 [/\bIF\s*[–—-]\s*THEN\b/giu,"Nếu – Thì"],[/\bIF\b/g,"NẾU"],[/\bTHEN\b/g,"THÌ"]
 ];
 for(const [from,to] of replacements)s=s.replace(from,to);
 return s;
}
export function fullDate(iso){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(iso||""))return "";
 const d=new Date(iso+"T00:00:00+07:00");
 if(!Number.isFinite(d.getTime()))return "";
 return new Intl.DateTimeFormat("vi-VN",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric",timeZone:"Asia/Ho_Chi_Minh"}).format(d);
}
export function archiveDate(iso){return /^\d{4}-\d{2}-\d{2}$/.test(iso||"")?iso.split("-").reverse().join("/"):"";}
export function publication(entry){
 const v=entry?.displayBrief?.publishedAtIso;
 if(typeof v==="string" && /T\d{2}:\d{2}/.test(v) && Number.isFinite(Date.parse(v))){
 return new Intl.DateTimeFormat("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:"Asia/Ho_Chi_Minh"}).format(new Date(v));
 }
 const p=clean(entry?.publishedAt), same=archiveDate(entry?.date);
 return p.startsWith(same+" • ")?p.slice(same.length+3):p;
}
const keyFor = label => {
 const s=searchKey(label);
 if(/^vn[- ]?index$/.test(s))return "vnIndex";
 if(/khop lenh.*hose|thanh khoan.*hose/.test(s))return "liquidity";
 if(/do rong/.test(s))return "breadth";
 if(/nen ky thuat|xu huong ky thuat|trang thai ky thuat|vi tri.*ma/.test(s))return "technical";
 return "";
};
const fmt=x=>Number.isFinite(x)?new Intl.NumberFormat("vi-VN",{maximumFractionDigits:8}).format(x):"";
const signed=x=>Number.isFinite(x)?(x>0?"+":x<0?"−":"")+fmt(Math.abs(x)):"";
const numParts=(a,b)=>unique([a,b]).join(" • ");
function safeSource(url){return typeof url==="string"&&(/^(https?:\/\/)/i.test(url)||/^(?:\.\/)?(?:reports|docs|assets)\/[\w./%()\-]+$/i.test(url));}
function sourceNames(ids,sources){return unique(list(ids).map(id=>sources.find(s=>s?.id===id)?.label)).join(", ");}
function newMetrics(f,sources){
 const a=f?.vnIndex,b=f?.liquidity,c=f?.breadth,d=f?.technical;
 const rows=[];
 if(Number.isFinite(a?.close))rows.push({key:"vnIndex",label:"VN-Index",value:fmt(a.close),change:numParts(signed(a.changePoints),Number.isFinite(a.changePct)?signed(a.changePct)+"%":""),tone:a.changePoints<0?"negative":a.changePoints>0?"positive":"neutral",source:sourceNames(a.sourceIds,sources)});
 if(Number.isFinite(b?.matchedValue)){
 const cmp=b.averageComparison; const comparison=Number.isFinite(cmp?.changePct)&&cmp.scope===b.scope?numParts(signed(cmp.changePct)+"% so với bình quân "+cmp.period+" phiên",sourceNames(cmp.sourceIds,sources)):"";
 rows.push({key:"liquidity",label:"Khớp lệnh "+(clean(b.scope)||"HOSE"),value:fmt(b.matchedValue)+" "+(clean(b.unit)||"tỷ đồng"),change:comparison,tone:"neutral",source:sourceNames(b.sourceIds,sources)});
 }
 if([c?.advancing,c?.declining,c?.unchanged].every(x=>Number.isInteger(x)&&x>=0))rows.push({key:"breadth",label:"Độ rộng "+(clean(c.scope)||"HOSE"),value:c.advancing+" tăng / "+c.declining+" giảm",change:c.unchanged+" tham chiếu",breadth:[c.advancing,c.unchanged,c.declining],tone:"neutral",source:sourceNames(c.sourceIds,sources)});
 if(present(d?.positionVsMA20)||present(d?.positionVsMA50))rows.push({key:"technical",label:"Xu hướng kỹ thuật",value:unique([d.positionVsMA20,d.positionVsMA50]).join(" • "),change:clean(d.ma20Slope),tone:"neutral",source:sourceNames(d.sourceIds,sources)});
 return rows;
}
const attribution = {
 "2026-11-25":{vnIndex:"HOSE, BSC, VNIndex.ai",liquidity:"HOSE; BSC (rổ VN-Index, khác phạm vi)",breadth:"VNDIRECT, Thời báo Tài chính Việt Nam",technical:"VNIndex.ai; BSC đối chiếu MA20"},
 "2026-11-23":{vnIndex:"HOSE, VNIndex.ai, BSC",liquidity:"HOSE; nmquan (chuỗi riêng)",breadth:"VNDIRECT, Thời báo Tài chính Việt Nam",technical:"VNIndex.ai"},
 "2026-09-17":{vnIndex:"VNDIRECT Finfo",liquidity:"VNDIRECT",breadth:"VNDIRECT Finfo",technical:"VNDIRECT"},
 "2026-07-17":{vnIndex:"Dữ liệu lịch sử VN-Index (xem nguồn gốc)"}
};
// Curated, non-numeric excerpts for the latest report; source text remains intact below.
const excerpts={
 "2026-11-25":{conclusion:"Chưa có đủ bằng chứng về một nhịp hồi phục bền vững.",movement:"Áp lực bán lan rộng.",implication:"Thanh khoản khớp thấp; nhịp hồi chưa được xác nhận.",nextSession:"Kiểm chứng sức cầu, độ rộng và sự phân hóa."}
};
const archivedDisclaim = /^Nội dung mang tính tham khảo,\s*không phải khuyến nghị mua\/bán[^\n]*$/iu;
const stripDisclaimer=s=>clean(s).replace(/Nội dung mang tính tham khảo,\s*không phải khuyến nghị mua\/bán[^.]*\./giu,"").trim();
function breadthFrom(metric){
 const t=[metric.value,metric.change].join(" ");
 const n=word=>{const m=t.match(new RegExp("(\\d+)\\s*(?:mã\\s*)?"+word,"iu"));return m?Number(m[1]):null;};
 const a=[n("tăng"),n("(?:tham chiếu|đứng)"),n("giảm")];
 // No ratio if the source provides an ambiguous extra category.
 return a.every(x=>x!==null)&&!/\bmã sàn\b|giảm sàn|tăng trần/iu.test(t)?a:null;
}
function legacyMetric(m,e){
 const key=keyFor(m?.label);
 const value=clean(m?.value),change=clean(m?.change);
 const row={key,label:publicText(m?.label),value:publicText(value),change:publicText(change),tone:m?.tone,source:attribution[e.date]?.[key]||"",valueParts:list(m?.valueParts).map(p=>({...p,text:publicText(p.text)})),changeParts:list(m?.changeParts).map(p=>({...p,text:publicText(p.text)}))};
 if(key==="breadth")row.breadth=breadthFrom(m);
 return row;
}
function legacyAnalysis(e){
 if(excerpts[e.date])return excerpts[e.date];
 // Keep the narrative intact below; only extract whole non-numeric sentences, not generated advice.
 const thesis=clean(e.brief?.thesis||e.thesis);
 const sentences=thesis.split(/(?<=[.!?])\s+(?=[A-ZÀ-Ỹ])/u).filter(s=>!/\d/.test(s)&&!archivedDisclaim.test(s));
 const focus=clean(e.focus);
 const conclusion=sentences.pop()||"";
 return {conclusion:publicText(conclusion),movement:publicText(sentences.shift()),implication:publicText(sentences.shift()),nextSession:!/\d/.test(focus)?publicText(focus):""};
}
export function normalizeDailyInsight(e={}){
 const v=e.displayBrief?.schemaVersion===3?e.displayBrief:null;
 const requested=v?.status||LEGACY_STATUS[clean(e.sentimentLabel)];
 const status=Object.prototype.hasOwnProperty.call(STATUS,requested)?requested:"insufficient_data";
 const sourceItems=list(v?.sources).length?list(v.sources):list(e.sources);
 const sources=sourceItems.filter(s=>present(s?.label)&&safeSource(s?.url)).map(s=>({id:s.id,label:s.label,url:s.url}));
 const all=list(e.metrics).filter(m=>present(m?.value)).map(m=>legacyMetric(m,e));
 let metrics=v?newMetrics(v.marketFacts,sources):all.filter(m=>m.key);
 const extraMetrics=v?[]:all.filter(m=>!m.key);
 if(!v&&e.date==="2026-09-17"&&!metrics.some(m=>m.key==="technical"))metrics.push({key:"technical",label:"Xu hướng kỹ thuật",value:"Trên MA20, MA50 và MA200",change:"",source:"VNDIRECT",tone:"positive"});
 const rank=["vnIndex","liquidity","breadth","technical"];
 metrics=metrics.filter((m,i,a)=>a.findIndex(x=>x.key===m.key)===i).sort((a,b)=>rank.indexOf(a.key)-rank.indexOf(b.key));
 const a=v?{conclusion:clean(v.conclusion),...v.analysis}:legacyAnalysis(e);
 const narrative=unique([e.thesis,e.brief?.thesis,...list(e.backdrop),e.focus,...list(e.brief?.evidence).flatMap(x=>[x.signal,x.detail]),...list(e.brief?.actions)]).filter(s=>!archivedDisclaim.test(s)).map(s=>publicText(stripDisclaimer(s))).filter(Boolean);
 const quality=unique(v?[v.dataQuality?.summary,...list(v.dataQuality?.limitations)]:[e.brief?.dataIntegrity?.label,e.dataStatus,e.inference,...list(e.limitations)]).map(s=>publicText(stripDisclaimer(s))).filter(Boolean);
 const levels=v?list(v.technicalLevels).filter(x=>present(x.value)).map(x=>({label:clean(x.label)||clean(x.type),value:typeof x.value==="number"?fmt(x.value):x.value,note:publicText(x.note),source:sourceNames(x.sourceIds,sources)})):list(e.levels).filter(x=>present(x?.value)).map(x=>({label:publicText(x.label),value:x.value,note:publicText(x.note)}));
 const scenarios=v?list(v.scenarios).map(x=>({state:x.state,condition:clean(x.condition),confirmation:clean(x.confirmation),conclusion:clean(x.conclusion)})):list(e.playbook).map(x=>({state:x.state,condition:clean(x.if),confirmation:"",conclusion:clean(x.then)}));
 return {id:e.id,date:e.date,publication:publication(e),status,headline:publicText(v?.headline||e.brief?.headline||e.title),analysis:a,metrics,extraMetrics,levels,scenarios,context:unique(v?list(v.context):narrative),quality:unique(quality),sources,legacyLabel:clean(e.sentimentLabel)};
}
export function filterArchive(entries,month,query){
 const q=searchKey(query);
 return entries.filter(e=>(!month||e.date?.startsWith(month))&&(!q||searchKey([archiveDate(e.date),e.date,e.title,e.brief?.headline,e.displayBrief?.headline,e.sentimentLabel].join(" ")).includes(q)));
}
