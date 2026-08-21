/* Daily Market View patch — EOD 21/08/2026. Loaded after the 19/08 patch. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  const entry = {
    id: "market-view-20260821",
    date: "2026-08-21",
    publishedAt: "21/08/2026 • Sau phiên",
    edition: "Số 11",
    sentiment: "watch",
    sentimentLabel: "KHỎE • CHỜ ĐIỂM MUA",
    dataStatus: "Snapshot EOD tác giả • đối chiếu nguồn công khai 21.08.2026",
    title: "Tiền đã quay lại — giữ leader, không mua đuổi sát vùng cản",
    thesis: "Kết phiên 21/08/2026, VN-Index tăng 33,88 điểm (+1,95%) lên 1.768,12 điểm. Chất lượng hồi phục cải thiện rõ: HOSE có 263 mã tăng và 70 mã giảm; giá trị khớp lệnh phục hồi khoảng 15.500 tỷ đồng từ mức dưới 10.000 tỷ đồng của phiên liền trước; khối ngoại đảo chiều mua ròng nhẹ hơn 39 tỷ đồng. Dòng tiền lan tỏa từ chứng khoán, ngân hàng sang bất động sản và công nghệ, thay vì chỉ dựa vào một vài trụ. Tuy nhiên, chỉ số đã áp sát vùng cung 1.770–1.790; trạng thái tác nghiệp là GIỮ LEADER / CHỜ ĐIỂM MUA, tuyệt đối không mua đuổi cuối phiên.",
    author: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    readingTime: "4 phút đọc",
    metrics: [
      { label: "VN-INDEX", value: "1.768,12", change: "+33,88 • +1,95%", tone: "positive" },
      { label: "ĐỘ RỘNG HOSE", value: "263 tăng / 70 giảm", change: "Độ lan tỏa cải thiện rõ", tone: "positive" },
      { label: "KHỚP LỆNH HOSE", value: "~15.500 tỷ", change: "Phục hồi từ <10.000 tỷ phiên trước", tone: "positive" },
      { label: "KHỐI NGOẠI / VN30F1M", value: "+~39 tỷ / 1.934,2", change: "Basis VN30F1M +6,41 điểm", tone: "positive" }
    ],
    backdrop: [
      "Điểm tích cực nhất không chỉ là mức tăng 1,95% của VN-Index mà là sự đồng thuận tốt hơn giữa giá, độ rộng và thanh khoản. Với 263 mã tăng so với 70 mã giảm cùng khớp lệnh khoảng 15.500 tỷ đồng, chất lượng hồi phục tốt hơn đáng kể so với trạng thái thanh khoản thấp của phiên liền trước.",
      "Dòng tiền có tính lan tỏa: nhóm chứng khoán dẫn sóng với SSI, VIX, VND và VCI tăng mạnh; ngân hàng có SHB, MBB, VPB và ACB nổi bật, trong khi bất động sản và công nghệ cũng tham gia. Đây là tín hiệu tốt hơn một phiên chỉ số tăng nhờ một vài cổ phiếu trụ, nhưng sức mạnh nhóm ngành không đồng nghĩa mọi mã đều có điểm mua hợp lệ.",
      "Khối ngoại đảo chiều mua ròng nhẹ hơn 39 tỷ đồng. Trên phái sinh, VN30F1M đóng 1.934,2 điểm với basis +6,41 điểm và trạng thái giao dịch khối ngoại nghiêng về phía mua theo snapshot EOD; premium dương là tín hiệu tâm lý tích cực hơn nhưng không đủ để thay thế xác nhận ở thị trường cơ sở.",
      "Về kỹ thuật tác nghiệp, vùng 1.770–1.790 nằm ngay phía trên mức đóng cửa 1.768,12. Báo cáo chiến lược trước phiên trong tuần cũng xem vùng 1.755–1.780 là khu vực kiểm định/kháng cự gần; vì vậy tỷ lệ lợi nhuận kỳ vọng nếu mua đuổi ngay sát cản không còn hấp dẫn so với rủi ro rung lắc.",
      "Bối cảnh trung hạn tiếp tục được hỗ trợ bởi câu chuyện nâng hạng: FTSE Russell đã xác nhận Việt Nam chuyển từ Frontier lên Secondary Emerging, hiệu lực từ khi mở cửa ngày 21/09/2026. Báo cáo BVSC tháng 4/2026 lưu ý thay đổi cổ phiếu thành phần FTSE dự kiến được công bố ngày 21/08/2026; đây là catalyst cần theo dõi, nhưng không được dùng để hợp thức hóa việc FOMO ở vùng giá không còn đủ biên an toàn."
    ],
    levels: [
      { label: "Vùng thăm dò khi rung", value: "1.752–1.760", note: "Chỉ xem xét thăm dò khi thị trường điều chỉnh về vùng này, cung suy yếu và các cổ phiếu leader vẫn giữ cấu trúc/nền giá. Không mua chỉ vì chỉ số chạm vùng." },
      { label: "Vùng cung gần", value: "1.770–1.790", note: "VN-Index đóng 1.768,12 nên biên tăng đến vùng cung gần không còn rộng. Ưu tiên giữ vị thế tốt đã có thay vì mở mới bằng cách mua đuổi." },
      { label: "Kịch bản kéo thẳng", value: "1.780–1.800", note: "Nếu chỉ số tăng thẳng vào vùng này mà không có nhịp tái tích lũy, KHÔNG FOMO; chờ điểm mua mới hoặc nền giá mới trên từng cổ phiếu." },
      { label: "Mốc giảm trading / vô hiệu", value: "1.750 / 1.735", note: "Mất 1.750 thì giảm phần trading; nếu VN-Index đóng cửa dưới 1.735 thì hủy view tăng ngắn hạn và đánh giá lại toàn bộ trạng thái." }
    ],
    playbook: [
      { if: "VN-Index rung về 1.752–1.760, lực cung cạn dần và leader vẫn giữ nền", then: "CHỈ THĂM DÒ NHỎ ở setup riêng có điểm mua rõ; stoploss 3–7% và R/R tối thiểu 2:1. Không suy diễn thành tín hiệu mua toàn thị trường." },
      { if: "VN-Index kéo thẳng lên 1.780–1.800", then: "KHÔNG MUA ĐUỔI, KHÔNG FOMO. Tiếp tục giữ leader còn xu hướng tốt, không tăng margin chỉ vì chỉ số xanh mạnh." },
      { if: "VN-Index mất 1.750", then: "GIẢM phần trading, siết quản trị rủi ro và ưu tiên loại các mã yếu tương đối; không bình quân giá xuống cơ học." },
      { if: "VN-Index đóng cửa dưới 1.735", then: "HỦY VIEW TĂNG ngắn hạn, dừng mua mới và chờ thị trường thiết lập lại nền cân bằng trước khi tăng tỷ trọng." }
    ],
    focus: "Trọng tâm: 1.752–1.760 • cung 1.770–1.790 • không FOMO 1.780–1.800 • mốc 1.750/1.735 • breadth HOSE • thanh khoản • chứng khoán/ngân hàng • VN30F1M basis +6,41 • FTSE",
    inference: "Các số liệu phiên 21/08 gồm VN-Index, độ rộng HOSE, giá trị khớp lệnh, giao dịch khối ngoại, VN30F1M/basis và diễn biến nhóm ngành được khóa theo snapshot EOD của tác giả. Trong quá trình đối chiếu tại thời điểm phát hành, các nguồn web công khai chưa đồng bộ đầy đủ dữ liệu EOD 21/08/2026 và công cụ tìm kiếm còn trả về nhiều bài có tiêu đề 21/08 nhưng nội dung thực tế thuộc năm 2025; các kết quả sai niên độ này đã bị loại, không dùng để 'xác nhận' số liệu 2026. VNDIRECT và HNX được gắn làm địa chỉ đối chiếu dữ liệu thị trường; các báo cáo CTCK dùng cho bối cảnh vùng cản/thanh khoản; FTSE Russell/LSEG và BVSC dùng cho bối cảnh nâng hạng. Các vùng 1.752–1.760, 1.770–1.790, 1.780–1.800, 1.750 và 1.735 là mốc tác nghiệp của tác giả, không phải mức đảm bảo. Mọi entry cổ phiếu phải có stoploss 3–7% và R/R tối thiểu 2:1. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
    sources: [
      { label: "VNDIRECT Dstock — dữ liệu lịch sử thị trường", url: "https://dstock.vndirect.com.vn/du-lieu-thi-truong/lich-su-gia" },
      { label: "HNX — thị trường hợp đồng tương lai", url: "https://www.vpdt.hnx.vn/vi-vn/m-phai-sinh/hop-dong-tuong-lai-cscp.html" },
      { label: "VPBankS — Chiến lược đầu tư tuần 17–21/08/2026", url: "https://www.vpbanks.com.vn/trung-tam-phan-tich/bao-cao-chien-luoc-dau-tu-tuan-17082026-21082026" },
      { label: "Tin nhanh Chứng khoán — nhận định trước phiên 20/08/2026", url: "https://m.tinnhanhchungkhoan.vn/nhan-dinh-thi-truong-phien-giao-dich-ngay-208-duy-tri-ty-trong-o-muc-trung-binh-post396178.amp" },
      { label: "FTSE Russell/LSEG — xác nhận nâng hạng Việt Nam", url: "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-results-march-2026-semi-annual-country-classification-review-equities-fixed-income" },
      { label: "BVSC — Cập nhật nâng hạng thị trường 04/2026", url: "https://static1.vietstock.vn/edocs/19709/Nanghangthitruong_BVSC_20260408.pdf" }
    ]
  };

  store.updated = "2026-08-21";
  const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
  if (existingIndex >= 0) store.entries[existingIndex] = entry;
  else store.entries.unshift(entry);
})();
