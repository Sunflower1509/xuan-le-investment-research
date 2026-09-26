/* Automated Daily Market View archive. Updated by the scheduled VNINDEX research task. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  /*
   * Keep automated entries newest-first inside this array.
   * The scheduled task must only add a dated entry after passing the canonical
   * rulebook in docs/prompt-nhan-dinh-vnindex-v3.md and the data-verification gate.
   */
  const entries = [
    {
      "id": "market-view-20260925",
      "date": "2026-09-25",
      "publishedAt": "25/09/2026 • Sau phiên",
      "edition": "Số 26",
      "sentiment": "cautious",
      "sentimentLabel": "PHÒNG THỦ / CHỜ XÁC NHẬN",
      "dataStatus": "VNDIRECT + KBS + DNSE + Dữ Liệu Kinh Tế + VNIndex.ai • dữ liệu cuối ngày 25.09.2026 • tự doanh hậu phiên: CHƯA XÁC MINH",
      "title": "Hồi kỹ thuật nhưng chưa qua cổng xác nhận — tiếp tục ưu tiên phòng thủ",
      "thesis": "Dữ liệu đến hết phiên 25/09/2026. VN-Index đóng 1.785,11 điểm, tăng 10,02 điểm (+0,56%); VN30 tăng 0,33% lên 1.938,50 điểm, trong khi HNX-Index giảm 0,21% còn 272,21 điểm. Độ rộng HOSE theo bộ dữ liệu đã khóa vẫn âm với 132 mã tăng, 49 mã tham chiếu và 176 mã giảm, có 3 mã giảm sàn. Giá trị khớp lệnh đạt khoảng 11.586,58 tỷ đồng, thấp hơn bình quân 5/10/20 phiên lần lượt khoảng 19,5% / 19,2% / 18,0%. Chỉ số đứng trên MA50 1.773,77 nhưng vẫn dưới MA200 1.795,14 và MA20 1.814,79; trong phiên đã chạm 1.796,29 nhưng không giữ được trên MA200. VN30F1M đóng 1.942,0 điểm, cao hơn VN30 cơ sở 3,5 điểm. Hai nguồn công khai cùng cho thấy khối ngoại vẫn bán ròng nhẹ trên HOSE, nhưng cường độ giảm rõ so với 24/09; dữ liệu tự doanh 25/09 chưa được xác minh hậu phiên nên không dùng để nâng kết luận. Điểm đồng thuận -2/7 và cổng loại trừ đang kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ / CHỜ XÁC NHẬN; không mua đuổi, không tăng đòn bẩy.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "brief": {
        "headline": "Hồi kỹ thuật nhưng chưa qua cổng xác nhận",
        "thesis": "Phiên 25/09 mới là nhịp hồi kỹ thuật, chưa đủ điều kiện xác nhận đảo chiều. Độ rộng vẫn âm, thanh khoản thấp hơn TB20 khoảng 18% và VN-Index chưa lấy lại MA200.",
        "evidence": [
          {
            "label": "Xu hướng",
            "signal": "↗ Hồi kỹ thuật • ▼ dưới MA20 / MA200",
            "detail": "▲ trên MA50 1.773,77 • ▼ dưới MA200 1.795,14 • ▼ dưới MA20 1.814,79.",
            "signalParts": [
              { "text": "↗ Hồi kỹ thuật", "tone": "warning" },
              { "text": " • ", "tone": "neutral" },
              { "text": "▼ dưới MA20 / MA200", "tone": "negative" }
            ],
            "detailParts": [
              { "text": "▲ trên MA50 1.773,77", "tone": "positive" },
              { "text": " • ", "tone": "neutral" },
              { "text": "▼ dưới MA200 1.795,14", "tone": "negative" },
              { "text": " • ", "tone": "neutral" },
              { "text": "▼ dưới MA20 1.814,79", "tone": "negative" }
            ],
            "text": "Đóng trên MA50 nhưng vẫn dưới MA200 và MA20; đỉnh phiên 1.796,29 cho thấy vùng MA200 đang là cản trực tiếp.",
            "tone": "warning"
          },
          {
            "label": "Độ rộng",
            "signal": "▼ 176 giảm / ▲ 132 tăng",
            "detail": "49 tham chiếu • 3 mã giảm sàn • chỉ số xanh nhưng mặt bằng cổ phiếu chưa đồng thuận.",
            "signalParts": [
              { "text": "▼ 176 giảm", "tone": "negative" },
              { "text": " / ", "tone": "neutral" },
              { "text": "▲ 132 tăng", "tone": "positive" }
            ],
            "detailParts": [
              { "text": "49 tham chiếu", "tone": "neutral" },
              { "text": " • ", "tone": "neutral" },
              { "text": "3 mã giảm sàn", "tone": "negative" },
              { "text": " • chỉ số xanh nhưng mặt bằng cổ phiếu chưa đồng thuận.", "tone": "neutral" }
            ],
            "text": "132 mã tăng so với 176 mã giảm; độ rộng chưa xác nhận nhịp hồi của chỉ số.",
            "tone": "negative"
          },
          {
            "label": "Thanh khoản",
            "signal": "~11.587 tỷ • ▼ −18,0% vs TB20",
            "detail": "Lực cầu chưa đủ để xác nhận đảo chiều.",
            "signalParts": [
              { "text": "~11.587 tỷ", "tone": "neutral" },
              { "text": " • ", "tone": "neutral" },
              { "text": "▼ −18,0% vs TB20", "tone": "negative" }
            ],
            "detailParts": [
              { "text": "Lực cầu chưa đủ để xác nhận đảo chiều.", "tone": "neutral" }
            ],
            "text": "Giá trị khớp lệnh khoảng 11.587 tỷ, thấp hơn bình quân 20 phiên khoảng 18,0%; nhịp hồi thiếu xác nhận thanh khoản.",
            "tone": "warning"
          }
        ],
        "actions": [
          "Không mua đuổi sau nhịp hồi.",
          "Không tăng đòn bẩy khi VN-Index còn dưới 1.795–1.800.",
          "Chỉ cân nhắc thăm dò nhỏ sau khi vượt cản và độ rộng, thanh khoản cùng cải thiện."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "EOD 127/127 đã khóa • khối ngoại hai nguồn cùng chiều • tự doanh 25/09 chưa xác minh hậu phiên",
          "shortLabel": "EOD đã khóa • tự doanh đang chờ xác minh"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.785,11",
          "change": "+10,02 • +0,56%",
          "changeParts": [
            { "text": "+10,02", "tone": "positive" },
            { "text": " • ", "tone": "neutral" },
            { "text": "+0,56%", "tone": "positive" }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "price_up"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "132 tăng / 176 giảm",
          "change": "49 tham chiếu • 3 mã giảm sàn",
          "tone": "negative",
          "direction": "down",
          "snapshotState": "breadth_negative",
          "valueParts": [
            {
              "text": "132 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "176 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "49 tham chiếu",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "3 mã giảm sàn",
              "tone": "negative"
            }
          ]
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "~11.587 tỷ",
          "valueParts": [
            { "text": "~11.587 tỷ", "tone": "neutral" }
          ],
          "change": "−18,0% so với bình quân 20 phiên ~14.130 tỷ",
          "changeParts": [
            { "text": "−18,0%", "tone": "negative" },
            { "text": " so với bình quân 20 phiên ~14.130 tỷ", "tone": "neutral" }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Trên TB50, dưới TB20 / TB200",
          "valueParts": [
            { "text": "Trên TB50", "tone": "positive" },
            { "text": ", ", "tone": "neutral" },
            { "text": "dưới TB20 / TB200", "tone": "negative" }
          ],
          "change": "TB50 1.773,77 • TB200 1.795,14",
          "changeParts": [
            { "text": "TB50 1.773,77", "tone": "neutral" },
            { "text": " • ", "tone": "neutral" },
            { "text": "TB200 1.795,14", "tone": "neutral" }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "Bản chất phiên 25/09 là hồi kỹ thuật sau cú giảm mạnh ngày 24/09, chưa phải một phiên xác nhận đảo chiều. VN-Index mở tại 1.773,36 điểm, thấp nhất 1.771,57, cao nhất 1.796,29 và đóng 1.785,11. Chỉ số phục hồi tốt khỏi vùng thấp nhưng không giữ được phía trên MA200 1.795,14, cho thấy lực cung vẫn xuất hiện ngay tại vùng cản đầu tiên.",
        "Thanh khoản là điểm chưa đạt. Giá trị khớp lệnh 11.586,58 tỷ đồng thấp hơn bình quân 5 phiên khoảng 19,5%, bình quân 10 phiên khoảng 19,2% và bình quân 20 phiên khoảng 18,0%; khối lượng khớp cũng thấp hơn bình quân 20 phiên khoảng 11,4%. Giá tăng trong bối cảnh dòng tiền co lại phù hợp với một nhịp hồi thăm dò hơn là một phiên bùng nổ xác nhận.",
        "Độ rộng tiếp tục tạo veto: HOSE có 132 mã tăng nhưng 176 mã giảm. VN-Index tăng 0,56% trong khi VN30 tăng 0,33%, nghĩa là nhịp hồi không hoàn toàn chỉ do VN30 kéo, nhưng mặt bằng cổ phiếu vẫn chưa đồng thuận. Vì vậy không thể kết luận thị trường đã khỏe lên chỉ dựa vào màu xanh của chỉ số.",
        "Trong universe 127 mã của website, cảng biển và logistics là nhóm có bằng chứng tích cực rõ nhất: 3/4 mã tăng, trung vị khoảng +1,29%, nổi bật HAH +4,76%, GMD +1,44% và VSC +1,15%. Ngược lại, bất động sản cho thấy độ phân hóa rất mạnh: VHM tăng 5,66% nhưng 6/9 mã trong nhóm bất động sản giảm, trung vị nhóm khoảng -1,83%. Chứng khoán có 9/15 mã giảm; năng lượng có 7/12 mã giảm dù PVP, PVT và BSR tăng. Ngân hàng ở trạng thái giằng co với 6 tăng, 3 tham chiếu và 8 giảm.",
        "Khối ngoại vẫn bán ròng nhưng áp lực đã hạ rõ so với 24/09. Chuỗi số liệu HOSE/HNX của Dữ Liệu Kinh Tế ghi bán ròng HOSE 123,19 tỷ đồng; VNIndex.ai ước tính khoảng 136,51 tỷ đồng. Hai nguồn chênh nhẹ về phương pháp nhưng cùng cho một kết luận: bán ròng còn tiếp diễn nhưng không còn ở cường độ gần 900 tỷ như phiên trước. Dữ liệu tự doanh 25/09 chưa có số hậu phiên đủ tin cậy tại thời điểm khóa bài nên không dùng số của 24/09 để suy diễn.",
        "Phái sinh là điểm đỡ tâm lý: VN30F1M đóng 1.942,0 điểm, cao hơn VN30 cơ sở 1.938,5 điểm khoảng 3,5 điểm. Tuy nhiên basis dương không thể bù cho độ rộng âm và thanh khoản yếu. Kết luận tác nghiệp vẫn là PHÒNG THỦ / CHỜ XÁC NHẬN."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / MA50",
          "value": "1.771–1.775",
          "note": "MA50 ở 1.773,77; đáy phiên 25/09 là 1.771,57 và đáy phiên 24/09 là 1.770,47. Giữ được vùng này giúp duy trì kịch bản cân bằng nhưng chưa tự động tạo điểm mua."
        },
        {
          "label": "Hỗ trợ mạnh",
          "value": "1.760–1.770",
          "note": "Vùng dưới đáy hai phiên gần nhất và sát mốc 1.760 từng được các công ty chứng khoán dùng làm vùng theo dõi hồi kỹ thuật. Đóng dưới 1.770 làm rủi ro ngắn hạn tăng rõ."
        },
        {
          "label": "Kháng cự gần / MA200",
          "value": "1.795–1.800",
          "note": "MA200 ở 1.795,14 và đỉnh phiên 25/09 là 1.796,29. Đây là cổng xác nhận đầu tiên; cần đóng trên vùng này cùng độ rộng cải thiện và thanh khoản phục hồi."
        },
        {
          "label": "Kháng cự mạnh / MA20",
          "value": "1.812–1.816",
          "note": "MA20 ở 1.814,79. Nếu hồi lên vùng này mà thanh khoản vẫn thấp hoặc số mã giảm tiếp tục áp đảo, ưu tiên giảm phần hàng yếu thay vì mua thêm."
        },
        {
          "label": "Mốc vô hiệu nhịp hồi",
          "value": "<1.770",
          "note": "Đóng dưới 1.770 làm mất vùng đỡ của hai phiên gần nhất và MA50; khi đó hủy view hồi kỹ thuật, chuyển sang giảm rủi ro."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / đường trung bình / cấu trúc",
            "score": 0,
            "note": "Chỉ số hồi và đứng trên MA50, nhưng vẫn dưới MA200 và MA20; cấu trúc tốt hơn 24/09 nhưng chưa đảo chiều."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 18,0%; lực cầu chưa xác nhận nhịp hồi."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "132 mã tăng so với 176 mã giảm; chỉ số xanh nhưng mặt bằng cổ phiếu chưa đồng thuận."
          },
          {
            "factor": "Dòng tiền",
            "score": -1,
            "note": "Dòng tiền chỉ nổi bật ở một số nhóm hẹp như cảng biển/logistics; bất động sản, chứng khoán, năng lượng và ngân hàng vẫn phân hóa hoặc nghiêng yếu."
          },
          {
            "factor": "Khối ngoại",
            "score": 1,
            "note": "Vẫn bán ròng nhẹ nhưng cường độ giảm mạnh so với 24/09; hai nguồn công khai cùng xác nhận hướng giảm bán."
          },
          {
            "factor": "Chất lượng nhóm dẫn dắt",
            "score": -1,
            "note": "Một số mã lớn và nhóm hẹp tăng mạnh nhưng chưa có nhóm dẫn dắt đủ rộng; VHM tăng mạnh trong khi đa số mã bất động sản trong universe theo dõi vẫn giảm."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": 1,
            "note": "VN30F1M cao hơn VN30 cơ sở 3,5 điểm, cho thấy kỳ vọng phái sinh bớt bi quan; chưa đủ để phủ định tín hiệu yếu của thị trường cơ sở."
          }
        ],
        "veto": [
          "Độ rộng yếu: VN-Index tăng nhưng HOSE vẫn có 176 mã giảm, nhiều hơn 132 mã tăng",
          "Thanh khoản không xác nhận: giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 18,0%",
          "Dòng tiền chưa lan tỏa; một số mã trụ và nhóm hẹp tăng nhưng nhiều nhóm lớn vẫn phân hóa hoặc nghiêng giảm",
          "Tỷ lệ lợi nhuận/rủi ro từ vùng đóng cửa tới kháng cự gần 1.795–1.800 so với mốc vô hiệu dưới 1.770 thấp hơn chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 20,
          "if": "VN-Index giữ 1.771–1.775 rồi đóng trên 1.800, độ rộng chuyển dương và giá trị khớp lệnh ít nhất quay về quanh bình quân 20 phiên ~14.130 tỷ đồng",
          "then": "Chỉ xem xét nâng từ phòng thủ sang thăm dò nhỏ ở cổ phiếu dẫn dắt có nền riêng tốt; không mua đuổi và chỉ nhận giao dịch có tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1."
        },
        {
          "state": "neutral",
          "probability": 55,
          "if": "VN-Index dao động trong 1.770–1.800, giữ được MA50 nhưng chưa lấy lại MA200 hoặc thanh khoản tiếp tục thấp",
          "then": "Duy trì PHÒNG THỦ / CHỜ XÁC NHẬN; giữ tiền mặt cao, chỉ giữ cổ phiếu khỏe hơn thị trường và không mở mua diện rộng."
        },
        {
          "state": "risk_off",
          "probability": 25,
          "if": "VN-Index đóng dưới 1.770, độ rộng tiếp tục xấu và các nhóm ngân hàng, chứng khoán, bất động sản đồng loạt yếu đi",
          "then": "Hạ thêm tỷ trọng cổ phiếu, dừng bắt đáy, xử lý vị thế vi phạm kỷ luật rủi ro và không dùng đòn bẩy để bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — giữ vùng 1.771–1.775, đóng trên 1.800, độ rộng chuyển dương và thanh khoản trở lại ít nhất quanh bình quân 20 phiên",
          "then": "TĂNG DẦN RẤT THẬN TRỌNG. Chỉ thăm dò nhỏ ở cổ phiếu có nền riêng khỏe, điểm mua độc lập và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1; chưa tăng đòn bẩy."
        },
        {
          "state": "neutral",
          "if": "GIỮ / CHỜ — VN-Index duy trì 1.770–1.800 nhưng chưa lấy lại MA200 hoặc thanh khoản/độ rộng vẫn yếu",
          "then": "GIỮ TIỀN / PHÒNG THỦ. Không mua đuổi, không bắt đáy diện rộng; ưu tiên rà soát vị thế đang nắm và giữ sức mua cho tín hiệu rõ hơn."
        },
        {
          "state": "risk_off",
          "if": "GIẢM RỦI RO — VN-Index đóng dưới 1.770 hoặc độ rộng xấu thêm trong khi nhóm trụ mất lực đỡ",
          "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý các vị thế yếu hoặc vi phạm ngưỡng rủi ro; không bình quân giá xuống bằng đòn bẩy."
        }
      ],
      "focus": "PHÒNG THỦ / CHỜ XÁC NHẬN • Điểm đồng thuận -2/7 • veto: độ rộng âm + thanh khoản thấp hơn TB20 ~18% + dòng tiền chưa lan tỏa + R:R tới cản gần <2:1 • MA50 1.773,77 • MA200 1.795,14 • MA20 1.814,79 • giá trị khớp lệnh ~11.587 tỷ • VN30F1M basis +3,5 điểm • khối ngoại bán ròng nhẹ, cường độ giảm • không tăng đòn bẩy",
      "inference": "Dữ liệu cuối ngày 25/09/2026 đã vượt cổng dữ liệu với 127/127 mã; toàn bộ 127 mã được KBS đúng ngày xác nhận giá đóng cửa trùng VNDIRECT khi CafeF chưa có dòng EOD đúng ngày. VNDIRECT khóa VN-Index 1.785,11 (+0,56%), VN30 1.938,50 (+0,33%), HNX-Index 272,21 (-0,21%) và độ rộng HOSE 132 tăng/49 tham chiếu/176 giảm/3 sàn. Chuỗi 222 phiên cho MA20 1.814,79, MA50 1.773,77 và MA200 1.795,14; giá trị khớp lệnh 11.586,58 tỷ đồng so với bình quân 5 phiên 14.396,91 tỷ, bình quân 10 phiên 14.339,29 tỷ và bình quân 20 phiên 14.130,26 tỷ. DNSE cho thấy VN30F1M đóng 1.942,0 điểm, cao hơn VN30 cơ sở 3,5 điểm. Khối ngoại được hai nguồn công khai xác nhận vẫn bán ròng nhẹ trên HOSE, với mức lần lượt khoảng 123,19 tỷ và 136,51 tỷ do khác phương pháp tổng hợp; cường độ bán giảm mạnh so với 24/09. Tự doanh 25/09 chưa có số hậu phiên đủ tin cậy tại thời điểm khóa. Điểm đồng thuận = -2/7 với cấu phần 0,-1,-1,-1,+1,-1,+1. Cổng loại trừ có hiệu lực; kết luận: PHÒNG THỦ / CHỜ XÁC NHẬN.",
      "limitations": [
        "Dữ liệu tự doanh ngày 25/09 chưa được nguồn hậu phiên cập nhật đủ tại thời điểm khóa bài; không sử dụng số tự doanh 24/09 để suy diễn.",
        "Hai nguồn công khai về khối ngoại cùng xác nhận bán ròng nhẹ trên HOSE nhưng khác nhau khoảng 13 tỷ đồng do phương pháp/độ trễ tổng hợp; bài dùng hướng dòng tiền và mức độ giảm bán, không ép hai số thành một.",
        "Bản đồ ngành được tính trên universe 127 mã đang theo dõi của website, không đại diện cho toàn bộ số mã niêm yết; chỉ nêu các nhóm có bằng chứng đủ rõ trong universe này."
      ],
      "zaloPost": "Phiên 25/09 xanh điểm nhưng chưa phải lúc để vội nâng rủi ro. VN-Index đóng 1.785,11 điểm, tăng 0,56%, song HOSE vẫn có 176 mã giảm so với 132 mã tăng. Đây là điểm phải nhìn thẳng: chỉ số hồi, nhưng mặt bằng cổ phiếu chưa hồi tương xứng.\n\nThanh khoản cũng chưa xác nhận. Giá trị khớp lệnh khoảng 11,59 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 18%. VN-Index đã đứng lại trên MA50 quanh 1.773,77 nhưng vẫn bị chặn tại MA200 quanh 1.795,14; trong phiên lên 1.796,29 rồi lùi xuống. Vì vậy tôi coi đây là nhịp hồi kỹ thuật, chưa phải tín hiệu đảo chiều.\n\nDòng tiền có điểm sáng ở cảng biển và logistics, trong khi bất động sản phân hóa rất mạnh: VHM tăng tốt nhưng đa số mã bất động sản trong bộ theo dõi vẫn giảm. Chứng khoán và năng lượng cũng chưa cho thấy sự đồng thuận đủ rộng. Khối ngoại vẫn bán ròng nhẹ nhưng áp lực giảm rõ so với phiên trước; phái sinh duy trì basis dương 3,5 điểm, giúp tâm lý bớt bi quan nhưng chưa đủ để bỏ trạng thái phòng thủ.\n\nKế hoạch phiên tới rất rõ: nếu VN-Index giữ 1.771–1.775 và đóng trên 1.800 với độ rộng chuyển dương, thanh khoản trở lại ít nhất quanh 14,1 nghìn tỷ đồng, khi đó mới xem xét thăm dò nhỏ ở cổ phiếu khỏe riêng. Nếu vẫn dao động dưới 1.800 với thanh khoản thấp, tiếp tục giữ tiền và không mua đuổi. Nếu đóng dưới 1.770, hạ rủi ro và dừng bắt đáy.\n\nGiữ vốn và giữ quyền chủ động quan trọng hơn cố đoán đáy. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      "sources": [
        {
          "label": "VNDIRECT Finfo — chỉ số và độ rộng EOD 25/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-25&size=500"
        },
        {
          "label": "VNDIRECT Finfo — chuỗi VN-Index tính MA và nền thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-25&size=500"
        },
        {
          "label": "DNSE — dữ liệu VN30F1M 25/09/2026",
          "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790269200&to=1790355600"
        },
        {
          "label": "Dữ Liệu Kinh Tế — mua/bán ròng khối ngoại HOSE",
          "url": "https://dulieukinhte.com/du-lieu-dong/mua-ban-rong-khoi-ngoai-hose-36787"
        },
        {
          "label": "VNIndex.ai — khối ngoại và cổ phiếu ảnh hưởng VN-Index 25/09/2026",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "VietnamBiz — trang thị trường, tại thời điểm khóa chưa có dữ liệu tự doanh 25/09",
          "url": "https://vietnambiz.vn/chung-khoan.htm"
        }
      ]
    },
    {
      "id": "market-view-20260924",
      "date": "2026-09-24",
      "publishedAt": "24/09/2026 • Sau phiên",
      "edition": "Số 25",
      "sentiment": "cautious",
      "sentimentLabel": "PHÒNG THỦ / GIẢM RỦI RO",
      "dataStatus": "VNDIRECT + KBS + DNSE + Stockbiz + VnEconomy • dữ liệu cuối ngày 24.09.2026 • khối ngoại và tự doanh hậu phiên: CHƯA XÁC MINH ĐỦ HAI NGUỒN",
      "title": "Thủng vùng nền quan trọng — ưu tiên bảo toàn vốn và sức mua",
      "thesis": "Dữ liệu đến hết phiên 24/09/2026. Chỉ số VN đóng 1.775,09 điểm, giảm 26,56 điểm (-1,47%); VN30 giảm 1,16% còn 1.932,15 điểm và HNX giảm 1,33% còn 272,77 điểm. Độ rộng sàn TP.HCM theo bộ dữ liệu đã khóa là 76 mã tăng, 58 mã tham chiếu và 219 mã giảm, có 9 mã giảm sàn. Giá trị khớp lệnh đạt 13.411,20 tỷ đồng, thấp hơn bình quân 5/10/20 phiên lần lượt khoảng 9,1% / 5,0% / 5,7%. Chỉ số đóng dưới đường trung bình 20 phiên 1.815,11 và đường trung bình 200 phiên 1.794,80, chỉ còn đứng sát đường trung bình 50 phiên 1.774,20. Hợp đồng tương lai gần nhất đóng 1.937,5 điểm, cao hơn VN30 cơ sở 5,35 điểm; tín hiệu này chưa đủ đảo ngược sự suy yếu của thị trường cơ sở. Dữ liệu khối ngoại và tự doanh hậu phiên chưa được xác minh đủ hai nguồn độc lập nên không dùng để nâng kết luận. Điểm đồng thuận -5/7 và cổng loại trừ đang kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ / GIẢM RỦI RO; không mở mua diện rộng, không tăng đòn bẩy.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "brief": {
        "thesis": "VN-Index mất MA20 và MA200 trong khi độ rộng nghiêng mạnh về phía giảm. Thanh khoản chưa bùng nổ theo chiều bán, vì vậy tín hiệu phù hợp với trạng thái phòng thủ và bảo toàn sức mua hơn là bán tháo bằng mọi giá.",
        "evidence": [
          {
            "label": "Xu hướng",
            "signal": "▼ Dưới MA20 / MA200",
            "detail": "MA20 1.815,11 • MA200 1.794,80 • đang sát MA50 1.774,20.",
            "text": "Đóng dưới MA20 1.815,11 và MA200 1.794,80; chỉ còn đứng sát MA50 1.774,20.",
            "tone": "negative"
          },
          {
            "label": "Độ rộng",
            "signal": "▼ 219 giảm / ▲ 76 tăng",
            "detail": "58 tham chiếu • 9 mã giảm sàn • áp lực bán lan rộng rõ rệt.",
            "text": "76 mã tăng so với 219 mã giảm, kèm 9 mã giảm sàn; áp lực bán lan rộng rõ rệt.",
            "tone": "negative"
          },
          {
            "label": "Thanh khoản",
            "signal": "~13.411 tỷ",
            "detail": "▼ thấp hơn TB20 khoảng 5,7% • chưa có lực cầu xác nhận tạo đáy.",
            "text": "Giá trị khớp lệnh khoảng 13.411 tỷ, thấp hơn bình quân 20 phiên khoảng 5,7%; chưa có lực cầu xác nhận tạo đáy.",
            "tone": "warning"
          }
        ],
        "actions": [
          "Không mở mua diện rộng.",
          "Không tăng đòn bẩy.",
          "Ưu tiên giữ tiền mặt và xử lý các vị thế vi phạm kỷ luật rủi ro."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "Khối ngoại & tự doanh: chưa đủ 2 nguồn hậu phiên",
          "shortLabel": "EOD đã khóa • một phần dữ liệu đang chờ đối chiếu"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.775,09",
          "change": "−26,56 • −1,47%",
          "tone": "negative",
          "direction": "down",
          "snapshotState": "price_down"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "76 tăng / 219 giảm",
          "change": "58 tham chiếu • 9 mã giảm sàn",
          "tone": "negative",
          "direction": "down",
          "snapshotState": "breadth_negative",
          "valueParts": [
            { "text": "76 tăng", "tone": "positive" },
            { "text": " / ", "tone": "neutral" },
            { "text": "219 giảm", "tone": "negative" }
          ],
          "changeParts": [
            { "text": "58 tham chiếu", "tone": "neutral" },
            { "text": " • ", "tone": "neutral" },
            { "text": "9 mã giảm sàn", "tone": "negative" }
          ]
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "~13.411 tỷ",
          "change": "−5,7% so với bình quân 20 phiên ~14.223 tỷ",
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới TB20 và TB200",
          "change": "Đứng sát TB50 ~1.774,20",
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "Bản chất phiên 24/09 là một phiên suy yếu rõ về cả điểm số lẫn độ rộng. Chỉ số VN mở cửa tại 1.801,07 điểm, cũng là vùng cao nhất ngày, sau đó giảm liên tục xuống 1.770,47 và chỉ hồi nhẹ trước khi đóng tại 1.775,09. Việc mở cửa ở vùng cao rồi đóng gần đáy cho thấy bên bán giữ ưu thế phần lớn thời gian giao dịch, còn lực cầu cuối phiên chỉ mang tính đỡ giá cục bộ.",
        "Thanh khoản không bùng nổ theo chiều bán nhưng cũng không cho thấy lực cầu chủ động đủ mạnh. Giá trị khớp lệnh khoảng 13.411,20 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 9,1%, thấp hơn bình quân 10 phiên khoảng 5,0% và thấp hơn bình quân 20 phiên khoảng 5,7%; khối lượng khớp cũng thấp hơn bình quân 20 phiên khoảng 3,3%. Điểm cần lưu ý là giá giảm mạnh trong khi thanh khoản dưới mức bình quân phản ánh cầu thận trọng, không phải tín hiệu đã tạo đáy.",
        "Độ rộng là điểm yếu nổi bật nhất: 76 mã tăng so với 219 mã giảm, tức số mã giảm gần gấp ba số mã tăng. Trong bộ theo dõi, năng lượng giảm đồng loạt; bất động sản, chứng khoán và phần lớn ngân hàng cũng nghiêng về bên bán. Một số mã tăng như VTP, VGI, CTR, GVR hay FRT chỉ mang tính chọn lọc, chưa hình thành được một nhóm dẫn dắt đủ rộng để đảo chiều trạng thái chung.",
        "Về kỹ thuật, chỉ số đã đóng dưới đường trung bình 20 phiên 1.815,11 và đường trung bình 200 phiên 1.794,80, chỉ còn đứng cao hơn đường trung bình 50 phiên 1.774,20 chưa đầy 1 điểm. Cấu trúc ngắn hạn chuyển sang YẾU rõ rệt; trung hạn cũng bị thử thách vì vùng 1.770–1.775 đang là phòng tuyến cuối gần nhất trước khi cấu trúc suy yếu sâu hơn.",
        "Bản đồ dòng tiền cho thấy sự rút lui tương đối rộng khỏi các nhóm nhạy với chu kỳ. Năng lượng là nhóm yếu nhất trong bộ theo dõi với OIL, BSR, PVC, PLX, PVT, PVD và GAS đồng loạt giảm; bất động sản chịu áp lực ở VHM, VRE, DXG; nhóm chứng khoán có phần lớn mã giảm. Ngân hàng cũng không tạo được vai trò nâng đỡ khi đa số mã trong bộ theo dõi đi xuống.",
        "Thị trường phái sinh có điểm đỡ khi hợp đồng tương lai gần nhất đóng 1.937,5 điểm, cao hơn VN30 cơ sở 5,35 điểm, nhưng đây mới chỉ là tín hiệu thận trọng bớt bi quan. Bối cảnh bên ngoài vẫn không thuận lợi khi lợi suất trái phiếu Kho bạc Mỹ tăng cao và giá dầu duy trì ở vùng cao. Dữ liệu khối ngoại và tự doanh 24/09 chưa được xác minh đủ hai nguồn hậu phiên nên không dùng để chấm điểm."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / đường trung bình 50 phiên",
          "value": "1.770–1.775",
          "note": "Đường trung bình 50 phiên ở 1.774,20 và đáy phiên ở 1.770,47. Nếu chỉ số giữ được vùng này trong phiên kế tiếp, độ rộng thu hẹp mức tiêu cực và lực cầu cải thiện, có thể quan sát khả năng cân bằng; chưa tự động coi là điểm mua."
        },
        {
          "label": "Hỗ trợ mạnh",
          "value": "1.765–1.770",
          "note": "Đây là vùng lân cận mốc đóng cửa 1.768,12 của nhịp cuối tháng 8 và sát đáy phiên hiện tại. Nếu đóng dưới 1.768 cùng số mã giảm tiếp tục áp đảo, phải chuyển sang giảm rủi ro mạnh hơn."
        },
        {
          "label": "Kháng cự gần / đường trung bình 200 phiên",
          "value": "1.792–1.800",
          "note": "Đường trung bình 200 phiên ở 1.794,80. Chỉ khi đóng trở lại trên vùng này với độ rộng cải thiện và thanh khoản phục hồi mới có cơ sở gỡ bớt trạng thái phòng thủ."
        },
        {
          "label": "Kháng cự mạnh / đường trung bình 20 phiên",
          "value": "1.812–1.818",
          "note": "Đường trung bình 20 phiên ở 1.815,11. Nếu hồi lên vùng này nhưng dòng tiền vẫn yếu, ưu tiên hạ phần hàng yếu thay vì mua thêm."
        },
        {
          "label": "Mốc vô hiệu ngắn hạn",
          "value": "<1.768",
          "note": "Đóng dưới 1.768 làm mất vùng đỡ gần nhất và xác nhận cấu trúc ngắn hạn yếu hơn; kế hoạch khi đó là giảm tỷ trọng, không bắt đáy bằng đòn bẩy."
        }
      ],
      "confluence": {
        "score": -5,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / đường trung bình / cấu trúc",
            "score": -1,
            "note": "Đóng dưới đường trung bình 20 và 200 phiên, gần đáy ngày và chỉ còn sát đường trung bình 50 phiên."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 5,7%, chưa có lực cầu xác nhận khả năng tạo đáy."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "76 mã tăng so với 219 mã giảm, 9 mã giảm sàn; áp lực bán lan rộng rõ rệt."
          },
          {
            "factor": "Dòng tiền",
            "score": -1,
            "note": "Năng lượng, bất động sản, chứng khoán và phần lớn ngân hàng cùng suy yếu; dòng tiền tăng chỉ còn ở một số mã đơn lẻ."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Nguồn hậu phiên 24/09 chưa được xác minh đủ hai nguồn độc lập; không dùng số trong phiên để chấm điểm."
          },
          {
            "factor": "Chất lượng nhóm dẫn dắt",
            "score": -1,
            "note": "Chưa có nhóm dẫn dắt đủ rộng; sắc xanh chủ yếu phân tán ở một số cổ phiếu riêng lẻ."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": 0,
            "note": "Phái sinh cao hơn VN30 cơ sở 5,35 điểm là điểm đỡ, nhưng bối cảnh lợi suất trái phiếu Mỹ và giá dầu cao làm cân bằng tín hiệu."
          }
        ],
        "veto": [
          "Độ rộng rất yếu: số mã giảm gần gấp ba số mã tăng trong bộ dữ liệu đã khóa",
          "Thanh khoản chưa xác nhận lực cầu: giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 5,7%",
          "Chỉ số đóng dưới cả đường trung bình 20 và 200 phiên, gần vùng thấp nhất ngày",
          "Dòng tiền suy yếu đồng thời ở nhiều nhóm nhạy với chu kỳ; chưa xuất hiện nhóm dẫn dắt thay thế",
          "Chưa có điểm mua mới đáp ứng tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1 trong khi các cổng loại trừ vẫn còn hiệu lực"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 15,
          "if": "Chỉ số VN giữ được 1.770–1.775, sau đó đóng trở lại trên 1.795–1.800 với số mã tăng cải thiện rõ và giá trị khớp lệnh ít nhất quay về quanh bình quân 20 phiên",
          "then": "Chỉ xem xét mua thăm dò sau khi vùng 1.795–1.800 được lấy lại và kiểm định thành công; ưu tiên cổ phiếu dẫn dắt có nền cơ bản tốt, mức cắt lỗ 3–7% và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1."
        },
        {
          "state": "neutral",
          "probability": 35,
          "if": "Chỉ số VN dao động trong 1.768–1.800, chưa mất vùng đỡ gần nhưng cũng chưa lấy lại đường trung bình 200 phiên",
          "then": "Duy trì PHÒNG THỦ / GIẢM RỦI RO; giữ tiền mặt cao, chỉ giữ cổ phiếu khỏe hơn thị trường và không mở vị thế mới diện rộng."
        },
        {
          "state": "risk_off",
          "probability": 50,
          "if": "Chỉ số VN đóng dưới 1.768, độ rộng tiếp tục xấu và các nhóm ngân hàng, chứng khoán, bất động sản không xuất hiện lực đỡ",
          "then": "Hạ thêm tỷ trọng cổ phiếu, dừng bắt đáy, xử lý vị thế vi phạm mức cắt lỗ 3–7% và không dùng đòn bẩy để bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — giữ 1.770–1.775 rồi đóng trên 1.795–1.800, độ rộng cải thiện rõ và thanh khoản trở lại ít nhất quanh bình quân 20 phiên",
          "then": "MUA THĂM DÒ SAU KHI KIỂM ĐỊNH LẠI. Chỉ chọn cổ phiếu có nền cơ bản tốt, cắt lỗ 3–7%, tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1 và chưa tăng đòn bẩy vội."
        },
        {
          "state": "neutral",
          "if": "CHƯA XÁC NHẬN — chỉ số giữ 1.768–1.800 nhưng chưa lấy lại đường trung bình 200 phiên hoặc độ rộng vẫn nghiêng mạnh về bên giảm",
          "then": "GIỮ TIỀN / PHÒNG THỦ. Tỷ trọng cổ phiếu tối đa khoảng 20%, không mua đuổi, không bắt đáy diện rộng và không tăng đòn bẩy."
        },
        {
          "state": "risk_off",
          "if": "RỦI RO TĂNG — đóng dưới 1.768 và số mã giảm tiếp tục áp đảo; nghiêm trọng hơn nếu lực bán lan rộng ở các nhóm vốn hóa lớn",
          "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý các vị thế yếu hoặc chạm mức cắt lỗ 3–7%; không bình quân giá xuống."
        }
      ],
      "focus": "PHÒNG THỦ / GIẢM RỦI RO • Điểm đồng thuận -5/7 • cổng loại trừ: độ rộng rất yếu + thanh khoản chưa xác nhận + mất đường trung bình 20 và 200 phiên + dòng tiền suy yếu diện rộng + chưa có giao dịch đạt tỷ lệ lợi nhuận/rủi ro 2:1 • đường trung bình 20 phiên 1.815,11 • đường trung bình 200 phiên 1.794,80 • đường trung bình 50 phiên 1.774,20 • giá trị khớp lệnh ~13.411 tỷ • phái sinh cao hơn cơ sở 5,35 điểm • cổ phiếu tối đa ~20% • không tăng đòn bẩy",
      "inference": "Dữ liệu cuối ngày 24/09/2026 đã vượt cổng dữ liệu với 127/127 mã; toàn bộ 127 mã được KBS đúng ngày xác nhận giá đóng cửa trùng VNDIRECT khi CafeF chưa có dòng cuối ngày. VNDIRECT khóa chỉ số VN 1.775,09 (-1,47%), VN30 1.932,15 (-1,16%), HNX 272,77 (-1,33%) và độ rộng sàn TP.HCM 76 tăng/58 tham chiếu/219 giảm/9 sàn. Chuỗi 221 phiên cho đường trung bình 20 phiên 1.815,11, đường trung bình 50 phiên 1.774,20 và đường trung bình 200 phiên 1.794,80; giá trị khớp lệnh 13.411,20 tỷ đồng so với bình quân 5 phiên 14.754,72 tỷ, bình quân 10 phiên 14.118,79 tỷ và bình quân 20 phiên 14.222,76 tỷ. DNSE cho thấy hợp đồng tương lai gần nhất đóng 1.937,5 điểm, cao hơn VN30 cơ sở 5,35 điểm. Điểm đồng thuận = -5/7 với cấu phần -1,-1,-1,-1,0,-1,0. Cổng loại trừ có hiệu lực; kết luận: PHÒNG THỦ / GIẢM RỦI RO.",
      "limitations": [
        "Dữ liệu khối ngoại ngày 24/09 chưa được xác minh đủ hai nguồn hậu phiên tại thời điểm khóa bản nhận định. VNIndex.ai mới có số trong phiên và 24HMoney chưa cập nhật dữ liệu cuối ngày; vì vậy biến khối ngoại được chấm 0 điểm.",
        "Dữ liệu tự doanh 24/09 chưa được các nguồn hậu phiên cập nhật; 24HMoney tại thời điểm kiểm tra vẫn dừng ở ngày 23/09. Không sử dụng số tự doanh cũ để suy diễn cho phiên hiện tại.",
        "Các số liệu giao dịch toàn thị trường từ nguồn báo chí có thể bao gồm thỏa thuận; phần so sánh thanh khoản trong bản nhận định chỉ dùng giá trị khớp lệnh VNDIRECT để bảo đảm cùng phạm vi."
      ],
      "zaloPost": "Phiên 24/09 là một phiên cần ưu tiên kỷ luật hơn kỳ vọng bắt đáy. Chỉ số VN đóng 1.775,09 điểm, giảm 1,47%; độ rộng sàn TP.HCM chỉ có 76 mã tăng trong khi 219 mã giảm và 9 mã giảm sàn. Chỉ số đã mất cả đường trung bình 20 phiên lẫn đường trung bình 200 phiên, đồng thời chỉ còn đứng sát đường trung bình 50 phiên tại 1.774,20.\n\nĐiều đáng lưu ý là thanh khoản không bùng nổ theo chiều bán nhưng lực cầu cũng chưa đủ mạnh để xác nhận tạo đáy. Giá trị khớp lệnh khoảng 13,41 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 5,7%. Năng lượng giảm đồng loạt, bất động sản và chứng khoán suy yếu, phần lớn ngân hàng cũng chưa tạo được vai trò nâng đỡ. Một số mã tăng như VTP, VGI, CTR, GVR hay FRT mới mang tính chọn lọc, chưa phải tín hiệu dòng tiền quay lại trên diện rộng.\n\nVùng cần quan sát ngay trong phiên tới là 1.770–1.775. Nếu chỉ số giữ được vùng này, độ rộng bớt xấu và sau đó đóng trở lại trên 1.795–1.800 với thanh khoản ít nhất quay về quanh bình quân 20 phiên, khi đó mới xem xét mua thăm dò sau khi kiểm định lại. Nếu chưa có các điều kiện này, tiếp tục phòng thủ.\n\nNgược lại, nếu đóng dưới 1.768, cần hạ thêm tỷ trọng và dừng mọi ý định bắt đáy. Tỷ trọng cổ phiếu mới nên giữ tối đa khoảng 20%, tiền mặt là chủ đạo và không tăng đòn bẩy. Với từng vị thế đang nắm giữ, tiếp tục tuân thủ mức cắt lỗ 3–7%; không bình quân giá xuống chỉ vì cổ phiếu đã giảm mạnh.\n\nThị trường yếu thì nhiệm vụ đầu tiên là giữ vốn và giữ quyền chủ động. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      "sources": [
        {
          "label": "VNDIRECT — chỉ số và độ rộng cuối phiên 24/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-24&size=500"
        },
        {
          "label": "VNDIRECT — chuỗi chỉ số VN tính các đường trung bình và nền thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-24&size=500"
        },
        {
          "label": "Stockbiz — xác nhận điểm đóng cửa các chỉ số 24/09/2026",
          "url": "https://web.stockbiz.vn/IndexDetail.aspx?Symbol=VN30"
        },
        {
          "label": "VnEconomy — chỉ số VN chìm sâu dưới 1.800 điểm trong phiên 24/09",
          "url": "https://vneconomy.vn/thi-truong-chung-khoan.htm"
        },
        {
          "label": "24HMoney — dữ liệu tự doanh tại thời điểm kiểm tra vẫn dừng ở 23/09",
          "url": "https://24hmoney.vn/indices/vn-index/giao-dich-tu-doanh"
        },
        {
          "label": "DNSE — dữ liệu hợp đồng tương lai VN30 gần nhất",
          "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790173200&to=1790259600"
        }
      ]
    },
    {
      "id": "market-view-20260923",
      "date": "2026-09-23",
      "publishedAt": "23/09/2026 • Sau phiên",
      "edition": "Số 24",
      "sentiment": "watch",
      "sentimentLabel": "PHÒNG THỦ",
      "dataStatus": "VNDIRECT + KBS + DNSE + Dân trí + VNIndex.ai • dữ liệu cuối ngày 23.09.2026 • tự doanh: CHƯA XÁC MINH",
      "title": "Mất lại đường trung bình 20 phiên — dòng tiền chưa xác nhận, ưu tiên phòng thủ",
      "thesis": "Dữ liệu đến hết phiên 23/09/2026. Chỉ số VN đóng 1.801,65 điểm, giảm 15,28 điểm (-0,84%); VN30 giảm 0,53% còn 1.954,91 điểm và HNX giảm 0,17% còn 276,45 điểm. Độ rộng sàn TP.HCM theo bộ dữ liệu đã khóa là 127 mã tăng, 62 mã tham chiếu và 169 mã giảm. Giá trị khớp lệnh đạt 12.617,00 tỷ đồng, thấp hơn bình quân 5/10/20 phiên lần lượt khoảng 13,8% / 10,5% / 12,2%. Chỉ số đóng dưới đường trung bình 20 phiên 1.815,79 nhưng vẫn đứng trên đường trung bình 200 phiên 1.794,43 và đường trung bình 50 phiên 1.774,71. Khối ngoại trên sàn TP.HCM được VNIndex.ai ước tính bán ròng khoảng 1.110 tỷ đồng; dữ liệu tự doanh 23/09 chưa được xác minh độc lập. Hợp đồng tương lai gần nhất đóng 1.950 điểm, thấp hơn VN30 cơ sở 4,91 điểm. Điểm đồng thuận -5/7 và cổng loại trừ đang kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ; không mở mua diện rộng, không tăng đòn bẩy.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.801,65",
          "change": "−15,28 • −0,84%",
          "tone": "warning"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "127 tăng / 169 giảm",
          "change": "62 tham chiếu • 5 mã sàn",
          "tone": "warning"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "~12.617 tỷ",
          "change": "−12,2% so với bình quân 20 phiên ~14.366 tỷ",
          "tone": "warning"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "BÁN RÒNG ƯỚC ~1.110 tỷ",
          "change": "Sàn TP.HCM • nguồn VNIndex.ai",
          "tone": "warning"
        }
      ],
      "backdrop": [
        "Bản chất phiên 23/09 là một phiên giảm có áp lực rõ ở nhóm vốn hóa lớn và độ rộng nghiêng về bên bán. Chỉ số VN mở cửa 1.818,06 điểm, lên cao nhất 1.822,67 rồi lùi dần và đóng gần vùng thấp nhất ngày tại 1.801,65 điểm. Cấu trúc này cho thấy lực cầu cuối phiên chưa đủ mạnh để hấp thụ hoàn toàn lượng cung phát sinh quanh vùng 1.815–1.823.",
        "Thanh khoản có cải thiện so với phiên 22/09 nhưng vẫn thấp hơn nền trung bình. Giá trị khớp lệnh đạt khoảng 12.617,00 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 13,8%, thấp hơn bình quân 10 phiên khoảng 10,5% và thấp hơn bình quân 20 phiên khoảng 12,2%; khối lượng khớp cũng thấp hơn bình quân 20 phiên khoảng 11,5%. Một phiên giảm gần 0,9% trong khi tiền chưa trở lại mức bình quân chưa tạo điều kiện cho việc mở mua mới diện rộng.",
        "Độ rộng sàn TP.HCM ở mức 127 mã tăng so với 169 mã giảm và 62 mã tham chiếu. Dân trí ghi nhận thanh khoản toàn thị trường tăng lên khoảng 19 nghìn tỷ đồng, trong đó nhóm tài chính giao dịch nổi bật. Tuy nhiên số mã giảm vẫn chiếm ưu thế, vì vậy sự sôi động ở ngân hàng chưa đủ để đảo trạng thái chung.",
        "Về kỹ thuật, chỉ số VN đóng dưới đường trung bình 20 phiên 1.815,79 nhưng vẫn cao hơn đường trung bình 200 phiên 1.794,43 và đường trung bình 50 phiên 1.774,71. Nến ngày đỏ, thân tương đối dài và đóng gần đáy phiên; ngắn hạn chuyển sang YẾU. Trung hạn chưa gãy vì đường trung bình 200 và 50 phiên vẫn còn được giữ.",
        "Bản đồ dòng tiền cho thấy có sự luân chuyển vào ngân hàng nhưng chưa tạo được sức lan tỏa đủ rộng. TCB, LPB, GEE, MSB và HDB là các mã nâng đỡ chỉ số; ngược lại VIC, VHM và VPL gây áp lực giảm mạnh. Vì vậy thị trường không thiếu hoàn toàn dòng tiền, nhưng dòng tiền đang phân hóa và chưa tạo ra một nhóm dẫn dắt đồng thuận.",
        "Khối ngoại là điểm trừ khi VNIndex.ai ước tính bán ròng khoảng 1.110 tỷ đồng trên sàn TP.HCM; Vietstock trong phiên cũng ghi nhận xu hướng bán ròng tiếp diễn. Dữ liệu tự doanh ngày 23/09 chưa được xác minh độc lập sau nhiều lượt tìm nên không dùng để chấm điểm. Phái sinh thận trọng khi hợp đồng tương lai gần nhất đóng 1.950 điểm, thấp hơn VN30 cơ sở 4,91 điểm."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / đường trung bình 200 phiên",
          "value": "1.794–1.800",
          "note": "Đường trung bình 200 phiên ở 1.794,43 và đáy phiên ở 1.798,16. Nếu chỉ số giữ được vùng này, độ rộng cải thiện và áp lực bán ngoại giảm, ưu tiên quan sát khả năng cân bằng; chưa tự động coi là điểm mua."
        },
        {
          "label": "Hỗ trợ mạnh / đường trung bình 50 phiên",
          "value": "1.772–1.778",
          "note": "Đường trung bình 50 phiên ở 1.774,71. Nếu đóng dưới vùng này cùng số mã giảm tiếp tục áp đảo, phải hạ thêm tỷ trọng và dừng mọi ý định bắt đáy."
        },
        {
          "label": "Kháng cự gần / đường trung bình 20 phiên",
          "value": "1.814–1.818",
          "note": "Đường trung bình 20 phiên ở 1.815,79. Chỉ khi đóng trở lại trên vùng này với thanh khoản cải thiện và độ rộng chuyển dương mới xem xét gỡ bớt trạng thái phòng thủ."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.822–1.830",
          "note": "Đỉnh phiên 23/09 ở 1.822,67 và vùng 1.825–1.830 tiếp tục là cản. Nếu hồi lên mà dòng tiền vẫn yếu hoặc khối ngoại tiếp tục bán, ưu tiên hạ phần hàng yếu thay vì mua thêm."
        },
        {
          "label": "Mốc vô hiệu trung hạn gần",
          "value": "<1.775",
          "note": "Đóng dưới đường trung bình 50 phiên làm suy yếu đáng kể cấu trúc giữ nền hiện tại và chuyển kế hoạch sang giảm rủi ro mạnh hơn."
        }
      ],
      "confluence": {
        "score": -5,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / đường trung bình / cấu trúc",
            "score": -1,
            "note": "Đóng dưới đường trung bình 20 phiên, nến đỏ và đóng gần đáy ngày; dù vẫn trên đường trung bình 200 và 50 phiên, cấu trúc ngắn hạn đã yếu."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 12,2%, chưa cho thấy lực cầu đủ mạnh để xác nhận nhịp hồi."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "127 mã tăng so với 169 mã giảm; mặt bằng cổ phiếu nghiêng về bên bán."
          },
          {
            "factor": "Dòng tiền",
            "score": 0,
            "note": "Có luân chuyển vào ngân hàng nhưng sự phân hóa còn cao và chưa tạo được sức lan tỏa đủ rộng."
          },
          {
            "factor": "Khối ngoại",
            "score": -1,
            "note": "Ước tính bán ròng khoảng 1.110 tỷ đồng trên sàn TP.HCM, tiếp tục tạo áp lực lên tâm lý."
          },
          {
            "factor": "Chất lượng nhóm dẫn dắt",
            "score": 0,
            "note": "Ngân hàng có nhiều mã nâng đỡ nhưng nhóm bất động sản vốn hóa lớn gây sức ép mạnh; chưa có sự đồng thuận rõ giữa các nhóm trụ."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": -1,
            "note": "Hợp đồng tương lai gần nhất thấp hơn VN30 cơ sở 4,91 điểm, phản ánh tâm lý thận trọng hơn ở thị trường phái sinh."
          }
        ],
        "veto": [
          "Độ rộng yếu: số mã giảm nhiều hơn số mã tăng trong bộ dữ liệu đã khóa",
          "Thanh khoản khớp lệnh thấp hơn bình quân 20 phiên khoảng 12,2%, chưa xác nhận lực cầu",
          "Khối ngoại tiếp tục bán ròng mạnh theo số liệu ước tính hậu phiên",
          "Chỉ số thất bại tại vùng 1.815–1.823 và đóng dưới đường trung bình 20 phiên",
          "Tỷ lệ lợi nhuận/rủi ro từ giá đóng cửa tới cản gần 1.815–1.816 so với mốc rủi ro quanh 1.794 chỉ khoảng 1,96:1, thấp hơn chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 20,
          "if": "Chỉ số VN giữ được 1.794–1.800 rồi đóng trở lại trên 1.816, giá trị khớp lệnh quay về ít nhất quanh bình quân 20 phiên khoảng 14.366 tỷ đồng, độ rộng chuyển dương và khối ngoại giảm bán",
          "then": "Chỉ xem xét mua thăm dò sau khi vượt cản và kiểm định lại thành công; ưu tiên cổ phiếu dẫn dắt có nền cơ bản tốt, mức cắt lỗ 3–7% và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1."
        },
        {
          "state": "neutral",
          "probability": 45,
          "if": "Chỉ số VN dao động trong 1.794–1.816, giữ được đường trung bình 200 phiên nhưng thanh khoản vẫn thấp và độ rộng chưa cải thiện rõ",
          "then": "Duy trì PHÒNG THỦ; giữ tiền mặt cao, chỉ giữ cổ phiếu khỏe hơn thị trường và không mở vị thế mới diện rộng."
        },
        {
          "state": "risk_off",
          "probability": 35,
          "if": "Chỉ số VN đóng dưới 1.794 và đặc biệt mất vùng 1.772–1.778 cùng độ rộng tiếp tục xấu",
          "then": "Hạ thêm tỷ trọng cổ phiếu, dừng bắt đáy, xử lý vị thế vi phạm mức cắt lỗ 3–7% và không dùng đòn bẩy để bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — giữ 1.794–1.800 rồi đóng trên 1.816, độ rộng chuyển dương, thanh khoản trở lại ít nhất quanh bình quân 20 phiên và áp lực bán ngoại giảm",
          "then": "MUA THĂM DÒ SAU KHI KIỂM ĐỊNH LẠI. Chỉ chọn cổ phiếu dẫn dắt cơ bản tốt; cắt lỗ 3–7%, tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1 và chưa tăng đòn bẩy vội."
        },
        {
          "state": "neutral",
          "if": "CHƯA XÁC NHẬN — chỉ số giữ 1.794–1.816 nhưng chưa lấy lại đường trung bình 20 phiên hoặc độ rộng vẫn âm",
          "then": "GIỮ TIỀN / PHÒNG THỦ. Tỷ trọng cổ phiếu tối đa khoảng 20%, không mua đuổi, không bắt đáy diện rộng và không tăng đòn bẩy."
        },
        {
          "state": "risk_off",
          "if": "RỦI RO TĂNG — đóng dưới 1.794; nghiêm trọng hơn nếu mất vùng 1.772–1.778 và số mã giảm tiếp tục áp đảo",
          "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý các vị thế yếu hoặc chạm mức cắt lỗ 3–7%; không bình quân giá xuống."
        }
      ],
      "focus": "PHÒNG THỦ • Điểm đồng thuận -5/7 • cổng loại trừ: độ rộng yếu + thanh khoản chưa xác nhận + bán ròng ngoại + thất bại tại đường trung bình 20 phiên + tỷ lệ lợi nhuận/rủi ro <2 • đường trung bình 20 phiên 1.815,79 • đường trung bình 200 phiên 1.794,43 • đường trung bình 50 phiên 1.774,71 • giá trị khớp lệnh ~12.617 tỷ • khối ngoại bán ròng ước ~1.110 tỷ • phái sinh thấp hơn cơ sở 4,91 điểm • cổ phiếu tối đa ~20% • không tăng đòn bẩy",
      "inference": "Dữ liệu cuối ngày 23/09/2026 đã vượt cổng dữ liệu với 127/127 mã; toàn bộ 127 mã được KBS đúng ngày xác nhận giá đóng cửa trùng VNDIRECT khi CafeF chưa có dòng cuối ngày. VNDIRECT khóa chỉ số VN 1.801,65 (-0,84%), VN30 1.954,91 (-0,53%), HNX 276,45 (-0,17%) và độ rộng sàn TP.HCM 127 tăng/62 tham chiếu/169 giảm/5 sàn. Chuỗi 220 phiên cho đường trung bình 20 phiên 1.815,79, đường trung bình 50 phiên 1.774,71 và đường trung bình 200 phiên 1.794,43; giá trị khớp lệnh 12.617,00 tỷ đồng so với bình quân 5 phiên 14.631,13 tỷ, bình quân 10 phiên 14.091,00 tỷ và bình quân 20 phiên 14.366,27 tỷ. VNIndex.ai ước tính khối ngoại bán ròng khoảng 1.110 tỷ đồng trên sàn TP.HCM. DNSE cho thấy hợp đồng tương lai gần nhất đóng 1.950 điểm, thấp hơn VN30 cơ sở 4,91 điểm. Điểm đồng thuận = -5/7 với cấu phần -1,-1,-1,0,-1,0,-1. Cổng loại trừ có hiệu lực; kết luận: PHÒNG THỦ.",
      "limitations": [
        "Dữ liệu tự doanh ngày 23/09 chưa được xác minh độc lập sau nhiều lượt tìm trên 24HMoney, VietnamBiz, Smoney và các nguồn tổng hợp; không dùng biến này để nâng hoặc hạ điểm đồng thuận.",
        "Khối ngoại 23/09 được dùng theo số ước tính khoảng 1.110 tỷ đồng trên sàn TP.HCM từ VNIndex.ai và được đối chiếu xu hướng bán ròng trong phiên từ Vietstock; chưa có nguồn hậu phiên thứ hai công bố cùng một con số nên mức tin cậy được hạ một bậc.",
        "Giá trị giao dịch toàn thị trường khoảng 19 nghìn tỷ đồng trong Dân trí bao gồm phạm vi rộng hơn; phần so sánh nền thanh khoản trong bản nhận định chỉ dùng giá trị khớp lệnh VNDIRECT 12.617,00 tỷ đồng để giữ cùng phạm vi."
      ],
      "zaloPost": "Phiên 23/09 cho thấy thị trường vẫn chưa thoát khỏi trạng thái phòng thủ. Chỉ số VN đóng 1.801,65 điểm, giảm 0,84%; độ rộng sàn TP.HCM có 127 mã tăng nhưng 169 mã giảm. Chỉ số đã mất lại đường trung bình 20 phiên tại 1.815,79 và đóng gần vùng thấp nhất ngày, cho thấy lực cầu cuối phiên chưa đủ mạnh.\n\nThanh khoản có cải thiện so với phiên trước nhưng vẫn chưa đạt mức cần thiết để xác nhận một nhịp hồi bền. Giá trị khớp lệnh khoảng 12,62 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 12,2%. Dòng tiền tập trung đáng kể vào ngân hàng với TCB, LPB, MSB và HDB nâng đỡ, trong khi VIC, VHM và VPL gây sức ép lớn. Khối ngoại được ước tính bán ròng khoảng 1.110 tỷ đồng trên sàn TP.HCM. Dữ liệu tự doanh hôm nay chưa được xác minh chắc chắn nên tôi không đưa vào chấm điểm.\n\nVùng quan trọng nhất cho phiên tới là 1.794–1.800, tương ứng khu vực đường trung bình 200 phiên. Nếu chỉ số giữ được vùng này, độ rộng cải thiện và sau đó đóng trở lại trên 1.816 với giá trị khớp lệnh quay về ít nhất quanh bình quân 20 phiên, khi đó mới xem xét mua thăm dò sau khi kiểm định lại. Nếu chưa có các điều kiện trên, tiếp tục giữ trạng thái phòng thủ.\n\nNếu chỉ số đóng dưới 1.794, cần giảm phần giao dịch ngắn hạn; mất tiếp vùng 1.772–1.778 thì dừng bắt đáy và hạ thêm tỷ trọng. Việc nên làm ngay là giữ tiền mặt cao, rà lại các mã yếu hơn thị trường và không tăng đòn bẩy. Tỷ trọng cổ phiếu mới tối đa khoảng 20%; mỗi giao dịch phải có mức cắt lỗ 3–7% và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1.\n\nThị trường chưa trả đủ phần thưởng cho rủi ro thì chưa cần vội. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      "sources": [
        {
          "label": "VNDIRECT — chỉ số và độ rộng cuối phiên 23/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-23&size=500"
        },
        {
          "label": "VNDIRECT — chuỗi chỉ số VN tính các đường trung bình và nền thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-23&size=500"
        },
        {
          "label": "Dân trí — thị trường rung lắc mạnh, nhóm ngân hàng giao dịch nổi bật",
          "url": "https://dantri.com.vn/kinh-doanh/chung-khoan-rung-lac-manh-co-phieu-vua-giao-dich-dot-bien-20260923153501971.htm"
        },
        {
          "label": "VNIndex.ai — điểm số, nhóm kéo/đè và ước tính giao dịch khối ngoại",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "Vietstock — khối ngoại tiếp tục bán ròng trong phiên 23/09",
          "url": "https://fili.vn/2026/09/nhip-dap-thi-truong-2309-vic-va-vhm-ganh-da-tang-cua-chi-so-1636-1495006.htm"
        },
        {
          "label": "DNSE — dữ liệu hợp đồng tương lai VN30 gần nhất",
          "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790096400&to=1790182800"
        }
      ]
    },
    {
      "id": "market-view-20260922",
      "date": "2026-09-22",
      "publishedAt": "22/09/2026 • Sau phiên",
      "edition": "Số 23",
      "sentiment": "watch",
      "sentimentLabel": "PHÒNG THỦ / CHỜ XÁC NHẬN",
      "dataStatus": "VNDIRECT + VnEconomy + DNSE + KBS • dữ liệu cuối ngày 22.09.2026 • tự doanh: CHƯA XÁC MINH",
      "title": "Lấy lại 1.800 điểm nhưng thanh khoản hụt mạnh — chưa đủ điều kiện mở mua",
      "thesis": "Dữ liệu đến hết phiên 22/09/2026. Chỉ số VN đóng 1.816,93 điểm, tăng 17,26 điểm (+0,96%); VN30 tăng 0,62% lên 1.965,36 điểm và HNX tăng 0,93% lên 276,93 điểm. Độ rộng sàn TP.HCM theo bộ dữ liệu đã khóa là 157 mã tăng, 79 mã tham chiếu và 120 mã giảm. Giá trị khớp lệnh chỉ đạt 10.237,94 tỷ đồng, thấp hơn bình quân 20 phiên khoảng 28,6%. Chỉ số vừa lấy lại đường trung bình 20 phiên 1.814,11 và vẫn đứng trên đường trung bình 200 phiên 1.793,88 cùng đường trung bình 50 phiên 1.775,25. Khối ngoại theo VnEconomy đảo chiều mua ròng hơn 322 tỷ đồng; dữ liệu tự doanh 22/09 chưa xác minh độc lập. Hợp đồng tương lai gần nhất đóng 1.962,9 điểm, thấp hơn VN30 cơ sở 2,46 điểm. Điểm đồng thuận +2/7 nhưng cổng loại trừ vẫn kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ / CHỜ XÁC NHẬN; không mua đuổi, không tăng đòn bẩy.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.816,93",
          "change": "+17,26 • +0,96%",
          "tone": "positive"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "157 tăng / 120 giảm",
          "change": "79 tham chiếu • 7 mã sàn",
          "tone": "positive"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "~10.238 tỷ",
          "change": "−28,6% so với bình quân 20 phiên ~14.343 tỷ",
          "tone": "warning"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "MUA RÒNG >322 tỷ",
          "change": "Đảo chiều mua trở lại theo VnEconomy",
          "tone": "positive"
        }
      ],
      "backdrop": [
        "Bản chất phiên 22/09 là hồi phục có cải thiện độ rộng nhưng chất lượng dòng tiền chưa đủ mạnh để xác nhận một nhịp tăng bền. Chỉ số VN mở cửa 1.798,90 điểm, có lúc lùi xuống 1.787,62 rồi hồi lên cao nhất 1.828,19 trước khi đóng 1.816,93. Cấu trúc nến xanh rút chân cho thấy lực bán ở vùng thấp đã giảm, nhưng cung vẫn xuất hiện khi chỉ số tiến gần 1.830.",
        "Thanh khoản là điểm yếu lớn nhất. Giá trị khớp lệnh chỉ khoảng 10.237,94 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 33,0%, thấp hơn bình quân 10 phiên khoảng 27,6% và thấp hơn bình quân 20 phiên khoảng 28,6%; khối lượng khớp cũng thấp hơn bình quân 20 phiên khoảng 27,6%. Một phiên tăng gần 1% nhưng tiền vào hụt mạnh không đủ điều kiện xác nhận mở vị thế mới diện rộng.",
        "Độ rộng cải thiện với 157 mã tăng so với 120 mã giảm, phù hợp với nhận định của VnEconomy rằng mặt bằng giá có lan tỏa tích cực hơn so với phiên trước. Tuy nhiên điểm số vẫn được nâng đỡ đáng kể bởi VIC, VHM và MSN. Vì vậy dòng tiền được đánh giá là có lan tỏa vừa phải nhưng vẫn thiên về một số cổ phiếu vốn hóa lớn, chưa xuất hiện nhóm dẫn dắt đủ rộng.",
        "Về kỹ thuật, chỉ số VN đóng trên đường trung bình 20 phiên 1.814,11 khoảng 2,82 điểm, đồng thời vẫn cao hơn đường trung bình 200 phiên 1.793,88 và đường trung bình 50 phiên 1.775,25. Ngắn hạn chuyển từ YẾU sang TRUNG TÍNH, nhưng chưa đủ cơ sở chuyển sang trạng thái TÍCH CỰC vì vùng 1.825–1.830 chưa được vượt dứt khoát và thanh khoản chưa xác nhận.",
        "Bản đồ dòng tiền cho thấy tiền vào chọn lọc ở một số cổ phiếu bất động sản vốn hóa lớn và tiêu dùng, nổi bật VIC, VHM, MSN trong vai trò nâng chỉ số. Ngân hàng tiếp tục phân hóa khi SSB, VPB và ACB nằm trong nhóm gây sức ép giảm điểm. Đọc xoay vòng hiện tại là tiền rời trạng thái bán mạnh của phiên trước để quay lại một số trụ, nhưng chưa đủ rộng để xem là dòng tiền dẫn dắt thực sự.",
        "Khối ngoại là điểm cộng khi đảo chiều mua ròng hơn 322 tỷ đồng theo VnEconomy sau phiên bán mạnh trước đó. Dữ liệu tự doanh ngày 22/09 chưa được xác minh độc lập sau nhiều lượt tìm nên không dùng để chấm điểm. Phái sinh vẫn thận trọng: hợp đồng tương lai gần nhất đóng 1.962,9 điểm so với VN30 cơ sở 1.965,36 điểm, chênh lệch âm 2,46 điểm."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / đường trung bình 20 phiên",
          "value": "1.810–1.815",
          "note": "Đường trung bình 20 phiên ở 1.814,11. Nếu chỉ số giữ được vùng này và độ rộng tiếp tục dương, ưu tiên giữ cổ phiếu khỏe hơn thị trường; chưa mua đuổi."
        },
        {
          "label": "Hỗ trợ mạnh / đường trung bình 200 phiên",
          "value": "1.790–1.795",
          "note": "Đường trung bình 200 phiên ở 1.793,88. Nếu đóng dưới vùng này cùng số mã giảm áp đảo, phải giảm rủi ro phần giao dịch ngắn hạn."
        },
        {
          "label": "Kháng cự gần",
          "value": "1.825–1.830",
          "note": "Đỉnh phiên 22/09 ở 1.828,19. Chỉ khi đóng vượt vùng này với thanh khoản cải thiện rõ và độ rộng tiếp tục tích cực mới xem xét gỡ bớt trạng thái phòng thủ."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.840–1.850",
          "note": "Đây là vùng cung đã nhiều lần gây rung lắc. Tại giá đóng cửa 1.816,93, tỷ lệ lợi nhuận/rủi ro tới vùng này so với đường trung bình 200 phiên vẫn thấp hơn chuẩn 2:1."
        },
        {
          "label": "Mốc vô hiệu ngắn hạn",
          "value": "<1.790",
          "note": "Đóng dưới 1.790 làm suy yếu lại cấu trúc hồi phục; mất tiếp vùng 1.775–1.780 quanh đường trung bình 50 phiên thì chuyển sang giảm rủi ro mạnh hơn."
        }
      ],
      "confluence": {
        "score": 2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / đường trung bình / cấu trúc",
            "score": 1,
            "note": "Đóng trên đường trung bình 20, 50 và 200 phiên; nến xanh rút chân cho thấy lực cầu có phản ứng tại vùng thấp."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 28,6%, không xác nhận mức tăng gần 1% của chỉ số."
          },
          {
            "factor": "Độ rộng",
            "score": 1,
            "note": "157 mã tăng so với 120 mã giảm; độ rộng đã chuyển tích cực hơn phiên trước."
          },
          {
            "factor": "Dòng tiền",
            "score": 0,
            "note": "Có cải thiện nhưng điểm số vẫn được nâng đỡ đáng kể bởi một số cổ phiếu vốn hóa lớn; chưa có sự lan tỏa đủ mạnh."
          },
          {
            "factor": "Khối ngoại",
            "score": 1,
            "note": "Đảo chiều mua ròng hơn 322 tỷ đồng theo VnEconomy, cải thiện so với phiên trước."
          },
          {
            "factor": "Chất lượng nhóm dẫn dắt",
            "score": 0,
            "note": "VIC, VHM và MSN kéo chỉ số rõ, trong khi ngân hàng còn phân hóa; chưa có nhóm dẫn dắt đồng thuận đủ rộng."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": 0,
            "note": "Hợp đồng tương lai gần nhất thấp hơn VN30 cơ sở 2,46 điểm; mức chênh lệch không quá sâu nhưng chưa ủng hộ tăng rủi ro."
          }
        ],
        "veto": [
          "Thanh khoản không xác nhận: giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 28,6% trong một phiên chỉ số tăng gần 1%",
          "Dòng tiền còn tập trung đáng kể vào một số cổ phiếu vốn hóa lớn, chưa tạo được nhóm dẫn dắt đủ rộng",
          "Tỷ lệ lợi nhuận/rủi ro tại vùng đóng cửa tới kháng cự 1.840–1.850 so với mốc vô hiệu quanh 1.794 chưa đạt chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 25,
          "if": "Chỉ số VN giữ 1.810–1.815 rồi đóng vượt 1.830, giá trị khớp lệnh cải thiện ít nhất về quanh bình quân 20 phiên khoảng 14.343 tỷ đồng, độ rộng tiếp tục dương và khối ngoại không quay lại bán mạnh",
          "then": "Chỉ mua thăm dò sau khi vượt cản và kiểm định lại thành công; ưu tiên cổ phiếu dẫn dắt có nền cơ bản tốt, mức cắt lỗ 3–7% và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1."
        },
        {
          "state": "neutral",
          "probability": 50,
          "if": "Chỉ số VN dao động trong 1.794–1.830, giữ được các đường trung bình dài hơn nhưng thanh khoản vẫn thấp và nhóm dẫn dắt chưa mở rộng",
          "then": "Duy trì PHÒNG THỦ / CHỜ XÁC NHẬN; giữ cổ phiếu khỏe sẵn có, tỷ trọng chiến thuật tối đa khoảng 20%, không mua đuổi và không tăng đòn bẩy."
        },
        {
          "state": "risk_off",
          "probability": 25,
          "if": "Chỉ số VN đóng dưới 1.790 và đặc biệt mất vùng 1.775–1.780 cùng độ rộng chuyển xấu",
          "then": "Hạ thêm tỷ trọng, dừng mở vị thế mới, xử lý cổ phiếu vi phạm mức cắt lỗ 3–7% và không bình quân giá xuống bằng đòn bẩy."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — giữ 1.810–1.815 và đóng vượt 1.830 với giá trị khớp lệnh quay về quanh bình quân 20 phiên, độ rộng dương và nhóm dẫn dắt mở rộng",
          "then": "MUA THĂM DÒ SAU KHI KIỂM ĐỊNH LẠI. Chỉ chọn cổ phiếu cơ bản tốt, cắt lỗ 3–7%, tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1 và chưa tăng đòn bẩy vội."
        },
        {
          "state": "neutral",
          "if": "CHƯA XÁC NHẬN — chỉ số giữ 1.794–1.830 nhưng thanh khoản thấp hoặc điểm số tiếp tục phụ thuộc vào vài cổ phiếu vốn hóa lớn",
          "then": "GIỮ / CHỜ. Tỷ trọng chiến thuật tối đa khoảng 20%, tiền mặt cao, không mua đuổi và không tăng đòn bẩy."
        },
        {
          "state": "risk_off",
          "if": "RỦI RO TĂNG — đóng dưới 1.790; nghiêm trọng hơn nếu mất vùng 1.775–1.780 và số mã giảm áp đảo",
          "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý vị thế yếu hoặc chạm mức cắt lỗ 3–7%; không bình quân giá xuống."
        }
      ],
      "focus": "PHÒNG THỦ / CHỜ XÁC NHẬN • Điểm đồng thuận +2/7 • cổng loại trừ: thanh khoản yếu + dòng tiền còn tập trung ở trụ + tỷ lệ lợi nhuận/rủi ro <2 • đường trung bình 20 phiên 1.814,11 • đường trung bình 200 phiên 1.793,88 • đường trung bình 50 phiên 1.775,25 • giá trị khớp lệnh ~10.238 tỷ • khối ngoại mua ròng >322 tỷ • phái sinh thấp hơn cơ sở 2,46 điểm • tỷ trọng chiến thuật ≤20% • không tăng đòn bẩy",
      "inference": "Dữ liệu cuối ngày 22/09/2026 đã vượt cổng dữ liệu với 127/127 mã; ngoại lệ OIL giữa CafeF và VNDIRECT đã được KBS đúng ngày xác nhận trùng VNDIRECT ở 14.300 đồng. VNDIRECT khóa chỉ số VN 1.816,93 (+0,96%), VN30 1.965,36 (+0,62%), HNX 276,93 (+0,93%) và độ rộng sàn TP.HCM 157 tăng/79 tham chiếu/120 giảm/7 sàn. Chuỗi 219 phiên cho đường trung bình 20 phiên 1.814,11, đường trung bình 50 phiên 1.775,25 và đường trung bình 200 phiên 1.793,88; giá trị khớp lệnh 10.237,94 tỷ đồng so với bình quân 5 phiên 15.277,15 tỷ, bình quân 10 phiên 14.141,64 tỷ và bình quân 20 phiên 14.343,34 tỷ. VnEconomy ghi khối ngoại đảo chiều mua ròng hơn 322 tỷ đồng và mức tăng chỉ số được nâng đỡ đáng kể bởi VIC, VHM, MSN. DNSE cho thấy hợp đồng tương lai gần nhất đóng 1.962,9 điểm, thấp hơn VN30 cơ sở 2,46 điểm. Điểm đồng thuận = +2/7 với cấu phần +1,-1,+1,0,+1,0,0. Cổng loại trừ có hiệu lực; kết luận: PHÒNG THỦ / CHỜ XÁC NHẬN.",
      "limitations": [
        "Dữ liệu tự doanh ngày 22/09 chưa được xác minh độc lập sau nhiều lượt tìm trên 24HMoney, VietnamBiz, VnEconomy và các nguồn tổng hợp; không dùng biến này để nâng hoặc hạ điểm đồng thuận.",
        "Giá trị giao dịch tổng cộng của một số nguồn bao gồm cả thỏa thuận; phần so sánh nền thanh khoản trong bản nhận định chỉ dùng giá trị khớp lệnh VNDIRECT để giữ cùng phạm vi.",
        "Khối ngoại được nêu theo con số hơn 322 tỷ đồng trong bài hậu phiên của VnEconomy; không tự quy đổi sang phạm vi sàn riêng nếu nguồn không ghi rõ."
      ],
      "zaloPost": "Phiên 22/09 giúp chỉ số lấy lại 1.800 điểm, nhưng chưa phải lúc để vội nâng rủi ro danh mục. Chỉ số VN đóng 1.816,93 điểm, tăng 0,96%; độ rộng cải thiện với 157 mã tăng so với 120 mã giảm. Điểm tích cực là lực bán ở vùng thấp đã dịu lại và khối ngoại đảo chiều mua ròng hơn 322 tỷ đồng.\n\nTuy nhiên phần quan trọng nhất nằm ở thanh khoản. Giá trị khớp lệnh chỉ khoảng 10,24 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 28,6%. Chỉ số tăng gần 1% nhưng tiền vào lại hụt mạnh, trong khi VIC, VHM và MSN đóng góp đáng kể cho nhịp hồi. Điều đó cho thấy thị trường có phục hồi, nhưng dòng tiền dẫn dắt vẫn chưa đủ rộng để mở vị thế mới diện rộng.\n\nVề kỹ thuật, chỉ số vừa lấy lại đường trung bình 20 phiên tại 1.814,11 và vẫn đứng trên đường trung bình 200 phiên quanh 1.793,88. Vùng 1.825–1.830 là cản gần. Nếu chỉ số giữ 1.810–1.815 rồi đóng vượt 1.830 với giá trị khớp lệnh quay về ít nhất quanh bình quân 20 phiên và độ rộng tiếp tục dương, lúc đó mới xem xét mua thăm dò sau khi kiểm định lại. Nếu chưa có các điều kiện này, tiếp tục chờ.\n\nỞ chiều ngược lại, nếu đóng dưới 1.790, cần giảm phần giao dịch ngắn hạn; mất tiếp 1.775–1.780 thì dừng bắt đáy. Việc nên làm phiên tới là giữ các cổ phiếu còn khỏe hơn thị trường, loại bớt mã yếu khi hồi, giữ tiền mặt cao và không tăng đòn bẩy. Tỷ trọng chiến thuật mới tối đa khoảng 20%; từng giao dịch phải có mức cắt lỗ 3–7% và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1.\n\nChỉ số xanh nhưng tiền chưa xác nhận thì vẫn phải giữ kỷ luật. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      "sources": [
        {
          "label": "VNDIRECT — chỉ số và độ rộng cuối phiên 22/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-22&size=500"
        },
        {
          "label": "VNDIRECT — chuỗi chỉ số VN tính các đường trung bình và nền thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-22&size=500"
        },
        {
          "label": "VnEconomy — vốn ngoại đảo chiều mua ròng, thị trường phân hóa",
          "url": "https://vneconomy.vn/von-ngoai-dao-chieu-mua-rong-thi-truong-phan-hoa.htm"
        },
        {
          "label": "VnEconomy — bán ít, độ rộng cải thiện nhưng thanh khoản rất thấp",
          "url": "https://vneconomy.vn/blog-chung-khoan-ban-it.htm"
        },
        {
          "label": "KBS — xác minh OIL ngày 22/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=22-09-2026&edate=22-09-2026"
        },
        {
          "label": "DNSE — dữ liệu hợp đồng tương lai VN30 gần nhất",
          "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790035200&to=1790121600"
        }
      ]
    },
    {
      "id": "market-view-20260921",
      "date": "2026-09-21",
      "publishedAt": "21/09/2026 • Sau phiên",
      "edition": "Số 22",
      "sentiment": "watch",
      "sentimentLabel": "PHÒNG THỦ / HẠ RỦI RO",
      "dataStatus": "VNDIRECT + KBS + Nhân Dân + VnEconomy + DNSE • dữ liệu cuối ngày 21.09.2026",
      "title": "Mất 1.800 điểm, độ rộng suy yếu rõ — ưu tiên bảo toàn vốn",
      "thesis": "Dữ liệu đến hết phiên 21/09/2026. VN-Index đóng 1.799,67 điểm, giảm 15,99 điểm (-0,88%); VN30 giảm 0,56% còn 1.953,26 điểm và HNX-Index giảm 0,33% còn 274,38 điểm. Độ rộng HOSE theo bộ dữ liệu đã khóa là 97 mã tăng, 60 mã tham chiếu và 200 mã giảm. Giá trị khớp lệnh HOSE đạt 13.665,80 tỷ đồng, thấp hơn bình quân 5/10/20 phiên lần lượt khoảng 12,6% / 3,3% / 3,5%. Chỉ số đóng dưới đường trung bình 20 phiên 1.809,98 nhưng vẫn trên đường trung bình 200 phiên 1.793,21 và 50 phiên 1.775,72. Khối ngoại bán ròng hơn 676 tỷ đồng trên toàn 3 sàn; hợp đồng tương lai gần nhất đóng 1.949 điểm, thấp hơn VN30 cơ sở 4,26 điểm. Điểm đồng thuận -6/7 và cổng loại trừ đang kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ / HẠ RỦI RO; không mở vị thế mới diện rộng, không tăng đòn bẩy.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "VN-INDEX",
          "value": "1.799,67",
          "change": "−15,99 • −0,88%",
          "tone": "warning"
        },
        {
          "label": "ĐỘ RỘNG HOSE",
          "value": "97 tăng / 200 giảm",
          "change": "60 tham chiếu • 5 mã sàn",
          "tone": "warning"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH HOSE",
          "value": "~13.666 tỷ",
          "change": "−3,5% so với bình quân 20 phiên ~14.161 tỷ",
          "tone": "warning"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "BÁN RÒNG >676 tỷ",
          "change": "Tổng cộng trên 3 sàn",
          "tone": "warning"
        }
      ],
      "backdrop": [
        "Bản chất phiên 21/09 là suy yếu thật về độ rộng và dòng tiền, không chỉ là điều chỉnh kỹ thuật ở vài mã trụ. VN-Index mở cửa tại 1.829,03 điểm, cũng là mức cao nhất phiên, sau đó giảm sâu về 1.783,03 trước khi hồi lên 1.799,67. Việc đóng cửa mất mốc 1.800 và thấp hơn đường trung bình 20 phiên cho thấy xu hướng ngắn hạn đã giảm chất lượng rõ rệt.",
        "Thanh khoản không xác nhận khả năng hồi phục. Giá trị khớp lệnh HOSE chỉ khoảng 13.665,80 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 12,6%, thấp hơn bình quân 10 phiên khoảng 3,3% và thấp hơn bình quân 20 phiên khoảng 3,5%. VnEconomy cũng ghi nhận nếu loại phần giao dịch của khối ngoại, dòng tiền trong nước ở mức rất thấp. Đây là cổng loại trừ đối với việc mở vị thế mới.",
        "Độ rộng là điểm yếu nổi bật: bộ dữ liệu VNDIRECT khóa 97 mã tăng so với 200 mã giảm, 60 mã tham chiếu và 5 mã sàn. Nhóm bất động sản vốn hóa lớn chịu áp lực mạnh với VHM, VIC, VRE; FPT giảm sâu và nhóm vốn hóa lớn tiếp tục gây sức ép lên chỉ số. Một vài mã như VJC, APH, NHH tăng mạnh nhưng chưa hình thành nhóm dẫn dắt đủ rộng để coi là dòng tiền khỏe.",
        "Về kỹ thuật, VN-Index đóng dưới đường trung bình 20 phiên 1.809,98 nhưng vẫn đứng trên đường trung bình 200 phiên 1.793,21 và đường trung bình 50 phiên 1.775,72. Nến ngày giảm mạnh, có rút chân từ vùng 1.783 nhưng lực hồi cuối phiên chưa đủ lấy lại 1.800. Vì vậy trạng thái ngắn hạn là YẾU, trung hạn chuyển sang TRUNG TÍNH và vùng 1.790–1.795 trở thành phòng tuyến rất quan trọng.",
        "Khối ngoại quay lại bán ròng mạnh hơn 676 tỷ đồng trên cả 3 sàn, tập trung ở VHM, VIC, FPT, SSB và SHB. Lực mua ở đợt xác định giá đóng cửa giúp chỉ số thu hẹp mức giảm nhưng không đảo ngược trạng thái phân phối của nhóm vốn hóa lớn. Dữ liệu tự doanh 21/09 chưa được xác minh độc lập sau nhiều lượt tìm, vì vậy không dùng biến này để chấm điểm.",
        "Phái sinh cũng nghiêng thận trọng: hợp đồng tương lai gần nhất đóng 1.949 điểm so với VN30 cơ sở 1.953,26 điểm, chênh lệch âm 4,26 điểm. Cùng với việc thị trường giảm ngay ngày đầu sau sự kiện nâng hạng và thanh khoản nội địa yếu, tín hiệu này chưa ủng hộ việc tăng rủi ro danh mục."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / đường trung bình 200 phiên",
          "value": "1.790–1.795",
          "note": "Đường trung bình 200 phiên ở 1.793,21. Nếu chỉ số giữ được vùng này, độ rộng cải thiện và áp lực bán ngoại giảm, ưu tiên quan sát khả năng cân bằng; chưa tự động coi là điểm mua."
        },
        {
          "label": "Hỗ trợ mạnh / đường trung bình 50 phiên",
          "value": "1.775–1.780",
          "note": "Đường trung bình 50 phiên ở 1.775,72. Nếu đóng dưới vùng này cùng số mã giảm tiếp tục áp đảo, phải hạ thêm tỷ trọng và dừng mọi ý định bắt đáy."
        },
        {
          "label": "Kháng cự gần / xác nhận hồi phục",
          "value": "1.808–1.812",
          "note": "Đây là vùng đường trung bình 20 phiên 1.809,98. Chỉ khi đóng trở lại trên vùng này, thanh khoản cải thiện và độ rộng chuyển dương mới xem xét gỡ bớt trạng thái phòng thủ."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.825–1.830",
          "note": "Vùng mở cửa và đỉnh phiên 21/09 nằm quanh đây. Nếu hồi lên mà dòng tiền vẫn yếu hoặc khối ngoại tiếp tục bán, ưu tiên hạ phần hàng yếu thay vì mua thêm."
        },
        {
          "label": "Mốc vô hiệu ngắn hạn",
          "value": "<1.775",
          "note": "Đóng dưới đường trung bình 50 phiên làm hỏng cấu trúc giữ nền trung hạn hiện tại và chuyển kế hoạch sang giảm rủi ro mạnh hơn."
        }
      ],
      "confluence": {
        "score": -6,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / đường trung bình / cấu trúc",
            "score": 0,
            "note": "Đã mất đường trung bình 20 phiên nhưng vẫn giữ trên đường trung bình 200 và 50 phiên; cấu trúc ngắn hạn yếu, trung hạn chưa gãy hoàn toàn."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 3,5% trong khi thị trường cần lực cầu xác nhận sau nhịp giảm."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "97 mã tăng so với 200 mã giảm, cho thấy áp lực bán lan rộng."
          },
          {
            "factor": "Dòng tiền",
            "score": -1,
            "note": "Dòng tiền trong nước yếu, chưa xuất hiện sự lan tỏa đủ rộng để hình thành nhịp dẫn dắt mới."
          },
          {
            "factor": "Khối ngoại",
            "score": -1,
            "note": "Bán ròng hơn 676 tỷ đồng trên toàn 3 sàn, tập trung ở nhiều cổ phiếu vốn hóa lớn."
          },
          {
            "factor": "Chất lượng nhóm dẫn dắt",
            "score": -1,
            "note": "Chưa có nhóm dẫn dắt rõ; một số mã tăng mạnh chỉ mang tính đơn lẻ và không đủ đại diện cho sức khỏe chung."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": -1,
            "note": "Hợp đồng tương lai gần nhất thấp hơn VN30 cơ sở 4,26 điểm; tâm lý phòng thủ vẫn chiếm ưu thế."
          }
        ],
        "veto": [
          "Độ rộng yếu rõ rệt: số mã giảm hơn gấp đôi số mã tăng trong bộ dữ liệu đã khóa",
          "Thanh khoản không xác nhận khả năng hồi phục và dòng tiền trong nước rất thận trọng",
          "Tỷ lệ lợi nhuận/rủi ro tại vùng đóng cửa hiện chưa đạt chuẩn 2:1 cho vị thế mua mới diện rộng"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 20,
          "if": "VN-Index giữ được 1.790–1.795, sau đó đóng trở lại trên 1.810 với độ rộng chuyển dương, thanh khoản ít nhất quay về quanh bình quân 20 phiên và khối ngoại giảm bán",
          "then": "Chỉ xem xét mua thăm dò sau khi vượt cản và kiểm định lại thành công; ưu tiên cổ phiếu dẫn dắt có nền cơ bản tốt, cắt lỗ 3–7% và chỉ nhận giao dịch có tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1."
        },
        {
          "state": "neutral",
          "probability": 50,
          "if": "VN-Index dao động trong 1.790–1.810, chưa mất đường trung bình 200 phiên nhưng cũng chưa lấy lại đường trung bình 20 phiên",
          "then": "Duy trì PHÒNG THỦ / HẠ RỦI RO; giữ tiền mặt cao, chỉ giữ cổ phiếu khỏe hơn thị trường và không mở vị thế mới diện rộng."
        },
        {
          "state": "risk_off",
          "probability": 30,
          "if": "VN-Index đóng dưới 1.790 và đặc biệt mất 1.775–1.780 cùng độ rộng tiếp tục xấu",
          "then": "Hạ thêm tỷ trọng cổ phiếu, dừng bắt đáy, xử lý vị thế vi phạm mức cắt lỗ 3–7% và không dùng đòn bẩy để bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — giữ 1.790–1.795 rồi đóng trên 1.810, độ rộng chuyển dương, thanh khoản trở lại ít nhất quanh bình quân 20 phiên và áp lực bán ngoại giảm",
          "then": "MUA THĂM DÒ SAU KHI KIỂM ĐỊNH LẠI. Chỉ chọn cổ phiếu dẫn dắt cơ bản tốt; cắt lỗ 3–7%, tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1 và chưa tăng đòn bẩy vội."
        },
        {
          "state": "neutral",
          "if": "CHƯA XÁC NHẬN — chỉ số giữ 1.790–1.810 nhưng chưa lấy lại đường trung bình 20 phiên hoặc độ rộng vẫn âm",
          "then": "GIỮ TIỀN / PHÒNG THỦ. Tỷ trọng cổ phiếu tối đa khoảng 20%, không mua đuổi, không bắt đáy diện rộng và không tăng đòn bẩy."
        },
        {
          "state": "risk_off",
          "if": "RỦI RO TĂNG — đóng dưới 1.790; nghiêm trọng hơn nếu mất vùng 1.775–1.780 và số mã giảm tiếp tục áp đảo",
          "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý các vị thế yếu hoặc chạm mức cắt lỗ 3–7%; không bình quân giá xuống."
        }
      ],
      "focus": "PHÒNG THỦ / HẠ RỦI RO • Điểm đồng thuận -6/7 • cổng loại trừ: độ rộng yếu + thanh khoản không xác nhận + tỷ lệ lợi nhuận/rủi ro <2 • đường trung bình 20 phiên 1.809,98 • đường trung bình 200 phiên 1.793,21 • đường trung bình 50 phiên 1.775,72 • giá trị khớp lệnh HOSE ~13.666 tỷ • khối ngoại bán ròng >676 tỷ trên 3 sàn • phái sinh thấp hơn cơ sở 4,26 điểm • cổ phiếu tối đa ~20% • không tăng đòn bẩy",
      "inference": "Dữ liệu cuối ngày 21/09/2026 đã vượt cổng dữ liệu với 127/127 mã. Ba sai lệch DDV, DRI và MSR giữa VNDIRECT và CafeF đã được KBS đúng ngày xác nhận trùng VNDIRECT. VNDIRECT khóa VN-Index 1.799,67 (-0,88%), VN30 1.953,26 (-0,56%), HNX-Index 274,38 (-0,33%) và độ rộng HOSE 97 tăng/60 tham chiếu/200 giảm/5 sàn. Chuỗi 218 phiên cho đường trung bình 20 phiên 1.809,98, đường trung bình 50 phiên 1.775,72 và đường trung bình 200 phiên 1.793,21; giá trị khớp lệnh HOSE 13.665,80 tỷ đồng so với bình quân 5 phiên 15.640,13 tỷ, bình quân 10 phiên 14.137,82 tỷ và bình quân 20 phiên 14.161,41 tỷ. Nhân Dân ghi khối ngoại bán ròng hơn 676 tỷ đồng trên cả 3 sàn. DNSE cho thấy hợp đồng tương lai gần nhất đóng 1.949 điểm, thấp hơn VN30 cơ sở 4,26 điểm. Điểm đồng thuận = -6/7 với cấu phần 0,-1,-1,-1,-1,-1,-1. Cổng loại trừ có hiệu lực; kết luận: PHÒNG THỦ / HẠ RỦI RO.",
      "limitations": [
        "Độ rộng giữa các nguồn có chênh lệch do phạm vi tổng hợp: VNDIRECT khóa 97 tăng/60 tham chiếu/200 giảm, trong khi Nhân Dân ghi 105 tăng/60 tham chiếu/205 giảm trên HOSE. Bản nhận định dùng duy nhất bộ VNDIRECT đã khóa cho bảng chính.",
        "Dữ liệu tự doanh 21/09 chưa được xác minh độc lập sau nhiều lượt tìm trên các nguồn tài chính hậu phiên; không dùng biến này để nâng hoặc hạ điểm đồng thuận.",
        "Khối ngoại được nêu theo phạm vi toàn 3 sàn từ Nhân Dân; không quy đổi sang riêng HOSE để tránh trộn phạm vi."
      ],
      "zaloPost": "Phiên 21/09 không còn là câu chuyện rung lắc quanh 1.800 điểm nữa, mà là tín hiệu phải ưu tiên bảo toàn vốn. VN-Index đóng 1.799,67 điểm, giảm 0,88%; số mã giảm lên tới 200 trong khi chỉ có 97 mã tăng. Chỉ số đã mất đường trung bình 20 phiên 1.809,98 và chỉ còn cách đường trung bình 200 phiên 1.793,21 một khoảng rất hẹp.\n\nĐiểm đáng ngại là lực cầu không vào đủ mạnh khi thị trường giảm. Giá trị khớp lệnh HOSE chỉ khoảng 13,67 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 3,5%. Khối ngoại lại bán ròng hơn 676 tỷ đồng trên toàn 3 sàn, tập trung ở VHM, VIC, FPT, SSB và SHB. Một vài mã tăng mạnh như VJC, APH, NHH chưa tạo được một nhóm dẫn dắt đủ rộng để thay đổi trạng thái chung. Dữ liệu tự doanh hôm nay chưa được xác minh chắc chắn nên tôi không dùng để tô đẹp hay làm xấu nhận định.\n\nVề kỹ thuật, vùng cần giữ ngay là 1.790–1.795. Nếu chỉ số giữ được vùng này, số mã tăng cải thiện và sau đó đóng trở lại trên 1.810 với thanh khoản quay về ít nhất quanh mức bình quân 20 phiên, lúc đó mới xem xét mua thăm dò sau khi kiểm định lại. Ngược lại, nếu đóng dưới 1.790 và đặc biệt mất 1.775–1.780, cần hạ thêm tỷ trọng, dừng bắt đáy và xử lý các mã yếu trước.\n\nViệc nên làm trong phiên tới là rà lại toàn bộ danh mục: giữ những cổ phiếu còn khỏe hơn thị trường, loại bớt mã mất nền hoặc vi phạm mức cắt lỗ. Tỷ trọng cổ phiếu nên giữ tối đa khoảng 20%, tiền mặt là chủ đạo, không tăng đòn bẩy. Mỗi giao dịch mới chỉ được thực hiện khi có mức cắt lỗ 3–7% và tỷ lệ lợi nhuận/rủi ro tối thiểu 2:1.\n\nThị trường chưa cho lợi thế rõ thì chưa cần vội; giữ được tiền cũng là một vị thế. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      "sources": [
        {
          "label": "VNDIRECT — chỉ số và độ rộng cuối phiên 21/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-21&size=500"
        },
        {
          "label": "VNDIRECT — chuỗi VN-Index tính các đường trung bình và nền thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-21&size=500"
        },
        {
          "label": "Nhân Dân — VN-Index mất 1.800 điểm, khối ngoại bán ròng mạnh",
          "url": "https://nhandan.vn/chung-khoan-ngay-219-khoi-ngoai-dao-chieu-ban-rong-vn-index-mat-moc-1800-diem-post989995.html"
        },
        {
          "label": "VnEconomy — dòng tiền trong nước yếu, chỉ số thủng 1.800 điểm",
          "url": "https://vneconomy.vn/vn-index-lai-thung-moc-1800-diem-ngay-nang-hang-dong-tien-chua-nhap-cuoc.htm"
        },
        {
          "label": "KBS — xác minh DDV ngày 21/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DDV/data_day?sdate=21-09-2026&edate=21-09-2026"
        },
        {
          "label": "KBS — xác minh DRI ngày 21/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DRI/data_day?sdate=21-09-2026&edate=21-09-2026"
        },
        {
          "label": "KBS — xác minh MSR ngày 21/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/MSR/data_day?sdate=21-09-2026&edate=21-09-2026"
        },
        {
          "label": "DNSE — dữ liệu hợp đồng tương lai VN30 gần nhất",
          "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1789948800&to=1790035200"
        }
      ]
    },
    {
      "id": "market-view-20260918",
      "date": "2026-09-18",
      "publishedAt": "18/09/2026 • Sau phiên",
      "edition": "Số 21",
      "sentiment": "watch",
      "sentimentLabel": "CHỜ / PHÒNG THỦ",
      "dataStatus": "VNDIRECT Finfo + VNDIRECT Market Recap + BSC + VietnamBiz + 24HMoney + SHS/DNSE + FTSE Russell • EOD 18.09.2026",
      "title": "Thanh khoản bùng nổ vì ETF nhưng 1.840 thất bại — không mua đuổi",
      "thesis": "Dữ liệu đến hết phiên 18/09/2026. VN-Index đóng 1.815,66 điểm, giảm 7,11 điểm (-0,39%); VN30 giảm 0,55% còn 1.964,17 điểm trong khi HNX-Index tăng 0,51% lên 275,29 điểm. VNDIRECT Finfo khóa độ rộng HOSE 182 mã tăng, 67 tham chiếu, 126 mã giảm và 4 mã sàn. Khớp lệnh HOSE đạt 22.052,58 tỷ đồng, cao hơn bình quân 5/10/20 phiên lần lượt khoảng 54,4% / 65,8% / 61,8%, nhưng hơn 10.500 tỷ đồng dồn vào ATC do cơ cấu ETF nên không được xem là tín hiệu cầu chủ động thuần túy. Khối ngoại mua ròng 1.254,92 tỷ đồng trên HOSE; tự doanh bán ròng khoảng 82 tỷ đồng. Confluence Score +3/7, nhưng hard veto kích hoạt vì bán mạnh cuối phiên, thất bại tại vùng 1.840 và R:R từ giá đóng cửa tới cản gần so với mốc vô hiệu 1.792,62 chỉ khoảng 1,1:1. TRẠNG THÁI TÁC NGHIỆP: CHỜ / PHÒNG THỦ; không mua đuổi, không tăng margin.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "VN-INDEX",
          "value": "1.815,66",
          "change": "−7,11 • −0,39%",
          "tone": "warning"
        },
        {
          "label": "ĐỘ RỘNG HOSE",
          "value": "182 tăng / 126 giảm",
          "change": "67 tham chiếu • 4 mã sàn",
          "tone": "positive"
        },
        {
          "label": "KHỚP LỆNH HOSE",
          "value": "~22.053 tỷ",
          "change": "+61,8% so với TB20 ~13.633 tỷ • ETF/ATC chi phối",
          "tone": "warning"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "MUA RÒNG ~1.255 tỷ",
          "change": "HOSE • quay lại mua ròng mạnh",
          "tone": "positive"
        }
      ],
      "backdrop": [
        "Bản chất phiên 18/09 là một phiên thất bại tại kháng cự với nhiễu cơ cấu ETF rất lớn, không phải một phiên phân phối diện rộng thuần túy. VN-Index từng chạm 1.841,20 nhưng đóng 1.815,66, giảm 0,39%; VN30 giảm mạnh hơn 0,55%, trong khi HNX tăng 0,51% và độ rộng HOSE theo VNDIRECT vẫn dương 182 tăng/67 tham chiếu/126 giảm. Điều này cho thấy áp lực tập trung ở nhóm vốn hóa lớn hơn là toàn bộ mặt bằng cổ phiếu.",
        "Thanh khoản bùng nổ nhưng chất lượng không thể đọc theo cách thông thường. Chuỗi VNDIRECT khóa khớp lệnh HOSE 22.052,58 tỷ đồng, cao hơn TB5 14.281,67 tỷ khoảng 54,4%, TB10 13.303,75 tỷ khoảng 65,8% và TB20 13.632,99 tỷ khoảng 61,8%; khối lượng 721,52 triệu cổ phiếu cao hơn TB20 khoảng 38,3%. Tuy nhiên hơn 10.500 tỷ đồng dồn vào ATC trong phiên cơ cấu ETF, nên phần tăng thanh khoản này bị chi phối đáng kể bởi giao dịch cơ học và không đủ để nâng đánh giá.",
        "Về kỹ thuật, close 1.815,66 vẫn trên MA20 1.806,33, MA50 1.776,80 và MA200 1.792,62. Dù vậy, việc chạm 1.841,20 rồi đảo chiều đóng dưới tham chiếu tạo cấu trúc nến đỏ thất bại tại cản 1.840 và kích hoạt hard veto bán cuối phiên. Xu hướng trung hạn chưa gãy, nhưng nhịp ngắn hạn chuyển sang TRUNG TÍNH và cần tái xác nhận.",
        "Bản đồ dòng tiền cho thấy luân chuyển rõ hơn là rút tiền toàn thị trường. Dịch vụ tài chính tăng 1,1%, tài nguyên cơ bản tăng 1,0% và hàng hóa & dịch vụ công nghiệp tăng 0,2%; HPG, STB nằm trong nhóm nâng đỡ và đồng thời được khối ngoại mua ròng mạnh. Ngược lại, công nghệ giảm 2,9%, viễn thông giảm 1,4%, du lịch & giải trí giảm 1,3%, dầu khí giảm 1,2% và ngân hàng giảm 0,9%; CTG, TCB, BID, MBB là nhóm kéo chỉ số xuống mạnh.",
        "Khối ngoại là điểm cộng rõ với mua ròng 1.254,92 tỷ đồng trên HOSE, tập trung ở HPG, PNJ, SHB, STB và NVL. Trong khi đó tự doanh bán ròng tổng khoảng 82 tỷ đồng; quy mô này nhỏ hơn nhiều so với lực mua ngoại và không đủ để đảo chiều kết luận dòng vốn, nhưng vẫn cho thấy tổ chức trong nước không đồng thuận hoàn toàn với nhịp cơ cấu.",
        "Phái sinh cho tín hiệu hai chiều: hợp đồng tháng 10 41I1GA000 kết phiên 1.970 điểm, basis dương khoảng 5,83 điểm so với VN30, nhưng DNSE ghi nhận áp lực chốt lời gia tăng mạnh về cuối phiên. Vì vậy yếu tố phái sinh được chấm trung tính. Bối cảnh nâng hạng FTSE có hiệu lực từ mở cửa 21/09 là chất xúc tác dài hơn, nhưng phiên 18/09 cho thấy không nên đồng nhất dòng tiền cơ cấu với tín hiệu mua chủ động."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / MA20",
          "value": "1.805–1.810",
          "note": "MA20 khóa từ chuỗi VNDIRECT ở 1.806,33. IF chỉ số giữ được vùng này, độ rộng còn dương và nhóm dẫn dắt không gãy nền, THEN ưu tiên giữ hàng khỏe; chưa mua đuổi."
        },
        {
          "label": "Hỗ trợ mạnh / mốc vô hiệu",
          "value": "1.790–1.795",
          "note": "MA200 ở 1.792,62. IF đóng dưới 1.792,62 cùng độ rộng xấu đi, THEN hủy view hồi phục ngắn hạn và giảm rủi ro phần trading."
        },
        {
          "label": "Kháng cự gần / vùng veto",
          "value": "1.830–1.841",
          "note": "Phiên 18/09 đã chạm 1.841,20 nhưng thất bại. IF chưa đóng vượt 1.841 với độ rộng tích cực và dòng tiền không còn bị ATC/ETF chi phối, THEN vẫn giữ CHỜ / PHÒNG THỦ."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.848–1.875",
          "note": "Vùng cung phía trên của nhịp đầu tháng 9. Tại close 1.815,66, reward tới 1.848 so với risk về MA200 chỉ khoảng 1,4:1, vẫn dưới chuẩn 2:1."
        },
        {
          "label": "Hỗ trợ sâu / MA50",
          "value": "1.775–1.780",
          "note": "MA50 ở 1.776,80 là lớp hỗ trợ sâu. IF mất cả MA200 và tiếp tục xuyên vùng này, THEN chuyển hẳn sang risk-off, không bắt dao."
        }
      ],
      "confluence": {
        "score": 3,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA / cấu trúc",
            "score": 1,
            "note": "Close vẫn trên MA20/MA50/MA200, dù thất bại tại 1.840 làm xu hướng ngắn hạn giảm chất lượng."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Khớp lệnh cao hơn TB20 khoảng 61,8% nhưng đi cùng đảo chiều giảm và hơn 10.500 tỷ dồn ATC do ETF; thanh khoản không xác nhận chiều tăng."
          },
          {
            "factor": "Độ rộng",
            "score": 1,
            "note": "VNDIRECT khóa 182 tăng/126 giảm; breadth vẫn dương dù chỉ số đỏ."
          },
          {
            "factor": "Dòng tiền",
            "score": 0,
            "note": "Có luân chuyển sang dịch vụ tài chính/tài nguyên nhưng chỉ 6/19 ngành tăng; không đủ gọi là lan tỏa mạnh."
          },
          {
            "factor": "Khối ngoại",
            "score": 1,
            "note": "Mua ròng 1.254,92 tỷ đồng trên HOSE, đảo chiều tích cực sau phiên bán ròng 17/09."
          },
          {
            "factor": "Chất lượng dẫn dắt",
            "score": 1,
            "note": "VN30 yếu hơn VN-Index trong khi mid/small-cap và HNX tốt hơn; không phải chỉ kéo trụ."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": 0,
            "note": "F1M tháng 10 basis +5,83 hỗ trợ, nhưng áp lực chốt lời cuối phiên và nhiễu ETF trước ngày FTSE có hiệu lực khiến tín hiệu chưa sạch."
          }
        ],
        "veto": [
          "Cuối phiên bị bán mạnh: VN-Index chạm 1.841,20 rồi đóng 1.815,66 dưới tham chiếu",
          "Kháng cự 1.830–1.841 chưa được vượt và giữ dứt khoát",
          "R:R tại close 1.815,66 tới 1.841 so với mốc vô hiệu MA200 1.792,62 chỉ khoảng 1,1:1; tới 1.848 cũng chỉ khoảng 1,4:1, dưới chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 25,
          "if": "VN-Index giữ 1.805–1.810 rồi đóng vượt 1.841, độ rộng tiếp tục dương, ngân hàng ngừng kéo lùi và dòng tiền sau ETF vẫn lan tỏa",
          "then": "Gỡ veto kháng cự từng phần; chỉ mua sau breakout/retest thành công ở leader cơ bản tốt, thăm dò nhỏ trước và chỉ tăng khi R:R ≥2:1."
        },
        {
          "state": "neutral",
          "probability": 50,
          "if": "VN-Index dao động trong 1.793–1.841, thanh khoản trở về trạng thái bình thường sau cơ cấu và độ rộng không xấu đi",
          "then": "Duy trì CHỜ / PHÒNG THỦ; giữ cổ phiếu mạnh hơn thị trường, không mua đuổi, tỷ trọng chiến thuật tối đa 20% và không tăng margin."
        },
        {
          "state": "risk_off",
          "probability": 25,
          "if": "VN-Index đóng dưới MA200 1.792,62, đặc biệt khi breadth chuyển âm và nhóm ngân hàng tiếp tục suy yếu",
          "then": "Giảm rủi ro phần trading, dừng mở mới, xử lý vị thế vi phạm stoploss 3–7%; không bình quân giá xuống bằng margin."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — giữ 1.805–1.810 và đóng vượt 1.841 với breadth dương, leader lan tỏa, dòng tiền không còn co cụm vào ATC/ETF",
          "then": "CHỈ MUA SAU RETEST. Thăm dò ở leader cơ bản tốt, stoploss 3–7%, R:R ≥2:1. Chỉ nâng tỷ trọng dần nếu veto được gỡ và score tái tính vẫn đủ chuẩn."
        },
        {
          "state": "neutral",
          "if": "THIẾU XÁC NHẬN — dao động 1.793–1.841 hoặc tiếp tục bị bán khi áp sát 1.830–1.841",
          "then": "CHỜ / PHÒNG THỦ. Giữ hàng khỏe sẵn có, tỷ trọng chiến thuật ≤20%, tiền mặt cao, không mua đuổi và không tăng margin."
        },
        {
          "state": "risk_off",
          "if": "RISK-OFF — đóng dưới MA200 1.792,62 và độ rộng chuyển xấu; nghiêm trọng hơn nếu mất vùng MA50 1.775–1.780",
          "then": "GIẢM RỦI RO phần trading, dừng mua mới, thực thi stoploss 3–7%; không bắt dao và không bình quân giá xuống."
        }
      ],
      "focus": "CHỜ / PHÒNG THỦ • Score +3/7 • VETO bán cuối phiên + thất bại 1.840 + R:R <2 • MA20 1.806,33 • MA200 1.792,62 • MA50 1.776,80 • KL HOSE ~22.053 tỷ nhưng ETF/ATC >10.500 tỷ • khối ngoại +1.254,92 tỷ • tự doanh ~-82 tỷ • 41I1GA000 basis +5,83 • tỷ trọng chiến thuật ≤20% • không margin",
      "inference": "EOD 18/09/2026 đã vượt Data Gate 127/127 sau khi ba ngoại lệ DDV/MSR/OIL được nguồn thứ ba hậu phiên xác nhận trùng VNDIRECT. VNDIRECT Finfo khóa VN-Index 1.815,66 (-0,39%), VN30 1.964,17 (-0,55%), HNX-Index 275,29 (+0,51%) và breadth HOSE 182 tăng/67 tham chiếu/126 giảm/4 sàn. Chuỗi 217 phiên VNDIRECT cho MA20 1.806,33, MA50 1.776,80, MA200 1.792,62; khớp lệnh HOSE 22.052,58 tỷ so với TB5 14.281,67 tỷ, TB10 13.303,75 tỷ và TB20 13.632,99 tỷ; khối lượng 721,52 triệu cp cao hơn TB20 khoảng 38,3%. BSC ghi khối ngoại mua ròng 1.254,92 tỷ HOSE; 24HMoney ghi tự doanh bán ròng tổng 82,05 tỷ; SHS ghi 41I1GA000 đóng 1.970, basis +5,83. VietnamBiz ghi hơn 10.500 tỷ đồng dồn vào ATC do cơ cấu ETF. Confluence Score = +3/7 với cấu phần +1,-1,+1,0,+1,+1,0. Hard veto có hiệu lực vì bán mạnh cuối phiên, cản 1.830–1.841 thất bại và R:R dưới 2:1. Kết luận: CHỜ / PHÒNG THỦ; không mua đuổi, không tăng margin.",
      "limitations": [
        "Dữ liệu độ rộng khác nhẹ theo phạm vi tổng hợp: VNDIRECT Finfo khóa 182 tăng/67 tham chiếu/126 giảm, BSC ghi 185 tăng/67 tham chiếu/130 giảm. Bản nhận định dùng duy nhất VNDIRECT cho bảng chính để không trộn scope.",
        "Trường low/open của một số vendor chỉ số 18/09 không đồng nhất; bản nhận định không dùng low để chấm nến và chỉ dùng các điểm đã đồng thuận: high 1.841,20, close 1.815,66 cùng diễn biến đảo chiều cuối phiên.",
        "Thanh khoản 22.052,58 tỷ bị méo đáng kể bởi cơ cấu ETF với hơn 10.500 tỷ đồng ở ATC; vì vậy không coi mức tăng thanh khoản là xác nhận mua chủ động.",
        "Tự doanh: 24HMoney ghi tổng bán ròng 82,05 tỷ đồng, VietnamBiz ghi khoảng 84 tỷ đồng trên HOSE; bài dùng 24HMoney cho tổng và chỉ coi VietnamBiz là đối chiếu."
      ],
      "zaloPost": "Phiên 18/09 nhìn qua tưởng chỉ là một nhịp giảm nhẹ, nhưng phần cần chú ý nằm ở cách thị trường bị kéo ngược trong ATC. VN-Index chạm 1.841,20 rồi đóng 1.815,66, giảm 0,39%. Độ rộng theo VNDIRECT vẫn có 182 mã tăng so với 126 mã giảm, nên đây chưa phải bán tháo diện rộng; áp lực chính nằm ở nhóm vốn hóa lớn, đặc biệt ngân hàng.\n\nThanh khoản khớp lệnh lên khoảng 22,05 nghìn tỷ đồng, cao hơn bình quân 20 phiên khoảng 61,8%, nhưng không nên đọc con số này như tín hiệu tiền chủ động vào mạnh. Hơn 10.500 tỷ đồng dồn vào ATC trong phiên cơ cấu ETF. Khối ngoại mua ròng khoảng 1.255 tỷ đồng là điểm cộng, trong khi tự doanh bán ròng khoảng 82 tỷ. Dòng tiền đang luân chuyển: dịch vụ tài chính và tài nguyên giữ nhịp, còn công nghệ, dầu khí và ngân hàng chịu áp lực.\n\nVề kỹ thuật, chỉ số vẫn trên MA20 1.806,33 và MA200 1.792,62, nên cấu trúc chưa gãy. Tuy nhiên vùng 1.830–1.841 tiếp tục là cản thật. Score đạt +3/7 nhưng veto vẫn bật vì bán cuối phiên, thất bại tại kháng cự và R:R hiện chưa đạt chuẩn 2:1. Vì vậy kế hoạch cho phiên 21/09 vẫn là CHỜ / PHÒNG THỦ, không mua đuổi và không tăng margin.\n\nIF VN-Index giữ 1.805–1.810, breadth còn dương và leader không gãy nền, THEN ưu tiên giữ cổ phiếu khỏe hơn thị trường. IF đóng vượt 1.841 sau khi dòng tiền ETF qua đi và ngân hàng ngừng kéo lùi, THEN mới xem xét mua sau retest, từng deal phải có stoploss 3–7% và R:R tối thiểu 2:1. IF đóng dưới 1.792,62, THEN giảm phần trading và dừng mở mới. Việc cần làm ngay là rà các mã yếu hơn thị trường, hạ đòn bẩy và giữ tiền chờ tín hiệu sạch hơn.\n\nNội dung mang tính tham khảo, không phải cam kết hay khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      "sources": [
        {
          "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 18/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-18&size=500"
        },
        {
          "label": "VNDIRECT Finfo — chuỗi VNINDEX tính MA & thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-18&size=500"
        },
        {
          "label": "VNDIRECT — La bàn thị trường 18/09/2026",
          "url": "https://www.vndirect.com.vn/la-ban-thi-truong-18-09-2026-vn-index-giam-04-khoi-ngoai-mua-rong/"
        },
        {
          "label": "BSC Brief 18/09 — chỉ số, thanh khoản, ngành & khối ngoại",
          "url": "https://www.bsc.com.vn/bao-cao/15925-bsc-brief-18-09-mot-so-co-phieu-ngan-hang-keo-vn-index-dong-cua-duoi-tham-chieu/"
        },
        {
          "label": "VietnamBiz — phiên cơ cấu ETF 18/09, hơn 10.500 tỷ dồn ATC",
          "url": "https://vietnambiz.vn/etf/etf.html"
        },
        {
          "label": "24HMoney — tự doanh VN-Index 18/09/2026",
          "url": "https://24hmoney.vn/indices/vn-index/giao-dich-tu-doanh"
        },
        {
          "label": "VietnamBiz — tự doanh bán ròng khoảng 84 tỷ trên HOSE",
          "url": "https://vietnambiz.vn/tu-doanh-mua-rong-gan-800-ty-dong-co-phieu-vpb-sau-4-phien-2026918182740101.htm"
        },
        {
          "label": "SHS — bản tin tuần 14–18/09, phái sinh 41I1GA000",
          "url": "https://www.shs.com.vn/nhan-dinh-thi-truong/ban-tin-thi-truong-tuan-14-18092026-chuong-moi-bat-dau-ngoi-sao-thi-truong-moi-noi"
        },
        {
          "label": "DNSE — phái sinh chịu áp lực điều chỉnh cuối phiên 18/09",
          "url": "https://www.dnse.com.vn/nhan-dinh-thi-truong/trang/ban-tin-phai-sinh"
        },
        {
          "label": "FTSE Russell/LSEG — Việt Nam lên Secondary Emerging từ 21/09/2026",
          "url": "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-results-march-2026-semi-annual-country-classification-review-equities-fixed-income"
        }
      ]
    },
    {
      "id": "market-view-20260917",
      "date": "2026-09-17",
      "publishedAt": "17/09/2026 • Sau phiên",
      "edition": "Số 20",
      "sentiment": "watch",
      "sentimentLabel": "CHỜ / PHÒNG THỦ",
      "dataStatus": "VNDIRECT Finfo + Stockbiz + BSC + VnEconomy + Nhân Dân + DNSE + Fed • EOD 17.09.2026",
      "title": "Nội lực cải thiện, nhưng 1.830 chưa vượt dứt khoát — VETO R:R và áp lực cuối phiên",
      "thesis": "VN-Index đóng cửa 1.822,77 điểm, tăng 12,66 điểm (+0,70%); VN30 tăng mạnh hơn 1,06% lên 1.975,01 điểm, HNX-Index tăng 0,25% lên 273,90 điểm. EOD khóa trong repo ghi nhận HOSE 195 mã tăng, 63 tham chiếu, 113 mã giảm và 1 mã sàn. Khớp lệnh HOSE đạt 15.200,26 tỷ đồng, cao hơn bình quân 5/10/20 phiên lần lượt khoảng 12,7% / 14,8% / 13,4%; MA20/MA50/MA200 lần lượt 1.802,15 / 1.777,45 / 1.791,84. Tự doanh mua ròng 1.255,4 tỷ đồng, nhưng khối ngoại đảo chiều bán ròng khoảng 359 tỷ đồng trên HOSE sau ba phiên mua ròng. Confluence Score +5/7, song hard veto vẫn kích hoạt vì chỉ số chạm 1.830,35 rồi lùi cuối phiên và R:R tại giá đóng cửa tới vùng cản gần chưa đạt 2:1. TRẠNG THÁI TÁC NGHIỆP: CHỜ / PHÒNG THỦ; không mua đuổi và không tăng margin.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "VN-INDEX",
          "value": "1.822,77",
          "change": "+12,66 • +0,70%",
          "tone": "positive"
        },
        {
          "label": "ĐỘ RỘNG HOSE",
          "value": "195 tăng / 113 giảm",
          "change": "63 tham chiếu • 1 mã sàn",
          "tone": "positive"
        },
        {
          "label": "KHỚP LỆNH HOSE",
          "value": "~15.200 tỷ",
          "change": "+13,4% so với TB20 ~13.401 tỷ",
          "tone": "positive"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "BÁN RÒNG ~359 tỷ",
          "change": "HOSE • đảo chiều sau 3 phiên mua ròng",
          "tone": "warning"
        }
      ],
      "backdrop": [
        "Phiên 17/09 là một phiên hồi phục có chất lượng nội tại tốt hơn rõ rệt so với 16/09: VN-Index +0,70%, VN30 +1,06%, nhưng khác với phiên trước, độ rộng HOSE cũng chuyển dương với 195 tăng/63 tham chiếu/113 giảm. VN30 vẫn khỏe hơn VN-Index, song mid-cap và nhiều nhóm ngành cùng cải thiện nên không thể quy phiên tăng này chỉ cho vài trụ.",
        "Thanh khoản xác nhận chiều tăng. Dữ liệu VNDIRECT Finfo khóa giá trị khớp lệnh HOSE 15.200,26 tỷ đồng, cao hơn TB5 13.482,86 tỷ khoảng 12,7%, TB10 13.244,68 tỷ khoảng 14,8% và TB20 13.400,74 tỷ khoảng 13,4%. Khối lượng khớp 601,60 triệu cổ phiếu cũng cao hơn TB20 khoảng 17,6%. Đây là điểm cộng rõ cho yếu tố thanh khoản.",
        "Về kỹ thuật, close 1.822,77 đứng trên MA20 1.802,15 khoảng 1,1%, trên MA50 1.777,45 khoảng 2,5% và trên MA200 1.791,84 khoảng 1,7%. Stockbiz và VNIndex.ai cùng ghi nhận O/H/L/C 1.802,79/1.830,35/1.801,42/1.822,77, tương ứng nến xanh thân tốt nhưng có râu trên: cầu chủ động thắng trong ngày, song cung xuất hiện rõ khi chỉ số tiến vào vùng 1.830.",
        "Dòng tiền lan tỏa mạnh nhất ở ngân hàng, chứng khoán và bán lẻ. Ngân hàng có VPB, CTG, SSB, HDB và nhiều mã khác tăng; chứng khoán có VCI, SSI, VND, HCM đồng thuận; tỷ trọng dòng tiền cũng tăng ở thép và vật liệu xây dựng. Tự doanh mua ròng 1.255,4 tỷ đồng, riêng khớp lệnh 1.142,2 tỷ đồng, tập trung đáng kể ở VPB, VIC, HPG, MWG và một số ngân hàng. Đây là dòng tiền dẫn dắt thật hơn phiên 16/09.",
        "Khối ngoại là điểm trừ nhưng chưa đủ để kết luận xu hướng bán kéo dài trở lại: BSC ghi bán ròng khoảng 359,42 tỷ đồng trên HOSE, trong khi nguồn toàn thị trường ghi hơn 382 tỷ đồng. Đây là phiên đảo chiều sau ba phiên mua ròng; HDB, MBB, FPT, BSR vẫn được mua ròng, còn VHM, VIC, VIX, SSI, VCI nằm trong nhóm bị bán mạnh.",
        "Đọc xoay vòng cho thấy tiền rời bớt dầu khí sang tài chính và tiêu dùng. PVS, PVT, PVD, PLX và GAS suy yếu, trong khi ngân hàng/chứng khoán/bán lẻ nâng đỡ chỉ số. Tuy nhiên cuối phiên VN-Index từ đỉnh 1.830,35 lùi về 1.822,77; chứng khoán và bất động sản cũng thu hẹp mức tăng, tạo hard veto về áp lực cung tại kháng cự.",
        "Phái sinh sau ngày đáo hạn chuyển trọng tâm sang hợp đồng tháng 10 41I1GA000. DNSE ghi basis cuối phiên +0,49 điểm so với VN30 và xu hướng LONG chiếm ưu thế, là tín hiệu hỗ trợ. Ở chiều ngược lại, Fed vừa tăng lãi suất 25 điểm cơ bản lên 3,75–4,00% và phát tín hiệu còn khả năng tăng tiếp; hai tác động đối nghịch khiến yếu tố vĩ mô/phái sinh được chấm trung tính."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần",
          "value": "1.810–1.815",
          "note": "Vùng đóng cửa/điểm cân bằng ngắn hạn quanh phiên 16/09. IF giữ vùng này với độ rộng dương và leader không gãy nền, THEN ưu tiên giữ hàng mạnh hơn thị trường, chưa cần mua đuổi."
        },
        {
          "label": "Hỗ trợ mạnh / MA20",
          "value": "1.800–1.805",
          "note": "MA20 khóa từ chuỗi VNDIRECT ở 1.802,15. IF lùi về đây với cung giảm và thanh khoản hạ nhiệt lành mạnh, THEN mới xem xét thăm dò rất nhỏ ở leader có cơ bản tốt."
        },
        {
          "label": "Mốc vô hiệu ngắn hạn",
          "value": "<1.791,84",
          "note": "MA200 ở 1.791,84. Đóng cửa dưới mốc này làm hỏng view hồi phục ngắn hạn và kích hoạt giảm rủi ro; MA50 thấp hơn tại 1.777,45 là lớp phòng thủ tiếp theo."
        },
        {
          "label": "Kháng cự gần / vùng veto",
          "value": "1.830–1.840",
          "note": "Phiên 17/09 đã chạm 1.830,35 nhưng không giữ được. Chỉ gỡ veto kháng cự khi đóng vượt 1.840 với khớp lệnh HOSE duy trì tối thiểu quanh 15.000 tỷ và độ rộng tiếp tục dương."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.848–1.875",
          "note": "Vùng tích lũy/cản đầu tháng 9. Tại close 1.822,77, upside tới 1.848 so với rủi ro về MA20 chỉ cho R:R khoảng 1,2:1, dưới chuẩn 2:1 nên không mở mới theo kiểu mua đuổi."
        }
      ],
      "confluence": {
        "score": 5,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA / cấu trúc",
            "score": 1,
            "note": "Close 1.822,77 trên MA20/MA50/MA200; cấu trúc hồi phục được củng cố."
          },
          {
            "factor": "Thanh khoản",
            "score": 1,
            "note": "Khớp lệnh HOSE ~15.200 tỷ, cao hơn TB20 ~13.401 tỷ khoảng 13,4%."
          },
          {
            "factor": "Độ rộng",
            "score": 1,
            "note": "HOSE 195 tăng/113 giảm; bên tăng áp đảo."
          },
          {
            "factor": "Dòng tiền",
            "score": 1,
            "note": "Dòng tiền lan tỏa sang ngân hàng, chứng khoán, bán lẻ và một phần thép/vật liệu."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Bán ròng khoảng 359 tỷ HOSE nhưng mới là phiên đảo chiều sau 3 phiên mua ròng; chưa đủ điều kiện chấm -1 kéo dài."
          },
          {
            "factor": "Chất lượng dẫn dắt",
            "score": 1,
            "note": "VN30 mạnh nhưng mid-cap và nhiều nhóm ngành cùng tăng; không chỉ kéo trụ."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": 0,
            "note": "F1M tháng 10 basis +0,49 và LONG tích cực, nhưng Fed tăng lãi suất và giữ giọng điệu hawkish; hai chiều triệt tiêu."
          }
        ],
        "veto": [
          "Áp lực bán cuối phiên: VN-Index chạm 1.830,35 rồi lùi về 1.822,77",
          "Kháng cự 1.830–1.840 chưa được vượt và giữ dứt khoát",
          "R:R tại close 1.822,77 tới cản mạnh gần 1.848 so với MA20 1.802,15 chỉ khoảng 1,2:1, dưới chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 30,
          "if": "VN-Index giữ trên 1.810–1.815 rồi đóng vượt 1.840, khớp lệnh HOSE duy trì tối thiểu quanh 15.000 tỷ, độ rộng tiếp tục dương và leader không thu hẹp",
          "then": "Gỡ veto kháng cự; chỉ mua sau breakout/retest thành công, ưu tiên leader cơ bản tốt. Có thể thăm dò 20–30% trước, sau đó tăng dần theo score; từng deal stoploss 3–7% và R:R ≥2:1."
        },
        {
          "state": "neutral",
          "probability": 50,
          "if": "VN-Index dao động trong 1.800–1.840, thanh khoản vẫn trên nền nhưng chưa đóng vượt cản hoặc cuối phiên tiếp tục hụt lực",
          "then": "Duy trì CHỜ / PHÒNG THỦ, giữ leader mạnh sẵn có, không mua đuổi; phần giải ngân mới không quá 20% và không tăng margin."
        },
        {
          "state": "risk_off",
          "probability": 20,
          "if": "VN-Index đóng dưới 1.800 và đặc biệt mất MA200 1.791,84 cùng độ rộng xấu đi",
          "then": "Giảm rủi ro phần trading, dừng mở mới, xử lý vị thế vi phạm stoploss và giữ tiền mặt cao; không bình quân giá xuống bằng margin."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — đóng vượt 1.840, khớp lệnh HOSE ≥ khoảng 15.000 tỷ, độ rộng dương và ngân hàng/chứng khoán/bán lẻ tiếp tục lan tỏa",
          "then": "CHỈ MUA SAU RETEST. Thăm dò 20–30% ở leader cơ bản tốt, stoploss 3–7%; chỉ tăng dần khi R:R ≥2:1. Nếu veto được gỡ hoàn toàn và score vẫn ≥+4, trần tỷ trọng theo rulebook có thể nâng dần 70–80%, không tăng một lần."
        },
        {
          "state": "neutral",
          "if": "THIẾU XÁC NHẬN — giữ 1.800–1.840 nhưng chưa vượt cản, hoặc thanh khoản/độ rộng suy yếu cuối phiên",
          "then": "CHỜ / PHÒNG THỦ. Giữ leader mạnh, giải ngân mới ≤20%, không mua đuổi và không tăng margin."
        },
        {
          "state": "risk_off",
          "if": "RISK-OFF — đóng dưới 1.800; nghiêm trọng hơn nếu mất MA200 1.791,84 và độ rộng chuyển xấu",
          "then": "GIẢM RỦI RO phần trading, dừng mua mới, xử lý mọi vị thế chạm stoploss 3–7%; không bình quân giá xuống."
        }
      ],
      "focus": "CHỜ / PHÒNG THỦ • Score +5/7 nhưng VETO áp lực cuối phiên + cản 1.830–1.840 + R:R <2 • MA20 1.802,15 • MA200 1.791,84 • MA50 1.777,45 • xác nhận >1.840 • cản mạnh 1.848–1.875 • KL HOSE ~15.200 tỷ vs TB20 ~13.401 tỷ • F1M tháng 10 basis +0,49 • giải ngân mới ≤20% • không margin",
      "inference": "EOD 17/09/2026 đã vượt Data Gate: 127/127 mã coverage khóa trong repo; OIL và VGI là hai ngoại lệ CafeF được KBS exact-date xác nhận trùng VNDIRECT. VNDIRECT Finfo khóa VN-Index 1.822,77 (+0,70%), VN30 1.975,01 (+1,06%), HNX-Index 273,90 (+0,25%) và độ rộng HOSE 195 tăng/63 tham chiếu/113 giảm/1 sàn. Chuỗi 216 phiên VNDIRECT cho MA20 1.802,15, MA50 1.777,45, MA200 1.791,84; khớp lệnh HOSE 15.200,26 tỷ so với TB5 13.482,86 tỷ, TB10 13.244,68 tỷ và TB20 13.400,74 tỷ; khối lượng 601,60 triệu cp cao hơn TB20 khoảng 17,6%. Stockbiz và VNIndex.ai xác nhận O/H/L/C 1.802,79/1.830,35/1.801,42/1.822,77. BSC ghi khối ngoại bán ròng 359,42 tỷ HOSE; VnEconomy ghi tự doanh mua ròng 1.255,4 tỷ, riêng khớp lệnh 1.142,2 tỷ. DNSE ghi hợp đồng gần nhất 41I1GA000 basis cuối phiên +0,49 điểm; Fed tăng lãi suất 25bp lên 3,75–4,00%. Confluence Score = +5/7 với cấu phần +1,+1,+1,+1,0,+1,0. Hard veto có hiệu lực vì áp lực bán cuối phiên, cản 1.830–1.840 chưa vượt dứt khoát và R:R tại giá đóng cửa dưới 2:1. Kết luận: CHỜ / PHÒNG THỦ; không mua đuổi, không tăng margin.",
      "limitations": [
        "Trường low của VNDIRECT vnmarket_prices ngày 17/09 là 1.794,49, khác với Stockbiz và VNIndex.ai cùng ghi 1.801,42; cấu trúc nến sử dụng 1.801,42 vì hai nguồn độc lập hậu phiên trùng nhau.",
        "Số liệu khối ngoại có chênh nhẹ theo cách tổng hợp/phạm vi: BSC ghi -359,42 tỷ HOSE, VNIndex.ai ước khoảng -351,62 tỷ HOSE, Nhân Dân ghi hơn -382 tỷ toàn 3 sàn. Bài dùng BSC cho HOSE và không trộn phạm vi.",
        "Khớp lệnh HOSE từ raw VNDIRECT là 15.200,26 tỷ, trong khi VnEconomy/BSC làm tròn quanh 15.229/15.200 tỷ; phần so sánh MA và nền 5/10/20 phiên dùng duy nhất chuỗi VNDIRECT để bảo đảm cùng phạm vi."
      ],
      "zaloPost": "Dữ liệu đã khóa đến hết phiên 17/09/2026. VN-Index đóng cửa 1.822,77 điểm, tăng 12,66 điểm (+0,70%). Điểm tích cực nhất hôm nay không chỉ nằm ở chỉ số: HOSE có 195 mã tăng so với 113 mã giảm, giá trị khớp lệnh đạt khoảng 15,20 nghìn tỷ đồng, cao hơn bình quân 20 phiên khoảng 13,4%. VN30 tăng 1,06% nhưng độ rộng cũng cải thiện, vì vậy đây không phải một phiên chỉ kéo trụ.\n\nDòng tiền vào rõ nhất ở ngân hàng, chứng khoán và bán lẻ. VPB, CTG, SSB, HDB hỗ trợ chỉ số; nhóm chứng khoán có VCI, SSI, VND, HCM cùng tăng. Tự doanh mua ròng hơn 1,25 nghìn tỷ đồng là điểm cộng. Ngược lại, khối ngoại đảo chiều bán ròng trên HOSE khoảng 359 tỷ đồng sau ba phiên mua ròng, tập trung vào VHM, VIC, VIX; dầu khí cũng suy yếu với PVS, PVT, PVD, PLX giảm.\n\nVề kỹ thuật, VN-Index vẫn nằm trên MA20 1.802,15, MA50 1.777,45 và MA200 1.791,84. Tuy nhiên chỉ số đã chạm 1.830,35 rồi lùi về 1.822,77 cuối phiên. Vì vậy dù Confluence Score đạt +5/7, tôi vẫn giữ trạng thái CHỜ / PHÒNG THỦ do cổng veto: vùng 1.830–1.840 chưa được chinh phục dứt khoát và R:R tại giá đóng cửa chưa đạt 2:1.\n\nNgày mai, IF chỉ số giữ 1.810–1.815 hoặc lùi 1.800–1.805 với cung giảm, độ rộng vẫn dương và leader giữ nền, THEN chỉ quan sát hoặc thăm dò rất nhỏ ở cổ phiếu dẫn dắt có cơ bản tốt; không mua đuổi. IF đóng vượt 1.840 với khớp lệnh HOSE duy trì tối thiểu quanh 15 nghìn tỷ và độ rộng tích cực, THEN mới nâng dần tỷ trọng sau retest. IF đóng dưới 1.800, đặc biệt mất MA200 quanh 1.791,84, THEN giảm rủi ro phần trading. Từng giao dịch cổ phiếu vẫn phải có stoploss 3–7% và chỉ nhận kèo có R:R tối thiểu 2:1. Nội dung nhằm hỗ trợ quyết định, không phải cam kết lợi nhuận.",
      "sources": [
        {
          "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 17/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-17&size=500"
        },
        {
          "label": "VNDIRECT Finfo — chuỗi VNINDEX tính MA & thanh khoản",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-17&size=500"
        },
        {
          "label": "Stockbiz — chỉ số thị trường 17/09/2026",
          "url": "https://web.stockbiz.vn/IndexDetail.aspx"
        },
        {
          "label": "BSC Brief 17/09 — ngân hàng dẫn dắt, thanh khoản & khối ngoại",
          "url": "https://www.bsc.com.vn/bao-cao/15917-bsc-brief-17-09-nhom-co-phieu-ngan-hang-dan-dat-thi-truong-hom-nay/"
        },
        {
          "label": "VnEconomy — tự doanh và dòng tiền 17/09",
          "url": "https://vneconomy.vn/tu-doanh-bat-ngo-mua-rong-1250-ty-dong-gom-toan-vic-va-vpb.htm"
        },
        {
          "label": "Nhân Dân — ngân hàng/chứng khoán dẫn nhịp 17/09",
          "url": "https://nhandan.vn/chung-khoan-ngay-179-co-phieu-ngan-hang-chung-khoan-dan-nhip-vn-index-vuot-1820-diem-post989191.html"
        },
        {
          "label": "Japan Securities — áp lực bán cuối phiên & dầu khí",
          "url": "https://www.japan-sec.vn/cap-nhat-tin-ngay-17-09-2026/"
        },
        {
          "label": "DNSE — phái sinh 17/09/2026",
          "url": "https://www.dnse.com.vn/nhan-dinh-thi-truong/phai-sinh-but-pha-tang-diem-manh-me-phien-17-09-2026"
        },
        {
          "label": "Federal Reserve — FOMC statement 16/09/2026",
          "url": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"
        },
        {
          "label": "VNIndex.ai — OHLC và khối ngoại phiên 17/09",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        }
      ]
    },
    {
      "id": "market-view-20260916",
      "date": "2026-09-16",
      "publishedAt": "16/09/2026 • Sau phiên",
      "edition": "Số 19",
      "sentiment": "watch",
      "sentimentLabel": "CHỜ / PHÒNG THỦ",
      "dataStatus": "VNDIRECT Finfo + KBS + Stockbiz + Thời báo Tài chính + VnEconomy + VNSignal/Entrade • EOD 16.09.2026 • tự doanh 16/09: CHƯA XÁC MINH",
      "title": "Điểm số giữ 1.810 nhưng nội lực yếu — VETO thanh khoản và độ rộng",
      "thesis": "VN-Index đóng cửa 1.810,11 điểm, giảm 1,04 điểm (-0,06%); VN30 ngược chiều tăng 0,16% lên 1.954,29 điểm, còn HNX-Index giảm 0,33% xuống 273,22 điểm. Bộ EOD khóa trong repo ghi nhận HOSE chỉ 109 mã tăng, 67 tham chiếu và 190 mã giảm, có 4 mã sàn. VN-Index vẫn đứng trên MA20 1.797,38, MA50 1.777,87 và MA200 1.791,07, nhưng giá trị khớp lệnh chỉ khoảng 12,00 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 13,40 nghìn tỷ đồng (-10,5%). Khối ngoại là điểm cộng với mua ròng ước khoảng 223,11 tỷ đồng trên HOSE và là phiên mua ròng thứ ba liên tiếp, trong khi VN30F1M đóng 1.948,1 điểm, basis khoảng -6,19 điểm so với VN30. TRẠNG THÁI TÁC NGHIỆP: CHỜ / PHÒNG THỦ; Confluence Score -2/7, hard veto đang kích hoạt, không mở vị thế mới diện rộng và không tăng margin.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "VN-INDEX",
          "value": "1.810,11",
          "change": "−1,04 • −0,06%",
          "tone": "warning"
        },
        {
          "label": "ĐỘ RỘNG HOSE",
          "value": "109 tăng / 190 giảm",
          "change": "67 tham chiếu • 4 mã sàn",
          "tone": "warning"
        },
        {
          "label": "KHỚP LỆNH HOSE",
          "value": "~12.000 tỷ",
          "change": "−10,5% so với TB20 ~13.401 tỷ",
          "tone": "warning"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "MUA RÒNG ~223 tỷ",
          "change": "HOSE ước tính • phiên mua ròng thứ ba",
          "tone": "positive"
        }
      ],
      "backdrop": [
        "Bản chất phiên 16/09 là đi ngang yếu và phân hóa, không phải một phiên tăng khỏe. VN-Index gần như đứng yên tại 1.810,11 điểm nhưng VN30 tăng 0,16% lên 1.954,29 điểm trong khi độ rộng HOSE khóa EOD chỉ 109 tăng/67 tham chiếu/190 giảm. Sự lệch pha VN30 tốt hơn VN-Index cùng số mã giảm áp đảo cho thấy điểm số được cân bằng bởi nhóm vốn hóa lớn trong khi phần lớn thị trường chịu áp lực.",
        "Thanh khoản không xác nhận. Dữ liệu VNDIRECT Finfo cho thấy giá trị khớp lệnh HOSE khoảng 11.999 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 13.483 tỷ (-11,0%), bình quân 10 phiên khoảng 13.245 tỷ (-9,4%) và bình quân 20 phiên khoảng 13.401 tỷ (-10,5%). Khối lượng khớp lệnh 446,94 triệu cổ phiếu cũng thấp hơn bình quân 20 phiên khoảng 12,6%. Đây là hard veto theo rulebook.",
        "Về kỹ thuật, close 1.810,11 vẫn cao hơn MA20 1.797,38 khoảng 0,71%, cao hơn MA50 1.777,87 khoảng 1,81% và cao hơn MA200 1.791,07 khoảng 1,06%. Dữ liệu Stockbiz/VNIndex.ai cùng ghi nhận O/H/L/C quanh 1.812,96/1.816,26/1.805,20/1.810,11, tương ứng nến đỏ thân nhỏ có râu hai đầu: lực cầu còn giữ được vùng 1.805 nhưng chưa đủ sức vượt đỉnh trong ngày.",
        "Bản đồ dòng tiền cho thấy sự xoay vòng sang một số mã năng lượng và trụ chọn lọc thay vì lan tỏa. Các nguồn trong ngày ghi nhận năng lượng nổi bật với PLX, BSR, OIL, PVS/PVT; SSB, GVR và DMX cũng nằm trong nhóm nâng đỡ chỉ số. Ngược lại, tài chính và bất động sản gây sức ép rộng hơn; công nghệ/tiêu dùng không thiết yếu yếu, và VnEconomy ghi nhận phần lớn 103 cổ phiếu giảm quá 1% là nhóm vừa và nhỏ. Đây là tín hiệu chất lượng thị trường suy giảm dù chỉ số chung chỉ giảm nhẹ.",
        "Khối ngoại là điểm cộng: VNIndex.ai ước tính mua ròng khoảng 223,11 tỷ đồng riêng HOSE, còn nguồn hậu phiên ghi gần 250 tỷ đồng trên toàn thị trường và là phiên mua ròng thứ ba liên tiếp. Tuy nhiên, lực mua ngoại chưa đủ bù cho độ rộng âm và thanh khoản dưới trung bình nên không làm mất hiệu lực veto.",
        "Phái sinh vẫn thận trọng ngay trước đáo hạn. VN30F1M đóng 1.948,1 điểm trong khi VN30 cơ sở đóng 1.954,29 điểm, tạo basis khoảng -6,19 điểm (-0,32%); hợp đồng đáo hạn 17/09. Bối cảnh quốc tế cũng chưa thuận lợi khi chứng khoán Mỹ giảm trong phiên 15/09 và thị trường chờ quyết định chính sách của Fed. Tự doanh 16/09 chưa được khóa độc lập; HOSE đang trong giai đoạn chuẩn hóa dữ liệu theo loại nhà đầu tư, vì vậy biến này được ghi CHƯA XÁC MINH và không dùng để nâng kết luận."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / MA20",
          "value": "1.797–1.800",
          "note": "MA20 khóa từ chuỗi VNDIRECT ở 1.797,38. IF chỉ số giữ được vùng này và độ rộng cải thiện, THEN tiếp tục quan sát trạng thái tích lũy; không tự động coi là điểm mua."
        },
        {
          "label": "Hỗ trợ mạnh / vùng vô hiệu",
          "value": "1.778–1.791",
          "note": "MA50 khoảng 1.777,87 và MA200 khoảng 1.791,07 tạo cụm hỗ trợ trung hạn. Đóng cửa dưới cụm này làm vô hiệu view giữ cấu trúc và kích hoạt giảm rủi ro mạnh hơn."
        },
        {
          "label": "Xác nhận tích cực",
          "value": "1.820–1.825",
          "note": "Chỉ xem xét nâng từ PHÒNG THỦ khi đóng vượt vùng này, giá trị khớp lệnh trở lại tối thiểu quanh bình quân 20 phiên ~13.401 tỷ đồng, độ rộng chuyển dương và leader lan tỏa."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.830–1.840",
          "note": "Vùng cản được nhiều CTCK lưu ý trước phiên 16/09. Nếu tiến vào đây trong khi thanh khoản/độ rộng không cải thiện, ưu tiên chốt trading hơn là mua đuổi."
        },
        {
          "label": "Xác nhận rủi ro",
          "value": "<1.797",
          "note": "Mất MA20 là tín hiệu đầu tiên phải hạ rủi ro; mất tiếp 1.791–1.778 chuyển trạng thái sang risk-off rõ rệt. Tại close 1.810,11, upside tới 1.830 so với rủi ro về MA20 cho R:R khoảng 1,6:1, dưới chuẩn 2:1 nên không mở mới."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA / cấu trúc",
            "score": 1,
            "note": "Close 1.810,11 vẫn trên MA20/MA50/MA200; cấu trúc trung hạn chưa gãy."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh ~12.000 tỷ, thấp hơn TB20 ~13.401 tỷ khoảng 10,5%."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "HOSE 109 tăng/190 giảm; bên giảm áp đảo."
          },
          {
            "factor": "Dòng tiền",
            "score": -1,
            "note": "Dòng tiền phân hóa, thiên về một số trụ/năng lượng trong khi mid-small điều chỉnh rộng."
          },
          {
            "factor": "Khối ngoại",
            "score": 1,
            "note": "HOSE ước mua ròng ~223 tỷ; phiên mua ròng thứ ba liên tiếp."
          },
          {
            "factor": "Chất lượng dẫn dắt",
            "score": 0,
            "note": "Có SSB/GVR/DMX và năng lượng chọn lọc nhưng chưa đủ lan tỏa để chấm +1."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": -1,
            "note": "VN30F1M basis khoảng -6,19 điểm ngay trước đáo hạn; Fed là biến số sự kiện lớn sau giờ Việt Nam."
          }
        ],
        "veto": [
          "Độ rộng yếu: 109 mã tăng so với 190 mã giảm trên HOSE",
          "Thanh khoản không xác nhận: GT khớp lệnh thấp hơn TB20 khoảng 10,5%",
          "Dòng tiền tập trung/chọn lọc trong khi phần lớn cổ phiếu vừa và nhỏ yếu",
          "R:R từ close 1.810,11 tới cản gần 1.830 so với MA20 1.797 chỉ khoảng 1,6:1, dưới chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 20,
          "if": "VN-Index giữ 1.797–1.800 rồi đóng vượt 1.820–1.825, GT khớp lệnh phục hồi tối thiểu quanh 13.401 tỷ, độ rộng chuyển dương và leader lan tỏa",
          "then": "Gỡ veto thanh khoản/độ rộng và chuyển từ PHÒNG THỦ sang xem xét mua thăm dò 20–30% ở leader có nền cơ bản tốt; từng deal stoploss 3–7% và chỉ nhận R:R ≥ 2:1."
        },
        {
          "state": "neutral",
          "probability": 55,
          "if": "VN-Index tiếp tục dao động trong 1.797–1.825, thanh khoản dưới trung bình hoặc độ rộng vẫn phân hóa",
          "then": "Duy trì CHỜ / PHÒNG THỦ, tỷ trọng tác nghiệp không quá 20%, giữ leader mạnh sẵn có, không mua đuổi và không tăng margin."
        },
        {
          "state": "risk_off",
          "probability": 25,
          "if": "VN-Index đóng dưới 1.797 và đặc biệt mất cụm 1.791–1.778 kèm số mã giảm tiếp tục áp đảo",
          "then": "Giảm rủi ro quyết liệt phần trading, dừng mở mới, xử lý vị thế vi phạm stoploss và giữ tiền mặt cao; tuyệt đối không bình quân giá xuống bằng margin."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.820–1.825, GT khớp lệnh ≥ khoảng 13.401 tỷ, độ rộng chuyển dương và leader không còn tập trung ở vài trụ",
          "then": "CÓ THỂ MUA THĂM DÒ 20–30% tại leader có cơ bản/tăng trưởng tốt và setup riêng hợp lệ. Stoploss 3–7%; target theo kháng cự kế tiếp; chỉ nhận giao dịch có R:R ≥ 2:1, không mua đuổi xanh mạnh."
        },
        {
          "state": "neutral",
          "if": "THIẾU XÁC NHẬN — VN-Index giữ trong 1.797–1.825 nhưng thanh khoản dưới TB20, độ rộng âm hoặc VN30 tiếp tục khỏe hơn phần còn lại",
          "then": "CHỜ / PHÒNG THỦ. Tỷ trọng tác nghiệp ≤20%, không tăng margin; chỉ giữ leader có sức mạnh tương đối và loại dần mã yếu. Không mở vị thế mới diện rộng."
        },
        {
          "state": "risk_off",
          "if": "RISK-OFF — VN-Index đóng dưới 1.797; nghiêm trọng hơn nếu thủng 1.791–1.778 cùng độ rộng xấu và leader mất nền",
          "then": "GIẢM RỦI RO phần trading, dừng mua mới và xử lý mọi vị thế chạm stoploss 3–7%. Không bình quân giá xuống, ưu tiên bảo toàn vốn."
        }
      ],
      "focus": "CHỜ / PHÒNG THỦ • Score -2/7 • VETO độ rộng + thanh khoản + tập trung dòng tiền • MA20 1.797,38 • MA200 1.791,07 • MA50 1.777,87 • xác nhận 1.820–1.825 • cản 1.830–1.840 • GT khớp lệnh ~12.000 tỷ vs TB20 ~13.401 tỷ • basis F1M -6,19 • tỷ trọng tác nghiệp ≤20% • không margin",
      "inference": "EOD 16/09/2026 đã được khóa lại sau Data Gate: 127/127 mã coverage xác minh, hai sai lệch CafeF tại MSR/OIL được KBS date-specific xác nhận trùng VNDIRECT. VNDIRECT Finfo khóa VN-Index 1.810,11 (-0,06%), VN30 1.954,29 (+0,16%), HNX-Index 273,22 (-0,33%) và độ rộng HOSE 109 tăng/67 tham chiếu/190 giảm/4 sàn. Chuỗi 215 phiên VNDIRECT cho MA20 1.797,38, MA50 1.777,87, MA200 1.791,07; GT khớp lệnh 11.999 tỷ so với TB5 13.483 tỷ, TB10 13.245 tỷ và TB20 13.401 tỷ. Stockbiz và Thời báo Tài chính xác nhận close VN-Index/VN30/HNX; Thời báo Tài chính ghi tổng GTGD 14.845 tỷ. VNIndex.ai ước khối ngoại mua ròng 223,11 tỷ HOSE; nguồn hậu phiên ghi gần 250 tỷ toàn thị trường và phiên mua ròng thứ ba. VNSignal/Entrade khóa VN30F1M 1.948,1, basis tính theo VN30 EOD là -6,19 điểm. Confluence Score = -2/7 với cấu phần +1, -1, -1, -1, +1, 0, -1. Hard veto có hiệu lực vì độ rộng yếu, thanh khoản không xác nhận, dòng tiền tập trung và R:R tại giá hiện tại dưới 2:1. Tự doanh 16/09 chưa xác minh độc lập và không được dùng để nâng điểm. Kết luận: CHỜ / PHÒNG THỦ, tỷ trọng tác nghiệp ≤20%, không margin.",
      "limitations": [
        "CHƯA XÁC MINH độc lập: số liệu tự doanh HOSE ngày 16/09/2026; nguồn công khai được tìm kiếm chưa có bản hậu phiên cùng ngày và một số nền tảng thông báo HOSE tạm dừng dữ liệu giao dịch theo loại nhà đầu tư từ 01/09/2026.",
        "Trường low của VNDIRECT vnmarket_prices cho 16/09 có giá trị bất thường so với hai nguồn độc lập; cấu trúc nến sử dụng low 1.805,20 được Stockbiz và VNIndex.ai cùng hiển thị, không dùng trường low bất thường đó.",
        "Số đếm độ rộng giữa các nhà cung cấp có chênh lệch nhỏ do cách phân loại/no-trade; bài sử dụng bộ HOSE 109/67/190 đã khóa trong repo và không trộn phạm vi."
      ],
      "zaloPost": "Dữ liệu đã khóa đến hết phiên 16/09/2026. VN-Index đóng cửa 1.810,11 điểm, giảm 1,04 điểm (-0,06%), nhưng bề ngoài đi ngang không phản ánh đúng độ yếu bên dưới. VN30 vẫn tăng 0,16% lên 1.954,29 điểm trong khi HOSE chỉ có 109 mã tăng so với 190 mã giảm. Đây là dấu hiệu dòng tiền đang dựa nhiều vào một số cổ phiếu vốn hóa lớn thay vì lan tỏa rộng.\n\nVề kỹ thuật, VN-Index vẫn đứng trên MA20 1.797,38, MA50 1.777,87 và MA200 1.791,07 nên cấu trúc trung hạn chưa gãy. Điểm đáng lo là giá trị khớp lệnh chỉ khoảng 12,00 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 13,40 nghìn tỷ, tức thiếu khoảng 10,5%. Khối ngoại là điểm cộng khi mua ròng ước khoảng 223 tỷ đồng trên HOSE và duy trì phiên mua ròng thứ ba, nhưng chưa đủ bù cho độ rộng xấu. VN30F1M đóng 1.948,1 điểm, thấp hơn VN30 khoảng 6,19 điểm ngay trước đáo hạn, cho thấy phái sinh vẫn giữ độ thận trọng.\n\nTrạng thái tác nghiệp của tôi là CHỜ / PHÒNG THỦ, Confluence Score -2/7 và đang có veto về thanh khoản, độ rộng và mức độ tập trung dòng tiền. Việc cần làm ngay ngày mai là không mua đuổi, không tăng margin; chỉ giữ các leader còn nền giá và sức mạnh tương đối, đồng thời loại dần các mã yếu hơn thị trường.\n\nIF VN-Index giữ được 1.797–1.800 và độ rộng cải thiện, THEN tiếp tục quan sát. IF đóng vượt 1.820–1.825 với giá trị khớp lệnh trở lại ít nhất quanh 13,40 nghìn tỷ và leader lan tỏa, THEN mới xem xét nâng tỷ trọng thăm dò. IF thủng 1.797, đặc biệt mất vùng 1.778–1.791, THEN giảm rủi ro rõ hơn. Ưu tiên theo dõi năng lượng và các leader vốn hóa lớn còn giữ dòng tiền; thận trọng với nhóm tài chính, bất động sản, công nghệ và cổ phiếu vừa/nhỏ đang suy yếu. Mỗi giao dịch cổ phiếu vẫn phải có stoploss 3–7% và R:R tối thiểu 2:1. Nội dung chỉ nhằm hỗ trợ ra quyết định, không phải cam kết lợi nhuận.",
      "sources": [
        {
          "label": "VNDIRECT Finfo — chỉ số, độ rộng và chuỗi EOD 16/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-16&size=500"
        },
        {
          "label": "KBS — MSR EOD 16/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/MSR/data_day?sdate=16-09-2026&edate=16-09-2026"
        },
        {
          "label": "KBS — OIL EOD 16/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=16-09-2026&edate=16-09-2026"
        },
        {
          "label": "Stockbiz — chỉ số thị trường 16/09/2026",
          "url": "https://web.stockbiz.vn/IndexDetail.aspx"
        },
        {
          "label": "Thời báo Tài chính Việt Nam — chỉ số & GTGD đóng cửa 16/09",
          "url": "https://thoibaotaichinhvietnam.vn/chung-khoan&s_cond=&BRSR=0"
        },
        {
          "label": "VnEconomy — cổ phiếu vừa và nhỏ điều chỉnh mạnh, khối ngoại duy trì mua ròng",
          "url": "https://vneconomy.vn/co-phieu-vua-va-nho-dieu-chinh-manh-khoi-ngoai-duy-tri-mua-rong.htm"
        },
        {
          "label": "DNSE — VN-Index giảm nhẹ, nhóm tài chính và bất động sản gây sức ép",
          "url": "https://www.dnse.com.vn/senses/tin-tuc/vn-index-giam-nhe-nhom-tai-chinh-va-bat-dong-san-gay-suc-ep-35286641"
        },
        {
          "label": "VNIndex.ai — phiên 16/09 & khối ngoại HOSE",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "VNSignal — VN30F1M 16/09/2026",
          "url": "https://vnsignal.vn/thi-truong/chung-khoan-phai-sinh/vn30f1m"
        },
        {
          "label": "Entrade — bản tin phái sinh 16/09/2026",
          "url": "https://blog.entrade.com.vn/ban-tin-phai-sinh-16-09-2026-vn30f1m-hoi-manh-giang-co-tai-vung-1-945-1-955/"
        },
        {
          "label": "VTV — bối cảnh chứng khoán toàn cầu & Fed 16/09",
          "url": "https://vtv.vn/chung-khoan-the-gioi-do-san-100260916092532132.htm"
        }
      ]
    },
    {
      id: "market-view-20260915",
      date: "2026-09-15",
      publishedAt: "15/09/2026 • Sau phiên",
      edition: "Số 18",
      sentiment: "watch",
      sentimentLabel: "CHỜ / TRADING NGẮN",
      dataStatus: "VNDIRECT Finfo + Stockbiz + VietnamBiz + Mekong ASEAN • EOD 15.09.2026 • tự doanh & basis F1M sau phiên: chưa khóa độc lập",
      title: "Lấy lại 1.800 nhưng thanh khoản chưa xác nhận — không mua đuổi",
      thesis: "VN-Index đóng cửa 1.811,15 điểm, tăng 22,92 điểm (+1,28%); VN30 tăng 1,17% lên 1.951,14 điểm và HNX-Index tăng 0,81% lên 274,13 điểm. Bộ dữ liệu EOD khóa trong repo ghi nhận độ rộng HOSE tích cực với 222 mã tăng, 53 mã tham chiếu và 86 mã giảm, không có mã sàn. Dòng tiền ngoại tiếp tục là điểm cộng khi mua ròng khoảng 732 tỷ đồng toàn thị trường, riêng HOSE hơn 719 tỷ đồng, tập trung mạnh ở nhóm ngân hàng. Tuy nhiên, nguồn hậu phiên ghi nhận thanh khoản toàn thị trường chỉ khoảng 17.700 tỷ đồng, thấp hơn phiên trước; mức tăng giá vì vậy chưa được thanh khoản xác nhận đầy đủ. TRẠNG THÁI TÁC NGHIỆP: CHỜ / TRADING NGẮN; không mua đuổi tại vùng đóng cửa hiện tại, chỉ xem xét thăm dò khi retest 1.800 thành công hoặc khi vượt vùng xác nhận với thanh khoản cải thiện.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.811,15", change: "+22,92 • +1,28%", tone: "positive" },
        { label: "ĐỘ RỘNG HOSE", value: "222 tăng / 86 giảm", change: "53 tham chiếu • 0 mã sàn", tone: "positive" },
        { label: "THANH KHOẢN", value: "~17.700 tỷ", change: "Toàn thị trường • giảm so với phiên trước", tone: "warning" },
        { label: "KHỐI NGOẠI", value: "MUA RÒNG ~732 tỷ", change: "Toàn thị trường • HOSE >719 tỷ", tone: "positive" }
      ],
      backdrop: [
        "Phiên 15/09 là một nhịp hồi có chất lượng độ rộng tốt hơn rõ rệt so với 14/09: VN-Index lấy lại mốc 1.800 và đóng tại 1.811,15 điểm; dữ liệu VNDIRECT Finfo khóa riêng HOSE cho thấy 222 mã tăng/53 tham chiếu/86 mã giảm. Một số nguồn báo hậu phiên ghi số mã tăng cao hơn do khác cách tổng hợp; bài này dùng bộ HOSE đã khóa trong repo và không trộn phạm vi.",
        "Điểm chưa thuyết phục nằm ở thanh khoản. Mekong ASEAN ghi nhận khoảng 17.700 tỷ đồng giao dịch toàn thị trường, trong khi phiên 14/09 được các nguồn hậu phiên ghi nhận cao hơn. Giá tăng nhưng thanh khoản hạ nhiệt khiến tín hiệu breakout chưa đạt chuẩn xác nhận của rulebook; đây là veto quan trọng chống FOMO.",
        "Khối ngoại mua ròng khoảng 732 tỷ đồng toàn thị trường, riêng HOSE hơn 719 tỷ đồng và là phiên mua ròng thứ hai liên tiếp. VCB, BID, TCB, MBB, CTG, SSB và HDB nằm trong nhóm được mua ròng đáng kể; BSR cũng được mua ròng mạnh. Ngược lại, VIC và VHM chịu bán ròng lớn, cho thấy dòng tiền ngoại đang xoay rõ sang ngân hàng/năng lượng thay vì mua đồng đều toàn thị trường.",
        "Dòng tiền nội địa lan sang ngân hàng, chứng khoán và năng lượng; nhóm GELEX hồi phục sau phiên giảm mạnh trước đó. Đây là cải thiện về chất lượng dẫn dắt so với một phiên chỉ kéo trụ, nhưng thanh khoản chưa tăng tương ứng nên độ bền vẫn cần thêm ít nhất một phiên xác nhận.",
        "Về kỹ thuật, trước phiên 15/09 nhiều CTCK đặt vùng 1.770–1.790 là hỗ trợ hội tụ MA trung hạn và TPBS nêu MA200 quanh 1.755 điểm. Close 1.811,15 đã đứng trên các vùng hỗ trợ này và lấy lại khu 1.810–1.815 từng bị đánh mất. Tuy nhiên mức MA20 cập nhật sau phiên chưa được khóa độc lập từ nguồn thứ hai, vì vậy bài không tuyên bố VN-Index đã chính thức reclaim MA20."
      ],
      levels: [
        { label: "Pivot phải giữ", value: "1.800–1.810", note: "Vùng tâm lý và vùng hỗ trợ cũ vừa được lấy lại. Nếu retest giữ được với độ rộng tiếp tục tích cực, có thể xem xét thăm dò nhỏ; nếu rơi lại dưới vùng này ngay phiên kế tiếp thì coi nhịp 15/09 là hồi kỹ thuật chưa bền." },
        { label: "Hỗ trợ mạnh / mốc rủi ro", value: "1.770–1.790", note: "Vùng hỗ trợ được nhiều CTCK theo dõi trước phiên 15/09. Đóng cửa trở lại dưới 1.790 làm suy yếu mạnh view hồi; thủng 1.770 kích hoạt trạng thái risk-off rõ hơn." },
        { label: "Vùng xác nhận tích cực", value: "1.820–1.830", note: "Chỉ tăng rủi ro khi VN-Index đóng vững phía trên vùng này, thanh khoản tăng rõ so với 15/09, độ rộng vẫn nghiêng về bên tăng và leader không bị xả cuối phiên." },
        { label: "Kháng cự / vùng chốt trading", value: "1.850–1.870", note: "Đây là vùng cản đã được các CTCK lưu ý trước nhịp giảm. Tại close 1.811,15, R:R tới cận gần 1.850 so với mốc vô hiệu 1.790 chỉ khoảng 1,84:1, dưới chuẩn 2:1; vì vậy không mua đuổi ở giá đóng cửa hiện tại." }
      ],
      confluence: {
        score: 2,
        maxScore: 7,
        factors: [
          { factor: "Giá / MA / cấu trúc", score: 0, note: "Reclaim 1.800 và vùng MA trung hạn; MA20 sau phiên chưa khóa độc lập." },
          { factor: "Thanh khoản", score: -1, note: "Giá tăng nhưng thanh khoản toàn thị trường giảm so với phiên trước." },
          { factor: "Độ rộng", score: 1, note: "HOSE 222 tăng/86 giảm, lan tỏa tích cực." },
          { factor: "Dòng tiền", score: 1, note: "Lan sang ngân hàng, chứng khoán, năng lượng thay vì chỉ một trụ." },
          { factor: "Khối ngoại", score: 1, note: "Mua ròng phiên thứ hai; khoảng 732 tỷ toàn thị trường." },
          { factor: "Chất lượng dẫn dắt", score: 0, note: "Cải thiện nhưng chưa đủ dữ liệu thanh khoản ngành để chấm +1 chắc chắn." },
          { factor: "Vĩ mô / phái sinh", score: 0, note: "Fed là biến số lớn; basis F1M sau phiên 15/09 chưa khóa độc lập." }
        ],
        veto: [
          "Thanh khoản không xác nhận đà tăng",
          "R:R tại giá đóng cửa tới kháng cự gần 1.850 thấp hơn 2:1 nếu dùng 1.790 làm mốc vô hiệu"
        ]
      },
      scenarios: [
        { state: "positive", probability: 30, if: "Giữ trên 1.810 và đóng vượt 1.820–1.830 với thanh khoản tăng, độ rộng tiếp tục tích cực và leader ngân hàng/chứng khoán/năng lượng duy trì", then: "Có thể nâng từ CHỜ sang mua thăm dò 20–30% ở leader đạt điểm mua riêng; stoploss 3–7%, target tối thiểu 10–15%, R:R ≥ 2:1." },
        { state: "neutral", probability: 50, if: "Dao động trong 1.790–1.830, thanh khoản chưa mở rộng hoặc chỉ số tăng nhưng động lượng chậm lại", then: "Duy trì CHỜ / TRADING NGẮN, không mua đuổi; ưu tiên retest hợp lệ quanh 1.800–1.810 và giữ tiền mặt cao." },
        { state: "risk_off", probability: 20, if: "Đóng dưới 1.790, đặc biệt thủng 1.770 kèm độ rộng xấu và leader đồng loạt gãy nền", then: "Hạ mạnh phần trading, dừng mua mới, xử lý mọi vị thế chạm stoploss; không dùng margin để bình quân giá xuống." }
      ],
      playbook: [
        { state: "positive", if: "XÁC NHẬN TÍCH CỰC — VN-Index giữ trên 1.810 và đóng vượt 1.820–1.830, thanh khoản tăng rõ so với 15/09, độ rộng tiếp tục nghiêng về bên tăng và leader giữ sức mạnh tương đối", then: "CÓ MUA THĂM DÒ 20–30% vị thế dự kiến tại leader có nền cơ bản/tăng trưởng tốt và điểm mua riêng hợp lệ. Không mua đuổi xanh mạnh; stoploss 3–7%, target tối thiểu 10–15% hoặc kháng cự kế tiếp; chỉ nhận giao dịch có R:R ≥ 2:1." },
        { state: "neutral", if: "THIẾU XÁC NHẬN — VN-Index dao động 1.790–1.830, thanh khoản chưa tăng hoặc lực kéo tập trung trở lại vào vài trụ", then: "CHỜ / TRADING NGẮN. Không tăng margin, giữ tiền mặt cao; chỉ thăm dò tối đa 10–20% khi retest 1.800–1.810 thành công và cổ phiếu leader có setup riêng tốt. Không FOMO sau phiên tăng mạnh." },
        { state: "risk_off", if: "RISK-OFF — VN-Index đóng dưới 1.790; nghiêm trọng hơn nếu thủng 1.770 kèm số mã giảm áp đảo và leader ngân hàng/chứng khoán/năng lượng phá nền", then: "GIẢM RỦI RO phần trading; LOẠI các setup mất nền hoặc chạm stoploss, dừng mở vị thế mới và tránh dùng margin. Mọi vị thế vi phạm stoploss 3–7% phải xử lý theo kế hoạch." }
      ],
      focus: "Trọng tâm: giữ 1.800–1.810 • xác nhận 1.820–1.830 • hỗ trợ mạnh 1.770–1.790 • kháng cự 1.850–1.870 • HOSE 222/53/86 • thanh khoản toàn thị trường ~17.700 tỷ • khối ngoại mua ròng ~732 tỷ • không mua đuổi • stoploss 3–7% • R:R ≥ 2:1",
      inference: "Dữ liệu EOD được khóa trong repo từ VNDIRECT Finfo cho ngày 15/09/2026: VN-Index 1.811,15 điểm (+22,92; +1,28%), VN30 1.951,14 điểm (+1,17%), HNX-Index 274,13 điểm (+0,81%), độ rộng HOSE 222 tăng/53 tham chiếu/86 giảm và 0 mã sàn. Stockbiz hiển thị cùng mức đóng cửa chỉ số. Mekong ASEAN và VietnamBiz xác nhận khối ngoại mua ròng trên 700 tỷ đồng; VietnamBiz khóa 732 tỷ toàn thị trường và hơn 719 tỷ trên HOSE, tập trung ở ngân hàng, trong khi VIC/VHM bị bán ròng mạnh. Mekong ASEAN ghi thanh khoản khoảng 17.700 tỷ đồng và các nhóm ngân hàng, chứng khoán, năng lượng dẫn dắt; Kinh tế Chứng khoán cũng xác nhận sắc xanh lan rộng và năng lượng nổi bật nhưng ghi số mã tăng khác với VNDIRECT do cách tổng hợp, nên bài giữ bộ độ rộng HOSE đã khóa trong repo. Confluence Score = +2/7 với các thành phần 0, -1, +1, +1, +1, 0, 0. Veto đang kích hoạt vì thanh khoản không xác nhận đà tăng và R:R tại giá đóng cửa tới kháng cự gần 1.850 so với mốc vô hiệu 1.790 chỉ khoảng 1,84:1. Tự doanh và basis VN30F1M sau phiên 15/09 chưa được khóa độc lập sau nhiều lượt tìm kiếm; vì vậy kết luận bị downgrade về CHỜ / TRADING NGẮN, không mở vị thế mới diện rộng. Nội dung mang tính tham khảo; từng cổ phiếu phải có điểm mua riêng, stoploss 3–7% và R:R tối thiểu 2:1.",
      limitations: [
        "CHƯA XÁC MINH độc lập: giá/basis VN30F1M sau phiên 15/09; các nguồn phái sinh tìm được trong ngày chủ yếu đang phân tích dữ liệu phiên 14/09.",
        "CHƯA XÁC MINH độc lập: tự doanh sau phiên 15/09.",
        "MA20 cập nhật sau phiên chưa có nguồn thứ hai khóa con số; không tuyên bố đã reclaim MA20."
      ],
      zaloPost: "Dữ liệu đến hết phiên 15/09/2026. VN-Index lấy lại mốc 1.800 và đóng tại 1.811,15 điểm, tăng 22,92 điểm (+1,28%). VN30 tăng 1,17% lên 1.951,14 điểm; HNX-Index tăng 0,81% lên 274,13 điểm. Độ rộng HOSE trong bộ dữ liệu EOD khóa từ VNDIRECT Finfo cải thiện rõ với 222 mã tăng, 53 mã tham chiếu và 86 mã giảm. Khối ngoại tiếp tục là điểm cộng khi mua ròng khoảng 732 tỷ đồng toàn thị trường, riêng HOSE hơn 719 tỷ đồng, tập trung ở nhóm ngân hàng như VCB, BID, TCB, MBB, CTG. Dòng tiền cũng lan sang chứng khoán và năng lượng. Tuy nhiên, điểm tôi chưa chấp nhận để nâng trạng thái lên MUA là thanh khoản: nguồn hậu phiên ghi khoảng 17.700 tỷ đồng toàn thị trường, thấp hơn phiên trước. Giá tăng mà thanh khoản không mở rộng thì chưa đủ chuẩn xác nhận breakout. Confluence Score hiện +2/7 nhưng dính veto thanh khoản; thêm nữa, tại giá đóng cửa 1.811,15, khoảng lời tới kháng cự gần 1.850 so với mốc vô hiệu 1.790 cho R:R chỉ khoảng 1,84:1, dưới chuẩn 2:1. Trạng thái: CHỜ / TRADING NGẮN. IF VN-Index retest 1.800–1.810 và giữ được, leader duy trì sức mạnh, THEN có thể thăm dò nhỏ. IF đóng vượt 1.820–1.830 kèm thanh khoản tăng rõ, THEN mới nâng mức rủi ro. IF đóng dưới 1.790, đặc biệt thủng 1.770, THEN hạ phần trading và dừng mua mới. Không mua đuổi, không tăng margin. Từng deal cổ phiếu vẫn phải stoploss 3–7%, target tối thiểu 10–15% và R:R ≥ 2:1.",
      sources: [
        { label: "VNDIRECT Finfo — chỉ số & độ rộng EOD 15/09/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-15&size=500" },
        { label: "Stockbiz — chỉ số thị trường 15/09/2026", url: "https://web.stockbiz.vn/IndexDetail.aspx" },
        { label: "VietnamBiz — Khối ngoại mua ròng hơn 700 tỷ, xuống tiền lớn ở nhóm ngân hàng", url: "https://vietnambiz.vn/khoi-ngoai-mua-rong-hon-700-ty-xuong-tien-lon-o-nhom-ngan-hang-2026915153318997.htm" },
        { label: "Mekong ASEAN — SSB tăng trần phiên thứ hai, cổ phiếu nhóm Gelex hồi phục", url: "https://mekongasean.vn/ssb-tang-tran-phien-thu-hai-co-phieu-nhom-gelex-hoi-phuc-59620.html" },
        { label: "Kinh tế Chứng khoán — VN-Index bật tăng hơn 22 điểm, dòng tiền đổ mạnh vào cổ phiếu nhóm năng lượng", url: "https://kinhtechungkhoan.vn/vn-index-bat-tang-hon-22-diem-dong-tien-do-manh-vao-co-phieu-nhom-nang-luong" },
        { label: "SmartF — bối cảnh kỹ thuật MA/hỗ trợ trước phiên 15/09", url: "https://smartf.vn/article/vn-index-tim-diem-tua-giua-luc-luc-cau-bat-day-xuat-hien/" }
      ]
    }
  ];

  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index];
    if (!entry || !entry.id || !entry.date) continue;
    const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
    if (existingIndex >= 0) store.entries[existingIndex] = entry;
    else store.entries.unshift(entry);
  }

  if (entries[0]?.date) store.updated = entries[0].date;
})();
