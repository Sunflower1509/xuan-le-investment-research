import fs from 'node:fs';
import vm from 'node:vm';

const dataPath='src/data/research-data.js';
const indexPath='index.html';
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(dataPath,'utf8'),ctx,{filename:dataPath});
const data=ctx.window.RESEARCH_DATA;
if(!data || !Array.isArray(data.reports) || !Array.isArray(data.coverage)) throw new Error('RESEARCH_DATA invalid');
if(data.reports.length!==122 || data.coverage.length!==122) throw new Error(`Expected 122/122 before patch, got ${data.reports.length}/${data.coverage.length}`);
const valuationTickers=data.reports.filter(r=>r.reportType!=='trading').map(r=>r.ticker);
if(new Set(valuationTickers).size!==valuationTickers.length) throw new Error('Existing duplicate valuation ticker');
for(const t of ['HHP','DXP','SIP']) if(data.reports.some(r=>r.ticker===t)||data.coverage.some(c=>c.ticker===t)) throw new Error(`${t} unexpectedly already exists`);
const oldDhc=data.reports.filter(r=>r.ticker==='DHC');
if(oldDhc.length!==1 || oldDhc[0].id!=='DHC-20260817') throw new Error('Unexpected current DHC edition');
const oldDhcCoverage=data.coverage.find(c=>c.ticker==='DHC');
if(!oldDhcCoverage || oldDhcCoverage.reportId!=='DHC-20260817') throw new Error('Unexpected DHC coverage reference');

