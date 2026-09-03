import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const DATA_PATH = 'src/data/research-data.js';
const INDEX_PATH = 'index.html';
const REPORT_DIR = 'reports';
const COVER_DIR = 'assets/images/reports';
const coverVersion = '20260903-cover1';

const inactive = (basisDate, recommendation, condition, baseValue = null) => ({
  zoneLow: null,
  zoneHigh: null,
  baseValue,
  basisDate,
  recommendation,
  eligibility: 'inactive',
  condition
});

const incoming = [
  {
    id: 'PET-20260828', ticker: 'PET', company: 'Tổng Công ty Cổ phần Dịch vụ Tổng hợp Dầu khí', sector: 'Phân phối công nghệ & dịch vụ đa ngành', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'LOẠI / TRÁNH MUA MỚI', status: 'reject', marketPrice: 39300, marketPriceDate: '2026-08-28', baseValue: 22300, valueLabel: 'Điểm neo kỳ vọng', rangeLow: 19000, rangeHigh: 27000,
    gapLabel: 'Giá thị trường 39.300 đồng/cp cao hơn cận trên vùng giá trị hợp lý khoảng 45,6%; biên an toàn âm.', method: 'DCF/FCFF; P/E, EV/EBITDA, P/B kiểm chứng',
    summary: 'PET có tăng trưởng doanh thu nhưng mô hình phân phối có biên lợi nhuận thấp và nhu cầu vốn lưu động cao; giá hiện tại vượt xa vùng giá trị hợp lý. Trạng thái LOẠI / TRÁNH MUA MỚI.',
    action: inactive('2026-08-28', 'LOẠI / TRÁNH MUA MỚI', 'Không kích hoạt mua mới ở mức định giá hiện tại; chỉ đánh giá lại khi có báo cáo mới hoặc biên an toàn được tái lập.', 22300),
    file: 'reports/PET_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'HDG-20260828', ticker: 'HDG', company: 'CTCP Tập đoàn Hà Đô', sector: 'Năng lượng / Bất động sản / Dịch vụ', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'CHỜ', status: 'wait', marketPrice: 16500, marketPriceDate: '2026-08-27', baseValue: 21600, valueLabel: 'Giá trị kỳ vọng', rangeLow: 16900, rangeHigh: 26000,
    gapLabel: 'MOS hiện tại 23,5% so với expected value, chưa đạt ngưỡng mua 25-30%.', method: 'SOTP: DCF điện + RNAV/NPV BĐS + DCF cho thuê/khách sạn',
    summary: 'HDG được định giá theo SOTP; vùng giá trị hợp lý 16.900-26.000 đồng/cp và expected value khoảng 21.600 đồng/cp. Trạng thái CHỜ.',
    action: { zoneLow: 15100, zoneHigh: 16200, baseValue: 21600, basisDate: '2026-08-28', recommendation: 'CHỜ', eligibility: 'active', condition: 'IF giá về 15.100-16.200 và giữ hỗ trợ, hoặc có breakout với thanh khoản xác nhận, THEN mới xem xét kích hoạt giao dịch 1-3 tuần.' },
    file: 'reports/HDG_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'SZC-20260828', ticker: 'SZC', company: 'CTCP Sonadezi Châu Đức', sector: 'Bất động sản khu công nghiệp', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 19750, marketPriceDate: '2026-08-27', baseValue: 23483, valueLabel: 'Giá trị kỳ vọng', rangeLow: 19663, rangeHigh: 26785,
    gapLabel: 'MOS so với giá trị kỳ vọng khoảng 15,9%, chưa đạt chuẩn 25-30%.', method: 'NAV/SOTP; P/B kiểm chứng',
    summary: 'SZC sở hữu quỹ đất KCN lớn nhưng rủi ro GPMB và thay đổi cách ghi nhận doanh thu khiến P/E kém hữu dụng; trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 13800, zoneHigh: 14700, baseValue: 23483, basisDate: '2026-08-28', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá về vùng 13.800-14.700 và luận điểm không xấu đi THEN mới xem xét vùng mua theo MOS 25-30%; không mua đuổi chỉ vì P/B thấp.' },
    file: 'reports/SZC_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'LHG-20260828', ticker: 'LHG', company: 'CTCP Long Hậu', sector: 'Bất động sản khu công nghiệp / Nhà xưởng xây sẵn', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'CÓ MUA', status: 'wait', marketPrice: 26200, marketPriceDate: '2026-08-27', baseValue: 42100, valueLabel: 'Giá trị kỳ vọng', rangeLow: 36100, rangeHigh: 47600,
    gapLabel: 'P0 26.200 đồng/cp thấp hơn Bear khoảng 27,4% và thấp hơn expected value khoảng 37,7%.', method: 'NAV/P-NAV; P/B kiểm chứng',
    summary: 'LHG có vùng mua định giá ưu tiên 25.300-27.100 đồng/cp và P0 nằm trong vùng này. Báo cáo kết luận CÓ MUA theo cổng MOS.',
    action: { zoneLow: 25300, zoneHigh: 27100, baseValue: 42100, basisDate: '2026-08-28', recommendation: 'CÓ MUA', eligibility: 'active', condition: 'IF giá nằm trong 25.300-27.100 và thesis không xấu đi THEN có thể xem xét giải ngân; với giao dịch 1-3 tuần phải tuân thủ stoploss 3-7% và không bình quân giá xuống.' },
    file: 'reports/LHG_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'DPG-20260828', ticker: 'DPG', company: 'CTCP Tập đoàn Đạt Phương', sector: 'Xây dựng / Thủy điện / Bất động sản', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 29550, marketPriceDate: '2026-08-27', baseValue: 41500, valueLabel: 'Giá trị kỳ vọng', rangeLow: 38000, rangeHigh: 47000,
    gapLabel: 'Giá hiện tại đã chiết khấu so với giá trị kỳ vọng nhưng chưa đủ rẻ so với cận dưới vùng giá trị bảo thủ để kích hoạt MUA cơ học.', method: 'SOTP: Xây dựng + Thủy điện + BĐS + Kính năng lượng',
    summary: 'DPG có backlog xây lắp lớn và thủy điện tạo dòng tiền, nhưng biên xây lắp, hấp thụ BĐS và nhu cầu vốn cho dự án mới là các lực cản. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 27000, zoneHigh: 28000, baseValue: 41500, basisDate: '2026-08-28', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', stop: 26100, target: 33000, condition: 'IF giá về 27.000-28.000 THEN mới xem xét; stoploss tham chiếu 26.100. Target 1 là 33.000 và Target 2 là 38.000 đồng/cp; không mua đuổi.' },
    file: 'reports/DPG_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'MCH-20260828', ticker: 'MCH', company: 'CTCP Hàng tiêu dùng Masan', sector: 'FMCG / Hàng tiêu dùng thiết yếu', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'TRÁNH MUA MỚI / LOẠI Ở GIÁ HIỆN TẠI', status: 'reject', marketPrice: 142000, marketPriceDate: '2026-08-27', baseValue: 109900, valueLabel: 'Giá trị kỳ vọng trọng số', rangeLow: 90000, rangeHigh: 135000,
    gapLabel: 'Giá 142.000 đồng/cp cao hơn cận trên 135.000 đồng/cp và cao hơn khoảng 29% so với giá trị kỳ vọng trọng số.', method: 'FCFF DCF + P/E forward + EV/EBITDA forward',
    summary: 'MCH là doanh nghiệp FMCG chất lượng cao, nhưng mức giá hiện tại không còn biên an toàn theo vùng định giá của báo cáo. Trạng thái TRÁNH MUA MỚI / LOẠI.',
    action: inactive('2026-08-28', 'TRÁNH MUA MỚI / LOẠI', 'Không kích hoạt mua mới ở giá hiện tại; chỉ đánh giá lại khi giá hoặc định giá thay đổi đủ để tái lập biên an toàn.', 109900),
    file: 'reports/MCH_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'SJS-20260828', ticker: 'SJS', company: 'SJ Group', sector: 'Bất động sản', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'TRÁNH / LOẠI MUA MỚI', status: 'reject', marketPrice: 53100, marketPriceDate: '2026-08-27', baseValue: 39060, valueLabel: 'Giá trị kỳ vọng', rangeLow: 31000, rangeHigh: 52000,
    gapLabel: 'MOS hiện tại khoảng -35,9% so với expected value; giá vượt nhẹ cận trên vùng giá trị trước quyền.', method: 'RNAV/NAV + P/NAV; P/B kiểm chứng',
    summary: 'SJS có tài sản đất lớn nhưng giá đã phản ánh phần lớn kỳ vọng, CFO H1/2026 âm và quyền mua làm cơ sở so sánh giá trở nên quan trọng. Trạng thái TRÁNH / LOẠI mua mới.',
    action: inactive('2026-08-28', 'TRÁNH / LOẠI MUA MỚI', 'Không mua mới tại giá hiện tại. Trước và sau ngày quyền phải quy đổi về cùng cơ sở; không so giá danh nghĩa trực tiếp.', 39060),
    file: 'reports/SJS_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'CMG-20260828', ticker: 'CMG', company: 'CTCP Tập đoàn Công nghệ CMC', sector: 'Công nghệ / Dịch vụ / Hạ tầng số', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 24150, marketPriceDate: '2026-08-27', baseValue: 23034, valueLabel: 'Giá trị kỳ vọng trọng số', rangeLow: 18000, rangeHigh: 32000,
    gapLabel: 'Giá nằm trong vùng giá trị hợp lý nhưng MOS so với expected value khoảng -4,8%; chưa đạt biên an toàn 25-30%.', method: 'DCF/FCFF; multiples kiểm chứng',
    summary: 'CMG có tài sản hạ tầng số và hệ sinh thái công nghệ, nhưng chu kỳ đầu tư 2026 tăng mạnh khiến DCF chịu áp lực. Trạng thái CHỜ / THEO DÕI.',
    action: { zoneLow: 16100, zoneHigh: 17300, baseValue: 23034, basisDate: '2026-08-28', recommendation: 'CHỜ / THEO DÕI', eligibility: 'active', condition: 'IF giá về 16.100-17.300 và luận điểm không xấu đi THEN mới xem xét vùng mua theo MOS 25-30%.' },
    file: 'reports/CMG_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'VPI-20260828', ticker: 'VPI', company: 'CTCP Phát triển Bất động sản Văn Phú', sector: 'Bất động sản nhà ở', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'LOẠI / TRÁNH MUA MỚI', status: 'reject', marketPrice: 67900, marketPriceDate: '2026-08-28', baseValue: 33600, valueLabel: 'Giá trị kỳ vọng', rangeLow: 25300, rangeHigh: 42900,
    gapLabel: 'Giá thị trường vượt xa toàn bộ vùng hội tụ của mô hình; MOS hiện tại khoảng -102,3% so với expected value.', method: 'RNAV / P-NAV; P/E và P/B kiểm chứng',
    summary: 'VPI có giá thị trường cao hơn toàn bộ vùng định giá của báo cáo, trong khi CFO âm mạnh và đòn bẩy cao. Trạng thái LOẠI / TRÁNH MUA MỚI.',
    action: inactive('2026-08-28', 'LOẠI / TRÁNH MUA MỚI', 'Không kích hoạt mua mới ở giá hiện tại; chỉ đánh giá lại khi xuất hiện báo cáo mới hoặc định giá co về vùng có biên an toàn.', 33600),
    file: 'reports/VPI_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'SBT-20260828', ticker: 'SBT', company: 'CTCP Thành Thành Công - Biên Hòa', sector: 'Đường / Nông nghiệp', exchange: 'HOSE', date: '2026-08-28',
    recommendation: 'LOẠI / TRÁNH MUA MỚI', status: 'reject', marketPrice: 22800, marketPriceDate: '2026-08-28', baseValue: 17880, valueLabel: 'Expected value pha loãng', rangeLow: 11100, rangeHigh: 22400,
    gapLabel: 'Giá thị trường cao hơn cận trên vùng fair value pha loãng; MOS so với expected diluted khoảng -27,5%.', method: 'Định giá chu kỳ / composite; không dùng P/E một năm làm trục',
    summary: 'SBT có quy mô và chuỗi giá trị tích hợp nhưng FCF âm, nợ ròng lớn và pha loãng khiến giá hiện tại không có biên an toàn. Trạng thái LOẠI / TRÁNH MUA MỚI.',
    action: inactive('2026-08-28', 'LOẠI / TRÁNH MUA MỚI', 'Không mua đuổi; chỉ xem xét lại khi giá giảm đủ sâu hoặc CFO/FCF, đòn bẩy và điều khoản chuyển đổi cải thiện so với mô hình hiện tại.', 17880),
    file: 'reports/SBT_2026-08-28.pdf', edition: 'Bản định giá 28.08.2026'
  },
  {
    id: 'BVH-20260831', ticker: 'BVH', company: 'Tập đoàn Bảo Việt', sector: 'Bảo hiểm', exchange: 'HOSE', date: '2026-08-31',
    recommendation: 'CHỜ / THEO DÕI', status: 'wait', marketPrice: 64000, marketPriceDate: '2026-08-28', baseValue: 63206, valueLabel: 'Giá trị kỳ vọng', rangeLow: 43000, rangeHigh: 82000,
    gapLabel: 'Giá trị kỳ vọng 63.206 đồng/cp gần như trùng thị giá; MOS hiện tại khoảng -1,3%.', method: 'Residual Income + P/B gắn ROE',
    summary: 'BVH có ROE cải thiện nhưng giá 64.000 đồng/cp đã phản ánh phần đáng kể của cải thiện; báo cáo kết luận CHỜ / THEO DÕI.',
    action: inactive('2026-08-31', 'CHỜ / THEO DÕI', 'Vùng mua có MOS 25-30% trong báo cáo là 44.200-47.400 đồng/cp. Báo cáo phát hành sau EOD 28/08 nên không kích hoạt tín hiệu hồi tố trên dữ liệu 28/08.', 63206),
    file: 'reports/BVH_2026-08-31.pdf', edition: 'Bản định giá 31.08.2026'
  },
  {
    id: 'FTS-20260903', ticker: 'FTS', company: 'CTCP Chứng khoán FPT', sector: 'Chứng khoán', exchange: 'HOSE', date: '2026-09-03',
    recommendation: 'THEO DÕI / CHỜ - CHƯA ĐỦ MOS', status: 'wait', marketPrice: 22750, marketPriceDate: '2026-08-28', baseValue: 17830, valueLabel: 'Giá trị kỳ vọng', rangeLow: 12300, rangeHigh: 24100,
    gapLabel: 'Giá 22.750 đồng/cp nằm sát cận trên vùng định giá và cao hơn giá trị kỳ vọng khoảng 27,6%; chưa có biên an toàn.', method: 'Residual Income + P/B gắn ROE; P/E forward kiểm chứng',
    summary: 'FTS có chất lượng vốn tốt và hưởng lợi từ chu kỳ thanh khoản, nhưng P/B hiện tại đòi hỏi ROE cao hơn mức TTM; trạng thái THEO DÕI / CHỜ.',
    action: inactive('2026-09-03', 'THEO DÕI / CHỜ', 'Không kích hoạt tín hiệu hồi tố trên EOD 28/08 vì báo cáo phát hành ngày 03/09/2026. Chờ dữ liệu EOD mới sau ngày báo cáo và biên an toàn phù hợp.', 17830),
    file: 'reports/FTS_2026-09-03.pdf', edition: 'Bản định giá 03.09.2026'
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
for (const old of oldValuations) {
  if (old.file && fs.existsSync(old.file) && old.file !== incomingByTicker.get(old.ticker)?.file) {
    fs.rmSync(old.file);
    removedArtifacts.push(old.file);
  }
}

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
  if (fs.readFileSync(report.file).subarray(0, 5).toString('ascii') !== '%PDF-') throw new Error(`${report.ticker}: chữ ký PDF không hợp lệ`);
  const cover = `assets/images/reports/${report.ticker.toLowerCase()}.webp`;
  if (!fs.existsSync(cover)) throw new Error(`${report.ticker}: thiếu ảnh bìa ${cover}`);
  report.visual = {
    src: `${cover}?v=${coverVersion}`,
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

console.log(JSON.stringify({ incoming: incoming.map((r) => `${r.ticker}:${r.date}`), replacedOldValuationReports, removedArtifacts, reportCount: data.reports.length, valuationCount: valuations.length, coverageCount: data.coverage.length }, null, 2));
