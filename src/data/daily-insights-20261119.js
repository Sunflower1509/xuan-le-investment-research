/* Nhận định EOD 19/11/2026: bổ sung module dữ liệu, giữ nguyên mọi cấu trúc trang và dừng lỗ. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;
  const entry = {
  "id": "market-view-20261119",
  "date": "2026-11-19",
  "publishedAt": "19/11/2026 • Sau phiên",
  "edition": "Bản ngày 19/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 19/11 đã khóa 136/136 mã; 133/136 giá CafeF trùng VNDIRECT trực tiếp, 3 trường hợp DDV/MSR/VGI được KBS đối chiếu. VN-Index 1.689,62 (−0,79%) HOSE/VNIndex.ai/VNDIRECT. HOSE KHỚP 9.390 tỷ TOÀN SÀN (1 NGUỒN số chi tiết); SSI/VNSignal khoảng 9.327,9 tỷ rổ/cách tổng hợp khác, không trộn. Độ rộng VNDIRECT 104 tăng/194 giảm/65 đứng, SSI cùng tập. RÚT GỌN do thiếu 20 phiên KHỚP cùng phạm vi và phân phối/25. Ngày đáo hạn VN30F tháng 11, loại nhiễu thanh khoản sự kiện. Giá thấp 19/11 nguồn 1.683,43 vs 1.677,63 chưa phân xử, không đăng mốc thấp. Ngoại KHỚP, MA200 và Sổ gốc chưa kiểm.",
  "title": "Dưới 1.700 điểm: một số trụ kéo giảm mạnh, sức cầu vẫn chưa đủ xác nhận",
  "thesis": "Phiên 19/11, VN-Index đóng 1.689,62 (−13,39 điểm, −0,79%), VN30 giảm 1,00%, HNX-Index giảm 1,56%. Rổ VNDIRECT chỉ cổ phiếu HOSE có 104 tăng, 194 giảm, 65 tham chiếu. HOSE công bố KHỚP toàn sàn 9.390 tỷ (không tính 5.685 tỷ thỏa thuận); thống kê SSI 9.327,9 tỷ khác phạm vi, tuyệt đối không dùng 15.075 tỷ tổng thay khớp. MA20 1.735,16, MA50 1.750,18 và dốc MA20 +0,21 điểm/5 phiên được TỰ TÍNH từ 60 giá đóng VNIndex.ai. Giá dưới cả MA20/MA50; riêng VIC −8,05 điểm, top5 giảm 10,62/13,39=79,31%, không đủ tiêu chí bán dàn trải theo yếu tố chất lượng. Có cờ đáo hạn phái sinh 19/11, yếu tố thanh khoản 0. Thiếu chuỗi KHỚP một gốc cho TB20 và phân phối/25, áp dụng RÚT GỌN, nền CHƯA ĐÁNH GIÁ; −2/7 ⇒ KHÔNG mở mua mới (R2), phòng thủ không tăng đòn bẩy.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "5 phút đọc",
  "brief": {
    "headline": "Chưa có điểm mở mua: giá dưới MA và độ rộng bất lợi",
    "thesis": "VN-Index 1.689,62 (−13,39; −0,79%). HOSE 104 tăng/194 giảm/65 đứng theo VNDIRECT, VN30 −1,00%. Khớp lệnh HOSE toàn sàn 9.390 tỷ (HOSE, 1 NGUỒN chi tiết), không gồm 5.685 tỷ thỏa thuận. Giá dưới MA20 1.735,16/MA50 1.750,18; dốc MA20 +0,21. Top5 ghì 79,31% mức giảm (1 nguồn), không chấm bán dàn trải. Phiên đáo hạn phái sinh; TB20 khớp và số phân phối/25 CHƯA XÁC MINH nên RÚT GỌN, −2/7, KHÔNG R2.",
    "evidence": [
      {
        "label": "Xu hướng giá và cổng quyết định",
        "signal": "−2/7 • KHÔNG (R2)",
        "detail": "Dưới MA20 1.735,16 / MA50 1.750,18",
        "tone": "negative",
        "signalParts": [
          {
            "text": "−2/7",
            "tone": "negative"
          },
          {
            "text": " • KHÔNG",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Dưới MA20 / MA50",
            "tone": "negative"
          },
          {
            "text": " • MA20 dốc nhẹ +0,21",
            "tone": "neutral"
          }
        ]
      },
      {
        "label": "Giá trị KHỚP HOSE (chưa thỏa thuận)",
        "signal": "9.390 tỷ đồng",
        "detail": "HOSE, 1 NGUỒN chi tiết; thiếu chuỗi TB20 đồng phạm vi",
        "tone": "warning",
        "signalParts": [
          {
            "text": "9.390 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "1 NGUỒN chi tiết",
            "tone": "warning"
          },
          {
            "text": " • ngày đáo hạn phái sinh",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng và nhóm trụ",
        "signal": "104 tăng / 194 giảm",
        "detail": "65 đứng • VIC ghì −8,05 điểm, top5 79,31%",
        "tone": "negative",
        "signalParts": [
          {
            "text": "104 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "194 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Độ rộng 0,536",
            "tone": "negative"
          },
          {
            "text": " • trụ ghì mạnh",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở mua mới (RÚT GỌN, dòng R2, −2/7). Kiểm tra dừng lỗ riêng của các mã yếu; không tăng margin, không bình quân giá xuống. Tỷ trọng cổ phiếu phòng thủ tham khảo ≤20%, điều chỉnh theo danh mục, không bán tháo máy móc.",
      "NẾU phục hồi lấy lại mốc tâm lý 1.700 rồi 1.702,16–1.703,01 cùng độ rộng/khớp cải thiện THÌ chỉ quan sát; phải xác minh thêm khi trở lại vùng MA20 1.735,16 mới tính lại cả 7 điểm và cổng rủi ro, không tự mua đuổi.",
      "NẾU đóng dưới mốc lịch sử 1.680,62 (đóng phiên 28/07) THÌ ưu tiên rà phần yếu đã vi phạm điểm dừng lỗ riêng, hạn chế đòn bẩy; không dùng giá thấp 19/11 còn lệch nguồn làm stop mới."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Giá chỉ số HOSE/VNIndex.ai/VNDIRECT trùng; độ rộng VNDIRECT 104/194/65 được SSI ghi cùng phạm vi. Số khớp 9.390 tỷ HOSE toàn sàn 1 NGUỒN chi tiết, SSI/VNSignal rổ khác 9.327,9 tỷ; tổng giao dịch 15.075 tỷ không dùng làm khớp. MA20/50/dốc từ 60 giá đóng VNIndex.ai 25/08–19/11. Chưa có 21/26 phiên KHỚP cùng nguồn để tính TB20/phân phối, chưa có chuỗi ngoại KHỚP và Sổ gốc. Giá thấp hai nguồn 1.683,43 và 1.677,63 không công bố như mốc xác nhận. Phiên đáo hạn VN30F 19/11 theo quy tắc HNX và mã kỳ hạn, không dùng basis.",
      "shortLabel": "EOD 19/11 • 136/136 mã • −2/7 • RÚT GỌN"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.689,62",
      "change": "−13,39 • −0,79%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP HOSE TOÀN SÀN",
      "value": "9.390 tỷ",
      "change": "Không thỏa thuận • TB20 chưa xác minh",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "neutral"
    },
    {
      "label": "ĐỘ RỘNG HOSE (CỔ PHIẾU, VNDIRECT)",
      "value": "104 tăng / 194 giảm",
      "change": "65 đứng giá • tỷ lệ 0,536",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "104 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "194 giảm",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "TRẠNG THÁI",
      "value": "KHÔNG • −2/7",
      "change": "RÚT GỌN R2 • nền chưa đánh giá",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index kết phiên 19/11 tại 1.689,62 điểm, giảm 13,39 điểm (−0,79%), đóng thấp nhất trong 60 phiên giá trên VNIndex.ai. VN30 lùi 1,00% trong khi VNMID tăng 0,06% và VNSML giảm 0,28% theo HOSE; chỉ số lớn kém hơn nhóm vừa, phản ánh sức ép trụ. Độ rộng VNDIRECT: 104 tăng, 194 giảm, 65 đứng, tỷ lệ 0,536; VNIndex.ai dùng 404 mã gồm ETF/CCQ 107/203/94 là một tập khác, không trộn.",
    "HOSE công bố 517.703.412 chứng khoán khớp lệnh trị giá 9.390 tỷ; thỏa thuận 5.685 tỷ, tổng toàn thị trường 15.075 tỷ. SSI/Thanh Niên cho khớp 9.327,9 tỷ và VNSignal 9.327,8758 tỷ theo rổ/phạm vi khác; không hòa giải bằng phép trừ tùy tiện, không gán số 15.075 là tiền khớp. Ngày 19/11 đáo hạn hợp đồng tương lai VN30 tháng 11 có thể làm nhiễu cuối phiên; yếu tố thanh khoản chấm 0, TB20 KHỚP một nguồn toàn HOSE chưa có chuỗi đủ.",
    "Từ 60 giá đóng VNIndex.ai đã thực đọc 25/08–19/11: MA20 =1.735,16 (20 phiên từ 23/10); MA50=1.750,18 (50 phiên từ 11/09). Độ dốc MA20 so 5 phiên trước +0,21 điểm. VN-Index đang dưới hai đường, −1 điểm giá/MA. MA200 chưa đủ 200 hàng; nền CHƯA ĐÁNH GIÁ đúng chế độ RÚT GỌN, không tự gọi nền XẤU chỉ vì giá yếu.",
    "VIC là mã tác động giảm lớn nhất với −8,05 điểm theo VNIndex.ai, khoảng 60,12% mức giảm chỉ số. Năm mã VIC/CTG/VHM/BSR/LPB ghì tổng −10,62 điểm, tỷ lệ 79,31% của −13,39; không đạt ngưỡng ≤50% để chấm −1 bán dàn trải về điểm trụ. Tuy nhiên độ rộng âm 104/194 cho thấy số mã giảm nhiều hơn tăng; hai tín hiệu này không mâu thuẫn vì đo khác khía cạnh.",
    "HOSE ghi chỉ số ngành công nghệ VNIT −2,47%, bất động sản VNREAL −1,67%, năng lượng VNENE −1,16%, tài chính VNFIN −0,60%, trong khi công nghiệp VNIND +0,12%, nguyên vật liệu VNMAT +0,08%. HVN +4,05%, GEE +5,13% theo VNIndex.ai là điểm sáng riêng, không xác định được tiền ròng vào toàn nhóm thiếu dữ liệu khớp/ngoại đồng nhất. Chưa có nhóm tăng dẫn dắt đủ lan tỏa để mở mua.",
    "Khối ngoại theo tổng giao dịch HOSE (kể cả thỏa thuận) bán ròng 997 tỷ; VNIndex.ai ước tính gần 993,25 tỷ theo giá đóng. Không tự gán những con số này là dòng tiền KHỚP hoặc suy bán ròng 5 phiên liên tiếp. Tự doanh và basis hợp đồng đáo hạn chưa đủ căn cứ, yếu tố ngoại và phái sinh/vĩ mô 0.",
    "Bảy yếu tố: (1) giá/MA −1; (2) thanh khoản 0 do cờ đáo hạn và thiếu TB20 KHỚP; (3) độ rộng −1 với tỷ lệ 0,536; (4) chất lượng dòng tiền 0, top5 kéo giảm 79,31%; (5) ngoại KHỚP 0, thiếu chuỗi; (6) phân phối/25 0, thiếu chuỗi 26 giá trị KHỚP; (7) phái sinh/vĩ mô 0, ngày đáo hạn không dùng basis. Tổng −2/7. Bước 1 KHÔNG bảng RÚT GỌN R2; bước 2 trần nền CHƯA ĐÁNH GIÁ tối đa CHỜ nhưng vẫn KHÔNG; bước 3 không áp dụng đảo chiều vì thiếu Sổ gốc → KHÔNG R2.",
    "Kháng cự gần có xuất xứ: số tròn 1.700 điểm, đỉnh phiên 19/11 1.702,16, đóng cửa phiên 18/11 1.703,01 (cách 0,79%); MA20 1.735,16/MA50 1.750,18 ở phía trên. Mốc tham khảo dưới 1.680,62 là giá đóng ngày 28/07 do SSI/Thanh Niên trích, không đồng nghĩa mốc vô hiệu lịch sử từ Sổ gốc. Giá thấp chính xác 19/11 giữa các nguồn lệch nên không dùng stop hay đánh giá đóng sát đáy.",
    "Ba kịch bản định tính: TỐT (THẤP) nếu phục hồi qua 1.700/1.703,01 rồi MA20 1.735,16 có cầu/độ rộng và kiểm chặn đầy đủ; CƠ SỞ (TRUNG BÌNH) còn giằng co dưới cản nhưng giữ được vùng đóng lịch sử 1.680,62, không mở mới; XẤU (TRUNG BÌNH–CAO) nếu đóng dưới 1.680,62 và độ rộng tiếp tục yếu, rà cắt phần cổ phiếu chạm stop riêng. Không ghi xác suất %, không đặt vùng mua và R:R của VN-Index trong trạng thái KHÔNG.",
    "**BẢN ĐĂNG ZALO — THỐNG NHẤT VỚI BẢN WEB**",
    "Mất mốc 1.700 điểm chưa phải tín hiệu để vội bắt đáy. VN-Index kết phiên 19/11 ở 1.689,62 điểm, giảm 13,39 điểm (−0,79%). Bảng đếm cổ phiếu HOSE của VNDIRECT có 194 mã giảm, 104 mã tăng. Chỉ số đỏ, nhưng cần đọc đúng: riêng VIC kéo giảm khoảng 8,05 điểm, chiếm hơn 60% mức giảm chung. Chưa thể gọi đây là một phiên bán tháo đồng loạt chỉ bằng mức giảm của Index.",
    "HOSE công bố khớp lệnh 9.390 tỷ đồng, tách khỏi 5.685 tỷ đồng thỏa thuận. Dòng tiền chưa cho thấy sức mua đủ rộng để đỡ nhóm trụ. Cổ phiếu công nghệ và bất động sản tiếp tục chịu sức ép; ở chiều ngược lại, HVN và GEE có diễn biến giá tích cực riêng lẻ. Tôi chỉ đưa các điểm sáng này vào diện quan sát, chưa kết luận tiền đang vào cả ngành. Khối ngoại bán ròng khoảng 997 tỷ đồng theo tổng giao dịch HOSE, song chưa có chuỗi khớp lệnh đồng nhất để khẳng định áp lực liên tiếp.",
    "VN-Index hiện dưới MA20 tại 1.735,16 và MA50 tại 1.750,18. Ngày đáo hạn phái sinh làm nhiễu cách đọc lệnh cuối phiên; thêm nữa, chuỗi khớp lệnh lịch sử chưa đủ để đánh giá chắc số phiên phân phối. Vì thế, quan điểm hiện tại là KHÔNG MỞ MUA MỚI, giữ tiền và quản trị những gì đang có.",
    "Phiên tới, NẾU chỉ số lấy lại 1.700 rồi vùng 1.702–1.703 với độ rộng và sức mua cải thiện, THÌ tiếp tục quan sát, chưa mua đuổi; phải xác nhận thêm vùng MA20 mới tính lại kế hoạch. NẾU đóng dưới mốc lịch sử 1.680,62, THÌ rà các mã mất nền và xử lý vị thế đã chạm dừng lỗ riêng, không bình quân xuống.",
    "Việc làm ngay: kiểm tra từng vị thế, không tăng đòn bẩy, ưu tiên giữ mã còn khỏe. Tỷ trọng cổ phiếu phòng thủ theo khung tham khảo không quá 20%, tùy tài khoản và không bán tháo máy móc. Chưa có lợi thế rõ thì bảo toàn vốn là một quyết định.",
    "Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định."
  ],
  "levels": [
    {
      "label": "Mốc lịch sử thấp hơn — đóng 28/07",
      "value": "1.680,62",
      "note": "Thanh Niên dẫn SSI: đóng cửa 28/07 tại 1.680,62 điểm. Chỉ mốc tham chiếu lịch sử, KHÔNG thay mốc vô hiệu từ Sổ gốc."
    },
    {
      "label": "Kháng cự tâm lý — đã mất",
      "value": "1.700,00",
      "note": "Số tròn 1.700 theo Prompt, không phải hỗ trợ đã giữ."
    },
    {
      "label": "Kháng cự — đỉnh 19/11",
      "value": "1.702,16",
      "note": "Đỉnh phiên 19/11 trùng giữa VNIndex.ai/VNSignal."
    },
    {
      "label": "Kháng cự — đóng 18/11",
      "value": "1.703,01",
      "note": "Giá đóng 18/11 trên HOSE và VNIndex.ai; cản phía trên hiện tại."
    },
    {
      "label": "Kháng cự trung bình — MA20",
      "value": "1.735,16",
      "note": "TỰ TÍNH từ 20 giá đóng 23/10–19/11, một gốc VNIndex.ai."
    },
    {
      "label": "Kháng cự xu hướng — MA50",
      "value": "1.750,18",
      "note": "TỰ TÍNH từ 50 giá đóng 11/09–19/11, một gốc VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "TỐT (THẤP): đóng trở lại trên 1.700,00/1.703,01, rồi lấy lại MA20 1.735,16 khi thanh khoản KHỚP và độ rộng cải thiện, mọi chặn được kiểm đủ.",
      "then": "Tính lại 7 yếu tố và ba bước trạng thái, chỉ cân nhắc mua mới khi kết quả chốt CÓ. Hiện KHÔNG có vùng mua mới."
    },
    {
      "state": "neutral",
      "if": "CƠ SỞ (TRUNG BÌNH): dao động dưới 1.703,01, chưa vượt MA20 1.735,16 nhưng không đóng thấp hơn mốc lịch sử 1.680,62.",
      "then": "Giữ các mã còn khỏe với điểm dừng lỗ riêng, không mở thêm, không dùng margin; đợi dòng tiền xác nhận."
    },
    {
      "state": "risk_off",
      "if": "XẤU (TRUNG BÌNH–CAO): đóng dưới mốc lịch sử 1.680,62 và độ rộng giảm tiếp tục bất lợi.",
      "then": "Rà vị thế đã vi phạm dừng lỗ riêng, giảm phần yếu theo kế hoạch; không bình quân xuống hoặc bán tháo toàn bộ máy móc."
    }
  ],
  "focus": "KHÔNG mở mua mới • VNINDEX 1.689,62 • HOSE khớp 9.390 tỷ (1 NGUỒN chi tiết) • hỗ trợ lịch sử 1.680,62 • kháng cự 1.700/1.703/MA20 1.735,16 • 104 tăng/194 giảm",
  "inference": "Cổng lõi ĐẠT có giới hạn: đóng/% đã đối chiếu đa nguồn; HOSE KHỚP toàn sàn 9.390 tỷ chính xác 1 NGUỒN; độ rộng 104/194/65 VNDIRECT + SSI. RÚT GỌN do thiếu TB20 KHỚP 21 kỳ và phân phối/25 trong 26 phiên. Không đủ MA200, ngoại KHỚP 5 phiên, basis và Sổ gốc. Hai yếu tố đã kiểm âm (giá dưới MA20/50, độ rộng) tạo −2/7, các yếu tố thiếu dữ liệu 0 và cờ đáo hạn thanh khoản 0. Ba bước R2 KHÔNG → trần CHỜ vẫn KHÔNG → không chống đảo chiều vì thiếu Sổ. Vùng mua mới/R:R chỉ số không áp dụng. Không thay mua/stop/target/rủi ro từng cổ phiếu.",
  "sources": [
    {
      "label": "HOSE — tổng hợp điểm, khớp toàn sàn, nhóm ngành, ngoại tổng 19/11",
      "url": "https://web.stockbiz.vn/News/2026/11/19/1925885/hose-diem-tin-giao-dich-ngay-19-11-2026.aspx"
    },
    {
      "label": "VNIndex.ai — chi tiết phiên, đỉnh, top mã 19/11",
      "url": "https://vnindex.ai/vn-index/phien/19-11-2026"
    },
    {
      "label": "VNIndex.ai — 60 giá đóng cửa nguồn MA và dốc",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "Thanh Niên/SSI — số khớp khác phạm vi, độ rộng SSI, mức giá 28/07",
      "url": "https://thanhnien.vn/vn-index-mat-them-13-diem-thung-moc-1700-diem-185261119161022859.htm"
    },
    {
      "label": "VNSignal — so nguồn OHLC, khớp rổ khác 19/11",
      "url": "https://vnsignal.vn/chi-so/vnindex/lich-su-gia"
    },
    {
      "label": "HNX — quy tắc đáo hạn hợp đồng VN30 thứ Năm thứ ba",
      "url": "https://www.vp.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html"
    },
    {
      "label": "Hồ sơ kiểm toán nguồn, nhãn và tự kiểm 20 mục",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261119.md"
    }
  ]
};
  const i = store.entries.findIndex(item => item && item.id === entry.id);
  if (i >= 0) store.entries[i] = entry;
  else store.entries.unshift(entry);
  if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
