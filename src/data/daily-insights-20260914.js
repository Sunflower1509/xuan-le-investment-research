/* Daily Market View patch — EOD 14/09/2026. Loaded after prior daily insight patches. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  const entry = {
    id: "market-view-20260914",
    date: "2026-09-14",
    publishedAt: "14/09/2026 • Sau phiên",
    edition: "Số 17",
    sentiment: "watch",
    sentimentLabel: "CHỜ / PHÒNG THỦ",
    dataStatus: "VNDIRECT Finfo + Stockproxx/Người Quan Sát + SSI • EOD 14.09.2026",
    title: "Rút chân trong phiên nhưng vẫn dưới 1.800 — chưa đủ tín hiệu mua diện rộng",
    thesis: "VN-Index đóng cửa 1.788,23 điểm, giảm 6,98 điểm (-0,39%); VN30 giảm 0,42% còn 1.928,57 điểm và HNX-Index giảm 0,27% còn 271,94 điểm. Độ rộng HOSE do VNDIRECT Finfo khóa EOD vẫn tiêu cực với 83 mã tăng, 54 mã tham chiếu và 219 mã giảm, trong đó 10 mã giảm sàn. Nguồn hậu phiên ghi nhận thanh khoản toàn thị trường gần 19.500 tỷ đồng, tăng gần 20% so với phiên trước; khối ngoại chuyển sang mua ròng hơn 800 tỷ đồng, tập trung ở nhóm ngân hàng. Chỉ số có lúc lùi quanh 1.776 rồi hồi lại nhưng vẫn đóng dưới 1.800 và nằm trong vùng cân bằng 1.770–1.790 mà SSI nêu sau phiên 11/09. TRẠNG THÁI TÁC NGHIỆP: CHỜ / PHÒNG THỦ; chưa mua diện rộng cho đến khi VN-Index lấy lại tối thiểu 1.800 và tốt hơn là 1.810–1.820 cùng độ rộng cải thiện.",
    author: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    readingTime: "3 phút đọc",
    metrics: [
      { label: "VN-INDEX", value: "1.788,23", change: "−6,98 • −0,39%", tone: "warning" },
      { label: "ĐỘ RỘNG HOSE", value: "83 tăng / 219 giảm", change: "54 tham chiếu • 10 mã sàn", tone: "warning" },
      { label: "THANH KHOẢN", value: "~19.500 tỷ", change: "Toàn thị trường • +gần 20% so với phiên trước", tone: "neutral" },
      { label: "KHỐI NGOẠI", value: "MUA RÒNG", change: ">800 tỷ toàn thị trường • tập trung ngân hàng", tone: "positive" }
    ],
    backdrop: [
      "Phiên 14/09 cho thấy lực cầu bắt đáy xuất hiện khi VN-Index có lúc lùi quanh 1.776 điểm rồi phục hồi về 1.788,23 điểm. Tuy nhiên, việc đóng cửa dưới 1.800 và độ rộng HOSE 83 tăng/219 giảm cho thấy nhịp hồi trong phiên chưa đủ để xác nhận đảo chiều ngắn hạn.",
      "Thanh khoản toàn thị trường được nguồn hậu phiên ghi nhận gần 19.500 tỷ đồng, tăng gần 20% so với phiên 11/09. Đây là tín hiệu hai mặt: dòng tiền có quay lại, nhưng khi chỉ số vẫn giảm và số mã giảm áp đảo thì chưa thể coi thanh khoản tăng là xác nhận tích cực. Bài này giữ nguyên phạm vi 'toàn thị trường', không quy đổi thành GTGD HOSE hay GTGD khớp lệnh vì chưa có nguồn thứ hai cùng phạm vi để khóa chính xác.",
      "Khối ngoại chuyển sang mua ròng hơn 800 tỷ đồng trên phạm vi toàn thị trường, tập trung vào nhóm ngân hàng như VPB, MBB, TCB; HPG là một trong các mã bị bán ròng mạnh. Đây là cải thiện đáng kể so với phiên 11/09 nhưng không đủ để phủ nhận độ rộng yếu của HOSE.",
      "Dòng tiền tiếp tục phân hóa mạnh theo ngành. Dầu khí duy trì sức mạnh tương đối với BSR, PVT, PVD tăng tốt; một số ngân hàng lớn hồi phục. Ngược lại, nhóm GELEX chịu áp lực bán rất mạnh với GEE, GEX, GEL giảm sàn. Với nhà đầu cơ 1–3 tuần, ưu tiên leader giữ nền và sức mạnh tương đối; tránh mua đuổi nhóm tăng nóng chỉ vì thị trường chung yếu.",
      "Có khác biệt phạm vi giữa các nguồn độ rộng: VNDIRECT Finfo khóa riêng HOSE ở mức 83 tăng/54 tham chiếu/219 giảm, trong khi nguồn hậu phiên ghi 186 mã tăng và 440 mã giảm trên phạm vi toàn thị trường. Hai bộ số cùng cho tín hiệu bên bán chiếm ưu thế nhưng không được cộng/trộn với nhau."
    ],
    levels: [
      { label: "Vùng cân bằng / hỗ trợ gần", value: "1.770–1.790", note: "SSI sau phiên 11/09 xác định khu vực 1.770–1.790 là vùng có thể theo dõi khả năng cân bằng trở lại. VN-Index 14/09 đóng tại 1.788,23 sau khi có lúc lùi quanh 1.776, tức đang ở ngay trong vùng kiểm định này; không mặc định đây là đáy." },
      { label: "Pivot tâm lý phải lấy lại", value: "1.800", note: "Đóng lại trên 1.800 là điều kiện tối thiểu để giảm bớt trạng thái phòng thủ. Nếu chỉ số vượt 1.800 nhưng độ rộng vẫn âm mạnh, vẫn coi là hồi kỹ thuật." },
      { label: "Vùng xác nhận mua thăm dò", value: "1.810–1.820", note: "Đây là hỗ trợ cũ đã bị phá trong phiên 11/09. Sau khi mất vùng này, 1.810–1.820 trở thành vùng reclaim quan trọng; cần giá đóng cửa trở lại phía trên cùng độ rộng và leader xác nhận trước khi tăng rủi ro." },
      { label: "Kháng cự phục hồi", value: "1.830–1.870", note: "SSI từng xác định đây là vùng cản gần trước khi chỉ số suy yếu. Nếu thị trường hồi nhanh vào vùng này nhưng thanh khoản/độ rộng không cải thiện, ưu tiên khóa lợi nhuận trading thay vì FOMO." }
    ],
    playbook: [
      { state: "positive", if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng lại trên 1.810–1.820, số mã tăng HOSE vượt số mã giảm hoặc cải thiện rõ qua nhiều phiên, thanh khoản không mang tính bán tháo và leader lấy lại nền/pivot", then: "CÓ MUA THĂM DÒ 20–30% vị thế dự kiến ở leader có nền cơ bản/tăng trưởng tốt và dòng tiền xác nhận. Điểm mua phải là breakout hoặc retest hợp lệ của từng mã; stoploss 3–7%, target tối thiểu 10–15% hoặc theo kháng cự kế tiếp; chỉ nhận giao dịch có R:R tối thiểu 2:1." },
      { state: "neutral", if: "THIẾU XÁC NHẬN — VN-Index còn dao động trong 1.770–1.800 hoặc lấy lại 1.800 nhưng độ rộng HOSE vẫn nghiêng mạnh về bên giảm", then: "CHỜ / PHÒNG THỦ. Giữ tỷ trọng tiền mặt cao, giữ leader còn nền, không bắt đáy chỉ vì chỉ số rút chân. Không mua đuổi dầu khí/ngân hàng sau nhịp kéo nếu điểm vào làm R:R xấu; không bình quân giá xuống cơ học." },
      { state: "risk_off", if: "RISK-OFF — VN-Index đóng dưới 1.770, độ rộng tiếp tục xấu với số mã giảm áp đảo và các leader/nhóm trụ đồng loạt phá nền", then: "GIẢM RỦI RO phần trading; LOẠI các setup mất nền hoặc chạm stoploss, dừng mở vị thế mới và bảo toàn sức mua. Mọi vị thế vi phạm stoploss 3–7% phải xử lý theo kế hoạch, không dùng kỳ vọng FTSE/nâng hạng để trì hoãn cắt lỗ." }
    ],
    focus: "Trọng tâm: vùng cân bằng 1.770–1.790 • reclaim 1.800 rồi 1.810–1.820 • độ rộng HOSE 83/54/219 • thanh khoản toàn thị trường ~19.500 tỷ • khối ngoại mua ròng >800 tỷ • leader/relative strength • stoploss 3–7% • R:R ≥ 2:1",
    inference: "Dữ liệu EOD chính thức trong repo được khóa từ VNDIRECT Finfo cho ngày 14/09/2026: VN-Index 1.788,23 điểm (-6,98; -0,39%), VN30 1.928,57 điểm (-0,42%), HNX-Index 271,94 điểm (-0,27%), độ rộng HOSE 83 tăng/54 tham chiếu/219 giảm và 10 mã sàn. Nguồn hậu phiên Stockproxx/Người Quan Sát xác nhận VN-Index kết phiên quanh 1.788 điểm, từng lùi quanh 1.776 điểm, thanh khoản toàn thị trường gần 19.500 tỷ đồng tăng gần 20% và khối ngoại mua ròng hơn 800 tỷ đồng; do nguồn này dùng phạm vi toàn thị trường nên bài không gắn các số thanh khoản/khối ngoại đó riêng cho HOSE. SSI sau phiên 11/09 xác định vùng 1.770–1.790 là khu vực theo dõi khả năng cân bằng sau khi 1.810–1.820 bị phá; việc coi 1.800 rồi 1.810–1.820 là các mốc reclaim là diễn giải tác nghiệp có điều kiện, không phải mức bảo đảm. Không trộn độ rộng toàn thị trường 186 tăng/440 giảm với độ rộng riêng HOSE 83 tăng/219 giảm. Trạng thái CHỜ / PHÒNG THỦ được suy ra từ việc chỉ số vẫn dưới 1.800, độ rộng HOSE âm rõ và chưa có xác nhận đảo chiều, dù khối ngoại và một số nhóm ngành cải thiện. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; mọi giao dịch phải có stoploss 3–7% và R:R tối thiểu 2:1.",
    sources: [
      { label: "VNDIRECT Finfo — chỉ số & độ rộng EOD 14/09/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-14&size=500" },
      { label: "Stockproxx / Người Quan Sát — Nhóm GELEX bất ngờ nằm sàn, khối ngoại mua ròng hơn 800 tỷ đồng", url: "https://vn.stockproxx.com/hpg/nhom-gelex-bat-ngo-nam-san-khoi-ngoai-mua-rong-hon-800-ty-dong" },
      { label: "SSI — Bản tin thị trường 11/09/2026: Lực bán diện rộng", url: "https://www.ssi.com.vn/khach-hang-ca-nhan/ban-tin-thi-truong" },
      { label: "Đầu tư Chứng khoán — Nhận định thị trường phiên 14/09: Không nên bắt đáy, hạ tỷ lệ vay ký quỹ", url: "https://m.tinnhanhchungkhoan.vn/nhan-dinh-thi-truong-phien-giao-dich-ngay-149-khong-nen-bat-day-ha-ty-le-vay-ky-quy-post397477.html" }
    ]
  };

  store.updated = "2026-09-14";
  const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
  if (existingIndex >= 0) store.entries[existingIndex] = entry;
  else store.entries.unshift(entry);
})();
