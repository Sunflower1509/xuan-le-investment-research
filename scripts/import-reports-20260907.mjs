#!/usr/bin/env node
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';

const DATA='src/data/research-data.js';
const LOGOS='src/data/company-logos.js';
const TARGET=new Set(['BAF','PAN','HUT','YEG','TNG','OCB']);
const load=(file,key)=>{const box={window:{}};vm.runInNewContext(fs.readFileSync(file,'utf8'),box,{filename:file});return box.window[key];};
const clone=x=>JSON.parse(JSON.stringify(x));

const reports=[
  {id:'BAF-20260907',ticker:'BAF',company:'CTCP Nông nghiệp BAF Việt Nam',sector:'Chăn nuôi & thực phẩm',exchange:'HOSE',date:'2026-09-07',recommendation:'TRÁNH / LOẠI MUA MỚI',status:'reject',marketPrice:32550,marketPriceDate:'2026-09-04',baseValue:22449,valueLabel:'Giá trị kỳ vọng DCF',rangeLow:18000,rangeHigh:27000,gapLabel:'Giá 32.550 đồng/cp cao hơn cận trên 27.000 đồng/cp khoảng 20,6%; không có biên an toàn dương tại giá tham chiếu.',method:'DCF/FCFF; P/E, EV/EBITDA và P/B kiểm tra chéo',summary:'BAF có câu chuyện tăng trưởng công suất thật, nhưng đang ở pha tái đầu tư nặng vốn với FCF âm và đòn bẩy cao; giá tham chiếu đã vượt vùng giá trị hợp lý nên báo cáo kết luận TRÁNH / LOẠI mua mới.',action:{zoneLow:12600,zoneHigh:13500,baseValue:22449,stop:null,basisDate:'2026-09-07',recommendation:'CÓ MUA CHỈ KHI ĐỦ MOS VÀ THESIS KHÔNG XẤU ĐI',eligibility:'active',condition:'IF giá 12.600-13.500 đồng/cp và thesis không xấu đi THEN có thể giải ngân từng phần; stop kỹ thuật 5% dưới giá vốn và tuyệt đối không nới stop quá 7%. IF CFO tiếp tục âm sâu và net debt/EBITDA không hạ THEN LOẠI, không bình quân giá xuống.'},file:'reports/BAF_2026-09-07.pdf',edition:'Bản định giá 07.09.2026'},
  {id:'PAN-20260907',ticker:'PAN',company:'CTCP Tập đoàn PAN',sector:'Holding nông nghiệp / thủy sản / thực phẩm',exchange:'HOSE',date:'2026-09-07',recommendation:'THEO DÕI / CHỜ',status:'wait',marketPrice:19150,marketPriceDate:'2026-09-04',baseValue:22198,valueLabel:'Giá trị kỳ vọng SOTP',rangeLow:16535,rangeHigh:29042,gapLabel:'Giá 19.150 đồng/cp thấp hơn giá trị kỳ vọng SOTP 22.198 đồng/cp khoảng 13,7%, nhưng chưa đạt chuẩn MOS 25-30%.',method:'SOTP theo mảng; holding discount; core earnings làm neo',summary:'PAN có nền tảng tài sản tốt và bảng cân đối cải thiện sau thoái Bibica, nhưng lợi nhuận 2026 chứa khoản one-off lớn; mức giá tham chiếu chưa tạo đủ MOS nên trạng thái là THEO DÕI / CHỜ.',action:{zoneLow:20000,zoneHigh:20200,baseValue:22198,stop:19000,targets:[21200,21600,22200],basisDate:'2026-09-07',recommendation:'CHỜ - CHỈ KÍCH HOẠT TACTICAL SAU BREAKOUT/RETEST',eligibility:'active',condition:'Chỉ cân nhắc tactical khi giá trước đó vượt 20.300 với thanh khoản xác nhận, sau đó retest 20.000-20.200 giữ được; stoploss 19.000; mục tiêu 21.200-21.600 và 22.200. Nếu mất 18.750, setup ngắn hạn bị vô hiệu. Vùng mua định giá cực bảo thủ theo MOS là 11.574-12.401 đồng/cp.'},file:'reports/PAN_2026-09-07.pdf',edition:'Bản định giá 07.09.2026'},
  {id:'HUT-20260907',ticker:'HUT',company:'CTCP Tasco',sector:'Holding đa ngành',exchange:'HNX',date:'2026-09-07',recommendation:'CHỜ / THEO DÕI',status:'wait',marketPrice:12700,marketPriceDate:'2026-09-04',baseValue:9786,valueLabel:'Giá trị kỳ vọng SOTP',rangeLow:7042,rangeHigh:12858,gapLabel:'Giá 12.700 đồng/cp đang sát cận trên vùng SOTP và cao hơn giá trị kỳ vọng; chưa có MOS 25-30%.',method:'SOTP - holding đa ngành / NCI',summary:'HUT có động lực tăng trưởng từ Mobility, VETC, bảo hiểm và DNP, nhưng quyền lợi kinh tế thuộc cổ đông HUT chưa tăng tương ứng với quy mô hợp nhất; trạng thái CHỜ / THEO DÕI.',action:{zoneLow:6736,zoneHigh:7217,baseValue:9786,stop:null,basisDate:'2026-09-07',recommendation:'CHỜ / THEO DÕI',eligibility:'active',condition:'Chỉ nâng lên CÓ MUA khi giá về vùng 6.736-7.217 đồng/cp và luận điểm không xấu đi, hoặc xuất hiện dữ liệu mới đủ sức nâng NAV/earnings attributable. Không mua đuổi.'},file:'reports/HUT_2026-09-07.pdf',edition:'Bản định giá 07.09.2026'},
  {id:'YEG-20260907',ticker:'YEG',company:'CTCP Tập đoàn Yeah1',sector:'Truyền thông / Giải trí',exchange:'HOSE',date:'2026-09-07',recommendation:'TRÁNH / LOẠI MUA MỚI',status:'reject',marketPrice:7450,marketPriceDate:'2026-09-07',baseValue:4727,valueLabel:'Điểm giữa vùng giá trị hợp lý',rangeLow:3476,rangeHigh:5978,gapLabel:'Giá 7.450 đồng/cp cao hơn cận trên vùng giá trị hợp lý khoảng 24,6%; MOS theo điểm giữa là âm.',method:'DCF/FCFF; P/E, P/B và EV/EBITDA kiểm chứng',summary:'YEG tăng trưởng doanh thu nhưng hiệu quả vốn và dòng tiền cốt lõi chưa theo kịp quy mô; tại 7.450 đồng/cp báo cáo kết luận TRÁNH / LOẠI mua mới.',action:{zoneLow:null,zoneHigh:null,baseValue:4727,basisDate:'2026-09-07',recommendation:'LOẠI MUA MỚI',eligibility:'inactive',condition:'Không mua mới ở P0 7.450. Chỉ đánh giá lại giao dịch tactical nếu xuất hiện đúng setup trong báo cáo: retest 7.20-7.35 rồi đóng lại trên 7.45 với khối lượng tăng, hoặc breakout trên 7.99-8.00 với khoảng 0,9 triệu cp. Kết luận định giá vẫn là LOẠI.'},file:'reports/YEG_2026-09-07.pdf',edition:'Bản định giá 07.09.2026'},
  {id:'TNG-20260907',ticker:'TNG',company:'CTCP Đầu tư và Thương mại TNG',sector:'Dệt may xuất khẩu',exchange:'HNX',date:'2026-09-07',recommendation:'CHỜ / THEO DÕI',status:'wait',marketPrice:16600,marketPriceDate:'2026-09-04',baseValue:23123,valueLabel:'Giá trị kỳ vọng tổng hợp',rangeLow:17500,rangeHigh:29000,gapLabel:'Giá 16.600 đồng/cp thấp hơn điểm giữa vùng định giá nhưng chỉ thấp hơn cận dưới khoảng 5,1%; chưa đạt điều kiện MOS 25-30% dưới cận thấp.',method:'DCF/FCFF; P/E, P/B và EV/EBITDA kiểm chứng',summary:'TNG đang rẻ theo P/E nhưng nợ vay cao và dòng tiền vốn lưu động yếu khiến mức rẻ chưa đủ an toàn; trạng thái CHỜ / THEO DÕI.',action:{zoneLow:12250,zoneHigh:13125,baseValue:23123,stop:12053,targets:[17500,23250],basisDate:'2026-09-07',recommendation:'CHỜ / THEO DÕI',eligibility:'active',condition:'IF giá <=13.125 và OCF/vốn lưu động không xấu thêm THEN có thể giải ngân từng phần; không mua một lần. Entry tham chiếu giữa vùng khoảng 12.688, stop 12.053, T1 17.500, T2 23.250. IF nợ vay tăng nhanh, OCF âm sâu hoặc xuất hiện audit/legal red flag trọng yếu THEN hạ fair range và cắt vị thế.'},file:'reports/TNG_2026-09-07.pdf',edition:'Bản định giá 07.09.2026'},
  {id:'OCB-20260907',ticker:'OCB',company:'Ngân hàng TMCP Phương Đông',sector:'Ngân hàng',exchange:'HOSE',date:'2026-09-07',recommendation:'THEO DÕI / CHỜ',status:'wait',marketPrice:10550,marketPriceDate:'2026-09-04',baseValue:12612,valueLabel:'Expected fair value',rangeLow:10865,rangeHigh:14171,gapLabel:'Giá 10.550 đồng/cp có upside so với expected fair value 12.612 đồng/cp nhưng MOS 16,35% chưa đạt chuẩn 25-30%.',method:'P/B gắn ROE + Residual Income',summary:'OCB có tăng trưởng tín dụng và lợi nhuận H1 tích cực, nhưng NPL cao, LLR chưa dày, CASA thấp và ROE chưa tạo khoảng cách đủ lớn so với chi phí vốn; trạng thái THEO DÕI / CHỜ.',action:{zoneLow:10250,zoneHigh:10400,baseValue:12612,stop:9900,targets:[10900,11650,12194],basisDate:'2026-09-07',recommendation:'CHỜ - SETUP TACTICAL, KHÔNG PHẢI VÙNG MUA GIÁ TRỊ',eligibility:'active',condition:'Vùng 10.250-10.400 là setup tactical, không phải vùng mua giá trị theo MOS 25-30%; nếu tham gia phải giữ vị thế nhỏ và stop 9.900. T1 10.900; T2 11.650; T3 12.194. Nếu vượt 11.000 trước retest thì không mua đuổi, chờ retest 10.900-11.000. Vùng mua định giá 25-30% dưới lower bound là 7.605-8.148.'},file:'reports/OCB_2026-09-07.pdf',edition:'Bản định giá 07.09.2026'}
];

