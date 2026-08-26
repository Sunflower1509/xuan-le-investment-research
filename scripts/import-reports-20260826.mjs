import fs from 'node:fs';
import vm from 'node:vm';

const DATA_PATH = 'src/data/research-data.js';
const INDEX_PATH = 'index.html';
const TARGET_PRICE_DATE = '2026-08-25';
const GENERIC_VISUAL = 'assets/images/advisor-banner-3d-v2.webp';

const reports = [
  {
    id: 'VGS-20260825', ticker: 'VGS', company: 'CTCP Ống Thép Việt Đức VG PIPE', sector: 'Công nghiệp', exchange: 'HNX', date: '2026-08-25',
    recommendation: 'CHỜ / THEO DÕI - CHƯA CÓ MUA', status: 'wait', marketPrice: 18400, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 21129, valueLabel: 'Giá trị kỳ vọng', rangeLow: 16434, rangeHigh: 26174,
    gapLabel: 'Giá 18.400 đồng/cp nằm trong fair range; MOS so midpoint 21.304 đồng/cp khoảng 13,63%, chưa đạt chuẩn 25-30%.',
    method: 'Lợi nhuận chuẩn hóa chu kỳ 5 năm; Normalized P/E + P/B + Normalized EV/EBITDA',
    summary: 'VGS được phân loại doanh nghiệp chu kỳ thép/vật liệu. Re-audit cho thấy lợi nhuận TTM cao hơn đáng kể bình quân chu kỳ và chất lượng chuyển đổi lợi nhuận thành dòng tiền còn hạn chế; tại 18.400 đồng/cp chưa đủ biên an toàn.',
    action: { zoneLow: 11503, zoneHigh: 12325, baseValue: 21129, stop: 11709, targets: [16434, 21129, 26174], basisDate: '2026-08-25', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 11.503-12.325 đồng/cp và thesis không xấu đi THEN có thể giải ngân từng phần. Nếu entry tại 12.325, stop tham chiếu 11.709 (~5%). T1 16.434; T2 21.129; T3 26.174. Giá trong fair range: CHỜ; trên 26.174 nếu không nâng định giá: LOẠI.' },
    file: 'reports/VGS_2026-08-25.pdf', edition: 'Bản re-audit 25.08.2026'
  },
  {
    id: 'PVP-20260826', ticker: 'PVP', company: 'CTCP Vận tải Dầu khí Thái Bình Dương', sector: 'Năng lượng', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'CHỜ - CHƯA ĐỦ MOS 25-30%', status: 'wait', marketPrice: 18250, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 21469, valueLabel: 'Giá trị kỳ vọng', rangeLow: 17000, rangeHigh: 26500,
    gapLabel: 'Giá 18.250 đồng/cp có upside nhưng MOS khoảng 15%, chưa đạt chuẩn 25-30%.',
    method: 'Lợi nhuận chuẩn hóa chu kỳ + P/B + EV/EBITDA chuẩn hóa',
    summary: 'PVP có nửa đầu 2026 mạnh và bảng cân đối net cash, nhưng vận tải biển là ngành chu kỳ nên không annualize EPS 6 tháng. Fair value 17.000-26.500 đồng/cp; tại 18.250 đồng/cp trạng thái CHỜ.',
    action: { zoneLow: 15000, zoneHigh: 16100, baseValue: 21469, stop: null, targets: [21500, 24000, 26500], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 15.000-16.100 và CFO/net cash không xấu đi THEN giải ngân từng phần; stop 5-7% dưới giá khớp. T1 khoảng 21.500; T2 24.000-26.500. Kịch bản breakout chỉ xem xét khi vượt 18.600-18.800 có xác nhận thanh khoản.' },
    file: 'reports/PVP_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'PLC-20260826', ticker: 'PLC', company: 'Tổng Công ty Hóa dầu Petrolimex - CTCP', sector: 'Năng lượng', exchange: 'HNX', date: '2026-08-26',
    recommendation: 'CHỜ - KHÔNG MUA ĐUỔI', status: 'wait', marketPrice: 20300, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 21900, valueLabel: 'Điểm neo định giá', rangeLow: 18000, rangeHigh: 26000,
    gapLabel: 'Giá 20.300 đồng/cp nằm trong vùng hợp lý; biên gộp 6T2026 cao bất thường so với nền chu kỳ nên không mua đuổi.',
    method: 'Lợi nhuận chuẩn hóa chu kỳ + P/B + EV/EBITDA chuẩn hóa',
    summary: 'PLC phục hồi lợi nhuận rất mạnh trong Q2/2026 nhưng biên gộp 6T2026 vượt xa nền 5 năm và chưa đủ cơ sở coi là bền vững. Fair value 18.000-26.000 đồng/cp; tại 20.300 đồng/cp: CHỜ.',
    action: { zoneLow: 15300, zoneHigh: 16400, baseValue: 21900, stop: null, targets: [21900, 25300, 26000], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 15.300-16.400 và biên gộp Q3/CFO vẫn được xác nhận THEN giải ngân từng phần; stop 5-7% dưới giá khớp. T1 21.900; T2 25.300-26.000. Không mua đuổi tại vùng giá hiện tại.' },
    file: 'reports/PLC_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'OIL-20260826', ticker: 'OIL', company: 'Tổng Công ty Dầu Việt Nam - CTCP', sector: 'Năng lượng', exchange: 'UPCoM', date: '2026-08-26',
    recommendation: 'CHỜ / KHÔNG MUA ĐUỔI', status: 'wait', marketPrice: 13600, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 14300, valueLabel: 'Điểm neo định giá', rangeLow: 12000, rangeHigh: 16000,
    gapLabel: 'Giá 13.600 đồng/cp đang nằm trong vùng giá trị hợp lý 12.000-16.000 đồng/cp.',
    method: 'DCF/FCFF chuẩn hóa + định giá tương đối; tách tiền gửi khỏi hoạt động trong equity bridge',
    summary: 'OIL đang giao dịch bên trong vùng giá trị hợp lý. DCF có upside nhờ lượng tiền gửi lớn nhưng khả năng sinh lời vận hành còn mỏng, cổ phiếu vẫn thuộc diện cảnh báo và biên lợi nhuận xăng dầu biến động mạnh.',
    action: { zoneLow: 9800, zoneHigh: 10700, baseValue: 14300, stop: null, targets: [14300, 16000], basisDate: '2026-08-26', recommendation: 'CÓ THỂ TÍCH LŨY KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 9.800-10.700, CFO Q3/Q4 dương và không xuất hiện red flag kiểm toán mới THEN có thể tích lũy từng phần; stop 5-7% dưới giá khớp. T1 14.300; T2 16.000. Trên 16.000 nếu nền tảng không cải thiện: LOẠI mua mới.' },
    file: 'reports/OIL_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'PVC-20260826', ticker: 'PVC', company: 'Tổng Công ty Hóa chất và Dịch vụ Dầu khí - CTCP', sector: 'Năng lượng', exchange: 'HNX', date: '2026-08-26',
    recommendation: 'LOẠI / TRÁNH MUA MỚI', status: 'reject', marketPrice: 12300, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 8000, valueLabel: 'Giá trị trung tâm trước quyền', rangeLow: 6000, rangeHigh: 10000,
    gapLabel: 'Current-business valuation trước quyền 6.000-10.000 đồng/cp; kịch bản sau quyền 10.500-14.000 đồng/cp nhưng phụ thuộc mạnh vào hiệu quả tăng vốn.',
    method: 'DCF/FCFF + kiểm chứng P/E, P/B, EV/EBITDA; điều chỉnh quyền mua và pha loãng',
    summary: 'PVC có catalyst tăng vốn nhưng mức pha loãng rất lớn. Ở 12.300 đồng/cp, current-business valuation trước quyền đã cao hơn vùng hợp lý 6.000-10.000; trạng thái LOẠI/TRÁNH MUA MỚI.',
    action: { zoneLow: 7350, zoneHigh: 7900, baseValue: 8000, stop: 7300, targets: [10500, 11500], basisDate: '2026-08-26', recommendation: 'LOẠI / TRÁNH MUA MỚI', eligibility: 'veto', condition: 'Không mở vị thế mới trước khi bài toán tăng vốn/pha loãng được hấp thụ. Vùng 7.350-7.900 chỉ là vùng có thể đánh giá lại sau quyền nếu cash conversion và ROIC cải thiện; stop tham chiếu khoảng 7.300; mục tiêu 10.500 rồi 11.500.' },
    file: 'reports/PVC_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'PVB-20260826', ticker: 'PVB', company: 'CTCP Bọc ống Dầu khí Việt Nam', sector: 'Năng lượng', exchange: 'HNX', date: '2026-08-26',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 22000, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 25800, valueLabel: 'Giá trị kỳ vọng / điểm neo', rangeLow: 23000, rangeHigh: 30000,
    gapLabel: 'Giá 22.000 đồng/cp thấp hơn fair range nhưng chưa đạt MOS 25-30%; CFO 6T2026 âm sâu do vốn lưu động.',
    method: 'DCF/FCFF gắn chu kỳ dự án + P/E, P/B, EV/EBITDA kiểm chứng',
    summary: 'PVB có P/E thị trường thấp nhưng chưa đủ biên an toàn 25-30% do CFO 6T2026 âm sâu vì vốn lưu động. Fair value tổng hợp 23.000-30.000 đồng/cp; trạng thái CHỜ.',
    action: { zoneLow: 16100, zoneHigh: 17300, baseValue: 25800, stop: null, targets: [25800, 30000], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 16.100-17.300 và rủi ro vốn lưu động không xấu thêm THEN có thể giải ngân từng phần; stop tối đa 5-7% dưới giá khớp. T1 khoảng 25.800; T2 30.000. Kịch bản breakout 23.000-23.300 chỉ dùng khi thanh khoản xác nhận.' },
    file: 'reports/PVB_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'SSB-20260826', ticker: 'SSB', company: 'Ngân hàng TMCP Đông Nam Á', sector: 'Ngân hàng', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'THEO DÕI / CHỜ', status: 'wait', marketPrice: 15850, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 15445, valueLabel: 'Giá trị kỳ vọng', rangeLow: 12500, rangeHigh: 17500,
    gapLabel: 'Giá 15.850 đồng/cp nằm trong fair value và chưa đạt MOS 25-30%; catalyst MSCI không đủ để biện minh mua đuổi.',
    method: 'P/B gắn ROE + Residual Income; không dùng FCFF/EV cho ngân hàng',
    summary: 'SSB có catalyst MSCI nhưng mức định giá đã phản ánh khá nhiều kỳ vọng, trong khi 1H2026 mới hoàn thành khoảng 37% kế hoạch PBT và NPL/CASA cần cải thiện. Trạng thái THEO DÕI / CHỜ.',
    action: { zoneLow: 10800, zoneHigh: 11600, baseValue: 15445, stop: 10300, targets: [15500, 17500], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 10.800-11.600 và NPL/CASA/CAR không xấu thêm THEN có thể mua từng phần. Stop tham chiếu khoảng 10.300 hoặc tối đa 5-7% dưới giá khớp. T1 15.500; T2 17.500. NPL >3%, CAR giảm mạnh hoặc PBT hụt kế hoạch là điều kiện veto.' },
    file: 'reports/SSB_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'VRE-20260826', ticker: 'VRE', company: 'CTCP Vincom Retail', sector: 'Bất động sản', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'THEO DÕI - CHƯA ĐỦ MOS 25-30%', status: 'wait', marketPrice: 25200, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 31500, valueLabel: 'Giá trị kỳ vọng', rangeLow: 28000, rangeHigh: 36000,
    gapLabel: 'Giá 25.200 đồng thấp hơn expected value khoảng 20% nhưng chưa đạt biên an toàn 25-30%.',
    method: 'RNAV / P-NAV - vốn hóa NOI cho thuê',
    summary: 'VRE phục hồi rõ ở tỷ lệ lấp đầy và NOI, bảng cân đối vẫn lành mạnh; tại 25.200 đồng, upside định giá có nhưng chưa đạt biên an toàn 25-30% theo quy trình.',
    action: { zoneLow: 20000, zoneHigh: 21500, baseValue: 31500, stop: 19500, targets: [28000, 31500], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 20.000-21.500 và occupancy/NOI/RNAV không xấu đi THEN có thể giải ngân từng phần; stop khoảng 19.500 hoặc 5-7% dưới giá khớp. T1 28.000; T2 31.500. Trên 36.000 nếu không nâng RNAV: tránh mua mới.' },
    file: 'reports/VRE_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'VPL-20260826', ticker: 'VPL', company: 'CTCP Vinpearl', sector: 'Du lịch', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'TRÁNH MUA MỚI - GIÁ VƯỢT CẬN TRÊN', status: 'avoid', marketPrice: 76500, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 55000, valueLabel: 'Giá trị kỳ vọng / điểm neo', rangeLow: 49000, rangeHigh: 70000,
    gapLabel: 'Giá 76.500 đồng/cp cao hơn cận trên vùng giá trị và MOS theo điểm neo 55.000 đồng là âm.',
    method: 'DCF/FCFF chuẩn hóa + EV/EBITDA, P/B, Forward P/E kiểm chứng',
    summary: 'VPL có chất lượng vận hành du lịch cải thiện mạnh nhưng LNST 6T2026 được nâng đáng kể bởi thanh lý tài sản phi lặp lại. Ở 76.500 đồng, thị trường đang trả trước phần lớn kịch bản thuận lợi; TRÁNH MUA MỚI.',
    action: { zoneLow: 39000, zoneHigh: 42000, baseValue: 55000, stop: null, targets: [50000, 55000, 60000], basisDate: '2026-08-26', recommendation: 'TRÁNH MUA MỚI', eligibility: 'veto', condition: 'Giá hiện tại trên cận trên fair value: không mở vị thế mới. Chỉ đánh giá lại vùng 39.000-42.000 nếu EBITDA/CFO cốt lõi tốt và có đảo chiều kỹ thuật; stop khoảng 5% dưới giá vốn; mục tiêu 50.000/55.000/60.000. CFO âm kèm CapEx/nợ tăng hoặc pha loãng mới là veto.' },
    file: 'reports/VPL_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'PHP-20260826', ticker: 'PHP', company: 'Công ty Cổ phần Cảng Hải Phòng', sector: 'Công nghiệp', exchange: 'UPCoM', date: '2026-08-26',
    recommendation: 'CHỜ - CHƯA ĐỦ MOS 25-30%', status: 'wait', marketPrice: 46500, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 53800, valueLabel: 'Giá trị kỳ vọng', rangeLow: 45000, rangeHigh: 60000,
    gapLabel: 'Tại 46.500 đồng/cp, MOS so giá trị kỳ vọng khoảng 13,6%; chưa đạt chuẩn 25-30%.',
    method: 'DCF 3 kịch bản + định giá tương đối kiểm chứng',
    summary: 'PHP là tài sản cảng biển chất lượng cao bước vào chu kỳ tăng trưởng mới nhờ Lạch Huyện 3&4. Giá trị kỳ vọng khoảng 53.800 đồng và vùng hợp lý 45.000-60.000; tại 46.500 đồng: CHỜ.',
    action: { zoneLow: 37700, zoneHigh: 40400, baseValue: 53800, stop: null, targets: [50800, 56900], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 37.700-40.400 và thesis Lạch Huyện/FCFF không xấu đi THEN giải ngân từng phần; stop 5-7% dưới giá khớp. Mục tiêu tham chiếu 50.800-56.900. Kịch bản pullback 42.500-44.000 chỉ là tactical setup cần tín hiệu đảo chiều.' },
    file: 'reports/PHP_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'VJC-20260826', ticker: 'VJC', company: 'CTCP Hàng không Vietjet', sector: 'Hàng không', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'CHỜ / THEO DÕI - CHƯA CÓ BIÊN AN TOÀN', status: 'wait', marketPrice: 124700, marketPriceDate: TARGET_PRICE_DATE,
    baseValue: 109500, valueLabel: 'Giá trị kỳ vọng / điểm neo', rangeLow: 100000, rangeHigh: 125000,
    gapLabel: 'Giá 124.700 đồng/cp sát cận trên vùng giá trị; MOS theo điểm neo 109.500 đồng là âm.',
    method: 'DCF/FCFF chuẩn hóa SALB/ROFR + Forward P/E, P/B, EV/EBITDA kiểm chứng',
    summary: 'VJC có vị thế hàng không mạnh và tăng trưởng doanh thu cao, nhưng định giá hiện tại chưa bù rủi ro đòn bẩy, CapEx đội bay và biến động lợi nhuận cốt lõi. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 77000, zoneHigh: 82000, baseValue: 109500, stop: null, targets: [100000, 110000], basisDate: '2026-08-26', recommendation: 'CÓ THỂ MUA KHI VÀO VÙNG MOS', eligibility: 'active', condition: 'IF giá 77.000-82.000 và thesis CFO/đòn bẩy/CapEx không xấu đi THEN có thể thăm dò sau tín hiệu đảo chiều; stop khoảng 5% dưới giá vốn. T1 100.000; T2 110.000. Giá >125.000 nếu không nâng EPS/FCFF: LOẠI mua mới.' },
    file: 'reports/VJC_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  }
];

const code = fs.readFileSync(DATA_PATH, 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(code, sandbox, { filename: DATA_PATH });
const data = sandbox.window.RESEARCH_DATA;
if (!data || !Array.isArray(data.reports) || !Array.isArray(data.coverage)) throw new Error('Không đọc được RESEARCH_DATA.');

const targets = new Set(reports.map((report) => report.ticker));
const oldTargetReports = data.reports.filter((report) => targets.has(report.ticker) && report.reportType !== 'trading');
const retainedReports = data.reports.filter((report) => !(targets.has(report.ticker) && report.reportType !== 'trading'));
const retainedCoverage = data.coverage.filter((item) => !targets.has(item.ticker));

for (const report of reports) {
  report.visual = {
    src: `assets/images/reports/${report.ticker.toLowerCase()}.webp?v=20260826-cover1`,
    alt: `Trang bìa báo cáo định giá ${report.ticker} ngày ${report.date.split('-').reverse().join('/')}`,
    caption: `Bìa báo cáo định giá ${report.ticker}`,
    sourceLabel: 'Xuân Lê TVS Equity Research',
    sourceUrl: report.file,
    kind: 'report-cover'
  };
}

const coverage = reports.map((report) => ({
  ticker: report.ticker,
  company: report.company,
  sector: report.sector,
  exchange: report.exchange,
  reportId: report.id,
  close: report.marketPrice,
  priceDate: TARGET_PRICE_DATE,
  changePct: null,
  volume: null,
  priceSource: '',
  priceSourceSecondary: '',
  action: structuredClone(report.action)
}));

data.reports = [...reports, ...retainedReports]
  .sort((a, b) => b.date.localeCompare(a.date) || a.ticker.localeCompare(b.ticker));
data.coverage = [...coverage, ...retainedCoverage]
  .sort((a, b) => a.ticker.localeCompare(b.ticker));

const stillReferenced = new Set();
for (const report of data.reports) {
  if (report.file) stillReferenced.add(String(report.file).split(/[?#]/, 1)[0]);
  if (report.visual?.src) stillReferenced.add(String(report.visual.src).split(/[?#]/, 1)[0]);
}
const removedArtifacts = [];
for (const old of oldTargetReports) {
  for (const rawPath of [old.file, old.visual?.src]) {
    const path = String(rawPath || '').split(/[?#]/, 1)[0];
    if (!path || stillReferenced.has(path)) continue;
    if (!(path.startsWith('reports/') || path.startsWith('assets/images/reports/'))) continue;
    if (fs.existsSync(path)) {
      fs.rmSync(path);
      removedArtifacts.push(path);
    }
  }
}

const reportIds = new Set(data.reports.map((report) => report.id));
if (reportIds.size !== data.reports.length) throw new Error('Trùng report id sau import.');
const valuationTickers = data.reports.filter((report) => report.reportType !== 'trading').map((report) => report.ticker);
if (new Set(valuationTickers).size !== valuationTickers.length) throw new Error('Còn trùng báo cáo định giá theo ticker.');
const coverageTickers = data.coverage.map((item) => item.ticker);
if (new Set(coverageTickers).size !== coverageTickers.length) throw new Error('Còn trùng coverage ticker.');
for (const report of reports) {
  if (data.reports.filter((item) => item.ticker === report.ticker && item.reportType !== 'trading').length !== 1) throw new Error(`Không khóa được một bản mới nhất cho ${report.ticker}`);
  if (data.coverage.filter((item) => item.ticker === report.ticker).length !== 1) throw new Error(`Coverage ${report.ticker} không duy nhất.`);
  if (!fs.existsSync(report.file)) throw new Error(`Thiếu PDF ${report.file}`);
  if (fs.readFileSync(report.file).subarray(0, 5).toString('ascii') !== '%PDF-') throw new Error(`PDF lỗi chữ ký ${report.file}`);
}

fs.writeFileSync(DATA_PATH, `window.RESEARCH_DATA = ${JSON.stringify(data, null, 2)};\n`);

let html = fs.readFileSync(INDEX_PATH, 'utf8');
const replaceExactlyOne = (pattern, replacement, label) => {
  const matches = html.match(pattern) || [];
  if (matches.length !== 1) throw new Error(`Kỳ vọng đúng 1 ${label}, thực tế ${matches.length}`);
  html = html.replace(pattern, replacement);
};
replaceExactlyOne(/(data-role=["']report-tab-count["'][^>]*>)\d+(<\/span>)/g, `$1${data.reports.length}$2`, 'report-tab-count');
replaceExactlyOne(/(data-role=["']coverage-tab-count["'][^>]*>)\d+(<\/span>)/g, `$1${data.coverage.length}$2`, 'coverage-tab-count');
replaceExactlyOne(/assets\/js\/site\.min\.js\?v=[^"']+/g, 'assets/js/site.min.js?v=20260826-reports1', 'JS cache token');
fs.writeFileSync(INDEX_PATH, html);

console.log(JSON.stringify({
  imported: reports.map((report) => ({ ticker: report.ticker, id: report.id, file: report.file })),
  replacedOldValuationReports: oldTargetReports.map((report) => ({ ticker: report.ticker, id: report.id, date: report.date, file: report.file })),
  removedArtifacts,
  reportCount: data.reports.length,
  coverageCount: data.coverage.length
}, null, 2));
