/* Daily Market View patch — EOD 26/08/2026. Loaded after the 21/08 patch. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  const entry = {
    id: "market-view-20260826",
    date: "2026-08-26",
    publishedAt: "26/08/2026 • Sau phiên",
    edition: "Số 12",
    sentiment: "watch",
    sentimentLabel: "TÍCH CỰC • CHỜ NHỊP RUNG",
    dataStatus: "VNDIRECT Finfo + TVS Research • EOD 26.08.2026",
    title: "Vượt 1.800 điểm — xu hướng cải thiện, không mua đuổi",
    thesis: "VN-Index đóng cửa 1.821,32 điểm, tăng 29,91 điểm (+1,67%) và vượt mốc 1.800. Độ rộng HOSE nghiêng tích cực với 173 mã tăng, 125 mã giảm và 68 mã tham chiếu. Tuy nhiên, giá trị giao dịch HOSE đạt 19.883 tỷ đồng (-7,1%) và khối lượng 731 triệu cổ phiếu (-13,0%), tức breakout chưa đi kèm thanh khoản mở rộng. Trạng thái tác nghiệp: GIỮ leader đang khỏe, chỉ gia tăng khi rung lắc giữ được vùng kiểm định; tuyệt đối không FOMO sau phiên tăng mạnh.",
    author: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    readingTime: "3 phút đọc",
    metrics: [
      { label: "VN-INDEX", value: "1.821,32", change: "+29,91 • +1,67%", tone: "positive" },
      { label: "GTGD HOSE", value: "19.883 tỷ", change: "−7,1% • KLGD 731 triệu cp (−13,0%)", tone: "warning" },
      { label: "ĐỘ RỘNG HOSE", value: "173 tăng / 125 giảm", change: "68 tham chiếu", tone: "positive" },
      { label: "DÒNG TIỀN / KHỐI NGOẠI", value: "VN30 65,2% GTGD", change: "Khối ngoại bán ròng 36 tỷ", tone: "neutral" }
    ],
    backdrop: [
      "Phiên 26/08 xác nhận cải thiện về giá: VN-Index vượt 1.800 và đóng cửa ở vùng cao nhất ngày. Tuy nhiên thanh khoản giảm so với phiên trước, vì vậy chưa coi đây là tín hiệu để mua đuổi toàn thị trường.",
      "Dòng tiền tập trung mạnh vào VN30, chiếm 65,2% giá trị giao dịch theo TVS. Bất động sản đóng góp khoảng 17,9 điểm, Ngân hàng 8,4 điểm và Hóa chất 0,8 điểm vào VN-Index; ưu tiên theo dõi leader trong các nhóm có dòng tiền thực thay vì mua lan tỏa.",
      "Khối ngoại bán ròng 36 tỷ đồng — quy mô nhỏ so với thanh khoản toàn thị trường và chưa tạo veto riêng. TVS Research đánh giá sau khi vượt 1.800, VN-Index có thể hướng tới vùng 1.870–1.880 điểm trong thời gian tới."
    ],
    levels: [
      { label: "Vùng kiểm định gần", value: "1.793–1.800", note: "1.793 là MA20 trong báo cáo TVS và 1.800 là mốc kháng cự vừa bị vượt. Chỉ xem xét tăng tỷ trọng khi rung về vùng này nhưng giữ được cấu trúc và độ rộng không xấu đi rõ rệt." },
      { label: "Mốc đóng cửa / xác nhận gần", value: "1.821,32", note: "Đây là giá đóng cửa phiên 26/08, không phải điểm mua. Nếu vượt tiếp mốc này, cần ưu tiên xác nhận bằng thanh khoản cải thiện thay vì mua theo chỉ số." },
      { label: "Vùng mục tiêu kỹ thuật", value: "1.870–1.880", note: "Mục tiêu do TVS Research nêu trong báo cáo 26/08. Khi chỉ số tiến nhanh vào vùng này, ưu tiên bảo vệ lợi nhuận hơn là mở vị thế đuổi giá." },
      { label: "Mốc giảm rủi ro", value: "đóng dưới 1.793", note: "Đây là mốc tác nghiệp suy ra từ MA20 được TVS công bố. Nếu đóng dưới mốc này, breakout 1.800 suy yếu và cần hạ rủi ro phần trading." }
    ],
    playbook: [
      { if: "VN-Index rung về 1.793–1.800, giữ được vùng này và độ rộng vẫn nghiêng về phía tăng", then: "CÓ THỂ GIA TĂNG CÓ CHỌN LỌC ở cổ phiếu leader có nền giá/điểm mua riêng rõ ràng; giải ngân từng phần, stoploss 3–7%, không mua đồng loạt." },
      { if: "VN-Index vượt 1.821,32 nhưng thanh khoản không cải thiện so với phiên 26/08", then: "GIỮ vị thế tốt, KHÔNG MUA ĐUỔI. Chờ nhịp retest hoặc nền giá mới của từng cổ phiếu." },
      { if: "VN-Index tiến nhanh vào 1.870–1.880", then: "ƯU TIÊN KHÓA LỢI NHUẬN từng phần và kéo stop theo xu hướng; không FOMO tại vùng mục tiêu kỹ thuật." },
      { if: "VN-Index đóng cửa dưới 1.793", then: "GIẢM phần trading, dừng tăng tỷ trọng và đánh giá lại các setup yếu tương đối; không bình quân giá xuống cơ học." }
    ],
    focus: "Trọng tâm: retest 1.793–1.800 • không FOMO trên 1.821 • mục tiêu 1.870–1.880 • thanh khoản • leader VN30/Ngân hàng/BĐS • stoploss 3–7%",
    inference: "Dữ liệu VN-Index, giá trị/khối lượng giao dịch, khối ngoại, tỷ trọng VN30, đóng góp ngành, MA20 và vùng mục tiêu 1.870–1.880 được lấy từ Báo cáo thị trường TVS Research ngày 26/08/2026 do người dùng cung cấp và được đối chiếu với dữ liệu EOD đang khóa trên website cùng bài tường thuật phiên 26/08 của VietnamFinance. Vùng 1.793–1.800 là vùng tác nghiệp được tổng hợp từ MA20 1.793 và mốc breakout 1.800 trong chính báo cáo; quy tắc giảm rủi ro khi đóng dưới 1.793 là diễn giải quản trị giao dịch của Xuân Lê TVS, không phải dự báo chắc chắn. Không nội suy số liệu thiếu và không coi mục tiêu 1.870–1.880 là mức đảm bảo. Mọi giao dịch cổ phiếu phải tuân thủ stoploss 3–7% và điều kiện riêng của từng setup.",
    sources: [
      { label: "TVS Research — Trung tâm phân tích; Báo cáo thị trường 26/08/2026 được đối chiếu trực tiếp từ PDF", url: "https://tvs.vn/vi/tin-tuc" },
      { label: "VNDIRECT Finfo — dữ liệu EOD 26/08/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-08-26&size=500" },
      { label: "VietnamFinance — VN-Index tăng gần 30 điểm phiên 26/08/2026", url: "https://vietnamfinance.vn/bay-tren-doi-canh-vic--tcb-vn-index-tro-lai-moc-1800-diem-d149725.html" }
    ]
  };

  store.updated = "2026-08-26";
  const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
  if (existingIndex >= 0) store.entries[existingIndex] = entry;
  else store.entries.unshift(entry);
})();
