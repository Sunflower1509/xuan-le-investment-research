import { STATUS, normalizeDailyInsight, filterArchive, archiveDate, fullDate, publicText } from "./daily-market-view-model.mjs";
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const tone=x=>["positive","negative","warning","neutral","unknown"].includes(x)?x:"neutral";
const show=x=>x!=null&&String(x).trim()!==""&&String(x).trim()!=="—";
const disclaimer="Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.";
const scenarioNames={positive:"Phục hồi",neutral:"Chờ xác nhận",risk_off:"Suy yếu"};
const formattedParts=(parts,value,t)=>parts?.length?parts.map(p=>'<span class="dmv3-tone-'+tone(p.tone)+'">'+esc(p.text)+'</span>').join(""):'<span class="dmv3-tone-'+tone(t)+'">'+esc(value)+'</span>';
function badge(status){const s=STATUS[status];return '<span class="dmv3-state dmv3-tone-'+s.tone+'"><span aria-hidden="true">'+esc(s.symbol)+'</span> '+esc(s.label)+'</span>';}
function metric(m){
 const bar=Array.isArray(m.breadth)&&m.breadth.reduce((a,b)=>a+b,0)>0?'<div class="dmv3-breadth" aria-hidden="true">'+m.breadth.map((n,i)=>'<span class="dmv3-breadth-'+i+'" style="flex:'+n+'"></span>').join("")+'</div>':"";
 return '<article class="dmv3-metric"><div class="dmv3-label">'+esc(m.label)+'</div><strong class="dmv3-value">'+formattedParts(m.valueParts,m.value,m.key==="vnIndex"?"neutral":m.tone)+'</strong>'+(show(m.change)?'<div class="dmv3-change">'+formattedParts(m.changeParts,m.change,m.tone)+'</div>':"")+bar+(show(m.source)?'<small class="dmv3-source">Nguồn: '+esc(m.source)+'</small>':'<small class="dmv3-source">Xem nguồn kiểm chứng</small>')+'</article>';
}
function disclosure(title,body){return body?'<details class="dmv3-details"><summary>'+esc(title)+'</summary><div class="dmv3-detail-body">'+body+'</div></details>':"";}
function renderReport(m){
 const a=m.analysis||{};
 const rows=[["Diễn biến",a.movement],["Ý nghĩa",a.implication],["Theo dõi phiên tới",a.nextSession]].filter(x=>show(x[1]));
 const context=m.context.filter(x=>x!==a.conclusion&&!rows.some(r=>r[1]===x));
 const extras=m.extraMetrics.length?'<div class="dmv3-facts">'+m.extraMetrics.map(metric).join("")+'</div>':"";
 const analysis=rows.length?'<section class="dmv3-section"><h4>Nhận định chính</h4><dl class="dmv3-analysis">'+rows.map(([l,v])=>'<div><dt>'+esc(l)+'</dt><dd>'+esc(v)+'</dd></div>').join("")+'</dl></section>':"";
 const scenarios=m.scenarios.filter(s=>show(s.condition)||show(s.conclusion));
 const playbook=scenarios.length?'<section class="dmv3-section"><h4>Kịch bản Nếu – Thì</h4><div class="dmv3-scenarios">'+scenarios.map((s,i)=>'<article class="dmv3-scenario"><div><span class="dmv3-scenario-name">'+esc(scenarioNames[s.state]||"Kịch bản "+(i+1))+'</span><strong>'+esc(s.condition)+'</strong></div>'+(show(s.confirmation)?'<div><span class="dmv3-label">Xác nhận</span><p>'+esc(s.confirmation)+'</p></div>':"")+'<div><span class="dmv3-label">Kết luận / hành động</span><p>'+esc(s.conclusion)+'</p></div></article>').join("")+'</div></section>':"";
 const levels=m.levels.length?'<section class="dmv3-section"><h4>Các mốc kỹ thuật</h4><dl class="dmv3-levels">'+m.levels.map(l=>'<div><dt>'+esc(l.label)+'</dt><dd><strong>'+esc(l.value)+'</strong>'+(show(l.note)?'<small>'+esc(l.note)+'</small>':"")+(show(l.source)?'<small>Nguồn: '+esc(l.source)+'</small>':"")+'</dd></div>').join("")+'</dl></section>':"";
 const sourceLinks=m.sources.map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+'</a></li>').join("");
 const legend='<dl class="dmv3-legend">'+Object.keys(STATUS).map(k=>'<div><dt>'+badge(k)+'</dt><dd>'+esc(STATUS[k].description)+'</dd></div>').join("")+'</dl>';
 return '<header class="dmv3-header"><div class="dmv3-meta"><time datetime="'+esc(m.date)+'">'+esc(fullDate(m.date))+'</time>'+(show(m.publication)?'<span>• Phát hành: '+esc(m.publication)+'</span>':"")+'</div>'+badge(m.status)+'<h3 id="dmv3-headline" tabindex="-1">'+esc(m.headline)+'</h3>'+(show(a.conclusion)?'<p class="dmv3-conclusion">'+esc(a.conclusion)+'</p>':"")+'</header>'+
 (m.metrics.length?'<section class="dmv3-section"><h4>Số liệu phiên</h4><div class="dmv3-facts">'+m.metrics.map(metric).join("")+'</div></section>':"")+analysis+playbook+levels+
 '<div class="dmv3-disclosures">'+disclosure("Bối cảnh dòng tiền và ngành",extras+context.map(x=>'<p>'+esc(x)+'</p>').join(""))+disclosure("Phương pháp và độ tin cậy dữ liệu",m.quality.map(x=>'<p>'+esc(x)+'</p>').join("")+legend)+disclosure("Nguồn kiểm chứng",sourceLinks?'<ul>'+sourceLinks+'</ul>':"")+'</div>'+
 '<footer class="dmv3-footer"><p>'+esc(disclaimer)+'</p><button type="button" data-dmv3-print>In bản tin</button></footer>';
}
export function mountDailyMarket(root,entries){
 if(!root)return null;
 const archive=root.querySelector("[data-role='daily-archive-list']"), report=root.querySelector("[data-role='daily-insight']"), count=root.querySelector("[data-role='daily-issue-count']");
 if(!archive||!report)return null;
 const input=root.querySelector("[data-dmv3-search]"), month=root.querySelector("[data-dmv3-month]"), picker=root.querySelector("[data-dmv3-picker]"), more=root.querySelector("[data-dmv3-more]"), live=root.querySelector("[data-dmv3-count]");
 let active=entries[0]?.id,limit=10;
 const cache=new Map();
 const get=e=>{if(!cache.has(e.id))cache.set(e.id,normalizeDailyInsight(e));return cache.get(e.id);};
 if(count)count.textContent=String(entries.length);
 if(month)month.innerHTML='<option value="">Tất cả các tháng</option>'+[...new Set(entries.map(e=>e.date.slice(0,7)))].map(x=>'<option value="'+esc(x)+'">'+esc(x.slice(5)+"/"+x.slice(0,4))+'</option>').join("");
 function updateArchive(){
   const filtered=filterArchive(entries,month?.value||"",input?.value||"");
   const visible=filtered.slice(0,limit);
   archive.innerHTML=visible.map(e=>{const m=get(e);return '<button type="button" class="dmv3-archive-item" data-dmv3-id="'+esc(e.id)+'" aria-current="'+(e.id===active?"true":"false")+'" title="'+esc(m.headline)+'"><span class="dmv3-archive-date">'+esc(archiveDate(e.date))+(e.id===entries[0]?.id?' · Mới nhất':"")+'</span><strong>'+esc(m.headline)+'</strong>'+badge(m.status)+'</button>';}).join("")||'<p>Không tìm thấy bản tin.</p>';
   if(picker){const options=filtered.some(e=>e.id===active)?filtered:[...entries.filter(e=>e.id===active),...filtered];picker.innerHTML=options.map(e=>'<option value="'+esc(e.id)+'">'+esc(archiveDate(e.date)+" — "+get(e).headline)+'</option>').join("");picker.value=active||"";}
   if(more){more.hidden=limit>=filtered.length;more.textContent="Xem thêm "+Math.min(10,Math.max(0,filtered.length-limit))+" bản";}
   if(live)live.textContent=visible.length+" / "+filtered.length+" bản";
 }
 function select(id,focus=false){
   const entry=entries.find(e=>e.id===id)||entries[0];
   if(!entry){report.textContent="Chưa có bản nhận định.";return;}
   active=entry.id;report.innerHTML=renderReport(get(entry));updateArchive();
   if(focus){const h=report.querySelector("h3");h?.focus({preventScroll:true});if(matchMedia("(max-width:980px)").matches)report.scrollIntoView({block:"start",behavior:"auto"});}
 }
 input?.addEventListener("input",()=>{limit=10;updateArchive();});
 month?.addEventListener("change",()=>{limit=10;updateArchive();});
 picker?.addEventListener("change",()=>select(picker.value,true));
 more?.addEventListener("click",()=>{limit+=10;updateArchive();if(more.hidden)archive.querySelector("button:last-child")?.focus();});
 root.addEventListener("click",e=>{
   const button=e.target.closest("[data-dmv3-id]");if(button){select(button.dataset.dmv3Id,true);return;}
   if(e.target.closest("[data-dmv3-print]")){
     const closed=[...report.querySelectorAll("details:not([open])")];closed.forEach(d=>d.open=true);
     document.body.classList.add("dmv3-printing");
     const restore=()=>{closed.forEach(d=>d.open=false);document.body.classList.remove("dmv3-printing");};
     window.addEventListener("afterprint",restore,{once:true});try{window.print();}finally{restore();}
   }
 });
 select(active);return {select};
}
