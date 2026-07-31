/*
 * DAILY MARKET VIEW — cách cập nhật
 * 1) Sao chép một phần tử trong `entries`.
 * 2) Đổi `id`, `date` và nội dung; giữ ngày theo chuẩn YYYY-MM-DD.
 * 3) Đặt bản mới ở bất kỳ vị trí nào: website luôn tự sắp xếp mới nhất lên đầu.
 * 4) Chỉ nhập số liệu đã xác minh và luôn bổ sung đường dẫn trong `sources`.
 */
window.DAILY_MARKET_INSIGHTS = {
  updated: "2026-07-31",
  entries: [
    {
      id: "market-view-20260731",
      date: "2026-07-31",
      publishedAt: "31/07/2026 • Sau phiên",
      edition: "Số 06",
      sentiment: "watch",
      sentimentLabel: "TÍCH LŨY CÓ ĐIỀU KIỆN",
      dataStatus: "TVS Research • EOD 31.07.2026",
      title: "Tích lũy 1.720–1.730, chọn lọc theo tăng trưởng",
      thesis: "VN-Index giảm 8,9 điểm (−0,5%) còn 1.735,8 điểm sau khi gặp áp lực bán tại MA20. TVS đánh giá chỉ số cần tích lũy thêm ở 1.720–1.730 trước khi hướng tới 1.770–1.800; chỉ nên gia tăng từng phần ở cổ phiếu có triển vọng lợi nhuận 12 tháng tích cực và định giá hấp dẫn, không mua đuổi.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "3 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.735,8", change: "−8,9 • −0,5%", tone: "negative" },
        { label: "GTGD HOSE", value: "19.022 tỷ", change: "−6,3% so với phiên trước", tone: "warning" },
        { label: "KHỚP LỆNH HOSE", value: "15.941 tỷ", change: "−4,5% so với phiên trước", tone: "warning" },
        { label: "KHỐI NGOẠI HSX", value: "−312 tỷ", change: "bán ròng; tập trung VHM, TCB, VPB", tone: "negative" }
      ],
      backdrop: [
        "Chỉ số tăng đầu phiên nhờ nhóm Ngân hàng và VHM, nhưng quay đầu khi áp lực bán xuất hiện tại MA20 sau hơn ba phiên tăng liên tiếp.",
        "Thanh khoản hạ nhiệt: khối lượng HOSE đạt 762 triệu cổ phiếu, giảm 11,2%; giá trị giao dịch đạt 19.022 tỷ đồng, giảm 6,3%.",
        "Ngân hàng đóng góp tích cực khoảng 3,6 điểm, trong khi Bất động sản lấy đi khoảng 10,2 điểm; khối ngoại bán ròng 312 tỷ đồng, tập trung ở VHM, TCB và VPB."
      ],
      levels: [
        { label: "Vùng tích lũy trọng tâm", value: "1.720–1.730", note: "Vùng TVS cho rằng VN-Index cần tích lũy thêm sau khi gặp áp lực bán tại MA20." },
        { label: "Mục tiêu tham chiếu", value: "1.770–1.800", note: "Kịch bản hướng tới sau khi quá trình tích lũy hoàn tất; không phải tín hiệu mua tự động." }
      ],
      playbook: [
        { if: "VN-Index giữ được 1.720–1.730 và cổ phiếu mục tiêu đồng thời có triển vọng tăng trưởng lợi nhuận 12 tháng tích cực, định giá hấp dẫn", then: "CÓ THỂ GIA TĂNG TỪNG PHẦN; giải ngân chọn lọc, không mua đuổi và chỉ hành động khi điều kiện riêng của từng mã được xác nhận." },
        { if: "Chỉ số đóng cửa dưới 1.720 hoặc áp lực bán mở rộng cùng thanh khoản", then: "TẠM DỪNG GIA TĂNG; hạ rủi ro ở vị thế yếu và chờ thị trường thiết lập lại vùng cân bằng." }
      ],
      focus: "Trọng tâm: phản ứng 1.720–1.730 • mục tiêu 1.770–1.800 • độ bền thanh khoản • Ngân hàng/BĐS • bán ròng VHM, TCB, VPB",
      inference: "Giá đóng cửa, thanh khoản, dòng vốn ngoại, đóng góp ngành và vùng giá được lấy từ báo cáo TVS ngày 31/07/2026. Hai bảng kỹ thuật trong báo cáo thể hiện trị số RSI/MA khác nhau, vì vậy website chủ động không sử dụng các trị số chưa nhất quán này. Điều kiện IF–THEN là kế hoạch tác nghiệp của Xuân Lê TVS, không phải tín hiệu mua tự động hay cam kết lợi nhuận.",
      sources: [
        { label: "TVS Research 31.07 — PDF gốc", url: "reports/TVS_Market_Report_2026-07-31.pdf" }
      ]
    },
    {
      id: "market-view-20260730",
      date: "2026-07-30",
      publishedAt: "30/07/2026 • Sau phiên",
      edition: "Số 05",
      sentiment: "positive",
      sentimentLabel: "TÍCH CỰC CÓ ĐIỀU KIỆN",
      dataStatus: "TVS Research • EOD 30.07.2026",
      title: "Đà hồi phục mở rộng, chờ kiểm định 1.770–1.800",
      thesis: "VN-Index tăng 39,98 điểm lên 1.744,66 điểm, hoàn tất phiên tăng thứ ba liên tiếp với thanh khoản và độ rộng cùng cải thiện. Trạng thái tác nghiệp được nâng lên TÍCH CỰC CÓ ĐIỀU KIỆN: có thể chờ nhịp điều chỉnh để thăm dò cổ phiếu dẫn dắt có nền giá và tăng trưởng lợi nhuận, nhưng không mua đuổi khi chỉ số đang tiến vào cụm cản 1.770–1.800 điểm.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.744,66", change: "+39,98 • +2,35%", tone: "positive" },
        { label: "GTGD HOSE", value: "20.264 tỷ", change: "+40,6% so với phiên trước", tone: "positive" },
        { label: "KHỚP LỆNH HOSE", value: "16.663 tỷ", change: "+41,4% so với phiên trước", tone: "positive" },
        { label: "KHỐI NGOẠI HSX", value: "+679 tỷ", change: "mua ròng; tập trung VIC, VNM, MSN", tone: "positive" }
      ],
      backdrop: [
        "VN-Index vượt vùng cản ngắn hạn 1.720–1.725 điểm; độ rộng HOSE đạt 277 mã tăng, 33 mã tham chiếu và 58 mã giảm, cho thấy lực cầu lan tỏa rõ thay vì chỉ phụ thuộc một vài cổ phiếu trụ.",
        "Ngân hàng, bất động sản và thực phẩm–đồ uống lần lượt đóng góp khoảng 14,1; 10,5 và 2,9 điểm cho VN-Index; toàn bộ 21/21 nhóm ngành được nguồn đối chiếu ghi nhận tăng điểm.",
        "Tín hiệu kỹ thuật đã cải thiện nhưng chưa đồng thuận hoàn toàn: 3/4 chỉ báo động lượng cho tín hiệu mua, trong khi 8/9 chỉ báo trung bình động vẫn cho tín hiệu bán; chỉ số mới đứng trên EMA200 tại 1.742 điểm."
      ],
      levels: [
        { label: "Điểm tựa sau breakout", value: "1.720–1.730", note: "Vùng 1.720–1.725 là kháng cự vừa vượt; 1.730 là hỗ trợ tham chiếu trong bảng kỹ thuật TVS. Chỉ coi là điểm tựa khi lực bán không tăng đột biến." },
        { label: "Mục tiêu / vùng cản", value: "1.770–1.800", note: "Mục tiêu ngắn hạn theo TVS; bên trong vùng có SMA20 tại 1.769, SMA200 tại 1.773 và kháng cự tham chiếu 1.800 điểm." }
      ],
      playbook: [
        { if: "VN-Index điều chỉnh nhưng giữ được 1.720–1.730, thanh khoản không tăng mạnh ở chiều giảm và cổ phiếu dẫn dắt vẫn giữ nền", then: "CÓ THỂ THĂM DÒ 20–30% tại mã có tăng trưởng lợi nhuận, vùng mua hợp lệ và dòng tiền xác nhận; stoploss 3–7%, chỉ nhận giao dịch có R/R tối thiểu 2:1." },
        { if: "Chỉ số đóng cửa vượt 1.773 với độ rộng và thanh khoản duy trì tích cực; ngược lại, đóng cửa dưới 1.720", then: "Vượt 1.773: gia tăng từng phần ở vị thế đang đúng. Thủng 1.720: dừng mua mới, hạ margin và giảm các vị thế yếu; không bình quân giá xuống cơ học." }
      ],
      focus: "Trọng tâm: phản ứng 1.720–1.730 • cụm cản 1.770–1.800 • Ngân hàng/BĐS/Chứng khoán • độ bền thanh khoản • không mua đuổi",
      inference: "Giá đóng cửa, thanh khoản, độ rộng, dòng vốn ngoại và các mốc kỹ thuật được lấy từ báo cáo TVS ngày 30/07/2026 và đối chiếu với Thời báo Tài chính Việt Nam. Trạng thái, tỷ trọng thăm dò, stoploss và điều kiện IF–THEN là kế hoạch tác nghiệp của Xuân Lê TVS, không phải khuyến nghị tự động hay cam kết lợi nhuận.",
      sources: [
        { label: "TVS Research 30.07 — PDF chính thức", url: "https://www.tvs.vn/api/files/30.07.2026_VN-Index_se_huong_toi_vung_1%2C770_-_1%2C800_%C4%91iem_trong_cac_phien_tiep_theo-v1.pdf" },
        { label: "Thời báo Tài chính Việt Nam — Đối chiếu phiên 30.07", url: "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-30-7-dong-tien-lan-toa-nhieu-ma-quat-khoi-vn-index-tang-but-pha-201496.html" }
      ]
    },
    {
      id: "market-view-20260724",
      date: "2026-07-24",
      publishedAt: "24/07/2026 • Sau phiên",
      edition: "Số 04",
      sentiment: "cautious",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "TVS Research • EOD 24.07.2026",
      title: "Thanh khoản suy yếu, ưu tiên giảm rủi ro",
      thesis: "VN-Index giảm 13,27 điểm về 1.686,11 điểm trong khi giá trị giao dịch HOSE giảm 31,0% và toàn bộ 9 chỉ báo trung bình động trong báo cáo TVS tiếp tục cho tín hiệu bán. Trạng thái tác nghiệp là CHỜ: không bắt đáy; ưu tiên quan sát và tận dụng nhịp hồi nếu có để giảm tỷ trọng về mức an toàn.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.686,11", change: "−13,27 • −0,78%", tone: "negative" },
        { label: "GTGD HOSE", value: "13.898 tỷ", change: "−31,0% so với phiên trước", tone: "warning" },
        { label: "KHỚP LỆNH HOSE", value: "11.875 tỷ", change: "−31,8% so với phiên trước", tone: "warning" },
        { label: "KHỐI NGOẠI HSX", value: "−1.820 tỷ", change: "bán ròng theo TVS Research", tone: "negative" }
      ],
      backdrop: [
        "Áp lực bán lan tỏa từ đầu phiên; Dầu khí là nhóm ngành duy nhất tăng điểm nhưng không đủ bù sức ép từ Vingroup và phần còn lại của thị trường.",
        "Thanh khoản HOSE giảm mạnh: khối lượng còn khoảng 590 triệu cổ phiếu và giá trị giao dịch đạt 13.898 tỷ đồng, phản ánh sự lưỡng lự của dòng tiền sau chuỗi phiên biến động.",
        "RSI ở mức 29 cho tín hiệu mua do trạng thái quá bán, nhưng 3/4 chỉ báo động lượng và toàn bộ 9 chỉ báo trung bình động trong báo cáo vẫn cho tín hiệu bán."
      ],
      levels: [
        { label: "Cản kỹ thuật gần", value: "1.744–1.778", note: "EMA200 tại 1.744, SMA200 tại 1.773 và EMA20 tại 1.778; chỉ số đang đóng cửa thấp hơn toàn bộ cụm này." },
        { label: "Cụm cản mạnh hơn", value: "1.800–1.830", note: "SMA100 tại 1.800, SMA20/Bollinger Band tại 1.802, EMA50 tại 1.809 và SMA50 tại 1.830." }
      ],
      playbook: [
        { if: "VN-Index hồi phục nhưng chưa lấy lại 1.744–1.778 hoặc thanh khoản tiếp tục thấp", then: "Không mua đuổi và không bắt đáy; tận dụng nhịp hồi để giảm vị thế yếu, hạ margin và đưa tỷ trọng về mức an toàn." },
        { if: "Chỉ số vượt 1.778, sau đó chinh phục 1.800–1.830 với độ rộng và thanh khoản cùng cải thiện", then: "Đánh giá lại trạng thái CHỜ; chỉ xem xét cổ phiếu dẫn dắt có điểm mua hợp lệ, stoploss 3–7% và R/R tối thiểu 2:1." }
      ],
      focus: "Trọng tâm: thanh khoản • phản ứng 1.744–1.778 • khối ngoại bán ròng • PNJ, VIX, VHM • rủi ro tin tức doanh nghiệp",
      inference: "Giá đóng cửa và mức biến động được dùng theo bảng số liệu TVS và đã đối chiếu chéo: 1.686,11 điểm, giảm 13,27 điểm tương đương 0,78%. Các điều kiện IF–THEN là diễn giải tác nghiệp của Xuân Lê TVS từ các chỉ báo trong báo cáo, không phải tín hiệu mua tự động hay cam kết lợi nhuận.",
      sources: [
        { label: "TVS Research 24.07 — PDF chính thức", url: "https://www.tvs.vn/api/files/24.07.2026_TVS_Research_duy_tri_quan_điem_than_trong_voi_chi_so_VN-Index_trong_cac_phien_toi.pdf" },
        { label: "Báo Nhân Dân — Đối chiếu phiên 24.07", url: "https://nhandan.vn/chung-khoan-ngay-247-vn-index-giam-gan-13-diem-thanh-khoan-lao-doc-post977612.html" }
      ]
    },
    {
      id: "market-view-20260723",
      date: "2026-07-23",
      publishedAt: "23/07/2026 • Sau phiên",
      edition: "Số 03",
      sentiment: "cautious",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "TVS Research • EOD 23.07.2026",
      title: "Nhịp hồi kỹ thuật chưa đủ xác nhận đảo chiều",
      thesis: "VN-Index phục hồi 30,85 điểm lên 1.699,38 điểm, nhưng giá trị giao dịch HOSE giảm 14,8% và chỉ số vẫn nằm dưới toàn bộ cụm đường trung bình quan trọng trong báo cáo TVS. Quan điểm tác nghiệp là không mua đuổi; ưu tiên tận dụng nhịp tăng để đưa tỷ trọng cổ phiếu về mức an toàn.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.699,38", change: "+30,85 • +1,85%", tone: "positive" },
        { label: "GTGD HOSE", value: "20.034 tỷ", change: "−14,8% so với phiên trước", tone: "warning" },
        { label: "KHỚP LỆNH HOSE", value: "17.321 tỷ", change: "−18,9% so với phiên trước", tone: "warning" },
        { label: "KHỐI NGOẠI HSX", value: "−492 tỷ", change: "theo dữ liệu TVS Research", tone: "negative" }
      ],
      backdrop: [
        "VN-Index chịu áp lực bán trong buổi sáng, lùi quanh 1.660 điểm trước khi lực cầu bắt đáy kéo chỉ số đóng cửa sát mốc 1.700.",
        "Động lực hồi phục tập trung mạnh ở Vingroup và bất động sản; riêng nhóm bất động sản đóng góp 26,3 điểm vào VN-Index theo TVS.",
        "RSI ở mức 30 phản ánh trạng thái quá bán, nhưng 3/4 chỉ báo động lượng và toàn bộ 9 chỉ báo trung bình động trong báo cáo vẫn cho tín hiệu bán."
      ],
      levels: [
        { label: "Cản kỹ thuật đầu tiên", value: "1.744–1.773", note: "EMA200 tại 1.744 và SMA200 tại 1.773 theo TVS; VN-Index vẫn đóng cửa thấp hơn cụm này." },
        { label: "Cụm cản ngắn hạn", value: "1.788–1.811", note: "EMA20 tại 1.788 và SMA20 tại 1.811; cần thanh khoản và độ rộng đồng thuận khi kiểm định." }
      ],
      playbook: [
        { if: "Nhịp hồi tiếp diễn nhưng chỉ số vẫn dưới 1.744–1.773 và thanh khoản không cải thiện", then: "Không mua đuổi; tận dụng các phiên tăng để giảm vị thế yếu và đưa tỷ trọng cổ phiếu về mức an toàn." },
        { if: "Chỉ số lấy lại 1.773, sau đó vượt 1.788–1.811 với độ rộng và thanh khoản cùng cải thiện", then: "Đánh giá lại mức chấp nhận rủi ro; chỉ xem xét cổ phiếu dẫn dắt có vùng mua hợp lệ, không coi việc vượt cản là tín hiệu mua tự động." }
      ],
      focus: "Trọng tâm: độ bền thanh khoản • phản ứng 1.744–1.773 • Vingroup/BĐS • bán ròng MBB, TCB, VCB",
      inference: "Số liệu, chỉ báo và quan điểm giảm tỷ trọng được lấy từ báo cáo TVS ngày 23/07/2026. Các điều kiện IF–THEN là diễn giải tác nghiệp của Xuân Lê TVS từ các mốc trong báo cáo, không phải tín hiệu mua tự động hay cam kết lợi nhuận.",
      sources: [
        { label: "TVS Research 23.07 — PDF chính thức", url: "https://www.tvs.vn/api/files/23.07.2026_TVS_Research_cho_rang_nhip_hoi_phuc_cua_chi_so_co_the_se_khong_keo_dai.pdf" },
        { label: "Báo Nhân Dân — Đối chiếu phiên 23.07", url: "https://nhandan.vn/post-977416.html" }
      ]
    },
    {
      id: "market-view-20260720",
      date: "2026-07-20",
      publishedAt: "21/07/2026 • 08:00",
      edition: "Số 02",
      sentiment: "cautious",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "Dữ liệu khóa cuối phiên",
      title: "Ưu tiên kiểm soát rủi ro sau phiên giảm rộng",
      thesis: "Áp lực bán lan rộng trong khi giá trị khớp lệnh tăng mạnh cho thấy bên bán chiếm ưu thế rõ rệt trong phiên 20/07. Quan điểm tác nghiệp là bảo toàn sức mua, chờ thị trường tạo cân bằng và không coi một nhịp hồi đơn lẻ là xác nhận đảo chiều.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.743,51", change: "−43,94 • −2,46%", tone: "negative" },
        { label: "KHỚP LỆNH HOSE", value: "17.883 tỷ", change: "+69,64% so với phiên trước", tone: "warning" },
        { label: "ĐỘ RỘNG HOSE", value: "45 / 26 / 296", change: "tăng / tham chiếu / giảm", tone: "negative" },
        { label: "KHỐI NGOẠI HOSE", value: "−45,94 tỷ", change: "bán ròng", tone: "neutral" }
      ],
      backdrop: [
        "VN-Index đóng cửa tại 1.743,51 điểm; biên độ trong ngày là 1.733,25–1.787,45 điểm.",
        "VCB, VHM, BID, TCB và HPG là năm mã kéo giảm chỉ số nhiều nhất theo BSC.",
        "Thanh khoản tăng trong một phiên giảm sâu là tín hiệu cần ưu tiên quản trị vị thế hơn là dự đoán đáy."
      ],
      levels: [
        { label: "Mốc kiểm chứng gần", value: "1.733,25", note: "Đáy trong phiên 20/07; dùng để theo dõi phản ứng cung–cầu, không mặc định là hỗ trợ bền vững." },
        { label: "Điều kiện cải thiện", value: "Độ rộng + thanh khoản", note: "Cần thấy số mã tăng mở rộng và áp lực bán không còn tăng cùng thanh khoản." }
      ],
      playbook: [
        { if: "VN-Index giữ trên đáy 20/07 và độ rộng cải thiện", then: "Theo dõi quá trình tạo cân bằng; chỉ chọn lọc mã thỏa đồng thời vùng mua và điều kiện riêng trong báo cáo." },
        { if: "Chỉ số đóng cửa dưới 1.733,25 hoặc độ rộng giảm tiếp tục áp đảo", then: "Ưu tiên giảm rủi ro, không bình quân giá xuống cơ học và chưa mở vị thế chỉ vì giá đã giảm mạnh." }
      ],
      focus: "Trụ ảnh hưởng mạnh: VCB • VHM • BID • TCB • HPG",
      inference: "Phần chiến lược và điều kiện IF–THEN là suy luận phân tích từ dữ liệu phiên, không phải dữ liệu do nguồn công bố và không phải cam kết lợi nhuận.",
      sources: [
        { label: "BSC Brief 20.07", url: "https://www.bsc.com.vn/bao-cao/15664-bsc-brief-20-07-thi-truong-chim-trong-sac-do/" },
        { label: "Dữ liệu lịch sử VN-Index", url: "https://id.investing.com/indices/vn-historical-data" },
        { label: "Đối chiếu diễn biến phiên", url: "https://vtcnews.vn/vn-index-boc-hoi-gan-44-diem-ar1030123.html" }
      ]
    },
    {
      id: "market-view-20260717",
      date: "2026-07-17",
      publishedAt: "17/07/2026 • Sau phiên",
      edition: "Số 01",
      sentiment: "watch",
      sentimentLabel: "THEO DÕI",
      dataStatus: "Bản lưu trữ",
      title: "Động lực tăng suy yếu, thị trường cần thêm xác nhận",
      thesis: "VN-Index khép tuần dưới vùng 1.800–1.810 điểm trong khi khu vực MA200 quanh 1.770 điểm tạo điểm tựa tạm thời. Trạng thái ngắn hạn chưa đủ mạnh để nâng mức rủi ro danh mục.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "3 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.787,45", change: "−16,79 • −0,93%", tone: "negative" },
        { label: "THẤP NHẤT PHIÊN", value: "1.779,58", change: "dữ liệu lịch sử", tone: "neutral" },
        { label: "VÙNG THEO DÕI", value: "quanh 1.770", change: "MA200 theo SSI Research", tone: "warning" },
        { label: "VÙNG CẢN GẦN", value: "1.800–1.810", change: "cần vượt để cải thiện", tone: "neutral" }
      ],
      backdrop: [
        "Chỉ số lùi dưới vùng 1.800–1.810 và áp lực cung tiếp tục chiếm ưu thế.",
        "MA200 quanh 1.770 điểm mới đóng vai trò điểm tựa tạm thời, chưa phải xác nhận đảo chiều.",
        "Ưu tiên quan sát mức độ đồng thuận của thanh khoản và độ rộng khi chỉ số thử phục hồi."
      ],
      levels: [
        { label: "Điểm tựa tạm thời", value: "quanh 1.770", note: "MA200 ngày theo bản tin SSI Research ngày 17/07/2026." },
        { label: "Vùng cần chinh phục", value: "1.800–1.810", note: "Cần vượt để trạng thái ngắn hạn cải thiện rõ hơn." }
      ],
      playbook: [
        { if: "Chỉ số lấy lại 1.800–1.810 với thanh khoản và độ rộng đồng thuận", then: "Đánh giá lại mức độ chấp nhận rủi ro và tập trung vào cổ phiếu dẫn dắt." },
        { if: "Áp lực cung tiếp tục chiếm ưu thế quanh MA200", then: "Giữ tỷ trọng thận trọng và chờ thêm dữ liệu xác nhận." }
      ],
      focus: "Trọng tâm: phản ứng tại MA200 • độ rộng • thanh khoản",
      inference: "Phần chiến lược IF–THEN là suy luận tác nghiệp từ dữ liệu và nhận định kỹ thuật được dẫn nguồn.",
      sources: [
        { label: "SSI Research 17.07", url: "https://www.ssi.com.vn/khach-hang-ca-nhan/ban-tin-thi-truong" },
        { label: "Dữ liệu lịch sử VN-Index", url: "https://id.investing.com/indices/vn-historical-data" }
      ]
    }
  ]
};