const reports=[
  {
    id:'DXP-20260911',ticker:'DXP',company:'Công ty Cổ phần Cảng Đoạn Xá',sector:'Cảng biển & logistics',exchange:'HNX',date:'2026-09-11',recommendation:'THEO DÕI',status:'wait',marketPrice:13400,marketPriceDate:'2026-09-10',baseValue:15861,valueLabel:'Giá trị kỳ vọng sau pha loãng',rangeLow:14000,rangeHigh:18500,
    gapLabel:'Giá 13.400 đồng/cp thấp hơn cận dưới 14.000 khoảng 4,3%, nhưng MOS theo điểm giữa vùng giá trị chỉ khoảng 17,5%; chưa đạt ngưỡng 25-30%.',method:'DCF theo FCFF; kiểm chứng P/E, P/B và EV/EBITDA',summary:'DXP có vùng giá trị hợp lý 14.000-18.500 đồng/cp và giá trị kỳ vọng sau pha loãng 15.861 đồng/cp. Giá đóng cửa 10/09/2026 là 13.400 đồng/cp; trạng thái THEO DÕI vì chưa đủ MOS 25-30%.',
    action:{zoneLow:10500,zoneHigh:11000,baseValue:15861,stop:10000,targets:[14000,15500],basisDate:'2026-09-11',recommendation:'THEO DÕI',eligibility:'active',condition:'IF giá 13.000-14.000 nhưng chưa có catalyst kỹ thuật xác nhận THEN CHỜ. IF giá về 10.500-11.000 và luận điểm cơ bản không xấu đi THEN có thể mua thăm dò 30-40%, stop khoảng 10.0-10.4k, target 14.0-15.5k. IF đang nắm quanh 13.4k và thủng 12.7k với thanh khoản tăng THEN giảm/cắt vị thế.'},
    file:'reports/DXP_2026-09-11.pdf',edition:'Bản định giá 11.09.2026',visual:{src:'assets/images/reports/dxp.webp?v=20260911-cover1',alt:'Trang bìa báo cáo định giá DXP ngày 11/09/2026',caption:'Bìa báo cáo định giá DXP',sourceLabel:'Xuân Lê TVS Equity Research',sourceUrl:'reports/DXP_2026-09-11.pdf',kind:'report-cover'}
  },
  {
    id:'HHP-20260910',ticker:'HHP',company:'Công ty Cổ phần HHP Global',sector:'Giấy & vật liệu',exchange:'HOSE',date:'2026-09-10',recommendation:'LOẠI / TRÁNH MUA MỚI',status:'reject',marketPrice:17200,marketPriceDate:'2026-09-09',baseValue:8639,valueLabel:'Giá trị kỳ vọng',rangeLow:4727,rangeHigh:13719,
    gapLabel:'Giá 17.200 đồng/cp cao hơn cận trên giá trị hợp lý 13.719 khoảng 25,4%; không có biên an toàn cho vị thế mua mới.',method:'Lợi nhuận chuẩn hóa chu kỳ; kiểm chứng P/B và EV/EBITDA chuẩn hóa',summary:'HHP có vùng giá trị hợp lý 4.727-13.719 đồng/cp, giá trị kỳ vọng 8.639 đồng/cp. Tại giá đóng cửa 09/09/2026 là 17.200 đồng/cp, trạng thái LOẠI / TRÁNH MUA MỚI.',
    action:{zoneLow:6047,zoneHigh:6479,baseValue:8639,stop:6155,targets:[8055,8639,13719],basisDate:'2026-09-10',recommendation:'LOẠI / TRÁNH MUA MỚI',eligibility:'active',condition:'IF giá >13.719 THEN LOẠI / TRÁNH MUA MỚI. IF giá 8.055-13.719 THEN CHỜ. IF giá 6.047-6.479 và nợ/FCF/biên lợi nhuận không xấu đi, không xuất hiện red flag pháp lý THEN có thể mua thăm dò; với entry bảo thủ 6.479, stop 6.155, T1/T2/T3 8.055/8.639/13.719.'},
    file:'reports/HHP_2026-09-10.pdf',edition:'Bản định giá 10.09.2026',visual:{src:'assets/images/reports/hhp.webp?v=20260910-cover1',alt:'Trang bìa báo cáo định giá HHP ngày 10/09/2026',caption:'Bìa báo cáo định giá HHP',sourceLabel:'Xuân Lê TVS Equity Research',sourceUrl:'reports/HHP_2026-09-10.pdf',kind:'report-cover'}
  },
  {
    id:'DHC-20260909',ticker:'DHC',company:'Công ty Cổ phần Đông Hải Bến Tre',sector:'Giấy & bao bì',exchange:'HOSE',date:'2026-09-09',recommendation:'CHỜ',status:'wait',marketPrice:36300,marketPriceDate:'2026-09-09',baseValue:34162,valueLabel:'Expected anchor',rangeLow:29106,rangeHigh:40173,
    gapLabel:'Giá 36.300 đồng/cp nằm trong vùng giá trị nhưng cao hơn điểm neo kỳ vọng khoảng 34.162 đồng/cp; không đạt MOS 25-30%.',method:'Lợi nhuận chuẩn hóa chu kỳ 5-7 năm; P/B và EV/EBITDA chuẩn hóa dùng kiểm chứng',summary:'DHC có khoảng giá trị hợp lý 29.106-40.173 đồng/cp; expected anchor khoảng 34.162 đồng/cp. Snapshot 09/09/2026 là 36.300 đồng/cp nên trạng thái CHỜ, không mua đuổi.',
    action:{zoneLow:34000,zoneHigh:34600,baseValue:34162,stop:32400,targets:[39500,42000],basisDate:'2026-09-09',recommendation:'CHỜ',eligibility:'active',condition:'IF pullback 34.0-34.6 và giữ/reclaim hỗ trợ THEN có thể mở vị thế trading từng phần sau xác nhận, stop 32.4, target 39.5/42.0. IF đóng cửa >37.1 và thanh khoản xác nhận THEN có thể đánh breakout tỷ trọng kiểm soát, stop khoảng 35.0, target 42.0. IF thủng 32.4 THEN CUTLOSS, không bình quân giá xuống.'},
    file:'reports/DHC_2026-09-09.pdf',edition:'Bản định giá 09.09.2026',visual:{src:'assets/images/reports/dhc.webp?v=20260909-cover1',alt:'Trang bìa báo cáo định giá DHC ngày 09/09/2026',caption:'Bìa báo cáo định giá DHC',sourceLabel:'Xuân Lê TVS Equity Research',sourceUrl:'reports/DHC_2026-09-09.pdf',kind:'report-cover'}
  },
  {
    id:'SIP-20260909',ticker:'SIP',company:'Công ty Cổ phần Đầu tư Sài Gòn VRG',sector:'BĐS KCN & tiện ích',exchange:'HOSE',date:'2026-09-09',recommendation:'CHỜ',status:'wait',marketPrice:49150,marketPriceDate:'2026-09-09',baseValue:58235,valueLabel:'Giá trị kỳ vọng',rangeLow:53054,rangeHigh:64900,
    gapLabel:'MOS tại 49.150 đồng/cp chỉ khoảng 15,6% so với giá trị kỳ vọng 58.235 đồng/cp; chưa đạt ngưỡng 25-30%.',method:'DDM nhiều giai đoạn; kiểm chứng Forward P/E, P/B và NAV/consensus',summary:'SIP có giá trị kỳ vọng 58.235 đồng/cp, vùng giá trị lõi 53.054-64.900 đồng/cp và khoảng kịch bản đầy đủ 41.398-77.951 đồng/cp. Giá 49.150 đồng/cp ngày 09/09/2026 cho MOS 15,6%; trạng thái CHỜ.',
    action:{zoneLow:40764,zoneHigh:43676,baseValue:58235,stop:41300,targets:[53000,58235,64900],basisDate:'2026-09-09',recommendation:'CHỜ',eligibility:'active',condition:'IF giá về 40.764-43.676 và dữ liệu cơ bản không xấu đi THEN xem xét mua từng phần. Ví dụ entry 43.500, stop 41.300 (-5,1%), target 53.000, R/R xấp xỉ 4,3:1. IF 43.676-53.000 THEN CHỜ, không mua đuổi.'},
    file:'reports/SIP_2026-09-09.pdf',edition:'Bản định giá 09.09.2026',visual:{src:'assets/images/reports/sip.webp?v=20260909-cover1',alt:'Trang bìa báo cáo định giá SIP ngày 09/09/2026',caption:'Bìa báo cáo định giá SIP',sourceLabel:'Xuân Lê TVS Equity Research',sourceUrl:'reports/SIP_2026-09-09.pdf',kind:'report-cover'}
  }
];

