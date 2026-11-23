/* Nhận định EOD 23/11/2026: bổ sung dữ liệu đúng khung cũ; không đổi bố cục, HTML, CSS hoặc nguyên tắc giao dịch. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261123",
  "date": "2026-11-23",
  "publishedAt": "23/11/2026 • Sau phiên",
  "edition": "Bản ngày 23/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 23/11 đã khóa 136/136 cổ phiếu, 135 giá đóng cửa trùng trực tiếp VNDIRECT–CafeF, MSR được KBS xác nhận VNDIRECT. VN-Index 1.697,14 (+0,49%) HOSE/VNIndex.ai/BSC, HOSE KHỚP toàn sàn 8.758 tỷ (1 NGUỒN số chi tiết), riêng bảng 30 ngày nmquan ghi 8.636,2 tỷ khác phương pháp. Độ rộng cổ phiếu VNDIRECT 162 tăng/127 giảm/68 đứng đã đối chiếu Thời báo Tài chính. ĐẦY ĐỦ theo năm chỉ báo: MA20 1.727,57, MA50 1.746,23, dốc MA20 −11,18 từ 60 giá VNIndex.ai; TB20 khớp 11.611,31 và 6 phân phối/25 từ 30 dòng nmquan, bội số cùng nmquan 0,744. Sổ gốc, MA200, ngoại KHỚP 5 phiên và basis ba phiên chưa được đối chiếu. Số 20/11 trong bảng nmquan hiện khác hồ sơ ngày cũ, đã ghi đính chính ở nhật ký.",
  "title": "Hồi nhờ trụ, tiền khớp yếu: chưa mở mua mới dù VN-Index xanh",
  "thesis": "VN-Index 23/11 hồi từ thấp 1.671,72 lên đóng 1.697,14 (+8,35; +0,49%) nhưng chưa lấy lại mốc tâm lý 1.700. Chỉ cổ phiếu HOSE theo VNDIRECT ghi nhận 162 tăng/127 giảm/68 đứng, cải thiện thực so với phiên trước; VN30 +0,24%, VNMID +0,19% và VNSMALLCAP −0,31%, sức hồi chưa đều. HOSE chính thức khớp 8.758 tỷ, thỏa thuận 4.040 tỷ; nmquan bảng 30 ngày có phương pháp riêng khớp 8.636,2 tỷ, bội số cùng gốc chỉ 0,744×TB20 11.611,31 tỷ. BSC top 5 mã kéo tăng đóng góp 9,82 điểm/8,35 điểm tăng của chỉ số =117,60%, trụ nâng điểm rõ hơn thị trường. Giá vẫn dưới MA20 1.727,57 và MA50 1.746,23, MA20 dốc −11,18 trong năm phiên. Theo các lịch sự kiện đã kiểm, có 6 phân phối hiệu lực/25; chặn cứng phân phối cần giữ kỷ luật và sẽ đếm lại nếu phát hiện ngày cơ cấu quỹ khác. Tổng điểm −4/7, nền XẤU, trạng thái KHÔNG dòng 1, không mua mới; ưu tiên bảo vệ vốn và stop riêng.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "6 phút đọc",
  "brief": {
    "headline": "Index xanh chưa đủ: thanh khoản mỏng và trụ gánh điểm",
    "thesis": "VN-Index 1.697,14 (+8,35; +0,49%); VNDIRECT 162 tăng/127 giảm/68 đứng; VN30 +0,24%, VNMID +0,19%, VNSML −0,31%. HOSE KHỚP 8.758 tỷ TOÀN SÀN (1 NGUỒN), bảng nmquan 8.636,2 tỷ cùng một nguồn riêng cho TB20 11.611,31 và bội số 0,744. MA20/MA50 1.727,57/1.746,23, dốc MA20 −11,18; 6 phân phối còn hiệu lực theo lịch đã kiểm, chặn cứng ≥6. Điểm −4/7; nền XẤU; KHÔNG mở mua mới dòng 1.",
    "evidence": [
      {
        "label": "Tình trạng thị trường",
        "signal": "KHÔNG • −4/7",
        "detail": "ĐẦY ĐỦ • Nền XẤU • 6 phân phối/25",
        "tone": "negative",
        "signalParts": [
          {
            "text": "KHÔNG",
            "tone": "negative"
          },
          {
            "text": " • −4/7",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "6 phân phối/25",
            "tone": "negative"
          },
          {
            "text": " • xem nhật ký sự kiện",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Khớp lệnh HOSE",
        "signal": "8.758 tỷ",
        "detail": "HOSE toàn sàn • cùng chuỗi nmquan: 0,744×TB20",
        "tone": "warning",
        "signalParts": [
          {
            "text": "8.758 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "Khớp HOSE 1 NGUỒN",
            "tone": "warning"
          },
          {
            "text": " • 0,744×TB20 cùng gốc riêng",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng & lực trụ",
        "signal": "162 tăng / 127 giảm",
        "detail": "68 đứng • top 5 trụ +9,82 điểm / VNINDEX +8,35",
        "tone": "neutral",
        "signalParts": [
          {
            "text": "162 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "127 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Độ rộng 1,276",
            "tone": "neutral"
          },
          {
            "text": " • trụ kéo tập trung",
            "tone": "warning"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở mua mới (ĐẦY ĐỦ, −4/7, chặn phân phối theo lịch đã kiểm; nền XẤU). Giảm rủi ro từng mã đã vi phạm điểm dừng lỗ riêng; không tăng margin, không bình quân xuống. Tỷ trọng cổ phiếu phòng thủ tham khảo tối đa 20% theo Prompt, không phải lệnh bán toàn bộ.",
      "NẾU VN-Index vượt 1.700 và lấy lại MA20 1.727,57 cùng thanh khoản khớp/độ rộng xác nhận, số phân phối hiệu lực về ≤5, các chặn khác được kiểm đủ THÌ mới tính lại bảy yếu tố và ba bước; không tự mua vì một phiên kéo trụ.",
      "NẾU thủng thấp phiên 23/11 là 1.671,72 và sau đó đóng dưới thấp 20/11 là 1.666,41 THÌ rà mã yếu và xử lý phần chạm stop riêng; không tự biến đáy chỉ số thành stop cổ phiếu."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "HOSE EOD 23/11: VNINDEX 1.697,14 +0,49%, khớp toàn HOSE 8.758 tỷ, thỏa thuận 4.040 tỷ; BSC khớp 8.714 tỷ rổ chỉ số, nmquan 8.636,2 tỷ khác phương pháp, tuyệt đối không ghép tính bội số. VNDIRECT độ rộng 162/127/68 và Thời báo Tài chính xác nhận đồng phạm vi. MA20/MA50/dốc từ 60 giá đóng VNIndex.ai, TB20 và 6 phiên phân phối theo 30 KHỚP nmquan. Lịch ETF 09–13/11 và đáo hạn 19/11 đã kiểm; chưa bao phủ tuyệt đối sự kiện tất cả quỹ, phải đếm lại nếu có chứng cứ. Không có MA200, ngoại KHỚP năm phiên, F1M basis ba ngày, Sổ gốc/mốc vô hiệu lịch sử.",
      "shortLabel": "EOD 23/11 • 136/136 mã • ĐẦY ĐỦ • −4/7"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.697,14",
      "change": "+8,35 • +0,49%",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "price_up"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "8.758 tỷ",
      "change": "nmquan cùng gốc: 0,744×TB20",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "neutral"
    },
    {
      "label": "ĐỘ RỘNG HOSE (VNDIRECT)",
      "value": "162 tăng / 127 giảm",
      "change": "68 đứng • tỷ lệ 1,276",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "breadth_positive",
      "valueParts": [
        {
          "text": "162 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "127 giảm",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "TRẠNG THÁI",
      "value": "KHÔNG • −4/7",
      "change": "6 phân phối • nền XẤU • không mua mới",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index mở dưới tham chiếu 8,64 điểm, chạm vùng thấp 1.671,72 rồi hồi lên đóng 1.697,14 điểm (+0,49%). HOSE chính thức VN30 +0,24%, VNMIDCAP +0,19% nhưng VNSMALLCAP −0,31%; HNX-Index −1,01%. Theo VNDIRECT, HOSE có 162 cổ phiếu tăng, 127 giảm, 68 tham chiếu (tỷ lệ tăng/giảm 1,276). Độ rộng đã bớt tiêu cực nhưng chưa đạt ngưỡng +1 của Prompt (≥1,5), sự hồi phục điểm số không đồng đều trên các nhóm vốn hóa.",
    "HOSE ghi 510.553.990 chứng khoán khớp trị giá 8.758 tỷ, thỏa thuận 4.040 tỷ, tổng 12.798 tỷ. BSC ghi 8.714 tỷ giá trị khớp của rổ VNINDEX; nmquan ghi 8.636,2 tỷ theo bảng riêng, lệch HOSE 121,8 tỷ chưa lý giải chi tiết. Toàn bộ phép tính TB20 dùng đúng 30 hàng nmquan: TB20 20 phiên trước là 11.611,305 tỷ, tỷ lệ 8.636,2/11.611,305 = 0,744; phiên tăng +0,49% với KHỚP dưới 0,8×TB20 nên thanh khoản −1. Không lấy tổng 12.798 hoặc số BSC để chia TB20 nmquan.",
    "Từ 60 giá đóng cửa VNIndex.ai 27/08–23/11, MA20 TỰ TÍNH 1.727,57; MA50 1.746,23; MA20 thấp hơn mức của năm phiên trước 11,18 điểm. VN-Index 1.697,14 dưới cả hai đường, giá/MA −1, nền XẤU (dưới MA50 cùng dốc MA20 âm). MA200 chưa có đủ 200 dòng, không đổi chế độ ĐẦY ĐỦ.",
    "BSC ghi năm trụ kéo tăng VIC +6,18, VHM +1,90, FPT +0,75, HVN +0,53, GVR +0,46 điểm. Tổng +9,82 điểm, bằng 117,60% mức tăng +8,35: phần còn lại của chỉ số có tác động ròng trái chiều. Top 5 >70% trong phiên tăng nên chất lượng dòng tiền −1; không ghép số đóng góp điểm khác thuật toán của VNIndex.ai. Các mã kéo giảm gồm TCB, GAS, STB, MBB và MSN theo BSC, mức giảm không đồng đều.",
    "Trong cửa sổ 25 phiên 20/10–23/11, bảng KHỚP nmquan 30 dòng cho 6 ngày giảm ≥0,2% và giao dịch khớp cao hơn ngay phiên trước: 29/10, 02/11, 06/11, 12/11, 17/11 và 18/11. Cả sáu chưa đạt mức phục hồi giá đóng +5%, trong khi ứng viên 19/10 đã ra khỏi cửa sổ. Lịch cơ cấu ETF lớn 09–13/11 và đáo hạn 19/11 đã kiểm, đều không trùng sáu ứng viên; lịch mọi quỹ khác chưa bao phủ hết, phải đếm lại khi có chứng cứ mới. Theo lịch đã kiểm, 6 phiên phân phối kích hoạt chặn cứng ≥6, sức khỏe xu hướng −1.",
    "HOSE ghi ngành công nghệ VNIT +3,83%, bất động sản VNREAL +1,33%, công nghiệp VNIND +0,55%, trong khi tài chính VNFIN −0,36% và chăm sóc sức khỏe VNHEAL −4,50%. Nhóm tăng chủ yếu theo sức giá, thiếu bảng đồng phạm vi về KHỚP và ngoại trong từng ngành nên không kết luận tiền ròng đã chuyển sang công nghệ/bất động sản. Khối ngoại HOSE bán ròng tổng 419 tỷ, tự doanh tổng +357,5 tỷ theo nmquan một nguồn, nhưng không có chuỗi ngoại KHỚP năm phiên để kích hoạt thêm chặn cứng.",
    "Bảy yếu tố theo Prompt: (1) giá dưới MA20+MA50 −1; (2) phiên tăng +0,49% nhưng KHỚP 0,744×TB20 −1; (3) độ rộng 162/127=1,276 ⇒0; (4) top5 tập trung 117,60% >70 ⇒−1; (5) ngoại KHỚP năm phiên thiếu ⇒0; (6) sáu phân phối/25 theo lịch đã kiểm ⇒−1; (7) basis/vĩ mô chưa đủ nguồn ⇒0. Tổng −4/7. ĐẦY ĐỦ: trạng thái thô KHÔNG dòng 1 (chặn phân phối); sau trần nền XẤU vẫn KHÔNG; không áp chống đảo chiều vì thiếu Sổ gốc ⇒ KHÔNG cuối cùng.",
    "Các chặn mềm: thanh khoản không xác nhận chiều tăng, top trụ kéo quá tập trung, giá dưới cản 1.698,19–1.700,00. Chặn xả cuối không hình thành theo dữ liệu giá vì giá đóng ở 1/3 trên biên và khớp <TB20. Chặn xanh chỉ số/đỏ cổ phiếu không hình thành vì mã tăng > mã giảm. Khối ngoại KHỚP năm phiên và mốc vô hiệu từ Sổ cũ còn KHÔNG KIỂM ĐƯỢC; không tự xem chặn cũ đã gỡ.",
    "Ba kịch bản định tính: TỐT (THẤP) khi đóng vượt 1.700 rồi MA20 1.727,57, có thanh khoản KHỚP và độ rộng xác nhận, phân phối hiệu lực ≤5 và quét chặn đủ; CƠ SỞ (TRUNG BÌNH) giữ được 1.671,72–1.666,41 nhưng chưa vượt cản, quản lý hàng sẵn có; XẤU (CAO) nếu đóng dưới 1.666,41 với độ rộng xấu, giảm phần yếu theo stop từng mã. Không có vùng mua mới hoặc R:R chỉ số vì không có mốc vô hiệu từ Sổ gốc.",
    "**BẢN ĐĂNG NHÓM ZALO — THỐNG NHẤT VỚI NHẬN ĐỊNH WEBSITE**",
    "**NHẬN ĐỊNH VN-INDEX 23/11/2026 | XUÂN LÊ TVS**",
    "Index tăng 8,35 điểm lên 1.697,14, nhưng tôi vẫn giữ quan điểm KHÔNG MỞ MUA MỚI. Phiên sáng thủng vùng 1.680 rồi hồi khá tốt, số mã tăng trên HOSE đã nhiều hơn số mã giảm: 162 so với 127. Đó là cải thiện thật về mặt giá trong một phiên, nhưng chưa đủ kết luận xu hướng đã đảo chiều.",
    "Vấn đề là phần lớn điểm tăng đến từ vài trụ. Theo BSC, riêng VIC và VHM đóng góp 8,08 điểm, gần bằng toàn bộ mức tăng 8,35 điểm của chỉ số; FPT cũng hỗ trợ mạnh. Khớp lệnh toàn HOSE đạt 8.758 tỷ đồng, song chuỗi so sánh cùng phương pháp cho thấy chỉ bằng 0,744 lần bình quân 20 phiên trước. Một nhịp hồi nhờ trụ, thiếu thanh khoản, rất dễ làm người cầm tiền sốt ruột.",
    "Công nghệ và bất động sản có sức giá khá hơn; nên đưa các mã giữ nền vào danh sách quan sát, chưa mua đuổi. Ngân hàng phân hóa, nhóm chăm sóc sức khỏe yếu, còn cổ phiếu mất nền cần ưu tiên kiểm soát. Khối ngoại tiếp tục bán ròng khoảng 419 tỷ đồng theo tổng giao dịch HOSE; không được nhầm con số này với riêng lệnh khớp.",
    "VN-Index vẫn ở dưới MA20 quanh 1.727,57 và MA50 quanh 1.746,23; MA20 còn đang dốc xuống. Chuỗi khớp lệnh hiện ghi nhận sáu phiên phân phối còn hiệu lực theo các lịch sự kiện đã kiểm. NẾU chỉ số vượt 1.700 rồi lấy lại MA20, thanh khoản và độ rộng xác nhận, số phiên phân phối giảm xuống mức cho phép, THÌ mới đánh giá lại khả năng mở mua. NẾU thủng vùng thấp 1.671,72 và tiếp tục mất 1.666,41, THÌ rà ngay cổ phiếu yếu, xử lý những vị thế vi phạm điểm dừng lỗ riêng.",
    "Việc cần làm phiên tới: kiểm tra danh mục, không tăng đòn bẩy, không bình quân giá xuống. Tỷ trọng cổ phiếu phòng thủ tham khảo không quá 20%, tùy từng tài khoản; không bán tháo mã còn giữ nền tốt. Tiền mặt lúc này là quyền chủ động, không phải cơ hội bị bỏ lỡ.",
    "*Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.*"
  ],
  "levels": [
    {
      "label": "Hỗ trợ trong phiên 23/11",
      "value": "1.671,72",
      "note": "Giá thấp phiên 23/11 từ VNIndex.ai và VNSignal, là mốc theo dõi rủi ro, KHÔNG tự thay mốc vô hiệu Sổ gốc."
    },
    {
      "label": "Hỗ trợ thấp hơn — đáy 20/11",
      "value": "1.666,41",
      "note": "Giá thấp phiên 20/11 từ nmquan và VNIndex.ai."
    },
    {
      "label": "Kháng cự ngắn — đỉnh 23/11",
      "value": "1.698,19",
      "note": "Giá cao 23/11 từ VNIndex.ai và VNSignal."
    },
    {
      "label": "Mốc tâm lý — kháng cự gần",
      "value": "1.700,00",
      "note": "Mốc tròn 1.700 chưa được lấy lại ở giá đóng."
    },
    {
      "label": "MA20",
      "value": "1.727,57",
      "note": "Trung bình 20 giá đóng 27/10–23/11 từ 60 dòng VNIndex.ai, TỰ TÍNH."
    },
    {
      "label": "MA50",
      "value": "1.746,23",
      "note": "Trung bình 50 giá đóng 15/09–23/11 từ cùng một nguồn VNIndex.ai, TỰ TÍNH."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "TỐT (THẤP): đóng trên 1.700 rồi MA20 1.727,57, khớp và độ rộng xác nhận, số phân phối ≤5 và mọi chặn khác đã kiểm.",
      "then": "Chạy lại bảy yếu tố và ba bước; chỉ cân nhắc vị thế mới nếu chốt CÓ. Hiện KHÔNG có vùng mua mới."
    },
    {
      "state": "neutral",
      "if": "CƠ SỞ (TRUNG BÌNH): giữ được đáy 23/11 là 1.671,72 và vùng đáy 20/11 là 1.666,41 nhưng chưa vượt 1.700.",
      "then": "Quản lý vị thế còn giữ nền, giữ dừng lỗ riêng, không mở mới hoặc tăng margin."
    },
    {
      "state": "risk_off",
      "if": "XẤU (CAO): đóng dưới 1.666,41 kèm độ rộng chuyển lại bất lợi.",
      "then": "Ưu tiên hạ những mã mất nền/chạm stop riêng theo kế hoạch; không bình quân xuống hoặc bán tháo đồng loạt."
    }
  ],
  "focus": "KHÔNG mở mua mới • VNINDEX 1.697,14 (+0,49%), khớp HOSE 8.758 tỷ; cùng gốc nmquan 0,744×TB20 • 6 phân phối hiệu lực theo lịch đã kiểm • cản 1.698,19/1.700/MA20 1.727,57 • hỗ trợ 1.671,72/1.666,41",
  "inference": "Cổng lõi ĐẠT có giới hạn: VNINDEX đóng/% HOSE/BSC/VNIndex.ai, độ rộng VNDIRECT 162/127/68 được Thời báo Tài chính xác nhận; khớp HOSE toàn sàn 8.758 tỷ chính xác từ 1 NGUỒN, BSC 8.714 rổ, nmquan 8.636,2 khác phương pháp. ĐẦY ĐỦ: 60 giá đóng cùng VNIndex.ai cho MA20 1.727,57 / MA50 1.746,23 / dốc MA20 −11,18; 30 giá KHỚP nmquan đồng nguồn cho TB20 11.611,31 và 6 phân phối/25, bội số 0,744. Nền XẤU, 7 yếu tố −4/7; chặn cứng phân phối≥6 theo lịch đã kiểm, lịch quỹ khác chưa tuyệt đối, phải đối chiếu bổ sung nếu có sự kiện. Ba bước KHÔNG dòng 1 → trần XẤU vẫn KHÔNG → bỏ chống đảo chiều thiếu Sổ. Không mua mới/R:R chỉ số; mốc vô hiệu từ Sổ gốc, MA200, ngoại KHỚP và basis vẫn thiếu, không tự lấp.",
  "sources": [
    {
      "label": "HOSE — Điểm tin giao dịch chốt 23/11, chỉ số, KHỚP và tổng ngoại",
      "url": "https://web.stockbiz.vn/News/2026/11/23/1926706/hose-diem-tin-giao-dich-ngay-23-11-2026.aspx"
    },
    {
      "label": "VNDIRECT Finfo — số EOD theo cùng phạm vi cổ phiếu HOSE",
      "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-23&size=500"
    },
    {
      "label": "BSC — nhận định và tác động điểm trụ 23/11",
      "url": "https://www.bsc.com.vn/bao-cao/16206-bsc-brief-23-11-nhip-hoi-phuc-con-yeu-rui-ro-dieu-chinh-van-hien-huu/"
    },
    {
      "label": "Thời báo Tài chính — độ rộng HOSE và nhận diện dòng tiền ngày 23/11",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-23-11-vn-index-dao-chieu-tang-diem-thanh-khoan-van-thap-207432.html"
    },
    {
      "label": "nmquan — bảng 30 phiên giá và KHỚP, TỰ TÍNH TB20 và phân phối",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "VNIndex.ai — bảng 60 giá đóng và OHLC",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "Mirae Asset — lịch ETF Q4/2026 cơ cấu 09–13/11",
      "url": "https://static1.vietstock.vn/edocs/22836/1793689249045_202611ETFreviewin4Q26VN.pdf"
    },
    {
      "label": "Sổ kiểm toán nguồn, giới hạn và tự kiểm 20 mục ngày 23/11",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261123.md"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