const data=load(DATA,'RESEARCH_DATA');
const old=(data.reports||[]).filter(r=>r.reportType!=='trading'&&TARGET.has(String(r.ticker||'').toUpperCase()));
for(const r of old){
  if(r.file&&!reports.some(n=>n.file===r.file)&&fs.existsSync(r.file)) fs.rmSync(r.file,{force:true});
  const img=String(r.visual?.src||'').split(/[?#]/,1)[0];
  if(img&&fs.existsSync(img)) fs.rmSync(img,{force:true});
}
data.reports=(data.reports||[]).filter(r=>r.reportType==='trading'||!TARGET.has(String(r.ticker||'').toUpperCase()));
data.coverage=(data.coverage||[]).filter(c=>!TARGET.has(String(c.ticker||'').toUpperCase()));
reports.sort((a,b)=>a.ticker.localeCompare(b.ticker));
data.reports=[...reports,...data.reports];
for(const r of reports)data.coverage.push({ticker:r.ticker,company:r.company,sector:r.sector,exchange:r.exchange,reportId:r.id,close:r.marketPrice,priceDate:'2026-09-07',changePct:0,volume:0,priceSource:`https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:${r.ticker}~date:2026-09-07&size=10`,priceSourceSecondary:`https://cafef.vn/du-lieu/DuLieu.aspx?cat_id=1009&symbol=${r.ticker}`,action:clone(r.action)});
const vals=data.reports.filter(r=>r.reportType!=='trading');
if(vals.length!==114||data.coverage.length!==114||new Set(vals.map(r=>r.ticker)).size!==114)throw new Error(`Report/coverage gate failed ${vals.length}/${data.coverage.length}`);
fs.writeFileSync(DATA,`window.RESEARCH_DATA = ${JSON.stringify(data,null,2)};\n`);
console.log('REPORT_IMPORT_OK',{removedOld:old.map(r=>`${r.ticker}:${r.file}`),added:reports.map(r=>r.id),count:114});

// Make validation/sync controls scale with the live coverage universe rather than a stale hard-coded count.
{
  const p='scripts/audit-company-logos.mjs';let s=fs.readFileSync(p,'utf8');
  s=s.replace('const expectedCount = 108;\n','');
  const a='const coverage = research.coverage.map((item) => ({ ticker: normalizeTicker(item.ticker), exchange: normalizeTicker(item.exchange) }));\n';
  if(!s.includes(a))throw new Error('audit-company-logos coverage anchor missing');
  s=s.replace(a,a+'const expectedCount = coverage.length;\n');
  s=s.replace('if (coverage.length !== expectedCount) fail("Coverage", `phải có ${expectedCount} mã, hiện có ${coverage.length}`);','if (!coverage.length) fail("Coverage", "coverage trống");');
  fs.writeFileSync(p,s);
}
{
  const p='scripts/sync-company-logos.mjs';let s=fs.readFileSync(p,'utf8');
  const oldGate='  if (universe.length !== 108) throw new Error(`Cổng 108 mã không đạt: coverage=${universe.length}`);';
  if(!s.includes(oldGate))throw new Error('sync-company-logos 108 gate missing');
  s=s.replace(oldGate,'  if (!universe.length) throw new Error("Coverage trống; không đồng bộ logo.");');
  fs.writeFileSync(p,s);
}
{
  const p='tests/ui-company-logos.test.mjs';let s=fs.readFileSync(p,'utf8');
  s=s.replace('test("108 coverage ticker có đúng 108 logo local được khóa theo sàn và ISIN", () => {','test("mọi coverage ticker có đúng logo local được khóa theo sàn và ISIN", () => {');
  s=s.replace('  assert.equal(research.coverage.length, 108);\n  assert.equal(entries.length, 108);\n  assert.equal(mapping.meta.count, 108);','  const expectedCount = research.coverage.length;\n  assert.ok(expectedCount > 0);\n  assert.equal(entries.length, expectedCount);\n  assert.equal(mapping.meta.count, expectedCount);');
  fs.writeFileSync(p,s);
}

const mapping=load(LOGOS,'COMPANY_LOGOS');
const normalize=x=>String(x||'').replace(/<[^>]*>/g,'').trim().toUpperCase();
const clean=x=>String(x||'').replace(/<[^>]*>/g,'').trim();
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function get(url){let e;for(let i=0;i<5;i++){try{const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0 (compatible; XuanLeTVSLogoIncremental/1.0)','origin':'https://www.tradingview.com','referer':'https://www.tradingview.com/'}});if(!r.ok)throw new Error(`HTTP ${r.status}`);return r;}catch(x){e=x;await sleep(900*(i+1));}}throw e;}
fs.mkdirSync('assets/images/logos',{recursive:true});
for(const item of data.coverage.filter(x=>TARGET.has(x.ticker)).map(x=>({ticker:x.ticker.toUpperCase(),exchange:x.exchange.toUpperCase()}))){
  const u=new URL('https://symbol-search.tradingview.com/symbol_search/v3/');
  for(const [k,v] of Object.entries({text:item.ticker,hl:'1',exchange:item.exchange,lang:'en',domain:'production'}))u.searchParams.set(k,v);
  const payload=await (await get(u)).json();
  const exact=(payload.symbols||[]).filter(x=>normalize(x.symbol)===item.ticker&&normalize(x.exchange||x.source_id)===item.exchange);
  if(exact.length!==1)throw new Error(`${item.ticker}/${item.exchange}: exact TradingView results=${exact.length}`);
  const x=exact[0],logoid=x.logo?.logoid||x.logoid,isin=String(x.isin||'');
  if(!logoid||!/^VN[A-Z0-9]{10}$/.test(isin))throw new Error(`${item.ticker}: invalid logo/ISIN`);
  const sourceUrl=`https://s3-symbol-logo.tradingview.com/${logoid}--big.svg`;
  const buf=Buffer.from(await (await get(sourceUrl)).arrayBuffer()),txt=buf.toString('utf8').trim();
  if(!/^(?:<!--[^]*?-->\s*)?<svg\b/i.test(txt)||!/<\/svg>\s*$/i.test(txt)||/<(?:script|foreignObject|iframe|object|embed)\b/i.test(txt)||/\son[a-z]+\s*=/i.test(txt))throw new Error(`${item.ticker}: unsafe/invalid SVG`);
  const rel=`assets/images/logos/${item.ticker.toLowerCase()}.svg`;fs.writeFileSync(rel,buf);
  mapping.logos[item.ticker]={path:`${rel}?v=20260908-logo2`,alt:`Logo ${clean(x.description)} (${item.ticker})`,exchange:item.exchange,isin,company:clean(x.description),sourceUrl,queryUrl:u.href,sha256:sha(buf),bytes:buf.length};
  console.log('LOGO_LOCKED',item.ticker,item.exchange,isin,buf.length,sha(buf));
}
mapping.meta={...(mapping.meta||{}),count:data.coverage.length,synced:'2026-09-08'};
if(Object.keys(mapping.logos).length!==114)throw new Error(`Logo map count=${Object.keys(mapping.logos).length}`);
fs.writeFileSync(LOGOS,`window.COMPANY_LOGOS = ${JSON.stringify(mapping,null,2)};\n`);
console.log('LOGO_IMPORT_OK',Object.keys(mapping.logos).length);
