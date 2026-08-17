(() => {
  const source = window.RESEARCH_DATA;
  if (!source || !Array.isArray(source.reports) || !Array.isArray(source.coverage)) {
    throw new Error("RESEARCH_DATA chưa sẵn sàng để áp dụng báo cáo 17/08/2026.");
  }

  const sharedVisual = {
    kind: "illustration",
    src: "assets/images/advisor-banner-3d-v2.webp?v=20260817-reports1",
    alt: "Nhận diện báo cáo định giá Xuân Lê TVS",
    caption: "Báo cáo định giá cổ phiếu",
    sourceLabel: "Xuân Lê TVS",
    sourceUrl: "https://sunflower1509.github.io/xuan-le-investment-research/"
  };

  const incomingReports = [
    {
      id: "FPT-20260817", ticker: "FPT", company: "Công ty Cổ phần FPT", sector: "Công nghệ", exchange: "HOSE", date: "2026-08-17",
      recommendation: "CHỜ / THEO DÕI", status: "wait", marketPrice: 68800, marketPriceDate: "2026-08-17", baseValue: 117900, valueLabel: "Giá trị kỳ vọng", rangeLow: 63600, rangeHigh: 185600,
      gapLabel: "Chưa đạt MOS 25–30% so với cận dưới; vùng mua định giá 44.500–47.700 đồng/cp", method: "DCF theo FCFF; kiểm chứng P/E, EV/EBITDA và P/B",
      summary: "Vùng giá trị hợp lý 63.600–185.600 đồng/cp, giá trị kỳ vọng 117.900 đồng/cp. Tại giá 68.800 đồng/cp ngày 17/08/2026, báo cáo giữ trạng thái CHỜ / THEO DÕI; vùng mua đủ biên an toàn theo định giá là 44.500–47.700 đồng/cp.",
      action: { zoneLow: 44500, zoneHigh: 47700, baseValue: 117900, stop: null, targets: [63600, 87700, 90600], basisDate: "2026-08-17", recommendation: "CHỜ / THEO DÕI", eligibility: "active", condition: "Chỉ xem xét 44.500–47.700 đồng/cp khi dữ liệu cơ bản không xấu đi. Stop là 5% dưới giá khớp bình quân; báo cáo minh họa 46.100 → 43.800. T1 63.600; T2 87.700–90.600 đồng/cp. Nếu giả định tăng trưởng/biên bị phá vỡ thì LOẠI." },
      visual: { ...sharedVisual }, file: "reports/FPT_2026-08-17.pdf", edition: "Bản định giá 17.08.2026"
    },
    {
      id: "BFC-20260817", ticker: "BFC", company: "Công ty Cổ phần Phân bón Bình Điền", sector: "Nông nghiệp", exchange: "HOSE", date: "2026-08-17",
      recommendation: "TRÁNH", status: "reject", marketPrice: 47700, marketPriceDate: "2026-08-17", baseValue: 33808, valueLabel: "Giá trị kỳ vọng", rangeLow: 24044, rangeHigh: 45823,
      gapLabel: "Giá 47.700 đồng/cp cao hơn cận trên 45.823 đồng/cp; không có biên an toàn", method: "Lợi nhuận chuẩn hóa 5–7 năm; kiểm chứng P/B và EV/EBITDA chuẩn hóa",
      summary: "Vùng giá trị hợp lý 24.044–45.823 đồng/cp, giá trị kỳ vọng 33.808 đồng/cp. Giá 47.700 đồng/cp ngày 17/08/2026 cao hơn cận trên nên báo cáo kết luận TRÁNH. Vùng có thể xem xét theo MOS 25–30% so với Base là 22.878–24.512 đồng/cp nếu kết quả kinh doanh không xấu thêm.",
      action: { zoneLow: 22878, zoneHigh: 24512, baseValue: 33808, stop: null, targets: [], basisDate: "2026-08-17", recommendation: "TRÁNH - KHÔNG MUA MỚI", eligibility: "veto", condition: "P >45.800: TRÁNH mua mới. P 32.700–45.800: THEO DÕI. P 22.900–24.500: chỉ có thể xem xét theo MOS nếu KQKD không xấu thêm. Tại giá hiện tại Stoploss/Target/R/R đều N/A; không tạo mức stop giả từ valuation." },
      visual: { ...sharedVisual }, file: "reports/BFC_2026-08-17.pdf", edition: "Bản định giá 17.08.2026"
    },
    {
      id: "PNJ-20260817", ticker: "PNJ", company: "Công ty Cổ phần Vàng bạc Đá quý Phú Nhuận", sector: "Tiêu dùng", exchange: "HOSE", date: "2026-08-17",
      recommendation: "THEO DÕI", status: "wait", marketPrice: 36200, marketPriceDate: "2026-08-17", baseValue: 70561, valueLabel: "Điểm neo kỳ vọng", rangeLow: 31129, rangeHigh: 117109,
      gapLabel: "Chưa đạt MOS 25–30% so với cận dưới; vùng mua định giá 21.791–23.347 đồng/cp", method: "DCF theo FCFF; kiểm chứng P/E, EV/EBITDA và P/B",
      summary: "Vùng giá trị hợp lý 31.129–117.109 đồng/cp và điểm neo kỳ vọng 70.561 đồng/cp. Giá 36.200 đồng/cp ngày 17/08/2026 vẫn nằm trong vùng giá trị nên tín hiệu cơ học là THEO DÕI. Vùng mua đủ MOS 25–30% theo cận dưới là 21.791–23.347 đồng/cp; các điểm vào chiến thuật 1–3 tuần trong báo cáo có điều kiện xác nhận riêng.",
      action: { zoneLow: 21791, zoneHigh: 23347, baseValue: 70561, stop: null, targets: [31129, 70561], basisDate: "2026-08-17", recommendation: "THEO DÕI", eligibility: "active", condition: "Vùng 21.791–23.347 đồng/cp là vùng mua nghiêm ngặt theo MOS. Không tự động chuyển các ngưỡng chiến thuật thành lệnh mua: breakout 39.700 cần 2 phiên và thanh khoản xác nhận; pullback 34.800–35.000 cũng cần giữ 2 phiên và không có thông tin bất lợi mới." },
      visual: { ...sharedVisual }, file: "reports/PNJ_2026-08-17.pdf", edition: "Bản định giá 17.08.2026"
    },
    {
      id: "ACB-20260817", ticker: "ACB", company: "Ngân hàng TMCP Á Châu", sector: "Ngân hàng", exchange: "HOSE", date: "2026-08-17",
      recommendation: "CHỜ / THEO DÕI", status: "wait", marketPrice: 21850, marketPriceDate: "2026-08-17", baseValue: 27744, valueLabel: "Giá trị kỳ vọng", rangeLow: 25700, rangeHigh: 29600,
      gapLabel: "MOS so cận dưới khoảng 15%; chưa đạt chuẩn 25–30%", method: "P/B gắn ROE kết hợp Residual Income",
      summary: "Vùng giá trị hợp lý lõi 25.700–29.600 đồng/cp, giá trị kỳ vọng 27.744 đồng/cp. Giá 21.850 đồng/cp ngày 17/08/2026 thấp hơn vùng giá trị nhưng MOS so với cận dưới mới khoảng 15%, nên báo cáo giữ trạng thái CHỜ / THEO DÕI. Vùng mua nghiêm ngặt là 17.990–19.275 đồng/cp, làm tròn giao dịch 18.000–19.300 đồng/cp.",
      action: { zoneLow: 18000, zoneHigh: 19300, baseValue: 27744, stop: null, targets: [22780, 25700, 27744], basisDate: "2026-08-17", recommendation: "CHỜ / THEO DÕI", eligibility: "active", condition: "Chỉ xem xét 18.000–19.300 đồng/cp nếu NPL/LLCR và thông tin công bố không xấu đi đáng kể. Sau khi mua, stop tham chiếu -6% từ giá khớp thực tế. T1 22.780; T2 25.700; T3 27.744 đồng/cp." },
      visual: { ...sharedVisual }, file: "reports/ACB_17-08-2026.pdf", edition: "Bản định giá 17.08.2026"
    }
  ];

  const tickers = new Set(incomingReports.map((report) => report.ticker));
  source.reports = [
    ...incomingReports,
    ...source.reports.filter((report) => !tickers.has(report.ticker))
  ];

  const reportByTicker = new Map(incomingReports.map((report) => [report.ticker, report]));
  source.coverage.forEach((item) => {
    const report = reportByTicker.get(item.ticker);
    if (!report) return;
    item.reportId = report.id;
    item.action = { ...report.action, targets: [...(report.action.targets || [])] };
  });
})();
