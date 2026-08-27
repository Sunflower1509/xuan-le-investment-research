import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const DATA_PATH = 'src/data/research-data.js';
const INDEX_PATH = 'index.html';
const REPORT_DIR = 'reports';
const COVER_DIR = 'assets/images/reports';

const incoming = [
  {
    id: 'VGC-20260827', ticker: 'VGC', company: 'Tổng Công ty Viglacera - CTCP', sector: 'Bất động sản KCN / Vật liệu xây dựng', exchange: 'HOSE', date: '2026-08-27',
    recommendation: 'CHỜ / THEO DÕI - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 41200, marketPriceDate: '2026-08-26', baseValue: 59391, valueLabel: 'Giá trị kỳ vọng', rangeLow: 49800, rangeHigh: 68900,
    gapLabel: 'Giá 41.200 đồng/cp thấp hơn cận dưới fair value khoảng 17,3%, chưa đạt kỷ luật MOS 25-30%.', method: 'SOTP: KCN/BĐS theo RNAV + VLXD theo DCF/lợi nhuận chuẩn hóa',
    summary: 'VGC có tài sản KCN chất lượng và mảng vật liệu xây dựng hồi phục, nhưng giá 41,2k chưa đủ biên an toàn so với cận dưới fair value. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 34860, zoneHigh: 37350, baseValue: 59391, basisDate: '2026-08-27', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá về 34.860-37.350 và thesis không xấu THEN xem xét vùng mua định giá. Với swing 1-3 tuần, chỉ kích hoạt breakout khi đóng cửa >44.200 với thanh khoản >=0,70 triệu cp; stop khoảng 42.000. IF thủng 39.500 với khối lượng tăng THEN loại setup ngắn hạn.' },
    file: 'reports/VGC_2026-08-27.pdf', edition: 'Bản định giá 27.08.2026'
  },
  {
    id: 'GEL-20260827', ticker: 'GEL', company: 'CTCP Hạ tầng GELEX', sector: 'Hạ tầng đa ngành', exchange: 'HOSE', date: '2026-08-27',
    recommendation: 'CHỜ / THEO DÕI - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 29000, marketPriceDate: '2026-08-26', baseValue: 35321, valueLabel: 'Giá trị kỳ vọng', rangeLow: 30643, rangeHigh: 40600,
    gapLabel: 'Giá 29.000 đồng/cp có MOS 17,9% so với expected value, chưa đạt chuẩn 25-30%.', method: 'SOTP: KCN/BĐS, VLXD, tiện ích',
    summary: 'GEL có nền tài sản hạ tầng chất lượng nhưng NCI lớn, chi phí vốn và chu kỳ đầu tư làm giảm biên an toàn cho cổ đông công ty mẹ. Trạng thái CHỜ.',
    action: { zoneLow: 21450, zoneHigh: 22982, baseValue: 35321, basisDate: '2026-08-27', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá về 21.450-22.982 và thesis không đổi THEN xem xét vùng mua giá trị. IF breakout trên 30.600 với thanh khoản xác nhận THEN chỉ đánh giá setup breakout; IF thủng 28.300 với khối lượng tăng THEN loại setup ngắn hạn.' },
    file: 'reports/GEL_2026-08-27.pdf', edition: 'Bản định giá 27.08.2026'
  },
  {
    id: 'PDR-20260827', ticker: 'PDR', company: 'CTCP Phát triển Bất động sản Phát Đạt', sector: 'Bất động sản nhà ở', exchange: 'HOSE', date: '2026-08-27',
    recommendation: 'THEO DÕI / CHỜ - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 12650, marketPriceDate: '2026-08-26', baseValue: 18191, valueLabel: 'Giá trị kỳ vọng', rangeLow: 15397, rangeHigh: 20966,
    gapLabel: 'Giá 12.650 đồng/cp thấp hơn expected value nhưng chỉ thấp hơn cận dưới khoảng 17,8%, chưa đạt MOS 25-30%.', method: 'RNAV / P-NAV',
    summary: 'PDR có catalyst từ tái cấu trúc tài sản nhưng lợi nhuận 6T2026 còn phụ thuộc mạnh vào thu nhập tài chính, cùng nhu cầu vốn và rủi ro pha loãng đáng kể. Trạng thái THEO DÕI / CHỜ.',
    action: { zoneLow: 10778, zoneHigh: 11547, baseValue: 18191, basisDate: '2026-08-27', recommendation: 'THEO DÕI / CHỜ', eligibility: 'active', condition: 'IF giá về 10.778-11.547 và luận điểm đầu tư không xấu đi THEN xem xét vùng mua đạt MOS 25-30%; không mua chỉ vì giá thấp hơn expected value.' },
    file: 'reports/PDR_2026-08-27.pdf', edition: 'Bản định giá 27.08.2026'
  },
  {
    id: 'EIB-20260827', ticker: 'EIB', company: 'Ngân hàng TMCP Xuất Nhập khẩu Việt Nam', sector: 'Ngân hàng', exchange: 'HOSE', date: '2026-08-27',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 17350, marketPriceDate: '2026-08-26', baseValue: 15464, valueLabel: 'Giá trị kỳ vọng', rangeLow: 9701, rangeHigh: 21727,
    gapLabel: 'Giá 17.350 đồng/cp cao hơn expected value 15.464 đồng/cp; định giá hiện phản ánh mạnh kỳ vọng tái cấu trúc.', method: 'P/B gắn ROE + Residual Income',
    summary: 'EIB có ROE TTM thấp trong khi P/B thị trường phản ánh nhiều kỳ vọng tái cơ cấu; chất lượng tài sản và khả năng phục hồi ROE cần được chứng minh. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 6791, zoneHigh: 7276, baseValue: 15464, basisDate: '2026-08-27', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá về 6.791-7.276 mà chất lượng tài sản và luận điểm không xấu đi THEN đây mới là vùng mua theo kỷ luật MOS 25-30% so với cận dưới; không coi vùng này là dự báo giá bắt buộc phải quay về.' },
    file: 'reports/EIB_2026-08-27.pdf', edition: 'Bản định giá 27.08.2026'
  },
  {
    id: 'NTC-20260827', ticker: 'NTC', company: 'CTCP Khu Công nghiệp Nam Tân Uyên', sector: 'Bất động sản khu công nghiệp', exchange: 'HOSE', date: '2026-08-27',
    recommendation: 'THEO DÕI / CHỜ - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 128700, marketPriceDate: '2026-08-26', baseValue: 153287, valueLabel: 'Giá trị kỳ vọng', rangeLow: 106791, rangeHigh: 203545,
    gapLabel: 'MOS tại P0 chỉ 16,0% so với expected value, chưa đạt chuẩn 25-30%.', method: 'RNAV / P-NAV; P/E dùng kiểm chứng',
    summary: 'NTC có quỹ đất KCN chất lượng và bảng cân đối không còn dư nợ vay, nhưng giá 128,7k nằm trong vùng giá trị hợp lý và chưa tạo MOS đủ rộng. Trạng thái THEO DÕI / CHỜ.',
    action: { zoneLow: 74754, zoneHigh: 80093, baseValue: 153287, basisDate: '2026-08-27', recommendation: 'THEO DÕI / CHỜ', eligibility: 'active', condition: 'IF giá về 74.754-80.093 và thesis không xấu đi THEN xem xét vùng mua nghiêm ngặt theo cận dưới fair value. Vùng 107.301-114.965 chỉ là tham chiếu theo expected value và không thay thế quy tắc cận dưới.' },
    file: 'reports/NTC_2026-08-27.pdf', edition: 'Bản định giá 27.08.2026'
  },
  {
    id: 'D2D-20260826', ticker: 'D2D', company: 'CTCP Phát triển Đô thị Công nghiệp Số 2', sector: 'Bất động sản công nghiệp / đô thị', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'CHỜ - CHƯA CÓ BIÊN AN TOÀN', status: 'wait', marketPrice: 27600, marketPriceDate: '2026-08-26', baseValue: 26803, valueLabel: 'Giá trị kỳ vọng', rangeLow: 22492, rangeHigh: 30848,
    gapLabel: 'Giá 27.600 đồng/cp nằm trong vùng fair value, không tạo MOS đủ rộng và thanh khoản rất thấp.', method: 'Adjusted NAV / P-NAV; P/B dùng kiểm chứng',
    summary: 'D2D có bảng cân đối sạch nợ vay nhưng lợi nhuận phụ thuộc mạnh vào thời điểm ghi nhận chuyển quyền thuê đất và thanh khoản cổ phiếu thấp. Trạng thái CHỜ.',
    action: { zoneLow: 15744, zoneHigh: 16869, baseValue: 26803, basisDate: '2026-08-26', recommendation: 'CHỜ', eligibility: 'active', condition: 'IF giá về 15.744-16.869 và thesis không xấu đi THEN mới xem xét vùng mua định giá nghiêm ngặt; thanh khoản thấp phải được coi là rủi ro thực thi.' },
    file: 'reports/D2D_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'DXG-20260826', ticker: 'DXG', company: 'CTCP Bluemarq Group', sector: 'Bất động sản / môi giới', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 12050, marketPriceDate: '2026-08-26', baseValue: 15832, valueLabel: 'Giá trị kỳ vọng', rangeLow: 13440, rangeHigh: 18300,
    gapLabel: 'Giá 12.050 đồng/cp chưa thấp hơn cận dưới định giá đủ 25-30%.', method: 'RNAV/NAV + P/NAV; DXS là cấu phần riêng trong RNAV',
    summary: 'DXG có nền tài sản cho thấy upside nhưng H1/2026 còn yếu ở lợi nhuận; phần lớn giá trị phụ thuộc pháp lý, mở bán và bàn giao dự án. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 9400, zoneHigh: 10100, baseValue: 15832, basisDate: '2026-08-26', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá về 9.400-10.100 và luận điểm không xấu đi THEN xem xét vùng mua MOS; không mua đuổi quanh 12k chỉ vì giá thấp hơn expected value.' },
    file: 'reports/DXG_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'HHS-20260826', ticker: 'HHS', company: 'CTCP Đầu tư Dịch vụ Hoàng Huy', sector: 'Ô tô / Bất động sản', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 10950, marketPriceDate: '2026-08-26', baseValue: 14057, valueLabel: 'Giá trị kỳ vọng sau quyền', rangeLow: 11930, rangeHigh: 16180,
    gapLabel: 'Sau khi phản ánh quyền mua, biên an toàn tại 10.950 đồng/cp chưa đạt chuẩn 25-30%.', method: 'SOTP: CRV + tài sản ròng còn lại; P/B dùng kiểm chứng',
    summary: 'HHS giao dịch dưới giá trị sổ sách nhưng cấu trúc holding, CRV kém thanh khoản, tồn kho lớn và quyền mua 5:3 làm biên an toàn bề ngoài dễ bị đánh giá quá cao. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 8350, zoneHigh: 8950, baseValue: 14057, basisDate: '2026-08-26', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá sau quyền về 8.350-8.950 và thesis không xấu đi THEN xem xét vùng mua nghiêm ngặt; không mua đuổi chỉ vì giá thấp hơn expected value.' },
    file: 'reports/HHS_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'TCH-20260826', ticker: 'TCH', company: 'CTCP Đầu tư Dịch vụ Tài chính Hoàng Huy', sector: 'Bất động sản / ô tô', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'THEO DÕI / CHỜ - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 13550, marketPriceDate: '2026-08-26', baseValue: 19620, valueLabel: 'Giá trị kỳ vọng', rangeLow: 17346, rangeHigh: 21730,
    gapLabel: 'Giá 13.550 đồng/cp thấp hơn expected value khoảng 30,9% nhưng chỉ thấp hơn cận dưới khoảng 21,9%, chưa đạt kỷ luật MOS.', method: 'RNAV/NAV + P/NAV; P/B dùng kiểm chứng',
    summary: 'TCH có tài sản dự án đáng chú ý và bảng cân đối là điểm đỡ, nhưng timing bàn giao, tồn kho và rủi ro quản trị/pháp lý cần được phản ánh. Trạng thái THEO DÕI / CHỜ.',
    action: { zoneLow: 12142, zoneHigh: 13010, baseValue: 19620, basisDate: '2026-08-26', recommendation: 'THEO DÕI / CHỜ', eligibility: 'active', condition: 'IF giá trước thưởng về 12.142-13.010 và thesis không xấu đi THEN xem xét vùng mua đạt MOS 25-30% theo cận dưới; không mua đuổi tại P0.' },
    file: 'reports/TCH_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  },
  {
    id: 'GEX-20260826', ticker: 'GEX', company: 'CTCP Tập đoàn GELEX', sector: 'Holding đa ngành', exchange: 'HOSE', date: '2026-08-26',
    recommendation: 'THEO DÕI / CHỜ - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 26200, marketPriceDate: '2026-08-26', baseValue: 35179, valueLabel: 'Giá trị kỳ vọng', rangeLow: 29499, rangeHigh: 39285,
    gapLabel: 'Giá 26.200 đồng/cp thấp hơn expected value khoảng 25,5% nhưng chỉ thấp hơn cận dưới khoảng 11,2%; chưa đủ MOS theo cận dưới.', method: 'SOTP - holding đa ngành',
    summary: 'GEX có cấu trúc tài sản niêm yết minh bạch hơn qua GEE/GEL, nhưng lợi nhuận cổ đông mẹ chịu ảnh hưởng NCI, chi phí tài chính và đòn bẩy. Trạng thái THEO DÕI / CHỜ.',
    action: { zoneLow: 20649, zoneHigh: 22124, baseValue: 35179, basisDate: '2026-08-26', recommendation: 'THEO DÕI / CHỜ', eligibility: 'active', condition: 'IF giá về 20.649-22.124 và thesis không xấu đi THEN xem xét vùng mua an toàn theo MOS 25-30% so với cận dưới. Vùng 24.625-26.384 theo expected value ít nghiêm ngặt hơn và không được dùng thay quy tắc cận dưới.' },
    file: 'reports/GEX_2026-08-26.pdf', edition: 'Bản định giá 26.08.2026'
  }
];

