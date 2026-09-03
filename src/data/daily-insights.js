/*
 * DAILY MARKET VIEW — cách cập nhật
 * 1) Sao chép một phần tử trong `entries`.
 * 2) Đổi `id`, `date` và nội dung; giữ ngày theo chuẩn YYYY-MM-DD.
 * 3) Đặt bản mới ở bất kỳ vị trí nào: website luôn tự sắp xếp mới nhất lên đầu.
 * 4) Chỉ nhập số liệu đã xác minh và luôn bổ sung đường dẫn trong `sources`.
 */
window.DAILY_MARKET_INSIGHTS = {
  updated: "2026-09-03",
  entries: [
    {
      id: "market-view-20260903",
      date: "2026-09-03",
      publishedAt: "03/09/2026 • Sau phiên",
      edition: "Số 10",
      sentiment: "watch",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "HOSE + VNDIRECT Finfo + CafeF • EOD 03.09.2026",
      title: "VN-Index hồi cuối phiên nhưng độ rộng yếu, chưa nên mua đuổi",
      thesis: "VN-Index giảm 4,40 điểm (-0,24%) còn 1.827,72 sau khi có lúc lùi về 1.802,11. Điểm số được VIC nâng đỡ đáng kể trong khi VN30 giảm 1,08%, độ rộng VNDIRECT nghiêng mạnh về bên giảm và khối ngoại bán ròng khoảng 1.531 tỷ đồng trên HoSE. Trạng thái tác nghiệp: THẬN TRỌNG, giữ tỷ trọng vừa phải và không mua đuổi; chỉ nâng rủi ro khi vùng 1.830–1.850 được hấp thụ với độ rộng và thanh khoản cải thiện.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "2 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.827,72", change: "−4,40 • −0,24%", tone: "warning" },
        { label: "GTGD HOSE", value: "17.464,38 tỷ", change: "Khớp lệnh toàn sàn khoảng 14.696 tỷ", tone: "neutral" },
        { label: "ĐỘ RỘNG VNDIRECT", value: "90 tăng / 234 giảm", change: "49 đứng giá • áp lực bán chiếm ưu thế", tone: "warning" },
        { label: "KHỐI NGOẠI HOSE", value: "BÁN RÒNG", change: "Khoảng −1.531 tỷ đồng", tone: "warning" }
      ],
      backdrop: [
        "VN-Index có lúc giảm về 1.802,11 nhưng hồi lại 1.827,72 vào cuối phiên. Tuy nhiên VN30 giảm 1,08% và chỉ 6/30 mã tăng theo thống kê thị trường, cho thấy sức khỏe nhóm vốn hóa lớn yếu hơn mức giảm của VN-Index.",
        "VIC tăng khoảng 3,6% và riêng mã này được Báo Đầu tư ước tính kéo hơn 13 điểm cho VN-Index; vì vậy mức giảm 0,24% của chỉ số che bớt áp lực bán thực tế ở ngân hàng và chứng khoán.",
        "Dầu khí và phân bón giữ sức mạnh tương đối tốt hơn; ngược lại nhóm tài chính chịu áp lực rõ. Khối ngoại bán ròng khoảng 1.531 tỷ đồng trên HoSE, tập trung ở nhiều cổ phiếu vốn hóa lớn."
      ],
      levels: [
        { label: "Vùng phòng thủ ngắn hạn", value: "1.800–1.805", note: "Mốc 1.802,11 là đáy thực tế phiên 03/09. Nếu đóng cửa thủng vùng này, ưu tiên giảm rủi ro trading và không bình quân giá xuống cơ học." },
        { label: "Vùng cung / xác nhận", value: "1.830–1.850", note: "Đây là vùng áp lực cung đã được các bên phân tích cảnh báo trước phiên. Chỉ nâng mức xác nhận khi giá vượt vùng với độ rộng và thanh khoản cải thiện, không chỉ nhờ một vài cổ phiếu trụ." },
        { label: "Mốc đóng cửa", value: "1.827,72", note: "Đứng ngay dưới vùng 1.830–1.850; do độ rộng yếu và khối ngoại bán ròng mạnh, chưa đủ cơ sở để chuyển sang trạng thái mua chủ động toàn thị trường." }
      ],
      playbook: [
        { if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.850, đồng thời độ rộng và thanh khoản cùng cải thiện; không xuất hiện VETO rủi ro mới", then: "NÂNG DẦN TỶ TRỌNG ở cổ phiếu dẫn dắt/setup đã xác nhận; chia lệnh và không mua đuổi." },
        { if: "CHƯA XÁC NHẬN / ĐI NGANG — VN-Index vẫn giữ trên vùng 1.800–1.805 nhưng chưa đủ điều kiện xác nhận vượt 1.850, hoặc độ rộng/thanh khoản chưa đồng thuận", then: "GIỮ TỶ TRỌNG VỪA PHẢI, tiếp tục nắm mã khỏe; chỉ thăm dò setup có R:R tốt và không mua đuổi." },
        { if: "MẤT MỐC PHÒNG THỦ / RISK-OFF — VN-Index đóng dưới 1.800 hoặc xuyên đáy 1.802,11 với áp lực bán mở rộng / xuất hiện VETO rõ", then: "GIẢM PHẦN TRADING, dừng bắt đáy sớm và không bình quân giá xuống khi chưa có tín hiệu hấp thụ cung." }
      ],
      focus: "1.800–1.805 • vùng cung 1.830–1.850 • độ rộng • khối ngoại • ngân hàng/chứng khoán yếu • dầu khí/phân bón có sức mạnh tương đối",
      inference: "Số liệu chỉ số và giá trị giao dịch lấy từ điểm tin giao dịch HOSE ngày 03/09/2026; VN-Index 1.827,72, VN30 1.961,57 và GTGD VN-Index 17.464,38 tỷ đồng. Website tiếp tục dùng độ rộng VNDIRECT đã khóa cho cùng phiên là 90 tăng, 49 đứng giá, 234 giảm để nhất quán với marketSession; Báo Đầu tư ghi nhận độ rộng HoSE 93 tăng/236 giảm nên không hòa giải hai universe bằng suy đoán. Đáy phiên 1.802,11, diễn biến VIC, nhóm ngành và khối ngoại được đối chiếu với Báo Đầu tư/CafeF. Không bổ sung MA, basis phái sinh hoặc số liệu tự doanh vì chưa tái lập đủ nguồn trong lần cập nhật này. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán.",
      sources: [
        { label: "VNDIRECT Finfo — chỉ số & độ rộng EOD 03/09/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-03&size=500" },
        { label: "HOSE — Điểm tin giao dịch ngày 03/09/2026 (CafeF đăng lại)", url: "https://cafef.vn/du-lieu/hose-2968500/hose-diem-tin-giao-dich-ngay-03092026.chn" },
        { label: "Báo Đầu tư — Chứng khoán phiên 3/9", url: "https://baodautu.vn/chung-khoan-phien-39-co-phieu-dau-khi-phan-bon-di-nguoc-chieu-trong-vn-index-phien-dieu-chinh-d693163.html" },
        { label: "CafeF — Khối ngoại bán ròng gần 1.500 tỷ đồng", url: "https://cafef.vn/khoi-ngoai-dot-ngot-ban-rong-gan-1500-ty-dong-phien-dau-thang-9-xa-manh-loat-co-phieu-ngan-hang-188260903152131269.chn" },
        { label: "Vietstock — vùng 1.830–1.850 trước phiên 03/09", url: "https://en.vietstock.vn/2026/09/vn-index-may-reach-1850-points-after-long-holidays-36-642320.htm" }
      ]
    },
    {
    id: "market-view-20260818",
    date: "2026-08-18",
    publishedAt: "18/08/2026 • Sau phiên",
    edition: "Số 09",
    sentiment: "watch",
    sentimentLabel: "CHỜ XÁC NHẬN",
    dataStatus: "VNDIRECT Finfo • EOD 18.08.2026",
    title: "VN-Index tăng nhẹ, độ rộng vẫn nghiêng về bên giảm",
    thesis: "Kết phiên 18/08/2026, VN-Index tăng 4,56 điểm (+0,26%) lên 1.732,02 điểm. Chỉ số dao động 1.724,33–1.750,86 điểm nhưng đóng cửa thấp hơn đáng kể so với đỉnh phiên; độ rộng HOSE gồm 124 mã tăng, 163 mã giảm và 76 mã đứng giá. VN30 giảm 0,08% trong khi HNX-Index tăng 1,32%, cho thấy trạng thái phân hóa. Giá trị giao dịch HOSE đạt khoảng 14.872,43 tỷ đồng, trong đó khớp lệnh khoảng 11.484,33 tỷ đồng. Trạng thái tác nghiệp: CHỜ XÁC NHẬN, không mua đuổi.",
    author: "Xuân Lê TVS",
    role: "Môi giới và tư vấn đầu tư",
    readingTime: "3 phút đọc",
    metrics: [
      { label: "VN-INDEX", value: "1.732,02", change: "+4,56 • +0,26%", tone: "positive" },
      { label: "GTGD HOSE", value: "14.872,43 tỷ", change: "Khớp lệnh 11.484,33 tỷ", tone: "neutral" },
      { label: "ĐỘ RỘNG HOSE", value: "124 tăng / 163 giảm", change: "76 đứng giá • 5 trần • 4 sàn", tone: "warning" },
      { label: "VN30 / HNX", value: "−0,08% / +1,32%", change: "Phân hóa giữa nhóm vốn hóa lớn và HNX", tone: "warning" }
    ],
    backdrop: [
      "VN-Index mở cửa 1.727,62 điểm, cao nhất 1.750,86, thấp nhất 1.724,33 và đóng cửa 1.732,02; mức đóng cửa thấp hơn đỉnh phiên 18,84 điểm.",
      "Độ rộng HOSE nghiêng về phía giảm với 163 mã giảm so với 124 mã tăng; số mã trần/sàn theo snapshot chỉ số là 5/4. Vì vậy mức tăng 0,26% của chỉ số chưa đi kèm xác nhận độ rộng.",
      "VN30 giảm 1,54 điểm xuống 1.876,14 trong khi HNX-Index tăng 3,68 điểm lên 282,32; diễn biến này cho thấy dòng tiền và sức mạnh giá phân hóa giữa các nhóm thị trường."
    ],
    levels: [
      { label: "Biên dưới phiên 18/08", value: "1.724,33", note: "Đây là đáy thực tế của phiên 18/08, dùng làm mốc vô hiệu ngắn hạn cho kế hoạch tác nghiệp; không suy diễn thành hỗ trợ dài hạn." },
      { label: "Mốc đóng cửa", value: "1.732,02", note: "Giữ trên mức đóng cửa này cùng độ rộng cải thiện mới củng cố trạng thái; bản thân việc đứng trên 1.732,02 chưa đủ để nâng tín hiệu." },
      { label: "Biên trên phiên 18/08", value: "1.750,86", note: "Chỉ xem là xác nhận tốt hơn nếu chỉ số đóng vượt biên trên và độ rộng/thanh khoản đồng thuận; không mua đuổi chỉ vì chạm mốc trong phiên." }
    ],
    playbook: [
      { if: "VN-Index duy trì trên 1.732,02 và độ rộng chuyển sang số mã tăng lớn hơn số mã giảm", then: "TIẾP TỤC GIỮ các vị thế đã có tín hiệu hợp lệ; chỉ xem xét entry mới theo đúng vùng/ngưỡng riêng của từng mã, không mua đuổi." },
      { if: "VN-Index đóng cửa vượt 1.750,86 với độ rộng và thanh khoản cùng xác nhận", then: "NÂNG MỨC XÁC NHẬN nhưng vẫn giải ngân theo từng setup; không chuyển thành mua toàn thị trường." },
      { if: "VN-Index đóng cửa dưới 1.724,33", then: "GIẢM RỦI RO phần trading và đánh giá lại các setup ngắn hạn; không tự động bình quân giá xuống." }
    ],
    focus: "Mốc 1.724,33–1.750,86 • độ rộng HOSE • phân hóa VN30/HNX • ưu tiên setup riêng, không mua đuổi",
    inference: "Giá chỉ số, OHLC, giá trị giao dịch và độ rộng lấy trực tiếp từ snapshot VNDIRECT Finfo ngày 18/08/2026 lúc 15:08:07. Endpoint dự phòng VNDIRECT finfo-api không kết nối được trong lần kiểm chứng và nguồn vietstock.info bị Cloudflare chặn, vì vậy bản này không tự bổ sung số liệu khối ngoại, MA hay thanh khoản bình quân chưa tái lập được. Các mốc 1.724,33 và 1.750,86 chỉ là đáy/đỉnh thực tế của phiên 18/08 được dùng làm mốc IF–THEN ngắn hạn, không phải vùng hỗ trợ/kháng cự dài hạn suy đoán. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
    sources: [
      { label: "VNDIRECT Finfo — chỉ số & độ rộng EOD 18/08/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-08-18&size=500" },
      { label: "DNSE OpenAPI — tài liệu OHLC cho chỉ số thị trường", url: "https://developers.dnse.com.vn/docs/dnse/get-ohlc-history/" }
    ]
  },
    {
      id: "market-view-20260812",
      date: "2026-08-12",
      publishedAt: "12/08/2026 • Sau phiên",
      edition: "Số 08",
      sentiment: "watch",
      sentimentLabel: "CHỜ XÁC NHẬN",
      dataStatus: "Dữ liệu đối chiếu • EOD 12.08.2026",
      title: "Hồi phục mạnh, thanh khoản chưa xác nhận",
      thesis: "VN-Index tăng 19,77 điểm (+1,11%) lên 1.793,18 điểm và lấy lại SMA20, SMA200. Tín hiệu kỹ thuật cải thiện rõ, nhưng tổng giá trị giao dịch HOSE chỉ đạt 14.041,15 tỷ đồng, giảm 12,28% so với phiên 11/08 và thấp hơn 21,41% so với bình quân 20 phiên. Chỉ số đã đi vào vùng cung tác nghiệp 1.775–1.810 trong khi dòng tiền chưa xác nhận; trạng thái phù hợp là CHỜ XÁC NHẬN, không mua đuổi theo nhịp tăng.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.793,18", change: "+19,77 • +1,11%", tone: "positive" },
        { label: "GTGD HOSE", value: "14.041,15 tỷ", change: "−12,28% phiên trước • −21,41% BQ20", tone: "warning" },
        { label: "KHỐI NGOẠI HOSE", value: "MUA RÒNG", change: "+283,1 tỷ CafeF • +315,5 tỷ Simplize", tone: "positive" },
        { label: "VN30F1M", value: "1.940,0", change: "basis +3,54 so với VN30", tone: "positive" }
      ],
      backdrop: [
        "Theo chuỗi giá đóng cửa VNDIRECT, VN-Index đứng trên SMA20 (1.742,36), EMA50 (1.786,21) và SMA200 (1.774,91), nhưng vẫn thấp hơn SMA50 (1.796,36) khoảng 3,18 điểm. Vì vậy website không dùng cách diễn đạt ‘vượt MA50’ nếu không chỉ rõ phương pháp tính.",
        "Dầu khí – năng lượng đồng thuận tăng: GAS +3,23%, BSR +1,73%, PVD +2,75%, PVS +1,71% và PVT +2,03%. KCN – cao su có BCM tăng trần 6,93% và GVR +2,71%.",
        "VIC +3,36% và VHM +2,36% hỗ trợ nhóm vốn hóa lớn. Bán lẻ có MWG +1,09%, FRT +1,02% và PNJ +0,57%; ngân hàng phân hóa khi TCB, HDB tăng nhưng VCB, CTG, STB, SHB và MSB giảm. Khối ngoại quay lại mua ròng; VN30F1M đóng cao hơn VN30 3,54 điểm."
      ],
      levels: [
        { label: "Vùng giữ nhịp", value: "1.775–1.783", note: "Giữ được 1.780–1.783 thì tiếp tục nắm leader đang có; rung về vùng này chỉ xem xét thăm dò khi cầu hấp thụ rõ." },
        { label: "Vùng cung / xác nhận", value: "1.800–1.810", note: "Không mua đuổi nếu thanh khoản vẫn yếu. Chỉ nâng trạng thái khi đóng trên 1.810, thanh khoản tối thiểu bằng bình quân 20 phiên — hiện là 17.866,92 tỷ đồng — và độ rộng cùng xác nhận." },
        { label: "Mốc vô hiệu ngắn hạn", value: "đóng dưới 1.770", note: "Mất 1.780 thì giảm phần trading; đóng dưới 1.770 thì hủy view tăng ngắn hạn." }
      ],
      playbook: [
        { if: "VN-Index giữ được 1.780–1.783", then: "TIẾP TỤC GIỮ các cổ phiếu dẫn dắt đang có; không tăng tỷ trọng chỉ vì chỉ số tăng." },
        { if: "Chỉ số rung về 1.775–1.783 và lực cầu hấp thụ tốt", then: "Chỉ xem xét THĂM DÒ RẤT NHỎ ở mã có cấu trúc riêng phù hợp; không suy diễn thành tín hiệu mua toàn thị trường." },
        { if: "Chỉ số lên 1.800–1.810 nhưng thanh khoản vẫn yếu", then: "TUYỆT ĐỐI KHÔNG MUA ĐUỔI. Chỉ chuyển sang mua xác nhận khi đóng trên 1.810, thanh khoản đạt ít nhất bình quân 20 phiên và độ rộng đồng thuận." },
        { if: "VN-Index mất 1.780; đặc biệt đóng cửa dưới 1.770", then: "GIẢM phần trading; đóng dưới 1.770 thì hủy view tăng ngắn hạn và đánh giá lại trạng thái." }
      ],
      focus: "Trọng tâm: phản ứng 1.775–1.783 • thanh khoản tại 1.800–1.810 • độ rộng • dầu khí/KCN • ảnh hưởng VIC, VHM • mốc vô hiệu 1.770",
      inference: "Giá chỉ số, tổng giá trị giao dịch, độ rộng, giá cổ phiếu và phái sinh lấy từ dữ liệu EOD VNDIRECT; bình quân 20 phiên là trung bình số học của tổng giá trị giao dịch từ 16/07 đến 12/08; mức basis được tính bằng 1.940,0 − 1.936,46 = +3,54 điểm. Dữ liệu khối ngoại giữa các nhà cung cấp không trùng tuyệt đối: CafeF ghi mua ròng 283,1 tỷ đồng, Simplize ghi 315,5 tỷ đồng; website giữ nguyên cả hai số và chỉ kết luận cùng chiều là mua ròng, không sử dụng mức 254 tỷ đồng chưa tái lập được. SMA/EMA được tính lại từ chuỗi giá đóng cửa không điều chỉnh qua 12/08/2026; do SMA50 ở 1.796,36, câu ‘vượt MA50’ trong bản nháp được hiệu chỉnh để không tạo dữ liệu sai. Vùng cung, điều kiện IF–THEN và trạng thái CHỜ XÁC NHẬN là kế hoạch tác nghiệp của Xuân Lê TVS. Thị trường khỏe hơn không đồng nghĩa mua ở bất kỳ giá nào; chờ đúng điểm vẫn quan trọng hơn đoán đúng hướng. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      sources: [
        { label: "VNDIRECT — Chỉ số & thanh khoản EOD", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX,VN30~date:2026-08-11,2026-08-12&size=20" },
        { label: "VNDIRECT — VN30F1M EOD", url: "https://api-finfo.vndirect.com.vn/v4/derivative_prices?sort=code&q=code:41I1G8000~date:2026-08-12&size=10" },
        { label: "VNDIRECT — Giá nhóm cổ phiếu đối chiếu", url: "https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=code&q=code:GAS,BSR,PVD,PVS,PVT,BCM,GVR,VIC,VHM,MWG,FRT,PNJ~date:2026-08-12&size=100" },
        { label: "CafeF — Khối ngoại EOD", url: "https://cafef.vn/du-lieu/Ajax/PageNew/DataHistory/GDKhoiNgoai.ashx?Symbol=VNINDEX&Exchange=HOSE&StartDate=08%2F12%2F2026&EndDate=08%2F12%2F2026&PageIndex=1&PageSize=20" },
        { label: "Simplize — Khối ngoại 10 phiên", url: "https://api.simplize.vn/api/historical/foreign/trade/VNINDEX?type=index" }
      ]
    },
    {
      id: "market-view-20260807",
      date: "2026-08-07",
      publishedAt: "07/08/2026 • Sau phiên",
      edition: "Số 07",
      sentiment: "cautious",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "TVS Research • EOD 07.08.2026",
      title: "Hồi phục thận trọng, chờ kiểm định vùng 1.750",
      thesis: "VN-Index tăng 3,18 điểm (+0,19%) lên 1.768,1 điểm sau hai phiên giảm; giá trị giao dịch HOSE cải thiện nhưng chỉ số vẫn giằng co quanh 1.770 và đóng cửa dưới SMA200 tại 1.774. TVS duy trì quan điểm THẬN TRỌNG, đánh giá chỉ số có khả năng kiểm định lại vùng 1.750; ưu tiên đưa tỷ trọng cổ phiếu về mức an toàn và không mua đuổi trong các nhịp hồi.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "3 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.768,1", change: "+3,18 • +0,19%", tone: "positive" },
        { label: "GTGD HOSE", value: "18.141 tỷ", change: "+18,4% so với phiên trước", tone: "positive" },
        { label: "KHỚP LỆNH HOSE", value: "14.517 tỷ", change: "+14,9% so với phiên trước", tone: "positive" },
        { label: "KHỐI NGOẠI HSX", value: "−75 tỷ", change: "bán ròng; tập trung VHM, TCB, VPB", tone: "negative" }
      ],
      backdrop: [
        "Lực kéo đầu phiên đến từ nhóm Năng lượng (GAS, BSR, PLX) và Ngân hàng quốc doanh (BID, CTG), nhưng áp lực bán ở nhóm Vingroup khiến chỉ số tiếp tục giằng co quanh 1.770 điểm.",
        "Thanh khoản cải thiện: khối lượng HOSE đạt khoảng 661 triệu cổ phiếu, tăng 13,4%; giá trị giao dịch đạt 18.141 tỷ đồng, tăng 18,4% so với phiên trước.",
        "Ngân hàng đóng góp tích cực khoảng 7,9 điểm; Điện, nước & xăng dầu khí đốt đóng góp 3,1 điểm và Dầu khí đóng góp 2,0 điểm. Bất động sản lấy đi khoảng 13,3 điểm; khối ngoại bán ròng 75 tỷ đồng."
      ],
      levels: [
        { label: "Hỗ trợ cần kiểm định", value: "quanh 1.750", note: "Vùng hỗ trợ TVS đánh giá VN-Index có khả năng quay lại kiểm định trong các phiên tiếp theo." },
        { label: "Vùng cần lấy lại", value: "1.774–1.800", note: "SMA200 nằm tại 1.774 điểm theo bảng kỹ thuật chi tiết; 1.800 là kháng cự tham chiếu trong báo cáo. Chỉ số đóng cửa tại 1.768,1 điểm, vẫn dưới vùng này." }
      ],
      playbook: [
        { if: "VN-Index kiểm định 1.750 nhưng giữ được vùng này, áp lực bán không mở rộng và độ rộng dần cân bằng", then: "TIẾP TỤC QUAN SÁT; duy trì tỷ trọng kiểm soát, chỉ xem xét mã có vùng mua và điều kiện riêng đã được xác nhận; không mua đuổi theo nhịp hồi." },
        { if: "Chỉ số đóng cửa dưới 1.750 hoặc áp lực bán từ nhóm vốn hóa lớn và khối ngoại gia tăng", then: "GIẢM RỦI RO; đưa tỷ trọng cổ phiếu về mức an toàn, dừng mua mới và chờ thị trường thiết lập lại trạng thái cân bằng." }
      ],
      focus: "Trọng tâm: phản ứng quanh 1.750 • vùng 1.774–1.800 • Vingroup/BĐS • bán ròng VHM, TCB, VPB • Năng lượng và Ngân hàng quốc doanh",
      inference: "Giá đóng cửa, thanh khoản, dòng vốn ngoại, đóng góp ngành và quan điểm kiểm định 1.750 được lấy từ báo cáo TVS ngày 07/08/2026. Bảng tổng quan ghi MA(20) tại 1.774 điểm, trong khi bảng kỹ thuật chi tiết trang 4 ghi SMA20 tại 1.745 và SMA200 tại 1.774; website sử dụng bảng kỹ thuật chi tiết và không diễn giải 1.774 là MA20. Điều kiện IF–THEN là kế hoạch tác nghiệp của Xuân Lê TVS, không phải tín hiệu mua tự động hay cam kết lợi nhuận.",
      sources: [
        { label: "TVS Research 07.08 — PDF gốc", url: "reports/TVS_Market_Report_2026-08-07.pdf" }
      ]
    },
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
