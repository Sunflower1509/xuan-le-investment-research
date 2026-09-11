/* Daily Market View patch — EOD 11/09/2026. Loaded after prior daily insight patches. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  const entry = {
    id: "market-view-20260911",
    date: "2026-09-11",
    publishedAt: "11/09/2026 • Sau phiên",
    edition: "Số 16",
    sentiment: "watch",
    sentimentLabel: "CHỜ / PHÒNG THỦ",
    dataStatus: "Kinh tế Chứng khoán + SBBS + SSI + FTSE Russell • EOD 11.09.2026",
    title: "Mất 1.800 với độ rộng xấu và thanh khoản tăng — chuyển sang phòng thủ",
    thesis: "VN-Index đóng cửa 1.795,21 điểm, giảm 34,02 điểm (-1,86%); tính cả tuần giảm 57,87 điểm (-3,12%). Độ rộng HOSE rất xấu với 51 mã tăng và 284 mã giảm. Tổng KLGD đạt gần 697,7 triệu cổ phiếu, GTGD hơn 16.961 tỷ đồng, tăng lần lượt khoảng 44% và 25% so với phiên trước; riêng giá trị khớp lệnh khoảng 15.250 tỷ đồng. Khối ngoại bán ròng 867 tỷ đồng trên HOSE. Vùng 1.810–1.820 mà SSI còn xác định là hỗ trợ ngắn hạn trong bản tin 10/09 đã bị xuyên thủng. TRẠNG THÁI TÁC NGHIỆP: CHỜ / PHÒNG THỦ; chưa mua diện rộng, chỉ xem xét thăm dò khi chỉ số lấy lại 1.810–1.820 cùng độ rộng và dòng tiền xác nhận.",
    author: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    readingTime: "3 phút đọc",
    metrics: [
      { label: "VN-INDEX", value: "1.795,21", change: "−34,02 • −1,86% • tuần −3,12%", tone: "warning" },
      { label: "GTGD HOSE", value: "16.961 tỷ", change: "+25% • KLGD 697,7 triệu cp (+44%)", tone: "warning" },
      { label: "ĐỘ RỘNG HOSE", value: "51 tăng / 284 giảm", change: "Số mã giảm ≈5,6 lần số mã tăng", tone: "warning" },
      { label: "KHỐI NGOẠI HOSE", value: "BÁN RÒNG", change: "−867 tỷ • STB/MBB/VPB bị bán mạnh", tone: "warning" }
    ],
    backdrop: [
      "Áp lực bán tăng rõ về cuối phiên: VN-Index mất mốc 1.800 trước ATC và đóng cửa tại 1.795,21 điểm. Độ rộng 51 mã tăng/284 mã giảm cho thấy rủi ro mang tính lan tỏa, không chỉ là nhiễu do một vài cổ phiếu trụ.",
      "Thanh khoản tăng trong một phiên giảm mạnh là tín hiệu cần ưu tiên quản trị rủi ro. Kinh tế Chứng khoán ghi nhận tổng GTGD HOSE hơn 16.961 tỷ đồng, trong đó giao dịch thỏa thuận khoảng 1.709 tỷ đồng; phần khớp lệnh suy ra khoảng 15.252 tỷ đồng, khớp gần như hoàn toàn với số 15.250 tỷ đồng SBBS công bố. Việc đối chiếu này giúp phân biệt tổng GTGD với GTGD khớp lệnh và tránh so sánh sai dữ liệu.",
      "Áp lực bán lan rộng ở nhóm trụ và beta cao. SBBS ghi nhận VIC lấy hơn 7 điểm của VN-Index; ngân hàng xuất hiện dày trong nhóm kéo giảm, còn chứng khoán, hóa chất, công nghệ và bán lẻ là các nhóm yếu. Dầu khí và bảo hiểm là số ít nhóm giữ sức mạnh tương đối, nhưng đây mới là tín hiệu theo dõi chứ chưa phải lý do mua đuổi.",
      "Khối ngoại đảo chiều bán ròng 867 tỷ đồng trên HOSE; STB khoảng 230 tỷ, MBB 141 tỷ và VPB 134 tỷ là ba mã bị bán ròng mạnh nhất, trong khi BSR được mua ròng khoảng 110 tỷ đồng. Dòng vốn ngoại là một lực cản bổ sung nhưng không được dùng độc lập để xác định điểm mua/bán.",
      "Yếu tố trung hạn tích cực vẫn còn: FTSE Russell xác nhận Việt Nam được tái phân loại từ Frontier lên Secondary Emerging, có hiệu lực từ khi thị trường mở cửa ngày 21/09/2026; việc đưa Việt Nam vào FTSE GEIS bắt đầu từ tháng 9/2026 theo lộ trình nhiều đợt. Catalyst này hỗ trợ câu chuyện dòng vốn trung hạn nhưng không phủ nhận tín hiệu giá/độ rộng tiêu cực của phiên 11/09."
    ],
    levels: [
      { label: "Pivot tâm lý", value: "1.800", note: "Mốc 1.800 đã bị đánh mất trong phiên 11/09. Một nhịp hồi chỉ mang tính kỹ thuật nếu không thể đóng lại trên mốc này và cải thiện độ rộng." },
      { label: "Vùng phải lấy lại để mua thăm dò", value: "1.810–1.820", note: "SSI xác định đây là hỗ trợ ngắn hạn đáng tin cậy đến 10/09. Sau khi bị phá ngày 11/09, vùng này trở thành vùng xác nhận/reclaim quan trọng; chỉ xem xét tăng rủi ro khi đóng lại phía trên với độ rộng và thanh khoản đồng thuận." },
      { label: "Vùng kháng cự phục hồi", value: "1.830–1.870", note: "Đây là vùng kháng cự gần SSI nêu trước phiên 11/09. Nếu thị trường hồi lên đây nhưng thanh khoản/độ rộng không cải thiện, ưu tiên hạ trading thay vì mua đuổi." },
      { label: "Vùng phòng thủ dưới", value: "1.760–1.800", note: "Đây là dải hỗ trợ rộng từng được SSI sử dụng trong các nhịp điều chỉnh gần đây. Không bắt đáy cơ học trong vùng; chỉ hành động khi có tín hiệu cân bằng và cổ phiếu leader ngừng phá nền." }
    ],
    playbook: [
      { state: "positive", if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng lại trên 1.810–1.820, số mã tăng vượt số mã giảm, thanh khoản hồi phục lành mạnh và các leader lấy lại nền/điểm pivot", then: "CÓ MUA THĂM DÒ 20–30% vị thế dự kiến, chỉ ở leader có nền cơ bản/tăng trưởng và dòng tiền mạnh. Vùng mua là breakout hoặc retest hợp lệ của từng cổ phiếu sau khi thị trường reclaim 1.810–1.820; stoploss 3–7% theo cấu trúc, target 10–15% hoặc theo kháng cự gần, chỉ nhận deal có R:R tối thiểu 2:1." },
      { state: "neutral", if: "THIẾU XÁC NHẬN — VN-Index hồi nhưng vẫn dưới 1.810–1.820, hoặc lấy lại 1.800 nhưng độ rộng/thanh khoản không cải thiện", then: "CHỜ. Giữ tỷ trọng tiền mặt cao, chỉ giữ các mã có sức mạnh tương đối và nền giá còn nguyên; không mua vì 'đã giảm nhiều', không FOMO dầu khí/nhóm phòng thủ sau nhịp tăng ngắn và không bình quân giá xuống." },
      { state: "risk_off", if: "RISK-OFF — VN-Index tiếp tục tạo đáy thấp hơn dưới vùng 1.795, lực bán/độ rộng xấu không cải thiện và các nhóm leader tiếp tục phá nền", then: "GIẢM RỦI RO phần trading; LOẠI các mã mất nền hoặc chạm stoploss, dừng mở vị thế mới và bảo toàn sức mua. Mọi deal vi phạm stoploss 3–7% phải xử lý theo kỷ luật, không dùng kỳ vọng nâng hạng để trì hoãn cắt lỗ." }
    ],
    focus: "Trọng tâm: reclaim 1.800 rồi 1.810–1.820 • độ rộng 51/284 • thanh khoản tăng trong phiên giảm • khối ngoại −867 tỷ • leader/relative strength • FTSE 21/09 • stoploss 3–7% • R:R ≥ 2:1",
    inference: "Số liệu VN-Index 1.795,21 điểm, giảm 34,02 điểm (-1,86%), KLGD gần 697,7 triệu cổ phiếu, GTGD hơn 16.961 tỷ đồng, độ rộng 51 tăng/284 giảm và mức giảm tuần 57,87 điểm (-3,12%) được lấy từ tường thuật EOD của Kinh tế Chứng khoán ngày 11/09/2026. Số liệu khớp lệnh HOSE khoảng 15.250 tỷ đồng và khối ngoại bán ròng 867 tỷ đồng được đối chiếu với SBBS; phép đối chiếu 16.961 tỷ tổng GTGD trừ khoảng 1.709 tỷ thỏa thuận cho kết quả xấp xỉ 15.252 tỷ, phù hợp sai số làm tròn. Vùng 1.810–1.820 và kháng cự 1.830–1.870 được dẫn từ Bản tin thị trường SSI ngày 10/09/2026; việc coi 1.810–1.820 là vùng cần reclaim sau khi bị phá là diễn giải tác nghiệp, không phải mức bảo đảm. FTSE Russell/LSEG xác nhận tái phân loại Việt Nam lên Secondary Emerging có hiệu lực 21/09/2026 theo lộ trình nhiều đợt. Trạng thái CHỜ / PHÒNG THỦ được suy ra từ tổ hợp giá giảm mạnh, độ rộng rất xấu, thanh khoản tăng và hỗ trợ cũ bị phá; không nội suy dữ liệu thiếu. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; mọi giao dịch cổ phiếu phải có stoploss 3–7% và R:R tối thiểu 2:1.",
    sources: [
      { label: "Kinh tế Chứng khoán — Áp lực bán lan rộng, VN-Index mất hơn 57 điểm sau một tuần", url: "https://kinhtechungkhoan.vn/ap-luc-ban-lan-rong-vn-index-mat-hon-57-diem-sau-mot-tuan" },
      { label: "SBBS — Chứng khoán giảm mạnh nhất gần một tháng", url: "https://sbbs.com.vn/en/thi-truong/tin-tuc-thi-truong/chung-khoan-giam-manh-nhat-gan-mot-thang-ids-01110dc8-ad6e-4338-a0a2-a807172cbd0c" },
      { label: "SBBS — Khối ngoại bán ròng gần 900 tỷ đồng trong phiên VN-Index giảm sâu", url: "https://sbbs.com.vn/en/thi-truong/tin-tuc-thi-truong/khoi-ngoai-thang-tay-ban-rong-gan-900-ty-dong-trong-ngay-vn-index-giam-sau-34-diem-loat-co-phieu-ngan-hang-bi-xa-manh-ids-a21b4e47-b53e-4adf-b42c-b021acf0e0fb" },
      { label: "VnEconomy — Sắc đỏ loang rộng, VN-Index rơi về sát 1.800 điểm", url: "https://vneconomy.vn/sac-do-loang-rong-vn-index-roi-ve-sat-1800-diem-co-phieu-tru-cung-that-thu.htm" },
      { label: "SSI — Bản tin thị trường 10/09/2026: Biến động mạnh", url: "https://www.ssi.com.vn/khach-hang-ca-nhan/ban-tin-thi-truong?page=1" },
      { label: "FTSE Russell/LSEG — March 2026 country classification review", url: "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-results-march-2026-semi-annual-country-classification-review-equities-fixed-income" }
    ]
  };

  store.updated = "2026-09-11";
  const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
  if (existingIndex >= 0) store.entries[existingIndex] = entry;
  else store.entries.unshift(entry);
})();
