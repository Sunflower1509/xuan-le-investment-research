window.RESEARCH_DATA = {
  meta: {
    updated: "2026-07-21",
    release: "2026-07-22",
    owner: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    phone: "0977.811.398",
    zalo: "https://zalo.me/0977811398",
    note: "Giá đóng cửa của toàn bộ 17 mã Coverage Universe được khóa tại phiên 21/07/2026; nguồn và nguồn đối chiếu được dẫn riêng theo từng mã. Thư viện PDF chỉ giữ bản mới nhất theo từng mã; ảnh hoạt động có liên kết nguồn. Thiếu dữ liệu được để trống, không nội suy."
  },

  marketSession: {
    date: "2026-07-20",
    status: "Đã đối chiếu",
    indices: [
      { code: "VN-INDEX", close: 1743.51, change: -43.94, changePct: -2.46 },
      { code: "VN30", close: 1887.32, change: -44.33, changePct: -2.29 },
      { code: "HNX-INDEX", close: 284.41, change: -7.29, changePct: -2.50 }
    ],
    breadth: { advance: 44, unchanged: 26, decline: 263, floor: 33 },
    sources: [
      { label: "VTC News — tổng kết phiên 20/07/2026", url: "https://vtcnews.vn/vn-index-boc-hoi-gan-44-diem-ar1030123.html" },
      { label: "Nhân Dân — độ rộng thị trường 20/07/2026", url: "https://nhandan.vn/infographic-chung-khoan-ngay-207-vn-index-giam-manh-4394-diem-ve-duoi-vung-gia-trung-binh-200-phien-post976791.html" }
    ]
  },

  rankingMethod: {
    title: "Khoảng cách tới vùng hành động",
    formula: "Khoảng cách = |Giá đóng cửa − biên gần nhất của vùng mua| / biên gần nhất",
    rules: [
      "Chỉ xếp hạng các mã có vùng mua/entry đã khóa và không mang khuyến nghị LOẠI hoặc TRÁNH MUA MỚI.",
      "Nếu giá thấp hơn cận dưới, trạng thái là CẦN XÁC NHẬN LẠI — không tự động chuyển thành MUA.",
      "Khuyến nghị điều kiện vẫn phải thỏa bộ lọc cơ bản hoặc kỹ thuật ghi trong báo cáo.",
      "Thiết lập đã thủng stop, quá cũ hoặc thiếu vùng mua được tách khỏi bảng ưu tiên."
    ]
  },

  reports: [
    {
      id: "VPX-20260722", ticker: "VPX", company: "Công ty Cổ phần Chứng khoán VPBank", sector: "Chứng khoán", exchange: "HOSE", date: "2026-07-22",
      recommendation: "CHỜ – THEO DÕI", status: "wait", marketPrice: 26650, marketPriceDate: "2026-07-21", baseValue: 25300, rangeLow: 21300, rangeHigh: 29300,
      gapLabel: "MOS −5,3% so với điểm giữa tại ngày định giá", method: "Residual Income + P/B gắn ROE",
      summary: "Giá 26.650 đồng/cp nằm trong vùng giá trị hợp lý 21.300–29.300 đồng/cp nhưng cao hơn điểm giữa 25.300 đồng/cp và không có biên an toàn; khuyến nghị hiện tại là CHỜ – THEO DÕI, chưa mua mới.",
      visual: { src: "assets/images/reports/vpx.webp", alt: "Lễ niêm yết cổ phiếu VPX của Chứng khoán VPBank tại HOSE", caption: "Lễ niêm yết và phiên giao dịch đầu tiên của VPX", sourceLabel: "Tuổi Trẻ Online", sourceUrl: "https://tuoitre.vn/co-phieu-vpx-cua-vpbanks-chinh-thuc-giao-dich-tren-hose-20251211113632063.htm" },
      file: "reports/Bao_cao_dinh_gia_VPX_Final_22072026.pdf", edition: "Bản mới nhất"
    },
    {
      id: "VIX-20260721", ticker: "VIX", company: "Công ty Cổ phần Chứng khoán VIX", sector: "Chứng khoán", exchange: "HOSE", date: "2026-07-21",
      recommendation: "CHỜ", status: "wait", marketPrice: 12500, baseValue: 9500, calculationBase: 9524, rangeLow: 6000, rangeHigh: 15400,
      gapLabel: "−23,81% tới giá trị cơ sở tại ngày định giá", method: "Residual Income + P/B–ROE + P/E–P/B tương đối",
      summary: "Giá 12.500 đồng/cp nằm trong vùng giá trị hợp lý 6.000–15.400 đồng/cp nhưng cao hơn giá trị cơ sở 9.500 đồng/cp và chưa đáp ứng biên an toàn; khuyến nghị thực chiến giữ ở mức CHỜ.",
      visual: { src: "assets/images/reports/vix.webp", alt: "Đội ngũ Chứng khoán VIX tại không gian làm việc", caption: "Hoạt động tại Chứng khoán VIX", sourceLabel: "VIX Securities", sourceUrl: "https://vixs.vn/chung-khoan-vix-dat-muc-tieu-gia-nhap-nhom-loi-nhuan-nghin-ty.html" },
      file: "reports/VIX_Valuation_Report_2026-07-21.pdf", edition: "Bản mới nhất"
    },
    {
      id: "VCB-20260714", ticker: "VCB", company: "Ngân hàng TMCP Ngoại thương Việt Nam", sector: "Ngân hàng", exchange: "HOSE", date: "2026-07-14",
      recommendation: "CHỜ", status: "wait", marketPrice: 58900, baseValue: 54200, rangeLow: 39500, rangeHigh: 68000,
      gapLabel: "−8,7% so với giá trị cơ sở tại ngày định giá", method: "P/B gắn ROE + Residual Income",
      summary: "Giá tại ngày định giá nằm trong vùng giá trị hợp lý nhưng chưa tạo biên an toàn hấp dẫn; không mua đuổi.",
      visual: { src: "assets/images/reports/vcb.webp", alt: "Cán bộ Vietcombank sử dụng VCB Tablet hỗ trợ khách hàng", caption: "VCB Tablet trong hoạt động ngân hàng số", sourceLabel: "Vietcombank", sourceUrl: "https://www.vietcombank.com.vn/vi-VN/Trang-thong-tin-dien-tu/Articles/2025/12/24/Van-hoa-so-6_PTSPBL_Kien-tao-giai-phap-ngan-hang-so-di-dong" },
      file: "reports/VCB_Bao_cao_dinh_gia_Xuan_Le_TVS.pdf", edition: "Bản chính"
    },
    {
      id: "DDV-20260713", ticker: "DDV", company: "Công ty Cổ phần DAP - Vinachem", sector: "Hóa chất", exchange: "UPCoM", date: "2026-07-13",
      recommendation: "THEO DÕI / CHỜ", status: "wait", marketPrice: 21600, baseValue: 26000, rangeLow: 21600, rangeHigh: 30400,
      gapLabel: null, method: "DCF FCFF + kiểm chứng tương đối",
      summary: "Giá trị trung tâm 26.000 đồng/cp; vùng giá trị hợp lý 21.600–30.400 đồng/cp.",
      visual: { src: "assets/images/reports/ddv.webp", alt: "Khu nhà máy DAP - Vinachem tại Đình Vũ", caption: "Nhà máy DAP - Vinachem", sourceLabel: "DAP - Vinachem", sourceUrl: "https://www.dap-vinachem.com.vn/" },
      file: "reports/Bao_cao_dinh_gia_DDV_20260714.pdf", edition: "Bản chính"
    },
    {
      id: "GAS-20260713", ticker: "GAS", company: "Tổng Công ty Khí Việt Nam - CTCP", sector: "Năng lượng", exchange: "HOSE", date: "2026-07-13",
      recommendation: "CHỜ", status: "wait", marketPrice: 75400, baseValue: 96900, rangeLow: 65000, rangeHigh: 103000,
      gapLabel: null, method: "DCF FCFF + định giá tương đối",
      summary: "Giá trị cơ sở 96.900 đồng/cp; vùng giá trị hợp lý 65.000–103.000 đồng/cp.",
      visual: { src: "assets/images/reports/gas.webp", alt: "Kỹ sư vận hành hệ thống xử lý khí của PV GAS", caption: "Vận hành công trình xử lý khí", sourceLabel: "PV GAS", sourceUrl: "https://www.pvgas.com.vn/en-us/bai-viet/pv-gas-35-nam-doi-moi-sang-tao-va-tien-phong-cong-nghe-trong-nganh-cong-nghiep-khi-viet-nam" },
      file: "reports/Bao_cao_dinh_gia_GAS_2026_Xuan_Le_TVS.pdf", edition: "Bản chính"
    },
    {
      id: "BVS-20260713", ticker: "BVS", company: "Công ty Cổ phần Chứng khoán Bảo Việt", sector: "Chứng khoán", exchange: "HNX", date: "2026-07-13",
      recommendation: "CHỜ / THEO DÕI", status: "wait", marketPrice: 35900, baseValue: 31461, rangeLow: 28400, rangeHigh: 36200,
      gapLabel: "−14,1% so với giá trị cơ sở tại ngày định giá", method: "Residual Income + P/B–ROE",
      summary: "Giá trị cơ sở 31.461 đồng/cp; vùng giá trị hợp lý 28.400–36.200 đồng/cp.",
      visual: { src: "assets/images/reports/bvs.webp", alt: "Ban lãnh đạo Chứng khoán Bảo Việt tại Đại hội đồng cổ đông thường niên 2025", caption: "Đại hội đồng cổ đông thường niên 2025", sourceLabel: "BVSC", sourceUrl: "https://www.facebook.com/ChungKhoanBaoViet.BVSC/posts/1292292632904660/" },
      file: "reports/BVS_Valuation_Report_XuanLeTVS_20260713.pdf", edition: "Bản mới nhất"
    },
    {
      id: "GEE-20260713", ticker: "GEE", company: "Công ty Cổ phần Điện lực GELEX", sector: "Công nghiệp", exchange: "HOSE", date: "2026-07-13",
      recommendation: "TRÁNH MUA MỚI", status: "avoid", marketPrice: 80400, baseValue: 38600, rangeLow: 29400, rangeHigh: 47800,
      gapLabel: "−108,3% biên an toàn theo công thức trong báo cáo", method: "DCF FCFF + kiểm chứng định giá tương đối",
      summary: "Chất lượng hoạt động cốt lõi cải thiện, nhưng định giá thị trường cao hơn đáng kể vùng giá trị hợp lý.",
      visual: { src: "assets/images/reports/gee.webp", alt: "Toàn cảnh nhà máy CADIVI tại Bắc Ninh thuộc hệ sinh thái GELEX Electric", caption: "Nhà máy CADIVI thuộc GELEX Electric", sourceLabel: "CADIVI", sourceUrl: "https://cadivi.vn/vn/thanh-lap-cong-ty-tnhh-mot-thanh-vien-cadivi-mien-bac.html" },
      file: "reports/GEE_Equity_Research_Valuation_2026_Xuan_Le_TVS.pdf?v=c1eb774c", edition: "Đã kiểm tra"
    },
    {
      id: "BSR-20260712", ticker: "BSR", company: "Tổng Công ty Lọc hóa dầu Việt Nam", sector: "Năng lượng", exchange: "HOSE", date: "2026-07-12",
      recommendation: "LOẠI", status: "reject", marketPrice: 25500, baseValue: 19000, rangeLow: 13600, rangeHigh: 24300,
      gapLabel: null, method: "DCF FCFF chu kỳ + kiểm chứng tương đối",
      summary: "Điểm giữa 19.000 đồng/cp; vùng giá trị hợp lý 13.600–24.300 đồng/cp; không mua mới.",
      visual: { src: "assets/images/reports/bsr.webp", alt: "Hình minh họa một tổ hợp lọc hóa dầu", caption: "Hình minh họa ngành lọc hóa dầu", sourceLabel: "Unsplash / Ali Mucci", sourceUrl: "https://unsplash.com/photos/industrial-oil-refinery-complex-under-a-clear-blue-sky-gZbjx2K7s9I", kind: "illustration" },
      file: "reports/BSR_Equity_Research_Valuation_2026.pdf", edition: "Bản chính"
    },
    {
      id: "PVS-20260711", ticker: "PVS", company: "Tổng CTCP Dịch vụ Kỹ thuật Dầu khí Việt Nam", sector: "Năng lượng", exchange: "HNX", date: "2026-07-11",
      recommendation: "THEO DÕI / CHỜ", status: "wait", marketPrice: 36200, baseValue: 43750, rangeLow: 37500, rangeHigh: 50000,
      gapLabel: null, method: "SOTP + DCF FCFF",
      summary: "Điểm giữa 43.750 đồng/cp; vùng giá trị hợp lý 37.500–50.000 đồng/cp.",
      visual: { src: "assets/images/reports/pvs.webp", alt: "Hạng mục chân đế giàn Lạc Đà Vàng do PTSC M&C thi công và hạ thủy", caption: "Thi công chân đế giàn Lạc Đà Vàng", sourceLabel: "PTSC M&C", sourceUrl: "https://mc.ptsc.com.vn/news/ptsc-mc-successfully-completes-jacket-construction-for-lac-da-vang-project-and-reaches-2-million-safe-man-hours" },
      file: "reports/PVS_Valuation_Report_XuanLeTVS.pdf", edition: "Bản chính"
    },
    {
      id: "CTG-20260710", ticker: "CTG", company: "Ngân hàng TMCP Công Thương Việt Nam", sector: "Ngân hàng", exchange: "HOSE", date: "2026-07-10",
      recommendation: "CHỜ / THEO DÕI", status: "wait", marketPrice: 33700, baseValue: 45300, rangeLow: 30600, rangeHigh: 52100,
      gapLabel: null, method: "P/B gắn ROE + Residual Income",
      summary: "Giá trị cơ sở 45.300 đồng/cp; vùng giá trị hợp lý 30.600–52.100 đồng/cp.",
      visual: { src: "assets/images/reports/ctg.webp", alt: "Gian hàng chuyển đổi số của VietinBank tại sự kiện ngành ngân hàng", caption: "Hoạt động chuyển đổi số VietinBank", sourceLabel: "VietinBank", sourceUrl: "https://www.vietinbank.vn/vietinbank-toa-sang-tai-su-kien-chuyen-doi-so-nganh-ngan-hang-nam-2025-20250530023016-00-html" },
      file: "reports/CTG_Valuation_Report_20260710_XuanLeTVS.pdf", edition: "Bản chính"
    },
    {
      id: "HPG-20260710", ticker: "HPG", company: "Tập đoàn Hòa Phát", sector: "Công nghiệp", exchange: "HOSE", date: "2026-07-10",
      recommendation: "THEO DÕI / CHỜ", status: "wait", marketPrice: 22950, baseValue: 29000, rangeLow: 25000, rangeHigh: 33000,
      gapLabel: null, method: "DCF FCFF chu kỳ + kiểm chứng tương đối",
      summary: "Điểm giữa 29.000 đồng/cp; vùng giá trị hợp lý 25.000–33.000 đồng/cp.",
      visual: { src: "assets/images/reports/hpg.webp", alt: "Lò thổi oxy luyện thép tại Hòa Phát Dung Quất 2", caption: "Vận hành luyện thép tại Dung Quất 2", sourceLabel: "Hòa Phát", sourceUrl: "https://www.hoaphat.com.vn/cong-nghe/hoa-phat-khai-lo-thoi-so-2-dung-quat-2-da-san-sang.html" },
      file: "reports/HPG_Valuation_Report_20260710_XuanLeTVS.pdf", edition: "Bản chính"
    },
    {
      id: "TVS-20260709", ticker: "TVS", company: "Công ty Cổ phần Chứng khoán Thiên Việt", sector: "Chứng khoán", exchange: "HOSE", date: "2026-07-09",
      recommendation: "CHỜ", status: "wait", marketPrice: 16150, baseValue: 13568, rangeLow: 11300, rangeHigh: 16700,
      gapLabel: null, method: "P/B–ROE + Residual Income",
      summary: "Giá trị trọng số 13.568 đồng/cp; vùng giá trị hợp lý 11.300–16.700 đồng/cp.",
      visual: { src: "assets/images/reports/tvs.webp", alt: "Hoạt động tư vấn và kết nối khách hàng tại Chứng khoán Thiên Việt", caption: "Hoạt động tư vấn đầu tư tại TVS", sourceLabel: "Thiên Việt Securities", sourceUrl: "https://www.tvs.vn/en/news/positioned-as-a-trusted-boutique-merchant-investment-bank-tvs-comes-closer-to-investors" },
      file: "reports/Bao_cao_dinh_gia_TVS_09072026.pdf", edition: "Bản chính"
    }
  ],

  coverage: [
    {
      ticker: "VPX", company: "Chứng khoán VPBank", sector: "Chứng khoán", exchange: "HOSE", reportId: "VPX-20260722",
      close: 26650, priceDate: "2026-07-21", changePct: -2.56, volume: 1050300, priceSource: "https://simplize.vn/co-phieu/VPX/lich-su-gia", priceSourceSecondary: "https://finance.vietstock.vn/VPX-ctcp-chung-khoan-vpbank.htm",
      action: { zoneLow: 25300, zoneHigh: 25800, valuationLow: 17700, valuationHigh: 19000, stop: 24400, basisDate: "2026-07-22", recommendation: "CHỜ / THĂM DÒ CÓ ĐIỀU KIỆN", eligibility: "active", condition: "Chỉ thăm dò tối đa 20–30% vị thế khi giá về 25.300–25.800, không đóng cửa dưới 25.100 và xuất hiện cầu chủ động với khối lượng ≥1,5 lần MA20; stop 24.400. Vùng mua định giá dài hạn là 17.700–19.000." }
    },
    {
      ticker: "VIX", company: "Chứng khoán VIX", sector: "Chứng khoán", exchange: "HOSE", reportId: "VIX-20260721",
      close: 12500, priceDate: "2026-07-21", changePct: -2.34, volume: 41188900, priceSource: "https://simplize.vn/co-phieu/VIX/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/VIX/HistoricalQuotes.aspx",
      action: { zoneLow: 7500, zoneHigh: 8000, basisDate: "2026-07-21", recommendation: "CHỜ", eligibility: "active", condition: "Không mua cơ bản tại 12.500 đồng; chỉ giao dịch ngắn hạn khi đóng cửa trên 13.200 đồng với khối lượng tối thiểu 39–40 triệu cổ phiếu." }
    },
    {
      ticker: "VCB", company: "Vietcombank", sector: "Ngân hàng", exchange: "HOSE", reportId: "VCB-20260714",
      close: 56700, priceDate: "2026-07-21", changePct: 0.00, volume: 3413200, priceSource: "https://simplize.vn/co-phieu/VCB/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/VCB/HistoricalQuotes.aspx",
      action: { zoneLow: 38000, zoneHigh: 40700, basisDate: "2026-07-14", recommendation: "CHỜ", eligibility: "active", condition: "Đầu tư giá trị; giao dịch 1–3 tuần chỉ hành động khi cấu trúc giá xác nhận." }
    },
    {
      ticker: "ACB", company: "Ngân hàng Á Châu", sector: "Ngân hàng", exchange: "HOSE", reportId: null,
      close: 22850, priceDate: "2026-07-21", changePct: 0.00, volume: 16446800, priceSource: "https://simplize.vn/co-phieu/ACB/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/ACB/HistoricalQuotes.aspx",
      action: { zoneLow: 19100, zoneHigh: 20500, baseValue: 27300, basisDate: "2026-07-16", recommendation: "CHỜ – KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Vùng mua đã khóa trong phân tích ACB; PDF chưa có trong thư viện." }
    },
    {
      ticker: "CTG", company: "VietinBank", sector: "Ngân hàng", exchange: "HOSE", reportId: "CTG-20260710",
      close: 30900, priceDate: "2026-07-21", changePct: 0.32, volume: 5591400, priceSource: "https://simplize.vn/co-phieu/CTG/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/CTG/HistoricalQuotes.aspx",
      action: { zoneLow: 31700, zoneHigh: 34000, basisDate: "2026-07-10", recommendation: "CHỜ / THEO DÕI", eligibility: "active", condition: "Chỉ tích lũy từng phần khi NPL quanh 1% và LLR trên 150%; không all-in." }
    },
    {
      ticker: "TVS", company: "Chứng khoán Thiên Việt", sector: "Chứng khoán", exchange: "HOSE", reportId: "TVS-20260709",
      close: 14050, priceDate: "2026-07-21", changePct: -3.77, volume: 427600, priceSource: "https://simplize.vn/co-phieu/TVS/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/TVS/HistoricalQuotes.aspx",
      action: { zoneLow: 9500, zoneHigh: 10200, basisDate: "2026-07-09", recommendation: "CHỜ", eligibility: "active", condition: "Vùng MOS 25–30%; chưa có bằng chứng ROE phục hồi thì không mua mới." }
    },
    {
      ticker: "VND", company: "VNDirect", sector: "Chứng khoán", exchange: "HOSE", reportId: null,
      close: 17150, priceDate: "2026-07-21", changePct: -0.29, volume: 11165800, priceSource: "https://simplize.vn/co-phieu/VND/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/VND/HistoricalQuotes.aspx",
      action: { trigger: 18350, basisDate: "2026-06-30", recommendation: "CHỜ BREAKOUT", eligibility: "stale", condition: "Trigger kỹ thuật cũ cần đánh giá lại; không xếp chung với vùng mua định giá." }
    },
    {
      ticker: "BVS", company: "Chứng khoán Bảo Việt", sector: "Chứng khoán", exchange: "HNX", reportId: "BVS-20260713",
      close: 28900, priceDate: "2026-07-21", changePct: 2.12, volume: 791700, priceSource: "https://simplize.vn/co-phieu/BVS/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/BVS/HistoricalQuotes.aspx",
      action: { zoneLow: 19900, zoneHigh: 21300, basisDate: "2026-07-13", recommendation: "CHỜ / THEO DÕI", eligibility: "active", condition: "Chỉ mua từng phần khi LNST 2026 và chất lượng tài sản vẫn giữ điều kiện của báo cáo." }
    },
    {
      ticker: "FPT", company: "FPT", sector: "Công nghệ", exchange: "HOSE", reportId: null,
      close: 64800, priceDate: "2026-07-21", changePct: -3.43, volume: 7540400, priceSource: "https://simplize.vn/co-phieu/FPT/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/FPT/HistoricalQuotes.aspx",
      action: { zoneLow: 69000, zoneHigh: 72500, stopHigh: 69000, basisDate: "2026-07-09", recommendation: "CHỜ / CANH MUA CÓ ĐIỀU KIỆN", eligibility: "invalidated", condition: "Giá đã xuống dưới mốc stop 68.500–69.000 của thiết lập cũ; phải đánh giá lại trước khi kích hoạt." }
    },
    {
      ticker: "HPG", company: "Hòa Phát", sector: "Công nghiệp", exchange: "HOSE", reportId: "HPG-20260710",
      close: 20800, priceDate: "2026-07-21", changePct: 0.97, volume: 27198700, priceSource: "https://simplize.vn/co-phieu/HPG/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/HPG/HistoricalQuotes.aspx",
      action: { zoneLow: 17500, zoneHigh: 18750, basisDate: "2026-07-10", recommendation: "THEO DÕI / CHỜ", eligibility: "active", condition: "Vùng MOS 25–30%; phải kiểm tra core PAT, nợ vay và dòng tiền trước khi giải ngân." }
    },
    {
      ticker: "GEE", company: "GELEX Electric", sector: "Công nghiệp", exchange: "HOSE", reportId: "GEE-20260713",
      close: 71000, priceDate: "2026-07-21", changePct: -6.58, volume: 1105300, priceSource: "https://simplize.vn/co-phieu/GEE/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/GEE/HistoricalQuotes.aspx",
      action: { zoneLow: 27000, zoneHigh: 28900, basisDate: "2026-07-13", recommendation: "TRÁNH MUA MỚI", eligibility: "veto", condition: "Chỉ xem xét lại khi giá về vùng mua và CFO, nợ vay, biên EBIT cùng cấu trúc giá được xác nhận." }
    },
    {
      ticker: "DDV", company: "DAP - Vinachem", sector: "Hóa chất", exchange: "UPCoM", reportId: "DDV-20260713",
      close: 19900, priceDate: "2026-07-21", changePct: -3.40, volume: 616500, priceSource: "https://simplize.vn/co-phieu/DDV/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/DDV/HistoricalQuotes.aspx",
      action: { zoneLow: 15100, zoneHigh: 16200, basisDate: "2026-07-13", recommendation: "THEO DÕI / CHỜ", eligibility: "active", condition: "Chỉ giải ngân từng phần khi CFO/tồn kho cải thiện." }
    },
    {
      ticker: "GAS", company: "PV GAS", sector: "Năng lượng", exchange: "HOSE", reportId: "GAS-20260713",
      close: 68000, priceDate: "2026-07-21", changePct: -6.98, volume: 4293300, priceSource: "https://simplize.vn/co-phieu/GAS/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/GAS/HistoricalQuotes.aspx",
      action: { zoneLow: 58800, zoneHigh: 63000, watchLow: 67800, watchHigh: 72700, basisDate: "2026-07-13", recommendation: "CHỜ", eligibility: "active", condition: "67.800–72.700 chỉ là vùng thăm dò có điều kiện; vùng mua nền tảng vẫn là 58.800–63.000." }
    },
    {
      ticker: "PVS", company: "PTSC", sector: "Năng lượng", exchange: "HNX", reportId: "PVS-20260711",
      close: 33700, priceDate: "2026-07-21", changePct: -8.17, volume: 12009300, priceSource: "https://simplize.vn/co-phieu/PVS/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/PVS/HistoricalQuotes.aspx",
      action: { zoneLow: 26300, zoneHigh: 28100, adjustedLow: 21900, adjustedHigh: 23400, basisDate: "2026-07-11", recommendation: "THEO DÕI / CHỜ", eligibility: "active", condition: "Dùng vùng trước phát hành cổ phiếu 20%; vùng sau điều chỉnh chỉ áp dụng khi sự kiện có hiệu lực." }
    },
    {
      ticker: "BSR", company: "Lọc hóa dầu Bình Sơn", sector: "Năng lượng", exchange: "HOSE", reportId: "BSR-20260712",
      close: 23050, priceDate: "2026-07-21", changePct: -6.49, volume: 14600800, priceSource: "https://simplize.vn/co-phieu/BSR/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/BSR/HistoricalQuotes.aspx",
      action: { zoneLow: 9500, zoneHigh: 10200, basisDate: "2026-07-12", recommendation: "LOẠI – KHÔNG MUA MỚI", eligibility: "veto", condition: "Hard veto theo báo cáo; không xếp vào danh sách ưu tiên dù giá giảm." }
    },
    {
      ticker: "PNJ", company: "Vàng bạc Đá quý Phú Nhuận", sector: "Tiêu dùng", exchange: "HOSE", reportId: null,
      close: 38150, priceDate: "2026-07-21", changePct: -6.95, volume: 9655900, priceSource: "https://simplize.vn/co-phieu/PNJ/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/PNJ/HistoricalQuotes.aspx",
      action: { basisDate: "2026-07-07", recommendation: "LOẠI / TRÁNH MUA MỚI", eligibility: "veto", condition: "Không bắt đáy; thiết lập cũ đã mất hiệu lực và chưa có vùng mua mới được khóa." }
    },
    {
      ticker: "BFC", company: "Phân bón Bình Điền", sector: "Nông nghiệp", exchange: "HOSE", reportId: null,
      close: 52500, priceDate: "2026-07-21", changePct: -2.23, volume: 155200, priceSource: "https://simplize.vn/co-phieu/BFC/lich-su-gia", priceSourceSecondary: "https://web.stockbiz.vn/Stocks/BFC/HistoricalQuotes.aspx",
      action: { zoneLow: 32400, zoneHigh: 34700, basisDate: "2026-07-09", recommendation: "TRÁNH MUA MỚI THEO ĐỊNH GIÁ", eligibility: "veto", condition: "Chờ kỹ thuật; không mở mua mới theo định giá hiện tại." }
    }
  ]
};
