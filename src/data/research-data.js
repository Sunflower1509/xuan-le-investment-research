window.RESEARCH_DATA = {
  meta: {
    updated: "2026-08-13",
    release: "2026-08-13",
    owner: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    phone: "0977.811.398",
    zalo: "https://zalo.me/0977811398",
    note: "Giá đóng cửa, biến động và khối lượng khớp lệnh của 30/30 mã được khóa tại phiên 13/08/2026. Giá đóng cửa của 30/30 mã khớp giữa VNDIRECT Finfo và DNSE EnTrade. Khối lượng khớp 26/30 mã trùng tuyệt đối; SHS, BVS, DDV và PVS có sai khác nhỏ giữa hai nguồn, website dùng nmVolume từ VNDIRECT Finfo và không suy diễn nguyên nhân. Dùng giá đóng cửa giao dịch thực tế, không dùng chuỗi giá lịch sử đã điều chỉnh; phần trăm biến động lấy theo giá tham chiếu của phiên. Vùng mua, mốc giá trị tham chiếu, khuyến nghị và điều kiện hành động giữ nguyên theo hồ sơ định giá đang công bố."
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
      id: "TCX-20260813", ticker: "TCX", company: "Công ty Cổ phần Chứng khoán Kỹ Thương", sector: "Chứng khoán", exchange: "HOSE", date: "2026-08-13",
      recommendation: "LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ", status: "reject", marketPrice: 40500, marketPriceDate: "2026-08-12", baseValue: 25000, valueLabel: "Điểm giữa xấp xỉ", rangeLow: 17800, rangeHigh: 32200,
      gapLabel: "MOS -61,8% so với midpoint; MOS -25,6% so với cận trên theo công thức trong báo cáo", method: "Residual Income Model (RIM) + Justified P/B; P/E và P/B tương đối dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 17.800–32.200 đồng/cp và điểm giữa khoảng 25.000 đồng/cp, không phải giá mục tiêu. Tại giá đóng cửa 40.500 đồng/cp ngày 12/08/2026, MOS theo công thức báo cáo là -61,8% so với midpoint và -25,6% so với cận trên; báo cáo kết luận LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ. Vùng strict-MOS 25–30% là 12.500–13.400 đồng/cp, chỉ xem xét nếu thesis không xấu đi.",
      action: { zoneLow: 12500, zoneHigh: 13400, baseValue: 25000, stop: 12281, basisDate: "2026-08-13", recommendation: "LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ", eligibility: "veto", condition: "Giá trên 32.200 đồng/cp: loại/không mua. 23.000–32.200: chờ. 16.600–17.800: theo dõi sát nếu ROE, tỷ lệ an toàn tài chính và chất lượng margin không xấu đi. Chỉ xem xét mua theo kỷ luật định giá tại 12.500–13.400 đồng/cp nếu thesis không xấu đi; midpoint entry 12.927, stop 12.281. Các mức 17.830, 23.755 và 32.243 đồng/cp là mốc định giá, không phải mục tiêu kỹ thuật 1–3 tuần." },
      visual: { src: "assets/images/reports/tcx.webp?v=20260813-company1", alt: "Lãnh đạo Techcom Securities tại lễ niêm yết cổ phiếu TCX trên HOSE", caption: "Lễ niêm yết cổ phiếu TCX tại HOSE", sourceLabel: "Báo Tiền Phong", sourceUrl: "https://tienphong.vn/niem-yet-va-chinh-thuc-giao-dich-hon-231-co-phieu-chung-khoan-tcbs-tcx-ngay-2110-post1789136.tpo" },
      file: "reports/TCX_Equity_Valuation_2026-08-13.pdf", edition: "Bản định giá 13.08.2026"
    },
    {
      id: "VND-20260812", ticker: "VND", company: "Công ty Cổ phần Chứng khoán VNDIRECT", sector: "Chứng khoán", exchange: "HOSE", date: "2026-08-12",
      recommendation: "CHỜ - THEO DÕI / KHÔNG MUA Ở 16.800", status: "wait", marketPrice: 16800, marketPriceDate: "2026-08-12", baseValue: 14640, valueLabel: "Điểm giữa", rangeLow: 11100, rangeHigh: 18200,
      gapLabel: "MOS -14,76% so với midpoint; MOS +7,48% so với cận trên", method: "Residual Income + justified P/B; P/E và P/B tương đối chỉ dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 11.100–18.200 đồng/cp và điểm giữa 14.640 đồng/cp, không phải giá mục tiêu. Tại giá 16.800 đồng/cp ngày 12/08/2026, MOS so với midpoint là -14,76% và so với cận trên là +7,48%; chưa đạt ngưỡng an toàn 25–30%. Báo cáo giữ khuyến nghị CHỜ - THEO DÕI / KHÔNG MUA Ở 16.800; vùng mua định giá theo midpoint là 10.300–11.000 đồng/cp.",
      action: { zoneLow: 10300, zoneHigh: 11000, baseValue: 14640, stop: 10450, basisDate: "2026-08-12", recommendation: "CHỜ - THEO DÕI / KHÔNG MUA Ở 16.800", eligibility: "active", condition: "Chỉ xuất hiện vùng mua có MOS 25–30% khi giá về 10.300–11.000 đồng/cp, ROE TTM tối thiểu 13%, không có provision loss lớn mới và điều khoản tăng vốn không xấu hơn mô hình. Entry tham chiếu 11.000, stop 10.450; Target 1 là 14.640 và Target 2 là 18.157 đồng/cp. Trên 18.200 đồng/cp mà ROE, chất lượng lợi nhuận và pha loãng chưa được nâng tương ứng thì không mua đuổi." },
      visual: { src: "assets/images/reports/vnd.webp?v=20260813-company1", alt: "Đội ngũ VNDIRECT tại trụ sở doanh nghiệp", caption: "Đội ngũ VNDIRECT", sourceLabel: "VNDIRECT", sourceUrl: "https://www.vndirect.com.vn/tin_vndirect/vndirect-hoan-thanh-vuot-ke-hoach-2025-loi-nhuan-truoc-thue-dat-2-508-ty-dong/" },
      file: "reports/VND_Equity_Valuation_2026-08-12.pdf", edition: "Bản định giá 12.08.2026"
    },
    {
      id: "SHS-20260812", ticker: "SHS", company: "Công ty Cổ phần Chứng khoán Sài Gòn - Hà Nội", sector: "Chứng khoán", exchange: "HNX", date: "2026-08-12",
      recommendation: "CHỜ - THEO DÕI / KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 15900, marketPriceDate: "2026-08-12", baseValue: 13750, valueLabel: "Điểm giữa", rangeLow: 10500, rangeHigh: 17000,
      gapLabel: "MOS -15,64% so với điểm giữa; MOS +6,47% so với cận trên theo công thức trong báo cáo", method: "Residual Income + P/B gắn ROE; P/B và P/E tương đối chỉ dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 10.500–17.000 đồng/cp và điểm giữa cơ học 13.750 đồng/cp, không phải một mức giá mục tiêu duy nhất. Tại giá 15.900 đồng/cp lúc 13:42 ngày 12/08/2026, MOS so với điểm giữa là -15,64%; báo cáo giữ khuyến nghị CHỜ - THEO DÕI / KHÔNG MUA ĐUỔI. Vùng MOS nghiêm ngặt 25–30% là 7.350–7.875 đồng/cp và không phải dự báo giá.",
      action: { zoneLow: 7350, zoneHigh: 7875, baseValue: 13750, stop: null, basisDate: "2026-08-12", recommendation: "CHỜ - THEO DÕI / KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ khi giá không vượt 7.875 đồng/cp và ROE, chất lượng lợi nhuận, biên lợi nhuận cùng cấu trúc vốn không xấu đi mới đáp ứng chuẩn mua theo định giá. Trên 17.000 đồng/cp mà dự phóng ROE/EPS không tăng thì không mua đuổi." },
      visual: { src: "assets/images/reports/shs.webp?v=20260813-company1", alt: "Ban lãnh đạo SHS tại Đại hội đồng cổ đông thường niên 2026", caption: "Đại hội đồng cổ đông thường niên SHS 2026", sourceLabel: "SHS", sourceUrl: "https://www.shs.com.vn/tin-tuc/dhdcd-2026-shs-buoc-vao-giai-doan-tang-truong-moi-voi-chien-luoc-chuyen-doi-toan-dien" },
      file: "reports/SHS_Equity_Valuation_Report_Xuan_Le_TVS_2026-08-12.pdf", edition: "Bản định giá 12.08.2026"
    },
    {
      id: "HCM-20260812", ticker: "HCM", company: "Công ty Cổ phần Chứng khoán Thành phố Hồ Chí Minh", sector: "Chứng khoán", exchange: "HOSE", date: "2026-08-12",
      recommendation: "LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ", status: "reject", marketPrice: 26450, marketPriceDate: "2026-08-12", baseValue: 17500, valueLabel: "Điểm giữa", rangeLow: 13200, rangeHigh: 21700,
      gapLabel: "MOS -51,4% so với điểm giữa; MOS -21,8% so với cận trên theo công thức trong báo cáo", method: "Residual Income + Justified P/B; P/E và P/B tương đối chỉ dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 13.200–21.700 đồng/cp và điểm giữa khoảng 17.500 đồng/cp. Tại giá 26.450 đồng/cp lúc 11:30 ngày 12/08/2026, MOS so với điểm giữa là -51,4% và so với cận trên là -21,8%; báo cáo kết luận LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ. Vùng MOS cơ học 25–30% là 9.250–9.900 đồng/cp.",
      action: { zoneLow: 9250, zoneHigh: 9900, baseValue: 17500, stop: null, basisDate: "2026-08-12", recommendation: "LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ", eligibility: "veto", condition: "Nếu giá vẫn trên 21.700 đồng/cp mà chưa có bằng chứng ROE sau pha loãng đạt 14–15% thì không mua theo định giá. Mọi luận điểm giao dịch 1–3 tuần phải được tách riêng và không thay thế kết luận định giá." },
      visual: { src: "assets/images/reports/hcm.webp?v=20260813-company1", alt: "Đội ngũ HSC tại văn phòng doanh nghiệp", caption: "Đội ngũ HSC", sourceLabel: "Tin Nhanh Chứng Khoán", sourceUrl: "https://www.tinnhanhchungkhoan.vn/hsc-hcm-phat-hanh-them-gan-360-trieu-co-phieu-cho-co-dong-hien-huu-gia-10000-dongcp-post371021.html" },
      file: "reports/HCM_Equity_Valuation_Research_Xuan_Le_TVS_2026-08-12.pdf", edition: "Bản định giá 12.08.2026"
    },
    {
      id: "REE-20260812", ticker: "REE", company: "Công ty Cổ phần Cơ Điện Lạnh", sector: "Đa ngành", exchange: "HOSE", date: "2026-08-12",
      recommendation: "CHỜ - THEO DÕI", status: "wait", marketPrice: 47250, marketPriceDate: "2026-08-11", baseValue: 54250, valueLabel: "Điểm giữa", rangeLow: 47000, rangeHigh: 61500,
      gapLabel: "MOS 12,90% so với điểm giữa 54.250 đồng/cp; chưa đạt chuẩn 25–30% tại giá đóng cửa 11/08/2026", method: "SOTP là mô hình chính; DCF/FCFF và định giá tương đối dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 47.000–61.500 đồng/cp, điểm giữa 54.250 đồng/cp. Giá đóng cửa 47.250 đồng/cp tạo MOS 12,90% so với điểm giữa, chưa đạt chuẩn 25–30%; trạng thái CHỜ - THEO DÕI. Vùng mua định giá là 38.000–40.700 đồng/cp. Kịch bản breakout tách biệt chỉ xem xét khi đóng cửa trên 48.500 đồng/cp với thanh khoản tối thiểu TB20.",
      action: { zoneLow: 38000, zoneHigh: 40700, baseValue: 54250, stop: null, basisDate: "2026-08-12", recommendation: "CHỜ - THEO DÕI", eligibility: "active", condition: "Vùng đầu tư theo MOS là 38.000–40.700 đồng/cp. Kịch bản breakout tách biệt: chỉ xem xét 48.600–49.000 khi đóng cửa trên 48.500 và thanh khoản tối thiểu TB20; stop 45.400, target 53.000 và 56.000 đồng/cp." },
      visual: { src: "assets/images/reports/ree.webp?v=20260813-company1", alt: "Trụ sở REE Corporation tại Thành phố Hồ Chí Minh", caption: "Trụ sở REE Corporation", sourceLabel: "Znews", sourceUrl: "https://znews.vn/ree-tinh-nhay-vao-cac-du-an-bat-dong-san-gan-metro-vanh-dai-tphcm-post1542400.html" },
      file: "reports/REE_Equity_Valuation_Report_2026-08-12.pdf", edition: "Bản định giá 12.08.2026"
    },
    {
      id: "VHM-20260812", ticker: "VHM", company: "Công ty Cổ phần Vinhomes", sector: "Bất động sản", exchange: "HOSE", date: "2026-08-12",
      recommendation: "CHỜ - KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 73900, marketPriceDate: "2026-08-12", baseValue: 68950, valueLabel: "Điểm giữa", rangeLow: 62900, rangeHigh: 75000,
      gapLabel: "Giá 73.900 đồng/cp cao hơn midpoint 7,18%; upside tới cận trên chỉ 1,47% tại thời điểm định giá", method: "RNAV/SOTP + P/NAV; P/B và P/E chỉ dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 62.900–75.000 đồng/cp, midpoint 68.950 đồng/cp. Giá tham chiếu 73.900 đồng/cp cao hơn midpoint 7,18% và chỉ còn khoảng 1,47% tới cận trên; trạng thái CHỜ - KHÔNG MUA ĐUỔI. Vùng mua đáp ứng MOS 25–30% là 44.000–47.200 đồng/cp nếu thesis tài sản và nợ không xấu đi.",
      action: { zoneLow: 44000, zoneHigh: 47200, baseValue: 68950, stop: 43322, basisDate: "2026-08-12", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét 44.000–47.200 đồng/cp nếu thesis tài sản và nợ không xấu đi. Overlay trong báo cáo dùng entry midpoint 45.603, stop 43.322; target định giá 62.900, 68.950 và 75.000 đồng/cp." },
      visual: { src: "assets/images/reports/vhm.webp?v=20260813-company1", alt: "Lễ khởi công Khu đô thị Đại học Quốc tế do Vinhomes phát triển", caption: "Lễ khởi công dự án của Vinhomes tại TP.HCM", sourceLabel: "Vinhomes", sourceUrl: "https://market.vinhomes.vn/blog/vingroup-chinh-thuc-khoi-cong-khu-do-thi-dai-hoc-quoc-te-tai-tp-hcm" },
      file: "reports/VHM_Equity_Valuation_Research_Xuan_Le_TVS_2026-08-12.pdf", edition: "Bản định giá 12.08.2026"
    },
    {
      id: "BID-20260812", ticker: "BID", company: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", sector: "Ngân hàng", exchange: "HOSE", date: "2026-08-12",
      recommendation: "CHỜ - KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 39100, marketPriceDate: "2026-08-11", baseValue: 46300, rangeLow: 34900, rangeHigh: 57400,
      gapLabel: "MOS +15,5% so với giá trị cơ sở nhưng -12,1% so với cận dưới tại giá đóng cửa 11/08/2026", method: "P/B gắn ROE + Residual Income; relative P/B dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý trước bonus 34.900–57.400 đồng/cp, giá trị cơ sở 46.300 đồng/cp. Tại 39.100 đồng/cp, MOS so với cơ sở là 15,5% nhưng âm 12,1% so với cận dưới; trạng thái CHỜ - KHÔNG MUA ĐUỔI. Vùng valuation hấp dẫn theo base là 32.400–34.700 đồng/cp; green-zone MOS nghiêm ngặt trước bonus là 24.400–26.200 đồng/cp.",
      action: { zoneLow: 24400, zoneHigh: 26200, baseValue: 46300, stop: null, basisDate: "2026-08-12", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét green-zone trước bonus 24.400–26.200 đồng/cp khi fundamentals không xấu thêm; vùng strict sau bonus là 22.800–24.500. Ví dụ tại entry 26.200: stop 24.890, target cận dưới 34.900, R/R khoảng 6,6x." },
      visual: { src: "assets/images/reports/bid.webp?v=20260813-company1", alt: "Đội ngũ BIDV tại sự kiện Hybrid Summer 2026", caption: "Hoạt động đội ngũ BIDV năm 2026", sourceLabel: "BIDV News", sourceUrl: "https://bidvinfo.com.vn/en/bidv-launches-the-hybrid-summer-2026-campaign-bridging-sustainable-living-and-smart-finance-10015376.html" },
      file: "reports/BID_Equity_Valuation_Research_2026-08-12.pdf", edition: "Bản định giá 12.08.2026"
    },
    {
      id: "CTG-20260811", ticker: "CTG", company: "Ngân hàng TMCP Công Thương Việt Nam", sector: "Ngân hàng", exchange: "HOSE", date: "2026-08-11",
      recommendation: "CHỜ - KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 32300, marketPriceDate: "2026-08-11", baseValue: 44100, rangeLow: 33700, rangeHigh: 61200,
      gapLabel: "MOS theo giá trị cơ sở là 26,76%, nhưng chỉ 4,21% so với cận dưới tại ngày định giá", method: "P/B gắn ROE + Residual Income; P/B và P/E dùng kiểm chứng",
      summary: "Giá trị hợp lý cơ sở 44.100 đồng/cp và vùng giá trị 33.700–61.200 đồng/cp. Tại thị giá 32.300 đồng/cp, MOS so với cận dưới chỉ 4,21%, chưa đạt chuẩn 25–30%; báo cáo giữ trạng thái CHỜ - KHÔNG MUA ĐUỔI. Vùng mua valuation là 23.600–25.300 đồng/cp nếu ROE, NPL và CAR không xấu đi.",
      action: { zoneLow: 23600, zoneHigh: 25300, baseValue: 44100, stop: null, basisDate: "2026-08-11", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét khi giá về 23.600–25.300 đồng/cp và ROE, NPL, CAR không xấu đi. Ví dụ trong báo cáo tại giá mua 25.000 đồng/cp: stop 23.750, target định giá thấp 33.700 và giá trị cơ sở 44.100 đồng/cp." },
      visual: { src: "assets/images/reports/ctg.webp?v=20260813-company1", alt: "Đại diện VietinBank tại sự kiện Chuyển đổi số ngành Ngân hàng năm 2025", caption: "VietinBank tại sự kiện Chuyển đổi số ngành Ngân hàng", sourceLabel: "VietinBank", sourceUrl: "https://www.vietinbank.vn/vi/doanh-nghiep/tin-tuc-and-su-kien-khdn/tin-tuc-va-su-kien/vietinbank-toa-sang-tai-su-kien-chuyen-doi-so-nganh-ngan-hang-nam-2025-20250530023016-00-html" },
      file: "reports/CTG_Equity_Valuation_Report_Xuan_Le_TVS.pdf", edition: "Bản định giá 11.08.2026"
    },
    {
      id: "GMD-20260810", ticker: "GMD", company: "Gemadept Corporation", sector: "Cảng biển & logistics", exchange: "HOSE", date: "2026-08-10",
      recommendation: "CHỜ - KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 80600, marketPriceDate: "2026-08-10", baseValue: 70600, valueLabel: "Điểm giữa", rangeLow: 51800, rangeHigh: 89400,
      gapLabel: "Giá thị trường cao hơn midpoint khoảng 14,2%; upside tới cận trên khoảng 9,8% tại ngày định giá", method: "DCF/FCFF; P/E, P/B và EV/EBITDA dùng kiểm chứng",
      summary: "Vùng giá trị hợp lý 51.800–89.400 đồng/cp và midpoint khoảng 70.600 đồng/cp. P0 intraday 80.600 đồng/cp cao hơn midpoint khoảng 14,2%, chưa đạt biên an toàn 25–30%; báo cáo giữ trạng thái CHỜ - KHÔNG MUA ĐUỔI. Vùng ưu tiên theo MOS là 36.200–38.800 đồng/cp nếu thesis và nền tảng cơ bản không suy yếu.",
      action: { zoneLow: 36200, zoneHigh: 38800, baseValue: 70600, stop: null, basisDate: "2026-08-10", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét khi giá không vượt 38.800 đồng/cp và thesis không suy yếu; vùng ưu tiên 36.200–38.800 đồng/cp khi nền tảng cơ bản giữ nguyên." },
      visual: { src: "assets/images/reports/gmd.webp?v=20260813-company1", alt: "Đội ngũ Gemadept tại lễ động thổ Cảng Gemalink giai đoạn 2", caption: "Lễ động thổ Cảng Gemalink giai đoạn 2", sourceLabel: "Diễn đàn Doanh nghiệp", sourceUrl: "https://diendandoanhnghiep.vn/cang-gemalink-tang-toc-giai-doan-2-nang-tam-vi-the-cua-ngo-giao-thuong-quoc-te-10177365.html" },
      file: "reports/GMD_Equity_Valuation_Research_2026-08-10.pdf", edition: "Bản định giá 10.08.2026"
    },
    {
      id: "VSC-20260807", ticker: "VSC", company: "Công ty Cổ phần Container Việt Nam", sector: "Cảng biển & logistics", exchange: "HOSE", date: "2026-08-07",
      recommendation: "CHỜ / THEO DÕI", status: "wait", marketPrice: 14650, marketPriceDate: "2026-08-07", baseValue: 19251, rangeLow: 14400, rangeHigh: 24200,
      gapLabel: "Weighted fair value cao hơn giá thị trường khoảng 31,4%; MOS theo giá trị trọng số là 23,9% tại ngày định giá", method: "DCF theo FCFF có điều chỉnh tài sản đầu tư ngoài hoạt động; kiểm chứng bằng P/E, P/B và EV/EBITDA",
      summary: "Weighted fair value đạt 19.251 đồng/cp trong vùng giá trị 14.400–24.200 đồng/cp. Tại giá 14.650 đồng/cp, MOS theo giá trị trọng số là 23,9%, vẫn thấp hơn chuẩn 25–30%; vì vậy báo cáo giữ trạng thái CHỜ / THEO DÕI và vùng mua định giá 10.100–10.800 đồng/cp. Trading overlay 1–3 tuần chỉ được kích hoạt khi giá đóng cửa vượt 15.050–15.100 đồng/cp với khối lượng tối thiểu khoảng 11,4 triệu cổ phiếu.",
      action: { zoneLow: 10100, zoneHigh: 10800, stop: null, basisDate: "2026-08-07", condition: "Vùng 10.100–10.800 đồng/cp mới đáp ứng MOS 25–30% theo conservative floor. Thiết lập trading tách biệt: chỉ kích hoạt khi đóng cửa vượt 15.050–15.100 với khối lượng tối thiểu khoảng 11,4 triệu cp; entry 15.100–15.300, stop 14.300, target 18.500–19.250 đồng/cp." },
      visual: { src: "assets/images/reports/vsc.webp?v=20260813-company1", alt: "Toàn cảnh hoạt động cảng container của Viconship", caption: "Hoạt động cảng container Viconship", sourceLabel: "Viconship", sourceUrl: "https://viconship.com/en/" },
      file: "reports/VSC_Equity_Research_2026-08-07.pdf", edition: "Bản định giá 07.08.2026"
    },
    {
      id: "SSI-20260805", ticker: "SSI", company: "Công ty Cổ phần Chứng khoán SSI", sector: "Chứng khoán", exchange: "HOSE", date: "2026-08-05",
      recommendation: "CHỜ - KHÔNG MUA MỚI", status: "wait", marketPrice: 24400, marketPriceDate: "2026-08-05", baseValue: 20600, rangeLow: 15200, rangeHigh: 25700,
      gapLabel: "Giá thị trường cao hơn giá trị cơ sở khoảng 18,7% tại ngày định giá", method: "Residual Income 50% + P/B gắn ROE 35% + P/E chuẩn hóa 15%",
      summary: "Giá trị cơ sở trước quyền là 20.600 đồng/cp và khoảng giá trị hợp lý trước quyền là 15.200–25.700 đồng/cp. Giá 24.400 đồng/cp cao hơn giá trị cơ sở khoảng 18,7%, nên báo cáo giữ khuyến nghị CHỜ - KHÔNG MUA MỚI. Vùng mua định giá 25–30% MOS là 14.400–15.400 đồng/cp trước quyền; mọi vùng kỹ thuật sau ngày GDKHQ 17/08/2026 phải dùng dữ liệu đã điều chỉnh quyền.",
      action: { zoneLow: 14400, zoneHigh: 15400, stop: null, basisDate: "2026-08-05", condition: "Trước ngày GDKHQ 17/08/2026 không mở vị thế mới. Vùng mua định giá là 14.400–15.400 đồng/cp trước quyền; sau quyền chỉ mua thăm dò 17.800–18.200 khi giá giữ nền và khối lượng co lại, stop 17.000, target 20.000–20.700 và 21.800–22.300 đồng/cp." },
      visual: { src: "assets/images/reports/ssi.webp?v=20260813-company1", alt: "Đội ngũ Chứng khoán SSI tại lễ khai trương Phòng giao dịch Nguyễn Hữu Cảnh", caption: "Đội ngũ SSI tại Phòng giao dịch Nguyễn Hữu Cảnh", sourceLabel: "Tin Nhanh Chứng Khoán", sourceUrl: "https://m.tinnhanhchungkhoan.vn/chung-khoan-ssi-khai-truong-phong-giao-dich-nguyen-huu-canh-post306133.amp" },
      file: "reports/SSI_Equity_Research_2026-08-05.pdf", edition: "Bản định giá 05.08.2026"
    },
    {
      id: "VPX-20260804", ticker: "VPX", company: "Công ty Cổ phần Chứng khoán VPBank", sector: "Chứng khoán", exchange: "HOSE", date: "2026-08-04",
      recommendation: "CHỜ - KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 25800, marketPriceDate: "2026-08-04", baseValue: 25600, rangeLow: 21700, rangeHigh: 29500,
      gapLabel: "Giá thị trường cao hơn giá trị cơ sở khoảng 0,8% tại ngày định giá", method: "Residual Income + P/B gắn ROE; P/E và P/B ngành dùng để kiểm chứng",
      summary: "Giá 25.800 đồng/cp cao hơn nhẹ giá trị cơ sở 25.600 đồng/cp và chưa tạo biên an toàn. Báo cáo giữ khuyến nghị CHỜ - KHÔNG MUA ĐUỔI; vùng mua định giá 17.900–19.200 đồng/cp. Vùng kỹ thuật 24.000–24.500 đồng/cp chỉ được xem xét khi dòng tiền xác nhận; mục tiêu kỹ thuật 27.800 và 29.500 đồng/cp không thay thế giá trị cơ sở.",
      action: { zoneLow: 17900, zoneHigh: 19200, stop: null, basisDate: "2026-08-04", condition: "Không mua đuổi tại 25.800 đồng/cp. Chỉ xem xét vùng định giá 17.900–19.200; vùng kỹ thuật 24.000–24.500 phải có xác nhận dòng tiền. Ví dụ giao dịch kỹ thuật trong báo cáo dùng stop 22.900 và mục tiêu 27.800–29.500 đồng/cp." },
      visual: { src: "assets/images/reports/vpx.webp", alt: "Lễ niêm yết cổ phiếu VPX của Chứng khoán VPBank tại HOSE", caption: "Lễ niêm yết và phiên giao dịch đầu tiên của VPX", sourceLabel: "Tuổi Trẻ Online", sourceUrl: "https://tuoitre.vn/co-phieu-vpx-cua-vpbanks-chinh-thuc-giao-dich-tren-hose-20251211113632063.htm" },
      file: "reports/VPX_Equity_Research_04-08-2026.pdf", edition: "Bản cập nhật 04.08.2026"
    },
    {
      id: "HII-20260803", ticker: "HII", company: "Công ty Cổ phần An Tiến Industries", sector: "Hóa chất", exchange: "HOSE", date: "2026-08-03",
      recommendation: "CHỜ - THEO DÕI", status: "wait", marketPrice: 7090, marketPriceDate: "2026-07-31", baseValue: 10550, rangeLow: 8300, rangeHigh: 12800,
      gapLabel: "Giá trị cơ sở cao hơn giá thị trường khoảng 48,8% tại ngày định giá", method: "EV/EBITDA chuẩn hóa + P/E + P/B; DCF chỉ dùng kiểm tra chéo",
      summary: "Giá 7.090 đồng/cp thấp hơn giá trị cơ sở 10.550 đồng/cp nhưng vẫn cao hơn vùng mua định giá 5.800–6.200 đồng/cp. Báo cáo giữ khuyến nghị CHỜ - THEO DÕI, không mua đuổi; chỉ xem xét khi dòng tiền kinh doanh, phải thu và nợ vay cải thiện.",
      action: { zoneLow: 5800, zoneHigh: 6200, stop: 5650, basisDate: "2026-08-03", condition: "Không mua đuổi tại 7.090 đồng/cp. Chỉ giải ngân từng phần trong vùng 5.800–6.200 khi CFO, phải thu và nợ vay cùng cải thiện; stop tham khảo 5.650 đồng/cp." },
      visual: { src: "assets/images/reports/hii.webp?v=20260813-company1", alt: "Nhà máy An Tiến Industries tại Yên Bái", caption: "Nhà máy An Tiến Industries", sourceLabel: "Người Đưa Tin", sourceUrl: "https://m.nguoiduatin.vn/an-tien-industries-giai-trinh-viec-co-phieu-tang-tran-5-phien-lien-tiep-204251123130611065.htm" },
      file: "reports/HII_Equity_Valuation_2026.pdf", edition: "Bản chính"
    },
    {
      id: "MSN-VALUATION-20260803", ticker: "MSN", company: "Công ty Cổ phần Tập đoàn Masan", sector: "Tiêu dùng", exchange: "HOSE", date: "2026-08-03",
      recommendation: "CHỜ - CHƯA MUA MỚI", status: "wait", marketPrice: 68200, marketPriceDate: "2026-08-03", baseValue: 95000, rangeLow: 82000, rangeHigh: 119000,
      gapLabel: "Giá trị điểm giữa cao hơn giá thị trường khoảng 39,3% tại ngày định giá", method: "SOTP là phương pháp chính; định giá tương đối và trung vị báo cáo độc lập dùng kiểm tra chéo",
      summary: "Giá trị điểm giữa trọng số 95.000 đồng/cp và SOTP cơ sở 99.500 đồng/cp cho thấy dư địa so với giá 68.200 đồng/cp. Tuy nhiên, biên an toàn tới cận dưới 82.000 đồng/cp chỉ khoảng 16,8%, thấp hơn ngưỡng 25–30%; do đó báo cáo giữ khuyến nghị CHỜ - CHƯA MUA MỚI.",
      action: { zoneLow: 57500, zoneHigh: 61500, stop: 56500, basisDate: "2026-08-03", condition: "Ưu tiên giá vốn không quá 60.000 đồng/cp trong vùng 57.500–61.500; stop tham khảo 56.500. Mục tiêu 82.000–95.000 đồng/cp chỉ áp dụng khi điều kiện trong báo cáo được duy trì." },
      visual: { src: "assets/images/reports/msn.webp?v=20260813-company1", alt: "Sân khấu Đại hội đồng cổ đông thường niên Masan 2026", caption: "Đại hội đồng cổ đông thường niên Masan 2026", sourceLabel: "Masan Group", sourceUrl: "https://www.masangroup.com/news/press-releases/masan-agm-2026-the-great-connectivity-unlocking-a-new-growth-cycle/" },
      file: "reports/MSN_Equity_Valuation_Report_03-08-2026.pdf", edition: "Báo cáo định giá"
    },
    {
      id: "BCM-20260803", ticker: "BCM", company: "Tập đoàn Đầu tư và Phát triển Công nghiệp Becamex - CTCP", sector: "Bất động sản", exchange: "HOSE", date: "2026-08-03",
      recommendation: "CHỜ - KHÔNG MUA ĐUỔI", status: "wait", marketPrice: 36600, marketPriceDate: "2026-08-03", baseValue: 57600, rangeLow: 44800, rangeHigh: 73600,
      gapLabel: "Giá trị cơ sở cao hơn giá thị trường khoảng 57,4% tại ngày định giá", method: "SOTP + RNAV/NAV",
      summary: "Giá trị cơ sở 57.600 đồng/cp cao hơn giá 36.600 đồng/cp khoảng 57,4%, nhưng biên an toàn tới cận dưới 44.800 đồng/cp chỉ khoảng 18,2%, thấp hơn ngưỡng 25–30%. Báo cáo giữ khuyến nghị CHỜ - KHÔNG MUA ĐUỔI; vùng mua định giá 31.300–33.600 đồng/cp.",
      action: { zoneLow: 31300, zoneHigh: 33600, stop: null, basisDate: "2026-08-03", condition: "Không mua đuổi tại 36.600 đồng/cp. Chỉ xem xét vùng 31.300–33.600; kịch bản breakout trên 39.700 đồng/cp phải có xác nhận theo điều kiện trong báo cáo." },
      visual: { src: "assets/images/reports/bcm.webp?v=20260813-company1", alt: "Tổng Giám đốc Becamex IDC phát biểu tại lễ khởi động các khu công nghiệp năm 2025", caption: "Becamex IDC khởi động các dự án khu công nghiệp sinh thái", sourceLabel: "Kiểm Sát Online", sourceUrl: "https://kiemsat.vn/becamex-idc-khoi-dong-cac-du-an-chien-luoc-kien-tao-khu-cong-nghiep-sinh-thai-thong-minh-the-he-moi-70433.html" },
      file: "reports/BCM_Bao_cao_dinh_gia_20260803.pdf", edition: "Bản chính"
    },
    {
      id: "VCI-20260730", ticker: "VCI", company: "Công ty Cổ phần Chứng khoán Vietcap", sector: "Chứng khoán", exchange: "HOSE", date: "2026-07-30",
      recommendation: "CHỜ - KHÔNG MUA MỚI", status: "wait", marketPrice: 20800, marketPriceDate: "2026-07-29", baseValue: 19500, calculationBase: 19478, rangeLow: 13100, rangeHigh: 26000,
      gapLabel: "Giá thị trường cao hơn giá trị cơ sở khoảng 6,8% tại ngày định giá", method: "Residual Income (50%) + P/B gắn ROE (35%) + P/E kiểm chứng (15%)",
      summary: "Giá đóng cửa 20.800 đồng/cp cao hơn giá trị cơ sở 19.500 đồng/cp khoảng 6,8% và đang phản ánh ROE dài hạn khoảng 13,27%, trong khi ROE 2025 và ROE TTM proxy mới ở 8,7% và 8,28%. Báo cáo giữ khuyến nghị CHỜ - không mua mới; vùng 13.600–14.600 đồng/cp chỉ được kích hoạt khi các điều kiện CAR, đòn bẩy, OCI, vốn chủ sở hữu, LNST và pha loãng không xấu đi.",
      action: { zoneLow: 13600, zoneHigh: 14600, stop: 13203, basisDate: "2026-07-30", condition: "Không mua mới tại 20.800 đồng/cp. Chỉ giải ngân từng phần trong vùng 13.600–14.600 khi CAR, đòn bẩy, OCI, vốn chủ sở hữu, LNST và rủi ro pha loãng cùng đáp ứng điều kiện trong báo cáo." },
      visual: { src: "assets/images/reports/vci.webp", alt: "Đại diện khách mời và lãnh đạo Vietcap tại Vietcap Investment Day 2026", caption: "Vietcap Investment Day 2026", sourceLabel: "DNSE / CafeF", sourceUrl: "https://www.dnse.com.vn/senses/tin-tuc/vietcap-investment-day-2026-don-dau-cac-lan-song-dau-tu-trong-chu-ky-tang-truong-moi-35204836" },
      file: "reports/VCI_Equity_Research_Valuation_Rebuilt_30-07-2026.pdf", edition: "Bản tái dựng 24 trang"
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
      visual: { src: "assets/images/reports/bsr.webp?v=20260813-company1", alt: "Kỹ sư BSR trao đổi phương án vận hành tại Nhà máy lọc dầu Dung Quất", caption: "Kỹ sư BSR tại Nhà máy lọc dầu Dung Quất", sourceLabel: "Đại Đoàn Kết", sourceUrl: "https://daidoanket.vn/nghien-cuu-khoa-hoc-kim-chi-nam-phat-trien-cua-bsr-10250988.html" },
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
      ticker: "TCX", company: "Công ty Cổ phần Chứng khoán Kỹ Thương", sector: "Chứng khoán", exchange: "HOSE", reportId: "TCX-20260813",
      close: 40000, priceDate: "2026-08-13", changePct: -1.2346, volume: 1888200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:TCX~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=TCX&resolution=1D",
      action: { zoneLow: 12500, zoneHigh: 13400, baseValue: 25000, stop: 12281, basisDate: "2026-08-13", recommendation: "LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ", eligibility: "veto", condition: "Giá trên 32.200 đồng/cp: loại/không mua. 23.000–32.200: chờ. 16.600–17.800: theo dõi sát nếu ROE, tỷ lệ an toàn tài chính và chất lượng margin không xấu đi. Chỉ xem xét mua theo kỷ luật định giá tại 12.500–13.400 đồng/cp nếu thesis không xấu đi; midpoint entry 12.927, stop 12.281. Các mức 17.830, 23.755 và 32.243 đồng/cp là mốc định giá, không phải mục tiêu kỹ thuật 1–3 tuần." }
    },
    {
      ticker: "SHS", company: "Chứng khoán Sài Gòn - Hà Nội", sector: "Chứng khoán", exchange: "HNX", reportId: "SHS-20260812",
      close: 15800, priceDate: "2026-08-13", changePct: -0.6289, volume: 15958103, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:SHS~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=SHS&resolution=1D",
      action: { zoneLow: 7350, zoneHigh: 7875, baseValue: 13750, stop: null, basisDate: "2026-08-12", recommendation: "CHỜ - THEO DÕI / KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ khi giá không vượt 7.875 đồng/cp và ROE, chất lượng lợi nhuận, biên lợi nhuận cùng cấu trúc vốn không xấu đi mới đáp ứng chuẩn mua theo định giá. Trên 17.000 đồng/cp mà dự phóng ROE/EPS không tăng thì không mua đuổi." }
    },
    {
      ticker: "HCM", company: "Chứng khoán TP.HCM", sector: "Chứng khoán", exchange: "HOSE", reportId: "HCM-20260812",
      close: 25700, priceDate: "2026-08-13", changePct: -1.7208, volume: 6148600, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:HCM~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=HCM&resolution=1D",
      action: { zoneLow: 9250, zoneHigh: 9900, baseValue: 17500, stop: null, basisDate: "2026-08-12", recommendation: "LOẠI - KHÔNG MUA THEO ĐỊNH GIÁ", eligibility: "veto", condition: "Nếu giá vẫn trên 21.700 đồng/cp mà chưa có bằng chứng ROE sau pha loãng đạt 14–15% thì không mua theo định giá. Mọi luận điểm giao dịch 1–3 tuần phải được tách riêng và không thay thế kết luận định giá." }
    },
    {
      ticker: "REE", company: "Cơ Điện Lạnh", sector: "Đa ngành", exchange: "HOSE", reportId: "REE-20260812",
      close: 46600, priceDate: "2026-08-13", changePct: -1.1665, volume: 352900, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:REE~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=REE&resolution=1D",
      action: { zoneLow: 38000, zoneHigh: 40700, baseValue: 54250, stop: null, basisDate: "2026-08-12", recommendation: "CHỜ - THEO DÕI", eligibility: "active", condition: "Vùng đầu tư theo MOS là 38.000–40.700 đồng/cp. Kịch bản breakout tách biệt: chỉ xem xét 48.600–49.000 khi đóng cửa trên 48.500 và thanh khoản tối thiểu TB20; stop 45.400, target 53.000 và 56.000 đồng/cp." }
    },
    {
      ticker: "BID", company: "BIDV", sector: "Ngân hàng", exchange: "HOSE", reportId: "BID-20260812",
      close: 38850, priceDate: "2026-08-13", changePct: -1.0191, volume: 5660200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:BID~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=BID&resolution=1D",
      action: { zoneLow: 24400, zoneHigh: 26200, baseValue: 46300, stop: null, basisDate: "2026-08-12", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét green-zone trước bonus 24.400–26.200 đồng/cp khi fundamentals không xấu thêm; vùng strict sau bonus là 22.800–24.500. Ví dụ tại entry 26.200: stop 24.890, target cận dưới 34.900, R/R khoảng 6,6x." }
    },
    {
      ticker: "GMD", company: "Gemadept Corporation", sector: "Cảng biển & logistics", exchange: "HOSE", reportId: "GMD-20260810",
      close: 78500, priceDate: "2026-08-13", changePct: 1.6839, volume: 2129900, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:GMD~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=GMD&resolution=1D",
      action: { zoneLow: 36200, zoneHigh: 38800, baseValue: 70600, stop: null, basisDate: "2026-08-10", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét khi giá không vượt 38.800 đồng/cp và thesis không suy yếu; vùng ưu tiên 36.200–38.800 đồng/cp khi nền tảng cơ bản giữ nguyên." }
    },
    {
      ticker: "VSC", company: "Viconship", sector: "Cảng biển & logistics", exchange: "HOSE", reportId: "VSC-20260807",
      close: 14350, priceDate: "2026-08-13", changePct: -3.367, volume: 11659700, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VSC~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VSC&resolution=1D",
      action: { zoneLow: 10100, zoneHigh: 10800, baseValue: 19251, stop: null, basisDate: "2026-08-07", recommendation: "CHỜ / THEO DÕI", eligibility: "active", condition: "Vùng 10.100–10.800 đồng/cp mới đáp ứng MOS 25–30%. Trading 1–3 tuần chỉ kích hoạt khi đóng cửa vượt 15.050–15.100 với khối lượng tối thiểu khoảng 11,4 triệu cp; entry 15.100–15.300, stop 14.300, target 18.500–19.250 đồng/cp." }
    },
    {
      ticker: "VHM", company: "Vinhomes", sector: "Bất động sản", exchange: "HOSE", reportId: "VHM-20260812",
      close: 71800, priceDate: "2026-08-13", changePct: -2.71, volume: 7785200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VHM~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VHM&resolution=1D",
      action: { zoneLow: 44000, zoneHigh: 47200, baseValue: 68950, stop: 43322, basisDate: "2026-08-12", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét 44.000–47.200 đồng/cp nếu thesis tài sản và nợ không xấu đi. Overlay trong báo cáo dùng entry midpoint 45.603, stop 43.322; target định giá 62.900, 68.950 và 75.000 đồng/cp." }
    },
    {
      ticker: "SSI", company: "Chứng khoán SSI", sector: "Chứng khoán", exchange: "HOSE", reportId: "SSI-20260805",
      close: 25000, priceDate: "2026-08-13", changePct: -1.1858, volume: 28037400, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:SSI~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=SSI&resolution=1D",
      action: { zoneLow: 14400, zoneHigh: 15400, baseValue: 20600, stop: null, basisDate: "2026-08-05", recommendation: "CHỜ - KHÔNG MUA MỚI", eligibility: "active", condition: "Trước ngày GDKHQ 17/08/2026 không mở vị thế mới. Vùng mua định giá là 14.400–15.400 đồng/cp trước quyền; sau quyền chỉ xem xét 17.800–18.200 khi giá giữ nền và khối lượng co lại, stop 17.000, target 20.000–20.700 và 21.800–22.300 đồng/cp." }
    },
    {
      ticker: "VCI", company: "Chứng khoán Vietcap", sector: "Chứng khoán", exchange: "HOSE", reportId: "VCI-20260730",
      close: 21600, priceDate: "2026-08-13", changePct: -2.0408, volume: 10351300, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VCI~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VCI&resolution=1D",
      action: { zoneLow: 13600, zoneHigh: 14600, baseValue: 19500, stop: 13203, basisDate: "2026-07-30", recommendation: "CHỜ - MUA CÓ ĐIỀU KIỆN", eligibility: "active", condition: "Không mua mới tại 20.800 đồng. Chỉ giải ngân từng phần trong vùng 13.600-14.600 khi CAR duy trì trên 250%, Margin/VCSH không vượt 1,2 lần, vốn chủ sở hữu và OCI không tiếp tục suy giảm mạnh, LNST 2026 có khả năng đạt tối thiểu khoảng 1.350 tỷ đồng và không phát hành quy mô lớn dưới BVPS; nếu các biến này xấu đi, phải cập nhật mô hình trước khi giải ngân." }
    },
    {
      ticker: "VPX", company: "Chứng khoán VPBank", sector: "Chứng khoán", exchange: "HOSE", reportId: "VPX-20260804",
      close: 25300, priceDate: "2026-08-13", changePct: -1.7476, volume: 927200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VPX~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VPX&resolution=1D",
      action: { zoneLow: 17900, zoneHigh: 19200, baseValue: 25600, stop: null, basisDate: "2026-08-04", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Không mua đuổi tại 25.800 đồng/cp. Chỉ xem xét vùng định giá 17.900–19.200; vùng kỹ thuật 24.000–24.500 phải có xác nhận dòng tiền. Mục tiêu kỹ thuật 27.800–29.500 không thay thế giá trị cơ sở." }
    },
    {
      ticker: "HII", company: "An Tiến Industries", sector: "Hóa chất", exchange: "HOSE", reportId: "HII-20260803",
      close: 8870, priceDate: "2026-08-13", changePct: 0.7955, volume: 499200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:HII~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=HII&resolution=1D",
      action: { zoneLow: 5800, zoneHigh: 6200, baseValue: 10550, stop: 5650, basisDate: "2026-08-03", recommendation: "CHỜ - THEO DÕI", eligibility: "active", condition: "Không mua đuổi tại 7.090 đồng/cp. Chỉ giải ngân từng phần trong vùng 5.800–6.200 khi CFO, phải thu và nợ vay cùng cải thiện; stop tham khảo 5.650 đồng/cp." }
    },
    {
      ticker: "MSN", company: "Tập đoàn Masan", sector: "Tiêu dùng", exchange: "HOSE", reportId: "MSN-VALUATION-20260803",
      close: 67600, priceDate: "2026-08-13", changePct: 0.5952, volume: 5681100, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:MSN~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=MSN&resolution=1D",
      action: { zoneLow: 57500, zoneHigh: 61500, baseValue: 95000, stop: 56500, basisDate: "2026-08-03", recommendation: "CHỜ - CHƯA MUA MỚI", eligibility: "active", condition: "Ưu tiên giá vốn không quá 60.000 đồng/cp trong vùng 57.500–61.500; stop tham khảo 56.500. Mục tiêu 82.000–95.000 chỉ áp dụng khi điều kiện trong báo cáo được duy trì." }
    },
    {
      ticker: "BCM", company: "Becamex", sector: "Bất động sản", exchange: "HOSE", reportId: "BCM-20260803",
      close: 45500, priceDate: "2026-08-13", changePct: 3.4091, volume: 1809000, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:BCM~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=BCM&resolution=1D",
      action: { zoneLow: 31300, zoneHigh: 33600, baseValue: 57600, stop: null, basisDate: "2026-08-03", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Không mua đuổi tại 36.600 đồng/cp. Chỉ xem xét vùng 31.300–33.600; kịch bản breakout trên 39.700 phải có xác nhận theo điều kiện trong báo cáo." }
    },
    {
      ticker: "VIX", company: "Chứng khoán VIX", sector: "Chứng khoán", exchange: "HOSE", reportId: "VIX-20260721",
      close: 13900, priceDate: "2026-08-13", changePct: -2.7972, volume: 55277700, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VIX~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VIX&resolution=1D",
      action: { zoneLow: 7500, zoneHigh: 8000, basisDate: "2026-07-21", recommendation: "CHỜ", eligibility: "active", condition: "Không mua cơ bản tại 12.500 đồng; chỉ giao dịch ngắn hạn khi đóng cửa trên 13.200 đồng với khối lượng tối thiểu 39–40 triệu cổ phiếu." }
    },
    {
      ticker: "VCB", company: "Vietcombank", sector: "Ngân hàng", exchange: "HOSE", reportId: "VCB-20260714",
      close: 59500, priceDate: "2026-08-13", changePct: -0.335, volume: 4579700, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VCB~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VCB&resolution=1D",
      action: { zoneLow: 38000, zoneHigh: 40700, basisDate: "2026-07-14", recommendation: "CHỜ", eligibility: "active", condition: "Đầu tư giá trị; giao dịch 1–3 tuần chỉ hành động khi cấu trúc giá xác nhận." }
    },
    {
      ticker: "ACB", company: "Ngân hàng Á Châu", sector: "Ngân hàng", exchange: "HOSE", reportId: null,
      close: 22200, priceDate: "2026-08-13", changePct: -2.4176, volume: 11815100, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:ACB~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=ACB&resolution=1D",
      action: { zoneLow: 19100, zoneHigh: 20500, baseValue: 27300, basisDate: "2026-07-16", recommendation: "CHỜ – KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Vùng mua đã khóa trong phân tích ACB; PDF chưa có trong thư viện." }
    },
    {
      ticker: "CTG", company: "VietinBank", sector: "Ngân hàng", exchange: "HOSE", reportId: "CTG-20260811",
      close: 32150, priceDate: "2026-08-13", changePct: -0.1553, volume: 8770500, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:CTG~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=CTG&resolution=1D",
      action: { zoneLow: 23600, zoneHigh: 25300, baseValue: 44100, stop: null, basisDate: "2026-08-11", recommendation: "CHỜ - KHÔNG MUA ĐUỔI", eligibility: "active", condition: "Chỉ xem xét khi giá về 23.600–25.300 đồng/cp và ROE, NPL, CAR không xấu đi. Ví dụ trong báo cáo tại giá mua 25.000 đồng/cp: stop 23.750, target định giá thấp 33.700 và giá trị cơ sở 44.100 đồng/cp." }
    },
    {
      ticker: "TVS", company: "Chứng khoán Thiên Việt", sector: "Chứng khoán", exchange: "HOSE", reportId: "TVS-20260709",
      close: 14000, priceDate: "2026-08-13", changePct: 0, volume: 186800, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:TVS~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=TVS&resolution=1D",
      action: { zoneLow: 9500, zoneHigh: 10200, basisDate: "2026-07-09", recommendation: "CHỜ", eligibility: "active", condition: "Vùng MOS 25–30%; chưa có bằng chứng ROE phục hồi thì không mua mới." }
    },
    {
      ticker: "VND", company: "Công ty Cổ phần Chứng khoán VNDIRECT", sector: "Chứng khoán", exchange: "HOSE", reportId: "VND-20260812",
      close: 16550, priceDate: "2026-08-13", changePct: -1.4881, volume: 14224400, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:VND~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=VND&resolution=1D",
      action: { zoneLow: 10300, zoneHigh: 11000, baseValue: 14640, stop: 10450, basisDate: "2026-08-12", recommendation: "CHỜ - THEO DÕI / KHÔNG MUA Ở 16.800", eligibility: "active", condition: "Chỉ xuất hiện vùng mua có MOS 25–30% khi giá về 10.300–11.000 đồng/cp, ROE TTM tối thiểu 13%, không có provision loss lớn mới và điều khoản tăng vốn không xấu hơn mô hình. Entry tham chiếu 11.000, stop 10.450; Target 1 là 14.640 và Target 2 là 18.157 đồng/cp. Trên 18.200 đồng/cp mà ROE, chất lượng lợi nhuận và pha loãng chưa được nâng tương ứng thì không mua đuổi." }
    },
    {
      ticker: "BVS", company: "Chứng khoán Bảo Việt", sector: "Chứng khoán", exchange: "HNX", reportId: "BVS-20260713",
      close: 27100, priceDate: "2026-08-13", changePct: 0.3704, volume: 752381, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:BVS~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=BVS&resolution=1D",
      action: { zoneLow: 19900, zoneHigh: 21300, basisDate: "2026-07-13", recommendation: "CHỜ / THEO DÕI", eligibility: "active", condition: "Chỉ mua từng phần khi LNST 2026 và chất lượng tài sản vẫn giữ điều kiện của báo cáo." }
    },
    {
      ticker: "FPT", company: "FPT", sector: "Công nghệ", exchange: "HOSE", reportId: null,
      close: 69200, priceDate: "2026-08-13", changePct: -2.2599, volume: 7458000, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:FPT~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=FPT&resolution=1D",
      action: { zoneLow: 69000, zoneHigh: 72500, stopHigh: 69000, basisDate: "2026-07-09", recommendation: "CHỜ / CANH MUA CÓ ĐIỀU KIỆN", eligibility: "invalidated", condition: "Giá đóng cửa 67.100 ngày 31/07/2026 vẫn dưới mốc stop 68.500–69.000 của thiết lập cũ; phải đánh giá lại trước khi kích hoạt." }
    },
    {
      ticker: "HPG", company: "Hòa Phát", sector: "Công nghiệp", exchange: "HOSE", reportId: "HPG-20260710",
      close: 21700, priceDate: "2026-08-13", changePct: -1.81, volume: 25702700, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:HPG~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=HPG&resolution=1D",
      action: { zoneLow: 17500, zoneHigh: 18750, basisDate: "2026-07-10", recommendation: "THEO DÕI / CHỜ", eligibility: "active", condition: "Vùng MOS 25–30%; phải kiểm tra core PAT, nợ vay và dòng tiền trước khi giải ngân." }
    },
    {
      ticker: "GEE", company: "GELEX Electric", sector: "Công nghiệp", exchange: "HOSE", reportId: "GEE-20260713",
      close: 71500, priceDate: "2026-08-13", changePct: -5.0465, volume: 2595100, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:GEE~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=GEE&resolution=1D",
      action: { zoneLow: 27000, zoneHigh: 28900, basisDate: "2026-07-13", recommendation: "TRÁNH MUA MỚI", eligibility: "veto", condition: "Chỉ xem xét lại khi giá về vùng mua và CFO, nợ vay, biên EBIT cùng cấu trúc giá được xác nhận." }
    },
    {
      ticker: "DDV", company: "DAP - Vinachem", sector: "Hóa chất", exchange: "UPCoM", reportId: "DDV-20260713",
      close: 18400, priceDate: "2026-08-13", changePct: -2.1277, volume: 271673, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:DDV~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=DDV&resolution=1D",
      action: { zoneLow: 15100, zoneHigh: 16200, basisDate: "2026-07-13", recommendation: "THEO DÕI / CHỜ", eligibility: "active", condition: "Chỉ giải ngân từng phần khi CFO/tồn kho cải thiện." }
    },
    {
      ticker: "GAS", company: "PV GAS", sector: "Năng lượng", exchange: "HOSE", reportId: "GAS-20260713",
      close: 77900, priceDate: "2026-08-13", changePct: -2.625, volume: 1360200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:GAS~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=GAS&resolution=1D",
      action: { zoneLow: 58800, zoneHigh: 63000, basisDate: "2026-07-13", recommendation: "CHỜ", eligibility: "active", condition: "67.800–72.700 chỉ là vùng thăm dò có điều kiện; vùng mua nền tảng vẫn là 58.800–63.000." }
    },
    {
      ticker: "PVS", company: "PTSC", sector: "Năng lượng", exchange: "HNX", reportId: "PVS-20260711",
      close: 35000, priceDate: "2026-08-13", changePct: -1.6854, volume: 1795900, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:PVS~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=PVS&resolution=1D",
      action: { zoneLow: 26300, zoneHigh: 28100, adjustedLow: 21900, adjustedHigh: 23400, basisDate: "2026-07-11", recommendation: "THEO DÕI / CHỜ", eligibility: "active", condition: "Dùng vùng trước phát hành cổ phiếu 20%; vùng sau điều chỉnh chỉ áp dụng khi sự kiện có hiệu lực." }
    },
    {
      ticker: "BSR", company: "Lọc hóa dầu Bình Sơn", sector: "Năng lượng", exchange: "HOSE", reportId: "BSR-20260712",
      close: 26500, priceDate: "2026-08-13", changePct: 0, volume: 9703200, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:BSR~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=BSR&resolution=1D",
      action: { zoneLow: 9500, zoneHigh: 10200, basisDate: "2026-07-12", recommendation: "LOẠI – KHÔNG MUA MỚI", eligibility: "veto", condition: "Hard veto theo báo cáo; không xếp vào danh sách ưu tiên dù giá giảm." }
    },
    {
      ticker: "PNJ", company: "Vàng bạc Đá quý Phú Nhuận", sector: "Tiêu dùng", exchange: "HOSE", reportId: null,
      close: 35300, priceDate: "2026-08-13", changePct: 0.7133, volume: 2472100, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:PNJ~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=PNJ&resolution=1D",
      action: { basisDate: "2026-07-07", recommendation: "LOẠI / TRÁNH MUA MỚI", eligibility: "veto", condition: "Không bắt đáy; thiết lập cũ đã mất hiệu lực và chưa có vùng mua mới được khóa." }
    },
    {
      ticker: "BFC", company: "Phân bón Bình Điền", sector: "Nông nghiệp", exchange: "HOSE", reportId: null,
      close: 47500, priceDate: "2026-08-13", changePct: -1.6563, volume: 88700, priceSource: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:BFC~date:2026-08-13&size=10", priceSourceSecondary: "https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=1786554000&to=1786615200&symbol=BFC&resolution=1D",
      action: { zoneLow: 32400, zoneHigh: 34700, basisDate: "2026-07-09", recommendation: "TRÁNH MUA MỚI THEO ĐỊNH GIÁ", eligibility: "veto", condition: "Chờ kỹ thuật; không mở mua mới theo định giá hiện tại." }
    }
  ]
};
