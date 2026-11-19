/* Nhận định phiên 18/11/2026, dùng khuôn cũ; không thay HTML/CSS hay thuật toán dừng lỗ. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261118",
  "date": "2026-11-18",
  "publishedAt": "18/11/2026 • Sau phiên",
  "edition": "Bản ngày 18/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 18/11 đã khóa 136/136 mã, 132/136 giá khớp CafeF trực tiếp; DDV/MSR/PHP/SIP lệch CafeF được KBS đối chiếu. VNINDEX 1.703,01 (−1,37%) HOSE/VNIndex.ai/VNDIRECT; KHỚP HOSE toàn sàn 11.247 tỷ theo HOSE (VTV chỉ làm tròn), VNSignal 11.156,59 tỷ thuộc rổ VNINDEX KHÁC phạm vi. Độ rộng 61 tăng/267 giảm/49 tham chiếu theo VNDIRECT, VISC đối chiếu 61/267. CHẾ ĐỘ RÚT GỌN: thiếu chuỗi KHỚP đủ kỳ cho TB20 và phiên phân phối/25; MA200, ngoại KHỚP và Sổ gốc chưa xác minh. Giá thấp 18/11 giữa nguồn lệch, không dùng mốc thấp.",
  "title": "Mất vùng 1.714 điểm, sức bán lan rộng: ưu tiên bảo toàn vốn",
  "thesis": "VN-Index ngày 18/11 đóng 1.703,01, giảm 23,71 điểm (−1,37%); VN30 −1,67%, VNMID −0,94%, VNSML −1,20% theo HOSE. Độ rộng tập cổ phiếu VNDIRECT HOSE 61 tăng/267 giảm/49 tham chiếu, tỷ lệ 0,228. HOSE ghi khớp toàn sàn 11.247 tỷ, không gồm thỏa thuận 6.297 tỷ; bảng VNSignal rổ VNINDEX ghi 11.156,59 tỷ khác phạm vi. Giá dưới MA20 1.738,71 và MA50 1.752,97, MA20 vẫn dốc lên +5,58 điểm/5 phiên. Năm mã kéo giảm lớn nhất theo cùng bảng VNIndex.ai góp 11,02/23,71=46,48% mức giảm, hàm ý áp lực bán ngoài các mã trụ. Thiếu chuỗi khớp cùng phạm vi đủ cho TB20 và phân phối/25 nên áp dụng RÚT GỌN, nền CHƯA ĐÁNH GIÁ, điểm −3/7 => KHÔNG mở mua mới (R2). Không có Sổ gốc để tự gỡ chặn cứng lịch sử.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "6 phút đọc",
  "brief": {
    "headline": "Đỏ diện rộng, mua mới chưa có lợi thế",
    "thesis": "VN-Index 1.703,01 (−23,71; −1,37%); VN30 −1,67%; VNDIRECT ghi 61 tăng/267 giảm/49 tham chiếu. Khớp HOSE toàn sàn 11.247 tỷ, không thỏa thuận; VNSignal rổ VNINDEX 11.156,59 tỷ khác phạm vi. Giá dưới MA20 1.738,71/MA50 1.752,97, top5 kéo giảm 46,48% (1 nguồn). Điểm đã kiểm −3/7 ⇒ RÚT GỌN R2, KHÔNG mở mua mới; không sử dụng tổng giao dịch để bù TB20 khớp còn thiếu.",
    "evidence": [
      {
        "label": "Xu hướng kỹ thuật",
        "signal": "Dưới MA20 và MA50",
        "detail": "MA20 1.738,71 • MA50 1.752,97 • dốc MA20 +5,58",
        "tone": "negative",
        "signalParts": [
          {
            "text": "Dưới MA20",
            "tone": "negative"
          },
          {
            "text": " và ",
            "tone": "neutral"
          },
          {
            "text": "MA50",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "MA20 1.738,71",
            "tone": "neutral"
          },
          {
            "text": " • MA50 1.752,97",
            "tone": "neutral"
          }
        ]
      },
      {
        "label": "Khớp lệnh HOSE đã tách thỏa thuận",
        "signal": "11.247 tỷ đồng",
        "detail": "HOSE toàn sàn; TB20 KHỚP chưa có chuỗi đồng phạm vi",
        "tone": "warning",
        "signalParts": [
          {
            "text": "11.247 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "Nguồn HOSE",
            "tone": "neutral"
          },
          {
            "text": " • TB20 chưa xác minh",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng & áp lực bán",
        "signal": "61 tăng / 267 giảm",
        "detail": "49 đứng giá • top 5 kéo giảm 46,48% • điểm −3/7",
        "tone": "negative",
        "signalParts": [
          {
            "text": "61 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "267 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Độ rộng 0,228",
            "tone": "negative"
          },
          {
            "text": " • −3/7",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở mua mới theo bảng RÚT GỌN dòng R2 (−3/7), không tăng đòn bẩy; rà mã mất nền và tuân thủ điểm dừng lỗ riêng. Tỷ trọng cổ phiếu định hướng tối đa 20% theo Prompt, điều chỉnh có kỷ luật, không bán tháo.",
      "NẾU giữ được cụm giá lịch sử 1.699,62–1.701,90 THÌ tiếp tục quản lý các vị thế còn khỏe, không mua đuổi. NẾU hồi lấy lại 1.714,32 và 1.723,04 THÌ quan sát cầu; chỉ tính lại trạng thái khi vượt MA20 1.738,71 cùng thanh khoản khớp/độ rộng xác nhận và các chặn được kiểm đủ.",
      "NẾU đóng dưới 1.699,62 THÌ rà những mã yếu hoặc chạm dừng lỗ riêng, theo dõi mốc đóng cũ 1.689,84; không bình quân giá xuống và không đặt stop chỉ số bằng giá thấp 18/11 đang lệch nguồn."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "HOSE ghi khớp toàn sàn 11.247 tỷ, khác VNSignal rổ VNINDEX 11.156,59 tỷ và tổng giao dịch có thỏa thuận 17.545 tỷ. Độ rộng 61/267/49 đúng tập VNDIRECT; VNIndex.ai tính rổ 404 mã 64/267/73, không trộn. MA20/MA50/dốc từ các giá đóng 18/11 trở về trước trong bảng VNIndex.ai, loại 19/11. RÚT GỌN do thiếu chuỗi KHỚP đủ kỳ cho TB20 và phân phối; MA200, ngoại KHỚP năm phiên, basis và Sổ gốc chưa có. Giá thấp 18/11 không dùng vì nguồn lệch.",
      "shortLabel": "EOD 18/11 • 136/136 mã • RÚT GỌN • −3/7"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.703,01",
      "change": "−23,71 • −1,37%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP HOSE TOÀN SÀN",
      "value": "11.247 tỷ",
      "change": "Không thỏa thuận • TB20 chưa xác minh",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "neutral"
    },
    {
      "label": "ĐỘ RỘNG HOSE (VNDIRECT)",
      "value": "61 tăng / 267 giảm",
      "change": "49 đứng giá • tỷ lệ 0,228",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "61 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "267 giảm",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "TRẠNG THÁI",
      "value": "KHÔNG • −3/7",
      "change": "RÚT GỌN R2 • Nền chưa đánh giá",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "Phiên 18/11 xác nhận mặt bằng cổ phiếu yếu hơn điểm số thuần túy. VN-Index giảm 23,71 điểm, đóng 1.703,01; VN30 giảm 1,67%, VNMID 0,94% và VNSML 1,20%. VNDIRECT đếm 61 tăng/267 giảm/49 tham chiếu; tỷ lệ 61/267=0,228 nên độ rộng chấm −1. Rổ 404 mã của VNIndex.ai có 64/267/73, KHÔNG cùng phạm vi với VNDIRECT.",
    "Bảng HOSE ngày 18/11 ghi khớp 597.577.194 chứng khoán trị giá 11.247 tỷ đồng, thỏa thuận 6.297 tỷ và tổng 17.545 tỷ. Bảng VNSignal rổ VNINDEX có khớp 11.156,59 tỷ, khác phạm vi tính, nên không ghép vào chuỗi HOSE. Chưa có 20 phiên KHỚP đồng phương pháp để tính TB20, không tính bội số, không xác nhận tổng số phân phối/25, không gọi chắc chắn xả cuối phiên theo cổng cứng.",
    "VNIndex.ai hiển thị giá đóng liên tục đủ 50 phiên đến 18/11: MA20 =1.738,71, MA50=1.752,97, MA20 dốc lên 5,58 điểm so với năm phiên trước. Giá dưới cả hai đường cho −1 điểm. MA200 chưa đủ chuỗi, nền xu hướng CHƯA ĐÁNH GIÁ vì ở chế độ RÚT GỌN; riêng MA20 dốc lên không đủ để gỡ trạng thái phòng thủ.",
    "Áp lực bán không gói trong vài trụ: VIC −4,80, VCB −2,24, VHM −1,69, VPB −1,24, LPB −1,05 điểm theo cùng bảng VNIndex.ai, tổng −11,02 điểm =46,48% mức giảm toàn chỉ số (số tác động từng mã 1 nguồn), thỏa dấu hiệu bán dàn trải −1 điểm. VTV và Nhân Dân cùng xác nhận VIC/VCB/VHM/VPB góp phần lớn mức giảm nhưng cách tính điểm có thể khác.",
    "HOSE ghi các chỉ số ngành VNIT −3,01%, VNFIN −1,75%, VNENE −2,42%, VNREAL −1,11%, VNMAT −2,42%; ngân hàng, công nghệ, nguyên vật liệu và bất động sản chịu áp lực. SAB/KDH/HVN/MSB là điểm sáng riêng nhưng không đủ bộ KHỚP/ngoại theo từng ngành để kết luận tiền vào ròng. Khối ngoại HOSE bán ròng tổng khoảng 1.115 tỷ, không đồng nghĩa chuỗi ngoại KHỚP liên tiếp.",
    "Điểm bảy yếu tố: giá/MA −1, thanh khoản 0 (thiếu TB20), độ rộng −1 (0,228), chất lượng dòng tiền −1 (46,48%), ngoại KHỚP 0 (thiếu chuỗi), sức khỏe phân phối 0 (thiếu 26 giá trị KHỚP và lịch sự kiện), phái sinh/vĩ mô 0 (chưa khóa lịch/basis). Tổng −3/7. Ba bước: trạng thái thô KHÔNG (R2) → trần nền CHƯA ĐÁNH GIÁ tối đa CHỜ, vẫn KHÔNG → bỏ chống đảo chiều do không có Sổ gốc → KHÔNG (R2).",
    "Chặn mềm: chưa lấy lại vùng đóng 09/11 là 1.714,32 cách chỉ số 0,66%, có xuất xứ. Chặn cứng theo xả cuối, ngoại KHỚP 5 phiên, số phân phối ≥6 hoặc mốc vô hiệu Sổ gốc đều KHÔNG KIỂM ĐƯỢC, không tự gán là đã qua. Giá thấp phiên 18/11 giữa các nguồn lệch lớn, KHÔNG dùng để gắn mốc bán.",
    "Kịch bản tốt (THẤP): đóng vượt 1.714,32 và đỉnh 18/11 1.723,04, rồi MA20 1.738,71 với độ rộng/khớp cải thiện, tính lại cổng chứ không tự mua. Kịch bản cơ sở (TRUNG BÌNH): quanh 1.699,62–1.714,32, giữ vị thế khỏe theo mốc dừng lỗ riêng. Kịch bản xấu (CAO): đóng dưới 1.699,62, chú ý giá đóng cũ 19/10 là 1.689,84, rà mã mất nền, hạ đòn bẩy. Mốc vô hiệu lịch sử từ Sổ gốc chưa có; vùng mua mới và R:R chỉ số không áp dụng.",
    "**BÀI CHO NHÓM ZALO — BẢN THỐNG NHẤT**",
    "Thị trường chưa có lý do để mua mới. Phiên 18/11, VN-Index giảm 23,71 điểm, đóng cửa 1.703,01 điểm (−1,37%). Theo cùng tập thống kê VNDIRECT, HOSE có 267 mã giảm, chỉ 61 mã tăng; VN30 mất 1,67%. Đây không còn là chuyện một hai mã trụ điều chỉnh: lực bán đã lan trên phần lớn bảng điện.",
    "HOSE ghi nhận 11.247 tỷ đồng khớp lệnh, chưa gồm giao dịch thỏa thuận. Thanh khoản tăng nhưng đi cùng giá giảm, không nên gọi đó là dòng tiền mua xác nhận. Năm mã ghì điểm lớn nhất chỉ chiếm khoảng 46,48% mức giảm chỉ số, phần còn lại vẫn chịu sức ép. VN-Index đã thấp hơn MA20 tại 1.738,71 và MA50 tại 1.752,97.",
    "Ngân hàng, công nghệ, vật liệu và bất động sản chịu áp lực; các mã lớn như VCB, VIC, VHM và FPT gây ảnh hưởng đáng kể. SAB, KDH, HVN và MSB giữ được điểm sáng riêng, nhưng chưa có bằng chứng tiền vào đồng loạt cả ngành. Khối ngoại bán ròng khoảng 1.115 tỷ đồng theo thống kê tổng của HOSE; tôi không dùng số đó để suy chuỗi bán ròng khớp lệnh.",
    "Phiên tới, NẾU chỉ số giữ được vùng 1.699,62–1.701,90, THÌ ưu tiên quản trị hàng đang có, không vội bắt đáy. NẾU đóng dưới 1.699,62, THÌ rà soát các mã yếu theo điểm dừng lỗ riêng, quan sát tiếp mốc lịch sử 1.689,84. Ngược lại, NẾU hồi vượt 1.714,32 rồi 1.723,04, THÌ vẫn cần kiểm tra sức mua lan tỏa; phải lấy lại MA20 quanh 1.738,71 và xác minh được các tín hiệu còn thiếu mới tính chuyện đổi kế hoạch.",
    "Việc làm ngay là rà lại những mã mất nền, hạn chế đòn bẩy và giữ kỷ luật cắt lỗ riêng, không bán tháo máy móc. Tỷ trọng cổ phiếu phòng thủ tham khảo không quá 20% theo quy tắc hệ thống, không phải mệnh lệnh cho mọi tài khoản. Tôi chưa có đủ chuỗi khớp lệnh đồng phạm vi để xác nhận trung bình 20 phiên và số phiên phân phối, nên không nói quá những gì dữ liệu chứng minh.",
    "Giữ vốn và giữ quyền chủ động quan trọng hơn cố tìm điểm mua trong một phiên bán lan rộng.",
    "Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định."
  ],
  "levels": [
    {
      "label": "Hỗ trợ ngắn từ phiên cũ",
      "value": "1.699,62–1.701,90",
      "note": "1.699,62 đóng 03/11 và 1.701,90 là đáy 09/11 từ VNSignal/VNIndex.ai; chỉ là tham chiếu kỹ thuật, không tự thay mốc vô hiệu Sổ gốc."
    },
    {
      "label": "Mốc lịch sử thấp hơn",
      "value": "1.689,84",
      "note": "Giá đóng 19/10 theo lịch sử VNIndex.ai, không chắc chắn trở thành đáy hỗ trợ."
    },
    {
      "label": "Kháng cự gần",
      "value": "1.714,32",
      "note": "Giá đóng 09/11 từ VNSignal/VNIndex.ai, đã rơi xuống dưới."
    },
    {
      "label": "Kháng cự phiên 18/11",
      "value": "1.723,04",
      "note": "Giá cao 18/11 được VNIndex.ai và VNSignal cùng ghi."
    },
    {
      "label": "Kháng cự trung bình MA20",
      "value": "1.738,71",
      "note": "TỰ TÍNH từ 20 giá đóng 18/11→23/10 của VNIndex.ai, không gồm 19/11."
    },
    {
      "label": "Kháng cự xu hướng MA50",
      "value": "1.752,97",
      "note": "TỰ TÍNH từ 50 giá đóng 18/11→10/09 của VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "TỐT (THẤP): đóng trên 1.714,32 rồi 1.723,04 và MA20 1.738,71 với KHỚP/độ rộng tăng, quét đủ các chặn cứng.",
      "then": "TÍNH LẠI bảy yếu tố và ba bước; chỉ xét mua nếu trạng thái chốt chuyển thành CÓ. Hiện KHÔNG có vùng mua mới."
    },
    {
      "state": "neutral",
      "if": "CƠ SỞ (TRUNG BÌNH): VN-Index đi ngang quanh cụm 1.699,62–1.714,32 nhưng lực cầu chưa chứng minh sức lan tỏa.",
      "then": "Chỉ quản lý các vị thế khỏe còn đúng điểm dừng lỗ; không mở mua mới, không tăng đòn bẩy."
    },
    {
      "state": "risk_off",
      "if": "XẤU (CAO): đóng cửa mất 1.699,62, sau đó kiểm tra lại mốc giá đóng 19/10 là 1.689,84.",
      "then": "Rà các mã yếu theo điểm dừng lỗ riêng, giảm phần vi phạm, không bình quân giá xuống hay bán tháo toàn danh mục máy móc."
    }
  ],
  "focus": "KHÔNG mở mua mới • vùng theo dõi 1.699,62–1.701,90 • cản 1.714,32/1.723,04/MA20 1.738,71 • độ rộng 61/267 • HOSE khớp 11.247 tỷ",
  "inference": "Cổng lõi ĐẠT có giới hạn: HOSE khớp toàn sàn 11.247 tỷ, các báo khác theo rổ chỉ số ~11.157 tỷ; độ rộng 61/267/49 VNDIRECT và VISC xác nhận tăng/giảm. Chế độ RÚT GỌN do thiếu chuỗi KHỚP đồng phạm vi cho TB20 và phân phối/25; yếu tố thiếu chấm 0. Giá/MA −1, độ rộng −1, top5 −1 = −3/7; R2 KHÔNG, nền chưa đánh giá, bỏ bước chống đảo chiều vì thiếu Sổ gốc. Không tự gọi chặn chưa kiểm là đã gỡ. R:R chỉ số và vùng mua mới không áp dụng. Quy tắc stoploss/vùng mua/target của từng cổ phiếu trên website được giữ nguyên.",
  "sources": [
    {
      "label": "HOSE qua Stockbiz — điểm tin giao dịch chính thức 18/11, khớp 11.247 tỷ",
      "url": "https://web.stockbiz.vn/News/2026/11/18/1925654/hose-diem-tin-giao-dich-ngay-18-11-2026.aspx"
    },
    {
      "label": "VNIndex.ai — chi tiết phiên và tác động cổ phiếu 18/11",
      "url": "https://vnindex.ai/vn-index/phien/18-11-2026"
    },
    {
      "label": "VNIndex.ai — chuỗi 59 giá trước 19/11, sử dụng các hàng đến 18/11",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "VNSignal — lịch sử ngày 18/11 và giá khớp rổ VNINDEX",
      "url": "https://vnsignal.vn/chi-so/vnindex/lich-su-gia"
    },
    {
      "label": "VISC — báo cáo kết phiên 18/11, độ rộng 61/267",
      "url": "https://visc.com.vn/vi/news/bao-cao-phan-tich-3155/ban-tin-thi-truong-ngay-18112026-1580.spp"
    },
    {
      "label": "Nhân Dân — sức giá ngành và rổ cổ phiếu 18/11",
      "url": "https://nhandan.vn/ap-luc-ban-gia-tang-vn-index-lui-ve-sat-moc-1700-diem-post1003656.html"
    },
    {
      "label": "Hồ sơ kiểm toán và tự kiểm 20 tiêu chí của phiên",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261118.md"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