const code = fs.readFileSync(DATA_PATH, 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(code, sandbox, { filename: DATA_PATH });
const data = sandbox.window.RESEARCH_DATA;
if (!data || !Array.isArray(data.reports) || !Array.isArray(data.coverage)) throw new Error('RESEARCH_DATA không hợp lệ');

const targetTickers = new Set(incoming.map((r) => r.ticker));
const incomingByTicker = new Map(incoming.map((r) => [r.ticker, r]));
const oldValuations = data.reports.filter((r) => r && r.reportType !== 'trading' && targetTickers.has(r.ticker));
for (const old of oldValuations) {
  const next = incomingByTicker.get(old.ticker);
  if (old.date > next.date) throw new Error(`${old.ticker}: báo cáo đang công bố ${old.date} mới hơn bản nhập ${next.date}; dừng fail-closed`);
}

const replacedOldValuationReports = oldValuations.map((r) => ({ id: r.id, ticker: r.ticker, date: r.date, file: r.file }));
data.reports = data.reports.filter((r) => !(r && r.reportType !== 'trading' && targetTickers.has(r.ticker)));
data.coverage = data.coverage.filter((c) => !targetTickers.has(c.ticker));

const removedArtifacts = [];
fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.mkdirSync(COVER_DIR, { recursive: true });
for (const report of incoming) {
  const expectedBase = path.basename(report.file);
  for (const name of fs.readdirSync(REPORT_DIR)) {
    if (!name.toLowerCase().endsWith('.pdf')) continue;
    if (!name.toUpperCase().startsWith(`${report.ticker}_`)) continue;
    if (name === expectedBase) continue;
    fs.rmSync(path.join(REPORT_DIR, name));
    removedArtifacts.push(path.posix.join(REPORT_DIR, name));
  }
  if (!fs.existsSync(report.file)) throw new Error(`${report.ticker}: thiếu PDF ${report.file}`);
  const sig = fs.readFileSync(report.file).subarray(0, 5).toString('ascii');
  if (sig !== '%PDF-') throw new Error(`${report.ticker}: chữ ký PDF không hợp lệ`);

  const cover = `assets/images/reports/${report.ticker.toLowerCase()}.webp`;
  if (!fs.existsSync(cover)) throw new Error(`${report.ticker}: thiếu ảnh bìa ${cover}`);
  report.visual = {
    src: `${cover}?v=20260827-cover3`,
    alt: `Trang bìa báo cáo định giá ${report.ticker} ngày ${report.date.split('-').reverse().join('/')}`,
    caption: `Bìa báo cáo định giá ${report.ticker}`,
    sourceLabel: 'Xuân Lê TVS Equity Research',
    sourceUrl: report.file,
    kind: 'report-cover'
  };
  data.reports.push(report);
  data.coverage.push({
    ticker: report.ticker,
    company: report.company,
    exchange: report.exchange,
    sector: report.sector,
    close: report.marketPrice,
    changePct: 0,
    volume: 1,
    priceDate: report.marketPriceDate,
    priceSource: `https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:${report.ticker}~date:${report.marketPriceDate}&size=1`,
    reportId: report.id,
    action: JSON.parse(JSON.stringify(report.action))
  });
}

data.reports.sort((a, b) => b.date.localeCompare(a.date) || a.ticker.localeCompare(b.ticker) || String(a.id).localeCompare(String(b.id)));
data.coverage.sort((a, b) => a.ticker.localeCompare(b.ticker));

const valuations = data.reports.filter((r) => r.reportType !== 'trading');
if (new Set(valuations.map((r) => r.ticker)).size !== valuations.length) throw new Error('Sau nhập vẫn còn trùng ticker định giá');
if (new Set(data.coverage.map((c) => c.ticker)).size !== data.coverage.length) throw new Error('Sau nhập vẫn còn trùng coverage');
if (data.coverage.length !== valuations.length) throw new Error(`Coverage ${data.coverage.length} != valuation reports ${valuations.length}`);
for (const report of incoming) {
  const c = data.coverage.find((x) => x.ticker === report.ticker);
  if (!c || c.reportId !== report.id || c.action?.basisDate !== report.date) throw new Error(`${report.ticker}: coverage/report sync lỗi`);
}

fs.writeFileSync(DATA_PATH, `window.RESEARCH_DATA = ${JSON.stringify(data, null, 2)};\n`);

let html = fs.readFileSync(INDEX_PATH, 'utf8');
const replaceCount = (role, value) => {
  const re = new RegExp(`(<[^>]+data-role=["']${role}["'][^>]*>)\\d+(<\\/[^>]+>)`, 'g');
  const matches = html.match(re) || [];
  if (matches.length !== 1) throw new Error(`Không tìm đúng 1 ${role}: ${matches.length}`);
  html = html.replace(re, `$1${value}$2`);
};
replaceCount('report-tab-count', data.reports.length);
replaceCount('coverage-tab-count', data.coverage.length);
fs.writeFileSync(INDEX_PATH, html);

console.log(JSON.stringify({
  incoming: incoming.map((r) => `${r.ticker}:${r.date}`),
  replacedOldValuationReports,
  removedArtifacts,
  reportCount: data.reports.length,
  valuationCount: valuations.length,
  coverageCount: data.coverage.length
}, null, 2));
