/* Daily Market View patch — EOD 19/08/2026. Loaded after daily-insights.js. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  const entry = {
    id: "market-view-20260819",
    date: "2026-08-19",
    publishedAt: "19/08/2026 • Sau phiên",
    edition: "Số 10",
    sentiment: "cautious",
    sentimentLabel: "CHỜ XÁC NHẬN",
    dataStatus: "Đối chiếu đa nguồn • EOD 19.08.2026",
    title: "Chỉ số giảm nhẹ, nội lực suy yếu — tiền chưa trở lại",
    thesis: "VN-Index chỉ giảm 5,33 điểm (-0,31%) xuống 1.726,69 điểm, nhưng chất lượng thị trường yếu hơn mức giảm của chỉ số: HOSE có 214 mã giảm, 95 mã tăng và 52 mã đứng giá theo VNDIRECT; giá trị khớp lệnh chỉ khoảng 10,0 nghìn tỷ đồng, giảm 12,7% so với phiên trước. Khối ngoại bán ròng 711,5 tỷ đồng, trong khi tự doanh mua ròng khớp lệnh khoảng 155,9 tỷ đồng nhưng chưa đủ đối trọng. Dữ liệu breadth của Mirae Asset cho thấy trong Top 200 cổ phiếu thanh khoản cao, 65% giảm và chỉ 22% tăng; tỷ lệ nằm trên MA20/MA50/MA200 lần lượt 47%/30%/31%. Trạng thái tác nghiệp: CHỜ XÁC NHẬN, ưu tiên tiền mặt và cổ phiếu leader có sức mạnh tương đối; không FOMO.",
    author: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    readingTime: "4 phút đọc",
    metrics: [
      { label: "VN-INDEX", value: "1.726,69", change: "−5,33 • −0,31%", tone: "negative" },
      { label: "KHỚP LỆNH HOSE", value: "~10,0 nghìn tỷ", change: "−12,7% so với phiên trước", tone: "warning" },
      { label: "ĐỘ RỘNG HOSE", value: "95 tăng / 214 giảm", change: "52 đứng giá • breadth tiếp tục xấu", tone: "negative" },
      { label: "KHỐI NGOẠI / TỰ DOANH", value: "−711,5 / +155,9 tỷ", change: "ngoại bán ròng • tự doanh mua ròng khớp lệnh", tone: "warning" }
    ],
    backdrop: [
      "Sự phân kỳ giữa chỉ số và nội lực là điểm đáng chú ý nhất: VN-Index chỉ mất 0,31%, nhưng rổ VN30 có 20 mã giảm, 7 mã tăng, 3 mã đứng giá; trên tập Top 200 thanh khoản cao của Mirae Asset, 65% cổ phiếu giảm và chỉ 22% tăng. Đây chưa phải cấu trúc của một nhịp tăng có độ lan tỏa tốt.",
      "Thanh khoản khớp lệnh HOSE chỉ khoảng 10,0 nghìn tỷ đồng, giảm 12,7% so với phiên 18/08. Tổng giá trị giao dịch HOSE là khoảng 14.928,8 tỷ đồng, trong đó giao dịch thỏa thuận chiếm gần 4.901 tỷ đồng; vì vậy nhìn riêng tổng GTGD có thể đánh giá quá cao sức cầu thực trên bảng điện.",
      "Khối ngoại bán ròng 711,5 tỷ đồng, tập trung tại VIC (-136,2 tỷ), STB (-122,5 tỷ) và VPB (-98,6 tỷ); chiều mua ròng nổi bật là VNM (+61,1 tỷ), DGW (+47,7 tỷ) và FRT (+33,3 tỷ). Tự doanh mua ròng khớp lệnh khoảng 155,9 tỷ đồng, nhưng quy mô này nhỏ hơn đáng kể áp lực bán ròng của khối ngoại.",
      "Breadth kỹ thuật vẫn yếu: tỷ lệ cổ phiếu Top 200 nằm trên MA20 chỉ 47%, trên MA50 là 30% và trên MA200 là 31%. Sector rotation của Mirae Asset cho thấy Xăng dầu, Bán lẻ, Dầu khí, Cảng biển và Cao su đang ở trạng thái LEADING; Bất động sản, Chứng khoán và Hóa chất vẫn thuộc nhóm LAGGING. Các leader sức mạnh giá đáng theo dõi gồm DGW, GAS, PVT, VNM và PLX; đây là danh sách theo sức mạnh tương đối, không phải tín hiệu mua tự động.",
      "Phiên kế tiếp 20/08 là ngày Thứ Năm thứ ba của tháng, tức ngày giao dịch cuối cùng của hợp đồng tương lai VN30 tháng 8 theo quy tắc HNX. Vì vậy biến động intraday ở VN30 và nhóm trụ có thể nhiễu hơn bình thường; ưu tiên tín hiệu đóng cửa thay vì phản ứng với nhịp kéo/đạp ngắn trong phiên."
    ],
    levels: [
      { label: "Vùng cân bằng gần", value: "1.720–1.725", note: "Chỉ số đã nhiều lần kiểm định quanh 1.720. Giữ được vùng này chỉ đủ để duy trì trạng thái cân bằng ngắn hạn; chưa phải tín hiệu tăng tỷ trọng nếu thanh khoản và breadth chưa cải thiện." },
      { label: "Vùng hồi để kiểm chứng", value: "1.730–1.750", note: "Nếu chỉ số hồi vào vùng này nhưng khớp lệnh vẫn thấp và số mã giảm tiếp tục áp đảo, ưu tiên cơ cấu mã yếu; không FOMO theo chỉ số." },
      { label: "Vùng xác nhận tích cực", value: "1.750–1.760", note: "Chỉ nâng trạng thái khi VN-Index đóng vượt vùng này đồng thời thanh khoản khớp lệnh hồi phục rõ và độ rộng chuyển sang bên mua; việc chạm mốc trong phiên chưa đủ xác nhận." },
      { label: "Mốc vô hiệu", value: "đóng dưới 1.700", note: "Nếu mất 1.700, hủy view cân bằng ngắn hạn, giảm rủi ro phần trading và chờ thị trường tạo nền mới; không bình quân giá xuống cơ học." }
    ],
    playbook: [
      { if: "VN-Index giữ được 1.720–1.725 nhưng thanh khoản vẫn thấp và breadth chưa cải thiện", then: "GIỮ các leader đang khỏe hơn thị trường nếu cấu trúc riêng còn hợp lệ; chưa tăng tỷ trọng, ưu tiên tiền mặt và loại bỏ dần các mã yếu tương đối." },
      { if: "VN-Index hồi lên 1.730–1.750 nhưng khớp lệnh tiếp tục thấp và số mã giảm vẫn áp đảo", then: "CƠ CẤU các vị thế yếu, không mua đuổi và không dùng margin để đánh cược vào nhịp hồi kỹ thuật." },
      { if: "VN-Index đóng cửa vượt 1.750–1.760 với thanh khoản khớp lệnh hồi phục rõ, độ rộng chuyển sang tăng chiếm ưu thế và leader mở rộng ra nhiều nhóm", then: "NÂNG MỨC XÁC NHẬN; chỉ giải ngân từng phần vào setup riêng có điểm mua hợp lệ, stoploss 3–7% và R/R tối thiểu 2:1." },
      { if: "VN-Index đóng cửa dưới 1.700", then: "GIẢM RỦI RO phần trading, dừng mua mới và chờ một nền cân bằng mới trước khi tái tăng tỷ trọng." }
    ],
    focus: "Trọng tâm: 1.720–1.725 • xác nhận 1.750–1.760 • khớp lệnh HOSE • breadth Top 200 • ngoại bán ròng • leader DGW/GAS/PVT/VNM/PLX • rủi ro đáo hạn phái sinh 20/08",
    inference: "Số liệu chỉ số, độ rộng HOSE, khớp lệnh và giao dịch khối ngoại được đối chiếu với VNDIRECT và các nguồn thị trường độc lập; số liệu tự doanh dùng giá trị khớp lệnh +155,88 tỷ đồng và tổng +156,48 tỷ đồng từ dữ liệu tổng hợp ngày 19/08. Mirae Asset thống kê breadth trên Top 200 mã có GTGD bình quân cao nhất, chiếm trên 95% tổng GTGD thị trường; do đó tỷ lệ 47%/30%/31% trên MA20/MA50/MA200 là chỉ báo nội lực của tập cổ phiếu thanh khoản cao, không phải trị số MA của chính VN-Index. Vùng 1.720–1.725, 1.750–1.760 và mốc 1.700 là mốc tác nghiệp được đối chiếu với nhận định của nhiều CTCK; điều kiện nâng trạng thái luôn yêu cầu đồng thuận thanh khoản và độ rộng. FTSE Russell đã xác nhận Việt Nam được tái phân loại từ Frontier lên Secondary Emerging, hiệu lực từ khi mở cửa ngày 21/09/2026; đây là catalyst trung hạn nhưng không thay thế điều kiện xác nhận dòng tiền ngắn hạn. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
    sources: [
      { label: "VNDIRECT — La bàn thị trường 19/08/2026", url: "https://www.vndirect.com.vn/la-ban-thi-truong-19-08-2026-vn-index-giam-03-sac-do-chiem-uu-the/" },
      { label: "Mirae Asset — Báo cáo PTKT 19/08/2026", url: "https://masvn.com/api/attachment/file/1787132322335-BaoCao_PTKT_20260819_1516.pdf" },
      { label: "VnEconomy — Khối ngoại phiên 19/08", url: "https://vneconomy.vn/khoi-ngoai-ban-rong-deu-tay-hom-nay-xa-them-800-ty.htm" },
      { label: "24HMoney — Giao dịch tự doanh 19/08", url: "https://24hmoney.vn/indices/vn-index/giao-dich-tu-doanh" },
      { label: "HNX — Mẫu hợp đồng tương lai VN30", url: "https://www.upcom.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html" },
      { label: "FTSE Russell/LSEG — Vietnam reclassification", url: "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-results-march-2026-semi-annual-country-classification-review-equities-fixed-income" }
    ]
  };

  store.updated = "2026-08-19";
  const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
  if (existingIndex >= 0) store.entries[existingIndex] = entry;
  else store.entries.unshift(entry);
})();
