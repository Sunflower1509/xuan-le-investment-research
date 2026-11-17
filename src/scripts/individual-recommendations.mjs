import { INDIVIDUAL_RECOMMENDATIONS as CONFIG } from "../data/individual-recommendations.mjs";
import nt2Eod from "../data/individual-nt2-eod.json";
import exits from "../data/individual-recommendations-exits.json";
import { buildIndividualRows } from "./individual-recommendations-core.mjs";

// Public read-only dashboard. Does not create real trades or edit the existing watchlist.
(() => {
  "use strict";
  const root=document.querySelector("[data-role='individual-recommendations-root']");
  if(!root)return;
  const escapeHtml=(s)=>String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
  const money=(n)=>Number.isFinite(n)?new Intl.NumberFormat("vi-VN",{maximumFractionDigits:2}).format(n):"—";
  const pct=(n)=>Number.isFinite(n)?(n>0?"+":n<0?"−":"")+new Intl.NumberFormat("vi-VN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.abs(n))+"%":"—";
  const date=(s)=>/^\d{4}-\d{2}-\d{2}$/.test(s||"")?s.split("-").reverse().join("/"):"—";
  const source=window.RESEARCH_DATA;
  let rows;
  try{rows=buildIndividualRows(CONFIG,source,nt2Eod,exits);}
  catch(error){root.innerHTML='<p class="ir-error" role="alert">Chưa đủ dữ liệu xác minh để công bố bảng khuyến nghị riêng.</p>';return;}
  const select=root.querySelector("[data-role='individual-recommendations-filter']");
  const desk=root.querySelector("[data-role='individual-recommendations-desktop']");
  const mobile=root.querySelector("[data-role='individual-recommendations-mobile']");
  const summary=root.querySelector("[data-role='individual-recommendations-summary']");
  const asOf=root.querySelector("[data-role='individual-recommendations-asof']");
  if(!select||!desk||!mobile||!summary||!asOf)return;
  asOf.textContent="Giá EOD nghiên cứu: "+date(source.meta.updated)+" • Công bố vùng: "+date(CONFIG.publishedOn);
  const displayRow=(row)=>{
    if(!row.exclusion)return row;
    return {
      ...row,close:row.exclusion.close,priceDate:row.exclusion.date,
      deltaPct:row.exclusion.deltaPct,midpoint:row.exclusion.midpoint,
      stopFive:row.exclusion.stopFive,stopSeven:row.exclusion.stopSeven,
      zoneLow:row.exclusion.zoneLow,zoneHigh:row.exclusion.zoneHigh,
      fresh:true,changePct:null
    };
  };
  const status=(row)=>{
    if(row.exclusion)return {label:row.exclusion.severity==="critical-7"?"ĐÃ LOẠI • VI PHẠM −7%":"ĐÃ LOẠI • VI PHẠM −5%",css:"ir-danger"};
    if(!row.fresh)return {label:"CHỜ EOD XÁC MINH",css:"ir-neutral"};
    if(row.close<=row.stopFive)return {label:"CẢNH BÁO GIẢM ≥5%",css:"ir-danger"};
    if(row.relation==="above")return {label:"CHỜ • GIÁ TRÊN VÙNG",css:"ir-warning"};
    if(row.relation==="below")return {label:"CHỜ • GIÁ DƯỚI VÙNG",css:"ir-warning"};
    return {label:"TRONG VÙNG • CHỜ XÁC NHẬN",css:"ir-success"};
  };
  const tone=(n)=>!Number.isFinite(n)?"ir-muted":n>=0?"ir-up":"ir-down";
  const rowHtml=(original)=>{
    const r=displayRow(original),st=status(original);
    return [
      '<tr class="',original.exclusion?'ir-archived':'','"><th scope="row" class="ir-ticker">',escapeHtml(r.ticker),'</th>',
      '<td class="ir-num">',money(r.close),'<small>',date(r.priceDate),'</small></td>',
      '<td class="ir-num">',money(r.zoneLow),'–',money(r.zoneHigh),'</td>',
      '<td class="ir-num">',money(r.midpoint),'</td>',
      '<td class="ir-num ',tone(r.deltaPct),'">',pct(r.deltaPct),'</td>',
      '<td class="ir-num">',money(r.stopFive),'</td>',
      '<td class="ir-num">',money(r.stopSeven),'</td>',
      '<td class="ir-num">',money(r.target1),'<small>R/R ',r.rr1.toFixed(2),'</small></td>',
      '<td class="ir-num">',money(r.target2),'<small>R/R ',r.rr2.toFixed(2),'</small></td>',
      '<td><span class="ir-status ',st.css,'">',escapeHtml(st.label),'</span></td></tr>'
    ].join("");
  };
  const cardHtml=(original)=>{
    const r=displayRow(original),st=status(original);
    return [
      '<article class="ir-card',original.exclusion?' ir-archived':'','"><div class="ir-card-head"><strong>',escapeHtml(r.ticker),
      '</strong><span class="ir-status ',st.css,'">',escapeHtml(st.label),'</span></div>',
      '<div class="ir-card-grid"><div><span>Giá EOD (',date(r.priceDate),')</span><b>',money(r.close),'</b></div>',
      '<div><span>Vùng mua</span><b>',money(r.zoneLow),'–',money(r.zoneHigh),'</b></div>',
      '<div><span>Giá TB vùng</span><b>',money(r.midpoint),'</b></div>',
      '<div><span>Chênh lệch giá TB</span><b class="',tone(r.deltaPct),'">',pct(r.deltaPct),'</b></div>',
      '<div><span>Mốc cảnh báo −5%</span><b>',money(r.stopFive),'</b></div>',
      '<div><span>Mốc rủi ro −7%</span><b>',money(r.stopSeven),'</b></div>',
      '<div><span>Kịch bản T1 • 2R</span><b>',money(r.target1),'</b></div>',
      '<div><span>Kịch bản T2 • 3R</span><b>',money(r.target2),'</b></div></div>',
      '<details class="ir-detail"><summary>Luận điểm và cảnh báo</summary><p>',escapeHtml(r.note),
      '</p><p>Đây là vùng nghiên cứu do chủ website cung cấp; mục tiêu chỉ là kịch bản R/R. ',
      original.exclusion?'Sự kiện loại lưu tại phiên '+date(original.exclusion.date)+'. ':'',
      'Không giả định đã mua/bán cổ phiếu thực tế.</p></details></article>'
    ].join("");
  };
  const render=()=>{
    const archived=rows.filter(row=>row.exclusion);
    const active=rows.filter(row=>!row.exclusion);
    const display=select.value==="archived"?archived:active;
    summary.innerHTML='<div><span>Đang nghiên cứu</span><strong>'+String(active.length).padStart(2,"0")+'</strong></div>'
      +'<div><span>Đã loại theo EOD</span><strong>'+String(archived.length).padStart(2,"0")+'</strong></div>'
      +'<div><span>Chưa đủ EOD đồng bộ</span><strong>'+String(active.filter(x=>!x.fresh).length).padStart(2,"0")+'</strong></div>';
    desk.innerHTML=display.length?
      '<table class="ir-table"><caption class="sr-only">Bốn mã nghiên cứu cá nhân, vùng mua, giá EOD và mức quản trị rủi ro</caption>'
      +'<thead><tr><th scope="col">MÃ</th><th scope="col">GIÁ EOD</th><th scope="col">VÙNG MUA</th><th scope="col">GIÁ TB</th>'
      +'<th scope="col">SO VỚI GIÁ TB</th><th scope="col">CẢNH BÁO −5%</th><th scope="col">GIỚI HẠN −7%</th>'
      +'<th scope="col">T1 • 2R</th><th scope="col">T2 • 3R</th><th scope="col">TRẠNG THÁI</th></tr></thead>'
      +'<tbody>'+display.map(rowHtml).join("")+'</tbody></table>'
      :'<p class="ir-empty">Chưa có mã trong nhóm này.</p>';
    mobile.innerHTML=display.length?display.map(cardHtml).join(""):'<p class="ir-empty">Chưa có mã trong nhóm này.</p>';
  };
  select.addEventListener("change",render);
  render();
})();