data.reports=[...reports,...data.reports.filter(r=>!['DHC','HHP','DXP','SIP'].includes(r.ticker))];
const dhc=reports.find(r=>r.ticker==='DHC');
Object.assign(oldDhcCoverage,{company:dhc.company,sector:dhc.sector,exchange:dhc.exchange,reportId:dhc.id,action:structuredClone(dhc.action)});
for(const report of reports.filter(r=>r.ticker!=='DHC')) data.coverage.push({ticker:report.ticker,company:report.company,sector:report.sector,exchange:report.exchange,reportId:report.id,close:null,priceDate:null,changePct:null,volume:null,priceSource:null,priceSourceSecondary:null,action:structuredClone(report.action)});
if(data.reports.length!==125||data.coverage.length!==125) throw new Error(`Expected 125/125 after patch, got ${data.reports.length}/${data.coverage.length}`);
const rt=data.reports.filter(r=>r.reportType!=='trading').map(r=>r.ticker),ct=data.coverage.map(c=>c.ticker);
if(new Set(rt).size!==rt.length||new Set(ct).size!==ct.length) throw new Error('Duplicate ticker after patch');
const byCov=new Map(data.coverage.map(c=>[c.ticker,c]));
for(const r of data.reports.filter(r=>r.reportType!=='trading')){const c=byCov.get(r.ticker);if(!c||c.reportId!==r.id)throw new Error(`${r.ticker}: coverage/report mismatch`);if(r.action&&c.action?.basisDate!==r.date)throw new Error(`${r.ticker}: action basisDate mismatch`);}
if(JSON.stringify(data).includes('DHC-20260817')) throw new Error('Old DHC report id remains');
fs.writeFileSync(dataPath,`window.RESEARCH_DATA = ${JSON.stringify(data,null,2)};\n`);

const beforeIndex=fs.readFileSync(indexPath,'utf8');
let afterIndex=beforeIndex
  .replace('data-role="report-tab-count">122</span>','data-role="report-tab-count">125</span>')
  .replace('data-role="coverage-tab-count">122</span>','data-role="coverage-tab-count">125</span>')
  .replace('assets/js/site.min.js?v=20260910-eod-auto','assets/js/site.min.js?v=20260911-report-sync');
if(afterIndex===beforeIndex) throw new Error('Index counters/cache token were not updated');
fs.writeFileSync(indexPath,afterIndex);
console.log('Metadata patch PASS: 125 reports / 125 coverage; index structure untouched except counters/cache token.');
