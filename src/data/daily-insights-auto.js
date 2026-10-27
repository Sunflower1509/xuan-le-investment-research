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
      "id": "market-view-20261027",
      "date": "2026-10-27",
      "publishedAt": "27/10/2026 • Sau phiên",
      "edition": "Số 48",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá 133/133 mã đã khóa EOD 27/10 bằng VNDIRECT–KBS; VN-Index/VN30/HNX đối chiếu Stockbiz; chuỗi VNDIRECT 267 phiên; khớp VNINDEX và độ rộng 1 NGUỒN; đáy 27/10 lệch VNDIRECT/VNIndex.ai; ngoại khớp, tự doanh và basis chưa đủ đối chiếu",
      "title": "Giảm nhẹ nhưng độ rộng yếu, khớp thấp — 8 phiên phân phối tiếp tục chặn mua",
      "thesis": "VN-Index chốt 27/10/2026 tại 1.761,87 điểm (−1,68; −0,10%). Theo V3.3.1, mức −0,10% được xếp ĐI NGANG (chưa giảm 0,2%), dù số mã giảm trội hơn số tăng. Giá dưới MA50 1.771,55 và MA200 1.796,41; MA20 1.736,28 vẫn dốc xuống nên nền XẤU. VNINDEX VNDIRECT khớp 10.254,68 tỷ, bằng 0,832 lần TB20 12.329,58 tỷ; độ rộng 118 tăng/192 giảm. Phiên này không tạo phân phối mới và không có chặn xả cuối vì khớp <TB20. Chặn 8 phân phối/25 còn hiệu lực, điểm −2/7, kết luận KHÔNG mở mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Chỉ số đi ngang, nhiều mã giảm — chặn mua chưa được gỡ",
        "thesis": "VN-Index giảm 0,10%, nhưng 192 mã giảm so 118 mã tăng theo tập VNDIRECT; khớp chỉ 0,832× trung bình 20 phiên. Giá dưới MA50 và MA200, MA20 dốc xuống. Tám phiên phân phối/25 giữ chặn cứng: KHÔNG mở vị thế mới.",
        "evidence": [
          {
            "label": "Vị thế kỹ thuật",
            "signal": "Dưới MA50 và MA200",
            "detail": "MA20 còn dốc xuống • nền XẤU",
            "signalParts": [
              {
                "text": "Dưới MA50 và MA200",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "MA20 còn dốc xuống",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "nền XẤU",
                "tone": "negative"
              }
            ],
            "text": "Giá đóng 1.761,87 dưới MA50 1.771,55 và MA200 1.796,41. MA20 1.736,28 giảm 6,07 điểm so cách 5 phiên; 8 phân phối/25 vẫn vượt ngưỡng chặn cứng.",
            "tone": "negative"
          },
          {
            "label": "Thanh khoản và nến",
            "signal": "10.254,68 tỷ • 0,832× TB20",
            "detail": "Khớp giảm 13,64% so 26/10 • đóng ở 1/3 dưới",
            "signalParts": [
              {
                "text": "10.254,68 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "0,832× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Khớp giảm 13,64%",
                "tone": "warning"
              },
              {
                "text": " so 26/10 • ",
                "tone": "neutral"
              },
              {
                "text": "đóng ở 1/3 dưới",
                "tone": "negative"
              }
            ],
            "text": "VNDIRECT VNINDEX 10.254,68 tỷ so TB20 12.329,58 tỷ. Theo biên giá nguồn chính, đóng ở 23,32% phạm vi phiên. Không chạm chặn xả cuối vì khớp chưa bằng TB20; số đáy VNDIRECT 1.758,60 lệch VNIndex.ai 1.759,11.",
            "tone": "warning"
          },
          {
            "label": "Độ rộng và sức giá",
            "signal": "118 tăng / 192 giảm",
            "detail": "56 đứng • năng lượng và logistics suy yếu trong mẫu",
            "signalParts": [
              {
                "text": "118 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "192 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "56 đứng",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "sức giá nhiều nhóm yếu",
                "tone": "negative"
              }
            ],
            "text": "Độ rộng nguồn VNDIRECT 118/192=0,615, đủ −1 điểm. Trong 133 mã website: năng lượng 0/12 tăng, cảng biển 0/4 tăng, chứng khoán 3/15 tăng, ngân hàng 5/18 tăng. Chỉ là sức giá, chưa kết luận dòng vốn ròng ngành.",
            "tone": "negative"
          }
        ],
        "actions": [
          "KHÔNG mở vị thế mới khi chặn cứng 8 phân phối/25 và nền XẤU; kiểm soát rủi ro theo mức dừng lỗ từng mã, hạn chế/không dùng đòn bẩy.",
          "NẾU phiên tiếp theo đóng dưới đáy kỹ thuật 26/10 là 1.759,84 THÌ tăng kiểm tra các vị thế yếu và giảm phần vi phạm dừng lỗ riêng; không dịch stop xuống theo đáy 27/10 chưa đồng thuận.",
          "NẾU đóng trở lại trên MA50 1.771,55 và MA200 1.796,41, MA20 chuyển dốc lên, phân phối còn ≤5 và dữ liệu thanh khoản/độ rộng/khối ngoại xác nhận THÌ đánh giá lại toàn bộ trạng thái; chưa mua tự động."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "EOD 133/133 giá cổ phiếu đã đối chiếu VNDIRECT–KBS đúng 27/10; CafeF thiếu dữ liệu ngày mục tiêu, CEO/PVS chênh nhỏ khối lượng nhưng giá đóng trùng. VN-Index/VN30/HNX đã đối chiếu Stockbiz, VNIndex.ai VN-Index khớp. Giá trị khớp 10.254,68 tỷ và độ rộng 118/192/56 chỉ một tập VNDIRECT (1 NGUỒN). Đáy phiên nguồn chính 1.758,60 lệch VNIndex.ai 1.759,11; không coi là mốc đã khóa. Ngoại khớp/tự doanh/basis chưa được đối chiếu đầy đủ, không có Sổ người dùng.",
          "shortLabel": "133/133 EOD • 267 phiên • 8 phân phối/25 • −2/7"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.761,87",
          "change": "−1,68 • −0,10%",
          "changeParts": [
            {
              "text": "−1,68",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "−0,10%",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "price_down"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "118 tăng / 192 giảm",
          "change": "56 đứng • 5 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "118 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "192 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "56 đứng",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "5 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "breadth_negative"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "10.254,68 tỷ",
          "change": "0,832× TB20 • giảm 13,64% so 26/10",
          "valueParts": [
            {
              "text": "10.254,68 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "0,832× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "giảm 13,64%",
              "tone": "warning"
            },
            {
              "text": " so 26/10",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới MA50 / MA200",
          "change": "8 phân phối hợp lệ • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Dưới MA50 / MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "Phiên 27/10/2026, VN-Index đóng 1.761,87 điểm (−1,68; −0,10%); VNDIRECT Finfo raw lúc 15:19, Stockbiz bảng giá 14:55 và VNIndex.ai chốt 15:00 cùng xác nhận đóng và phần trăm. VN30 đóng 1.888,40 (−0,06%), HNX-Index 259,50 (+0,07%) theo VNDIRECT và Stockbiz. Giá mở 1.763,46, cao 1.772,62 nhất quán VNDIRECT/VNIndex.ai; đáy VNDIRECT 1.758,60, VNIndex.ai 1.759,11 — không gộp và không khẳng định đã đối chiếu đáy.",
        "VN-Index 1.761,87 còn thấp hơn MA50 1.771,55 (9,68 điểm; 0,55%) và MA200 1.796,41; trên MA20 1.736,28 nhưng MA20 vẫn đi xuống khoảng 6,07 điểm so chính nó cách 5 phiên. Nền XẤU do dưới MA50 và MA20 dốc xuống. Chặn mềm gần MA50 theo ngưỡng ≤1,5%; không lấy việc đứng trên MA20 làm xác nhận đảo chiều.",
        "Khớp lệnh tập VNINDEX VNDIRECT 10.254,68 tỷ, thấp hơn khoảng 13,64% so 26/10 và bằng 0,832 lần TB20 12.329,58 tỷ. Stockbiz báo 13.497,73 tỷ là TỔNG giao dịch cùng ngày, VNIndex.ai 13,92 nghìn tỷ cũng tổng; không dùng số tổng gồm thỏa thuận để thay khớp, và không nối dữ liệu khác nguồn vào chuỗi 267 phiên.",
        "Độ rộng VNINDEX VNDIRECT 118 tăng/192 giảm/56 đứng, 5 mã sàn: tỷ lệ 0,615, yếu tố độ rộng −1. VNIndex.ai có 123 tăng/195 giảm/86 đứng trên tập 404 mã, không cùng phạm vi; chỉ kết luận tương đồng về chiều phân hóa, không nói rằng 118/192 đã được hai nguồn kiểm chính xác.",
        "Trong mẫu 133 cổ phiếu web: ngân hàng 5 tăng/11 giảm/2 đứng, chứng khoán 3/9/3, bất động sản nhóm tổng hợp 1/8/1, năng lượng 0/12/0, cảng biển và logistics 0/4/0; công nghiệp 5/8 tăng. Phân bố giá phản ánh nhóm vốn hóa vừa/yếu khác nhau, chưa có chứng cứ tiền ròng vào/ra ngành.",
        "VNIndex.ai sau chốt phiên thống kê lực kéo VIC +5,12 điểm, VPL +0,37, MWG +0,27; lực ghì VPB −0,82, GAS −0,80, VHM −0,68. Dữ liệu Top một nguồn; theo quy tắc −0,095% là phiên đi ngang, chất lượng dòng tiền 0 điểm, không dùng tỷ lệ top5/điểm giảm 1,68 làm thước đo giả.",
        "Stockbiz ghi tổng giá trị mua ngoại 1.179,45 tỷ và bán 1.429,82 tỷ, ròng tổng −250,37 tỷ. VNIndex.ai đưa ước tính ròng ngoại −444,37 tỷ khác phạm vi; HODL còn đánh dấu Trong phiên. Không trộn ba bộ này làm ròng KHỚP lệnh HOSE EOD hay xác nhận chặn ngoại liên tục 5 phiên. Tự doanh 27/10 và basis hợp đồng VN30F1M cũng chưa có đủ đối chiếu.",
        "VNDIRECT ghi mở 1.763,46, cao 1.772,62, thấp 1.758,60, đóng 1.761,87 tại 23,32% biên phiên, thuộc 1/3 dưới. Không kích hoạt chặn xả cuối vì bội số khớp 0,832 <1. Mức −0,095% không đạt ngưỡng giảm 0,2%, nên ngày 27/10 không phải phiên phân phối mới; tổng còn 8 phân phối/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Chặn cứng ≥6 chưa gỡ."
      ],
      "levels": [
        {
          "label": "Mốc hỗ trợ đã công bố 26/10",
          "value": "1.759,84",
          "note": "Đáy ngày 26/10 trong lịch sử VNDIRECT; phiên 27/10 có xuyên trong ngày theo VNDIRECT nhưng đóng lại trên. Dùng quản trị từ phiên tiếp theo, không thay mốc Sổ gốc."
        },
        {
          "label": "Đáy kỹ thuật VNDIRECT 27/10",
          "value": "1.758,60 • 1 NGUỒN",
          "note": "VNIndex.ai ghi 1.759,11, lệch 0,51 điểm; chưa coi mức đáy mới là đã đối chiếu để tự đổi mốc vô hiệu."
        },
        {
          "label": "Hỗ trợ MA20",
          "value": "1.736,28",
          "note": "MA20 tự tính 267 phiên VNDIRECT, vẫn dốc xuống 6,07 điểm trong 5 phiên."
        },
        {
          "label": "Kháng cự MA50",
          "value": "1.771,55",
          "note": "Chỉ số còn thấp hơn 9,68 điểm, cách 0,55%, là chặn mềm gần kháng cự có nguồn."
        },
        {
          "label": "Kháng cự MA200",
          "value": "1.796,41",
          "note": "MA200 tự tính, không tự coi là giá mục tiêu đầu tư."
        },
        {
          "label": "Điều kiện tích cực",
          "value": ">1.771,55 → 1.796,41 + phân phối ≤5",
          "note": "Cần MA20 dốc lên, thanh khoản/độ rộng/ngoại có xác nhận, kiểm đủ các chặn trước khi đổi trạng thái."
        },
        {
          "label": "Mốc vô hiệu Sổ gốc",
          "value": "KHÔNG KIỂM ĐƯỢC",
          "note": "Người dùng chưa cung cấp Sổ tự lưu; không tự dịch stop hoặc tạo stop mới."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": 0,
            "note": "VN-Index 1.761,87 >MA20 1.736,28, <MA50 1.771,55, <MA200 1.796,41; MA20 dốc xuống; không chạm điều kiện +1/−1 cho yếu tố giá."
          },
          {
            "factor": "Thanh khoản",
            "score": 0,
            "note": "Phiên −0,095% được định nghĩa ĐI NGANG theo ngưỡng ±0,2; bội số khớp 0,832×TB20; yếu tố 2 chấm 0 với phiên đi ngang."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "118 tăng/192 giảm =0,615≤0,67 trong tập VNDIRECT; chỉ 1 NGUỒN, đủ −1."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": 0,
            "note": "Theo V3.3.1 phiên đi ngang không chấm top5 theo tỷ lệ điểm tăng/giảm; VIC và VPB/GAS có đóng góp theo VNIndex.ai EOD nhưng không dùng bảng này để suy tỷ lệ trong ngày −0,10%."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Chưa khóa số ròng KHỚP HOSE đồng phạm vi và chuỗi 5 phiên, số Stockbiz là tổng, VNIndex.ai ước tính, HODL ghi trong phiên."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phiên phân phối/25 ≥5 chấm −1, ≥6 chặn cứng. Không phát sinh mới 27/10."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M 27/10 chưa đủ hai nguồn đúng hợp đồng/giờ EOD; không có tin vĩ mô đặc thù đã khóa đủ để cộng/trừ."
          }
        ],
        "veto": [
          "CHẶN CỨNG 8 phân phối hợp lệ/25 ≥6, chỉ được gỡ khi số hiệu lực còn ≤5. Kết luận KHÔNG bất chấp phiên giảm nhẹ.",
          "CHẶN MỀM: MA50 1.771,55 cách giá đóng 0,55% ≤1,5%, có xuất xứ và chưa lấy lại. Không gọi là xanh điểm/đỏ mã vì chỉ số đóng âm.",
          "Không kích hoạt chặn xả cuối: đóng vùng 1/3 dưới nhưng bội số khớp chỉ 0,832×<1. Không kích hoạt chặn xanh/đỏ mã vì chỉ số âm và khớp thấp.",
          "Chặn ngoại 5 phiên, mốc vô hiệu Sổ người dùng và chặn mang sang trước đó KHÔNG KIỂM ĐƯỢC, không tuyên bố đã gỡ.",
          "Chế độ ĐẦY ĐỦ → thô KHÔNG dòng 1 → trần nền XẤU vẫn KHÔNG → không có Sổ nên bỏ chống đảo chiều → chốt KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — vượt MA50 1.771,55 rồi MA200 1.796,41, MA20 dốc lên và phân phối còn ≤5, thanh khoản/độ rộng/ngoại xác nhận",
          "then": "Tính lại các yếu tố và cổng chặn; không mua tự động."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — còn dưới MA50 1.771,55, giữ quanh vùng 1.759,84 nhưng 8 phân phối chưa gỡ",
          "then": "KHÔNG mở mới, giữ kỷ luật dừng lỗ riêng của cổ phiếu đang có."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — phiên sau đóng dưới mốc 1.759,84, và lực giảm giá mở rộng",
          "then": "Rà lại phần yếu khi chạm stop riêng, giảm rủi ro tài khoản, không bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — vượt 1.771,55/1.796,41, MA20 đảo dốc, phân phối ≤5",
          "then": "ĐÁNH GIÁ LẠI khi khớp/độ rộng/ngoại xác nhận, không mua tự động."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — còn dưới MA50, chặn 8 phân phối",
          "then": "KHÔNG mở vị thế mới, quản trị hàng đang giữ."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng dưới 1.759,84",
          "then": "RÀ SOÁT và giảm mã yếu nếu vi phạm mức dừng lỗ riêng đã đặt."
        }
      ],
      "actionTable": {
        "dataCutoff": "Hết phiên 27/10/2026, nguồn VNDIRECT raw 15:19, Stockbiz 14:55/14:58, VNIndex.ai chốt 15:00; 133/133 giá EOD khóa bằng VNDIRECT–KBS; chế độ ĐẦY ĐỦ",
        "finalState": "KHÔNG",
        "score": "−2/7: giá/MA 0, thanh khoản 0 (phiên đi ngang −0,095%, dù 0,832×TB20), độ rộng −1 (118/192), chất lượng Top5 0 vì phiên đi ngang, ngoại 0 thiếu khớp EOD, phân phối −1 (8/25), phái sinh/vĩ mô 0. Thô KHÔNG dòng 1 → nền XẤU/KHÔNG → thiếu Sổ nên bỏ chống đảo chiều → KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG 8 phân phối/25 ≥6; CHẶN MỀM gần MA50 1.771,55 (0,55%). Chặn ngoại và mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC. Không chặn xả cuối vì bội số 0,832.",
        "marketState": "YẾU — nền XẤU, MA20 vẫn giảm, giá dưới MA50/MA200",
        "shortTrend": "Giằng co dưới MA50 1.771,55, MA20 dốc xuống 6,07 điểm so 5 phiên",
        "mediumTrend": "Yếu vì dưới MA50 1.771,55 và MA200 1.796,41, 8 phân phối vẫn còn",
        "liquidity": "Khớp VNINDEX VNDIRECT 10.254,68 tỷ, 0,832× TB20 12.329,58 tỷ và giảm 13,64% so 26/10; 1 NGUỒN, không gộp tổng GD Stockbiz",
        "breadth": "118 tăng / 192 giảm / 56 đứng / 5 sàn theo tập VNDIRECT, tỷ lệ 0,615 (1 NGUỒN)",
        "flow": "VNIndex.ai EOD: VIC/VPL/MWG đóng góp kéo, VPB/GAS/VHM tạo sức giảm. Phiên đi ngang theo ±0,2% nên không tính tỷ lệ top5; mẫu 133 mã năng lượng 0/12 tăng, công nghiệp 5/8 tăng, không có vốn ròng ngành.",
        "foreign": "Stockbiz tổng GD ngoại mua 1.179,45 tỷ/bán 1.429,82 tỷ; không thay cho ròng KHỚP HOSE. VNIndex.ai ước tính ròng −444,37 tỷ khác phạm vi; HODL trong phiên. Chuỗi 5 phiên KHÔNG KIỂM ĐƯỢC.",
        "distributions": "8/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Ngày 27/10 không thêm mới vì chỉ số −0,095% và khớp thấp hơn phiên trước.",
        "proprietary": "Chưa có tự doanh ròng HOSE 27/10 được đối chiếu theo phạm vi EOD; nmquan mới đến 26/10 tại mốc kiểm.",
        "tradingAbility": "Phòng thủ — KHÔNG mua mới (dòng 1)",
        "moneyIn": "Chưa có vốn ròng ngành đủ xác minh; sức GIÁ mẫu 133 mã: công nghiệp 5/8 tăng, ngân hàng 5/18 tăng. Không coi là dòng tiền ròng.",
        "moneyOut": "Chưa có vốn ròng rời ngành đủ xác minh; sức GIÁ mẫu 133 mã: năng lượng 12/12 giảm, logistics 4/4 giảm, nông nghiệp 6/6 giảm, chứng khoán 9/15 giảm.",
        "support": "Đáy 26/10 đã công bố 1.759,84 là tham chiếu từ phiên 27/10; mức đáy 27/10 VNDIRECT 1.758,60 đang lệch VNIndex.ai 1.759,11, nhãn 1 NGUỒN. Hỗ trợ MA20 1.736,28.",
        "resistance": "MA50 1.771,55, cách 0,55%; MA200 1.796,41.",
        "invalidation": "Mốc vô hiệu Sổ người dùng KHÔNG KIỂM ĐƯỢC, không tự dùng đáy chưa đồng thuận 27/10 để dời stop hay gỡ chặn.",
        "buyZone": "Không áp dụng — trạng thái KHÔNG dòng 1, không ghi vùng mua mới.",
        "reduceZone": "Nếu từ phiên sau đóng dưới mốc tham chiếu 26/10 là 1.759,84, rà mã yếu và giảm khi mã riêng vi phạm dừng lỗ đã xác lập.",
        "rr": "Không áp dụng: trạng thái KHÔNG và mốc vô hiệu chính thức trong Sổ gốc chưa được đối chiếu.",
        "margin": "Giảm / không sử dụng",
        "allocation": "Định hướng ≤20% cổ phiếu / ≥80% tiền mặt theo chế độ KHÔNG dòng 1; tùy điều kiện tài khoản",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mở vị thế mới; theo dõi khả năng lấy lại MA50 với độ rộng, thanh khoản xác nhận và chặn phân phối được gỡ."
      },
      "finalConclusion": [
        "KHÔNG mua mới — VN-Index đi ngang theo ngưỡng ±0,2% nhưng độ rộng 118 tăng/192 giảm, khớp 0,832× TB20 và 8 phân phối/25 còn hiệu lực.",
        "Nền XẤU do giá dưới MA50/MA200 và MA20 dốc xuống; đóng ở 1/3 dưới không phải chặn xả cuối vì khớp chưa đạt bình quân.",
        "NẾU phiên tới đóng dưới mốc 26/10 là 1.759,84 THÌ rà mã yếu theo stop riêng; chỉ đánh giá lại sau khi vượt MA50 1.771,55, MA200 1.796,41, MA20 dốc lên và phân phối còn ≤5."
      ],
      "focus": "KHÔNG • nền XẤU • −2/7 • 8 phân phối/25 • VN-Index 1.761,87 (−0,10%) • MA20 1.736,28 / MA50 1.771,55 / MA200 1.796,41 • khớp 0,832× TB20",
      "inference": "Nhật ký đầy đủ tại docs/market-source-log-20261027.md. Audit VNDIRECT 267 phiên run 40472835290, EOD 133 cổ phiếu VNDIRECT–KBS run 40472826314. Stockbiz/VNIndex.ai đối chiếu VN-Index; Stockbiz VN30/HNX. Khớp VNINDEX và độ rộng một nguồn, đáy 27/10 có sai khác, ngoại khớp/tự doanh/basis/Sổ gốc chưa đủ xác minh. Không chỉnh bố cục.",
      "limitations": [
        "Khớp lệnh 10.254,68 tỷ VNDIRECT VNINDEX chỉ 1 NGUỒN, khác tổng GD 13.497,73 tỷ Stockbiz và 13,92 nghìn tỷ VNIndex.ai, không so chéo phạm vi.",
        "Độ rộng 118/192/56 theo tập VNDIRECT khác 123/195/86 theo tập 404 mã của VNIndex.ai, không coi là hai nguồn đồng phạm vi.",
        "Thấp phiên 27/10 VNDIRECT 1.758,60 khác VNIndex.ai 1.759,11; ghi 1 NGUỒN và không tự nâng thành stop có xác nhận.",
        "Khối ngoại ròng khớp HOSE và chuỗi 5 phiên chưa đủ so cùng phạm vi; Stockbiz là tổng, VNIndex.ai là ước tính và HODL còn ghi trong phiên; tự doanh và basis cũng thiếu EOD.",
        "Không có Sổ gốc người dùng để kiểm mốc vô hiệu và các chặn lịch sử; không giả đã gỡ.",
        "Ngành chỉ được phân tích theo sức giá trên mẫu 133 mã, không suy dòng vốn ròng toàn HOSE."
      ],
      "zaloPost": "VN-Index kết phiên 27/10 tại 1.761,87 điểm, giảm 1,68 điểm (−0,10%). Tôi tiếp tục giữ trạng thái KHÔNG mở vị thế mới. Giá còn dưới MA50 1.771,55 và MA200 1.796,41, MA20 vẫn dốc xuống; thị trường vẫn có 8 phiên phân phối trong 25 phiên gần nhất, chưa đạt điều kiện gỡ chặn mua.\n\nPhiên này dễ gây nhầm vì mức giảm chỉ 0,10%, nhưng mặt bằng giá yếu hơn nhiều: theo tập VNDIRECT có 118 mã tăng so với 192 mã giảm. Giá trị khớp lệnh trong tập chỉ số khoảng 10.255 tỷ đồng, chỉ bằng 0,832 lần bình quân 20 phiên trước. Thanh khoản giảm không cho thấy một phiên phân phối mới, nhưng cũng chưa tạo bằng chứng tiền lớn quay lại.\n\nTrong danh sách 133 mã theo dõi, năng lượng, logistics và nông nghiệp đều có số mã giảm áp đảo; ngân hàng và chứng khoán phân hóa. Bảng đóng góp điểm từ VNIndex.ai cho thấy VIC kéo chỉ số, còn VPB, GAS, VHM tạo áp lực, nhưng đây là một nguồn và không đại diện vốn ròng theo ngành.\n\nNẾU VN-Index còn dưới MA50 ở 1.771,55, THÌ tôi không mua mới. NẾU phiên tới đóng dưới mốc tham chiếu 26/10 là 1.759,84, THÌ rà lại phần cổ phiếu yếu và thực hiện dừng lỗ riêng khi mã vi phạm, không bình quân giá xuống. NẾU lấy lại MA50, sau đó MA200 tại 1.796,41, MA20 dốc lên và phân phối còn tối đa 5 phiên, thanh khoản và độ rộng xác nhận, THÌ mới đánh giá lại trạng thái.\n\nTỷ trọng cổ phiếu định hướng trong chế độ phòng thủ không quá 20%, hạn chế đòn bẩy và ưu tiên bảo vệ sức mua.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "Stockbiz — bảng VN-Index/VN30/HNX phiên 27/10 đã chốt",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "VNIndex.ai — phiên 27/10 đã đóng cửa, bảng độ rộng và đóng góp",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "VNDIRECT Finfo — kiểm toán 267 hàng lịch sử tới 27/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40472835290"
        },
        {
          "label": "GitHub Actions — khóa 133/133 giá EOD VNDIRECT–KBS ngày 27/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40472826314"
        },
        {
          "label": "HODL — khối ngoại phiên 27/10 còn trong phiên khi kiểm",
          "url": "https://hodl.vn/indices/vnindex"
        },
        {
          "label": "Nhật ký nguồn và bảng 20 tiêu chí 27/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261027.md"
        }
      ]
    },
    {
      "id": "market-view-20261026",
      "date": "2026-10-26",
      "publishedAt": "26/10/2026 • Sau phiên",
      "edition": "Số 47",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá 133/133 mã EOD 26/10 khóa VNDIRECT–KBS đúng ngày; VN-Index/VN30/HNX đối chiếu Stockbiz 14:46; chuỗi 266 phiên VNDIRECT; khớp VNINDEX và độ rộng 1 NGUỒN; ngoại khớp, tự doanh, basis, Top5 EOD chưa được khóa chuẩn",
      "title": "Quay lại dưới MA50, độ rộng yếu — 8 phiên phân phối chưa gỡ",
      "thesis": "VN-Index đóng 26/10/2026 tại 1.763,55 điểm (−10,60; −0,60%). Giá dưới MA50 1.771,63 và MA200 1.796,54, trên MA20 1.737,07 nhưng MA20 vẫn dốc xuống nên nền XẤU. Theo tập VNINDEX VNDIRECT: khớp 11.874,73 tỷ, 0,961× bình quân 20 phiên trước; 97 mã tăng/203 giảm/65 đứng. Giá đóng 17,17% biên phiên, song bội số <1 nên không đủ chặn xả cuối; phiên giảm với thanh khoản thấp hơn 23/10 không tạo phân phối mới. Vẫn còn 8 phân phối/25 ⇒ CHẶN CỨNG, điểm −2/7, KHÔNG mua mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Mất MA50, lực giảm lan rộng — ưu tiên kiểm soát rủi ro",
        "thesis": "VN-Index giảm 0,60% xuống dưới MA50, trong khi 203 mã giảm so 97 mã tăng. Khớp theo VNDIRECT 0,961× TB20, không phải bán tháo thanh khoản tăng mạnh nhưng lực giá yếu. Chặn cứng 8 phân phối/25 vẫn còn: KHÔNG mở mua mới.",
        "evidence": [
          {
            "label": "Xu hướng kỹ thuật",
            "signal": "Dưới MA50 và MA200",
            "detail": "MA20 dốc xuống • nền XẤU",
            "signalParts": [
              {
                "text": "Dưới MA50 và MA200",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "MA20 dốc xuống",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "nền XẤU",
                "tone": "negative"
              }
            ],
            "text": "Giá đóng 1.763,55 dưới MA50 1.771,63 và MA200 1.796,54; còn trên MA20 1.737,07 nhưng MA20 giảm 11,52 điểm so chính nó cách 5 phiên. Chặn 8 phân phối/25 chưa gỡ.",
            "tone": "negative"
          },
          {
            "label": "Thanh khoản và nến",
            "signal": "11.874,73 tỷ • 0,961× TB20",
            "detail": "Khớp giảm 15,92% so 23/10 • đóng gần đáy",
            "signalParts": [
              {
                "text": "11.874,73 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "0,961× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Khớp giảm 15,92%",
                "tone": "warning"
              },
              {
                "text": " so 23/10 • ",
                "tone": "neutral"
              },
              {
                "text": "đóng gần đáy",
                "tone": "negative"
              }
            ],
            "text": "Khớp VNINDEX VNDIRECT 11.874,73 tỷ so TB20 liền trước 12.358,23 tỷ. Nến đóng tại 17,17% biên phiên; không kích hoạt chặn xả cuối vì thanh khoản chưa bằng TB20. 26/10 không tạo phân phối mới, tổng vẫn 8.",
            "tone": "warning"
          },
          {
            "label": "Độ rộng và phân hóa",
            "signal": "97 tăng / 203 giảm",
            "detail": "65 đứng giá • ngân hàng và chứng khoán yếu",
            "signalParts": [
              {
                "text": "97 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "203 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "65 đứng giá",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "ngân hàng/chứng khoán yếu",
                "tone": "negative"
              }
            ],
            "text": "Độ rộng 97/203=0,478 ⇒ yếu tố −1. Mẫu 133 mã web: ngân hàng 1/18 tăng, chứng khoán 4/15 tăng, năng lượng 7/12 tăng. Đây là sức GIÁ của tập theo dõi, chưa xác minh vốn ròng ngành.",
            "tone": "negative"
          }
        ],
        "actions": [
          "KHÔNG mở vị thế mới khi có chặn cứng 8 phân phối/25 và nền XẤU; ưu tiên rà stop riêng từng mã, hạn chế hoặc không sử dụng đòn bẩy.",
          "NẾU VN-Index còn dưới MA50 1.771,63 THÌ tiếp tục phòng thủ; NẾU phiên tới đóng dưới đáy 26/10 là 1.759,84 THÌ kiểm tra các mã yếu và giảm phần vi phạm dừng lỗ riêng, không tự hạ mức stop.",
          "NẾU chỉ số lấy lại MA50 1.771,63, rồi MA200 1.796,54, MA20 đảo dốc lên và phân phối còn ≤5, đồng thời thanh khoản/độ rộng/ngoại đủ xác nhận THÌ đánh giá lại trạng thái trước khi cân nhắc giao dịch."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "Giá cổ phiếu 133/133 đúng ngày 26/10 đối chiếu VNDIRECT–KBS; CafeF chưa có dòng EOD khi khóa. KL 129/133 trùng, BVS/CEO/DXP/SHS có lệch nhỏ, nguồn chính VNDIRECT được giữ. VN-Index/VN30/HNX khớp Stockbiz 14:46. Chuỗi 266 phiên VNDIRECT đủ MA/TB20/phân phối, khớp lệnh và độ rộng 1 NGUỒN (khác tổng giá trị giao dịch và tập 404 mã VNIndex.ai). HODL ngoại còn tạm trong phiên; top5 EOD, tự doanh và basis chưa đủ đối chiếu, không dùng để kích hoạt chặn cứng.",
          "shortLabel": "EOD 133/133 • 266 phiên • 8 phân phối/25 • khớp 1 NGUỒN"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.763,55",
          "change": "−10,60 • −0,60%",
          "changeParts": [
            {
              "text": "−10,60",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "−0,60%",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "price_down"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "97 tăng / 203 giảm",
          "change": "65 đứng • 2 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "97 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "203 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "65 đứng",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "2 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "breadth_negative"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "11.874,73 tỷ",
          "change": "0,961× TB20 • giảm 15,92% so 23/10",
          "valueParts": [
            {
              "text": "11.874,73 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "0,961× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "giảm 15,92%",
              "tone": "warning"
            },
            {
              "text": " so 23/10",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới MA50 / MA200",
          "change": "8 phân phối hợp lệ • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Dưới MA50 / MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "VN-Index ngày 26/10/2026 chốt 1.763,55 điểm (−10,60; −0,60%). Mở 1.773,75, cao 1.781,45, thấp 1.759,84. VNDIRECT Finfo cập nhật lúc 15:02 và banner Stockbiz sau ATC 14:46 đều khớp giá đóng; VN30 1.889,53 (−0,92%), HNX-Index 259,32 (−1,29%). Các nguồn VNIndex.ai/Investing ảnh chụp 13–14 giờ khác giá đóng, không dùng số đang giao dịch thay EOD.",
        "Chỉ số đã trở lại dưới MA50 1.771,63 sau khi vượt đường này 23/10; dưới MA200 1.796,54. Giá 1.763,55 còn trên MA20 1.737,07 nhưng MA20 thấp hơn 11,52 điểm so với 5 phiên trước. Nền XẤU theo V3.3.1 vì dưới MA50 và MA20 dốc xuống; không suy rằng giữ trên MA20 là đảo chiều.",
        "Khớp lệnh trong tập VNINDEX VNDIRECT 11.874,73 tỷ, tương đương 0,961× TB20 trước phiên là 12.358,23 tỷ, thấp hơn 15,92% so 23/10. Stockbiz IndicesStats cập nhật trước giờ chốt và VNIndex.ai báo tổng GD khác giờ/phạm vi, tuyệt đối không ghép các số đó làm khớp để tính trung bình hay phiên phân phối.",
        "Độ rộng theo VNINDEX VNDIRECT có 97 tăng/203 giảm/65 đứng, 2 mã sàn; tỷ lệ tăng/giảm 0,478 đủ chấm −1. VNIndex.ai 14:44 đếm 101/215/88 trên bộ 404 mã, không cùng giờ/tập nên không được gắn nhãn đối chiếu cho độ rộng. Nhóm ngân hàng, chứng khoán và công nghiệp trong mẫu 133 mã yếu về sức giá.",
        "Trong mẫu 133 cổ phiếu riêng website: ngân hàng 1/18 tăng, 15 giảm; chứng khoán 4/15 tăng, 11 giảm; bất động sản tổng hợp 3/10 tăng, 7 giảm; công nghiệp 1/8 tăng, 7 giảm. Năng lượng 7/12 tăng, 2 giảm, 3 đứng. Đây chỉ là sức GIÁ, chưa đủ bằng chứng khớp ngành và khối ngoại ngành để xác định tiền lớn ròng vào/ra.",
        "VNIndex.ai 14:44 có bảng điểm đóng góp và nhóm kéo/đè, nhưng đây là ảnh chụp TRONG PHIÊN, không dùng để chấm Top5 đóng góp EOD. Chất lượng dòng tiền chấm 0 do thiếu bảng cùng giờ đủ chuẩn, không đưa con số tạm vào trạng thái.",
        "HODL báo khối ngoại bán ròng khớp HOSE khoảng 839 tỷ nhưng vẫn ghi phiên 26/10 là tạm và chưa chốt EOD; VNIndex.ai 14:44 có mức bán ròng khác phạm vi. Stockbiz số NN ở 14:21 là giao dịch tổng chưa khóa. Không sử dụng các trị số đó để kết luận chuỗi khớp ngoại 5 phiên. Smoney tự doanh mới đến 23/10 và basis VN30F1M ngày 26/10 chưa được xác nhận độc lập.",
        "VN-Index đóng ở 17,17% biên độ phiên 1.759,84–1.781,45, tức 1/3 dưới; nhưng khớp chỉ 0,961× TB20, do đó KHÔNG đủ hai điều kiện để kích hoạt chặn xả cuối. Ngày 26/10 giảm trên 0,2% nhưng khớp thấp hơn 23/10, không phát sinh phiên phân phối. Vẫn có 8 phiên phân phối/25 hiệu lực, vượt chặn cứng ≥6 nên giữ KHÔNG mở mới."
      ],
      "levels": [
        {
          "label": "Mốc đáy phiên 26/10",
          "value": "1.759,84",
          "note": "Đáy có xuất xứ VNDIRECT Finfo và VNIndex.ai 14:44, dùng theo dõi từ phiên sau; không thay dừng lỗ chính thức trong Sổ người dùng."
        },
        {
          "label": "Đáy phiên trước 23/10",
          "value": "1.750,83",
          "note": "Mốc kỹ thuật đã công bố ngày 23/10; hôm 26/10 chưa vi phạm trên giá đóng. Không hạ stop cũ."
        },
        {
          "label": "Hỗ trợ MA20",
          "value": "1.737,07",
          "note": "TB20 đóng cửa VNDIRECT 266 phiên; MA20 vẫn đang dốc xuống 11,52 điểm so cách 5 phiên."
        },
        {
          "label": "Kháng cự gần MA50",
          "value": "1.771,63",
          "note": "TB50 đóng cửa cùng chuỗi; cách giá chốt 8,08 điểm, khoảng 0,46%, đủ chặn mềm sát kháng cự."
        },
        {
          "label": "Kháng cự MA200",
          "value": "1.796,54",
          "note": "TB200 đóng cửa, chưa lấy lại; không phải mục tiêu lợi nhuận."
        },
        {
          "label": "Điều kiện gỡ chặn và xác nhận",
          "value": "Vượt 1.771,63 → 1.796,54 + phân phối ≤5",
          "note": "Cần thêm MA20 dốc lên, khớp/độ rộng xác nhận, chặn ngoại đã kiểm; không tự phát tín hiệu mua."
        },
        {
          "label": "Mốc vô hiệu Sổ gốc",
          "value": "KHÔNG KIỂM ĐƯỢC",
          "note": "Không có Sổ tự lưu người dùng; không sáng tạo mức dừng lỗ VN-Index."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": 0,
            "note": "Giá 1.763,55 trên MA20 1.737,07, dưới MA50 1.771,63 và MA200 1.796,54, MA20 dốc xuống; không đạt +1/−1 theo quy tắc giá."
          },
          {
            "factor": "Thanh khoản",
            "score": 0,
            "note": "Ngày giảm −0,60%, GT khớp VNDIRECT 11.874,73 tỷ/TB20 12.358,23 tỷ=0,961×; chưa đạt ngưỡng phiên giảm thanh khoản tăng ≥1,2 để chấm −1, không +1."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "97 tăng/203 giảm = 0,478 ≤0,67, theo tập chỉ số VNDIRECT EOD (1 NGUỒN)."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": 0,
            "note": "Bảng Top5 điểm đè/kéo VNIndex.ai 14:44 chưa chốt EOD; không dùng số tạm để chấm điểm khi phiên giảm."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "HODL khớp ngày 26/10 gắn tạm, Stockbiz tổng GD khác khớp, VNIndex.ai trong phiên; chuỗi ròng khớp HOSE đồng phạm vi chưa đủ xác minh."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phiên phân phối hợp lệ/25 ≥5 ⇒ −1; khớp 26/10 thấp hơn 23/10 nên không sinh phiên mới. Ngưỡng chặn cứng ≥6 vẫn hiệu lực."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M EOD chưa có hai nguồn cùng kỳ hạn/giờ; chưa kiểm được tin vĩ mô bất lợi đủ chuẩn đến mốc cắt, không tự chấm."
          }
        ],
        "veto": [
          "CHẶN CỨNG 8 phân phối hợp lệ/25 ≥6: bắt buộc KHÔNG mua mới; chỉ gỡ khi số phân phối còn ≤5.",
          "CHẶN MỀM: chỉ số 1.763,55 dưới MA50 1.771,63, cách 0,46% ≤1,5%, có kháng cự có xuất xứ gần mà chưa vượt.",
          "Không kích hoạt chặn xả cuối dù đóng ở 1/3 dưới: khớp mới 0,961×TB20 <1. Không có chặn xanh điểm/đỏ mã vì chỉ số đang giảm.",
          "Khối ngoại bán 5 phiên + dưới MA50 và mốc vô hiệu Sổ người dùng KHÔNG KIỂM ĐƯỢC; thiếu bằng chứng không đồng nghĩa đã gỡ.",
          "ĐẦY ĐỦ → trạng thái thô KHÔNG dòng 1 → trần nền XẤU KHÔNG → thiếu Sổ, không chạy chống đảo chiều → chốt KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — VN-Index lấy lại MA50 1.771,63, MA200 1.796,54, MA20 dốc lên, số phân phối còn ≤5 và giá/khớp/độ rộng được xác nhận",
          "then": "Tính lại trạng thái đầy đủ, kiểm các chặn trước khi cân nhắc giao dịch, không phát lệnh tự động."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — VN-Index dao động quanh dưới MA50 1.771,63, còn trên đáy kỹ thuật 1.750,83 nhưng chặn 8 phân phối chưa gỡ",
          "then": "KHÔNG mở mới; theo dõi đà hồi và quản trị vị thế hiện có theo ngưỡng riêng."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — phiên tới đóng dưới 1.759,84 và tiếp tục mất vùng đáy 23/10 là 1.750,83",
          "then": "Rà soát mã yếu và mức dừng lỗ riêng, không bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — vượt 1.771,63/1.796,54, MA20 đảo dốc, phân phối ≤5",
          "then": "ĐÁNH GIÁ LẠI khi đủ dữ liệu, không tự nâng trạng thái do một phiên xanh."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — giá còn dưới MA50, 8 phân phối/25",
          "then": "KHÔNG mở vị thế mới; giữ kỷ luật danh mục."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng dưới 1.759,84",
          "then": "RÀ SOÁT GIẢM mã yếu khi vi phạm dừng lỗ riêng; không tự dịch stop."
        }
      ],
      "actionTable": {
        "dataCutoff": "Phiên 26/10/2026, EOD VNDIRECT Finfo 15:02, Stockbiz 14:46 sau ATC; 133/133 mã đã khóa VNDIRECT–KBS đúng ngày; chế độ ĐẦY ĐỦ",
        "finalState": "KHÔNG",
        "score": "−2/7: giá/MA 0 (trên MA20, dưới MA50), thanh khoản 0 (khớp 0,961×), độ rộng −1 (97/203), chất lượng Top5 0 chưa có bảng EOD, ngoại 0 chưa khóa khớp, phân phối −1 (8/25), phái sinh/vĩ mô 0 chưa khóa. Thô KHÔNG dòng 1 → trần nền XẤU/KHÔNG → không có Sổ nên bỏ chống đảo chiều → KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG: 8 phân phối/25; CHẶN MỀM: sát MA50 1.771,63 cách 0,46%. Chặn khối ngoại và mốc Sổ cũ KHÔNG KIỂM ĐƯỢC. Không có chặn xả cuối vì khớp thấp hơn TB20.",
        "marketState": "YẾU — nền XẤU, MA20 dốc xuống và giá dưới MA50/MA200",
        "shortTrend": "Chưa giữ được MA50 1.771,63; vẫn còn trên MA20 1.737,07 nhưng MA20 dốc xuống",
        "mediumTrend": "Yếu vì đóng dưới MA50 1.771,63 và MA200 1.796,54, 8 phân phối vẫn còn",
        "liquidity": "VNINDEX VNDIRECT khớp 11.874,73 tỷ, 0,961× TB20 12.358,23 tỷ và giảm 15,92% so 23/10; nhãn 1 NGUỒN, không trộn tổng GD Stockbiz/VNIndex.ai",
        "breadth": "97 tăng / 203 giảm / 65 đứng / 2 sàn, tập VNDIRECT (1 NGUỒN), tỷ lệ 0,478",
        "flow": "Sức giá mẫu 133 mã: ngân hàng 1/18 tăng; chứng khoán 4/15 tăng; năng lượng 7/12 tăng. Bảng đóng góp Top5 phiên 26/10 chưa có EOD đủ kiểm, không suy vốn ròng ngành.",
        "foreign": "Khối ngoại khớp HOSE 26/10 còn dữ liệu tạm HODL và không có đối chiếu EOD đồng phạm vi; chuỗi 5 phiên KHÔNG KIỂM ĐƯỢC. Không đưa số tạm làm chặn cứng.",
        "distributions": "8/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. 26/10 giảm nhưng khớp thấp hơn 23/10 nên không tạo phân phối.",
        "proprietary": "Tự doanh ròng HOSE EOD 26/10 chưa được công bố đủ phạm vi tại thời điểm kiểm tra; Smoney mới đến 23/10.",
        "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới (dòng 1)",
        "moneyIn": "Chưa xác minh tiền ròng ngành, chỉ có sức GIÁ theo mẫu 133 mã: năng lượng 7/12 tăng, logistics 2/4 tăng.",
        "moneyOut": "Chưa xác minh vốn ròng rời ngành, chỉ có sức GIÁ theo mẫu 133 mã: ngân hàng 15/18 giảm, chứng khoán 11/15 giảm, công nghiệp 7/8 giảm.",
        "support": "Đáy ngày 26/10 1.759,84; đáy ngày 23/10 1.750,83; MA20 1.737,07 (đang dốc xuống), không tự coi là stop Sổ gốc.",
        "resistance": "MA50 1.771,63, cách đóng 0,46%; MA200 1.796,54.",
        "invalidation": "Mốc vô hiệu chính thức của Sổ người dùng KHÔNG KIỂM ĐƯỢC. Đáy 26/10 là mốc theo dõi từ phiên kế tiếp, không thay stop.",
        "buyZone": "Không áp dụng — trạng thái KHÔNG dòng 1, không ghi vùng mua mới.",
        "reduceZone": "Nếu phiên tới đóng dưới 1.759,84 hoặc vùng 1.750,83 bị xuyên, rà mã yếu và giảm nếu từng mã vi phạm stop riêng đã xác lập.",
        "rr": "Không áp dụng — trạng thái KHÔNG, không có mốc vô hiệu từ Sổ gốc để tính R:R có cơ sở.",
        "margin": "Giảm / không sử dụng",
        "allocation": "Tỷ trọng cổ phiếu định hướng ≤20%, còn lại tiền mặt theo dòng 1 V3.3.1, tùy điều kiện tài khoản",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mua mới; ưu tiên quản trị rủi ro khi chỉ số dưới MA50, độ rộng yếu và phân phối chưa gỡ."
      },
      "finalConclusion": [
        "KHÔNG mở mới — 26/10 giá quay xuống dưới MA50, MA20 dốc xuống và còn 8 phân phối/25 buộc chặn cứng.",
        "Phiên giảm có độ rộng yếu (97 tăng/203 giảm) nhưng khớp chưa bằng bình quân 20 phiên, không có bằng chứng phân phối mới hoặc kích hoạt chặn xả cuối.",
        "NẾU chỉ số đóng dưới 1.759,84 từ phiên sau THÌ rà vị thế yếu theo mức dừng lỗ riêng; chỉ đánh giá lại khi lấy lại MA50 1.771,63, MA200 1.796,54, MA20 dốc lên và số phân phối còn ≤5."
      ],
      "focus": "KHÔNG • nền XẤU • −2/7 • 8 phân phối/25 • VN-Index 1.763,55 (−0,60%) • MA20 1.737,07 / MA50 1.771,63 / MA200 1.796,54 • khớp 0,961× TB20",
      "inference": "Nhật ký và 20 tiêu chí: docs/market-source-log-20261026.md. Audit 266 phiên VNDIRECT GitHub 40289685224; EOD 133 mã GitHub 40289671779. Giá chỉ số đối chiếu banner Stockbiz 14:46; khớp và độ rộng một nguồn VNDIRECT; dữ liệu khối ngoại khớp/tự doanh/basis/Top5 EOD và Sổ gốc không đủ. Quy chuẩn bố cục website giữ nguyên.",
      "limitations": [
        "Khớp VNINDEX 11.874,73 tỷ là tập VNDIRECT (1 NGUỒN); Stockbiz cập nhật 14:21 mới có tổng giao dịch, VNIndex.ai có tổng khác, không trộn khi tính 266 phiên.",
        "Độ rộng 97 tăng/203 giảm/65 đứng theo tập VNINDEX VNDIRECT một nguồn, khác bộ 404 mã và mốc 14:44 VNIndex.ai.",
        "Top5 kéo/đè chỉ số EOD 26/10 chưa có bảng chốt đủ đối chiếu; không lấy dữ liệu giữa phiên làm số EOD hoặc kết luận tiền ròng ngành.",
        "HODL ngoại khớp 26/10 còn đánh dấu tạm; Stockbiz dùng tổng và VNIndex.ai trong phiên. Không có khối ngoại khớp EOD cùng phạm vi, tự doanh hoặc basis hai nguồn đầy đủ.",
        "Không có Sổ dữ liệu gốc do người dùng cung cấp nên không thể kiểm mốc vô hiệu và chặn mang sang; không tự dịch stop.",
        "Bộ 133 mã chỉ là danh mục website, không thay toàn bộ HOSE; các nhóm ngành là sức giá, không phải tiền ròng."
      ],
      "zaloPost": "VN-Index kết phiên 26/10 ở 1.763,55 điểm, giảm 10,60 điểm (−0,60%). Tôi vẫn giữ trạng thái KHÔNG mở vị thế mới. Chỉ số đã mất MA50, MA20 tiếp tục đi xuống và còn 8 phiên phân phối còn hiệu lực trong 25 phiên gần nhất. Nhịp hồi vừa qua chưa chuyển thành nền xu hướng khỏe.\n\nĐiều đáng chú ý không chỉ nằm ở số điểm mất mà ở độ rộng: theo tập thống kê VNDIRECT, có 97 mã tăng và 203 mã giảm. Nhóm ngân hàng, chứng khoán và công nghiệp trong danh sách theo dõi chịu sức ép, còn năng lượng có phần ít yếu hơn. Đây là biến động GIÁ, không đủ cơ sở khẳng định dòng vốn ròng đã rút khỏi các ngành.\n\nGiá trị khớp lệnh theo tập VN-Index VNDIRECT đạt khoảng 11.875 tỷ đồng, bằng 0,961 lần bình quân 20 phiên trước và thấp hơn phiên 23/10 gần 15,9%. Chỉ số đóng gần đáy ngày, nhưng không thể gọi đây là phiên xả thanh khoản cao vì giá trị khớp chưa bằng mức trung bình; ngày 26/10 cũng chưa tạo thêm phiên phân phối hợp lệ. Rủi ro vẫn cao do 8 phiên phân phối cũ chưa gỡ.\n\nNẾU chỉ số chưa lấy lại MA50 1.771,63, THÌ tôi tiếp tục đứng ngoài các lệnh mua mới. NẾU phiên tới đóng dưới đáy 26/10 tại 1.759,84, THÌ rà soát vị thế yếu, giảm phần vi phạm mức dừng lỗ riêng từng cổ phiếu, không bình quân giá xuống. NẾU VN-Index vượt lại MA50, sau đó MA200 1.796,54, MA20 chuyển dốc lên và số phân phối giảm còn tối đa 5, thanh khoản và độ rộng có xác nhận, THÌ mới đánh giá lại trạng thái.\n\nTỷ trọng cổ phiếu định hướng trong trạng thái phòng thủ không quá 20%, hạn chế đòn bẩy và ưu tiên bảo vệ nguồn vốn.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "Stockbiz — chỉ số EOD 26/10 lúc 14:46, đối chiếu VN-Index/VN30/HNX",
          "url": "https://web.stockbiz.vn/News/2026/10/26/1917850/phh-bao-cao-tai-chinh-quy-3-2026.aspx"
        },
        {
          "label": "VNDIRECT Finfo — kiểm toán lịch sử 266 phiên tới 26/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40289685224"
        },
        {
          "label": "GitHub — quy trình khóa giá 133/133 và đối chiếu KBS đúng 26/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40289671779"
        },
        {
          "label": "VNIndex.ai — dữ liệu 14:44 đang giao dịch, KHÔNG dùng thay EOD",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "HODL — dữ liệu khối ngoại khớp phiên 26/10 còn TẠM",
          "url": "https://hodl.vn/indices/vnindex"
        },
        {
          "label": "GitHub — nhật ký nguồn, phép tính và 20 tiêu chí V3.3.1",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261026.md"
        }
      ]
    },
    {
      "id": "market-view-20261023",
      "date": "2026-10-23",
      "publishedAt": "23/10/2026 • Sau phiên",
      "edition": "Số 46",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "133/133 cổ phiếu EOD 23/10 khóa VNDIRECT–KBS; VN-Index/VN30/HNX đối chiếu Stockbiz; dữ liệu khớp lệnh và độ rộng VNDIRECT 1 NGUỒN, bảng Top5 VNIndex.ai 1 NGUỒN; chuỗi 265 phiên; ngoại khớp, tự doanh và basis thiếu chứng cứ EOD đồng phạm vi",
      "title": "Vượt MA50 nhưng tăng chưa lan tỏa — 8 phiên phân phối giữ nguyên chặn mua",
      "thesis": "VN-Index chốt phiên 23/10/2026 tại 1.774,15 điểm (+13,52; +0,77%), vượt MA20 1.737,93 và MA50 1.772,22 nhưng còn dưới MA200 1.796,65, MA20 vẫn dốc xuống. Khớp lệnh VNINDEX VNDIRECT 14.123,09 tỷ, bằng 1,155 lần bình quân 20 phiên trước. Độ rộng 137 tăng/153 giảm theo tập VNDIRECT, điểm xanh chưa lan tỏa. Top 5 kéo chỉ số góp 75,07% (VNIndex.ai, một nguồn). Còn 8 phiên phân phối hợp lệ/25 nên chặn cứng không được gỡ. Nền TRUNG TÍNH, điểm −2/7 có giới hạn nguồn; chốt KHÔNG mua mới (dòng 1).",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Chỉ số vượt MA50, rủi ro phân phối vẫn còn",
        "thesis": "Giá tăng +0,77% nhưng số mã giảm nhiều hơn tăng, lượng khớp chỉ 1,155× bình quân 20 phiên, Top5 góp 75,07% điểm tăng (một nguồn). MA20 chưa đảo dốc, dưới MA200 và còn 8 phân phối/25. Trạng thái KHÔNG mở mua mới.",
        "evidence": [
          {
            "label": "Giá và nền xu hướng",
            "signal": "Trên MA20 và MA50",
            "detail": "Còn dưới MA200 • nền TRUNG TÍNH",
            "signalParts": [
              {
                "text": "Trên MA20 và MA50",
                "tone": "positive"
              }
            ],
            "detailParts": [
              {
                "text": "Còn dưới MA200",
                "tone": "warning"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "nền TRUNG TÍNH",
                "tone": "neutral"
              }
            ],
            "text": "VN-Index 1.774,15 vượt MA20 1.737,93 và MA50 1.772,22. Tuy nhiên MA20 đang giảm 16,16 điểm so với 5 phiên trước, MA200 1.796,65 chưa vượt; không đủ tiêu chuẩn nền TỐT.",
            "tone": "neutral"
          },
          {
            "label": "Thanh khoản và điểm kéo trụ",
            "signal": "14.123,09 tỷ • 1,155× TB20",
            "detail": "Top 5 kéo 75,07% điểm tăng • 1 NGUỒN",
            "signalParts": [
              {
                "text": "14.123,09 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "1,155× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Top5 kéo 75,07%",
                "tone": "warning"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "1 NGUỒN",
                "tone": "warning"
              }
            ],
            "text": "Khớp VNINDEX VNDIRECT 14.123,09 tỷ, bình quân 20 phiên trước 12.231,40 tỷ; tăng khớp 6,18% so 22/10 nhưng chưa đạt 1,2× để cộng điểm. Top5 VIC/STB/ACB/LPB/VCB góp 10,15/13,52 điểm (VNIndex.ai, một nguồn).",
            "tone": "warning"
          },
          {
            "label": "Độ rộng và sức giá ngành",
            "signal": "137 tăng / 153 giảm",
            "detail": "73 đứng • ngân hàng mạnh hơn năng lượng trong mẫu",
            "signalParts": [
              {
                "text": "137 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "153 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "73 đứng",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "ngân hàng phân hóa tích cực",
                "tone": "positive"
              }
            ],
            "text": "Tập VNINDEX VNDIRECT: tỷ lệ 137/153=0,895, chỉ số xanh trong khi số mã giảm nhiều hơn tăng. Bộ theo dõi 133 mã: ngân hàng 17/18 tăng, năng lượng 3/12 tăng; đây là biến động giá, chưa xác nhận tiền ròng vào ngành.",
            "tone": "warning"
          }
        ],
        "actions": [
          "KHÔNG mua mới khi chặn cứng 8 phân phối/25 còn hiệu lực; giảm/không sử dụng đòn bẩy và ưu tiên quản trị mã đang giữ, tham chiếu cổ phiếu ≤20% theo dòng 1.",
          "NẾU phiên tiếp theo đóng dưới đáy ngày 23/10 là 1.750,83 THÌ kiểm tra, giảm các vị thế yếu khi chạm mức dừng lỗ riêng; không bình quân giá xuống hoặc tự dịch stop.",
          "NẾU đóng trên MA200 1.796,65, MA20 dốc lên, số phân phối còn ≤5, thanh khoản, độ rộng, khối ngoại được xác nhận và các chặn khác đã được kiểm tra THÌ tính lại trạng thái từ đầu; không tự động mở mua."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "VNDIRECT đã khóa EOD 133/133 mã ngày 23/10, KBS đúng ngày khớp giá từng mã; CafeF thiếu EOD lúc khóa. Khối lượng CEO/PVS/SHS lệch nhỏ, website dùng nguồn chính VNDIRECT và ghi trong metadata. Giá chỉ số đối chiếu Stockbiz và VNIndex.ai. Chuỗi 265 phiên VNDIRECT dùng riêng tính khớp, MA, phân phối. Độ rộng theo tập VNINDEX VNDIRECT khác tập 404 mã VNIndex.ai; Top5 VNIndex.ai một nguồn. Ngoại khớp/tự doanh/basis chưa có EOD cùng phạm vi; không có Sổ người dùng.",
          "shortLabel": "EOD 133/133 • 265 phiên • 8 phân phối/25 • top5 một nguồn"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.774,15",
          "change": "+13,52 • +0,77%",
          "changeParts": [
            {
              "text": "+13,52",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "+0,77%",
              "tone": "positive"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "price_up"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "137 tăng / 153 giảm",
          "change": "73 đứng • 3 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "137 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "153 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "73 đứng",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "3 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "breadth_negative"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "14.123,09 tỷ",
          "change": "1,155× TB20 • tăng 6,18% so 22/10",
          "valueParts": [
            {
              "text": "14.123,09 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "1,155× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "tăng 6,18%",
              "tone": "positive"
            },
            {
              "text": " so 22/10",
              "tone": "neutral"
            }
          ],
          "tone": "neutral",
          "direction": "up",
          "snapshotState": "liquidity_above_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Trên MA20/MA50 • dưới MA200",
          "change": "8 phân phối hợp lệ • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Trên MA20/MA50",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "dưới MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_neutral"
        }
      ],
      "backdrop": [
        "Phiên 23/10/2026: VN-Index đóng 1.774,15 điểm (+13,52; +0,77%); mở 1.757,60, cao 1.775,19, thấp 1.750,83. Giá EOD trùng VNDIRECT lúc 15:17, Stockbiz bảng 23/10 và VNIndex.ai công bố đã đóng cửa 15:00. VN30 1.907,09 (+0,75%), HNX-Index 262,70 (+0,62%). Đây là số cuối phiên, không dùng bản giữa phiên 12:31 của nguồn khác.",
        "Chỉ số đã vượt MA20 1.737,93 và MA50 1.772,22, nhưng MA20 thấp hơn 16,16 điểm so với chính nó cách 5 phiên; còn dưới MA200 1.796,65. Theo tiêu chuẩn V3.3.1, nền TRUNG TÍNH chứ chưa TỐT (chưa có MA20 dốc lên, phân phối còn 8>4 và dưới MA200). Giá đóng nằm tại 95,73% biên độ phiên, không có chặn xả cuối phiên.",
        "Khớp lệnh theo tập chỉ số VNINDEX của VNDIRECT đạt 14.123,09 tỷ đồng, tăng khoảng 6,18% so 22/10, bằng 1,155 lần mức bình quân 20 phiên trước là 12.231,40 tỷ. Stockbiz ghi tổng giao dịch 15.208,98 tỷ còn VNIndex.ai ghi tổng giao dịch khoảng 16,33 nghìn tỷ, khác phạm vi; không ghép vào khớp lệnh lịch sử. Chưa đạt ngưỡng ≥1,2 lần để cho +1 thanh khoản.",
        "Độ rộng tập chỉ số VNDIRECT 137 tăng, 153 giảm, 73 đứng, 3 sàn, tỷ lệ tăng/giảm 0,895. VNIndex.ai sử dụng tập 404 mã với 143 tăng, 156 giảm, 105 đứng; tuyệt đối không pha tập đếm. Chỉ số tăng nhưng mã giảm nhiều hơn tăng tạo chặn mềm; bội số khớp 1,155<1,2 nên không kích hoạt chặn cứng xanh điểm/đỏ mã có thanh khoản cao.",
        "Theo bảng VNIndex.ai sau đóng cửa 23/10, VIC +5,76 điểm, STB +1,71, ACB +0,96, LPB +0,86, VCB +0,86. Top5 góp 10,15 trên tổng tăng 13,52 điểm = 75,07%; vượt ngưỡng tập trung 70% của Prompt, chất lượng dòng tiền −1 và chặn mềm. Bảng top5 chỉ một nguồn, không tự gọi là đã đối chiếu độc lập.",
        "Bộ 133 mã cổ phiếu website không thay thế toàn HOSE: ngân hàng 17 tăng/1 giảm; chứng khoán 7 tăng/6 giảm/2 đứng; năng lượng 3 tăng/8 giảm/1 đứng; bất động sản nhóm tổng hợp 3 tăng/5 giảm/2 đứng; logistics 2 tăng/2 giảm. Theo VNIndex.ai chỉ số ngành gia quyền ngân hàng +1,5% và bất động sản +1,2%. Đây chỉ là sức GIÁ, không đủ số GT khớp ngành và ngoại ngành để xác định luồng vốn ròng thực.",
        "Stockbiz báo khối ngoại tổng giá trị mua 1.495,60 tỷ, bán 1.978,69 tỷ (ròng tổng −483,09 tỷ), còn VNIndex.ai mô tả bán ròng khoảng 480 tỷ nhưng không xác minh được phạm vi khớp chuẩn. Không dùng số tổng thay khối ngoại ròng khớp HOSE và chuỗi 5 phiên để chấm. Tự doanh theo Smoney mới đến 22/10, nmquan đến 21/10; basis VN30F1M đúng phiên 23/10 chưa khóa đủ độc lập. Không tự cho các cổng thiếu dữ liệu là đã qua.",
        "Tám phiên phân phối hợp lệ/25 là 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10 và 19/10; phiên 23/10 tăng +0,77% không thêm phân phối, chưa đủ căn cứ gỡ. Ngưỡng chặn cứng ≥6 tiếp tục buộc KHÔNG mua mới bất kể giá đã vượt MA50. Không có Sổ dữ liệu gốc, các mốc vô hiệu và chặn mang sang từ người dùng KHÔNG KIỂM ĐƯỢC."
      ],
      "levels": [
        {
          "label": "Hỗ trợ tham chiếu / đáy phiên 23/10",
          "value": "1.750,83",
          "note": "Đáy thật ngày 23/10 theo VNDIRECT và VNIndex.ai; chỉ áp dụng theo dõi từ phiên kế tiếp, không tự chọn làm stop chính thức của Sổ người dùng."
        },
        {
          "label": "Hỗ trợ động MA50",
          "value": "1.772,22",
          "note": "TB 50 giá đóng cửa VNDIRECT 265 phiên đến 23/10; chỉ số đóng trên 1,93 điểm, cần kiểm tra giữ vững."
        },
        {
          "label": "Hỗ trợ MA20",
          "value": "1.737,93",
          "note": "TB20 giá đóng cửa, đường vẫn dốc xuống; không tự coi giữ MA20 là tín hiệu CÓ khi chặn còn."
        },
        {
          "label": "Kháng cự gần MA200",
          "value": "1.796,65",
          "note": "TB200 đóng cửa cùng chuỗi, cao hơn giá 1,27%; dưới ngưỡng 1,5% của chặn mềm kháng cự."
        },
        {
          "label": "Đáy 20 phiên trước",
          "value": "1.677,19",
          "note": "Đáy 20/10 ghi trong chuỗi lịch sử, không dùng tự động làm dừng lỗ của tất cả các vị thế."
        },
        {
          "label": "Điều kiện đánh giá lại",
          "value": ">1.796,65 + MA20 dốc lên + phân phối ≤5",
          "note": "Còn cần số khớp, độ rộng, ngoại và các chặn khác được đối chiếu; không tự chuyển trạng thái khi chỉ vượt một MA."
        },
        {
          "label": "Mốc vô hiệu Sổ gốc",
          "value": "KHÔNG KIỂM ĐƯỢC",
          "note": "Người dùng chưa cung cấp Sổ dữ liệu tự lưu để kiểm chứng chặn cũ, không dời mốc dừng lỗ."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": 0,
            "note": "Giá 1.774,15 trên MA20 1.737,93 và MA50 1.772,22, nhưng MA20 dốc xuống 16,16 điểm trong 5 phiên nên không đạt +1; không chạm −1."
          },
          {
            "factor": "Thanh khoản",
            "score": 0,
            "note": "Phiên tăng 0,77%, khớp cùng nguồn VNDIRECT 14.123,09/12.231,40=1,155×, chưa đạt +1 ≥1,2; không thấp hơn 0,8 để chấm −1."
          },
          {
            "factor": "Độ rộng",
            "score": 0,
            "note": "137 tăng/153 giảm=0,895; không chạm +1 ≥1,5 hay −1 ≤0,67, chặn mềm xanh điểm/đỏ mã riêng."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": -1,
            "note": "VNIndex.ai EOD top5 VIC/STB/ACB/LPB/VCB góp 10,15/13,52=75,07%>70% khi chỉ số tăng; 1 NGUỒN, không có bảng CTCK cùng phương pháp."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Chưa xác minh đúng số ròng KHỚP HOSE và chuỗi 5 phiên đồng phạm vi; Stockbiz ghi tổng −483,09 tỷ, khác định nghĩa khớp."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phiên phân phối hợp lệ/25, ≥5 chấm −1, ≥6 là chặn cứng. Phiên 23/10 tăng, không tạo mới."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M đúng phiên 23/10 không có hai nguồn cùng kỳ/giờ EOD; không suy biến động từ tin cho phiên 22; chưa có tín hiệu vĩ mô bất lợi cụ thể được kiểm đủ."
          }
        ],
        "veto": [
          "CHẶN CỨNG đang có: 8 phiên phân phối hợp lệ/25 (ngưỡng ≥6), buộc KHÔNG mở mới dù VN-Index đã vượt MA50.",
          "CHẶN MỀM: chỉ số xanh +0,77% nhưng 153 giảm>137 tăng; top5 chiếm 75,07% điểm tăng (1 NGUỒN); kháng cự MA200 1.796,65 cách đóng 1,27% trong ngưỡng ≤1,5%.",
          "KHÔNG có chặn xả cuối: đóng 95,73% biên phiên, không ở 1/3 dưới. KHÔNG kích hoạt chặn xanh chỉ số/đỏ mã kèm khớp ≥1,2 vì thực tế 1,155×.",
          "Điều kiện ngoại bán 5 phiên và mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC; không tự coi chặn chưa kiểm là đã gỡ.",
          "Ba bước: chế độ ĐẦY ĐỦ → thô KHÔNG dòng 1 do phân phối → trần nền TRUNG TÍNH/CHỜ vẫn giữ KHÔNG → không có Sổ nên bỏ chống đảo chiều → KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — đóng trên MA200 1.796,65, MA20 đảo dốc lên, số phân phối còn ≤5, thanh khoản, độ rộng và khối ngoại cùng xác nhận",
          "then": "Rà soát lại toàn bộ cổng và trạng thái EOD; không tự động mở mua."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — VN-Index còn trên MA50 1.772,22 nhưng dưới MA200 1.796,65 và 8 phân phối chưa gỡ",
          "then": "KHÔNG mua đuổi, quản trị hàng đang giữ và theo dõi sức lan tỏa."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — phiên tiếp theo đóng dưới đáy ngày 23/10 là 1.750,83",
          "then": "Rà lại vị thế, giảm phần yếu nếu mã vi phạm ngưỡng dừng lỗ riêng; không bình quân xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — vượt 1.796,65, MA20 dốc lên, phân phối còn ≤5",
          "then": "ĐÁNH GIÁ LẠI sau khi các số khớp/độ rộng/ngoại đã xác minh; chưa mua tự động."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — giữ MA50 1.772,22 nhưng dưới MA200 và còn 8 phân phối",
          "then": "KHÔNG mua mới, giữ kỷ luật stop các mã hiện có."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng dưới 1.750,83",
          "then": "RÀ SOÁT GIẢM cổ phiếu yếu nếu vi phạm dừng lỗ từng mã; không bắt đáy."
        }
      ],
      "actionTable": {
        "dataCutoff": "Hết phiên 23/10/2026 giờ Việt Nam; VNINDEX VNDIRECT raw 15:17, Stockbiz IndexStats cùng ngày, VNIndex.ai đóng 15:00; 133 cổ phiếu EOD VNDIRECT–KBS đúng ngày",
        "finalState": "KHÔNG",
        "score": "−2/7 có giới hạn Top5 một nguồn: giá/MA 0 (trên MA20/50 nhưng MA20 dốc xuống), thanh khoản 0 (1,155×), độ rộng 0 (137/153), chất lượng top5 −1 (75,07%), khối ngoại 0 thiếu khớp, phân phối −1 (8/25), phái sinh/vĩ mô 0 thiếu basis. Bước 1 KHÔNG dòng 1 → Bước 2 trần TRUNG TÍNH là CHỜ, vẫn KHÔNG → Bước 3 không có Sổ nên bỏ chống đảo chiều → KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG 8 phân phối/25 ≥6. Chặn mềm xanh điểm/đỏ mã, Top5 kéo 75,07% (1 NGUỒN), MA200 cách đóng 1,27%. Ngoại và mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC.",
        "marketState": "TRUNG TÍNH về nền MA50, nhưng CHƯA THỂ MUA do chặn cứng phân phối",
        "shortTrend": "Giá vượt MA20/50, nhưng độ rộng chưa lan tỏa và MA20 còn dốc xuống",
        "mediumTrend": "Chưa xác nhận tăng bền vững: dưới MA200 1.796,65, 8 phân phối hợp lệ",
        "liquidity": "Khớp VNINDEX VNDIRECT 14.123,09 tỷ (1 NGUỒN), bằng 1,155× TB20 12.231,40 tỷ, tăng 6,18% so 22/10; không gộp Stockbiz tổng GD 15.208,98 tỷ.",
        "breadth": "137 tăng / 153 giảm / 73 đứng / 3 sàn theo VNDIRECT, khác tập 404 mã VNIndex.ai; 1 NGUỒN.",
        "flow": "Top5 VIC/STB/ACB/LPB/VCB góp 10,15/13,52 điểm =75,07% (VNIndex.ai một nguồn). Mẫu 133 mã ngân hàng 17/18 tăng, năng lượng 3/12 tăng; chưa có vốn ròng theo ngành.",
        "foreign": "Stockbiz tổng NN mua 1.495,60, bán 1.978,69, ròng −483,09 tỷ; số này KHÔNG đại diện giá trị ròng KHỚP HOSE và chuỗi 5 phiên; chưa kiểm được cổng ngoại.",
        "distributions": "8/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10; ngày 23/10 không phát sinh mới.",
        "proprietary": "Tự doanh HOSE EOD 23/10 chưa được đối chiếu theo phạm vi chuẩn; Smoney mới đến 22/10.",
        "tradingAbility": "Phòng thủ — KHÔNG mua mới (dòng 1)",
        "moneyIn": "CHƯA ĐỦ chứng cứ dòng vốn ròng ngành. Sức GIÁ mẫu 133 mã: ngân hàng 17/18 tăng, chứng khoán 7/15 tăng, bất động sản nhà ở 4/4 tăng.",
        "moneyOut": "CHƯA ĐỦ chứng cứ vốn ròng rời ngành. Sức GIÁ mẫu 133 mã: năng lượng 8/12 giảm, bất động sản tổng hợp 5/10 giảm.",
        "support": "MA50 1.772,22; đáy phiên 23/10 1.750,83; MA20 1.737,93, không phải stop chính thức Sổ người dùng.",
        "resistance": "MA200 1.796,65 (cách giá 1,27%); chưa có xác minh lực phá kháng cự bền vững.",
        "invalidation": "Mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC; đáy phiên 23/10 1.750,83 chỉ dùng theo dõi kỹ thuật từ phiên sau, không đổi stop đã có.",
        "buyZone": "Không áp dụng — KHÔNG mua mới dòng 1 do 8 phiên phân phối.",
        "reduceZone": "Nếu đóng dưới 1.750,83 từ phiên tới, rà và giảm mã yếu khi chính mã vi phạm stop riêng, không tự đặt stop mới.",
        "rr": "Không áp dụng khi trạng thái KHÔNG và mốc vô hiệu từ Sổ gốc chưa có bằng chứng; không tự bịa R:R.",
        "margin": "Giảm / không sử dụng",
        "allocation": "Định hướng cổ phiếu ≤20%, tiền mặt ≥80% theo Prompt dòng 1, tùy điều kiện tài khoản",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mở mua mới; quan sát khả năng giữ MA50 và vượt MA200, chỉ xem xét lại sau khi các chặn đã kiểm chứng được gỡ."
      },
      "finalConclusion": [
        "KHÔNG mở mua mới: VN-Index vượt MA50 nhưng MA20 còn dốc xuống, 8 phiên phân phối/25 tiếp tục chặn cứng.",
        "Rủi ro nổi bật là điểm tăng tập trung vào nhóm trụ (Top5 75,07% từ một nguồn) trong khi 153 mã giảm >137 mã tăng theo VNDIRECT; khớp 1,155× TB20 chưa đủ ngưỡng xác nhận.",
        "NẾU phiên kế tiếp đóng dưới 1.750,83 THÌ rà vị thế yếu theo stop riêng; chỉ đánh giá lại khi vượt MA200 1.796,65, MA20 dốc lên, phân phối còn ≤5 và đủ kiểm chứng thanh khoản/độ rộng/ngoại."
      ],
      "focus": "KHÔNG • nền TRUNG TÍNH nhưng chặn 8 phân phối/25 • −2/7 (Top5 1 nguồn) • 1.774,15 (+0,77%) • MA20 1.737,93 / MA50 1.772,22 / MA200 1.796,65 • khớp 1,155× TB20",
      "inference": "Nguồn và 20 tự kiểm tại docs/market-source-log-20261023.md. Audit VNDIRECT 265 phiên GitHub 39923768392, EOD 133 mã GitHub 39923758751. Stockbiz/VNIndex.ai xác nhận VN-Index, VN30, HNX. Top5 VNIndex.ai một nguồn; ngoại khớp/tự doanh/basis và Sổ gốc không đủ để xác nhận chặn từ lịch sử. Bố cục trang giữ nguyên.",
      "limitations": [
        "GT khớp 14.123,09 tỷ dùng một tập VNINDEX VNDIRECT, khác tổng 15.208,98 tỷ của Stockbiz và tổng 16,33 nghìn tỷ của VNIndex.ai, không tự ghép nguồn.",
        "Độ rộng 137/153/73 thuộc tập VNDIRECT, khác bộ 404 mã 143/156/105 của VNIndex.ai; nhãn 1 NGUỒN.",
        "Top5 đóng góp 75,07% mới một nguồn VNIndex.ai, chưa có bảng CTCK độc lập cùng phương pháp; loại yếu tố này điểm từ −2 về −1 nhưng chặn 8 phiên vẫn giữ KHÔNG.",
        "Khối ngoại khớp HOSE và chuỗi 5 phiên chưa cùng phạm vi được chứng thực; tự doanh phiên 23/10 và basis VN30F1M đúng ngày chưa đủ số đối chiếu.",
        "Không có Sổ gốc người dùng, chưa thể kiểm mốc vô hiệu và các chặn trước đó; không tự sửa hoặc tạo stop.",
        "Bộ mẫu website 133 mã là một phần thị trường, không phải toàn HOSE và không chứng minh dòng tiền ròng theo ngành."
      ],
      "zaloPost": "VN-Index đóng phiên 23/10 tại 1.774,15 điểm, tăng 13,52 điểm (+0,77%). Chỉ số đã lấy lại MA20 và vượt MA50, nhưng tôi vẫn giữ trạng thái KHÔNG mua mới. MA20 còn đi xuống và thị trường còn 8 phiên phân phối hợp lệ trên 25 phiên. Theo quy tắc quản trị, ngưỡng chặn cứng chưa được gỡ.\n\nĐiểm đáng xem là sự chênh lệch giữa chỉ số và mặt bằng cổ phiếu. Theo tập VNDIRECT, có 137 mã tăng trong khi 153 mã giảm. Năm mã kéo điểm mạnh nhất theo VNIndex.ai chiếm khoảng 75% mức tăng, đặc biệt là VIC và các ngân hàng. Bảng góp điểm này chỉ có một nguồn; vì vậy tôi coi đây là dấu hiệu tập trung lực kéo, chưa phải bằng chứng chắc chắn rằng dòng tiền lan tỏa.\n\nKhớp lệnh theo tập VN-Index VNDIRECT đạt khoảng 14.123 tỷ đồng, bằng 1,155 lần bình quân 20 phiên trước. Thanh khoản tăng so hôm qua, song chưa đạt ngưỡng 1,2 lần để xác nhận phiên tăng theo bộ quy tắc. Trong mẫu 133 cổ phiếu theo dõi, ngân hàng giữ sức giá tốt, năng lượng yếu hơn; không tự gọi đây là tiền ròng vào hay ra ngành khi số liệu ròng chưa được đối chiếu.\n\nNẾU VN-Index chưa vượt MA200 ở 1.796,65, MA20 còn dốc xuống và chặn phân phối vẫn còn, THÌ tôi không mua đuổi. NẾU phiên tới đóng dưới đáy 1.750,83, THÌ rà lại các mã yếu, giảm những vị thế vi phạm mức dừng lỗ đã có, không bình quân giá xuống. NẾU chỉ số vượt MA200, MA20 dốc lên, số phiên phân phối giảm còn tối đa 5 và thanh khoản, độ rộng, khối ngoại đủ nguồn xác nhận, THÌ mới đánh giá lại việc mua mới.\n\nMức cổ phiếu định hướng trong trạng thái phòng thủ không quá 20%; hạn chế đòn bẩy để bảo vệ sức mua cho cơ hội có lợi thế rõ hơn.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "Stockbiz — bảng EOD VNINDEX, VN30, HNX ngày 23/10",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "VNIndex.ai — EOD 23/10, OHLC, 404 mã và top5 đóng góp",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "GitHub — kiểm toán độc lập VNDIRECT Finfo 265 phiên",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39923768392"
        },
        {
          "label": "GitHub — khóa 133 cổ phiếu EOD 23/10, đối chiếu KBS",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39923758751"
        },
        {
          "label": "Smoney — theo dõi tự doanh, chỉ có đến 22/10 khi kiểm tra",
          "url": "https://smoney.com.vn/giao-dich/tu-doanh"
        },
        {
          "label": "GitHub — nhật ký nguồn, phép tính và 20 tự kiểm V3.3.1",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261023.md"
        }
      ]
    },
    {
      "id": "market-view-20261022",
      "date": "2026-10-22",
      "publishedAt": "22/10/2026 • Sau phiên",
      "edition": "Số 45",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá EOD 133/133 mã VNDIRECT–KBS đã khóa đúng 22/10; VN-Index/VN30/HNX đối chiếu Stockbiz; giá trị khớp và độ rộng VNINDEX VNDIRECT chỉ 1 NGUỒN, không gộp tổng giá trị giao dịch; chuỗi 264 phiên; khối ngoại khớp, tự doanh và basis chưa đủ kiểm",
      "title": "Chỉ số tăng nhờ trụ nhưng độ rộng phân hóa — 8 phiên phân phối vẫn chặn mua",
      "thesis": "VN-Index đóng 22/10/2026 ở 1.760,63 điểm (+21,96; +1,26%), vượt MA20 1.738,48 nhưng còn dưới MA50 1.772,20 và MA200 1.796,61, MA20 dốc xuống. Thanh khoản khớp trong tập VNINDEX VNDIRECT 13.300,62 tỷ, chỉ bằng 1,087 lần TB20 12.236,93 tỷ và giảm 22,09% so 21/10. Độ rộng 147 tăng/164 giảm, trái chiều với điểm chỉ số. Top 5 mã góp điểm tăng theo VNIndex.ai (1 NGUỒN) chiếm 96,04% mức tăng. Còn 8 phiên phân phối hợp lệ/25, chặn cứng vẫn hiệu lực. Điểm −2/7, nền XẤU, quyết định KHÔNG mua mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Chỉ số xanh nhờ trụ, chưa có độ lan tỏa để nâng trạng thái",
        "thesis": "VN-Index tăng 1,26% nhưng số mã giảm (164) nhiều hơn mã tăng (147), trong khi khớp lệnh giảm so phiên trước. Chỉ số vượt MA20 nhưng chưa lấy lại MA50; top 5 mã trụ chiếm phần lớn điểm tăng (VNIndex.ai, một nguồn). Chặn 8 phiên phân phối/25 chưa gỡ. KHÔNG mua mới.",
        "evidence": [
          {
            "label": "Xu hướng và phân phối",
            "signal": "Vượt MA20 • dưới MA50/200",
            "detail": "Nền XẤU • còn 8 phiên phân phối/25",
            "signalParts": [
              {
                "text": "Vượt MA20",
                "tone": "positive"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "dưới MA50/200",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "Nền XẤU",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "8 phân phối/25",
                "tone": "negative"
              }
            ],
            "text": "VN-Index 1.760,63 đã vượt MA20 1.738,48 nhưng thấp hơn MA50 1.772,20 và MA200 1.796,61; MA20 giảm 21,10 điểm so 5 phiên trước. Ngưỡng chặn phân phối ≥6 tiếp tục áp dụng.",
            "tone": "warning"
          },
          {
            "label": "Khớp lệnh và chất lượng trụ",
            "signal": "13.300,62 tỷ • 1,087× TB20",
            "detail": "Giảm 22,09% so phiên 21/10 • Top 5 kéo 96,04%",
            "signalParts": [
              {
                "text": "13.300,62 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "1,087× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Khớp giảm 22,09%",
                "tone": "warning"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "Top 5 kéo 96,04%",
                "tone": "warning"
              }
            ],
            "text": "GT khớp VNINDEX VNDIRECT 13.300,62 tỷ so TB20 12.236,93 tỷ, một nguồn nhất quán. Top 5 VIC/VHM/BSR/VPL/TCX theo bảng EOD VNIndex.ai chiếm 21,09/21,96 điểm, nhãn 1 NGUỒN.",
            "tone": "warning"
          },
          {
            "label": "Độ rộng và ngành phân hóa",
            "signal": "147 tăng / 164 giảm",
            "detail": "57 đứng giá • năng lượng và logistics tương đối tốt trong mẫu",
            "signalParts": [
              {
                "text": "147 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "164 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "57 đứng giá",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "sức giá phân hóa",
                "tone": "warning"
              }
            ],
            "text": "VNDIRECT thống kê 147 tăng/164 giảm/57 đứng trong tập chỉ số, khác VNIndex.ai 149/165/90 trong tập 404. Ở mẫu 133 mã web: năng lượng 10/12 tăng, logistics 4/4 tăng, chứng khoán 4/15 tăng. Đây không phải chứng cứ tiền ròng ngành.",
            "tone": "warning"
          }
        ],
        "actions": [
          "KHÔNG mở vị thế mới khi chặn cứng 8 phân phối/25 chưa gỡ; hạn chế đòn bẩy, rà danh mục hiện có, tỷ trọng cổ phiếu định hướng không quá 20% theo dòng 1 Prompt.",
          "NẾU VN-Index vẫn dưới MA50 1.772,20 THÌ tránh mua đuổi nhịp kéo trụ; NẾU phiên kế tiếp đóng dưới đáy 22/10 là 1.746,15 THÌ rà và giảm mã yếu khi vi phạm stop riêng, không bình quân xuống.",
          "NẾU vượt MA50 1.772,20 và MA200 1.796,61, MA20 ngừng dốc xuống, phân phối còn ≤5, thanh khoản/độ rộng/khối ngoại xác nhận THÌ tính lại trạng thái; không tự động chuyển sang mua."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "Giá cổ phiếu 133/133 EOD 22/10 VNDIRECT đối chiếu KBS đúng ngày; CafeF chưa có hàng EOD lúc khóa. VN-Index, VN30, HNX-Index khớp Stockbiz và VNIndex.ai 22/10. Phép tính khớp lệnh dùng duy nhất 264 bản ghi VNDIRECT Finfo; Stockbiz tổng GD 15.299,76 tỷ không cùng phạm vi. Độ rộng VNINDEX VNDIRECT 147/164/57 khác tập 404 mã của VNIndex.ai. Top5 trụ một nguồn. Ngoại khớp, tự doanh, basis và mốc Sổ gốc chưa đủ kiểm.",
          "shortLabel": "EOD 133/133 • 264 phiên • 8 phân phối/25 • top5 một nguồn"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.760,63",
          "change": "+21,96 • +1,26%",
          "changeParts": [
            {
              "text": "+21,96",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "+1,26%",
              "tone": "positive"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "price_up"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "147 tăng / 164 giảm",
          "change": "57 đứng • 3 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "147 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "164 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "57 đứng",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "3 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "breadth_negative"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "13.300,62 tỷ",
          "change": "1,087× TB20 • giảm 22,09% so 21/10",
          "valueParts": [
            {
              "text": "13.300,62 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "1,087× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "giảm 22,09%",
              "tone": "warning"
            },
            {
              "text": " so 21/10",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_above_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Trên MA20 • dưới MA50/200",
          "change": "8 phân phối hợp lệ • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Trên MA20",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "dưới MA50/200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "VN-Index phiên 22/10/2026 đóng 1.760,63 điểm, tăng 21,96 điểm (+1,26%). Giá mở 1.746,15, cao 1.763,55, thấp 1.746,15 theo VNDIRECT Finfo raw lúc 15:33 và bảng VNIndex.ai sau 15:00; đối chiếu giá đóng và biến động với Stockbiz có hàng 22/10. VN30 +0,66%, HNX-Index −0,23%.",
        "Giá đã lên trên MA20 1.738,48, nhưng còn cách MA50 1.772,20 khoảng 11,57 điểm (0,66%) và nằm dưới MA200 1.796,61. MA20 còn dốc xuống 21,10 điểm khi so cách 5 phiên. Điều kiện nền XẤU vẫn đúng vì giá dưới MA50 và MA20 đi xuống. Nến đóng ở 83,22% biên phiên, trên 1/3 cuối, nên không kích hoạt chặn xả cuối.",
        "Giá trị khớp lệnh trong tập chỉ số VNINDEX của VNDIRECT 13.300,62 tỷ, bằng 1,087× bình quân 20 phiên trước 12.236,93 tỷ, giảm 22,09% so phiên 21/10 (17.071,10 tỷ). Stockbiz tổng GD là 15.299,76 tỷ gồm phạm vi khác, không được trộn với khớp lệnh. Không có điểm +1 thanh khoản theo ngưỡng cần ≥1,2×; cũng chưa là thanh khoản yếu dưới 0,8×.",
        "VNDIRECT ghi 147 tăng/164 giảm/57 đứng trong tập VNINDEX, tỷ lệ tăng/giảm 0,896. VNIndex.ai công bố 149 tăng/165 giảm/90 đứng trong tập 404 mã, không cùng phạm vi. VN-Index xanh trong khi số mã giảm nhiều hơn tăng → chặn mềm. Không có chặn cứng kéo xanh đỏ mã kèm bội số cao vì khớp chỉ 1,087× TB20, dưới điều kiện ≥1,2×.",
        "VNIndex.ai 22/10 sau đóng cửa công bố Top5 kéo tăng: VIC +14,90; VHM +3,73; BSR +1,14; VPL +0,74; TCX +0,58 điểm, cộng 21,09 điểm trong mức tăng 21,96, tương đương 96,04%. Đây là số của một nhà cung cấp, chưa có bảng đối chiếu BSC/HOSE cùng phạm vi. Theo ngưỡng Prompt, tỷ lệ >70% cho chất lượng lực kéo trụ −1, giới hạn 1 NGUỒN.",
        "Trong 133 cổ phiếu theo dõi: năng lượng 10 tăng/2 giảm, cảng biển–logistics 4 tăng/0 giảm, khu công nghiệp 4 tăng/0 giảm; ngân hàng 8 tăng/9 giảm/1 đứng, chứng khoán 4 tăng/10 giảm/1 đứng. Nhóm bất động sản 4 tăng/6 giảm trong danh mục phân ngành này, dù chỉ số bất động sản gia quyền từ VNIndex.ai +3,5% do ảnh hưởng trụ. Đây là sức GIÁ, không xác nhận được luồng vốn ròng vào/ra ngành.",
        "Stockbiz ghi mua ròng khối ngoại +340,00 tỷ theo giá trị GIAO DỊCH TỔNG, còn VNIndex.ai báo +330,2 tỷ ƯỚC TÍNH. Cả hai không đủ dùng làm giá trị ròng KHỚP lệnh HOSE và chuỗi 5 phiên theo Prompt. Tự doanh phiên 22/10 và basis VN30F1M chưa có số cùng phạm vi được kiểm đủ. Không suy số thiếu thành tín hiệu tiêu cực.",
        "Trong 25 phiên gần nhất còn 8 phân phối hợp lệ: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Ngày 22/10 tăng nên không tạo phiên phân phối mới; chỉ số chưa hồi đủ 5% so đóng cửa các phiên phân phối để gỡ theo quy tắc. Chặn cứng ≥6 vẫn có hiệu lực và giữ trạng thái KHÔNG."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / đáy phiên mới",
          "value": "1.746,15",
          "note": "Đáy 22/10 VNDIRECT và VNIndex.ai, dùng đánh giá rủi ro từ phiên tiếp theo, không tự thay mốc vô hiệu của Sổ người dùng."
        },
        {
          "label": "Hỗ trợ MA20",
          "value": "1.738,48",
          "note": "TB20 giá đóng cửa đến ngày 22/10 từ 264 phiên VNDIRECT; đang giảm so cách 5 phiên."
        },
        {
          "label": "Hỗ trợ xa / đáy 20 phiên trước",
          "value": "1.677,19",
          "note": "Đáy phiên 20/10 có nguồn trong lịch sử; không dùng làm stop mặc định của mọi mã."
        },
        {
          "label": "Kháng cự gần MA50",
          "value": "1.772,20",
          "note": "TB50 đóng cửa cùng nguồn VNDIRECT; chỉ số còn cách khoảng 0,66%, ngưỡng chặn mềm kháng cự."
        },
        {
          "label": "Kháng cự MA200",
          "value": "1.796,61",
          "note": "TB200 giá đóng cửa; không phải mục tiêu lợi nhuận cam kết."
        },
        {
          "label": "Xác nhận tích cực",
          "value": "Vượt 1.772,20 → 1.796,61",
          "note": "Cần đồng thời MA20 dừng dốc xuống, số phiên phân phối còn ≤5, dữ liệu giá/độ rộng/thanh khoản/khối ngoại đồng thuận."
        },
        {
          "label": "Mốc vô hiệu Sổ gốc",
          "value": "Chưa kiểm được",
          "note": "Không có Sổ người dùng; chỉ nêu hỗ trợ kỹ thuật có xuất xứ, không tự thiết lập hoặc dịch stop."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": 0,
            "note": "Giá 1.760,63 cao hơn MA20 1.738,48 nhưng dưới MA50 1.772,20; MA20 dốc xuống, không thủng đáy 20 phiên trước 1.677,19 → 0."
          },
          {
            "factor": "Thanh khoản",
            "score": 0,
            "note": "Phiên tăng +1,26%, khớp 13.300,62 tỷ / TB20 12.236,93 tỷ = 1,087×; chưa đạt ≥1,2 cho +1, không xuống dưới 0,8 để chấm −1."
          },
          {
            "factor": "Độ rộng",
            "score": 0,
            "note": "Tập VNDIRECT 147 tăng/164 giảm=0,896, không đạt ≥1,5 hay ≤0,67. Số giảm nhiều hơn tăng là chặn mềm riêng."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": -1,
            "note": "Top5 VIC/VHM/BSR/VPL/TCX theo bảng VNIndex.ai ngày 22/10 đóng cửa góp 21,09/21,96 điểm ≈96,04% >70%; chỉ **1 NGUỒN** nhưng tính cùng một bộ."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Chưa khóa khớp lệnh HOSE cùng phạm vi và chuỗi 5 phiên; tổng GD Stockbiz khác số VNIndex.ai ước tính. Không suy từ thiếu số."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phân phối hợp lệ/25 phiên, ngưỡng ≥5 chấm −1; ngưỡng ≥6 kích hoạt chặn cứng."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M 22/10 không có hai nguồn cùng giờ/hợp đồng; chưa xác minh tin vĩ mô bất lợi rõ ràng; 0 khi thiếu."
          }
        ],
        "veto": [
          "CHẶN CỨNG: 8 phiên phân phối hợp lệ trong 25 phiên (≥6) → bắt buộc KHÔNG dù đã trên MA20 và chỉ số tăng.",
          "CHẶN MỀM: VN-Index xanh +1,26% trong khi VNDIRECT có 164 mã giảm >147 tăng; đồng thời MA50 1.772,20 cách giá đóng 0,66% ≤1,5% mà chưa vượt. Điểm kéo trụ tập trung >70% cũng là chặn mềm riêng.",
          "Không kích hoạt chặn cứng cuối nến (đóng ở 83,22% biên độ trên); không kích hoạt xanh chỉ số/đỏ mã KÈM thanh khoản ≥1,2 vì chỉ 1,087×.",
          "Khối ngoại bán liên tục và mốc vô hiệu đang hiệu lực từ Sổ tự lưu KHÔNG KIỂM ĐƯỢC, không coi đã qua.",
          "Quy đổi: thô KHÔNG dòng 1 → trần nền XẤU vẫn KHÔNG → không có Sổ người dùng, bỏ chống đảo chiều → KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — VN-Index đóng trên MA50 1.772,20, sau đó trên MA200 1.796,61, MA20 ngừng dốc xuống và phân phối còn ≤5, thanh khoản/độ rộng/ngoại cùng xác nhận",
          "then": "Kiểm tra lại tất cả cổng và đánh giá nâng trạng thái; không tự động mua."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — VN-Index còn trên MA20 1.738,48 nhưng chưa lấy lại MA50 1.772,20, chặn 8 phân phối còn tồn tại",
          "then": "KHÔNG mua đuổi theo trụ; phòng thủ, chỉ rà soát và quản trị hàng sẵn có."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — phiên kế tiếp đóng dưới đáy ngày 22/10 là 1.746,15",
          "then": "Rà vị thế yếu và thực hiện cắt giảm theo stop riêng đã có, không bình quân xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — vượt 1.772,20/1.796,61, MA20 dốc lên, phân phối ≤5",
          "then": "ĐÁNH GIÁ LẠI toàn bộ cổng, chưa tự phát lệnh mua."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — giữ trên 1.738,48 nhưng còn dưới 1.772,20",
          "then": "KHÔNG mở mới; theo dõi độ rộng, dòng tiền và kiểm soát rủi ro."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng thủng 1.746,15",
          "then": "GIẢM phần yếu nếu vi phạm stop riêng, không bắt đáy."
        }
      ],
      "actionTable": {
        "dataCutoff": "Dữ liệu tới hết phiên 22/10/2026; Finfo VNDIRECT 15:33, Stockbiz 15:25 và VNIndex.ai 15:00; 133/133 giá cổ phiếu EOD đã khóa; chế độ ĐẦY ĐỦ",
        "finalState": "KHÔNG",
        "score": "−2/7: giá/MA 0 (trên MA20, dưới MA50); thanh khoản 0 (1,087×); độ rộng 0 (147/164); chất lượng top5 −1 (96,04%, 1 NGUỒN); khối ngoại 0 chưa xác minh đúng khớp; phân phối −1 (8/25); phái sinh/vĩ mô 0 chưa đủ chứng cứ. Thô KHÔNG dòng 1 → nền XẤU KHÔNG → bỏ chống đảo chiều vì thiếu Sổ → KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG 8 phân phối/25 ≥6; CHẶN MỀM xanh điểm/đỏ mã, giá sát MA50 1.772,20 và top5 kéo trụ 96,04% (một nguồn). Cổng ngoại và mốc Sổ gốc KHÔNG KIỂM ĐƯỢC.",
        "marketState": "YẾU — nền XẤU do MA20 dốc xuống và giá dưới MA50/200, dù giá đang hồi trên MA20",
        "shortTrend": "Hồi lên trên MA20 1.738,48 nhưng thiếu lan tỏa, khớp giảm so 21/10",
        "mediumTrend": "Chưa xác nhận đảo chiều: dưới MA50 1.772,20 và MA200 1.796,61",
        "liquidity": "GT khớp theo tập VNINDEX VNDIRECT 13.300,62 tỷ, bằng 1,087× TB20 12.236,93 tỷ, giảm 22,09% so 21/10; nhãn 1 NGUỒN",
        "breadth": "147 tăng / 164 giảm / 57 đứng / 3 sàn theo VNDIRECT (tập VNINDEX, 1 NGUỒN). VNIndex.ai 149/165/90 theo tập 404, không dùng ghép.",
        "flow": "Top5 góp 21,09/21,96 điểm = 96,04% (VNIndex.ai, 1 NGUỒN); VIC +14,90 và VHM +3,73. Ngành trong 133 mã: năng lượng 10/12 tăng, logistics 4/4 tăng, chứng khoán 4/15 tăng; chưa chứng minh tiền ròng theo ngành.",
        "foreign": "Stockbiz tổng mua 2.291,39 tỷ, bán 1.951,39 tỷ, mua ròng 340 tỷ, nhưng KHÔNG thay cho khối ngoại ròng KHỚP HOSE; VNIndex.ai chỉ ước tính +330,2 tỷ và chưa đối chiếu chuỗi 5 phiên cùng phạm vi.",
        "distributions": "8 phiên phân phối hợp lệ/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Ngày 22/10 tăng không có phân phối mới.",
        "proprietary": "Tự doanh ròng HOSE phiên 22/10 chưa có số đủ kiểm EOD theo phạm vi chuẩn.",
        "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới, dòng 1",
        "moneyIn": "Chưa có số tiền RÒNG đủ xác minh. Sức GIÁ mẫu 133 mã: năng lượng 10/12 tăng, cảng biển/logistics 4/4 tăng, KCN 4/4 tăng; không khẳng định dòng vốn ròng.",
        "moneyOut": "Chưa có số tiền RÒNG đủ xác minh. Về sức GIÁ, nhóm ngân hàng trong mẫu có 9/18 giảm, chứng khoán 10/15 giảm; không suy tiền rút ròng.",
        "support": "Đáy phiên 22/10 là 1.746,15; hỗ trợ động MA20 1.738,48; đáy 20/10 là 1.677,19, chưa coi là stop chính thức Sổ gốc.",
        "resistance": "MA50 1.772,20 (cách 0,66%); MA200 1.796,61.",
        "invalidation": "Mốc vô hiệu đang hiệu lực trong Sổ dữ liệu người dùng KHÔNG KIỂM ĐƯỢC; không dịch stop hoặc coi đáy mới 1.746,15 là stop của Sổ.",
        "buyZone": "Không áp dụng — trạng thái KHÔNG dòng 1, không tự tạo vùng mua.",
        "reduceZone": "Nếu phiên kế tiếp đóng dưới 1.746,15, rà giảm mã yếu khi vi phạm stop riêng; không bình quân giá xuống.",
        "rr": "Không áp dụng: chưa có mốc vô hiệu được xác minh từ Sổ người dùng để tính mẫu số; không tự dựng tỷ số R:R.",
        "margin": "Giảm / không sử dụng",
        "allocation": "Tỷ trọng định hướng theo Prompt dòng 1: ≤20% cổ phiếu / ≥80% tiền mặt, tùy điều kiện tài khoản",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mua mới; tránh mua đuổi nhịp xanh nhờ trụ khi chặn phân phối chưa gỡ, ưu tiên rà soát hàng yếu theo stop."
      },
      "finalConclusion": [
        "KHÔNG mở vị thế mới — dù VN-Index tăng 1,26% và vượt MA20, chặn cứng 8 phân phối/25 còn hiệu lực, nền XẤU.",
        "Rủi ro lớn nhất là điểm số được kéo bởi ít cổ phiếu lớn trong lúc độ rộng nhiều mã giảm hơn tăng, thanh khoản khớp giảm so phiên 21/10.",
        "NẾU phiên sau đóng dưới 1.746,15 THÌ kiểm tra giảm mã yếu theo stop riêng; chỉ tính lại trạng thái khi vượt 1.772,20 và 1.796,61, MA20 ngừng dốc xuống và số phiên phân phối còn ≤5."
      ],
      "focus": "KHÔNG • nền XẤU • −2/7 (top5 1 NGUỒN) • 8 phân phối/25 • VN-Index 1.760,63 • MA20 1.738,48 / MA50 1.772,20 / MA200 1.796,61 • khớp 1,087× TB20",
      "inference": "Nhật ký docs/market-source-log-20261022.md; chuỗi VNDIRECT 264 hàng đã đọc trong Actions 39749055774, EOD 133 cổ phiếu Actions 39748971542. Đối chiếu giá chỉ số Stockbiz và VNIndex.ai EOD 22/10, GT khớp/độ rộng một nguồn VNDIRECT; bảng top5 VNIndex.ai một nguồn; ngoại khớp/tự doanh/basis/Sổ gốc chưa đủ. Bảo toàn bố cục web.",
      "limitations": [
        "Khớp lệnh 13.300,62 tỷ là tập VNINDEX VNDIRECT, 1 NGUỒN; 15.299,76 tỷ Stockbiz là TỔNG giao dịch khác phạm vi; không trộn cho thanh khoản TB20.",
        "Độ rộng 147/164/57 theo VNDIRECT khác 149/165/90 trong tập 404 mã VNIndex.ai; nhãn VNDIRECT 1 NGUỒN.",
        "Top5 kéo 96,04% theo bảng VNIndex.ai cuối phiên, 1 NGUỒN, chưa có báo cáo độc lập cùng phương pháp để xác nhận; nếu bỏ yếu tố này điểm còn −1/7, trạng thái vẫn KHÔNG do phân phối.",
        "Khối ngoại HOSE **tổng** mua ròng 340 tỷ theo Stockbiz khác +330,2 tỷ ước tính VNIndex.ai, không đại diện số ròng khớp và chuỗi 5 phiên; tự doanh/basis chưa đủ xác minh.",
        "Không có Sổ gốc do người dùng dán, không thể xác minh mốc vô hiệu và các chặn mang sang; không tự dời stop.",
        "Bộ 133 mã chỉ đại diện danh mục website, không phải toàn HOSE; chưa có dòng tiền ròng theo nhóm ngành đủ minh chứng."
      ],
      "zaloPost": "VN-Index tăng 21,96 điểm trong phiên 22/10, đóng ở 1.760,63 điểm. Tuy nhiên tôi vẫn giữ quan điểm KHÔNG mở vị thế mới. Giá đã vượt MA20 nhưng chưa lấy lại MA50 và MA200, trong khi thị trường còn 8 phiên phân phối hiệu lực trong 25 phiên. Điều kiện chặn mua vẫn còn.\n\nĐiểm đáng cảnh giác hôm nay nằm ở chất lượng tăng. Theo phạm vi VNDIRECT, chỉ có 147 mã tăng trong khi 164 mã giảm. Năm mã góp điểm tăng nhiều nhất theo VNIndex.ai chiếm khoảng 96% mức tăng chỉ số, riêng VIC và VHM đóng vai trò nổi bật. Bảng đóng góp này có một nguồn EOD, vì vậy tôi dùng để cảnh báo về sự tập trung chứ không gọi đây là kết luận dòng tiền chắc chắn.\n\nGiá trị khớp lệnh theo tập VN-Index của VNDIRECT đạt khoảng 13.301 tỷ đồng, bằng 1,087 lần trung bình 20 phiên trước và giảm hơn 22% so phiên 21/10. Trong danh sách 133 mã theo dõi, năng lượng và cảng biển giữ sức giá khá hơn, còn ngân hàng và chứng khoán phân hóa. Đó là bức tranh biến động giá, chưa phải bằng chứng vốn ròng vào nhóm ngành.\n\nNẾU chỉ số còn dưới MA50 tại 1.772,20, THÌ tôi chưa đuổi giá theo các trụ. NẾU phiên tiếp theo đóng dưới đáy 22/10 là 1.746,15, THÌ rà lại các vị thế yếu, giảm phần vi phạm mức dừng lỗ đã có, không bình quân xuống. NẾU giá vượt MA50 rồi MA200 tại 1.796,61, MA20 ngừng dốc xuống và số phiên phân phối giảm còn tối đa 5, cùng thanh khoản và độ rộng xác nhận, THÌ mới xem xét lại trạng thái.\n\nTỷ trọng cổ phiếu định hướng trong trạng thái phòng thủ không quá 20%; hạn chế đòn bẩy và ưu tiên bảo toàn nguồn lực.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "Stockbiz — đối chiếu VN-Index, VN30, HNX chốt phiên 22/10",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "VNIndex.ai — EOD 22/10, OHLC, độ rộng và bảng top5 góp điểm",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "GitHub — audit 264 phiên VNDIRECT Finfo cùng gốc tới 22/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39749055774"
        },
        {
          "label": "GitHub — khóa 133/133 giá EOD, nguồn đối chiếu KBS đúng ngày",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39748971542"
        },
        {
          "label": "Smoney — tự doanh công bố mới nhất 21/10 khi tra cứu",
          "url": "https://smoney.com.vn/giao-dich/tu-doanh"
        },
        {
          "label": "GitHub — nguồn gốc số, nhật ký tìm kiếm, phép tính và 20 tự kiểm",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261022.md"
        }
      ]
    },
    {
      "id": "market-view-20261021",
      "date": "2026-10-21",
      "publishedAt": "21/10/2026 • Sau phiên",
      "edition": "Số 44",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá 133/133 mã đã khóa EOD ngày 21/10 bằng VNDIRECT–KBS; VN-Index/VN30/HNX đối chiếu Stockbiz • GT khớp và độ rộng VNDIRECT nhãn 1 NGUỒN • chuỗi 263 phiên • khối ngoại khớp, tự doanh và basis chưa đủ kiểm",
      "title": "Bật mạnh nhờ lực cầu cải thiện, nhưng 8 phiên phân phối vẫn chặn mua mới",
      "thesis": "VN-Index đóng 21/10/2026 tại 1.738,67 điểm (+46,70; +2,76%), hồi mạnh với khớp VNINDEX theo VNDIRECT 17.071,10 tỷ, gấp 1,421 lần TB20 và độ rộng 230 tăng/75 giảm. Giá đóng sát đỉnh phiên, nhưng vẫn dưới MA20 1.739,20 khoảng 0,53 điểm, dưới MA50 1.772,53 và MA200 1.796,58; MA20 dốc xuống. Tám phiên phân phối hợp lệ còn trong 25 phiên làm chặn cứng chưa gỡ. Nền XẤU, điểm 0/7 khi không lấy số top 5 trước EOD làm số chốt; kết luận KHÔNG mở vị thế mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Giá bật mạnh, tiền khớp tăng — cần vượt chặn rủi ro trước khi mua",
        "thesis": "Phiên 21/10 hồi +2,76%, khớp 1,421× TB20 và 230 mã tăng so 75 mã giảm trong tập VNDIRECT. Dẫu vậy VN-Index vẫn ở dưới MA20 sát ngay phía trên và dưới MA50/200; 8 phiên phân phối/25 kích hoạt chặn cứng. KHÔNG mở mua mới theo V3.3.1.",
        "evidence": [
          {
            "label": "Xu hướng và ngưỡng chặn",
            "signal": "Dưới MA20 1.739,20",
            "detail": "Giá 1.738,67 • nền XẤU • 8 phân phối/25",
            "signalParts": [
              {
                "text": "Dưới MA20 1.739,20",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "Giá 1.738,67",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "nền XẤU",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "8 phân phối/25",
                "tone": "negative"
              }
            ],
            "text": "MA20 1.739,20 chỉ cao hơn đóng cửa 0,53 điểm, MA50 1.772,53 và MA200 1.796,58 vẫn ở trên; MA20 giảm 26,60 điểm so cách 5 phiên. Chặn 8 phân phối ≥6 chưa gỡ.",
            "tone": "negative"
          },
          {
            "label": "Thanh khoản và nến",
            "signal": "17.071,10 tỷ • 1,421× TB20",
            "detail": "Khớp tăng 52,95% so 20/10 • đóng sát đỉnh ngày",
            "signalParts": [
              {
                "text": "17.071,10 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "1,421× TB20",
                "tone": "positive"
              }
            ],
            "detailParts": [
              {
                "text": "Khớp tăng 52,95%",
                "tone": "positive"
              },
              {
                "text": " so 20/10 • ",
                "tone": "neutral"
              },
              {
                "text": "đóng sát đỉnh ngày",
                "tone": "positive"
              }
            ],
            "text": "Tự tính cùng nguồn VNDIRECT VNINDEX, TB20 liền trước 12.014,23 tỷ; nến đóng ở 99,44% biên độ ngày 1.695,95–1.738,91. Đây là phiên tăng có thanh khoản theo ngưỡng V3.3.1, chưa đủ chứng minh đảo chiều nền.",
            "tone": "positive"
          },
          {
            "label": "Độ rộng và sức giá ngành",
            "signal": "230 tăng / 75 giảm",
            "detail": "54 đứng giá • ngân hàng 16/18 mã tăng trong mẫu 133",
            "signalParts": [
              {
                "text": "230 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "75 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "54 đứng giá",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "ngân hàng 16/18 mã tăng trong mẫu 133",
                "tone": "positive"
              }
            ],
            "text": "Độ rộng VNDIRECT 230/75=3,067 đạt +1 điểm. Bộ 133 mã của website: ngân hàng 16/18 tăng, chứng khoán 14/15 tăng, bất động sản 8/10 tăng, nhưng năng lượng 5 tăng và 5 giảm. Là sức GIÁ, không phải số tiền ròng vào ngành.",
            "tone": "positive"
          }
        ],
        "actions": [
          "CHẶN CỨNG 8 phiên phân phối/25 tiếp tục hiệu lực: KHÔNG mở mua mới; hạn chế đòn bẩy, rà stop riêng mã đang nắm và tỷ trọng định hướng không quá 20% cổ phiếu.",
          "NẾU VN-Index không vượt MA20 1.739,20 THÌ tránh đuổi giá sau nhịp tăng mạnh; NẾU phiên kế tiếp đóng dưới đáy 21/10 là 1.695,95 THÌ rà soát giảm mã yếu nếu vi phạm điểm dừng lỗ riêng.",
          "NẾU giá lấy lại MA20 1.739,20, tiếp đến MA50 1.772,53 và MA200 1.796,58, đồng thời số phân phối còn ≤5 và thanh khoản, độ rộng, dòng tiền khớp nguồn xác nhận THÌ đánh giá lại toàn bộ trạng thái; không tự chuyển thành tín hiệu mua."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "Giá EOD 21/10 được khóa 133/133 mã VNDIRECT–KBS đúng ngày; CafeF chưa có EOD lúc khóa. Giá VN-Index/VN30/HNX khớp Stockbiz 15:05 và 15:02. Chuỗi giá/khớp VNINDEX 263 phiên lấy VNDIRECT Finfo qua Actions. GT khớp và độ rộng theo tập VNINDEX chỉ 1 NGUỒN. Bảng đóng góp trụ từ VNIndex.ai 14:38 chỉ là snapshot, không chấm top5 EOD. Khối ngoại khớp, tự doanh, basis và mốc Sổ người dùng chưa kiểm đủ.",
          "shortLabel": "EOD 133/133 • 263 phiên • 8 phân phối/25 • điểm 0/7"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.738,67",
          "change": "+46,70 • +2,76%",
          "changeParts": [
            {
              "text": "+46,70",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "+2,76%",
              "tone": "positive"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "price_up"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "230 tăng / 75 giảm",
          "change": "54 đứng giá • 3 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "230 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "75 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "54 đứng giá",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "3 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "breadth_positive"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "17.071,10 tỷ",
          "change": "1,421× TB20 • tăng 52,95% so 20/10",
          "valueParts": [
            {
              "text": "17.071,10 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "1,421× TB20",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "tăng 52,95%",
              "tone": "positive"
            },
            {
              "text": " so 20/10",
              "tone": "neutral"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "liquidity_above_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới MA20 / MA50 / MA200",
          "change": "8 phiên phân phối • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Dưới MA20 / MA50 / MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phiên phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "VN-Index chốt phiên 21/10/2026 tại 1.738,67 điểm, tăng 46,70 điểm (+2,76%), đối chiếu VNDIRECT Finfo và Stockbiz sau ATC. Mở 1.696,77, cao 1.738,91, thấp 1.695,95 theo bản ghi VNDIRECT 15:16. Không dùng số 1.736,59 hoặc 1.738,29 của ảnh chụp VNIndex.ai lúc 14:38 làm giá EOD.",
        "Giá hồi mạnh nhưng vẫn dưới MA20 1.739,20 khoảng 0,53 điểm (0,03%), dưới MA50 1.772,53 và MA200 1.796,58; MA20 dốc xuống 26,60 điểm so cách 5 phiên. Theo quy tắc nền XẤU vì đóng dưới MA50 và MA20 dốc xuống. Giá sát MA20 tạo chặn mềm vì còn cách kháng cự có xuất xứ chưa tới 1,5%.",
        "Giá trị khớp lệnh trong tập VNINDEX VNDIRECT 17.071,10 tỷ đồng, tăng khoảng 52,95% so 20/10 và bằng 1,421 lần TB20 12.014,23 tỷ, lấy từ chuỗi 263 phiên một gốc. Tổng giá trị giao dịch bao gồm thỏa thuận của Stockbiz khác phạm vi; không dùng để tính bội số và phân phối.",
        "Độ rộng tập VNDIRECT 230 tăng/75 giảm/54 đứng, tỷ lệ 3,067 — cho +1 điểm. Giá đóng đạt 99,44% biên độ ngày, cho thấy lực cầu duy trì tới cuối phiên. Tuy nhiên phiên tăng không xóa 8 phiên phân phối hợp lệ trong 25 phiên. Chặn cứng chưa đạt điều kiện gỡ là còn ≤5.",
        "Trong bộ 133 mã theo dõi của website: ngân hàng 16 tăng/0 giảm/2 đứng, chứng khoán 14/1/0, bất động sản 8/1/1, bất động sản nhà ở 4/0/0. Năng lượng 5 tăng/5 giảm/2 đứng; PVP, PVT, BSR còn chịu áp lực. Đây là dữ liệu sức GIÁ, không khẳng định vốn lớn vào/ra nhóm ngành khi chưa xác minh GT khớp và giao dịch ngoại theo ngành.",
        "VNIndex.ai chụp lúc 14:38 ghi VIC, VHM và VCB có đóng góp tăng lớn; bảng top 5 thời điểm này không phải số chốt 15:16, nên không áp tỷ lệ top 5 vào điểm đồng thuận chính thức EOD. Chất lượng trụ được giữ trung tính 0 thay vì gán tạm tính thành số đã khóa.",
        "Khối ngoại theo HODL và VNIndex.ai mới có giá trị khớp trong phiên hoặc khác phạm vi; Stockbiz IndexStats có thống kê ngoại tổng giao dịch. Không lấy những số này để kết luận chuỗi khớp lệnh 5 phiên. Tự doanh và basis VN30F1M thiếu kiểm chứng cuối phiên cũng chấm 0. Không có Sổ người dùng để xác minh chặn và mốc vô hiệu mang sang.",
        "Số phiên phân phối còn hiệu lực trong 25 phiên vẫn là 8: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10 và 19/10. Ngày 21/10 tăng mạnh nên không phát sinh phân phối mới nhưng cũng chưa đủ hồi 5% để gỡ phiên cũ. Vì chặn phân phối ≥6 còn hiệu lực, quyết định KHÔNG mua mới dù thanh khoản và độ rộng cải thiện."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / đáy ngày 21/10",
          "value": "1.695,95",
          "note": "Đáy thực ngày 21/10 từ VNDIRECT Finfo, VNIndex.ai snapshot cũng có; là mốc cảnh báo kỹ thuật từ phiên sau, không tự thay stop chính thức của Sổ."
        },
        {
          "label": "Hỗ trợ cũ",
          "value": "1.677,19",
          "note": "Đáy ngày 20/10, nguồn bảng VNDIRECT Finfo; không tự nâng/hạ mốc vô hiệu của Sổ người dùng."
        },
        {
          "label": "Kháng cự MA20 sát giá",
          "value": "1.739,20",
          "note": "TB20 đến 21/10 từ 263 giá đóng cửa VNDIRECT, chỉ cao hơn giá đóng 0,53 điểm; đang là chặn mềm ≤1,5%."
        },
        {
          "label": "Kháng cự MA50",
          "value": "1.772,53",
          "note": "Tự tính TB50 phiên từ cùng chuỗi VNDIRECT, nền còn dưới ngưỡng."
        },
        {
          "label": "Kháng cự MA200",
          "value": "1.796,58",
          "note": "Tự tính TB200 phiên, không phải giá mục tiêu lợi nhuận."
        },
        {
          "label": "Xác nhận nâng trạng thái",
          "value": "Vượt 1.739,20 → 1.772,53 → 1.796,58",
          "note": "Phải kèm phân phối còn ≤5, cổng ngoại, thanh khoản và độ rộng đã xác minh; không tự động mua."
        },
        {
          "label": "Mốc vô hiệu Sổ gốc",
          "value": "Chưa kiểm được",
          "note": "Không có Sổ tự lưu do người dùng cung cấp; không tạo giả giá cắt lỗ cho VN-Index."
        }
      ],
      "confluence": {
        "score": 0,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": -1,
            "note": "VN-Index 1.738,67 dưới MA20 1.739,20 và MA50 1.772,53, MA20 dốc xuống; cũng dưới MA200 1.796,58."
          },
          {
            "factor": "Thanh khoản",
            "score": 1,
            "note": "VN-Index +2,76% ≥0,2%, khớp VNINDEX VNDIRECT 17.071,10 tỷ / TB20 12.014,23 tỷ = 1,421× ≥1,2. Số khớp nguồn VNDIRECT 1 NGUỒN."
          },
          {
            "factor": "Độ rộng",
            "score": 1,
            "note": "230 tăng/75 giảm = 3,067 ≥1,5 theo tập VNINDEX VNDIRECT (1 NGUỒN)."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": 0,
            "note": "Chưa có bảng top 5 điểm kéo EOD cùng phạm vi; bảng VNIndex.ai lúc 14:38 chỉ TẠM TÍNH, không nâng thành giá trị đã xác minh. Không chấm +1/−1 từ số dự kiến."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Khối ngoại khớp HOSE phiên 21/10 và chuỗi 5 phiên chưa kiểm được đúng mốc EOD; số tổng từ Stockbiz khác khớp, HODL/VNIndex.ai là trong phiên."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phiên phân phối hợp lệ/25 ≥5; 21/10 xanh +2,76% không thêm mới, cũng chưa đủ hồi 5% để loại các phiên còn hiệu lực."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M cuối ngày chưa đủ hai nguồn cùng thời điểm, chưa có tin vĩ mô bất lợi rõ đã được kiểm chứng cần trừ điểm."
          }
        ],
        "veto": [
          "CHẶN CỨNG: 8 phiên phân phối hợp lệ/25, ≥6 → bắt buộc KHÔNG mở vị thế mới, bất kể thanh khoản 1,421× và độ rộng 3,067.",
          "CHẶN MỀM: giá 1.738,67 còn thấp hơn MA20 1.739,20 chỉ 0,53 điểm (~0,03%), cách kháng cự gần có xuất xứ ≤1,5% mà chưa vượt.",
          "Không có chặn xả cuối: đóng ở 99,44% biên phiên, không phải 1/3 dưới. Không có chặn xanh điểm đỏ mã: 230 tăng >75 giảm.",
          "Khối ngoại bán ròng theo chuỗi 5 phiên, mốc vô hiệu/chặn cũ từ Sổ: KHÔNG KIỂM ĐƯỢC, không tự coi điều kiện đã gỡ.",
          "Quy đổi ba bước: chế độ ĐẦY ĐỦ, thô KHÔNG dòng 1 → áp trần nền XẤU vẫn KHÔNG → thiếu Sổ nên không chạy chống đảo chiều → KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — VN-Index đóng vượt 1.739,20, tiếp đó vượt 1.772,53 và 1.796,58; số phân phối còn ≤5, thanh khoản/độ rộng/ngoại cùng xác nhận",
          "then": "Đánh giá lại mọi cổng để xác định trạng thái mới, không mua tự động."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — hồi quanh hoặc chưa vượt bền vững MA20 1.739,20; vẫn dưới MA50 1.772,53 và còn 8 phân phối",
          "then": "KHÔNG mua đuổi, ưu tiên phòng thủ và rà hàng sẵn có."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — phiên sau đóng dưới đáy ngày 21/10 là 1.695,95",
          "then": "Rà soát giảm mã yếu theo stop riêng từng mã; không bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — vượt 1.739,20 rồi 1.772,53/1.796,58, phân phối còn ≤5",
          "then": "TÍNH LẠI trạng thái EOD và các chặn; chưa mua mới khi chưa xác nhận."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — giữ trên 1.695,95 nhưng dưới MA20/MA50, chặn phân phối chưa gỡ",
          "then": "KHÔNG mở vị thế mới; rà danh mục và dừng lỗ."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng dưới 1.695,95",
          "then": "HẠ cổ phiếu yếu theo nguyên tắc riêng, không bắt đáy."
        }
      ],
      "actionTable": {
        "dataCutoff": "Hết phiên 21/10/2026, VNDIRECT Finfo lúc 15:16, Stockbiz 15:05; EOD 133/133 mã được khóa VNDIRECT–KBS; chế độ ĐẦY ĐỦ",
        "finalState": "KHÔNG",
        "score": "0/7: giá/MA −1, thanh khoản +1 (1,421×), độ rộng +1 (230/75), chất lượng top5 0 chưa chốt EOD, ngoại 0 chưa khóa khớp, phân phối −1 (8/25), phái sinh/vĩ mô 0. Thô KHÔNG dòng 1 do chặn cứng → trần nền XẤU KHÔNG → thiếu Sổ nên bỏ chống đảo chiều → chốt KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG 8 phân phối/25 ≥6; chặn mềm cách MA20 1.739,20 chỉ 0,53 điểm; chặn ngoại/mốc Sổ gốc KHÔNG KIỂM ĐƯỢC.",
        "marketState": "YẾU — nền xu hướng XẤU, dù phiên có lực hồi và độ rộng tích cực",
        "shortTrend": "Hồi mạnh nhưng giá 1.738,67 còn dưới MA20 1.739,20; MA20 dốc xuống",
        "mediumTrend": "Xu hướng trung hạn yếu do dưới MA50 1.772,53 và MA200 1.796,58",
        "liquidity": "Khớp tập VNINDEX VNDIRECT 17.071,10 tỷ, TB20 12.014,23 tỷ, bội số 1,421× (1 NGUỒN). Không dùng tổng giao dịch gồm thỏa thuận của Stockbiz làm khớp.",
        "breadth": "230 tăng / 75 giảm / 54 đứng / 3 sàn theo tập VNDIRECT, tỷ lệ 3,067 (1 NGUỒN).",
        "flow": "Độ rộng cải thiện. Bộ 133 mã web: ngân hàng 16/18 tăng; chứng khoán 14/15 tăng; bất động sản 8/10 tăng; năng lượng 5/12 tăng và 5/12 giảm. Chưa có top 5 đóng góp EOD đủ chuẩn để chấm tập trung điểm.",
        "foreign": "Khối ngoại khớp HOSE và chuỗi 5 phiên thiếu số đối chiếu cuối ngày, không lấy số tạm HODL hoặc VNIndex.ai cho chặn cứng.",
        "distributions": "8/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10; chưa gỡ khi còn ≥6.",
        "proprietary": "Chưa xác minh ròng tự doanh HOSE cuối phiên 21/10 theo phạm vi chuẩn.",
        "tradingAbility": "Phòng thủ — KHÔNG mua mới, dòng 1",
        "moneyIn": "Chưa có số vốn ròng ngành đủ chuẩn. Sức GIÁ trong 133 mã: ngân hàng 16/18 tăng, chứng khoán 14/15 tăng, bất động sản 8/10 tăng.",
        "moneyOut": "Chưa có số ròng ngành đủ chuẩn. Sức GIÁ phân hóa ở năng lượng: 5/12 tăng, 5/12 giảm; PVP, PVT, BSR tiếp tục điều chỉnh.",
        "support": "Đáy ngày 21/10 1.695,95 (tham chiếu kỹ thuật từ phiên sau); đáy ngày 20/10 1.677,19. Không mặc nhận đáy mới là mốc vô hiệu chính thức.",
        "resistance": "MA20 1.739,20 ngay phía trên giá; tiếp theo MA50 1.772,53 và MA200 1.796,58.",
        "invalidation": "Mốc vô hiệu của Sổ gốc KHÔNG KIỂM ĐƯỢC vì không có Sổ người dùng. Không hạ dừng lỗ cũ hoặc tạo mức cắt lỗ giả.",
        "buyZone": "Không áp dụng — KHÔNG mua mới, dòng 1.",
        "reduceZone": "Nếu chỉ số đóng dưới 1.695,95 phiên kế tiếp và mã đang giữ vi phạm stop riêng, rà soát hạ phần yếu, không bắt đáy.",
        "rr": "Không áp dụng vì chưa có mốc vô hiệu đang hiệu lực từ Sổ gốc người dùng để tính R:R có xuất xứ.",
        "margin": "Giảm / không sử dụng",
        "allocation": "Định hướng ≤20% cổ phiếu / ≥80% tiền, tùy tài khoản theo Prompt dòng 1",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mua mới dù phiên tăng mạnh; tránh mua đuổi sát MA20 khi 8 phiên phân phối còn hiệu lực, giữ kỷ luật quản trị vị thế."
      },
      "finalConclusion": [
        "KHÔNG mở vị thế mới — độ rộng và khớp lệnh hồi rõ, nhưng nền XẤU và chặn 8 phiên phân phối/25 chưa gỡ.",
        "Rủi ro lớn là giá còn dưới MA20 1.739,20 và thiếu dữ liệu chốt khối ngoại/top 5 để khẳng định dòng tiền bền vững.",
        "NẾU đóng dưới 1.695,95 ở phiên tới THÌ rà giảm mã yếu theo stop riêng; chỉ tính lại trạng thái khi vượt MA20 1.739,20, MA50 1.772,53, MA200 1.796,58 và phân phối còn ≤5."
      ],
      "focus": "KHÔNG • nền XẤU • 0/7 • 8 phân phối/25 • VN-Index 1.738,67 (+2,76%) • MA20 1.739,20 / MA50 1.772,53 / MA200 1.796,58 • khớp 1,421× TB20",
      "inference": "Nhật ký docs/market-source-log-20261021.md ghi nguồn Stockbiz EOD 15:05 và Finfo raw 15:16, 263 hàng VNDIRECT tại Actions 39568126463, EOD 133 mã Actions 39567984893. GT khớp và độ rộng 1 NGUỒN, khối ngoại khớp/tự doanh/basis/top5 EOD chưa đối chiếu. Dùng Prompt đính kèm V3.3.1, không đổi bố cục trang.",
      "limitations": [
        "Giá trị khớp 17.071,10 tỷ theo tập VNINDEX VNDIRECT chỉ 1 NGUỒN; tổng giá trị GD Stockbiz khác phạm vi. Không ghép chuỗi các nguồn để tính TB20.",
        "Độ rộng 230 tăng/75 giảm/54 đứng theo tập VNDIRECT (1 NGUỒN). VNIndex.ai cập nhật 14:38 và tập 404 mã khác nên không coi đã đối chiếu.",
        "Khối ngoại ròng khớp HOSE và chuỗi 5 phiên, tự doanh, basis VN30F1M chưa đủ bằng chứng EOD; không đưa số tạm vào cổng chặn.",
        "Top 5 điểm kéo của VNIndex.ai có bảng lúc 14:38, chưa khóa đúng EOD nên yếu tố chất lượng dòng tiền chấm 0 thay vì suy tỷ lệ top5.",
        "Không có Sổ gốc người dùng nên chặn ngoài chuỗi phân phối và mốc vô hiệu từ phiên trước KHÔNG KIỂM ĐƯỢC; không hạ stop bằng đáy phiên 21/10.",
        "Ngành chỉ có chứng cứ sức giá trên mẫu 133 mã; chưa xác minh vốn khớp và ngoại đủ để kết luận tiền ròng thực vào/ra."
      ],
      "zaloPost": "VN-Index kết phiên 21/10 tăng mạnh 46,70 điểm lên 1.738,67. Nhưng tôi vẫn chưa mở vị thế mới. Nhịp hồi này có cải thiện thực sự ở thanh khoản và số cổ phiếu tăng giá, song chưa đủ để gọi là đảo chiều xu hướng: chỉ số vẫn thấp hơn MA20 tại 1.739,20, chưa lấy lại MA50 và còn 8 phiên phân phối hiệu lực trong 25 phiên.\n\nGiá trị khớp theo tập VN-Index của VNDIRECT đạt khoảng 17.071 tỷ đồng, bằng 1,421 lần bình quân 20 phiên trước; độ rộng có 230 mã tăng so với 75 mã giảm. Đây là hai mặt tích cực của phiên. Tuy nhiên các số này theo phạm vi nguồn VNDIRECT; khối ngoại khớp lệnh và bảng đóng góp điểm của nhóm trụ sau đóng cửa chưa được đối chiếu đủ để kết luận tiền lớn đã trở lại bền vững.\n\nTrong danh sách theo dõi, nhóm ngân hàng và chứng khoán có sức giá rõ hơn, nhiều mã bất động sản bật tăng; trong khi dầu khí và vận tải xăng dầu phân hóa. Tôi ưu tiên theo dõi sức mạnh của các nhóm này, không mua chỉ vì thấy chỉ số xanh. Khi thị trường còn chặn phân phối, những cổ phiếu yếu trong tài khoản vẫn phải tuân thủ mức dừng lỗ đã xác lập.\n\nNẾU VN-Index chưa vượt và giữ được MA20 ở 1.739,20, THÌ không đuổi giá ở vùng hồi. NẾU phiên kế tiếp đóng dưới đáy 21/10 là 1.695,95, THÌ rà lại danh mục và giảm phần yếu theo stop riêng, không bình quân giá xuống. NẾU chỉ số lấy lại MA20, sau đó MA50 tại 1.772,53 và MA200 tại 1.796,58, đồng thời số phiên phân phối còn tối đa 5 và thanh khoản, độ rộng xác nhận, THÌ mới đánh giá lại khả năng mở vị thế.\n\nTỷ trọng cổ phiếu định hướng khi còn chặn cứng không quá 20%, hạn chế đòn bẩy, giữ sức mua cho lúc có lợi thế rõ ràng.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "Stockbiz — chỉ số chốt phiên 21/10 lúc 15:05",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "Stockbiz — xác nhận VN-Index, VN30, HNX sau 15:02",
          "url": "https://web.stockbiz.vn/Stocks/DBC/LookupQuote.aspx?Date=21%2F10%2F2026"
        },
        {
          "label": "GitHub — kiểm toán VNDIRECT Finfo 263 phiên tới 21/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39568126463"
        },
        {
          "label": "GitHub — EOD 133/133 mã và kiểm tra triển khai",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39567984893"
        },
        {
          "label": "VNIndex.ai — ảnh chụp 14:38, không dùng làm EOD",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "GitHub — nhật ký nguồn, phép tính và bảng tự kiểm 21/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261021.md"
        }
      ]
    },
    {
      "id": "market-view-20261020",
      "date": "2026-10-20",
      "publishedAt": "20/10/2026 • Sau phiên",
      "edition": "Số 43",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá EOD 133/133 mã được VNDIRECT–KBS đối chiếu đúng ngày 20/10 • VN-Index, VN30 và HNX khớp Stockbiz • GT khớp và độ rộng VNDIRECT 1 NGUỒN • chuỗi 262 phiên • khối ngoại khớp, tự doanh và basis chưa được khóa",
      "title": "Chỉ số xanh nhẹ nhưng xu hướng vẫn yếu — 8 phiên phân phối tiếp tục chặn mua",
      "thesis": "VN-Index đóng 20/10/2026 tại 1.691,97 điểm (+2,13; +0,13%), chỉ phục hồi nhẹ sau phiên giảm 19/10 và còn dưới MA20 1.742,35, MA50 1.773,12, MA200 1.796,54. Theo ngưỡng V3.3.1, mức +0,13% là phiên ĐI NGANG, không phải phiên tăng ≥0,2%. GT khớp VNINDEX VNDIRECT 11.161,45 tỷ, bằng 0,933× TB20, thấp hơn 19/10 khoảng 1,43%. Độ rộng 178 tăng/109 giảm cho +1 điểm nhưng còn 8 phân phối/25, kích hoạt CHẶN CỨNG. Nền XẤU, điểm −1/7, trạng thái KHÔNG mở mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Nhịp hồi chưa vượt xu hướng yếu — giữ kỷ luật đứng ngoài",
        "thesis": "Chỉ số xanh +0,13% nhưng dưới MA20/50/200; giao dịch khớp dưới mức bình quân 20 phiên. Độ rộng khá hơn, song ngưỡng +0,2% chưa đạt để gọi phiên tăng theo V3.3.1. Có 8 phiên phân phối/25 phiên, chặn cứng chưa gỡ: KHÔNG mở mới.",
        "evidence": [
          {
            "label": "Giá và xu hướng",
            "signal": "▼ Dưới MA20 / MA50 / MA200",
            "detail": "Nền XẤU • 8 phân phối/25",
            "signalParts": [
              {
                "text": "▼ Dưới MA20 / MA50 / MA200",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "Nền XẤU",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "8 phân phối/25",
                "tone": "negative"
              }
            ],
            "text": "VN-Index 1.691,97 so MA20 1.742,35, MA50 1.773,12, MA200 1.796,54. MA20 giảm 28,71 điểm so với cách 5 phiên. Nhịp hồi trong ngày chưa đổi nền.",
            "tone": "negative"
          },
          {
            "label": "Thanh khoản khớp",
            "signal": "11.161,45 tỷ • 0,933× TB20",
            "detail": "Giảm 1,43% so 19/10 • 1 NGUỒN",
            "signalParts": [
              {
                "text": "11.161,45 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "0,933× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Giảm 1,43%",
                "tone": "warning"
              },
              {
                "text": " so 19/10 • ",
                "tone": "neutral"
              },
              {
                "text": "1 NGUỒN",
                "tone": "warning"
              }
            ],
            "text": "Tự tính cùng một nguồn VNDIRECT, TB20 20 phiên trước 11.968,05 tỷ đồng. Giá xanh +0,13% theo quy tắc vẫn là ĐI NGANG, yếu tố thanh khoản chấm 0, không được cộng điểm khi chưa đạt +0,2%.",
            "tone": "warning"
          },
          {
            "label": "Độ rộng và sức giá",
            "signal": "178 tăng / 109 giảm",
            "detail": "65 đứng giá • nhóm chứng khoán và logistics khá hơn",
            "signalParts": [
              {
                "text": "178 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "109 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "65 đứng giá",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "sức giá cải thiện ở một số nhóm",
                "tone": "positive"
              }
            ],
            "text": "Theo tập VNDIRECT, 178/109 = 1,633, độ rộng +1 điểm. Trong tập 133 mã web, chứng khoán 10/15 tăng, logistics 4/4 tăng; đây là sức GIÁ của nhóm theo dõi, không phải chứng cứ vốn ròng toàn ngành.",
            "tone": "neutral"
          }
        ],
        "actions": [
          "CHẶN CỨNG 8 phân phối/25 vẫn hiệu lực → KHÔNG mua mới, giảm/không sử dụng đòn bẩy, tỷ trọng cổ phiếu định hướng ≤20% theo dòng 1.",
          "NẾU VN-Index đóng dưới đáy ngày 20/10 là 1.677,19 từ phiên sau THÌ kiểm tra và hạ các cổ phiếu yếu theo dừng lỗ riêng, không bình quân giá xuống.",
          "NẾU chỉ số lấy lại MA20 1.742,35, MA50 1.773,12, MA200 1.796,54; phân phối còn ≤5 và thanh khoản, độ rộng, dòng tiền cùng xác nhận THÌ tính lại trạng thái, không phát tín hiệu mua tự động."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "Đã khóa giá đúng 20/10 của 133 mã qua VNDIRECT–KBS; CafeF chưa có EOD mục tiêu tại thời điểm kiểm, nên KBS làm đối chiếu độc lập. Chuỗi VNDIRECT Finfo 262 phiên đến 20/10 đọc qua GitHub Actions. Stockbiz cùng giá chỉ số, % cuối phiên. GT khớp VNINDEX và độ rộng chỉ 1 NGUỒN theo đúng phạm vi; HODL/ảnh chụp VNIndex.ai chưa có khối ngoại khớp EOD 20/10, tự doanh/basis chưa đối chiếu. Không có Sổ gốc người dùng.",
          "shortLabel": "EOD 133/133 • 262 phiên • 8 phân phối/25 • 1 NGUỒN khớp"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.691,97",
          "change": "+2,13 • +0,13%",
          "changeParts": [
            {
              "text": "+2,13",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "+0,13%",
              "tone": "positive"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "price_up"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "178 tăng / 109 giảm",
          "change": "65 đứng • 6 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "178 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "109 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "65 đứng",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "6 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "breadth_positive"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "11.161,45 tỷ",
          "change": "0,933× TB20 • giảm 1,43% so 19/10",
          "valueParts": [
            {
              "text": "11.161,45 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "0,933× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "giảm 1,43%",
              "tone": "warning"
            },
            {
              "text": " so 19/10",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới MA20 / MA50 / MA200",
          "change": "8 phân phối hợp lệ • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Dưới MA20 / MA50 / MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "VN-Index đóng ngày 20/10/2026 tại 1.691,97 điểm, tăng 2,13 điểm (+0,13%). Mở 1.692,73, cao 1.695,48, thấp 1.677,19 theo VNDIRECT EOD 15:08. Stockbiz 14:52 xác nhận đóng cửa chỉ số và tỷ lệ tăng; các trang VNIndex.ai, Investing.com lưu bản chụp 13:43–14:22 nên không dùng số tạm như giá cuối ngày.",
        "Giá hồi lại trên mức 1.690,56 (đáy 15/10) sau khi 19/10 đã đóng thủng, nhưng mới có một phiên trở lại phía trên: không tự coi mốc vô hiệu trong Sổ cũ đã được gỡ. Vùng đáy 19/10 1.682,54 bị xuyên trong phiên 20/10, tạo đáy phiên mới 1.677,19, không tự dời stop cũ xuống. Giá vẫn dưới MA20 1.742,35, MA50 1.773,12 và MA200 1.796,54.",
        "Khớp lệnh VNINDEX VNDIRECT đạt 11.161,45 tỷ, thấp hơn 1,43% so với 11.323,15 tỷ của 19/10 và bằng 0,933× TB20 11.968,05 tỷ; tất cả tự tính trên cùng chuỗi 262 phiên gốc. Stockbiz công bố 12.993,98 tỷ tổng giao dịch có thỏa thuận, không được so trực tiếp với khớp lệnh.",
        "VNDIRECT thống kê 178 mã tăng, 109 giảm, 65 đứng, 6 mã sàn; tỷ lệ 1,633 chạm ngưỡng cộng một điểm cho độ rộng. Giá đóng nằm ở 80,81% biên phiên, thể hiện lực hồi từ đáy trong phiên. Nhưng tăng +0,13% chưa đủ ngưỡng +0,2% theo định nghĩa phiên tăng của V3.3.1.",
        "Trong bộ 133 cổ phiếu theo dõi của website: nhóm chứng khoán 10 tăng/3 giảm/2 đứng, cảng biển và logistics 4 tăng/0 giảm, nông nghiệp 6/0, khu công nghiệp 4/0; ngân hàng 5 tăng/6 giảm/7 đứng. Bất động sản có 6/10 mã tăng nhưng VHM −4,15% và KOS −6,99%. Đây chỉ là bản đồ sức GIÁ của danh sách, không suy thành luồng vốn ngành.",
        "Khối ngoại khớp lệnh HOSE và chuỗi 5 phiên chưa khóa EOD cùng phạm vi. Trang VNIndex.ai còn ước tính giữa phiên; Stockbiz có giá trị NN tổng giao dịch; HODL khi mở còn ngày 19/10. Không trộn chúng để tạo con số chính thức hoặc chặn cứng. Tự doanh và basis VN30F1M không đủ đối chiếu trong nguồn đã mở.",
        "Cửa sổ 25 phiên còn 8 phân phối hợp lệ: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Ngày 15/10 loại vì đáo hạn, 20/10 không tạo phân phối mới do chỉ số không giảm ≥0,2%. CHẶN CỨNG ≥6 tiếp tục hiệu lực. Không có Sổ gốc người dùng, không tuyên bố đã gỡ các chặn quá khứ chưa kiểm."
      ],
      "levels": [
        {
          "label": "Đáy phiên mới / cảnh báo rủi ro",
          "value": "1.677,19",
          "note": "Đáy 20/10 nguồn VNDIRECT EOD, chỉ tham chiếu từ phiên kế tiếp; không tự thay mốc vô hiệu Sổ gốc."
        },
        {
          "label": "Đáy phiên 19/10 đã bị xuyên trong ngày",
          "value": "1.682,54",
          "note": "Thấp ngày 19/10; 20/10 giảm xuống 1.677,19 nhưng đóng lại 1.691,97."
        },
        {
          "label": "Mốc cũ từng bị phá",
          "value": "1.690,56",
          "note": "Đáy 15/10 đã công bố; ngày 19/10 đóng dưới; 20/10 mới một phiên đóng trên, không tự kết luận đã gỡ chặn."
        },
        {
          "label": "Kháng cự gần MA20",
          "value": "1.742,35",
          "note": "TỰ TÍNH từ 20 đóng cửa đến 20/10 trên chuỗi 262 phiên; MA20 dốc xuống 28,71 điểm trong 5 phiên."
        },
        {
          "label": "Kháng cự MA50",
          "value": "1.773,12",
          "note": "TỰ TÍNH từ 50 đóng cửa VNDIRECT đến 20/10."
        },
        {
          "label": "Kháng cự MA200",
          "value": "1.796,54",
          "note": "TỰ TÍNH 200 đóng cửa trên cùng nguồn, không phải lợi nhuận cam kết."
        },
        {
          "label": "Điều kiện nâng trạng thái",
          "value": "Vượt 1.742,35 → 1.773,12 → 1.796,54",
          "note": "Chặn phân phối còn ≤5 và giá/khớp/độ rộng/dòng tiền xác nhận; không mua tự động."
        }
      ],
      "confluence": {
        "score": -1,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": -1,
            "note": "1.691,97 dưới MA20 1.742,35 và MA50 1.773,12, MA20 tiếp tục dốc xuống, đồng thời dưới MA200 1.796,54."
          },
          {
            "factor": "Thanh khoản",
            "score": 0,
            "note": "Ngày 20/10 +0,126% là phiên đi ngang theo ngưỡng ±0,2%; dù tỷ lệ khớp 0,933× TB20, yếu tố 2 buộc 0 với phiên đi ngang."
          },
          {
            "factor": "Độ rộng",
            "score": 1,
            "note": "178 tăng/109 giảm = 1,633 ≥1,5 trong tập VNDIRECT; một nguồn, +1 điểm."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": 0,
            "note": "Theo Prompt, phiên đi ngang hoặc biến động dưới 2 điểm chấm 0; phiên 20/10 tăng 2,13 điểm nhưng <+0,2% nên vẫn thuộc loại đi ngang; chưa có đóng góp top5 EOD cùng nguồn."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Khối ngoại ròng khớp HOSE và chuỗi 5 phiên chưa xác minh; Stockbiz tổng khác khớp, HODL vẫn là 19/10, VNIndex.ai ảnh chụp 14:22."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phiên phân phối hợp lệ/25, ngưỡng ≥5 chấm −1; 20/10 không tạo phiên giảm/phân phối mới."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M đúng hợp đồng đúng giờ EOD chưa đủ chứng cứ, không tự chấm +1/−1. Ngày 20/10 không dùng cờ đáo hạn 15/10."
          }
        ],
        "veto": [
          "CHẶN CỨNG còn 8 phiên phân phối hợp lệ/25, ≥6 theo V3.3.1; luôn ưu tiên hơn điểm đồng thuận −1/7 và độ rộng có cải thiện.",
          "Không có chặn xả cuối phiên: vị trí đóng 0,808 nằm 1/3 trên biên giá, không phải 1/3 dưới. Không có chặn xanh điểm đỏ mã trong tập VNDIRECT vì 178 tăng >109 giảm.",
          "Chặn ngoại liên tiếp và mốc vô hiệu từ Sổ người dùng KHÔNG KIỂM ĐƯỢC, không tự mặc định đã qua. Mốc 1.690,56 trước đây bị phá 19/10 mới được lấy lại một phiên, không xác nhận gỡ chính thức.",
          "Quy đổi: chế độ ĐẦY ĐỦ, thô KHÔNG dòng 1 → trần nền XẤU KHÔNG → thiếu Sổ người dùng, bỏ chống đảo chiều → KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — đóng trên MA20 1.742,35, lấy lại MA50 1.773,12 và MA200 1.796,54, còn ≤5 phiên phân phối, đồng thuận thanh khoản/độ rộng",
          "then": "Đánh giá lại trạng thái từ đầu, không tự động mở vị thế."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — VN-Index còn dưới MA20 1.742,35, vùng đáy 1.677,19 chưa thủng giá đóng nhưng 8 phân phối/25 chưa gỡ",
          "then": "KHÔNG mở mới; giữ kỷ luật dừng lỗ từng mã, hạn chế đòn bẩy và ưu tiên tiền mặt."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — phiên tới đóng dưới đáy mới 1.677,19",
          "then": "Rà danh mục, giảm cổ phiếu yếu theo stop đã thiết lập, không bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — lấy lại 1.742,35, 1.773,12, 1.796,54 và phân phối ≤5",
          "then": "KIỂM TRA LẠI đủ cổng, chưa tự động mua."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — còn dưới 1.742,35, 8 phân phối chưa gỡ",
          "then": "KHÔNG mua mới; theo dõi tiền lớn được xác minh và quản trị hàng."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng dưới 1.677,19",
          "then": "GIẢM phần yếu nếu chạm stop theo từng mã; không bắt đáy."
        }
      ],
      "actionTable": {
        "dataCutoff": "EOD 20/10/2026, VNDIRECT thô 15:08, Stockbiz 14:52; 133/133 cổ phiếu VNDIRECT–KBS khóa đúng ngày; chế độ ĐẦY ĐỦ",
        "finalState": "KHÔNG",
        "score": "−1/7: giá −1; thanh khoản 0 (phiên +0,126% là đi ngang); độ rộng +1 (178/109 = 1,633); chất lượng dòng tiền 0; ngoại 0 thiếu EOD khớp; phân phối −1 (8/25); phái sinh/vĩ mô 0 chưa khóa basis. Thô KHÔNG dòng 1 → trần nền XẤU KHÔNG → bỏ chống đảo chiều vì không có Sổ → KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG 8 phiên phân phối/25 (ngưỡng 6) chưa gỡ. Khối ngoại, mốc vô hiệu Sổ gốc: KHÔNG KIỂM ĐƯỢC. Không có chặn xả cuối nến do đóng ở 1/3 trên.",
        "marketState": "YẾU — nền XẤU, MA20 dốc xuống dù độ rộng tốt hơn",
        "shortTrend": "Hồi từ đáy trong phiên, nhưng VN-Index 1.691,97 còn dưới MA20 1.742,35",
        "mediumTrend": "Yếu — dưới MA50 1.773,12 và MA200 1.796,54",
        "liquidity": "11.161,45 tỷ khớp VNINDEX theo VNDIRECT; 0,933× TB20 11.968,05 tỷ và giảm 1,43% so 19/10; 1 NGUỒN, không gộp tổng GD Stockbiz",
        "breadth": "178 mã tăng / 109 giảm / 65 đứng / 6 sàn (tập VNINDEX VNDIRECT); tỷ lệ 1,633, 1 NGUỒN",
        "flow": "Độ rộng cải thiện nhưng chưa xác minh top 5 mã đóng góp EOD. Sức giá bộ 133 mã: chứng khoán 10/15 tăng, cảng biển–logistics 4/4 tăng, khu công nghiệp 4/4 tăng, ngân hàng phân hóa.",
        "foreign": "Không có giá trị ròng khớp HOSE EOD và chuỗi 5 phiên đã đối chiếu đủ; Stockbiz tổng giao dịch, HODL cũ và VNIndex.ai trong phiên không thay số chính thức.",
        "distributions": "8 phiên hợp lệ/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10; 20/10 không thêm mới, loại 15/10 đáo hạn.",
        "proprietary": "Chưa xác minh được tự doanh ròng khớp lệnh HOSE cuối phiên 20/10.",
        "tradingAbility": "Phòng thủ — KHÔNG mua mới (dòng 1)",
        "moneyIn": "Chưa có số dòng vốn ròng ngành đủ kiểm. Về sức GIÁ trong 133 mã: chứng khoán 10/15 tăng, nông nghiệp 6/6, khu công nghiệp 4/4, logistics 4/4.",
        "moneyOut": "Chưa có số tiền rút ròng ngành đủ kiểm. Về sức GIÁ: ngân hàng 6/18 giảm, bất động sản VHM −4,15% và KOS −6,99%, HDB −2,86%.",
        "support": "Đáy mới 1.677,19 ngày 20/10; đáy 19/10 là 1.682,54; 1.690,56 từ 15/10 vừa được lấy lại một phiên.",
        "resistance": "MA20 1.742,35; MA50 1.773,12; MA200 1.796,54.",
        "invalidation": "Mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC. Mốc 1.690,56 trên website cũ đã thủng 19/10, 20/10 hồi lại một phiên; không tuyên bố chặn mang sang đã gỡ.",
        "buyZone": "Không áp dụng — KHÔNG mua mới, dòng 1 của bảng ĐẦY ĐỦ.",
        "reduceZone": "Rà và giảm mã yếu khi stop riêng bị chạm hoặc phiên sau đóng dưới đáy tham chiếu 1.677,19; không tự dời stop xuống.",
        "rr": "Không áp dụng — mốc vô hiệu chính thức trong Sổ người dùng chưa được đối chiếu; không tạo tỷ số R:R chỉ số giả định.",
        "margin": "Giảm / không sử dụng",
        "allocation": "≤20% cổ phiếu / ≥80% tiền mặt là mức định hướng trạng thái KHÔNG dòng 1, tùy hồ sơ rủi ro",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mở vị thế mới; theo dõi khả năng giữ 1.677,19 và phục hồi MA20, rà stop từng mã, không bắt đáy theo một phiên xanh nhẹ."
      },
      "finalConclusion": [
        "KHÔNG mua mới — điểm −1/7 nhưng chặn cứng 8 phân phối/25 và nền XẤU chưa đổi; +0,13% chưa được coi là phiên tăng theo Prompt.",
        "Rủi ro là nhịp hồi không có xác nhận từ xu hướng trung hạn và giá trị khớp dưới TB20; số khối ngoại khớp còn thiếu đối chiếu.",
        "NẾU thủng 1.677,19 trên giá đóng từ phiên tới THÌ hạ phần yếu theo stop từng mã; chỉ xem xét nâng trạng thái khi vượt 1.742,35, 1.773,12, 1.796,54 cùng phân phối còn ≤5 và dòng tiền được xác minh."
      ],
      "focus": "KHÔNG • nền XẤU • −1/7 • 8 phân phối/25 • VN-Index 1.691,97 • MA20 1.742,35 / MA50 1.773,12 / MA200 1.796,54 • khớp 0,933× TB20",
      "inference": "Chứng cứ và 20 tiêu chí trong docs/market-source-log-20261020.md. Giá đóng VN-Index, VN30, HNX khớp Stockbiz EOD; VNDIRECT Finfo 262 hàng 01/10/2025–20/10/2026 được audit qua GitHub 39391337887, EOD 133 mã qua 39391083035. Cổng khối ngoại khớp/basis và Sổ gốc thiếu dữ liệu, không mặc định đã qua. Giữ chuẩn bố cục v2.2.2.",
      "limitations": [
        "Giá trị khớp 11.161,45 tỷ theo tập VNINDEX VNDIRECT là 1 NGUỒN; Stockbiz 12.993,98 tỷ là tổng giao dịch khác phạm vi, không sử dụng để chấm bội số.",
        "Độ rộng 178/109/65 là tập VNDIRECT EOD; dữ liệu VNIndex.ai chụp 14:22 khác tập/giờ, không phải nguồn đối chiếu cùng phạm vi.",
        "Khối ngoại ròng khớp HOSE và chuỗi 5 phiên, tự doanh và basis chưa có chứng cứ đủ, không dùng giá tạm để kích hoạt chặn.",
        "Không có Sổ người dùng: không khẳng định mốc vô hiệu cũ đã gỡ. Đáy mới 1.677,19 chỉ là mức tham chiếu có hiệu lực kiểm từ phiên sau, không thay stop cá nhân.",
        "Ngành mới có bằng chứng về sức giá bộ 133 mã, không được gán là vốn ròng thực vào/ra toàn ngành; chưa có top 5 đóng góp EOD cùng phương pháp."
      ],
      "zaloPost": "VN-Index đóng ngày 20/10 ở 1.691,97 điểm, tăng 2,13 điểm. Nhưng tôi vẫn giữ trạng thái KHÔNG mở vị thế mới. Một phiên xanh nhẹ chưa làm thay đổi nền xu hướng: giá vẫn ở dưới các đường trung bình 20, 50 và 200 phiên, và thị trường còn 8 phiên phân phối hợp lệ trong 25 phiên gần nhất.\n\nBảng điện đã có cải thiện ở số mã tăng: theo tập thống kê VNDIRECT có 178 mã tăng và 109 mã giảm. Trong danh sách 133 cổ phiếu theo dõi, nhóm chứng khoán, cảng biển và khu công nghiệp có sức giá khá hơn; trái lại ngân hàng phân hóa, một số mã bất động sản còn chịu áp lực. Tôi chỉ gọi đây là sự phân hóa giá, không tự kết luận tiền lớn đã vào những ngành đó khi chưa có giá trị khớp lệnh ngành được xác minh.\n\nGiá trị khớp theo VN-Index của VNDIRECT đạt 11.161,45 tỷ đồng, bằng 0,933 lần bình quân 20 phiên trước và thấp hơn phiên 19/10. Chỉ số đóng cửa gần đỉnh trong ngày nhưng chỉ tăng 0,13%; theo quy tắc, đây vẫn là phiên đi ngang, chưa đủ điều kiện coi là một ngày tăng có sức xác nhận. Số phiên phân phối vẫn là 8, cao hơn ngưỡng chặn mua.\n\nNẾU VN-Index giữ trên đáy mới 1.677,19 nhưng chưa lấy lại MA20 ở 1.742,35, THÌ tôi tiếp tục ưu tiên kiểm tra danh mục, giữ kỷ luật dừng lỗ và không mua đuổi nhịp hồi. NẾU đóng dưới 1.677,19 từ phiên tới, THÌ chủ động giảm phần yếu theo mức dừng lỗ riêng từng cổ phiếu, không bình quân giá xuống. NẾU lần lượt vượt 1.742,35, 1.773,12, 1.796,54 và số phiên phân phối giảm còn tối đa 5, thanh khoản, độ rộng cùng xác nhận, THÌ mới đánh giá lại trạng thái.\n\nTỷ trọng cổ phiếu định hướng theo trạng thái phòng thủ không quá 20%, hạn chế đòn bẩy để bảo vệ sức mua cho thời điểm có lợi thế rõ hơn.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "VNDIRECT Finfo — khóa EOD 20/10 và chuỗi lịch sử 262 phiên",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39391337887"
        },
        {
          "label": "Stockbiz — đối chiếu đóng cửa VN-Index, VN30, HNX-Index 20/10",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "GitHub Actions — cập nhật và khóa 133/133 cổ phiếu VNDIRECT–KBS 20/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39391083035"
        },
        {
          "label": "VNIndex.ai — ảnh chụp 14:22, không dùng làm giá EOD",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "HODL — đối chiếu khối ngoại nhưng còn dữ liệu cũ/tạm",
          "url": "https://hodl.vn/indices/vnindex/"
        },
        {
          "label": "GitHub — nhật ký nguồn, ngoại lệ, 262 phiên và 20 tiêu chí kiểm",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261020.md"
        }
      ]
    },
    {
      "id": "market-view-20261019",
      "date": "2026-10-19",
      "publishedAt": "19/10/2026 • Sau phiên",
      "edition": "Số 42",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá 133/133 mã EOD 19/10 khóa VNDIRECT–CafeF/KBS • VN-Index, VN30, HNX đã đối chiếu • khớp lệnh HOSE và độ rộng VNDIRECT khác phạm vi • chuỗi 261 phiên cùng nguồn • ngoại khớp, tự doanh, basis chưa kiểm chứng đầy đủ",
      "title": "Giảm thủng đáy cũ, cổ phiếu trụ gây sức ép — 8 phiên phân phối còn hiệu lực",
      "thesis": "VN-Index đóng 19/10/2026 tại 1.689,84 điểm (−16,07; −0,94%), thấp hơn đáy 15/10 là 1.690,56 và dưới MA20 1.748,60, MA50 1.774,57, MA200 1.796,79. VNINDEX VNDIRECT khớp 11.323,15 tỷ, bằng 0,937× bình quân 20 phiên trước và cao hơn 16/10, hình thành một phiên phân phối mới. Cửa sổ 25 phiên vẫn có 8 phiên phân phối hợp lệ do 14/09 ra khỏi cửa sổ. Sức giảm chủ yếu tại một số trụ bất động sản; độ rộng 153 tăng/131 giảm theo tập VNDIRECT không phủ định nền xu hướng XẤU. Điểm −2/7, CHẶN CỨNG còn hiệu lực → KHÔNG mở vị thế mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Thủng đáy gần, trụ giảm mạnh — chưa gỡ chặn phân phối",
        "thesis": "VN-Index thủng đáy 15/10 và đóng dưới MA20/50/200. Thanh khoản khớp theo VNDIRECT tăng so phiên trước nhưng chưa vượt bình quân 20 phiên; 19/10 tạo phân phối mới. Dù số mã tăng nhiều hơn giảm, sức ép tập trung ở các trụ lớn. Chặn 8 phân phối/25 vẫn còn: KHÔNG mở mới.",
        "evidence": [
          {
            "label": "Nền giá và xu hướng",
            "signal": "▼ 1.689,84 • dưới MA20/50/200",
            "detail": "Đóng dưới đáy 15/10 là 1.690,56 • nền XẤU",
            "signalParts": [
              {
                "text": "▼ 1.689,84",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "dưới MA20/50/200",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "Đóng dưới 1.690,56",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "nền XẤU",
                "tone": "negative"
              }
            ],
            "text": "MA20 1.748,60 dốc giảm, MA50 1.774,57, MA200 1.796,79 đều trên thị giá. Nến đóng tại 18,79% biên độ phiên, thấp hơn đáy 20 phiên trước 1.690,56.",
            "tone": "negative"
          },
          {
            "label": "Khớp lệnh và phân phối",
            "signal": "11.323,15 tỷ • 0,937× TB20",
            "detail": "Khớp tăng so 16/10 • phân phối hợp lệ 8/25",
            "signalParts": [
              {
                "text": "11.323,15 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "0,937× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Khớp tăng so 16/10",
                "tone": "negative"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "8 phân phối/25",
                "tone": "negative"
              }
            ],
            "text": "Một nguồn VNDIRECT VNINDEX cho 261 phiên giá/khớp: 19/10 giảm 0,94% và GT khớp tăng 14,17% so 16/10 nên là phân phối mới. Đồng thời 14/09 ra cửa sổ, tổng còn 8. HOSE khớp toàn thị trường 11.393 tỷ khác tập VNINDEX.",
            "tone": "negative"
          },
          {
            "label": "Độ rộng và cổ phiếu trụ",
            "signal": "153 tăng / 131 giảm",
            "detail": "75 đứng giá • VN30 −0,87% / VNMID +0,33%",
            "signalParts": [
              {
                "text": "153 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "131 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "75 đứng giá",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "VN30 −0,87%",
                "tone": "negative"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "VNMID +0,33%",
                "tone": "positive"
              }
            ],
            "text": "Tập VNDIRECT có nhiều mã tăng hơn giảm, nhưng VN30 mất 0,87% trong khi VNMID tăng 0,33% và VNSML tăng 0,22% (HOSE). BSC ghi VIC đóng góp âm lớn; lực giảm chủ yếu tập trung vào các trụ, không phải thị trường đồng loạt đỏ.",
            "tone": "neutral"
          }
        ],
        "actions": [
          "KHÔNG mở vị thế mới khi CHẶN CỨNG 8 phân phối/25 chưa được gỡ; ưu tiên phòng thủ, kiểm dừng lỗ từng mã, giảm hoặc không sử dụng đòn bẩy.",
          "NẾU phiên sau không lấy lại 1.690,56 và tiếp tục yếu THÌ không mua đuổi hồi; NẾU thủng tiếp đáy 19/10 là 1.682,54 THÌ chủ động rà soát hạ mã yếu theo ngưỡng dừng lỗ riêng.",
          "NẾU vượt lần lượt MA20 1.748,60, MA50 1.774,57, MA200 1.796,79 và số phân phối còn ≤5, giá/khớp/độ rộng có xác nhận THÌ mới đánh giá lại trạng thái; không tự động mua."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "133/133 cổ phiếu EOD VNDIRECT, đối chiếu CafeF 130 và KBS 3 mã có sai khác. Dữ liệu giá, GT khớp và chỉ báo VNINDEX tính 261 phiên nguồn VNDIRECT (một gốc). HOSE toàn thị trường 11.393 tỷ khác tập VNINDEX 11.323,15 tỷ; không hợp nhất hai phạm vi. Độ rộng VNDIRECT 153/131/75 khác phạm vi BSC và VNIndex.ai. Không có Sổ gốc; khối ngoại khớp, tự doanh và basis chưa được khóa.",
          "shortLabel": "EOD 133/133 • 261 phiên một gốc • 8 phân phối/25"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.689,84",
          "change": "−16,07 • −0,94%",
          "changeParts": [
            {
              "text": "−16,07",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "−0,94%",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "price_down"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "153 tăng / 131 giảm",
          "change": "75 tham chiếu • 2 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "153 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "131 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "75 tham chiếu",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "2 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "neutral",
          "direction": "flat",
          "snapshotState": "neutral"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "11.323,15 tỷ",
          "change": "0,937× TB20 • tăng 14,17% so 16/10",
          "valueParts": [
            {
              "text": "11.323,15 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "0,937× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "tăng 14,17%",
              "tone": "negative"
            },
            {
              "text": " so 16/10",
              "tone": "neutral"
            }
          ],
          "tone": "warning",
          "direction": "up",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới MA20 / MA50 / MA200",
          "change": "8 phân phối hợp lệ • KHÔNG mở mới",
          "valueParts": [
            {
              "text": "Dưới MA20 / MA50 / MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mở mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "VN-Index đóng ngày 19/10/2026 tại 1.689,84 điểm (−16,07; −0,94%). VNDIRECT raw EOD chốt 15:33: mở 1.721,05, cao 1.721,39, thấp 1.682,54. Stockbiz/HOSE đối chiếu giá đóng cửa tuyệt đối; Investing.com có mở/cao khác nên không dùng hai số đó làm OHLC cùng nguồn.",
        "Giá dưới đáy phiên 15/10 (1.690,56) và dưới MA20 1.748,60, MA50 1.774,57, MA200 1.796,79. MA20 giảm khoảng 27,05 điểm so với năm phiên trước. Giá đóng ở phần 18,79% thấp nhất của biên phiên: nến yếu, song không tự kích hoạt chặn xả cuối do GT khớp chưa bằng TB20.",
        "VNDIRECT Finfo VNINDEX khớp 11.323,15 tỷ (nmValue) tăng 14,17% so 16/10, nhưng bằng 0,937 lần TB20 12.085,18 tỷ của 20 phiên trước. HOSE điểm tin **toàn thị trường** công bố 11.393 tỷ khớp; BSC 11.351 tỷ, không cùng tập thống kê. Không tráo các phạm vi khi tính bội số và phân phối.",
        "Độ rộng nguồn VNDIRECT: 153 tăng/131 giảm/75 đứng, 2 sàn (tỷ lệ tăng/giảm 1,168). VNIndex.ai đếm trên 404 mã: 162 tăng/133 giảm/109 đứng; khác phạm vi. Sự phân hóa rõ khi VN30 −0,87%, còn VNMID +0,33%, VNSML +0,22% theo HOSE. Không kết luận thị trường đồng loạt yếu nếu không xem các mã trụ.",
        "HOSE chỉ số ngành phiên 19/10: năng lượng +1,14%, chăm sóc sức khỏe +1,35%, tiêu dùng +0,28%; bất động sản −2,52%, tài chính −0,47%, công nghệ thông tin −1,63%. Trong tập 133 mã trên web, ngân hàng 2 tăng/13 giảm/3 đứng, năng lượng 11 tăng/0 giảm/1 đứng, chứng khoán 8 tăng/5 giảm/2 đứng. Đây chỉ là sức giá, chưa đủ GT khớp ngành và dòng ngoại ngành để khẳng định vốn vào/ra.",
        "Theo bảng đóng góp BSC cùng một nguồn, VIC −12,85 điểm, VCB −1,21, VHM −1,19, VPB −1,03, HPG −0,61; tổng −16,89 điểm lớn hơn mức giảm VN-Index −16,07 điểm vì có các mã đối ứng nâng chỉ số. Đoạn bình luận của BSC có số VIC/VHM khác với bảng highlight; không pha hai bộ số. Yếu tố 4 theo quy tắc phiên giảm không cho −1 do nhóm top 5 đã chiếm hơn 50%.",
        "Khối ngoại HOSE theo thống kê **tổng giao dịch** là bán ròng 801 tỷ, BSC tổng khoảng 799,52 tỷ; HODL nói khớp lệnh khoảng 792,2 tỷ nhưng đánh dấu (tạm). Không đưa con số khớp ròng chưa xác minh vào cổng chặn ngoại, và không tuyên bố đã kiểm được chuỗi khớp 5 phiên. Chưa có trị số tự doanh ròng và basis VN30F1M đủ đối chiếu cùng mốc.",
        "Đếm phân phối nguồn VNDIRECT còn 8 phiên hợp lệ trong 25 phiên. Ngày 19/10 giảm trên 0,2% và khớp cao hơn 16/10 nên tạo phân phối mới; ngày 14/09 ra ngoài cửa sổ, ngày 15/10 loại đáo hạn. 8 ≥6 vẫn là CHẶN CỨNG. Không có Sổ dữ liệu người dùng nên không giả định mốc chặn cũ hoặc các điều kiện ngoại đã được gỡ."
      ],
      "levels": [
        {
          "label": "Mốc kiểm soát kỹ thuật đã bị xuyên",
          "value": "1.690,56",
          "note": "Đáy 15/10, công bố web trước đây; 19/10 đóng dưới 0,72 điểm. Không tự hạ mốc stop cũ để né chặn, và không giả mốc này đã có trong Sổ người dùng."
        },
        {
          "label": "Đáy phiên mới",
          "value": "1.682,54",
          "note": "VNDIRECT raw 19/10 và VNIndex.ai cùng ghi; là đáy kỹ thuật phiên, không tự động thay mốc vô hiệu của Sổ."
        },
        {
          "label": "Kháng cự MA20",
          "value": "1.748,60",
          "note": "TỰ TÍNH 20 giá đóng cửa trong 261 phiên VNDIRECT đến 19/10, MA20 dốc xuống."
        },
        {
          "label": "Kháng cự MA50",
          "value": "1.774,57",
          "note": "TỰ TÍNH trung bình 50 close đồng nhất nguồn, giá vẫn dưới."
        },
        {
          "label": "Kháng cự mạnh MA200",
          "value": "1.796,79",
          "note": "TỰ TÍNH trung bình 200 close đồng nhất VNDIRECT."
        },
        {
          "label": "Xác nhận tích cực",
          "value": "Vượt 1.748,60 → 1.774,57 → 1.796,79",
          "note": "Phải gỡ chặn phân phối còn ≤5, đồng thuận giá, thanh khoản, độ rộng; không phát lệnh tự động."
        },
        {
          "label": "Rủi ro kế tiếp",
          "value": "Không lấy lại 1.690,56 / xuyên 1.682,54",
          "note": "Hai mốc giá có xuất xứ, ưu tiên đánh giá dừng lỗ riêng mã, không suy đoán hỗ trợ xa."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": -1,
            "note": "Đóng 1.689,84 dưới MA20 1.748,60 và MA50 1.774,57, thấp hơn đáy 20 phiên trước 1.690,56, dưới MA200 1.796,79."
          },
          {
            "factor": "Thanh khoản",
            "score": 0,
            "note": "Phiên giảm −0,94% nhưng VNDIRECT VNINDEX 11.323,15 tỷ/12.085,18 tỷ TB20 = 0,937× <1,2, nên yếu tố 2 = 0. Không trộn số khớp HOSE 11.393 tỷ khác phạm vi."
          },
          {
            "factor": "Độ rộng",
            "score": 0,
            "note": "VNDIRECT 153/131 = 1,168, không chạm ngưỡng +1 là ≥1,5 hoặc −1 là ≤0,67."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": 0,
            "note": "Top5 mã giảm theo bảng BSC góp −16,89 điểm trên VN-Index giảm −16,07, lớn hơn 50%, nên không chạm điều kiện điểm −1 cho phiên giảm (bán dàn trải). BSC một nguồn và có số khác trong đoạn văn; không trộn."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Khối ngoại khớp HOSE cùng phạm vi và chuỗi 5 phiên chưa đối chiếu đúng EOD; HODL ghi phiên tạm, số tổng từ HOSE/BSC khác phạm vi. Không dùng số tạm kích hoạt chặn cứng."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phân phối hợp lệ/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. 14/09 hết cửa sổ; 15/10 loại đáo hạn."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M chuẩn EOD chưa đủ chứng cứ hợp đồng, không chấm +1/−1; không có tin vĩ mô đủ liên quan/độ tin cậy để trừ điểm."
          }
        ],
        "veto": [
          "CHẶN CỨNG đang hiệu lực: 8 phiên phân phối hợp lệ trong 25 phiên, ngưỡng từ 6. Dòng 1 của Prompt V3.3.1 ⇒ KHÔNG.",
          "Chặn xả cuối phiên KHÔNG kích hoạt: đóng cửa trong 1/3 dưới nhưng bội số GT khớp chỉ 0,937× TB20, chưa đủ ≥1.",
          "Mốc 1.690,56 từng công bố trên website đã bị xuyên giá đóng; chưa có Sổ gốc để xác nhận là chặn mốc vô hiệu chính thức. Khối ngoại liên tiếp và các chặn cũ: KHÔNG KIỂM ĐƯỢC, không mặc định đã gỡ.",
          "Quy đổi: thô KHÔNG dòng 1 → trần nền XẤU = KHÔNG → không có Sổ người dùng nên bỏ bước chống đảo chiều → chốt KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — đóng vượt lần lượt MA20 1.748,60, MA50 1.774,57, MA200 1.796,79; số phân phối còn ≤5 và khớp/độ rộng đồng thuận",
          "then": "Tính lại toàn bộ trạng thái và kiểm các chặn, chưa tự mở vị thế mới."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — VN-Index dao động dưới MA20 1.748,60, chặn 8 phiên phân phối chưa gỡ; vùng 1.690,56 chưa được lấy lại bền vững",
          "then": "KHÔNG mua mới; duy trì phòng thủ, chỉ quản trị hàng sẵn có."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — chỉ số tiếp tục đóng dưới 1.690,56 hoặc xuyên đáy 19/10 là 1.682,54",
          "then": "Rà soát hạ nhóm yếu theo mức cắt lỗ của từng mã; không bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — lấy lại 1.748,60 / 1.774,57 / 1.796,79 và phân phối ≤5",
          "then": "ĐÁNH GIÁ LẠI khi khớp/độ rộng xác nhận; không mua tự động."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — chưa lấy lại MA20 1.748,60, chặn phân phối chưa gỡ",
          "then": "KHÔNG mở mới, ưu tiên bảo vệ tài khoản."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — mất tiếp 1.682,54 hoặc giữ dưới mốc 1.690,56",
          "then": "RÀ SOÁT HẠ mã yếu theo dừng lỗ riêng từng mã, không bắt đáy."
        }
      ],
      "actionTable": {
        "dataCutoff": "Hết 19/10/2026 giờ Việt Nam. HOSE bản tin 16:39, VNDIRECT raw phiên 15:33 kiểm toán 261 hàng; 133/133 mã được khóa EOD qua GitHub",
        "finalState": "KHÔNG",
        "score": "−2/7: giá −1, thanh khoản 0 (khớp 0,937× TB20), độ rộng 0 (153/131), chất lượng top5 giảm 0, khối ngoại 0 (chưa xác minh khớp), sức khỏe xu hướng −1 (8 phân phối/25), phái sinh/vĩ mô 0. Thô KHÔNG dòng 1 → nền XẤU KHÔNG → không có Sổ nên bỏ chống đảo chiều → chốt KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG 8 phân phối hợp lệ/25 ≥6. Ngày 19/10 là phân phối mới, 14/09 ra ngoài cửa sổ. Ngoại khớp và mốc chính thức Sổ cũ KHÔNG KIỂM ĐƯỢC.",
        "marketState": "YẾU — giá dưới MA20/50/200 và đóng thấp hơn đáy 15/10",
        "shortTrend": "Yếu, MA20 1.748,60 dốc xuống, đóng 1.689,84 dưới đáy 20 phiên trước 1.690,56",
        "mediumTrend": "Yếu, dưới MA50 1.774,57 và MA200 1.796,79",
        "liquidity": "11.323,15 tỷ khớp theo VNINDEX VNDIRECT, 0,937× TB20 12.085,18 tỷ, tăng 14,17% so 16/10. HOSE toàn thị trường 11.393 tỷ, khác phạm vi; 1 NGUỒN",
        "breadth": "153 tăng / 131 giảm / 75 đứng / 2 sàn theo tập VNDIRECT; tỷ lệ 1,168 (1 NGUỒN)",
        "flow": "VN30 −0,87%, VNMID +0,33%, VNSML +0,22%. BSC top5 giảm kéo −16,89 điểm, chủ yếu trụ, nhưng chưa có bằng chứng vốn ròng ngành.",
        "foreign": "Chưa xác minh EOD giá trị ròng chỉ khớp lệnh HOSE và chuỗi 5 phiên đồng phạm vi. HOSE −801 tỷ là tổng GD, HODL phiên khớp còn tạm tính; không dùng chặn cứng.",
        "distributions": "8/25: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10; 19/10 là phiên phân phối mới, 14/09 đã rời cửa sổ; loại 15/10 đáo hạn.",
        "proprietary": "Chưa xác minh giá trị tự doanh ròng HOSE cuối phiên theo phạm vi chuẩn.",
        "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới (dòng 1)",
        "moneyIn": "Chưa có chứng cứ dòng tiền ròng ngành đồng phạm vi; về sức GIÁ HOSE năng lượng +1,14%, chăm sóc sức khỏe +1,35%, tiêu dùng +0,28%. Trong 133 mã web, năng lượng 11/12 mã tăng.",
        "moneyOut": "Chưa có chứng cứ vốn ròng rời ngành; về sức GIÁ HOSE bất động sản −2,52%, tài chính −0,47%, công nghệ −1,63%. Trong 133 mã web, ngân hàng 13/18 mã giảm.",
        "support": "Đáy phiên 19/10 1.682,54 mới hình thành; mốc đáy 15/10 1.690,56 đã bị đóng dưới, không tự giả là mốc Sổ chính thức.",
        "resistance": "1.690,56 là vùng vừa đánh mất; kháng cự MA20 1.748,60; MA50 1.774,57; MA200 1.796,79.",
        "invalidation": "Mốc Sổ gốc KHÔNG KIỂM ĐƯỢC. Không hạ mốc 1.690,56 đã công bố trước để tránh stop; chỉ cảnh báo vi phạm mốc giá kỹ thuật. Đáy mới 1.682,54 không thay thế Sổ.",
        "buyZone": "Không áp dụng — trạng thái KHÔNG, dòng 1.",
        "reduceZone": "Nếu chưa lấy lại 1.690,56 hoặc giảm xuyên 1.682,54, rà rủi ro và giảm phần yếu khi mã riêng vi phạm dừng lỗ; không dời stop xuống.",
        "rr": "Không áp dụng — giá đã đóng dưới mốc rủi ro 1.690,56 từng công bố, và mốc vô hiệu Sổ gốc chưa có để đối chiếu.",
        "margin": "Giảm / không sử dụng",
        "allocation": "≤20% cổ phiếu / ≥80% tiền mặt là mức định hướng của chế độ KHÔNG dòng 1, tùy tài khoản",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mua mới; ưu tiên cắt giảm phần yếu theo stop riêng, không mua đuổi nhịp hồi khi chặn cứng phân phối còn hiệu lực."
      },
      "finalConclusion": [
        "KHÔNG mua mới — 19/10 tạo phiên phân phối mới và chặn cứng 8/25 vẫn còn; nền xu hướng XẤU, điểm −2/7.",
        "Rủi ro nằm ở việc giá đóng thủng đáy 1.690,56 trong khi nhiều trụ lớn bị bán, dù bảng điện không đỏ đồng loạt; khối ngoại khớp lệnh chưa đủ đối chiếu.",
        "NẾU chỉ số không lấy lại 1.690,56 hoặc thủng 1.682,54 THÌ tăng phòng thủ theo dừng lỗ riêng mã; chỉ đánh giá lại khi lấy lại MA20 1.748,60, MA50 1.774,57, MA200 1.796,79 và phân phối còn ≤5."
      ],
      "focus": "KHÔNG • nền XẤU • −2/7 • 8 phân phối/25 • đóng 1.689,84 dưới đáy 1.690,56 • MA20 1.748,60 / MA50 1.774,57 / MA200 1.796,79",
      "inference": "Đối chiếu độc lập 261 bản ghi VNDIRECT Finfo tại GitHub Actions 39250282942, giá chỉ số với HOSE/Stockbiz; EOD 133 mã theo workflow 39249798965. HOSE toàn thị trường khớp 11.393 tỷ khác VNINDEX VNDIRECT 11.323,15 tỷ; không trộn. Sổ người dùng không được cung cấp, ngoại khớp, tự doanh và basis còn thiếu; giữ nguyên layout v2.2.2. Nhật ký: docs/market-source-log-20261019.md.",
      "limitations": [
        "GT khớp HOSE toàn thị trường 11.393 tỷ khác VNINDEX VNDIRECT 11.323,15 tỷ và BSC 11.351 tỷ; dùng riêng VNDIRECT cho 261 phiên TB20 và phân phối; nhãn số khớp một nguồn.",
        "Độ rộng VNDIRECT 153/131/75 không cùng phạm vi với VNIndex.ai 162/133/109 và BSC 161/132/109; không ghép hay tuyên bố đã đối chiếu.",
        "Khối ngoại khớp HOSE ròng 19/10 và chuỗi 5 phiên chưa khóa; HODL có nhãn tạm, HOSE/BSC công bố tổng; tự doanh và basis chưa đủ số EOD cùng phạm vi.",
        "Không có Sổ gốc; mốc 1.690,56 đã được công bố trên website cũ và bị xuyên nhưng không thể giả định là mốc vô hiệu chính thức của Sổ.",
        "Bản đồ ngành là sức giá trên chỉ số HOSE/133 mã theo dõi, không chứng minh luồng tiền ròng thực; BSC các đoạn về sức kéo trụ có khác nhau nên chỉ dùng bảng đóng góp cùng một chuẩn."
      ],
      "zaloPost": "Phiên 19/10, VN-Index mất 16,07 điểm và đóng ở 1.689,84 điểm. Tôi tiếp tục giữ trạng thái KHÔNG mở vị thế mới. Lý do không chỉ là mức giảm hôm nay: chỉ số đã đóng dưới đáy 1.690,56 của ngày 15/10, nằm dưới cả MA20, MA50 và MA200, trong khi số phiên phân phối còn 8 trên 25 phiên gần nhất.\n\nĐiều bảng điện dễ gây nhầm là số mã tăng vẫn nhiều hơn số mã giảm theo tập thống kê VNDIRECT: 153 mã tăng, 131 mã giảm. Như vậy không phải cổ phiếu nào cũng bị bán. Tuy nhiên, VN30 giảm 0,87% còn nhóm vốn hóa vừa tăng 0,33%. Sức ép tập trung vào một số trụ lớn, đặc biệt bất động sản; trong khi năng lượng và chăm sóc sức khỏe lại tăng theo chỉ số ngành. Đây mới là biến động giá, chưa đủ cơ sở khẳng định dòng tiền lớn vào ngành.\n\nGiá trị khớp lệnh theo tập VN-Index của VNDIRECT đạt khoảng 11.323 tỷ đồng, cao hơn phiên 16/10 nhưng mới bằng 0,937 lần bình quân 20 phiên trước. Vì giá giảm và lượng tiền khớp tăng, ngày 19/10 là một phiên phân phối mới. Cùng lúc, một phiên cũ ra khỏi cửa sổ 25 phiên nên tổng vẫn là 8; ngưỡng chặn mua từ 6 phiên chưa được gỡ.\n\nNẾU VN-Index chưa lấy lại 1.690,56, THÌ tôi không mua đuổi hồi và ưu tiên rà lại điểm dừng lỗ của từng cổ phiếu. NẾU chỉ số giảm dưới đáy mới 1.682,54, THÌ tiếp tục giảm rủi ro ở mã yếu thay vì bình quân giá xuống. NẾU thị trường lần lượt lấy lại MA20 tại 1.748,60, MA50 tại 1.774,57, MA200 tại 1.796,79, số phiên phân phối còn không quá 5 và có thanh khoản, độ rộng xác nhận, THÌ mới đánh giá lại việc mở vị thế.\n\nVới trạng thái phòng thủ, tỷ trọng cổ phiếu định hướng không quá 20%; hạn chế đòn bẩy và bảo toàn sức mua.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "HOSE — điểm tin giao dịch phiên 19/10, chỉ số, ngành và tổng khớp lệnh",
          "url": "https://web.stockbiz.vn/News/2026/10/19/1915522/hose-diem-tin-giao-dich-ngay-19-10-2026.aspx"
        },
        {
          "label": "Stockbiz — bảng thống kê chỉ số đúng phiên 19/10",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "VNDIRECT Finfo — kiểm toán lịch sử 261 phiên đồng nhất tới 19/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39250282942"
        },
        {
          "label": "BSC — diễn biến trụ, độ rộng và ngoại phiên 19/10",
          "url": "https://www.bsc.com.vn/en/bao-cao/16053-bsc-brief-19-10-the-market-declined-amid-selling-pressure-on-vic/"
        },
        {
          "label": "VNIndex.ai — dữ liệu phiên 19/10, giờ chốt và phạm vi khác",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "GitHub Actions — khóa giá EOD 133/133 và đối chiếu sau triển khai",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39249798965"
        },
        {
          "label": "GitHub — nhật ký nguồn, chứng cứ và bảng tự kiểm 19/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261019.md"
        }
      ]
    },
    {
      "id": "market-view-20261016",
      "date": "2026-10-16",
      "publishedAt": "16/10/2026 • Sau phiên",
      "edition": "Số 41",
      "sentiment": "cautious",
      "sentimentLabel": "KHÔNG",
      "dataStatus": "Giá 133/133 mã khóa EOD 16/10 VNDIRECT–CafeF/KBS • VN-Index/%, VN30, HNX đã đối chiếu HOSE/Stockbiz • giá trị khớp HOSE và độ rộng VNDIRECT chỉ 1 NGUỒN theo đúng phạm vi • khối ngoại khớp, tự doanh và basis chưa thống nhất",
      "title": "Hồi nhờ trụ ngân hàng, thanh khoản yếu — 8 phiên phân phối chưa được gỡ",
      "thesis": "VN-Index đóng 16/10/2026 tại 1.705,91 điểm (+7,56; +0,45%) nhưng vẫn nằm dưới MA20 1.754,09, MA50 1.776,30 và MA200 1.797,26. Giá trị khớp lệnh HOSE theo bảng Sở 9.966 tỷ đồng, thấp hơn mức bình quân 20 phiên trước 12.691,91 tỷ (tỷ lệ so sánh khoảng 0,785 lần, có giới hạn khác nguồn). Năm mã nâng điểm hàng đầu theo BSC góp khoảng 103,70% mức tăng, cho thấy lực kéo tập trung. Có 8 phiên phân phối còn hiệu lực/25 phiên, chặn cứng chưa gỡ. Nền XẤU, điểm −4/7 có giới hạn nguồn, quyết định KHÔNG mở vị thế mới.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "6 phút đọc",
      "rulebookVersion": "v3.3.1",
      "brief": {
        "headline": "Hồi nhờ trụ, thanh khoản chưa xác nhận xu hướng",
        "thesis": "Chỉ số tăng 7,56 điểm nhưng vẫn dưới MA20, MA50, MA200; nhóm vốn hóa lớn kéo điểm trong lúc thanh khoản khớp lệnh chỉ quanh 0,78 lần bình quân 20 phiên trước. Còn 8 phiên phân phối/25: chặn cứng tiếp tục có hiệu lực. Chưa có điều kiện mở vị thế mới.",
        "evidence": [
          {
            "label": "Xu hướng và rủi ro",
            "signal": "▼ Dưới MA20 / MA50 / MA200",
            "detail": "8 phiên phân phối còn hiệu lực • nền XẤU",
            "signalParts": [
              {
                "text": "▼ Dưới MA20 / MA50 / MA200",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "8 phiên phân phối",
                "tone": "negative"
              },
              {
                "text": " còn hiệu lực • ",
                "tone": "neutral"
              },
              {
                "text": "nền XẤU",
                "tone": "negative"
              }
            ],
            "text": "VN-Index 1.705,91 dưới MA20 1.754,09, MA50 1.776,30 và MA200 1.797,26; MA20 giảm so với cách 5 phiên. Chặn cứng khi số phiên phân phối còn từ 6 trở lên.",
            "tone": "negative"
          },
          {
            "label": "Khớp lệnh và sức kéo",
            "signal": "9.966 tỷ • ~0,785× TB20",
            "detail": "Top 5 mã kéo điểm ~103,70% mức tăng (BSC 1 nguồn)",
            "signalParts": [
              {
                "text": "9.966 tỷ",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "~0,785× TB20",
                "tone": "warning"
              }
            ],
            "detailParts": [
              {
                "text": "Top 5 kéo điểm ~103,70%",
                "tone": "warning"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "BSC 1 nguồn",
                "tone": "neutral"
              }
            ],
            "text": "HOSE công bố 9.966 tỷ khớp lệnh, khác BSC 9.934 tỷ do phạm vi/số; không gắn nhãn đã đối chiếu. BSC ghi top 5 mã VHM/CTG/BID/VPL/VCB góp 7,84 điểm khi VN-Index chỉ tăng 7,56.",
            "tone": "warning"
          },
          {
            "label": "Độ rộng và luân chuyển",
            "signal": "165 tăng / 118 giảm",
            "detail": "69 đứng giá • VN30 +0,63% / VNMID +0,40% / VNSML +0,25%",
            "signalParts": [
              {
                "text": "165 tăng",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "118 giảm",
                "tone": "negative"
              }
            ],
            "detailParts": [
              {
                "text": "69 đứng giá",
                "tone": "neutral"
              },
              {
                "text": " • ",
                "tone": "neutral"
              },
              {
                "text": "VN30 +0,63%",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "VNMID +0,40%",
                "tone": "positive"
              },
              {
                "text": " / ",
                "tone": "neutral"
              },
              {
                "text": "VNSML +0,25%",
                "tone": "positive"
              }
            ],
            "text": "Độ rộng theo tập thống kê VNDIRECT là 165/118/69, khác tập HOSE đầy đủ 174/120/69. Ngân hàng và dịch vụ bán lẻ tăng trong phiên, nhưng chưa có chuỗi giá trị khớp lệnh ngành để xác nhận tiền vào thực.",
            "tone": "neutral"
          }
        ],
        "actions": [
          "KHÔNG mở mua mới: chặn cứng còn 8 phiên phân phối/25; danh mục theo nguyên tắc phòng thủ, tỷ trọng cổ phiếu định hướng không quá 20%; giảm/không sử dụng đòn bẩy.",
          "NẾU phiên tới đóng dưới 1.690,56 (đáy đã công bố ngày 15/10) THÌ rà soát hạ phần cổ phiếu yếu theo dừng lỗ riêng từng mã; không bình quân giá xuống.",
          "NẾU chỉ số lần lượt lấy lại MA20 1.754,09, MA50 1.776,30, MA200 1.797,26; số phân phối còn ≤5 và thanh khoản, độ rộng xác nhận THÌ tính lại trạng thái trước khi cân nhắc giao dịch."
        ],
        "dataIntegrity": {
          "tone": "warning",
          "label": "EOD cổ phiếu 133/133 đã khóa VNDIRECT, đối chiếu CafeF 129 mã và KBS 4 ngoại lệ. Chuỗi giá VNDIRECT 259 phiên + giá 16/10 đã đối chiếu; giá trị khớp lệnh ngày 16 của HOSE 9.966 tỷ khác BSC 9.934 tỷ nên gắn 1 NGUỒN và ghi giới hạn so chuỗi lịch sử. Độ rộng VNDIRECT 1 NGUỒN. Không có Sổ người dùng; không xác nhận khối ngoại khớp hoặc basis.",
          "shortLabel": "EOD 133/133 • 8 phân phối/25 • khớp lệnh 1 nguồn"
        }
      },
      "metrics": [
        {
          "label": "CHỈ SỐ VN",
          "value": "1.705,91",
          "change": "+7,56 • +0,45%",
          "changeParts": [
            {
              "text": "+7,56",
              "tone": "positive"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "+0,45%",
              "tone": "positive"
            }
          ],
          "tone": "positive",
          "direction": "up",
          "snapshotState": "price_up"
        },
        {
          "label": "ĐỘ RỘNG SÀN TP.HCM",
          "value": "165 tăng / 118 giảm",
          "change": "69 tham chiếu • 2 mã sàn (tập VNDIRECT)",
          "valueParts": [
            {
              "text": "165 tăng",
              "tone": "positive"
            },
            {
              "text": " / ",
              "tone": "neutral"
            },
            {
              "text": "118 giảm",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "69 tham chiếu",
              "tone": "neutral"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "2 mã sàn",
              "tone": "negative"
            },
            {
              "text": " (tập VNDIRECT)",
              "tone": "neutral"
            }
          ],
          "tone": "neutral",
          "direction": "flat",
          "snapshotState": "neutral"
        },
        {
          "label": "GIÁ TRỊ KHỚP LỆNH",
          "value": "9.966 tỷ",
          "change": "~0,785× TB20 • khác số BSC 9.934 tỷ",
          "valueParts": [
            {
              "text": "9.966 tỷ",
              "tone": "neutral"
            }
          ],
          "changeParts": [
            {
              "text": "~0,785× TB20",
              "tone": "warning"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "khác số BSC 9.934 tỷ",
              "tone": "warning"
            }
          ],
          "tone": "warning",
          "direction": "down",
          "snapshotState": "liquidity_below_average"
        },
        {
          "label": "VỊ THẾ KỸ THUẬT",
          "value": "Dưới MA20 / MA50 / MA200",
          "change": "8 phiên phân phối • KHÔNG mua mới",
          "valueParts": [
            {
              "text": "Dưới MA20 / MA50 / MA200",
              "tone": "negative"
            }
          ],
          "changeParts": [
            {
              "text": "8 phiên phân phối",
              "tone": "negative"
            },
            {
              "text": " • ",
              "tone": "neutral"
            },
            {
              "text": "KHÔNG mua mới",
              "tone": "negative"
            }
          ],
          "tone": "negative",
          "direction": "down",
          "snapshotState": "technical_negative"
        }
      ],
      "backdrop": [
        "Đóng phiên 16/10/2026: VN-Index 1.705,91 điểm (+7,56; +0,45%), mở 1.702,37, cao 1.713,57, thấp 1.696,71. Chỉ số EOD đối chiếu HOSE, Stockbiz, VNDIRECT. Đóng cửa giữa biên phiên, không phải nến xác nhận đảo chiều theo nền xu hướng.",
        "Giá vẫn dưới MA20 1.754,09, MA50 1.776,30 và MA200 1.797,26. MA20 đi xuống từ 1.779,01 cách 5 phiên; đáy 20 phiên liền trước là 1.690,56 ngày 15/10. Ngày 16/10 giá đóng lại trên mốc 1.690,56 nhưng chưa lấy lại trung bình ngắn hạn.",
        "HOSE tổng kết khớp lệnh 9.966 tỷ, BSC công bố 9.934 tỷ cho VN-Index, VNDIRECT làm tròn khoảng 9,9 nghìn tỷ; số này khác GT giao dịch tổng 10.996,28 tỷ của chỉ số và không được tự trộn. Bình quân 20 phiên liền trước theo VNDIRECT 12.691,91 tỷ. Tỷ lệ tham khảo 0,785× nếu lấy HOSE làm tử số, nguồn khớp ngày 16 chỉ 1 NGUỒN, chưa khẳng định số chính xác tới ba chữ số sau dấu phẩy.",
        "Độ rộng theo phạm vi VNDIRECT gồm 165 tăng, 118 giảm, 69 đứng và 2 sàn, tỷ lệ 1,398 chưa đủ ngưỡng +1 (1,5). Theo phạm vi toàn HOSE được công bố có 174 tăng / 120 giảm / 69 đứng; KHÔNG dùng chung tập đếm. VN30 +0,63%, VNMID +0,40%, VNSML +0,25%; vốn hóa lớn phục hồi mạnh hơn nhóm nhỏ.",
        "Theo BSC, năm mã VHM +3,74, CTG +1,33, BID +1,25, VPL +0,81, VCB +0,71 đóng góp tổng 7,84 điểm trong mức tăng VN-Index 7,56 điểm, tương đương 103,70%; đây là chất lượng lực kéo chưa đồng đều. VNDIRECT ghi 17/19 ngành tăng, dẫn ở du lịch & giải trí +1,8%, ngân hàng +1,0%, dịch vụ bán lẻ +0,7%; bất động sản −0,2% và dầu khí −0,1%. Đây là sức GIÁ, không phải bằng chứng dòng vốn ròng ngành.",
        "Khối ngoại: bảng tổng HOSE ghi bán ròng khoảng 534 tỷ và BSC −534,43 tỷ, trong khi dữ liệu được gọi là khớp lệnh của HODL ghi khác, và ảnh chụp khác của HODL gắn tạm tính; không chấm điểm và không kích hoạt chặn khối ngoại bằng số chưa cùng phạm vi. Chưa khóa được số tự doanh và basis VN30F1M đủ độ tin cậy. Không gắn cờ sự kiện đặc biệt cho ngày 16/10 vì thông báo danh mục ETF hoán đổi hằng ngày không phải tái cơ cấu định kỳ.",
        "Số phân phối hợp lệ trong 25 phiên giảm từ 9 xuống 8 do ngày 11/09 ra khỏi cửa sổ; 15/10 loại vì đáo hạn VN30F2610, 16/10 tăng nên không tạo mới. 8 ≥ 6 vẫn là chặn cứng. Không có Sổ tự lưu của người dùng; không khẳng định mốc vô hiệu cũ trong Sổ đã gỡ."
      ],
      "levels": [
        {
          "label": "Hỗ trợ kỹ thuật kiểm soát",
          "value": "1.690,56",
          "note": "Đáy ngày 15/10 đã công bố trên website phiên trước; mốc tham chiếu rủi ro, chưa xác minh là mốc vô hiệu trong Sổ gốc người dùng."
        },
        {
          "label": "Đáy phiên 16/10",
          "value": "1.696,71",
          "note": "Stockbiz và VNIndex.ai cùng OHLC phiên 16/10; đây là đáy trong phiên, không tự động nâng mốc vô hiệu."
        },
        {
          "label": "Kháng cự gần MA20",
          "value": "1.754,09",
          "note": "TỰ TÍNH từ 20 giá đóng cửa đến ngày 16/10; MA20 dốc xuống."
        },
        {
          "label": "Kháng cự MA50",
          "value": "1.776,30",
          "note": "TỰ TÍNH từ 50 giá đóng cửa đến ngày 16/10; chỉ số còn thấp hơn."
        },
        {
          "label": "Kháng cự mạnh MA200",
          "value": "1.797,26",
          "note": "TỰ TÍNH từ 200 giá đóng cửa; không là mục tiêu lợi nhuận cam kết."
        },
        {
          "label": "Điều kiện xác nhận",
          "value": ">1.754,09 → >1.776,30 → >1.797,26",
          "note": "Cần kèm số phiên phân phối giảm còn ≤5 và khớp lệnh/độ rộng được đối chiếu; không tự mua theo việc vượt một đường MA."
        },
        {
          "label": "Xác nhận tăng rủi ro",
          "value": "Đóng <1.690,56",
          "note": "Tham chiếu đáy ngày 15/10; ưu tiên rà mã yếu, không tự điều chỉnh stop của từng cổ phiếu."
        }
      ],
      "confluence": {
        "score": -4,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA",
            "score": -1,
            "note": "Đóng 1.705,91 dưới MA20 1.754,09 và MA50 1.776,30; MA20 dốc xuống, giá cũng dưới MA200 1.797,26."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Phiên tăng +0,45%, HOSE khớp 9.966 tỷ so TB20 VNDIRECT quá khứ 12.691,91 tỷ ≈0,785× <0,8; đánh điểm có GIỚI HẠN khác nguồn, HOSE/BSC lệch 32 tỷ nhưng cùng phía ngưỡng."
          },
          {
            "factor": "Độ rộng",
            "score": 0,
            "note": "Tập VNDIRECT 165/118 = 1,398, chưa đạt ≥1,5; không sử dụng phạm vi tổng HOSE 174/120 cho phép so."
          },
          {
            "factor": "Chất lượng dòng tiền",
            "score": -1,
            "note": "BSC ghi top 5 mã kéo VN-Index 7,84/7,56 điểm ≈103,70% >70%; một nguồn, cho thấy phụ thuộc mã lớn dù 17/19 ngành cùng tăng theo VNDIRECT."
          },
          {
            "factor": "Khối ngoại",
            "score": 0,
            "note": "Khối ngoại khớp lệnh HOSE và chuỗi 5 phiên chưa khóa cùng phạm vi; HODL có xung đột trạng thái tạm, số tổng HOSE/BSC khác phạm vi; không dùng kích hoạt chặn."
          },
          {
            "factor": "Sức khỏe xu hướng / phân phối",
            "score": -1,
            "note": "8 phiên phân phối hợp lệ/25, 11/09 rời khỏi cửa sổ, 15/10 đã loại cờ đáo hạn, 16/10 không tạo phiên phân phối mới."
          },
          {
            "factor": "Phái sinh / vĩ mô",
            "score": 0,
            "note": "Basis VN30F1M 16/10 không đủ nguồn độc lập đúng hợp đồng; không có tín hiệu vĩ mô bất lợi cụ thể đủ xác minh để trừ điểm; không suy từ dữ liệu thiếu."
          }
        ],
        "veto": [
          "CHẶN CỨNG 8 phiên phân phối hợp lệ trong 25 phiên, lớn hơn ngưỡng 6; trạng thái KHÔNG bắt buộc, độc lập với tín hiệu tăng trong một phiên.",
          "Khối ngoại liên tục và mốc vô hiệu trong Sổ gốc: KHÔNG KIỂM ĐƯỢC; tuyệt đối không ghi đã qua. Không có chặn xả cuối nến vì đóng trong 1/3 giữa biên độ.",
          "Chế độ ĐẦY ĐỦ, điểm −4/7 có hai yếu tố giới hạn nguồn (thanh khoản/đóng góp). Loại cả hai yếu tố chưa đủ hai nguồn vẫn còn −2/7 và chặn phân phối, không đổi KHÔNG.",
          "Quy đổi 3 bước: thô KHÔNG dòng 1 → trần nền XẤU KHÔNG → chưa có Sổ người dùng nên bỏ kiểm chống đảo chiều → chốt KHÔNG dòng 1."
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "likelihood": "THẤP",
          "if": "TỐT — VN-Index vượt MA20 1.754,09, sau đó MA50 1.776,30 và MA200 1.797,26; số phân phối còn ≤5, dữ liệu khớp/độ rộng được xác nhận",
          "then": "Đánh giá lại trạng thái với dữ liệu EOD mới; không tự phát lệnh mua."
        },
        {
          "state": "neutral",
          "likelihood": "CAO",
          "if": "CƠ SỞ — giá còn trên vùng đáy 15/10 1.690,56 nhưng chưa lấy lại MA20 1.754,09; chặn 8 phiên phân phối chưa gỡ",
          "then": "KHÔNG mua mới; quản trị mã có sẵn và ưu tiên tiền mặt."
        },
        {
          "state": "risk_off",
          "likelihood": "TRUNG BÌNH",
          "if": "XẤU — có phiên tiếp theo đóng dưới đáy 15/10 là 1.690,56",
          "then": "Rà lại rủi ro và giảm phần yếu nếu chạm quy tắc dừng lỗ; không bình quân giá xuống."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "TỐT • THẤP — vượt 1.754,09 / 1.776,30 / 1.797,26 và phân phối ≤5",
          "then": "ĐÁNH GIÁ LẠI khi có thanh khoản và độ rộng xác minh; không tự mua."
        },
        {
          "state": "neutral",
          "if": "CƠ SỞ • CAO — giữ 1.690,56 nhưng dưới 1.754,09",
          "then": "KHÔNG mở mới, ưu tiên quản trị hàng đang nắm giữ."
        },
        {
          "state": "risk_off",
          "if": "XẤU • TRUNG BÌNH — đóng thủng 1.690,56 từ phiên tiếp theo",
          "then": "HẠ nhóm yếu nếu vi phạm nguyên tắc quản trị rủi ro của từng mã, không bắt đáy."
        }
      ],
      "actionTable": {
        "dataCutoff": "Hết phiên 16/10/2026; nguồn HOSE tổng hợp 17:05, Stockbiz EOD 15:10, VNDIRECT Finfo giá 133/133; chế độ ĐẦY ĐỦ có giới hạn GT khớp/độ rộng",
        "finalState": "KHÔNG",
        "score": "−4/7 có giới hạn: giá −1, thanh khoản −1 (HOSE/BSC lệch 32 tỷ), độ rộng 0, chất lượng top5 −1 (BSC một nguồn), ngoại 0, phân phối −1, phái sinh/vĩ mô 0. Loại yếu tố thiếu đối chiếu, chặn cứng vẫn giữ KHÔNG. Thô KHÔNG dòng 1 → trần nền XẤU KHÔNG → thiếu Sổ, bỏ chống đảo chiều → KHÔNG dòng 1.",
        "veto": "CHẶN CỨNG: 8 phân phối hợp lệ/25 (ngưỡng ≥6); ngoại khớp và mốc Sổ gốc KHÔNG KIỂM ĐƯỢC.",
        "marketState": "YẾU (nền XẤU, MA20 dốc xuống dù chỉ số hồi +0,45%)",
        "shortTrend": "Chưa đảo chiều: 1.705,91 dưới MA20 1.754,09 và MA50 1.776,30",
        "mediumTrend": "Yếu: dưới MA200 1.797,26",
        "liquidity": "HOSE khớp 9.966 tỷ; BSC khớp VN-Index 9.934 tỷ khác số/phạm vi; TB20 VNDIRECT lịch sử 12.691,91 tỷ, so khoảng 0,785× (tham khảo khác nguồn, nhãn 1 NGUỒN)",
        "breadth": "165 tăng / 118 giảm / 69 đứng / 2 sàn theo tập VNDIRECT (1 NGUỒN); toàn HOSE 174/120/69 khác tập, không trộn",
        "flow": "Top 5 VHM/CTG/BID/VPL/VCB góp 7,84/7,56 điểm (BSC 1 NGUỒN); chưa xác nhận vốn ròng ngành. HOSE VN30 +0,63%, VNMID +0,40%, VNSML +0,25%.",
        "foreign": "Chưa xác minh cùng phạm vi khối ngoại ròng khớp HOSE và chuỗi 5 phiên; bảng NN tổng HOSE/BSC khác HODL khớp lệnh.",
        "distributions": "8 phiên hợp lệ/25: 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10. 15/10 loại đáo hạn; 16/10 tăng không phát sinh phân phối.",
        "proprietary": "Chưa xác minh tổng tự doanh HOSE cuối phiên 16/10 theo phạm vi chuẩn.",
        "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới (dòng 1)",
        "moneyIn": "CHƯA CÓ bằng chứng tiền vào ròng bền vững theo ngành. Theo sức giá VNDIRECT: ngân hàng +1,0%, du lịch & giải trí +1,8%, dịch vụ bán lẻ +0,7%.",
        "moneyOut": "CHƯA CÓ bằng chứng tiền ra ròng theo ngành. Theo sức giá VNDIRECT: bất động sản −0,2%, dầu khí −0,1%.",
        "support": "Đáy trong phiên 16/10 là 1.696,71; đáy phiên 15/10 là 1.690,56 (đã công bố website trước, chưa khẳng định mốc Sổ gốc).",
        "resistance": "MA20 1.754,09; MA50 1.776,30; MA200 1.797,26.",
        "invalidation": "Mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC; mốc công bố trên website ngày 15/10 là 1.690,56, chỉ dùng làm điều kiện quan sát rủi ro.",
        "buyZone": "Không áp dụng — trạng thái KHÔNG dòng 1.",
        "reduceZone": "Nếu đóng dưới 1.690,56 hoặc mỗi mã riêng vi phạm dừng lỗ đã xác định thì rà và giảm phần yếu; không đặt stop mới tùy tiện.",
        "rr": "KHÔNG ÁP DỤNG như tỷ số giao dịch: chưa có mốc vô hiệu được đối chiếu từ Sổ người dùng; việc tăng 1 phiên không gỡ chặn cứng.",
        "margin": "Giảm / không sử dụng",
        "allocation": "Tỷ trọng định hướng theo Prompt dòng 1: ≤20% cổ phiếu / ≥80% tiền mặt, tùy rủi ro tài khoản",
        "bias": "Phòng thủ",
        "mainAction": "KHÔNG mở mới, rà các vị thế yếu và giữ kỷ luật dừng lỗ; đợi phân phối còn ≤5 cùng giá/thanh khoản/độ rộng xác nhận."
      },
      "finalConclusion": [
        "KHÔNG mua mới — nhịp tăng 16/10 chưa gỡ chặn cứng 8 phiên phân phối/25 và VN-Index vẫn dưới MA20/50/200.",
        "Rủi ro chính là phiên hồi được kéo bởi vài mã vốn hóa lớn, thanh khoản khớp suy yếu và số khối ngoại khác phạm vi, không đủ bằng chứng đổi nền xu hướng.",
        "NẾU đóng dưới 1.690,56 ở phiên tiếp theo THÌ ưu tiên giảm phần yếu; chỉ đánh giá lại khi lấy lại 1.754,09, 1.776,30, 1.797,26 và chặn phân phối còn ≤5."
      ],
      "focus": "KHÔNG • Nền XẤU • điểm −4/7 có giới hạn • 8 phân phối/25 • đáy 1.690,56 • MA20 1.754,09 / MA50 1.776,30 / MA200 1.797,26",
      "inference": "Kiểm toán: docs/market-source-log-20261016.md. HOSE/Stockbiz xác minh giá 16/10, VNDIRECT Finfo và CafeF/KBS khóa 133 giá. MA tính từ 259 hàng VNDIRECT EOD 01/10/2025–15/10/2026 cùng close 16/10 đã xác minh. Giá trị khớp HOSE 9.966 khác BSC 9.934, không gộp phạm vi; ngoại khớp/tự doanh/basis chưa xác minh. Bố cục khóa v2.2.2 giữ nguyên.",
      "limitations": [
        "Giá trị khớp 16/10 HOSE 9.966 tỷ khác số BSC 9.934 tỷ; đã dùng nguồn Sở, nhãn 1 NGUỒN. TB20 tính bằng 20 bản ghi VNDIRECT cũ, tỷ lệ 0,785 chỉ là so sánh qua hai nguồn, có giới hạn.",
        "Độ rộng 165/118/69 theo tập VNDIRECT khác 174/120/69 toàn HOSE; chỉ sử dụng một phạm vi nhất quán cho chấm điểm.",
        "Khối ngoại ròng khớp, chuỗi 5 phiên, tự doanh và basis chưa được đối chiếu đầy đủ. Không thay dữ liệu thiếu bằng số tổng giao dịch hay ước tính tạm tính.",
        "Không có Sổ gốc do người dùng cung cấp. Mốc đáy 1.690,56 đã xuất bản trên website trước đó nhưng chưa xác nhận là mốc vô hiệu trong Sổ gốc.",
        "Tỷ lệ đóng góp top 5 dựa bảng BSC một nguồn; sự phân hóa ngành là biến động giá, chưa đủ cơ sở gọi dòng tiền ròng theo ngành."
      ],
      "zaloPost": "VN-Index tăng 7,56 điểm trong phiên 16/10, trở lại 1.705,91 điểm. Nhưng tôi vẫn giữ trạng thái KHÔNG mở vị thế mới. Giá đã hồi, còn xu hướng thì chưa. Chỉ số vẫn nằm dưới các đường trung bình 20, 50 và 200 phiên; sau khi lọc ngày đáo hạn phái sinh, thị trường còn 8 phiên phân phối trong 25 phiên gần nhất. Điều kiện phòng thủ chưa được gỡ.\n\nĐiểm cần cảnh giác là chất lượng nhịp hồi. Theo thống kê BSC, năm mã vốn hóa lớn nâng chỉ số tổng cộng 7,84 điểm, vượt cả mức tăng 7,56 điểm của VN-Index vì các cổ phiếu khác kéo ngược. Nhóm ngân hàng là lực đỡ nổi bật, còn du lịch, giải trí và bán lẻ cũng có diễn biến tích cực. Tuy nhiên, hai nhóm bất động sản và dầu khí theo chỉ số ngành vẫn giảm nhẹ. Giá tăng ở một nhóm không đồng nghĩa đã có dòng tiền lớn vào bền vững.\n\nThanh khoản khớp lệnh HOSE theo bản Sở là 9.966 tỷ đồng, chỉ bằng khoảng 0,785 lần bình quân 20 phiên trước theo chuỗi VNDIRECT. Hai nhà cung cấp có sai khác về phạm vi nên tỷ lệ này được xem là tham khảo, không phải con số tuyệt đối đã đối chiếu. Khối ngoại cũng chưa có chuỗi khớp lệnh cùng phạm vi đủ chắc chắn để kết luận bán ròng liên tục.\n\nNẾU VN-Index còn dưới MA20 ở 1.754,09, THÌ tôi không mua đuổi nhịp hồi, ưu tiên rà soát cổ phiếu đã nắm giữ và quản trị dừng lỗ từng mã. NẾU phiên tới đóng dưới 1.690,56, THÌ giảm phần yếu thay vì bình quân giá xuống. NẾU lần lượt lấy lại 1.754,09, 1.776,30 và 1.797,26, số phiên phân phối giảm còn tối đa 5 và thanh khoản, độ rộng xác nhận, THÌ tôi mới xem xét lại trạng thái.\n\nTỷ trọng cổ phiếu tham chiếu khi phòng thủ không quá 20%; hạn chế sử dụng đòn bẩy và giữ nguồn lực chờ tín hiệu chắc hơn.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
      "sources": [
        {
          "label": "HOSE — tổng kết giao dịch 16/10 và VN30, VNMID, VNSML",
          "url": "https://web.stockbiz.vn/News/2026/10/16/1915138/hose-diem-tin-giao-dich-ngay-16-10-2026.aspx"
        },
        {
          "label": "Stockbiz — VN-Index, VN30 và HNX đóng cửa ngày 16/10",
          "url": "https://web.stockbiz.vn/IndicesStats.aspx"
        },
        {
          "label": "VNDIRECT — nhận định phiên 16/10, độ rộng và nhóm ngành",
          "url": "https://www.vndirect.com.vn/la-ban-thi-truong-16-10-2026-vn-index-tang-05-phuc-hoi-nho-nhom-von-hoa-lon/"
        },
        {
          "label": "BSC — đóng góp nhóm trụ và so sánh giá trị khớp lệnh",
          "url": "https://www.bsc.com.vn/bao-cao/16047-bsc-brief-16-10-vn-index-giu-moc-1700-luc-cau-bat-day-con-yeu"
        },
        {
          "label": "VNIndex.ai — lưu phiên 16/10 OHLC và độ rộng khác phạm vi",
          "url": "https://vnindex.ai/vn-index/phien/16-10-2026"
        },
        {
          "label": "GitHub — kiểm chứng cập nhật EOD 133/133 cổ phiếu ngày 16/10",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38907383924"
        },
        {
          "label": "GitHub — nhật ký dữ liệu, sai khác nguồn và 20 tiêu chí tự kiểm",
          "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261016.md"
        }
      ]
    },
                        {
        "id": "market-view-20261015",
        "date": "2026-10-15",
        "publishedAt": "15/10/2026 • Sau phiên",
        "edition": "Số 40",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "Giá 133/133 mã EOD đã khóa VNDIRECT–KBS • VN-Index, VN30, HNX giá/% EOD khớp Stockbiz • khớp lệnh và độ rộng HOSE 1 NGUỒN • sự kiện đáo hạn VN30F2610 xác minh HNX–DSC • khối ngoại khớp, tự doanh và basis chưa xác minh",
        "title": "Đáo hạn phái sinh, bảng điện phân hóa — 9 phiên phân phối còn chặn mua",
        "thesis": "VN-Index đóng 15/10/2026 tại 1.698,35 điểm (−6,52; −0,38%), dưới đáy 20 phiên liền trước 1.699,23 và dưới MA20 1.759,58, MA50 1.777,73, MA200 1.797,59. Khớp lệnh HOSE 14.017,48 tỷ, 1,099× TB20, tăng 33,76% so 14/10, nhưng đây là ngày đáo hạn VN30F2610: PHẢI loại phiên 15/10 khỏi đếm phân phối. Còn 9 phân phối hợp lệ trên 25 phiên, chặn cứng đang hiệu lực. Chế độ ĐẦY ĐỦ, nền XẤU, điểm −2/7, chốt KHÔNG mở vị thế mới.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.3.1",
        "brief": {
            "headline": "Đáo hạn phái sinh — 9 phiên phân phối còn chặn mua",
            "thesis": "VN-Index đóng dưới đáy 20 phiên trước và thấp hơn MA20/50/200, nhưng nội tại phân hóa: nhóm chứng khoán 15/15 mã trong danh mục tăng trong khi năng lượng 11/12 mã giảm. Thanh khoản cao hơn phiên trước song có cờ đáo hạn nên không tạo phiên phân phối hợp lệ mới. Chặn cứng 9 phiên/25 vẫn chi phối: KHÔNG mở mới.",
            "evidence": [
                {
                    "label": "Nền giá và xu hướng",
                    "signal": "▼ Dưới đáy 20 phiên & MA20/50/200",
                    "detail": "Nền XẤU • 9 phân phối còn hiệu lực.",
                    "signalParts": [
                        {
                            "text": "▼ Dưới đáy 20 phiên & MA20/50/200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Nền XẤU",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "9 phân phối còn hiệu lực",
                            "tone": "negative"
                        }
                    ],
                    "text": "VN-Index 1.698,35 dưới đáy 20 phiên trước 1.699,23; MA20 1.759,58 < MA20 cách 5 phiên 1.782,01, MA50 1.777,73 và MA200 1.797,59 đều nằm phía trên.",
                    "tone": "negative"
                },
                {
                    "label": "Khớp lệnh và cờ sự kiện",
                    "signal": "14.017,48 tỷ • 1,099× TB20",
                    "detail": "Tăng 33,76% so 14/10 • đáo hạn VN30F2610.",
                    "signalParts": [
                        {
                            "text": "14.017,48 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "1,099× TB20",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Tăng 33,76%",
                            "tone": "warning"
                        },
                        {
                            "text": " so 14/10 • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "đáo hạn VN30F2610",
                            "tone": "warning"
                        }
                    ],
                    "text": "Ngày 15/10 đáo hạn VN30F2610 theo quy tắc HNX và lịch DSC; theo V3.3.1 phải loại phiên này khỏi số phân phối và chấm yếu tố thanh khoản 0, dù giá giảm và giá trị khớp tăng.",
                    "tone": "warning"
                },
                {
                    "label": "Độ rộng và sức giá",
                    "signal": "152 tăng / 147 giảm",
                    "detail": "Nhóm chứng khoán 15/15 mã tăng • năng lượng 11/12 giảm.",
                    "signalParts": [
                        {
                            "text": "152 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "147 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Chứng khoán 15/15 mã tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "năng lượng 11/12 giảm",
                            "tone": "negative"
                        }
                    ],
                    "text": "Tỷ lệ tăng/giảm 1,034 trên universe VNDIRECT, không chứng minh dòng tiền rộng. Nhóm dẫn và nhóm yếu dựa trên sức GIÁ của 133 mã website, không mạo nhận vốn ròng toàn ngành.",
                    "tone": "neutral"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới khi CHẶN CỨNG 9 phiên phân phối/25 còn; giảm hoặc không dùng đòn bẩy, tỷ trọng cổ phiếu định hướng không quá 20%.",
                "NẾU phiên kế tiếp đóng dưới 1.690,56 (đáy 15/10, mốc vô hiệu mới) THÌ hạ phần cổ phiếu yếu; không bình quân xuống. Mốc này có hiệu lực từ phiên sau.",
                "NẾU lấy lại MA20 1.759,58, MA50 1.777,73, MA200 1.797,59 và số phân phối còn ≤5 cùng khớp/độ rộng xác nhận THÌ đánh giá lại trạng thái; không tự động mua."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "Giá 133/133 cổ phiếu khóa EOD VNDIRECT–KBS, VN-Index cùng ngày khớp Stockbiz. GT HOSE khớp và độ rộng 1 NGUỒN. Chuỗi VNDIRECT 259 phiên. Ngày đáo hạn 15/10 đã gắn cờ, phân phối còn 9. Không có Sổ người dùng. Ngoại, tự doanh và basis chưa xác minh đúng phạm vi.",
                "shortLabel": "EOD 133/133 • 9 phân phối đã lọc đáo hạn • HOSE 1 nguồn"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.698,35",
                "change": "−6,52 • −0,38%",
                "changeParts": [
                    {
                        "text": "−6,52",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,38%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "152 tăng / 147 giảm",
                "change": "51 tham chiếu • 6 mã sàn",
                "valueParts": [
                    {
                        "text": "152 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "147 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "51 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "6 mã sàn",
                        "tone": "negative"
                    }
                ],
                "tone": "neutral",
                "direction": "flat",
                "snapshotState": "neutral"
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "14.017,48 tỷ",
                "change": "1,099× TB20 • tăng 33,76% • đáo hạn",
                "valueParts": [
                    {
                        "text": "14.017,48 tỷ",
                        "tone": "neutral"
                    }
                ],
                "changeParts": [
                    {
                        "text": "1,099× TB20",
                        "tone": "warning"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "tăng 33,76%",
                        "tone": "warning"
                    },
                    {
                        "text": " • đáo hạn",
                        "tone": "warning"
                    }
                ],
                "tone": "warning",
                "direction": "up",
                "snapshotState": "liquidity_above_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "change": "9 phân phối hợp lệ • KHÔNG mua mới",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "9 phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "KHÔNG mua mới",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Đóng phiên 15/10/2026: VN-Index 1.698,35 (−6,52 điểm; −0,38%), mở 1.701,20, cao 1.709,54, thấp 1.690,56. VNDIRECT raw 15:04 và Stockbiz EOD 14:58 khớp tuyệt đối giá và phần trăm; VNIndex.ai 14:39 vẫn trước giờ chốt, không được lấy 1.693,96 làm giá cuối ngày.",
            "Giá nằm dưới đáy 20 phiên trước 1.699,23, MA20 1.759,58, MA50 1.777,73, MA200 1.797,59. MA20 dốc xuống so 1.782,01 cách năm phiên. Nền XẤU theo Prompt V3.3.1; không dự đoán đáy do chưa có bằng chứng xác nhận đổi hướng.",
            "Khớp lệnh HOSE 14.017,48 tỷ đồng theo nmValue VNDIRECT, bằng 1,099× TB20 12.751,05 tỷ, tăng 33,76% so phiên 14/10. Đây là GT khớp, KHÔNG trộn với 14.804,06 tỷ tổng giao dịch Stockbiz có thỏa thuận. 15/10 là đáo hạn VN30F2610 (HNX/DSC), sự kiện làm méo thanh khoản. Điều kiện giảm giá kèm thanh khoản tăng là tín hiệu THÔ; phiên 15/10 PHẢI LOẠI khỏi phép đếm phân phối. Còn 9 phiên phân phối/25; chặn cứng ≥6 vẫn chưa gỡ.",
            "Độ rộng theo VNDIRECT 152 mã tăng, 147 giảm, 51 đứng, 6 mã sàn, tỷ lệ 1,034: chưa chạm ngưỡng cộng/trừ điểm 1,5/0,67. VNIndex.ai lúc 14:39 ghi 152 tăng/152 giảm/100 đứng trên 404 mã, khác tập đếm/giờ nên không ghép. VN30 giảm 0,47%, HNX-Index giảm 2,21%; giá EOD các chỉ số đã đối chiếu Stockbiz.",
            "Bản đồ sức GIÁ 133 mã của website: chứng khoán 15/15 mã tăng (BSI +6,95%, BVS +3,92%, HCM +3,90%), ngân hàng 11/18 mã tăng (MBB +2,84%); năng lượng 11/12 giảm (BSR −6,31%, PVP −4,97%, PVT −4,25%), bất động sản 6/10 tăng nhưng VHM −3,44% và KOS −6,95%. Chưa có khớp lệnh theo ngành so TB20 và ròng ngoại theo ngành, KHÔNG khẳng định dòng tiền vào ra thật.",
            "Khối ngoại HOSE khớp lệnh chính thức và chuỗi năm phiên, tự doanh cùng phạm vi và basis EOD không khóa được. Stockbiz bảng NN tổng GD và VNIndex.ai ước tính giữa phiên không phải số khớp lệnh chính thức; các cổng đó ghi KHÔNG KIỂM ĐƯỢC và chấm 0. 15/10 là đúng ngày đáo hạn, không dùng basis trong yếu tố phái sinh; sự kiện được xác minh bằng HNX và CTCK DSC.",
            "Không có Sổ tự lưu do người dùng dán vào nên không khẳng định mốc vô hiệu hay chặn mang sang đã được gỡ. Chỉ có chặn cứng 9 phiên phân phối được tính độc lập; mốc đáy 1.690,56 công bố mới ngày 15/10 có hiệu lực kiểm chặn từ phiên kế tiếp."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu mới",
                "value": "1.690,56",
                "note": "Đáy phiên 15/10 VNDIRECT; công bố mới hôm nay, áp dụng kiểm chặn từ phiên kế tiếp, không tự thay thế mốc cũ trong Sổ không được cung cấp."
            },
            {
                "label": "Đáy phiên 14/10 đã bị đóng dưới",
                "value": "1.699,23",
                "note": "Đáy ngày 14/10 và đáy 20 phiên trước; 15/10 đóng 1.698,35 dưới đáy tham chiếu này. Không giả là mốc trong Sổ gốc."
            },
            {
                "label": "Kháng cự gần MA20",
                "value": "1.759,58",
                "note": "TỰ TÍNH trung bình 20 close đến 15/10, dốc xuống từ 1.782,01 cách 5 phiên."
            },
            {
                "label": "Kháng cự MA50",
                "value": "1.777,73",
                "note": "TỰ TÍNH 50 close nguồn VNDIRECT; giá dưới MA50, nền XẤU."
            },
            {
                "label": "Kháng cự mạnh MA200",
                "value": "1.797,59",
                "note": "TỰ TÍNH 200 close lịch sử đồng nhất VNDIRECT. Không là mục tiêu lợi nhuận cam kết."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.777,73 rồi >1.797,59",
                "note": "Phải lấy lại MA20 trước, gỡ chặn phân phối ≤5, có độ rộng/khớp lệnh xác minh rồi mới xét nâng trạng thái."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "Đóng <1.690,56 từ phiên sau",
                "note": "Mốc vô hiệu mới công bố ngày 15/10; giảm rủi ro theo stop riêng mã khi xảy ra."
            }
        ],
        "confluence": {
            "score": -2,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA",
                    "score": -1,
                    "note": "Giá 1.698,35 dưới MA20 1.759,58 và MA50 1.777,73, thủng đáy 20 phiên trước 1.699,23; cũng dưới MA200 1.797,59."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên đáo hạn VN30F2610 đã xác minh: yếu tố 2 buộc chấm 0. GT khớp 14.017,48 tỷ = 1,099× TB20 và +33,76% so phiên 14/10."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "152 tăng/147 giảm = 1,034 trên universe VNDIRECT, không chạm 1,5 hoặc 0,67."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Top 5 đóng góp chỉ số EOD chưa khóa đúng mốc và thiếu GT ngành/ngoại đồng phạm vi; dữ liệu VNIndex.ai lúc 14:39 không dùng để chấm đóng cửa."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Khối ngoại khớp lệnh HOSE cuối phiên và chuỗi 5 phiên chưa đối chiếu; số giữa phiên/ước tính không kích hoạt cổng cứng."
                },
                {
                    "factor": "Sức khỏe xu hướng / phân phối",
                    "score": -1,
                    "note": "9 phiên phân phối hợp lệ/25. 15/10 là ngày đáo hạn phái sinh, đã loại khỏi đếm dù khớp lệnh tăng; chặn cứng ≥6 vẫn hoạt động."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Ngày đáo hạn VN30F2610, quy tắc V3.3.1 không dùng basis; chưa có tin vĩ mô bất lợi được xác minh chắc chắn và liên quan trực tiếp để chấm −1."
                }
            ],
            "veto": [
                "CHẶN CỨNG: còn 9 phiên phân phối hợp lệ / 25 phiên, ≥6 theo V3.3.1. Phiên đáo hạn 15/10 đã LOẠI, không đếm thành 10.",
                "Chặn xả cuối phiên KHÔNG: đóng ở vị trí 0,410 biên ngày (1/3 giữa), không phải 1/3 dưới. Hai chặn dựa thanh khoản nếu xảy ra phải hạ thành mềm trong ngày sự kiện.",
                "Chặn khối ngoại liên tục và mốc vô hiệu trong Sổ cũ KHÔNG KIỂM ĐƯỢC, không tự coi là đã qua.",
                "Quy đổi: thô KHÔNG dòng 1 → trần nền XẤU KHÔNG → thiếu Sổ bỏ chống đảo chiều → KHÔNG dòng 1."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "TỐT — đóng vượt MA20 1.759,58, MA50 1.777,73 và MA200 1.797,59, số phân phối còn ≤5; GT khớp và độ rộng không méo bởi sự kiện, tất cả cổng đã kiểm",
                "then": "Tính lại điểm/nền/trạng thái, không tự mua khi chỉ vừa vượt giá."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "CƠ SỞ — chỉ số còn trên 1.690,56 nhưng dưới MA20 1.759,58, chặn 9 phân phối chưa gỡ",
                "then": "KHÔNG mở vị thế mới, chỉ quản trị hàng sẵn có, không tăng tỷ trọng và giảm đòn bẩy."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "XẤU — đóng dưới đáy 15/10 1.690,56 từ phiên kế tiếp với cổ phiếu yếu tiếp tục giảm",
                "then": "Giảm phần yếu, không bình quân giá xuống hay bắt đáy trên suy đoán."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • THẤP — lấy lại 1.759,58, 1.777,73, 1.797,59 và phân phối ≤5, có xác nhận thanh khoản/độ rộng",
                "then": "ĐÁNH GIÁ LẠI trạng thái khi đủ dữ liệu, không mua tự động."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • CAO — giữ trên 1.690,56 nhưng dưới 1.759,58",
                "then": "KHÔNG mua mới; giữ tỷ trọng phòng thủ và quản trị mã sẵn có."
            },
            {
                "state": "risk_off",
                "if": "XẤU • TRUNG BÌNH — đóng dưới 1.690,56 trong phiên tiếp theo",
                "then": "HẠ mã yếu, không dùng đòn bẩy bắt đáy; thực hiện stoploss từng mã."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 15/10/2026, VNDIRECT 15:04, Stockbiz 14:58; 133/133 cổ phiếu EOD khóa độc lập, chế độ ĐẦY ĐỦ",
            "finalState": "KHÔNG",
            "score": "−2/7: giá −1, phân phối −1; thanh khoản (ngày đáo hạn) 0, độ rộng 0, chất lượng dòng tiền 0, ngoại 0, phái sinh/vĩ mô 0. Thô KHÔNG dòng 1 → trần XẤU KHÔNG → thiếu Sổ bỏ chống đảo chiều → chốt KHÔNG dòng 1.",
            "veto": "CHẶN CỨNG còn 9 phân phối hợp lệ / 25 phiên, loại ngày đáo hạn 15/10. Chặn ngoại và mốc Sổ cũ KHÔNG KIỂM ĐƯỢC.",
            "marketState": "YẾU (nền XẤU, MA20 tiếp tục dốc xuống)",
            "shortTrend": "Yếu; dưới MA20 1.759,58, MA50 1.777,73 và đáy 20 phiên trước 1.699,23",
            "mediumTrend": "Yếu; dưới MA200 1.797,59",
            "liquidity": "14.017,48 tỷ đồng HOSE khớp lệnh • 1,099× TB20 12.751,05 tỷ • +33,76% so 14/10 • cờ đáo hạn • 1 NGUỒN",
            "breadth": "152 tăng / 147 giảm / 51 đứng / 6 mã sàn (universe VNDIRECT) • tỷ lệ 1,034 • 1 NGUỒN",
            "flow": "Sức giá phân hóa: chứng khoán 15/15 mã tăng, ngân hàng 11/18 tăng; năng lượng 11/12 mã giảm; không khẳng định dòng tiền ròng nhóm.",
            "foreign": "Chưa xác minh khối ngoại ròng HOSE chỉ khớp lệnh 15/10 và chuỗi 5 phiên. Stockbiz tổng GD và VNIndex.ai giữa phiên khác phạm vi.",
            "distributions": "9 phiên hợp lệ/25; tín hiệu thô 15/10 bị LOẠI vì đáo hạn VN30F2610.",
            "proprietary": "Chưa xác minh tổng tự doanh HOSE cuối phiên 15/10.",
            "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới (dòng 1)",
            "moneyIn": "Chưa xác nhận dòng tiền vào bền vững theo GT khớp ngành; chỉ quan sát chứng khoán 15/15 tăng, ngân hàng 11/18 tăng.",
            "moneyOut": "Chưa xác nhận vốn ra thực theo ngành; chỉ ghi sức giá năng lượng 11/12 giảm.",
            "support": "1.690,56 đáy 15/10 (mốc vô hiệu mới áp dụng từ phiên sau); 1.699,23 đáy 14/10 đã bị đóng dưới.",
            "resistance": "1.759,58 (MA20), 1.777,73 (MA50), 1.797,59 (MA200)",
            "invalidation": "Mốc cũ theo Sổ gốc KHÔNG KIỂM ĐƯỢC. Mốc mới 1.690,56 công bố 15/10, áp dụng từ phiên sau.",
            "buyZone": "Không áp dụng — trạng thái KHÔNG, dòng 1.",
            "reduceZone": "Giảm mã yếu nếu phiên tới đóng dưới 1.690,56 hoặc cổ phiếu riêng thủng stoploss đã xác định.",
            "rr": "(1.759,575−1.698,35)/(1.698,35−1.690,56) ≈ 7,86 chỉ số tham khảo, không phải tín hiệu mua.",
            "margin": "Giảm / không sử dụng",
            "allocation": "≤20% cổ phiếu / ≥80% tiền mặt — tỷ trọng định hướng cho KHÔNG dòng 1",
            "bias": "Phòng thủ",
            "mainAction": "KHÔNG mở mới; giữ kỷ luật cắt lỗ theo từng mã, hạ nhóm yếu, không mua đuổi nhóm hồi trong ngày đáo hạn."
        },
        "finalConclusion": [
            "KHÔNG mua mới — nền xu hướng XẤU, điểm −2/7 và 9 phiên phân phối hợp lệ/25 đang kích hoạt CHẶN CỨNG.",
            "Ngày đáo hạn VN30F2610 làm méo thanh khoản: dù ngày 15/10 giảm điểm và giá trị khớp tăng, phiên này không được tính là phân phối mới. Nhóm chứng khoán trong danh mục 133 mã vẫn bật nhưng thị trường chung chưa đổi xu hướng.",
            "NẾU đóng dưới 1.690,56 từ phiên sau thì giảm mã yếu; chỉ đánh giá lại khi lấy lại MA20 1.759,58, MA50 1.777,73, MA200 1.797,59 và số phân phối còn ≤5."
        ],
        "focus": "KHÔNG • nền XẤU • −2/7 • 9 phân phối/25 sau loại đáo hạn • hỗ trợ mới 1.690,56 • MA20 1.759,58 / MA50 1.777,73 / MA200 1.797,59 • khớp 1,099× TB20",
        "inference": "Log nội bộ docs/market-source-log-20261015.md; VNDIRECT 259 phiên EOD 01/10/2025–15/10/2026; VN-Index, VN30, HNX-Index đúng giá/% Stockbiz, thanh khoản khớp và độ rộng 1 NGUỒN vì khác phạm vi; 133 cổ phiếu đóng cửa VNDIRECT–KBS; ngày 15/10 đáo hạn VN30F2610 được HNX/DSC xác minh và loại khỏi đếm phân phối; không có Sổ nên chưa thể chống đảo chiều bằng trạng thái mang sang. Giữ nguyên layout khóa v2.2.2.",
        "limitations": [
            "VNDIRECT/Stockbiz khớp giá chỉ số và biến động, nhưng thanh khoản HOSE khớp lệnh và độ rộng không có nguồn thứ hai đồng phạm vi; gắn 1 NGUỒN. VNIndex.ai còn snapshot 14:39, không lấy làm giá EOD.",
            "Khối ngoại HOSE ròng khớp lệnh, 5 phiên liên tục, tự doanh tổng phiên và basis hợp đồng chưa có kiểm định cùng phạm vi; không dùng số tạm tính để kích hoạt chặn.",
            "Không có Sổ tự lưu người dùng dán vào; không tuyên bố mốc vô hiệu hoặc chặn cứng từ Sổ gốc đã qua. Mốc mới 1.690,56 chỉ áp dụng từ phiên sau.",
            "Bản đồ 133 mã là sức giá, không phải toàn HOSE và không chứng minh GT tiền vào/ra theo ngành. Cờ đáo hạn 15/10 loại phân phối dù điều kiện thô đạt.",
            "R:R hình học 7,86 là chỉ số tham khảo khi so MA20 với đáy mới, không tạo lệnh mua trong trạng thái KHÔNG."
        ],
        "zaloPost": "Tôi tiếp tục giữ trạng thái KHÔNG mở vị thế mới sau phiên 15/10. VN-Index đóng cửa tại 1.698,35 điểm, giảm 6,52 điểm. Chỉ số đã thấp hơn vùng đáy 1.699,23 của phiên trước, vẫn nằm dưới ba đường trung bình MA20, MA50 và MA200. Một nhịp hồi trong vài nhóm cổ phiếu chưa đủ để nói xu hướng chung đã đảo chiều.\n\nThanh khoản khớp lệnh sàn TP.HCM đạt 14.017,48 tỷ đồng, tăng 33,76% so với ngày 14/10 và bằng 1,099 lần bình quân 20 phiên. Hôm nay đúng ngày đáo hạn phái sinh VN30 tháng 10 nên thanh khoản có yếu tố sự kiện; theo quy tắc phân tích, tôi không cộng ngày hôm nay thành phiên phân phối hợp lệ. Sau khi loại cờ đáo hạn, thị trường vẫn có 9 phiên phân phối trong 25 phiên gần nhất. Chặn cứng đó chưa được gỡ.\n\nĐiểm đáng chú ý là bảng điện phân hóa mạnh. Độ rộng theo VNDIRECT ghi nhận 152 mã tăng, 147 mã giảm. Trong danh mục 133 cổ phiếu của website, cả 15 mã chứng khoán đều tăng, như BSI, BVS và HCM; 11 trên 18 mã ngân hàng cũng tăng. Trái lại, năng lượng có 11 trên 12 mã giảm, trong đó BSR và PVT suy yếu. Đây là sức giá của nhóm đang theo dõi, chưa phải bằng chứng tiền lớn vào hoặc rút khỏi toàn ngành.\n\nNẾU VN-Index giữ được đáy 1.690,56 nhưng còn dưới MA20 ở 1.759,58, THÌ tôi tiếp tục ưu tiên quản trị hàng sẵn có, không tăng tỷ trọng. NẾU đóng dưới 1.690,56 từ phiên tiếp theo, THÌ chủ động giảm phần yếu và không bình quân giá xuống. NẾU lần lượt lấy lại 1.759,58, 1.777,73 và 1.797,59, cùng độ rộng và thanh khoản xác nhận, số phiên phân phối giảm còn không quá 5, THÌ mới đánh giá lại trạng thái mua.\n\nTôi ưu tiên điểm dừng lỗ từng cổ phiếu, giảm đòn bẩy và giữ sức mua cho tín hiệu xác nhận thực sự; tỷ trọng cổ phiếu định hướng ở trạng thái phòng thủ không quá 20%.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — VNINDEX, GT khớp/độ rộng EOD 15/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-15&size=500"
            },
            {
                "label": "VNDIRECT Finfo — bảng lịch sử VNINDEX 259 phiên tới 15/10",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-15&size=500"
            },
            {
                "label": "Stockbiz — VNINDEX, HNX-Index, VN30 ngày 15/10/2026",
                "url": "https://web.stockbiz.vn/IndicesStats.aspx"
            },
            {
                "label": "HNX — thứ Năm thứ ba là ngày đáo hạn VN30",
                "url": "https://eoffice.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html"
            },
            {
                "label": "DSC — lịch VN30F2610 đáo hạn ngày 15/10/2026",
                "url": "https://www.dsc.com.vn/kien-thuc/dao-han-phai-sinh-la-gi"
            },
            {
                "label": "GitHub — xác minh giá EOD 133 cổ phiếu",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38703307264"
            },
            {
                "label": "GitHub — kiểm toán 259 phiên và loại ngày đáo hạn",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38703757255"
            }
        ]
    },
    {
        "id": "market-view-20261014",
        "date": "2026-10-14",
        "publishedAt": "14/10/2026 • Sau phiên",
        "edition": "Số 39",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "Giá 133/133 mã EOD 14/10 kiểm tra hai nguồn VNDIRECT–KBS/Cophieu68; VN-Index đóng cửa VNDIRECT và VNIndex.ai khớp; giá trị khớp HOSE/độ rộng 1 NGUỒN; ngoại, tự doanh, basis chưa xác minh",
        "title": "Thủng đáy 20 phiên — còn 9 phiên phân phối, giữ phòng thủ",
        "thesis": "VN-Index 14/10/2026 đóng 1.704,87 điểm, giảm 14,55 (−0,85%), dưới đáy 20 phiên trước 1.710,95. Đường MA20 1.765,80, MA50 1.779,02 và MA200 1.797,85 đều cao hơn giá; MA20 dốc xuống. Giá trị khớp lệnh HOSE 10.479,47 tỷ đồng (0,817× trung bình 20 phiên), độ rộng VNDIRECT 119 mã tăng/158 mã giảm. Còn 9 phiên phân phối còn hiệu lực/25 phiên; CHẶN CỨNG vẫn hoạt động dù 14/10 không tạo phiên phân phối mới. Chốt KHÔNG mở mua mới; số khối ngoại/tự doanh/basis thiếu kiểm chứng không được suy đoán.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.3.1",
        "brief": {
            "headline": "Thủng đáy 20 phiên — còn 9 phiên phân phối, giữ phòng thủ",
            "thesis": "Giá VN-Index đóng dưới đáy 20 phiên trước, MA20/50/200 tiếp tục nằm phía trên. Khớp lệnh yếu hơn trung bình 20 phiên và không tạo phân phối mới, nhưng 9 phiên phân phối còn hiệu lực đã đủ CHẶN CỨNG. Chứng khoán có sức giá hồi trong tập 133 mã, bất động sản yếu; chưa chứng minh có dòng tiền mới. KHÔNG mở vị thế mới.",
            "evidence": [
                {
                    "label": "Xu hướng kỹ thuật",
                    "signal": "▼ Dưới đáy 20 phiên và MA20 / MA50",
                    "detail": "MA200 1.797,85 • 9 phiên phân phối/25.",
                    "signalParts": [
                        {
                            "text": "▼ Dưới đáy 20 phiên và MA20 / MA50",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "MA200 1.797,85",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "9 phiên phân phối/25",
                            "tone": "negative"
                        }
                    ],
                    "text": "Giá 1.704,87 < đáy 20 phiên trước 1.710,95, < MA20 1.765,80, < MA50 1.779,02 và < MA200 1.797,85. MA20 giảm so với 1.786,53 năm phiên trước; nền xu hướng XẤU.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản khớp lệnh",
                    "signal": "10.479,47 tỷ • 0,817× TB20",
                    "detail": "Giảm 3,71% so với 13/10; 1 NGUỒN đúng phạm vi.",
                    "signalParts": [
                        {
                            "text": "10.479,47 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "0,817× TB20",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Giảm 3,71%",
                            "tone": "warning"
                        },
                        {
                            "text": " so với 13/10 • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "1 NGUỒN",
                            "tone": "warning"
                        }
                    ],
                    "text": "Khớp lệnh HOSE VNDIRECT nmValue, không gồm thỏa thuận. Bình quân 20 phiên liền trước 12.827,03 tỷ. Phiên giảm nhưng thanh khoản thấp hơn phiên trước, không cộng phiên phân phối mới.",
                    "tone": "warning"
                },
                {
                    "label": "Độ rộng và phân hóa",
                    "signal": "119 tăng / 158 giảm",
                    "detail": "Tỷ lệ 0,753 • bất động sản 7/10 mã giảm.",
                    "signalParts": [
                        {
                            "text": "119 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "158 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Tỷ lệ 0,753",
                            "tone": "warning"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "bất động sản 7/10 mã giảm",
                            "tone": "negative"
                        }
                    ],
                    "text": "Độ rộng HOSE tính theo VNDIRECT, universe khác VNIndex.ai 404 mã. Trong 133 mã website, chứng khoán 9/15 mã tăng nhưng bất động sản 7/10 mã giảm; chỉ gọi là sức giá, không khẳng định tiền vào/ra ngành.",
                    "tone": "negative"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới. CHẶN CỨNG 9 phiên phân phối/25 phiên và nền XẤU; tỷ trọng cổ phiếu định hướng ≤20%, giảm/không dùng đòn bẩy.",
                "NẾU phiên tiếp theo đóng dưới 1.699,23 (đáy 14/10, mốc công bố mới), THÌ hạ rủi ro mã yếu và không bình quân giá xuống.",
                "NẾU lấy lại 1.765,80, 1.779,02 rồi 1.797,85 cùng khớp lệnh/độ rộng xác nhận và số phân phối ≤5, THÌ tính lại trạng thái; không tự động mua."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "Giá 133/133 mã EOD đã đối chiếu • VN-Index giá/% khớp 2 nguồn • HOSE GT khớp và độ rộng 1 NGUỒN • 258 dòng VNDIRECT • ngoại, tự doanh, basis & Sổ cũ chưa kiểm chứng",
                "shortLabel": "133/133 giá EOD • CHẶN CỨNG 9/25 • số HOSE khớp 1 NGUỒN"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.704,87",
                "change": "−14,55 • −0,85%",
                "changeParts": [
                    {
                        "text": "−14,55",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,85%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "119 tăng / 158 giảm",
                "change": "60 tham chiếu • 5 mã sàn",
                "valueParts": [
                    {
                        "text": "119 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "158 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "60 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "5 mã sàn",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative"
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "10.479,47 tỷ",
                "change": "0,817× TB20 • giảm 3,71% so 13/10",
                "valueParts": [
                    {
                        "text": "10.479,47 tỷ",
                        "tone": "neutral"
                    }
                ],
                "changeParts": [
                    {
                        "text": "0,817× TB20",
                        "tone": "warning"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "giảm 3,71%",
                        "tone": "warning"
                    },
                    {
                        "text": " so với 13/10",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "change": "9 phiên phân phối • KHÔNG mua mới",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "9 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "KHÔNG mua mới",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Tổng quan cuối phiên 14/10/2026: VN-Index 1.704,87 điểm (−14,55; −0,85%), mở 1.720,91, cao 1.722,65, thấp 1.699,23. VNDIRECT và VNIndex.ai cùng xác nhận giá đóng và biên phiên. Đóng ở vị trí 0,241 của biên ngày (1/3 dưới), nhưng thanh khoản chỉ 0,817× TB20 nên KHÔNG kích hoạt chặn cứng xả cuối phiên riêng.",
            "Giá đóng thấp hơn đáy 20 phiên LIỀN TRƯỚC là 1.710,95. VN-Index nằm dưới MA20 1.765,80, MA50 1.779,02 và MA200 1.797,85; MA20 giảm từ 1.786,53 năm phiên trước. Nền xu hướng XẤU theo V3.3.1; không tự coi đáy mới 1.699,23 là đáy đã xác nhận đảo chiều.",
            "HOSE khớp lệnh 10.479,47 tỷ, thấp hơn phiên 13/10 khoảng 3,71% và bằng 0,817× mức trung bình 20 phiên 12.827,03 tỷ. Chuỗi VNDIRECT 258 phiên đồng nhất từ 01/10/2025 đến 14/10/2026; không ghép tổng giao dịch 13,53 nghìn tỷ có thỏa thuận của VNIndex.ai. Dù giá giảm hơn 0,2%, thanh khoản so phiên trước giảm nên KHÔNG có phiên phân phối mới. Số phân phối còn hiệu lực vẫn là 9/25, vượt ngưỡng chặn cứng.",
            "Độ rộng theo VNDIRECT 119 mã tăng, 158 giảm, 60 đứng, 5 sàn; tỷ lệ 0,753, không chạm ngưỡng trừ điểm 0,67. VNIndex.ai tính trên 404 mã, có 128 tăng, 162 giảm, 114 đứng; không trộn hai tập. VNIndex.ai ghi top 5 đè điểm gồm VIC −5,76, VHM −5,76, VPL −0,96, GVR −0,78, LPB −0,74; tổng −14,00 điểm, tương đương 96,2% mức giảm 14,55 điểm, cho thấy sức ép tập trung vào trụ, không chứng minh bán dàn trải.",
            "Bản đồ sức giá từ DANH MỤC 133 mã: ngân hàng 7 tăng/6 giảm/5 đứng; chứng khoán 9 tăng/3 giảm/3 đứng, FTS +3,75%, TVS +3,17%, SHS +2,56%; bất động sản 1 tăng/7 giảm/2 đứng, VHM −5,28%, NVL −3,59%, KOS −6,92%; công nghiệp 5 tăng/3 giảm, VGS +7,74%, HSG +4,48%. Đây không phải toàn HOSE và không chứng minh tiền ròng ngành do thiếu dữ liệu thanh khoản, khối ngoại theo nhóm.",
            "Khối ngoại khớp lệnh HOSE ròng và chuỗi năm phiên chưa khóa chính thức. VNIndex.ai có ước tính ròng không nhất quán giữa các mục, không dùng làm chặn cứng. Tự doanh và basis VN30F1M chưa được xác minh cùng phạm vi; các yếu tố này chấm 0, chặn tương ứng KHÔNG KIỂM ĐƯỢC. Không có Sổ tự lưu do người dùng dán vào: không tự lấy mốc vô hiệu cũ hay chặn cứng mang sang để chứng minh đã gỡ."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu mới",
                "value": "1.699,23",
                "note": "Đáy 14/10/2026; mốc công bố mới áp dụng kiểm tra từ phiên sau. Mốc 1.700 chỉ là tham chiếu tâm lý."
            },
            {
                "label": "Đáy phiên trước / hỗ trợ đã thủng",
                "value": "1.710,95",
                "note": "Đáy 13/10/2026, cũng là đáy 20 phiên trước; chỉ số 14/10 đóng dưới 1.710,95."
            },
            {
                "label": "Kháng cự gần MA20",
                "value": "1.765,80",
                "note": "Bình quân giá đóng cửa 20 phiên từ VNDIRECT, dốc xuống; không coi như vùng mua khi còn chặn cứng."
            },
            {
                "label": "Kháng cự MA50",
                "value": "1.779,02",
                "note": "Bình quân 50 phiên cùng nguồn; giá còn dưới MA50."
            },
            {
                "label": "Kháng cự mạnh MA200",
                "value": "1.797,85",
                "note": "Bình quân 200 phiên nguồn VNDIRECT. Không hứa mục tiêu lợi nhuận."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.779,02 rồi >1.797,85",
                "note": "Chỉ xét lại khi đóng vượt các đường trung bình cùng xác nhận độ rộng, khớp lệnh và phân phối ≤5."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "Đóng <1.699,23 từ phiên sau",
                "note": "Mốc đáy ngày 14/10, không tự thay mốc đang hiệu lực từ Sổ gốc khi không có Sổ."
            }
        ],
        "confluence": {
            "score": -2,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA",
                    "score": -1,
                    "note": "Close 1.704,87 < MA20 1.765,80, MA50 1.779,02, MA200 1.797,85; đã dưới đáy 20 phiên trước 1.710,95."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm −0,85%, khớp lệnh 10.479,47 tỷ = 0,817× TB20, chưa đạt ≥1,2× để trừ điểm."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "119 tăng / 158 giảm = 0,753, lớn hơn ngưỡng −1 là ≤0,67 và nhỏ hơn ngưỡng +1 là ≥1,5."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Top 5 kéo giảm −14,00 điểm tương đương 96,2% mức giảm chỉ số, là tập trung trụ; không đủ điều kiện bán dàn trải để trừ điểm, không gán +1 cho phiên giảm."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Thiếu ròng khớp lệnh HOSE cuối phiên và chuỗi 5 phiên đồng phạm vi; VNIndex.ai chỉ ước tính, không bật chặn."
                },
                {
                    "factor": "Phiên phân phối",
                    "score": -1,
                    "note": "Còn 9 phiên phân phối hợp lệ trên 25 phiên, cao hơn ngưỡng ≥5 để trừ điểm và ≥6 chặn cứng; 14/10 không tạo thêm."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Basis đúng hợp đồng EOD không xác minh; không có tin vĩ mô bất lợi đủ nguồn cùng mốc để trừ điểm."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 9 phiên phân phối hợp lệ/25 phiên ≥6 theo V3.3.1; phải chuyển phòng thủ dù điểm đồng thuận chỉ −2/7.",
                "Chặn xả cuối phiên riêng KHÔNG kích hoạt: vị trí đóng 0,241 trong 1/3 dưới, nhưng khớp lệnh chỉ 0,817× TB20 (<1×).",
                "Chặn xanh điểm/đỏ mã KHÔNG kích hoạt vì VN-Index giảm điểm. Chặn khối ngoại và mốc vô hiệu đang hiệu lực trong Sổ cũ KHÔNG KIỂM ĐƯỢC, không gọi là đã gỡ.",
                "Đường đi: trạng thái thô KHÔNG (dòng 1) → trần nền XẤU KHÔNG → không có Sổ để áp chống đảo chiều → chốt KHÔNG dòng 1."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "TỐT — VN-Index đóng trên MA20 1.765,80, rồi MA50 1.779,02, MA200 1.797,85; độ rộng và GT khớp lệnh đồng thuận, phân phối giảm còn ≤5, dữ liệu ngoại chính thức đã kiểm được",
                "then": "Tính lại xu hướng, điểm và toàn bộ cổng; không tự động mua chỉ vì vượt giá."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "CƠ SỞ — còn giữ trên 1.699,23 nhưng dưới MA20 1.765,80, số phiên phân phối còn cao",
                "then": "Tiếp tục KHÔNG mở mua mới, chỉ quản trị hàng đang khỏe, giảm đòn bẩy và không tăng tỷ trọng."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "XẤU — VN-Index đóng dưới đáy 14/10 tại 1.699,23 từ phiên sau",
                "then": "Hạ phần cổ phiếu yếu, không bình quân giá xuống, không tự suy diễn mốc hỗ trợ xa."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • THẤP — vượt MA20 1.765,80, MA50 1.779,02 và MA200 1.797,85; phân phối ≤5, thanh khoản/độ rộng xác nhận",
                "then": "ĐÁNH GIÁ LẠI cổng, không mua tự động khi còn điều kiện chưa xác minh."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • CAO — đóng trên 1.699,23 nhưng còn dưới 1.765,80",
                "then": "GIỮ PHÒNG THỦ, KHÔNG mua mới; quản trị điểm dừng lỗ của từng mã."
            },
            {
                "state": "risk_off",
                "if": "XẤU • TRUNG BÌNH — đóng dưới 1.699,23 từ phiên kế tiếp",
                "then": "GIẢM các mã yếu; không dùng đòn bẩy bắt đáy và không bình quân giá xuống."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 14/10/2026; VNDIRECT 15:04, VNIndex.ai 15:00, giá 133/133 mã hậu ATC; chế độ ĐẦY ĐỦ",
            "finalState": "KHÔNG",
            "score": "−2/7: giá −1; phân phối −1; thanh khoản, độ rộng, chất lượng dòng tiền, ngoại và phái sinh/vĩ mô đều 0. Thô KHÔNG dòng 1 → trần XẤU KHÔNG → thiếu Sổ bỏ chống đảo chiều → chốt KHÔNG dòng 1",
            "veto": "CHẶN CỨNG 9 phiên phân phối / 25 phiên. Chặn ngoại và mốc trong Sổ cũ KHÔNG KIỂM ĐƯỢC",
            "marketState": "YẾU (nền XẤU, MA20 dốc xuống)",
            "shortTrend": "Yếu, dưới MA20 1.765,80 và MA50 1.779,02, vừa thủng đáy 20 phiên trước 1.710,95",
            "mediumTrend": "Yếu, dưới MA200 1.797,85",
            "liquidity": "10.479,47 tỷ HOSE khớp lệnh; 0,817× TB20 12.827,03 tỷ; giảm 3,71% so 13/10 (1 NGUỒN)",
            "breadth": "119 tăng / 158 giảm / 60 đứng / 5 mã sàn; tỷ lệ 0,753 theo universe VNDIRECT (1 NGUỒN)",
            "flow": "Top 5 mã đè −14,00 điểm tập trung VIC, VHM, VPL, GVR, LPB; sức giá chứng khoán tốt hơn bất động sản trong tập 133 mã, chưa xác minh dòng tiền ngành",
            "foreign": "Chưa xác minh ròng HOSE khớp lệnh chính thức 14/10 và chuỗi 5 phiên; số ước tính khác nhau giữa các mục VNIndex.ai",
            "distributions": "9 phiên hợp lệ/25; phiên 14/10 không thêm do giá trị khớp lệnh thấp hơn ngày trước",
            "proprietary": "Chưa xác minh tổng tự doanh khớp lệnh 14/10",
            "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới (dòng 1)",
            "moneyIn": "Chưa có nhóm xác nhận tiền vào bền vững; chỉ quan sát sức giá nhóm chứng khoán 9/15 mã tăng, công nghiệp 5/8 tăng",
            "moneyOut": "Chưa xác nhận vốn rút theo nhóm; sức giá bất động sản yếu 7/10 giảm, tiêu dùng 3/3 giảm",
            "support": "1.699,23 đáy 14/10 (mốc mới hiệu lực phiên sau); 1.710,95 đáy ngày 13/10 đã bị đóng dưới; mốc 1.700 chỉ tham chiếu tâm lý",
            "resistance": "1.765,80 MA20; 1.779,02 MA50; 1.797,85 MA200",
            "invalidation": "Không có Sổ gốc để kiểm mốc cũ; mốc mới công bố ngày 14/10 là 1.699,23, áp dụng từ phiên sau",
            "buyZone": "Không áp dụng — trạng thái KHÔNG (dòng 1)",
            "reduceZone": "Hạ rủi ro phần yếu nếu phiên kế tiếp đóng dưới 1.699,23 hoặc cổ phiếu thủng stoploss có căn cứ",
            "rr": "(1.765,80 − 1.704,87)/(1.704,87 − 1.699,23) ≈ 10,80 là R:R hình học chỉ số tham khảo, không bật tín hiệu mua",
            "margin": "Giảm hoặc không sử dụng",
            "allocation": "≤20% cổ phiếu / ≥80% tiền mặt — tỷ trọng định hướng theo trạng thái KHÔNG dòng 1",
            "bias": "Phòng thủ",
            "mainAction": "KHÔNG mua mới; rà điểm dừng lỗ, giảm mã yếu và tránh bắt đáy khi chặn phân phối chưa gỡ."
        },
        "finalConclusion": [
            "KHÔNG mở vị thế mới: VN-Index đóng dưới đáy 20 phiên, nền XẤU, chặn cứng 9 phiên phân phối/25 phiên còn hiệu lực.",
            "Thanh khoản HOSE khớp lệnh chỉ 0,817× TB20, không có phiên phân phối mới nhưng chưa có bằng chứng dòng tiền hồi phục bền vững; top trụ VIC và VHM đè chỉ số.",
            "NẾU phiên sau đóng dưới 1.699,23 thì hạ rủi ro; chỉ xét lại trạng thái khi lấy lại MA20 1.765,80, MA50 1.779,02, MA200 1.797,85 và số phân phối về ≤5."
        ],
        "focus": "KHÔNG dòng 1 • nền XẤU • −2/7 • 9 phân phối/25 • 1.699,23 mốc vô hiệu mới • MA20 1.765,80 / MA50 1.779,02 / MA200 1.797,85 • khớp 0,817× TB20",
        "inference": "Nhật ký dữ liệu nội bộ docs/market-source-log-20261014.md; giá 133/133 mã EOD 14/10 từ VNDIRECT–KBS, riêng ICG no-trade VNDIRECT–Cophieu68 0 khớp. VN-Index 1.704,87 đối chiếu VNIndex.ai chính xác, lịch sử 258 phiên VNDIRECT 01/10/2025–14/10/2026. Thanh khoản khớp và độ rộng HOSE 1 NGUỒN do khác phạm vi các trang tổng; thiếu Sổ gốc, ngoại, tự doanh và basis không đánh giá cổng tương ứng. Giữ nguyên layout khóa v2.2.2.",
        "limitations": [
            "Giá và % VN-Index hai nguồn; GT khớp HOSE và độ rộng chỉ 1 NGUỒN đồng phạm vi. VNIndex.ai có tổng GD gồm thỏa thuận và universe 404 mã khác VNDIRECT.",
            "Khối ngoại ròng khớp lệnh HOSE, chuỗi 5 phiên, tự doanh EOD và basis đúng hợp đồng chưa đối chiếu; không đưa số ước tính làm căn cứ chặn cứng.",
            "Không có Sổ tự lưu từ người dùng nên không kiểm được mốc/chặn cứng kế thừa; mốc mới 1.699,23 công bố hôm nay áp dụng từ phiên sau.",
            "Bản đồ 133 mã chỉ là sức giá, chưa có GT khớp lệnh và ngoại ròng theo ngành so với TB20, không thể suy tiền vào/ra thực.",
            "R:R 10,80 là phép đo tham khảo không thể đảo trạng thái KHÔNG do chặn cứng."
        ],
        "zaloPost": "Tôi tiếp tục giữ trạng thái KHÔNG mở vị thế mới sau phiên 14/10. VN-Index đóng 1.704,87 điểm, giảm 14,55 điểm. Có một chi tiết cần chú ý: chỉ số đã đóng dưới đáy 20 phiên trước đó, trong khi các đường trung bình MA20, MA50 và MA200 vẫn nằm phía trên. Đây chưa phải cấu trúc đủ khỏe để vội bắt đáy.\n\nGiá trị khớp lệnh trên sàn TP.HCM là 10.479,47 tỷ đồng, bằng 0,817 lần bình quân 20 phiên và giảm 3,71% so với ngày 13/10. Vì thanh khoản thấp hơn phiên trước, hôm nay không tạo thêm phiên phân phối mới. Tuy nhiên, 25 phiên gần nhất vẫn còn 9 phiên phân phối hợp lệ. Chặn cứng này chưa được gỡ, dù một vài cổ phiếu có nhịp hồi.\n\nĐộ rộng theo VNDIRECT là 119 mã tăng và 158 mã giảm. Điểm giảm tập trung nhiều vào VIC, VHM và một số cổ phiếu trụ; vì vậy không nên hiểu rằng mọi nhóm đều bị bán như nhau. Trong danh mục 133 mã theo dõi, chứng khoán có 9 mã tăng trên 15 mã, với FTS, TVS và SHS nổi bật về giá. Ngược lại, bất động sản có 7 mã giảm trên 10 mã, trong đó VHM và NVL yếu. Đây chỉ là quan sát sức giá, chưa đủ chứng cứ để khẳng định dòng tiền lớn đã trở lại ngành nào.\n\nỞ phiên tới, NẾU VN-Index giữ trên đáy 1.699,23 nhưng vẫn dưới vùng MA20 1.765,80, THÌ tôi tiếp tục quản trị hàng sẵn có, không mở mua mới. NẾU đóng cửa dưới 1.699,23, THÌ giảm vị thế yếu, tuyệt đối không bình quân giá xuống. NẾU lấy lại 1.765,80, tiếp theo 1.779,02 và 1.797,85 với thanh khoản, độ rộng xác nhận, đồng thời số phiên phân phối giảm về mức cho phép, THÌ mới đánh giá lại khả năng mở vị thế.\n\nViệc quan trọng là rà điểm dừng lỗ từng mã, giảm đòn bẩy và giữ tiền để chờ tín hiệu rõ hơn. Trong trạng thái phòng thủ, tỷ trọng cổ phiếu định hướng không quá 20%. Một nhịp hồi đơn lẻ không đủ thay thế kỷ luật quản trị rủi ro.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — VNINDEX và độ rộng EOD 14/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-14&size=500"
            },
            {
                "label": "VNDIRECT Finfo — nguồn lịch sử 258 phiên, giá trị khớp lệnh, MA và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-14&size=500"
            },
            {
                "label": "VNIndex.ai — giá, biên và đóng góp điểm cuối phiên 14/10",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "Cophieu68 — ICG 14/10 không có khớp lệnh, giá 10.400 đồng",
                "url": "https://cophieu68.vn/quote/history.php?id=ICG"
            },
            {
                "label": "GitHub Actions — khóa giá 133/133 và triển khai EOD",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38534278663"
            },
            {
                "label": "GitHub Actions — kiểm định 258 dòng lịch sử VNDIRECT",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38532674509"
            }
        ]
    },
    {
        "id": "market-view-20261013",
        "date": "2026-10-13",
        "publishedAt": "13/10/2026 • Sau phiên",
        "edition": "Số 38",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT Finfo + KBS exact-date: 133/133 mã đã khóa EOD • VNINDEX và % biến động khớp VNIndex.ai + Rồng Việt • khớp lệnh HOSE và độ rộng: 1 NGUỒN • khối ngoại chính thức, tự doanh và basis: Chưa xác minh",
        "title": "Trụ giữ điểm, độ rộng yếu — 9 phiên phân phối buộc phòng thủ",
        "thesis": "Dữ liệu hết phiên 13/10/2026, chốt sau ATC. VN-Index ở 1.719,42 điểm, giảm 1,56 điểm (−0,09%), chỉ số đi ngang theo ngưỡng V3.3.1 nhưng 89 mã tăng/198 mã giảm trên bộ VNDIRECT. Giá nằm dưới MA20 1.771,06, MA50 1.779,64, MA200 1.797,85; thanh khoản khớp lệnh 10.882,86 tỷ đồng (0,840× TB20). Còn 9 phiên phân phối trong 25 phiên, kích hoạt CHẶN CỨNG. Chế độ ĐẦY ĐỦ, nền XẤU, điểm −3/7. Trạng thái KHÔNG: không mở vị thế mới.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.3.1",
        "brief": {
            "headline": "Trụ giữ điểm, độ rộng yếu — 9 phiên phân phối buộc phòng thủ",
            "thesis": "VN-Index chỉ giảm 0,09%, nhưng 198 mã giảm so với 89 mã tăng; VN30, vốn hóa vừa và nhỏ yếu hơn chỉ số. Thị trường chưa lấy lại các đường trung bình, còn 9 phiên phân phối hiệu lực. CHẶN CỨNG áp đảo điểm số: KHÔNG mở vị thế mới, ưu tiên phòng thủ.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ Dưới MA20 / MA50 / MA200",
                    "detail": "Nền XẤU • 9 phiên phân phối hợp lệ.",
                    "signalParts": [
                        {
                            "text": "▼ Dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Nền XẤU",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "9 phiên phân phối",
                            "tone": "negative"
                        }
                    ],
                    "text": "VN-Index 1.719,42 dưới MA20 1.771,06, MA50 1.779,64 và MA200 1.797,85. MA20 thấp hơn 1.790,21 ở thời điểm năm phiên trước; chặn 9 phiên phân phối còn hiệu lực.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng & lan tỏa",
                    "signal": "89 tăng / 198 giảm",
                    "detail": "Tỷ lệ 0,449 • VN30 −0,45% • VNMID −0,71% • VNSML −0,59%.",
                    "signalParts": [
                        {
                            "text": "89 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "198 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Tỷ lệ 0,449",
                            "tone": "negative"
                        },
                        {
                            "text": " • VN30 −0,45%",
                            "tone": "negative"
                        },
                        {
                            "text": " • VNMID −0,71%",
                            "tone": "negative"
                        },
                        {
                            "text": " • VNSML −0,59%",
                            "tone": "negative"
                        }
                    ],
                    "text": "Độ rộng nguồn VNDIRECT (89/198/69) chưa cùng universe VNIndex.ai (93/201/110), không trộn. Mức giảm ít của chỉ số chủ yếu phản ánh phân hóa trụ, không xác nhận dòng tiền lan tỏa.",
                    "tone": "negative"
                },
                {
                    "label": "Khớp lệnh HOSE",
                    "signal": "10.882,86 tỷ • 0,840× TB20",
                    "detail": "Tăng 2,23% so với 12/10; chỉ số biến động dưới 0,2%.",
                    "signalParts": [
                        {
                            "text": "10.882,86 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "0,840× TB20",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Tăng 2,23%",
                            "tone": "warning"
                        },
                        {
                            "text": " so với 12/10 • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "biến động dưới 0,2%",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Chỉ tính khớp lệnh nmValue VNDIRECT, không gồm thỏa thuận. Phiên 13/10 giảm 0,09% nên được xếp đi ngang, không phải phiên giảm ≥0,2%; không cộng thêm phiên phân phối.",
                    "tone": "warning"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới. Chặn cứng 9 phiên phân phối / 25 phiên, nền XẤU; định hướng ≤20% cổ phiếu và ≥80% tiền mặt, giảm/không dùng đòn bẩy.",
                "NẾU VN-Index đóng dưới 1.710,95 từ phiên kế tiếp: hạ rủi ro mã yếu, không bình quân giá xuống. Mốc 1.710,95 được công bố mới 13/10, không giả là mốc trong Sổ phiên trước.",
                "NẾU lấy lại MA20 1.771,06, MA50 1.779,64 rồi MA200 1.797,85 cùng xác nhận độ rộng/khớp lệnh và số phiên phân phối về ≤5: tính lại các cổng, chưa tự động mở mới."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "133/133 mã EOD VNDIRECT–KBS ngày 13/10; giá chỉ số 2 nguồn, HOSE khớp lệnh và độ rộng 1 NGUỒN; chuỗi 257 phiên cùng nguồn; chưa có Sổ người dùng, khối ngoại chính thức/tự doanh/basis chưa xác minh",
                "shortLabel": "EOD 133/133 • 9 phiên phân phối • số lõi một phần 1 NGUỒN"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.719,42",
                "change": "−1,56 • −0,09%",
                "changeParts": [
                    {
                        "text": "−1,56",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,09%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "89 tăng / 198 giảm",
                "change": "69 tham chiếu • 2 mã sàn",
                "valueParts": [
                    {
                        "text": "89 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "198 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "69 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "2 mã sàn",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative"
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "10.882,86 tỷ",
                "change": "0,840× TB20 • tăng 2,23% so với 12/10",
                "valueParts": [
                    {
                        "text": "10.882,86 tỷ",
                        "tone": "neutral"
                    }
                ],
                "changeParts": [
                    {
                        "text": "0,840× TB20",
                        "tone": "warning"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "tăng 2,23%",
                        "tone": "warning"
                    },
                    {
                        "text": " so 12/10",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "up",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "change": "9 phiên phân phối • KHÔNG mua mới",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "9 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "KHÔNG mua mới",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng phiên 13/10/2026 tại 1.719,42 (−1,56; −0,09%), mở 1.716,87, cao nhất 1.726,35, thấp nhất 1.710,95. VNDIRECT đối chiếu VNIndex.ai và CTCK Rồng Việt: giá chỉ số/biến động trùng nhau. Giá đóng 55% biên phiên, không chạm chặn xả cuối phiên 1/3 dưới; mức thay đổi dưới 0,2% nên xếp phiên ĐI NGANG, dù giá đỏ.",
            "Chỉ số vẫn dưới MA20 1.771,06, MA50 1.779,64 và MA200 1.797,85; MA20 dốc xuống từ 1.790,21 cách 5 phiên. Chuỗi 257 phiên 01/10/2025–13/10/2026 một gốc VNDIRECT. Có 9 phiên phân phối trong 25 phiên gần nhất: 11/09, 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10 và 09/10. Phiên ETF cơ cấu 18/09 nay đã ra ngoài cửa sổ 25 phiên, không bị tính; phiên 13/10 không cộng thêm phân phối.",
            "Khớp lệnh HOSE VNDIRECT đạt 10.882,86 tỷ đồng, bằng 0,840× TB20 là 12.956,29 tỷ, tăng 2,23% so 12/10. Số này là nmValue khớp lệnh, KHÔNG trộn với tổng giao dịch 13,04 nghìn tỷ trên VNIndex.ai có phạm vi thỏa thuận. Giá trị khớp lệnh HOSE hiện 1 NGUỒN.",
            "Độ rộng chuẩn VNDIRECT là 89 mã tăng, 198 giảm, 69 đứng và 2 giảm sàn; tỷ lệ 0,449 là xấu. VNIndex.ai cho 93 tăng, 201 giảm, 110 đứng trên 404 mã khác phạm vi; không cộng/trộn. VN30 giảm 0,45%, VNMID giảm 0,71% và VNSML giảm 0,59%, mạnh hơn mức giảm của chỉ số chung. VIC kéo +4,80 điểm và VHM +0,85 điểm theo VNIndex.ai; top 5 kéo tăng +6,99, top 5 kéo giảm −3,19 điểm. Không dùng tỷ lệ đóng góp vì VN-Index chỉ thay đổi 1,56 điểm (<2 điểm).",
            "Bản đồ sức giá trong 133 mã website: ngân hàng có 8 tăng/7 giảm/3 đứng, HDB +2,21%, TPB +1,74% là điểm sáng; bất động sản 5 tăng/2 giảm/3 đứng, riêng KOS yếu. Nhưng chứng khoán 11/15 mã giảm, năng lượng 9/12 mã giảm, công nghiệp 6/8 mã giảm, cảng biển–logistics 4/4 mã giảm, công nghệ 2/2 giảm. Chưa có bằng chứng khớp lệnh và khối ngoại theo ngành nên không kết luận nhóm nào có tiền VÀO/RA bền vững.",
            "Khối ngoại khớp lệnh HOSE và chuỗi 5 phiên, tự doanh phiên, basis hợp đồng phái sinh chưa khóa chính thức cùng phạm vi. Trang VNIndex.ai có số ròng ước tính nhưng chỉ TẠM TÍNH; không kích hoạt chặn cứng ngoại. Hợp đồng tương lai tháng 10 đáo hạn 15/10 (theo lịch HNX), 13/10 nằm trong ba phiên giao dịch trước đáo hạn: không dùng basis để chấm theo V3.3.1.",
            "Không có Sổ tự lưu người dùng. Không coi mục nhận định 12/10 là Sổ và không mặc định chặn mốc vô hiệu của phiên trước đã qua. Chặn cứng 9 phiên phân phối được xác minh độc lập đã đủ căn cứ cho trạng thái KHÔNG."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu mới",
                "value": "1.710,95",
                "note": "Đáy phiên 13/10/2026, VNDIRECT và VNIndex.ai cùng xác nhận. Mốc công bố hôm nay, áp dụng kiểm chặn từ phiên kế tiếp, không dời mốc cũ chưa có Sổ."
            },
            {
                "label": "Đáy phiên 12/10",
                "value": "1.716,85",
                "note": "Đáy ngày 12/10 cùng chuỗi VNDIRECT, giá đóng 13/10 cao hơn nhưng intraday đã thấp hơn; đây là mốc tham chiếu, không giả là mốc từ Sổ."
            },
            {
                "label": "Kháng cự gần / MA20",
                "value": "1.771,06",
                "note": "TỰ TÍNH bình quân giá đóng cửa 20 phiên tới 13/10. Giá hiện dưới MA20 dốc xuống."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.779,64",
                "note": "TỰ TÍNH 50 phiên cùng chuỗi; dùng đánh giá nền xu hướng."
            },
            {
                "label": "Kháng cự mạnh / MA200",
                "value": "1.797,85",
                "note": "TỰ TÍNH 200 phiên cùng nguồn VNDIRECT; không phải target lợi nhuận."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.779,64, tiếp theo >1.797,85",
                "note": "Chỉ đánh giá lại khi khớp lệnh, độ rộng xác nhận, số phiên phân phối còn ≤5 và cổng ngoại được kiểm; không mua tự động."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.710,95 khi đóng cửa",
                "note": "Mốc mới từ đáy 13/10, áp dụng từ phiên sau; hạ rủi ro theo vị thế riêng nếu vi phạm."
            }
        ],
        "confluence": {
            "score": -3,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA",
                    "score": -1,
                    "note": "1.719,42 < MA20 1.771,06 và MA50 1.779,64; MA20 1.771,06 < 1.790,21 (cách 5 phiên), giá cũng dưới MA200 1.797,85."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên ĐI NGANG do giảm 0,09% (<0,2%), không được dùng điều kiện phiên giảm hay tăng để trừ điểm; 10.882,86 tỷ khớp, 0,840× TB20."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "89 tăng/198 giảm = 0,449 ≤0,67, phạm vi VNDIRECT."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Biến động chỉ số tuyệt đối 1,56 điểm <2: không tính tỷ lệ top 5; thiếu đủ GT khớp lệnh theo ngành và ngoại để xác nhận dòng tiền."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Khối ngoại chính thức HOSE khớp lệnh và chuỗi 5 phiên chưa có kiểm định; số ước tính tạm từ VNIndex.ai không đủ kích hoạt cổng cứng."
                },
                {
                    "factor": "Sức khỏe xu hướng / phân phối",
                    "score": -1,
                    "note": "9 phiên phân phối hợp lệ còn hiệu lực trong 25 phiên (ngưỡng trừ điểm ≥5, chặn cứng ≥6)."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Phiên 13/10 thuộc ba phiên giao dịch trước đáo hạn 15/10: không dùng basis; chưa xác minh đủ tin bất lợi rõ cùng mốc."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 9 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng ≥6 của V3.3.1; trạng thái KHÔNG.",
                "Chặn xả cuối phiên KHÔNG kích hoạt: giá đóng 0,550 vị trí biên ngày, không nằm 1/3 dưới.",
                "Chặn xanh điểm/đỏ mã KHÔNG kích hoạt vì chỉ số đỏ, nhưng độ rộng vẫn xấu 89/198.",
                "Chặn bán ngoại liên tiếp và mốc vô hiệu cũ theo Sổ: KHÔNG KIỂM ĐƯỢC, không tự coi là đã gỡ.",
                "Đường đi: thô KHÔNG (dòng 1) → trần nền XẤU KHÔNG → không có Sổ để chống đảo chiều → KHÔNG."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "TỐT — VN-Index đóng trên MA20 1.771,06, sau đó MA50 1.779,64 và MA200 1.797,85; độ rộng/khớp lệnh đồng thuận, số phiên phân phối giảm ≤5, ngoại có đối chiếu đúng phạm vi",
                "then": "Tính lại điểm/nền/chặn, có thể xem xét đổi trạng thái nếu thực sự đủ cổng, không tự động mua khi chỉ số vừa vượt MA."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "CƠ SỞ — VN-Index giữ trên đáy phiên 13/10 tại 1.710,95 nhưng còn dưới MA20 1.771,06; số phiên phân phối vẫn cao",
                "then": "KHÔNG mở vị thế mới; chỉ quản trị hàng khỏe sẵn có, giảm rủi ro ở mã yếu và không tăng tỷ trọng."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "XẤU — VN-Index đóng cửa dưới đáy phiên 13/10 là 1.710,95, độ rộng giảm tiếp và nhóm yếu lan rộng",
                "then": "Giảm rủi ro vị thế yếu, không bình quân giá xuống; chỉ dùng mốc có nguồn thay vì gán bừa hỗ trợ."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • THẤP — lấy lại 1.771,06–1.779,64 và vượt 1.797,85, số phân phối ≤5, dòng tiền được xác minh",
                "then": "ĐÁNH GIÁ LẠI trạng thái, chưa mua ngay khi còn chặn hoặc dữ liệu thiếu."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • CAO — giữ trên 1.710,95 nhưng dưới 1.771,06",
                "then": "KHÔNG mở mới, quản trị hàng có sẵn, giảm/không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • TRUNG BÌNH — đóng dưới 1.710,95 từ phiên sau",
                "then": "HẠ phần yếu, không bình quân giá xuống hoặc mua đuổi trụ."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 13/10/2026; VNDIRECT Finfo EOD 15:13, VNIndex.ai 15:00, Rồng Việt cùng phiên; chế độ ĐẦY ĐỦ",
            "finalState": "KHÔNG",
            "score": "−3/7: giá −1; độ rộng −1; phân phối −1; thanh khoản 0, chất lượng dòng tiền 0, ngoại 0, phái sinh/vĩ mô 0. Thô KHÔNG → trần XẤU KHÔNG → không có Sổ chống đảo chiều → chốt KHÔNG (dòng 1)",
            "veto": "CHẶN CỨNG 9 phiên phân phối/25 phiên; chặn ngoại và mốc Sổ cũ KHÔNG KIỂM ĐƯỢC",
            "marketState": "YẾU (nền XẤU, MA20 dốc xuống)",
            "shortTrend": "Yếu: đóng dưới MA20 1.771,06 và MA50 1.779,64",
            "mediumTrend": "Yếu: dưới MA200 1.797,85",
            "liquidity": "10.882,86 tỷ HOSE khớp lệnh • 0,840× TB20 12.956,29 tỷ • +2,23% so 12/10 • 1 NGUỒN",
            "breadth": "89 tăng / 198 giảm / 69 đứng / 2 sàn (VNDIRECT) • tỷ lệ 0,449 • 1 NGUỒN",
            "flow": "Trụ VIC, VHM hỗ trợ chỉ số; VN30 −0,45%, VNMID −0,71%, VNSML −0,59% cho thấy lan tỏa yếu. Không xác nhận dòng tiền ngành.",
            "foreign": "Chưa xác minh khớp lệnh ròng HOSE ngày 13/10 và chuỗi 5 phiên theo một phạm vi; số VNIndex.ai chỉ tạm tính",
            "distributions": "9 phiên/25 phiên có hiệu lực; phiên 13/10 không tạo phiên mới vì giảm dưới 0,2%",
            "proprietary": "Chưa xác minh tự doanh tổng phiên 13/10",
            "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới (dòng 1)",
            "moneyIn": "Chưa xác nhận nhóm có tiền vào bền vững; chỉ ghi sức giá ngân hàng HDB, TPB và một số bất động sản",
            "moneyOut": "Chưa xác nhận dòng tiền ra theo GT ngành; sức giá xấu tại chứng khoán, năng lượng, công nghiệp, cảng biển–logistics, công nghệ",
            "support": "1.710,95 đáy 13/10, mốc mới hiệu lực phiên sau; 1.716,85 đáy 12/10 tham chiếu cũ",
            "resistance": "1.771,06 (MA20), 1.779,64 (MA50), 1.797,85 (MA200)",
            "invalidation": "Sổ mốc cũ: KHÔNG KIỂM ĐƯỢC; mốc mới 1.710,95 công bố 13/10, hiệu lực từ phiên kế tiếp",
            "buyZone": "Không áp dụng — trạng thái KHÔNG dòng 1",
            "reduceZone": "Giảm mã yếu nếu phiên tới đóng dưới 1.710,95 hoặc cổ phiếu thủng điểm dừng lỗ riêng đã có căn cứ",
            "rr": "(1.771,06 − 1.719,42)/(1.719,42 − 1.710,95) ≈ 6,10 (chỉ số tham chiếu cho phiên tới, không phải lệnh mua)",
            "margin": "Giảm / không sử dụng",
            "allocation": "≤20% cổ phiếu / ≥80% tiền mặt — định hướng phòng thủ KHÔNG dòng 1",
            "bias": "Phòng thủ",
            "mainAction": "KHÔNG mở vị thế mới. Rà vị thế và điểm dừng lỗ, giảm mã yếu, không mua đuổi khi chưa gỡ chặn."
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới vì 9 phiên phân phối đang kích hoạt CHẶN CỨNG và nền xu hướng XẤU.",
            "Rủi ro chính nằm ở độ rộng 89 tăng/198 giảm, nhóm vốn hóa vừa và nhỏ yếu hơn chỉ số trong khi trụ VIC góp phần đỡ điểm; chưa đủ chứng cứ dòng tiền trở lại bền vững.",
            "NẾU đóng dưới 1.710,95 từ phiên kế tiếp thì giảm rủi ro; chỉ tính lại trạng thái sau khi lấy lại cụm 1.771,06–1.779,64 rồi 1.797,85 và số phân phối về ≤5."
        ],
        "focus": "KHÔNG • nền XẤU • −3/7 • 9 phiên phân phối/25 • mốc vô hiệu mới 1.710,95 • MA20 1.771,06, MA50 1.779,64, MA200 1.797,85 • khớp 0,840× TB20",
        "inference": "Nhật ký nguồn nội bộ docs/market-source-log-20261013.md; EOD 133/133 mã VNDIRECT–KBS có kiểm tra, chỉ số VNINDEX 1.719,42 độc lập VNIndex.ai và CTCK Rồng Việt xác nhận. Chuỗi kỹ thuật 257 phiên VNDIRECT thực đọc, đã trích hai dòng 12/10 và 13/10, không ghép nguồn. Độ rộng và GT khớp lệnh HOSE 1 NGUỒN đúng phạm vi; khối ngoại chính thức/tự doanh/basis chưa xác minh. Không có Sổ tự lưu người dùng, chống đảo chiều không áp dụng; cổng phân phối xác minh độc lập, chốt KHÔNG. Không chỉnh khung v2.2.2.",
        "limitations": [
            "Giá chỉ số và % EOD đối chiếu được ≥2 đơn vị; thanh khoản khớp lệnh và độ rộng chỉ có 1 NGUỒN cùng phạm vi. VNIndex.ai báo tổng giao dịch khác VNDIRECT nmValue; độ rộng khác universe nên không trộn.",
            "Khối ngoại khớp lệnh HOSE, chuỗi 5 phiên, tự doanh tổng phiên chưa có số chính thức cùng phạm vi; VNIndex.ai chỉ ước tính, không lấy số để kích hoạt chặn.",
            "Không có Sổ dữ liệu tự lưu do người dùng dán vào; không biết mốc vô hiệu cũ trong Sổ; mốc mới 1.710,95 chỉ áp dụng từ phiên sau.",
            "Không có GT khớp lệnh và khối ngoại cùng phạm vi theo ngành; các tỷ lệ tăng/giảm nhóm từ 133 mã chỉ là sức giá, không kết luận tiền vào/ra bền vững.",
            "Chỉ số biến động 1,56 điểm <2 điểm nên V3.3.1 cấm dùng tỷ lệ đóng góp top 5; phiên đi ngang theo ngưỡng thay đổi 0,2%."
        ],
        "zaloPost": "Tôi giữ trạng thái KHÔNG mở vị thế mới sau phiên 13/10. VN-Index đóng 1.719,42 điểm, giảm nhẹ 1,56 điểm, nhưng bức tranh phía sau không nhẹ như mức giảm của chỉ số. Giá còn dưới các đường trung bình và đã có 9 phiên phân phối hợp lệ trong 25 phiên. Đó là lý do tôi ưu tiên phòng thủ, chưa gọi đây là một nhịp tạo đáy.\n\nThanh khoản khớp lệnh sàn TP.HCM đạt 10.882,86 tỷ đồng, bằng 0,840 lần bình quân 20 phiên. Chỉ số giảm chưa tới ngưỡng để tính một phiên phân phối mới, nhưng số mã giảm theo VNDIRECT là 198, so với 89 mã tăng. Nhiều cổ phiếu yếu hơn chỉ số: nhóm vốn hóa vừa và nhỏ giảm rõ hơn. VIC và một vài mã trụ đang đỡ điểm, không có nghĩa dòng tiền đã lan tỏa.\n\nTrong danh mục 133 mã theo dõi, ngân hàng vẫn có điểm sáng riêng như HDB và TPB. Ngược lại, chứng khoán có 11 mã giảm trên 15 mã, năng lượng 9 mã giảm trên 12 mã, cảng biển và logistics 4 mã đều giảm. Đây mới là diễn biến giá; tôi chưa có đủ dữ liệu khớp lệnh theo ngành để khẳng định dòng tiền lớn đang mua hay rút khỏi từng nhóm. Đừng mua đuổi chỉ vì vài mã kéo khỏe.\n\nVới phiên kế tiếp, NẾU VN-Index giữ được đáy 1.710,95 nhưng vẫn nằm dưới MA20 là 1.771,06, THÌ chỉ quản trị hàng sẵn có, không tăng tỷ trọng. NẾU đóng cửa dưới 1.710,95, THÌ ưu tiên giảm mã yếu và tuyệt đối không bình quân giá xuống. NẾU vượt lại 1.771,06 rồi 1.779,64, sau đó 1.797,85 với độ rộng, thanh khoản cùng cải thiện và số phiên phân phối giảm về mức cho phép, THÌ mới tính lại trạng thái, chứ chưa mặc định mua.\n\nViệc cần làm ngay là rà điểm dừng lỗ, bỏ các mã yếu khỏi danh sách ưu tiên và giảm hoặc không dùng đòn bẩy. Khi chặn cứng chưa gỡ, tỷ trọng cổ phiếu định hướng không quá 20%. Giữ sức mua để chờ tín hiệu thật quan trọng hơn dự đoán đáy.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — khóa EOD VN-Index và độ rộng 13/10",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-13&size=500"
            },
            {
                "label": "VNDIRECT Finfo — 257 phiên khớp lệnh, MA và phân phối 13/10",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-13&size=500"
            },
            {
                "label": "VNIndex.ai — chỉ số, độ rộng và đóng góp điểm EOD 13/10",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "CTCK Rồng Việt — số VNINDEX, VN30, VNMID, VNSML phiên 13/10",
                "url": "https://www.vdsc.com.vn/tin-tuc/tin-nghiep-vu/styles.min.c4bb6c98ac4e3ee7.css"
            },
            {
                "label": "GitHub — xác minh giá 133/133 và triển khai EOD",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38367729620"
            },
            {
                "label": "GitHub — kiểm toán lịch sử 257 phiên và phân phối",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38367219510"
            }
        ]
    },
    {
        "id": "market-view-20261012",
        "date": "2026-10-12",
        "publishedAt": "12/10/2026 • Sau phiên",
        "edition": "Số 37",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT Finfo + KBS exact-date khóa giá 133/133; chỉ số EOD và giá trị HOSE khớp lệnh 1 NGUỒN; VNIndex.ai, Stockbiz, Investing.com vẫn ở intraday; khối ngoại/tự doanh/basis: Chưa xác minh",
        "title": "Phân phối còn nặng — giữ phòng thủ dưới vùng 1.776–1.780",
        "thesis": "Dữ liệu hết phiên 12/10/2026, chốt kiểm định sau ATC, nguồn VNDIRECT Finfo (số lõi hiện 1 NGUỒN). VN-Index đóng 1.720,98 điểm, giảm 14,11 điểm (−0,81%). Giá thấp hơn MA20 1.775,64, MA50 1.780,14, MA200 1.797,64; thanh khoản HOSE khớp lệnh 10.645,09 tỷ đồng (0,807× TB20), độ rộng VNDIRECT 154 tăng/148 giảm/60 đứng. Có 9 phiên phân phối hợp lệ trong 25 phiên sau khi loại 18/09 là ngày ETF cơ cấu. Chế độ ĐẦY ĐỦ, nền XẤU, điểm −2/7, chặn cứng còn hoạt động: KHÔNG mở vị thế mới.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.3.1",
        "brief": {
            "headline": "9 phiên phân phối sau khi loại ETF — phòng thủ, không mua mới",
            "thesis": "VN-Index đóng 1.720,98, dưới cả MA20/50/200, với nền xu hướng XẤU. Thanh khoản khớp lệnh chỉ bằng 0,807× TB20 và độ rộng 154 tăng/148 giảm: không thể quy giảm điểm thành bán tháo toàn thị trường, nhưng còn 9 phiên phân phối hợp lệ nên CHẶN CỨNG vẫn chi phối. Trạng thái chốt: KHÔNG mở mới.",
            "evidence": [
                {
                    "label": "Xu hướng giá",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "Nền XẤU • 9 phiên phân phối hợp lệ.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Nền XẤU",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "9 phiên phân phối hợp lệ",
                            "tone": "negative"
                        }
                    ],
                    "text": "Giá 1.720,98 thấp hơn MA20 1.775,64, MA50 1.780,14 và MA200 1.797,64; MA20 dốc xuống từ 1.793,78 trước 5 phiên. 18/09 được loại khỏi phép đếm do quỹ ETF cơ cấu.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản khớp lệnh",
                    "signal": "10.645,09 tỷ • 0,807× TB20",
                    "detail": "Giảm 27,56% so với 09/10 • 1 NGUỒN.",
                    "signalParts": [
                        {
                            "text": "10.645,09 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "0,807× TB20",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Giảm 27,56%",
                            "tone": "warning"
                        },
                        {
                            "text": " so với 09/10 • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "1 NGUỒN",
                            "tone": "warning"
                        }
                    ],
                    "text": "Phiên 12/10 giảm 0,81% nhưng giá trị khớp lệnh giảm từ 14.694,49 tỷ xuống 10.645,09 tỷ, nên không phát sinh phiên phân phối mới. Chỉ dùng VNDIRECT nmValue, không trộn tổng giao dịch có thỏa thuận.",
                    "tone": "warning"
                },
                {
                    "label": "Độ rộng HOSE",
                    "signal": "▲ 154 tăng / ▼ 148 giảm",
                    "detail": "60 tham chiếu • chỉ số vẫn giảm.",
                    "signalParts": [
                        {
                            "text": "▲ 154 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ 148 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "60 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • chỉ số vẫn giảm",
                            "tone": "negative"
                        }
                    ],
                    "text": "Tỷ lệ mã tăng/giảm 1,041; chỉ số giảm trong khi nhóm tăng nhỉnh hơn nhóm giảm, phản ánh phân hóa mạnh. Nguồn độ rộng 1 NGUỒN, phạm vi universe VNDIRECT; không ghép số từ trang khác.",
                    "tone": "neutral"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới khi CHẶN CỨNG 9 phiên phân phối còn hoạt động; giảm hoặc không dùng đòn bẩy, tỷ trọng cổ phiếu định hướng ≤20%.",
                "NẾU đóng dưới 1.716,85 (đáy 12/10, mốc công bố mới áp dụng từ phiên kế tiếp), THÌ ưu tiên xử lý mã yếu, không bình quân giá xuống.",
                "NẾU đóng trên 1.775,64–1.780,14 rồi vượt 1.797,64 và số phiên phân phối giảm ≤5, THÌ tính lại trạng thái sau khi kiểm đủ các cổng; không tự động mua."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "133/133 giá cổ phiếu khóa EOD VNDIRECT–KBS ngày 12/10 • VN-Index, HOSE khớp lệnh, độ rộng: 1 NGUỒN • chuỗi 256 phiên cùng nguồn • chưa có Sổ mang sang • giá trị khối ngoại HOSE, tự doanh và basis chưa xác minh",
                "shortLabel": "EOD 133/133 • 1 nguồn số lõi • chặn cứng 9 phân phối"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.720,98",
                "change": "−14,11 • −0,81%",
                "changeParts": [
                    {
                        "text": "−14,11",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,81%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "154 tăng / 148 giảm",
                "change": "60 tham chiếu • 6 mã sàn",
                "valueParts": [
                    {
                        "text": "154 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "148 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "60 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "6 mã sàn",
                        "tone": "negative"
                    }
                ],
                "tone": "neutral",
                "direction": "flat",
                "snapshotState": "neutral"
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "10.645,09 tỷ",
                "change": "0,807× TB20 • giảm 27,56% phiên trước",
                "valueParts": [
                    {
                        "text": "10.645,09 tỷ",
                        "tone": "neutral"
                    }
                ],
                "changeParts": [
                    {
                        "text": "0,807× TB20",
                        "tone": "warning"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "giảm 27,56%",
                        "tone": "warning"
                    },
                    {
                        "text": " so với phiên trước",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "change": "9 phiên phân phối hợp lệ • KHÔNG mua mới",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "9 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "KHÔNG mua mới",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Tổng quan EOD 12/10/2026: VN-Index đóng 1.720,98 (−14,11 điểm; −0,81%), cao nhất 1.736,64, thấp nhất 1.716,85, mở cửa 1.736,20. Giá nằm ở 20,9% biên phiên: 1/3 dưới, song khớp lệnh chỉ 0,807× TB20 nên KHÔNG kích hoạt riêng chặn xả cuối phiên theo V3.3.1.",
            "Thanh khoản khớp lệnh HOSE 10.645,09 tỷ đồng, thấp hơn 27,56% so với 09/10 và bằng 0,807× bình quân 20 phiên 13.198,07 tỷ. Chuỗi 256 phiên nhất quán VNDIRECT (01/10/2025–12/10/2026). Đây là khớp lệnh, không gồm thỏa thuận; tổng giá trị giao dịch khác phạm vi không được đem vào phép tính.",
            "Nền xu hướng XẤU: VN-Index 1.720,98 dưới MA50 1.780,14, MA20 1.775,64 dốc xuống từ 1.793,78 (cách 5 phiên), và dưới MA200 1.797,64. Trong 25 phiên có 10 tín hiệu giảm kèm thanh khoản tăng theo công thức cơ bản; loại phiên ETF cơ cấu 18/09, còn 9 phiên phân phối hợp lệ. Ngày 12/10 KHÔNG tạo thêm phiên phân phối vì thanh khoản giảm.",
            "Độ rộng VNDIRECT trên phạm vi API: 154 mã tăng, 148 giảm, 60 đứng và 6 mã sàn; tương quan là chỉ số giảm dù số mã tăng nhỉnh hơn. Trong universe 133 mã website, ngân hàng 11/18 mã tăng, công nghiệp 5/8 mã tăng. Trái lại năng lượng 9/12 mã giảm, nông nghiệp 6/6 giảm và công nghệ 2/2 giảm. Chỉ là BẢN ĐỒ SỨC GIÁ, chưa có GT khớp ngành/ngoại theo nhóm đủ để khẳng định tiền vào hoặc tiền ra thật.",
            "Sự kiện: VanEck VNM ETF cơ cấu 18/09/2026, được loại khỏi phép đếm phân phối; hợp đồng phái sinh tháng 10 đáo hạn 15/10/2026, ngày 12/10 thuộc ba phiên trước đáo hạn nên không dùng basis để chấm. Lịch ETF/đáo hạn khác chưa xác minh hết; không tự gắn cờ thêm.",
            "Đơn vị duy nhất hiện khóa số EOD lõi là VNDIRECT Finfo. VNIndex.ai vẫn trả số 11:30, Stockbiz 13:48 và Investing.com là số trong phiên; không dùng làm nguồn EOD thứ hai. Khối ngoại khớp lệnh HOSE và chuỗi 5 phiên, tự doanh cuối ngày chưa có đối chiếu; cổng chặn phụ thuộc dữ liệu này KHÔNG KIỂM ĐƯỢC, chấm 0 chứ không suy tín hiệu bán."
        ],
        "levels": [
            {
                "label": "Đáy gần / mốc vô hiệu mới",
                "value": "1.716,85",
                "note": "Đáy chính phiên 12/10/2026 từ VNDIRECT; mốc mới công bố hôm nay và chỉ có hiệu lực kiểm chặn từ phiên sau, không dời mốc cũ trong Sổ vì chưa có Sổ."
            },
            {
                "label": "Đáy phiên liền trước",
                "value": "1.724,17",
                "note": "Đáy phiên 09/10/2026; VN-Index đóng 12/10 dưới mức này. Không khẳng định đây là mốc vô hiệu trong Sổ người dùng."
            },
            {
                "label": "Kháng cự gần MA20",
                "value": "1.775,64",
                "note": "TỰ TÍNH từ 20 phiên VNDIRECT chốt 12/10; cần xác nhận sức mua và giảm số phân phối."
            },
            {
                "label": "Kháng cự gần MA50",
                "value": "1.780,14",
                "note": "TỰ TÍNH từ 50 phiên VNDIRECT; nền xu hướng hiện XẤU."
            },
            {
                "label": "Kháng cự mạnh MA200",
                "value": "1.797,64",
                "note": "TỰ TÍNH từ 200 phiên VNDIRECT; chỉ số đang ở dưới."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.780,14 rồi >1.797,64",
                "note": "Yêu cầu đóng cửa lấy lại cụm MA và số phiên phân phối về ≤5; chỉ tính lại trạng thái, không tự mua."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.716,85 khi đóng cửa",
                "note": "Đóng dưới đáy 12/10 từ phiên kế tiếp; hạ phần yếu, không bình quân giá xuống."
            }
        ],
        "confluence": {
            "score": -2,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA",
                    "score": -1,
                    "note": "1.720,98 nằm dưới cả MA20 1.775,64 và MA50 1.780,14; MA20 giảm từ 1.793,78 cách 5 phiên."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm 0,81% nhưng khớp lệnh HOSE 10.645,09 tỷ chỉ 0,807× TB20; không chạm ngưỡng −1 là 1,2×."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "154 mã tăng/148 giảm = 1,041, không chạm ±1 theo tiêu chuẩn 1,5 hoặc 0,67."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Thiếu top 5 đóng góp ĐÚNG CUỐI PHIÊN và GT giao dịch theo ngành; không tự chấm theo số giữa phiên."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Không có số ròng khớp lệnh HOSE cuối ngày và chuỗi 5 phiên đủ xác minh; cổng ngoại KHÔNG KIỂM ĐƯỢC."
                },
                {
                    "factor": "Phiên phân phối",
                    "score": -1,
                    "note": "9 phiên phân phối hợp lệ còn hiệu lực trong 25 phiên, đã loại 18/09 theo cờ ETF; 12/10 không tạo phiên mới."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "12/10 thuộc 3 phiên trước ngày đáo hạn 15/10 nên không dùng basis; không đủ bằng chứng vĩ mô bất lợi cùng mốc để chấm."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 9 phiên phân phối hợp lệ/25 phiên, vượt ngưỡng ≥6 của V3.3.1, buộc KHÔNG.",
                "Nến đóng tại 0,209 biên ngày nằm trong 1/3 dưới, nhưng khớp lệnh chỉ 0,807× TB20, nên CHƯA kích hoạt điều kiện xả cuối phiên theo cổng riêng.",
                "Chặn cứng do mốc vô hiệu đã có trong Sổ người dùng: KHÔNG KIỂM ĐƯỢC vì không có Sổ; không thay thế bằng mốc mới để kết luận đã gỡ.",
                "Khối ngoại HOSE khớp lệnh cùng chuỗi bán ròng: KHÔNG KIỂM ĐƯỢC; dữ liệu thiếu chấm 0, không coi là đã qua.",
                "Đường đi quyết định V3.3.1: thô KHÔNG (dòng 1) → trần nền XẤU: KHÔNG → chống đảo chiều bỏ qua vì không có Sổ → chốt KHÔNG."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "TỐT — VN-Index lấy lại MA20 1.775,64, MA50 1.780,14 và MA200 1.797,64, số phân phối giảm về ≤5, có độ rộng/khớp lệnh và nguồn cuối phiên xác nhận",
                "then": "Tính lại nền xu hướng, điểm và các chặn; vẫn KHÔNG tự động mua khi cổng chưa được gỡ."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "CƠ SỞ — VN-Index ở trên đáy 12/10 là 1.716,85 nhưng dưới MA20 1.775,64, 9 phiên phân phối còn hiệu lực",
                "then": "Giữ trạng thái KHÔNG, chỉ quản trị cổ phiếu đang có, ưu tiên chất lượng và không tăng đòn bẩy."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "XẤU — đóng cửa thủng đáy 12/10 là 1.716,85 và giá các nhóm suy yếu tiếp",
                "then": "Giảm phần yếu, tạm dừng mua mới và không bình quân giá xuống; chưa tự gán điểm hỗ trợ xa không có nguồn."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • THẤP: vượt >1.780,14 và >1.797,64 với độ rộng + GT khớp lệnh xác nhận, số phân phối về ≤5",
                "then": "TÍNH LẠI trạng thái sau kiểm chứng nguồn; không mua chỉ do bật giá."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • CAO: đóng trên 1.716,85 nhưng dưới MA20 1.775,64",
                "then": "KHÔNG MỞ MỚI; ưu tiên quản trị danh mục và giữ tiền mặt."
            },
            {
                "state": "risk_off",
                "if": "XẤU • TRUNG BÌNH: đóng dưới 1.716,85 từ phiên sau",
                "then": "GIẢM vị thế yếu; không bắt đáy hoặc tăng đòn bẩy."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 12/10/2026, kiểm định sau ATC • nguồn VNDIRECT Finfo (số lõi 1 NGUỒN) • chế độ ĐẦY ĐỦ",
            "finalState": "KHÔNG",
            "score": "−2/7 (giá −1; phân phối −1; năm yếu tố còn lại 0). Đường đi: thô KHÔNG → nền XẤU KHÔNG → không có Sổ để chống đảo chiều → KHÔNG (dòng 1)",
            "veto": "CHẶN CỨNG 9 phiên phân phối/25 phiên sau khi loại ngày ETF 18/09; chặn từ Sổ cũ KHÔNG KIỂM ĐƯỢC",
            "marketState": "YẾU (nền XẤU); MA20 đi xuống; không có Sổ dữ liệu mang sang",
            "shortTrend": "Yếu / dưới MA20 1.775,64 và MA50 1.780,14",
            "mediumTrend": "Yếu / dưới MA200 1.797,64",
            "liquidity": "10.645,09 tỷ HOSE khớp lệnh • 0,807× TB20 13.198,07 tỷ • −27,56% so 09/10 • 1 NGUỒN",
            "breadth": "154 tăng / 148 giảm / 60 đứng / 6 sàn (universe VNDIRECT), tỷ lệ 1,041 • 1 NGUỒN",
            "flow": "Nhóm ngân hàng, công nghiệp có nhiều mã tăng nhưng CHƯA chứng minh tiền vào bền vững bằng giá trị khớp lệnh ngành",
            "foreign": "Chưa xác minh số mua/bán ròng khớp lệnh HOSE ngày 12/10 và chuỗi 5 phiên",
            "distributions": "9 phiên/25 phiên sau loại 18/09 cơ cấu ETF; 12/10 không tạo phiên mới",
            "proprietary": "Chưa xác minh tự doanh khớp lệnh cuối phiên",
            "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới",
            "moneyIn": "Chưa có nhóm xác nhận dòng tiền VÀO bền vững; sức giá nhóm ngân hàng 11/18 mã tăng, công nghiệp 5/8 mã tăng",
            "moneyOut": "Chưa xác nhận dòng tiền RA theo giao dịch ngành; sức giá yếu ở năng lượng 9/12 mã giảm, nông nghiệp 6/6 mã giảm",
            "support": "1.716,85 (đáy 12/10, mốc vô hiệu mới công bố từ phiên sau); 1.724,17 đáy phiên 09/10 đã bị đóng dưới",
            "resistance": "1.775,64 (MA20); 1.780,14 (MA50); mạnh 1.797,64 (MA200)",
            "invalidation": "Cũ: KHÔNG KIỂM ĐƯỢC do thiếu Sổ; mới công bố 1.716,85 hiệu lực từ phiên kế tiếp",
            "buyZone": "Không áp dụng — trạng thái KHÔNG (dòng 1)",
            "reduceZone": "Giảm mã yếu nếu phiên tới đóng dưới 1.716,85; áp dụng stop riêng từng cổ phiếu",
            "rr": "(1.775,64 − 1.720,98)/(1.720,98 − 1.716,85) ≈ 13,24 tham khảo chỉ số phiên tới; không phải tín hiệu mua do còn CHẶN CỨNG",
            "margin": "Giảm / không dùng",
            "allocation": "≤20% cổ phiếu / ≥80% tiền mặt theo trạng thái KHÔNG dòng 1 (định hướng)",
            "bias": "Phòng thủ",
            "mainAction": "KHÔNG mở vị thế mới; rà lại stoploss và tỷ trọng; chỉ giữ cổ phiếu đủ sức khỏe; không mua đuổi"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới ngày 12/10 khi nền xu hướng XẤU và CHẶN CỨNG 9 phiên phân phối còn hiệu lực.",
            "Rủi ro chính là đóng dưới MA20/50/200, chỉ số yếu dù số mã tăng không ít, cộng với dữ liệu khối ngoại cuối phiên chưa kiểm đủ.",
            "Chỉ đánh giá lại khi VN-Index lấy lại 1.775,64–1.780,14, vượt 1.797,64 và số phân phối về ≤5; đóng dưới 1.716,85 thì giảm rủi ro danh mục."
        ],
        "focus": "KHÔNG • nền XẤU • chặn cứng 9 phiên phân phối/25 • hỗ trợ 1.716,85 • kháng cự MA20 1.775,64, MA50 1.780,14, MA200 1.797,64 • khớp lệnh 0,807× TB20 • dữ liệu lõi 1 NGUỒN",
        "inference": "Nhật ký nguồn V3.3.1: docs/market-source-log-20261012.md. Giá 133/133 mã chốt ngày 12/10 được VNDIRECT–KBS so khớp. Chỉ số và thanh khoản EOD chỉ một nguồn VNDIRECT với log API gốc; bên thứ hai vẫn intraday. Đọc trọn vẹn lịch sử 256 phiên VNDIRECT từ 01/10/2025 đến 12/10/2026. Loại phiên ETF cơ cấu 18/09 khỏi 10 tín hiệu phân phối còn 9. Thiếu Sổ nên không mặc định cổng mốc cũ đã qua, chống đảo chiều không áp dụng. Trang hiển thị giữ nguyên thiết kế v2.2.2.",
        "limitations": [
            "VN-Index, HOSE khớp lệnh và độ rộng chỉ 1 NGUỒN EOD hiện khóa được; ba nguồn khác vẫn là intraday, tuyệt đối không ghi ĐÃ ĐỐI CHIẾU.",
            "Không có Sổ tự lưu người dùng; không giả dữ liệu về mốc vô hiệu/chặn cứng đang hiệu lực từ Sổ ngày trước. Mốc 1.716,85 công bố mới chỉ áp dụng từ phiên kế tiếp.",
            "Khối ngoại HOSE khớp lệnh, chuỗi 5 phiên và tự doanh cuối phiên chưa khóa đúng phạm vi; basis phái sinh không dùng trong ba phiên trước đáo hạn đã xác minh.",
            "Bản đồ sức giá nhóm ngành từ 133 mã website không phải tổng HOSE và không chứng minh khối ngoại/GT khớp lệnh ngành.",
            "Không đưa số top 5 đóng góp từ trang đang hiển thị số liệu phiên sáng vào nhận định hết phiên."
        ],
        "zaloPost": "Tôi tiếp tục giữ trạng thái KHÔNG mở vị thế mới sau phiên 12/10. VN-Index đóng cửa 1.720,98 điểm, giảm 14,11 điểm. Chỉ số ở dưới cả ba đường trung bình quan trọng, còn sức khỏe xu hướng thì chưa phục hồi. Đây là bối cảnh cần quản trị rủi ro hơn là cố bắt đúng đáy.\n\nĐiểm đáng chú ý là thanh khoản khớp lệnh HOSE còn 10.645,09 tỷ đồng, chỉ bằng 0,807 lần bình quân 20 phiên và thấp hơn 27,56% so với ngày 09/10. Dù giá giảm, thanh khoản lại co xuống, nên riêng hôm nay không tạo phiên phân phối mới theo tiêu chuẩn. Tuy vậy, sau khi loại ngày cơ cấu ETF, 25 phiên gần nhất vẫn có 9 phiên phân phối còn hiệu lực: áp lực tích lũy chưa được giải tỏa.\n\nĐộ rộng theo VNDIRECT có 154 mã tăng và 148 mã giảm. Điều đó cho thấy lực ép lên chỉ số không đồng nghĩa toàn bộ cổ phiếu bị bán tháo. Trong danh mục theo dõi của website, ngân hàng có 11 mã tăng trên 18 mã, nhóm công nghiệp có 5 mã tăng trên 8 mã; SHB, VPB, HPG và HSG là các điểm sáng về giá. Ngược lại, năng lượng có 9 mã giảm trên 12 mã, nông nghiệp 6 mã đều giảm. Đây là quan sát sức giá, chưa đủ chứng cứ thanh khoản ngành để khẳng định dòng tiền lớn đã gom hàng.\n\nNẾU VN-Index tiếp tục giữ trên đáy phiên 1.716,85 nhưng vẫn dưới 1.775,64–1.780,14, THÌ chỉ quản trị hàng có sẵn, không tăng tỷ trọng. NẾU đóng cửa thủng 1.716,85, THÌ giảm rủi ro phần cổ phiếu yếu, tuyệt đối không bình quân giá xuống. NẾU lấy lại vùng đường trung bình và số phiên phân phối giảm về mức cho phép, THÌ mới tính lại điều kiện mua.\n\nViệc cần làm ở phiên tới là rà điểm dừng lỗ, giảm đòn bẩy và tránh mua đuổi mã vừa bật. Khi chặn cứng còn hiệu lực, tỷ trọng cổ phiếu định hướng không quá 20%; việc xác minh lại dòng tiền quan trọng hơn một nhịp hồi đơn lẻ.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — VN-Index và độ rộng EOD ngày 12/10/2026, 1 nguồn",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-12&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi lịch sử 256 phiên, khớp lệnh HOSE, MA và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-12&size=500"
            },
            {
                "label": "GitHub — log khóa EOD 133 mã và VNINDEX",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38222487241"
            },
            {
                "label": "GitHub — audit 256 dòng lịch sử thực đọc",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38222793205"
            },
            {
                "label": "SeABank — cờ sự kiện VNM ETF cơ cấu 18/09/2026",
                "url": "https://www.seabank.com.vn/tin-tuc/tin-seabank/news/ssb-la-co-phieu-duy-nhat-duoc-them-vao-ro-marketvector-vietnam-local-index"
            },
            {
                "label": "DNSE — lịch đáo hạn tháng 10/2026",
                "url": "https://www.dnse.com.vn/senses/hop-dong-tuong-lai-VN30F2309"
            }
        ]
    },
    {
        "id": "market-view-20261009",
        "date": "2026-10-09",
        "publishedAt": "09/10/2026 • Sau phiên",
        "edition": "Số 36",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT Finfo + KBS (133/133 mã EOD) + VNIndex.ai; thanh khoản VNDIRECT 1 NGUỒN; ngoại, tự doanh và basis cuối phiên chưa khóa độc lập",
        "title": "10 phiên phân phối — chưa phù hợp mở vị thế mới",
        "thesis": "Dữ liệu đến hết phiên 09/10/2026, chốt sau ATC. VN-Index đóng 1.735,09 điểm (−3,88; −0,22%), dưới MA20 1.779,01, MA50 1.779,82 và MA200 1.797,40. HOSE có 121 mã tăng/170 giảm, giá trị khớp lệnh 14.694,49 tỷ đồng (1,111× bình quân 20 phiên), cao hơn ngày 08/10. Số phiên phân phối còn hiệu lực tăng lên 10/25, kích hoạt CHẶN CỨNG. Trạng thái KHÔNG: phòng thủ, không mua mới; số ròng khối ngoại và phái sinh cuối phiên CHƯA XÁC MINH, không dùng để tạo tín hiệu mua.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "10 phiên phân phối — chưa phù hợp mở vị thế mới",
            "thesis": "VN-Index giảm về 1.735,09 trong lúc khớp lệnh tăng 15,33% so với phiên trước, tạo phiên phân phối thứ 10 còn hiệu lực. Độ rộng 121 tăng/170 giảm và chỉ số còn dưới cả MA20, MA50, MA200. CHẶN CỨNG hoạt động: KHÔNG mua mới, giữ thế phòng thủ.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ Dưới MA20 / MA50 / MA200",
                    "detail": "10 phiên phân phối / 25 phiên.",
                    "signalParts": [
                        {
                            "text": "▼ Dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "10 phiên phân phối",
                            "tone": "negative"
                        },
                        {
                            "text": " / 25 phiên",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Đóng 1.735,09 thấp hơn MA20 1.779,01, MA50 1.779,82 và MA200 1.797,40; 10 phiên phân phối kích hoạt chặn cứng.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng HOSE",
                    "signal": "121 tăng / 170 giảm",
                    "detail": "63 tham chiếu • 5 mã giảm sàn.",
                    "signalParts": [
                        {
                            "text": "121 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "170 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "63 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "5 mã giảm sàn",
                            "tone": "negative"
                        }
                    ],
                    "text": "Tỷ lệ tăng/giảm 0,712 — số giảm áp đảo nhưng chưa chạm ngưỡng 0,67 để trừ điểm độ rộng theo rubric V3.2.",
                    "tone": "negative"
                },
                {
                    "label": "Khớp lệnh",
                    "signal": "14.694,49 tỷ • tăng 15,33%",
                    "detail": "1,111× bình quân 20 phiên (13.226,36 tỷ).",
                    "signalParts": [
                        {
                            "text": "14.694,49 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • tăng 15,33%",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "1,111×",
                            "tone": "warning"
                        },
                        {
                            "text": " bình quân 20 phiên (13.226,36 tỷ)",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Nguồn VNDIRECT Finfo nmValue; 1 NGUỒN độc lập cho giá trị HOSE khớp lệnh. Giá giảm và khớp lệnh tăng từ mức 12.740,77 tỷ ngày 08/10, tạo thêm một phiên phân phối.",
                    "tone": "warning"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; phòng thủ, cổ phiếu định hướng không quá 20%, giảm hoặc không dùng đòn bẩy.",
                "NẾU đóng cửa dưới 1.724,17, THÌ giảm vị thế yếu và không bình quân giá xuống.",
                "NẾU vượt 1.779,82 rồi 1.797,40 cùng độ rộng/thanh khoản tốt, số phân phối giảm dưới 6 và cổng ngoại được xác minh, THÌ tính lại trạng thái; chưa mặc định mua."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "133/133 giá EOD 09/10 đã khóa: VNDIRECT + KBS từng ngày • chỉ số & chuỗi kỹ thuật 255 phiên VNDIRECT • giá trị khớp lệnh HOSE 1 NGUỒN • ròng ngoại, tự doanh, basis CHƯA XÁC MINH",
                "shortLabel": "133/133 giá EOD khóa • 10 phiên phân phối • chặn cứng"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.735,09",
                "change": "−3,88 • −0,22%",
                "changeParts": [
                    {
                        "text": "−3,88",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,22%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "121 tăng / 170 giảm",
                "change": "63 tham chiếu • 5 mã sàn",
                "valueParts": [
                    {
                        "text": "121 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "170 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "63 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "5 mã sàn",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative"
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "14.694,49 tỷ",
                "change": "1,111× TB20 • tăng 15,33% so với 08/10",
                "valueParts": [
                    {
                        "text": "14.694,49 tỷ",
                        "tone": "neutral"
                    }
                ],
                "changeParts": [
                    {
                        "text": "1,111× TB20",
                        "tone": "warning"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "tăng 15,33%",
                        "tone": "warning"
                    },
                    {
                        "text": " so với 08/10",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "up",
                "snapshotState": "liquidity_neutral"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "change": "10 phiên phân phối • KHÔNG mở mới",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "10 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "KHÔNG mở mới",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Bản chất phiên: VN-Index đóng 1.735,09 (−3,88; −0,22%), mở 1.737,63, cao 1.744,89, thấp 1.724,17. VNDIRECT Finfo và VNIndex.ai đối chiếu đúng mức đóng cửa và biên phiên. Giá đóng ở 52,7% biên ngày, tức khoảng 1/3 giữa; không kích hoạt chặn xả cuối phiên ở 1/3 dưới.",
            "Giá trị HOSE khớp lệnh VNDIRECT 14.694,49 tỷ đồng, tăng 15,33% so với 08/10; bằng 1,111× mức bình quân 20 phiên trước 13.226,36 tỷ đồng. Đây là số khớp lệnh, không trộn giá trị toàn giao dịch 27,54 nghìn tỷ từ nguồn có thỏa thuận. Giá giảm và thanh khoản khớp lệnh tăng: số phiên phân phối còn hiệu lực thành 10 trên 25.",
            "Xu hướng giá không được xác nhận: VN-Index 1.735,09 nằm dưới MA20 1.779,01, MA50 1.779,82 và MA200 1.797,40 (TỰ TÍNH từ chuỗi VNDIRECT 255 phiên 01/10/2025–09/10/2026). Độ rộng chuẩn website có 121 tăng, 63 tham chiếu, 170 giảm và 5 sàn. VNIndex.ai thống kê một tập HOSE khác 129 tăng/175 giảm/100 đứng; không trộn hai universe.",
            "Bản đồ sức giá từ 133 mã đã xác minh của website: chứng khoán có 9 tăng/5 giảm/1 đứng; ngân hàng có 7 tăng/6 giảm/5 đứng, nổi bật HDB, VPB, TCB. Bất động sản có 6 tăng/3 giảm/1 đứng với NVL, CEO tăng, nhưng KOS giảm. Ngược lại, năng lượng 2 tăng/10 giảm, BSR và GAS gây áp lực điểm lên chỉ số. Đây là độ rộng theo ngành của DANH MỤC, không phải bằng chứng khối ngoại/giá trị khớp lệnh ngành; chưa đủ căn cứ gọi là tiền vào thật.",
            "VNIndex.ai ghi top 5 kéo tăng gồm HDB +0,88, VPB +0,73, TCB +0,67, VHM +0,53, CTG +0,49, tổng +3,30 điểm. Top 5 kéo giảm gồm VIC −3,96, BSR −0,98, GVR −0,82, FPT −0,70, GAS −0,64, tổng −7,10 điểm. Điều này mô tả sự phân hóa trụ, không chứng minh thị trường đã đảo chiều.",
            "Lực khối ngoại KHỚP LỆNH HOSE cuối phiên, chuỗi 5 phiên, số tự doanh và basis VN30F1M chưa được xác minh theo cùng phạm vi. Số ước tính ngoại từ VNIndex.ai bị chi phối bởi giao dịch lớn MCH, không được sử dụng để chấm điểm hoặc kết luận chuỗi bán ròng. Cổng chặn ngoại vì thế KHÔNG KIỂM ĐƯỢC; chặn phân phối 10 phiên đã độc lập đủ điều kiện KHÔNG."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.724,17",
                "note": "Đáy chính phiên 09/10 từ VNDIRECT Finfo và VNIndex.ai. Chỉ coi vi phạm nếu giá ĐÓNG CỬA ở dưới đáy này."
            },
            {
                "label": "Hỗ trợ kiểm định cũ",
                "value": "1.726,00",
                "note": "Đáy phiên 08/10/2026 của chuỗi VNDIRECT, đã bị xuyên intraday 09/10; không gọi là đã giữ vững."
            },
            {
                "label": "Mốc tâm lý kế tiếp",
                "value": "1.700",
                "note": "Mốc số tròn, chỉ tham chiếu quản trị; không phải điểm mua."
            },
            {
                "label": "Kháng cự gần / MA20–MA50",
                "value": "1.779,01–1.779,82",
                "note": "Bình quân đóng cửa 20 và 50 phiên cùng nguồn VNDIRECT; phải vượt kèm độ rộng/khớp lệnh cải thiện."
            },
            {
                "label": "Kháng cự mạnh / MA200",
                "value": "1.797,40",
                "note": "MA200 TỰ TÍNH từ chuỗi 255 phiên VNDIRECT, không phải mục tiêu lợi nhuận được bảo đảm."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.797,40 và cổng chặn được gỡ",
                "note": "Mốc MA200; số phân phối xuống dưới 6 và phần khối ngoại được xác minh trước khi đánh giá mở mới."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.724,17 khi đóng cửa",
                "note": "Gãy đáy phiên 09/10; giảm vị thế yếu theo kỷ luật, không bắt đáy."
            }
        ],
        "confluence": {
            "score": -2,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.735,09 dưới MA20 1.779,01 và MA50 1.779,82, MA20 thấp hơn mức 1.797,2025 của 5 phiên trước."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm có khớp lệnh 14.694,49 tỷ = 1,111× TB20 13.226,36 tỷ; chưa chạm ngưỡng −1 là ≥1,2×."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "121 tăng/170 giảm = 0,712, cao hơn ngưỡng −1 là ≤0,67 nhưng thấp hơn ngưỡng +1 là ≥1,5."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Top trụ kéo/chèn có nguồn VNIndex.ai; thiếu thanh khoản so TB20 theo ngành và xác minh khối ngoại, nên không tự suy luân chuyển dòng tiền thực."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Thiếu giá trị khớp lệnh ròng HOSE ngày 09/10 và chuỗi 5 phiên đã kiểm chứng; KHÔNG KIỂM ĐƯỢC cổng bán ròng liên tiếp."
                },
                {
                    "factor": "Sức khỏe xu hướng / phân phối",
                    "score": -1,
                    "note": "Có 10 phiên phân phối còn hiệu lực / 25 phiên, gồm 09/10 là phiên mới vì chỉ số −0,223% với khớp lệnh tăng."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Basis F1M cùng lịch đáo hạn và bộ dữ liệu vĩ mô tại mốc cắt chưa được khóa đủ để cho điểm."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 10 phiên phân phối còn hiệu lực / 25 phiên, vượt ngưỡng ≥6 của V3.2 — trạng thái buộc KHÔNG.",
                "Khối ngoại bán ròng chuỗi ≥5: KHÔNG KIỂM ĐƯỢC, tuyệt đối không ghi qua cổng.",
                "Thanh khoản phiên giảm 1,111× TB20, chưa đạt 1,2×; đóng 0,527 biên ngày, không thỏa chặn xả 1/3 dưới.",
                "R:R mô tả chỉ số = (1.779,01 − 1.735,09)/(1.735,09 − 1.724,17) ≈ 4,02 nhưng không vô hiệu hóa chặn cứng."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "TỐT — VN-Index đóng trên MA20–MA50 1.779,01–1.779,82 rồi vượt MA200 1.797,40, độ rộng/khớp lệnh xác nhận và số phân phối giảm dưới 6, có số ngoại đúng phạm vi",
                "then": "Tính lại 7 yếu tố và các cổng chặn; KHÔNG tự động mua chỉ vì vượt đường trung bình."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "CƠ SỞ — giữ trên đáy phiên 09/10 là 1.724,17 nhưng còn dưới vùng MA20–MA50 1.779,01–1.779,82, phân phối chưa hạ",
                "then": "Duy trì KHÔNG mở mua mới; chỉ quản trị vị thế đang có, giữ phòng thủ."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "XẤU — VN-Index đóng dưới 1.724,17, hoặc nhóm yếu lan rộng trong lúc khớp lệnh tăng",
                "then": "Giảm rủi ro ở các mã yếu, không bình quân giá xuống; theo dõi số tròn 1.700 chỉ làm tham chiếu."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — đóng >1.779,82 rồi >1.797,40, kèm xác nhận dòng tiền và giảm số phiên phân phối dưới 6",
                "then": "Đánh giá lại trạng thái; chưa mua tự động khi chặn cứng chưa được gỡ."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG CAO — đóng >1.724,17 nhưng vẫn <1.779,01",
                "then": "GIỮ TRẠNG THÁI KHÔNG, không mua mới, ưu tiên quản trị vị thế và đòn bẩy."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG TRUNG BÌNH — VN-Index đóng <1.724,17",
                "then": "GIẢM RỦI RO: xử lý mã yếu, không bình quân giá xuống, không dùng margin để bắt đáy."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 09/10/2026 • chốt sau ATC • VNDIRECT Finfo + VNIndex.ai (giá) • VNDIRECT 1 NGUỒN (khớp lệnh)",
            "finalState": "KHÔNG",
            "score": "−2/7 (−1 giá, −1 phân phối; thanh khoản, độ rộng, dòng tiền, ngoại, phái sinh: 0)",
            "veto": "CHẶN CỨNG — 10 phiên phân phối / 25 phiên; cổng ngoại KHÔNG KIỂM ĐƯỢC",
            "marketState": "YẾU / PHÂN PHỐI",
            "shortTrend": "Giảm / dưới MA20 1.779,01 và MA50 1.779,82",
            "mediumTrend": "Yếu / dưới MA200 1.797,40",
            "liquidity": "14.694,49 tỷ HOSE khớp lệnh • 1,111× TB20 13.226,36 tỷ • +15,33% so với 08/10",
            "breadth": "121 tăng / 63 tham chiếu / 170 giảm / 5 mã sàn (VNDIRECT); tỷ lệ 0,712",
            "flow": "Chứng khoán 9/15 mã tăng; ngân hàng 7/18 mã tăng; bất động sản 6/10 mã tăng — CHƯA xác nhận thanh khoản ngành dẫn dắt",
            "foreign": "CHƯA XÁC MINH khớp lệnh ròng HOSE 09/10 và chuỗi 5 phiên; không dùng ước tính có thỏa thuận MCH",
            "distributions": "10 phiên / 25 phiên, gồm phiên mới 09/10",
            "proprietary": "CHƯA XÁC MINH tự doanh tổng phiên 09/10",
            "tradingAbility": "Phòng thủ — KHÔNG mở vị thế mới",
            "moneyIn": "Chưa đủ bằng chứng tiền VÀO bền vững; quan sát sức giá ngân hàng, chứng khoán, một số BĐS trong universe 133 mã",
            "moneyOut": "Năng lượng giảm diện rộng 10/12 mã; công nghệ 2/2 mã giảm (sức giá, chưa suy dòng tiền rút thực tế)",
            "support": "1.724,17 (đáy 09/10); 1.726,00 (đáy 08/10); 1.700 số tròn tâm lý",
            "resistance": "1.779,01 (MA20); 1.779,82 (MA50); mạnh 1.797,40 (MA200)",
            "invalidation": "Đóng dưới 1.724,17",
            "buyZone": "Không áp dụng — KHÔNG mở vị thế mới",
            "reduceZone": "Giảm tiếp mã yếu nếu đóng dưới 1.724,17; không bình quân giá xuống",
            "rr": "(1.779,01 − 1.735,09)/(1.735,09 − 1.724,17) ≈ 4,02 (R:R chỉ số tham chiếu, chặn cứng vẫn phủ quyết)",
            "margin": "Giảm / không sử dụng",
            "allocation": "≤20% cổ phiếu / ≥80% tiền mặt (định hướng của kịch bản chặn cứng)",
            "bias": "Phòng thủ",
            "mainAction": "KHÔNG mở mua mới; rà danh mục, ưu tiên hạ mã yếu và không mua đuổi"
        },
        "finalConclusion": [
            "PHÒNG THỦ: phiên 09/10/2026 giữ trạng thái KHÔNG mở vị thế mới vì 10 phiên phân phối / 25 phiên đã kích hoạt CHẶN CỨNG.",
            "Rủi ro lớn nhất là giá vẫn dưới cả MA20/50/200 trong lúc khớp lệnh tăng và độ rộng 121 tăng/170 giảm; không dùng số ngoại/basis chưa khóa để biện hộ cho mua.",
            "Nếu đóng dưới 1.724,17 phải giảm rủi ro; chỉ xem xét đổi trạng thái khi vượt 1.779,82 rồi 1.797,40 với cổng dữ liệu và độ rộng, thanh khoản được xác nhận."
        ],
        "focus": "KHÔNG • 10 phiên phân phối / 25 phiên • mốc vô hiệu 1.724,17 • MA20 1.779,01, MA50 1.779,82, MA200 1.797,40 • 1,111× TB20 • khối ngoại chưa khóa",
        "inference": "Nhật ký nguồn nội bộ: docs/market-source-log-20261009.md. Giá 133/133 mã đã qua cổng hai nguồn VNDIRECT và KBS đúng ngày 09/10; CafeF chưa có dòng 09/10. VN-Index khớp độc lập VNDIRECT và VNIndex.ai 1.735,09. Chuỗi VNDIRECT 255 phiên 01/10/2025–09/10/2026 có MA, thanh khoản, 10 phiên phân phối được tính bằng mã với nhật ký GitHub Actions 37906211448. Khớp lệnh HOSE chỉ có VNDIRECT 1 NGUỒN. Khối ngoại HOSE khớp lệnh, chuỗi 5 phiên, tự doanh và basis F1M chưa được khóa; các yếu tố thiếu dữ liệu chấm 0. Không thay đổi layout v2.2.2.",
        "limitations": [
            "Khớp lệnh HOSE 14.694,49 tỷ mới được khóa độc lập bởi VNDIRECT Finfo (1 NGUỒN). VNIndex.ai ghi tổng giao dịch 27,54 nghìn tỷ bao gồm phạm vi khác: không sử dụng để đối chiếu trực tiếp.",
            "VNDIRECT độ rộng HOSE 121/63/170 trên universe của API; VNIndex.ai 129/100/175 trên 404 mã; không lấy làm số trùng tuyệt đối.",
            "Khối ngoại ròng khớp lệnh HOSE EOD 09/10, chuỗi 5 phiên và tự doanh tổng phiên CHƯA XÁC MINH; số ước tính VNIndex.ai có MCH chi phối, không dùng để kết luận chuỗi bán liên tiếp.",
            "Basis VN30F1M và lịch đáo hạn HNX chưa được xác minh đủ; không cho điểm yếu tố phái sinh.",
            "Bản đồ ngành dùng 133 mã website, chưa có thanh khoản nhóm theo TB20 và khối ngoại theo ngành; không đồng nhất sức giá nhóm với dòng tiền bền vững."
        ],
        "zaloPost": "Phiên 09/10, tôi giữ trạng thái KHÔNG mở vị thế mới. VN-Index đóng tại 1.735,09 điểm, giảm 3,88 điểm. Điều tôi quan tâm hơn mức giảm là thị trường đã có 10 phiên phân phối còn hiệu lực trong 25 phiên gần nhất. Đó là tín hiệu cần phòng thủ, chưa phải thời điểm đánh cược vào một nhịp hồi.\n\nGiá trị khớp lệnh trên HOSE đạt 14.694,49 tỷ đồng, cao hơn 15,33% so với phiên trước, trong khi chỉ số vẫn giảm. Thanh khoản bằng 1,111 lần bình quân 20 phiên: chưa đủ mức để chấm điểm thanh khoản xấu riêng, nhưng việc giá giảm cùng khớp lệnh tăng tạo thêm một phiên phân phối. Độ rộng theo bộ dữ liệu VNDIRECT là 121 mã tăng và 170 mã giảm. Chỉ số chưa khỏe lên dù cuối phiên đã hồi khỏi đáy.\n\nTrong danh mục cổ phiếu theo dõi của website, nhóm chứng khoán có 9 mã tăng trên 15 mã, ngân hàng có 7 mã tăng trên 18 mã; NVL và một số mã bất động sản bật lên rõ. Ngược lại, năng lượng có 10 mã giảm trên 12 mã, và FPT tiếp tục yếu. Đây mới là sự phân hóa về giá; chưa đủ bằng chứng để khẳng định dòng tiền lớn đã trở lại một cách bền vững. Vì vậy không mua đuổi các mã vừa tăng nóng.\n\nPhiên giao dịch tiếp theo, NẾU VN-Index giữ trên 1.724,17 nhưng còn dưới vùng 1.779,01–1.779,82, THÌ ưu tiên quản trị hàng có sẵn, không mở mua mới. NẾU đóng cửa dưới 1.724,17, THÌ giảm tiếp các vị thế yếu, không bình quân giá xuống. NẾU vượt lại 1.779,82 và sau đó 1.797,40 với độ rộng, thanh khoản cải thiện, THÌ mới tính lại trạng thái; vượt giá đơn lẻ chưa đủ để mua.\n\nViệc cần làm ngay là rà soát danh mục, giảm hoặc không dùng đòn bẩy và tuân thủ điểm dừng lỗ của từng cổ phiếu. Tỷ trọng cổ phiếu định hướng không quá 20% khi chặn cứng còn hoạt động. Bảo vệ sức mua quan trọng hơn cố gắng bắt đúng đáy.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 09/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-09&size=500"
            },
            {
                "label": "VNDIRECT Finfo — lịch sử chỉ số và khớp lệnh 255 phiên tới 09/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-09&size=500"
            },
            {
                "label": "VNIndex.ai — chỉ số, biên phiên, top 5 đóng góp 09/10 EOD",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "GitHub Actions — kiểm định chuỗi VNDIRECT, MA, thanh khoản và phân phối",
                "url": "https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/37906211448"
            }
        ]
    },
    {
        "id": "market-view-20261008",
        "date": "2026-10-08",
        "publishedAt": "08/10/2026 • Sau phiên",
        "edition": "Số 35",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT + CafeF/KBS + VNIndex.ai + VnEconomy + VietnamBiz + DNSE/HNX + VietnamPlus • dữ liệu cuối ngày 08.10.2026 • 133/133 mã đã khóa EOD • tự doanh tổng phiên: CHƯA XÁC MINH",
        "title": "Phân phối thứ 9 xuất hiện — vùng 1.726 trở thành mốc sống còn ngắn hạn",
        "thesis": "Dữ liệu đến hết phiên 08/10/2026. VN-Index đóng 1.738,97 điểm, giảm 14,42 điểm (-0,82%), nằm dưới MA20 1.782,01, MA50 1.778,73 và MA200 1.797,12. Giá trị khớp lệnh theo chuỗi VNDIRECT đạt 12.740,77 tỷ đồng, bằng 0,969 lần bình quân 20 phiên 13.149,63 tỷ đồng; độ rộng chuẩn VNDIRECT là 110 mã tăng, 56 tham chiếu, 183 mã giảm và 7 mã sàn. Thanh khoản cao hơn 07/10 khiến 08/10 trở thành phiên phân phối thứ 9 còn hiệu lực. Khối ngoại HOSE bán ròng 446 tỷ đồng, nối chuỗi toàn thị trường lên 12 phiên; hai CHẶN CỨNG cùng hoạt động. TRẠNG THÁI CHỐT: KHÔNG — phòng thủ, không mở vị thế mới, tỷ trọng cổ phiếu định hướng không quá 20%.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "Phân phối thứ 9 xuất hiện — vùng 1.726 trở thành mốc sống còn ngắn hạn",
            "thesis": "VN-Index mất 0,82%, độ rộng xuống 110/183 và tạo phiên phân phối mới do thanh khoản tăng so với 07/10. Năng lượng và nông nghiệp còn giữ nhịp, nhưng ngân hàng, chứng khoán và bất động sản suy yếu. Với 9 phiên phân phối cùng chuỗi bán ròng khối ngoại 12 phiên, trạng thái bắt buộc vẫn là KHÔNG.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "RSI14 ~38,06 • MACD âm • 9 phiên phân phối.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "RSI14 ~38,06",
                            "tone": "warning"
                        },
                        {
                            "text": " • MACD âm • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "9 phiên phân phối",
                            "tone": "negative"
                        }
                    ],
                    "text": "Đóng cửa 1.738,97 thấp hơn MA50 1.778,73, MA20 1.782,01 và MA200 1.797,12; MA20 tiếp tục dốc xuống so với mức 1.802,97 của 5 phiên trước.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng & thanh khoản",
                    "signal": "110 tăng / 183 giảm",
                    "detail": "12.741 tỷ • 0,969× TB20 • phân phối mới.",
                    "signalParts": [
                        {
                            "text": "110 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "183 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "12.741 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • 0,969× TB20 • ",
                            "tone": "warning"
                        },
                        {
                            "text": "phân phối mới",
                            "tone": "negative"
                        }
                    ],
                    "text": "Tỷ lệ tăng/giảm 0,601 thấp hơn ngưỡng 0,67 nên độ rộng chấm -1. Thanh khoản chưa đủ 1,2× TB20 để chấm -1 riêng yếu tố thanh khoản, nhưng cao hơn 07/10 nên phiên giảm này được tính là một phiên phân phối mới.",
                    "tone": "negative"
                },
                {
                    "label": "Khối ngoại",
                    "signal": "HOSE −446 tỷ",
                    "detail": "12 phiên bán ròng liên tiếp • 5 phiên HOSE ~−7.536 tỷ.",
                    "signalParts": [
                        {
                            "text": "HOSE −446 tỷ",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "12 phiên bán ròng liên tiếp",
                            "tone": "negative"
                        },
                        {
                            "text": " • 5 phiên HOSE ~−7.536 tỷ.",
                            "tone": "negative"
                        }
                    ],
                    "text": "Khối ngoại tiếp tục tạo áp lực tại ngân hàng và PNJ. Chuỗi bán ròng vượt xa ngưỡng 5 phiên của chặn cứng v3.2.",
                    "tone": "negative"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng tối đa 20%, giảm hoặc không dùng margin.",
                "Nếu VN-Index đóng dưới 1.726,00: hạ tiếp phần yếu và không bắt đáy cơ học; vùng 1.700 chỉ là hỗ trợ tâm lý tham chiếu, không phải điểm mua tự động.",
                "Chỉ tính lại trạng thái khi chỉ số lấy lại 1.778,73 rồi vùng 1.782,01–1.797,12 với thanh khoản, độ rộng, khối ngoại và số phiên phân phối cùng cải thiện."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "133/133 mã đã khóa EOD 08/10 • 128 mã khớp trực tiếp VNDIRECT–CafeF + 5 mã KBS exact-date xác nhận • chuỗi kỹ thuật 254 phiên cùng nguồn • tự doanh tổng phiên CHƯA XÁC MINH",
                "shortLabel": "EOD 133/133 đã khóa • 2 chặn cứng đang hoạt động"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.738,97",
                "change": "−14,42 • −0,82%",
                "changeParts": [
                    {
                        "text": "−14,42",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,82%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "110 tăng / 183 giảm",
                "change": "56 tham chiếu • 7 mã giảm sàn",
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative",
                "valueParts": [
                    {
                        "text": "110 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "183 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "56 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "7 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~12.741 tỷ",
                "valueParts": [
                    {
                        "text": "~12.741 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "0,969× bình quân 20 phiên ~13.150 tỷ",
                "changeParts": [
                    {
                        "text": "0,969×",
                        "tone": "warning"
                    },
                    {
                        "text": " bình quân 20 phiên ~13.150 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "up",
                "snapshotState": "liquidity_neutral"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "9 phiên phân phối • ngoại bán ròng 12 phiên",
                "changeParts": [
                    {
                        "text": "9 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "ngoại bán ròng 12 phiên",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng 1.738,97 điểm, giảm 14,42 điểm (-0,82%), mở cửa 1.749,25, cao nhất 1.764,45 và thấp nhất 1.726,00. VNDIRECT và VNIndex.ai khớp mức đóng cửa, mức giảm và biên phiên; VnEconomy cũng xác nhận mức giảm 14,42 điểm và -0,82%. Giá đóng ở khoảng 33,7% biên ngày, chỉ nhỉnh hơn ranh giới 1/3 dưới nên theo công thức v3.2 chưa kích hoạt chặn cứng xả cuối phiên.",
            "Chuỗi 254 phiên VNDIRECT cho MA20 1.782,01, MA50 1.778,73 và MA200 1.797,12. MA20 thấp hơn mức 1.802,97 của 5 phiên trước; RSI14 khoảng 38,06 và MACD khoảng -13,14 thấp hơn đường tín hiệu khoảng -7,30. Cấu trúc kỹ thuật vẫn yếu rõ.",
            "GT khớp lệnh VNDIRECT đạt 12.740,77 tỷ đồng, bằng 0,969 lần TB20 13.149,63 tỷ đồng. Mức này chưa đạt 1,2× để chấm -1 riêng yếu tố thanh khoản, nhưng cao hơn 12.473,83 tỷ của 07/10; kết hợp mức giảm -0,82%, 08/10 trở thành phiên phân phối thứ 9 còn hiệu lực.",
            "Độ rộng chuẩn VNDIRECT là 110 mã tăng, 56 tham chiếu, 183 mã giảm và 7 mã sàn; tỷ lệ tăng/giảm 0,601 nên yếu tố độ rộng chấm -1. VnEconomy ghi 122 mã tăng/190 mã giảm do khác phạm vi tổng hợp; cả hai nguồn đều cho thấy bên giảm áp đảo và bài giữ VNDIRECT làm chuẩn vận hành.",
            "Top 5 kéo giảm theo VNIndex.ai là VHM -3,90 điểm, VIC -3,21, VCB -1,03, BID -0,96 và CTG -0,88; tổng -9,98 điểm, tương đương khoảng 69,2% mức giảm 14,42 điểm. Chiều đỡ chỉ số có GAS +1,79 điểm, PLX +0,37, BVH +0,37, VPL +0,26 và BSR +0,26. Vì rubric >70% được định nghĩa cho mức tăng, yếu tố chất lượng dòng tiền phiên giảm này chấm 0 thay vì tự sửa quy tắc.",
            "Trong universe 133 mã, năng lượng tăng 10/12 mã với trung vị khoảng +1,75% và nông nghiệp tăng 4/6 mã với trung vị khoảng +1,44%; BĐS khu công nghiệp tăng 3/4 mã. Ngược lại chứng khoán giảm 13/15 mã, ngân hàng giảm 15/18 mã, bất động sản giảm 7/10 mã và cảng biển–logistics giảm 3/4 mã. Tiền đang xoay chọn lọc sang năng lượng/nông nghiệp, chưa phải lan tỏa rộng.",
            "Khối ngoại HOSE bán ròng 446 tỷ đồng ngày 08/10 và chuỗi bán ròng toàn thị trường lên 12 phiên liên tiếp. Tính 5 phiên giao dịch gần nhất trên HOSE, tổng bán ròng xấp xỉ 7.536 tỷ đồng. Dữ liệu tự doanh tổng phiên 08/10 chưa được xác minh đủ tại mốc khóa nên không dùng trong bài công khai.",
            "VN30F1M đóng 1.880,20 điểm, cao hơn VN30 cơ sở 1.877,00 khoảng 3,20 điểm (+0,170%). Basis dương là điểm đệm, nhưng bối cảnh trước phiên bất lợi rõ: Phố Wall giảm, lợi suất dài hạn Mỹ lên mức cao nhất 24 năm và Brent trên 100 USD/thùng. Vì vậy yếu tố phái sinh/vĩ mô chấm -1."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.726,00",
                "note": "Đáy phiên 08/10, được đối chiếu VNDIRECT và VNIndex.ai. Đóng dưới mốc này làm mất đáy ngắn hạn vừa kiểm định."
            },
            {
                "label": "Hỗ trợ mạnh tham chiếu",
                "value": "1.700",
                "note": "Số tròn tâm lý; chỉ dùng làm mốc quản trị tham chiếu, không phải điểm mua tự động."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.778,73",
                "note": "MA50 tự tính từ chuỗi 254 phiên. Đây là mốc đầu tiên thị trường phải lấy lại để giảm áp lực xu hướng."
            },
            {
                "label": "Kháng cự mạnh / MA20–MA200",
                "value": "1.782,01–1.797,12",
                "note": "Cụm MA20–MA200 tự tính. Vượt vùng này chỉ có ý nghĩa khi độ rộng, thanh khoản và hai chặn cứng cùng cải thiện."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.797,12 + xác nhận",
                "note": "Chỉ tính lại trạng thái sau khi vượt cụm MA, số phiên phân phối giảm dưới 6 và chuỗi bán ròng khối ngoại được giải tỏa."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.726,00",
                "note": "Đóng dưới đáy phiên 08/10 xác nhận nhịp suy yếu mở rộng; dưới 1.700 là mức phòng thủ cao hơn."
            }
        ],
        "confluence": {
            "score": -5,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.738,97 dưới MA20 1.782,01 và MA50 1.778,73; MA20 giảm so với mức 1.802,97 của 5 phiên trước."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm với GT khớp lệnh 12.740,77 tỷ, bằng 0,969 lần TB20; chưa đạt điều kiện -1 là >=1,2 lần TB20."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "110 mã tăng / 183 mã giảm, tỷ lệ 0,601 <=0,67."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Phiên giảm có nhiều cụm ngành tăng thực; rubric top 5 >70% được định nghĩa cho mức tăng nên không tự chuyển thành -1."
                },
                {
                    "factor": "Khối ngoại",
                    "score": -1,
                    "note": "Khối ngoại bán ròng phiên thứ 12 liên tiếp; riêng HOSE 08/10 khoảng -446 tỷ đồng, tổng 5 phiên gần nhất khoảng -7.536 tỷ đồng."
                },
                {
                    "factor": "Sức khỏe xu hướng / phiên phân phối",
                    "score": -1,
                    "note": "Có 9 phiên phân phối còn hiệu lực trong 25 phiên; 08/10 là phiên phân phối mới."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": -1,
                    "note": "Basis VN30F1M +3,20 điểm (+0,170%) nhưng bối cảnh quốc tế bất lợi rõ: Phố Wall giảm, lợi suất dài hạn Mỹ lên đỉnh 24 năm và Brent trên 100 USD/thùng."
                }
            ],
            "veto": [
                "CHẶN CỨNG: khối ngoại bán ròng 12 phiên liên tiếp, vượt ngưỡng >=5 của v3.2.",
                "CHẶN CỨNG: 9 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng >=6 của v3.2.",
                "Vị trí đóng cửa 0,337 biên phiên chỉ nhỉnh hơn ranh giới 1/3 dưới; thanh khoản 0,969× TB20 nên chưa kích hoạt chặn cứng xả cuối phiên theo công thức.",
                "R:R tới MA50 = (1.778,73 - 1.738,97) / (1.738,97 - 1.726,00) ≈ 3,07; không kích hoạt chặn R:R."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "KỊCH BẢN TỐT — VN-Index lấy lại 1.778,73 rồi đóng trên 1.782,01–1.797,12; độ rộng và thanh khoản đạt chuẩn, số phiên phân phối giảm dưới 6 và chuỗi bán ròng khối ngoại được giải tỏa",
                "then": "Chỉ khi đó mới tính lại điểm để đánh giá chuyển KHÔNG → CHỜ; không mặc định mua chỉ vì vượt một mốc giá."
            },
            {
                "state": "neutral",
                "likelihood": "TRUNG BÌNH",
                "if": "KỊCH BẢN CƠ SỞ — VN-Index giữ trên 1.726,00 nhưng còn dưới 1.778,73, dòng tiền tiếp tục xoay chọn lọc và hai chặn cứng chưa được giải tỏa",
                "then": "Duy trì KHÔNG; tỷ trọng cổ phiếu định hướng tối đa 20%, không mở vị thế mới và chỉ quản trị hàng đang có."
            },
            {
                "state": "risk_off",
                "likelihood": "CAO",
                "if": "KỊCH BẢN XẤU — VN-Index đóng dưới 1.726,00; đặc biệt nếu áp lực bán lan rộng và thanh khoản tăng",
                "then": "Hạ tiếp phần yếu, dừng mở mới, không bình quân giá xuống; nếu mất vùng số tròn 1.700 thì tăng mức phòng thủ."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — vượt 1.778,73 rồi 1.782,01–1.797,12 với xác nhận dòng tiền và hai chặn cứng được giải tỏa",
                "then": "Tính lại trạng thái; chưa tự động mua chỉ vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG TRUNG BÌNH — giữ trên 1.726,00 nhưng còn dưới 1.778,73",
                "then": "GIỮ TRẠNG THÁI KHÔNG. Tỷ trọng định hướng <=20%, không mở mới, giảm hoặc không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG CAO — đóng dưới 1.726,00; đặc biệt mất 1.700",
                "then": "GIẢM RỦI RO tiếp; xử lý phần yếu, không bắt đáy cơ học và không bình quân giá xuống."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 08/10/2026 • kiểm định sau ATC",
            "finalState": "KHÔNG",
            "score": "-5/7",
            "veto": "2 CHẶN CỨNG — khối ngoại bán ròng 12 phiên + 9 phiên phân phối",
            "marketState": "YẾU / PHÂN PHỐI",
            "shortTrend": "Giảm / dưới MA20 và MA50",
            "mediumTrend": "Yếu / dưới MA200",
            "liquidity": "0,969× TB20",
            "breadth": "110 tăng / 183 giảm",
            "flow": "Năng lượng và nông nghiệp giữ nhịp; ngân hàng, chứng khoán, BĐS chịu áp lực",
            "foreign": "HOSE -446 tỷ; chuỗi bán ròng 12 phiên; 5 phiên ~-7.536 tỷ",
            "distributions": "9 phiên / 25 phiên",
            "proprietary": "CHƯA XÁC MINH tổng phiên 08/10",
            "tradingAbility": "Phòng thủ",
            "moneyIn": "Năng lượng; nông nghiệp; một phần BĐS khu công nghiệp",
            "moneyOut": "Chứng khoán; ngân hàng; phần lớn bất động sản; cảng biển–logistics",
            "support": "1.726,00; mạnh tham chiếu 1.700",
            "resistance": "1.778,73; mạnh 1.782,01–1.797,12",
            "invalidation": "Đóng dưới 1.726,00",
            "buyZone": "Không áp dụng",
            "reduceZone": "Hạ tiếp nếu đóng dưới 1.726,00; tăng phòng thủ nếu mất 1.700",
            "rr": "(1.778,73 - 1.738,97) / (1.738,97 - 1.726,00) ≈ 3,07",
            "margin": "Giảm / không dùng",
            "allocation": "<=20% cổ phiếu / >=80% tiền mặt",
            "bias": "Phòng thủ",
            "mainAction": "Không mở vị thế mới"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng không quá 20%.",
            "Rủi ro quyết định là 9 phiên phân phối cùng chuỗi bán ròng khối ngoại 12 phiên, trong khi VN-Index vẫn nằm dưới MA20/MA50/MA200.",
            "Chỉ đổi quan điểm khi VN-Index lấy lại 1.778,73 rồi 1.782,01–1.797,12 với độ rộng, thanh khoản và hai chặn cứng cùng cải thiện; đóng dưới 1.726,00 thì hạ rủi ro tiếp."
        ],
        "focus": "KHÔNG • <=20% cổ phiếu • 1.726,00 mốc vô hiệu • 1.700 hỗ trợ tâm lý • MA50 1.778,73 • MA20–MA200 1.782,01–1.797,12 • 0,969× TB20 • 9 phiên phân phối • ngoại bán ròng 12 phiên",
        "inference": "Nhật ký nguồn nội bộ được lưu tại docs/market-source-log-20261008.md. Data Gate 133/133 mã đã PASS: 128 mã khớp trực tiếp VNDIRECT–CafeF; DRI, G36, MSR, PHP, QNS lệch CafeF nhưng KBS exact-date xác nhận giá VNDIRECT. VN-Index 1.738,97 và -14,42 (-0,82%) được đối chiếu VNDIRECT, VNIndex.ai và VnEconomy. MA20/MA50/MA200, TB20, tỷ lệ độ rộng, phiên phân phối và R:R được tính bằng code từ chuỗi 254 phiên VNDIRECT 01/10/2025–08/10/2026. Điểm v3.2 = -5/7 với cấu phần -1,0,-1,0,-1,-1,-1. Có 9 phiên phân phối và khối ngoại bán ròng 12 phiên liên tiếp nên hai chặn cứng kích hoạt; trạng thái cuối bắt buộc là KHÔNG.",
        "limitations": [
            "Độ rộng VNDIRECT là 110 tăng/56 tham chiếu/183 giảm, trong khi VnEconomy ghi 122 tăng/190 giảm do khác phạm vi tổng hợp; website giữ VNDIRECT làm chuẩn vận hành và không trộn hai bộ số.",
            "GT khớp lệnh 12.740,77 tỷ đồng dùng để tính TB20/phân phối là nmValue từ một chuỗi VNDIRECT duy nhất; các nguồn báo chí công bố tổng GTGD hoặc phạm vi khác nên không dùng để ghép chuỗi.",
            "Tự doanh tổng phiên 08/10 chưa có nguồn hậu phiên đủ rõ tại mốc khóa; không đưa số vào bài Zalo hoặc dùng để chấm điểm.",
            "Bản đồ ngành tính trên universe 133 mã của website, không đại diện toàn bộ số mã niêm yết."
        ],
        "zaloPost": "Phiên 08/10 khiến tôi tiếp tục giữ trạng thái KHÔNG. VN-Index mất 14,42 điểm, đóng tại 1.738,97. Điểm xấu nhất không chỉ là mức giảm, mà là thanh khoản khớp lệnh tăng lên khoảng 12.741 tỷ đồng so với phiên trước, khiến 08/10 trở thành phiên phân phối thứ 9 còn hiệu lực.\n\nĐộ rộng cũng yếu rõ: theo bộ số chuẩn VNDIRECT có 110 mã tăng so với 183 mã giảm. Ngân hàng giảm 15/18 mã, chứng khoán giảm 13/15 mã và phần lớn bất động sản tiếp tục chịu áp lực. Dòng tiền chưa biến mất hoàn toàn: năng lượng có 10/12 mã tăng, nông nghiệp 4/6 mã tăng và BĐS khu công nghiệp vẫn giữ được nhịp. Nhưng đây là xoay vòng chọn lọc, chưa phải tiền quay lại toàn thị trường.\n\nKhối ngoại HOSE bán ròng 446 tỷ đồng, nối chuỗi bán ròng lên 12 phiên liên tiếp; tổng 5 phiên gần nhất trên HOSE xấp xỉ 7.536 tỷ đồng. Cùng với 9 phiên phân phối, đây là hai chặn cứng khiến tôi chưa thể mở vị thế mới dù basis phái sinh đang dương.\n\nKế hoạch phiên tới: nếu VN-Index còn trên 1.726,00, tôi tiếp tục quan sát và chỉ giữ những mã khỏe tương đối. Nếu đóng dưới 1.726,00, ưu tiên hạ thêm phần yếu, không bắt dao rơi; vùng 1.700 chỉ là mốc tâm lý tham chiếu. Chỉ khi chỉ số lấy lại 1.778,73 rồi vùng 1.782,01–1.797,12 với độ rộng, thanh khoản và khối ngoại cùng cải thiện, mới tính lại trạng thái.\n\nTỷ trọng định hướng vẫn tối đa khoảng 20% cổ phiếu; margin giảm hoặc không dùng. Việc cần làm ngay là rà danh mục và loại bỏ những vị thế yếu hơn thị trường.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 08/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-08&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index 254 phiên tính MA, TB20 và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-08&size=500"
            },
            {
                "label": "VnEconomy — hậu phiên 08/10, độ rộng và áp lực blue-chip",
                "url": "https://vneconomy.vn/quet-sach-thanh-qua-3-phien-tang-vn-index-giam-manh-thu-thach-day-ngan-han.htm"
            },
            {
                "label": "VNIndex.ai — đối chiếu EOD và đóng góp điểm 08/10",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "VietnamBiz — khối ngoại bán ròng 12 phiên liên tiếp",
                "url": "https://vietnambiz.vn/khoi-ngoai-ban-rong-12-phien-lien-tiep-xa-manh-nhom-ngan-hang-202610815382148.htm"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 08/10/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1791392400&to=1791451800"
            },
            {
                "label": "HNX — quy cách hợp đồng tương lai VN30",
                "url": "https://cms.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html"
            },
            {
                "label": "VietnamPlus/TTXVN — bối cảnh Mỹ trước phiên 08/10",
                "url": "https://www.vietnamplus.vn/cac-chi-so-chung-khoan-my-giam-diem-roi-khoi-cac-muc-cao-ky-luc-post1140666.amp"
            }
        ]
    },
    {
        "id": "market-view-20261007",
        "date": "2026-10-07",
        "publishedAt": "07/10/2026 • Sau phiên",
        "edition": "Số 34",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT + KBS + VNIndex.ai + DNSE + VnEconomy/VOV • dữ liệu cuối ngày 07.10.2026 • 133/133 mã đã khóa EOD • khối ngoại/tự doanh chính thức: CHƯA XÁC MINH",
        "title": "Giảm nhẹ, dòng tiền xoay nhóm — chặn cứng vẫn giữ trạng thái KHÔNG",
        "thesis": "Dữ liệu đến hết phiên 07/10/2026. VN-Index đóng 1.753,39 điểm, giảm 5,69 điểm (-0,32%), nằm dưới MA20 1.786,53, MA50 1.777,33 và MA200 1.796,65. Giá trị khớp lệnh theo chuỗi VNDIRECT đạt 12.473,83 tỷ đồng, bằng 0,949 lần bình quân 20 phiên 13.142,90 tỷ đồng; độ rộng 144 mã tăng, 64 tham chiếu, 147 mã giảm và 4 mã sàn. Phiên giảm không tạo thêm phiên phân phối vì thanh khoản thấp hơn 06/10; số phiên phân phối còn hiệu lực vẫn là 8, đủ kích hoạt CHẶN CỨNG. TRẠNG THÁI CHỐT: KHÔNG — phòng thủ, không mở vị thế mới, tỷ trọng cổ phiếu định hướng không quá 20%.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "Giảm nhẹ, dòng tiền xoay nhóm — chặn cứng vẫn giữ trạng thái KHÔNG",
            "thesis": "VN-Index điều chỉnh -0,32% nhưng thanh khoản chỉ 0,949 lần TB20 nên chưa hình thành phiên phân phối mới. Dòng tiền xoay sang cảng biển–logistics, BĐS khu công nghiệp và công nghiệp, trong khi chứng khoán và phần lớn BĐS suy yếu. Tuy vậy, 8 phiên phân phối còn hiệu lực buộc trạng thái tiếp tục là KHÔNG.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "8 phiên phân phối còn hiệu lực • RSI14 ~41,50.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "8 phiên phân phối",
                            "tone": "negative"
                        },
                        {
                            "text": " còn hiệu lực • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "RSI14 ~41,50",
                            "tone": "warning"
                        }
                    ],
                    "text": "Giá đóng cửa 1.753,39 thấp hơn MA20 1.786,53, MA50 1.777,33 và MA200 1.796,65; MA20 tiếp tục thấp hơn mức 1.806,89 của 5 phiên trước.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản & độ rộng",
                    "signal": "0,949× TB20 • 144 tăng / 147 giảm",
                    "detail": "Phiên giảm nhưng thanh khoản thấp hơn 06/10 • không tạo phân phối mới.",
                    "signalParts": [
                        {
                            "text": "0,949× TB20",
                            "tone": "warning"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "144 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "147 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Phiên giảm",
                            "tone": "negative"
                        },
                        {
                            "text": " nhưng thanh khoản thấp hơn 06/10 • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "không tạo phân phối mới",
                            "tone": "positive"
                        }
                    ],
                    "text": "GT khớp lệnh 12.473,83 tỷ đồng, thấp hơn 14.489,25 tỷ của 06/10 và bằng 0,949 lần TB20 13.142,90 tỷ đồng; yếu tố thanh khoản chấm 0, độ rộng chấm 0.",
                    "tone": "warning"
                },
                {
                    "label": "Dòng tiền ngành",
                    "signal": "Cảng biển–logistics 4/4 tăng",
                    "detail": "BĐS KCN 3/4 tăng • chứng khoán 14/15 giảm.",
                    "signalParts": [
                        {
                            "text": "Cảng biển–logistics 4/4 tăng",
                            "tone": "positive"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "BĐS KCN 3/4 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "chứng khoán 14/15 giảm",
                            "tone": "negative"
                        }
                    ],
                    "text": "Dòng tiền có xoay vòng thực sang cảng biển–logistics, BĐS khu công nghiệp, công nghiệp và một phần nông nghiệp; ngược lại chứng khoán và phần lớn bất động sản bị rút tiền.",
                    "tone": "neutral"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng tối đa 20%, giảm hoặc không dùng margin.",
                "Nếu VN-Index đóng dưới 1.743,24: coi nhịp cân bằng ngắn hạn thất bại; thủng tiếp 1.728,36 thì hạ thêm phần yếu.",
                "Chỉ tính lại trạng thái khi chỉ số vượt 1.777,33 rồi vùng 1.786,53–1.796,65 với thanh khoản, độ rộng và số phiên phân phối cùng cải thiện; điều kiện khối ngoại phải được kiểm đủ dữ liệu."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "133/133 mã đã khóa EOD 07/10 • KBS exact-date xác nhận 133/133 giá đóng cửa VNDIRECT • MA/TB20/phân phối tính từ 253 phiên cùng nguồn • khối ngoại/tự doanh chính thức CHƯA XÁC MINH",
                "shortLabel": "EOD 133/133 đã khóa • chặn cứng 8 phiên phân phối"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.753,39",
                "change": "−5,69 • −0,32%",
                "changeParts": [
                    {
                        "text": "−5,69",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,32%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "144 tăng / 147 giảm",
                "change": "64 tham chiếu • 4 mã giảm sàn",
                "tone": "neutral",
                "direction": "flat",
                "snapshotState": "neutral",
                "valueParts": [
                    {
                        "text": "144 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "147 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "64 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "4 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~12.474 tỷ",
                "valueParts": [
                    {
                        "text": "~12.474 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "0,949× bình quân 20 phiên ~13.143 tỷ",
                "changeParts": [
                    {
                        "text": "0,949×",
                        "tone": "warning"
                    },
                    {
                        "text": " bình quân 20 phiên ~13.143 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "8 phiên phân phối còn hiệu lực",
                "changeParts": [
                    {
                        "text": "8 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " còn hiệu lực",
                        "tone": "neutral"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng 1.753,39 điểm, giảm 5,69 điểm (-0,32%), mở cửa và cao nhất cùng 1.760,54, thấp nhất 1.743,24. VNDIRECT và VNIndex.ai khớp tuyệt đối mức đóng cửa, mức thay đổi và biên phiên. Giá đóng ở khoảng 58,7% biên độ ngày, thuộc 1/3 giữa nên không có tín hiệu bị xả đóng cửa theo định nghĩa chặn cứng.",
            "Chuỗi 253 phiên VNDIRECT cho MA20 1.786,53, MA50 1.777,33 và MA200 1.796,65. MA20 thấp hơn mức 1.806,89 của 5 phiên trước; RSI14 khoảng 41,50 và MACD khoảng -11,64 thấp hơn đường tín hiệu khoảng -5,84. Chỉ số vẫn ở dưới cả ba đường MA quan trọng.",
            "GT khớp lệnh theo chuỗi VNDIRECT là 12.473,83 tỷ đồng, bằng 0,949 lần TB20 13.142,90 tỷ đồng và thấp hơn 14.489,25 tỷ của 06/10. Vì 07/10 giảm -0,32% nhưng thanh khoản thấp hơn phiên trước, đây không phải phiên phân phối mới; số phiên phân phối còn hiệu lực giữ nguyên 8.",
            "Độ rộng VNDIRECT là 144 mã tăng, 64 tham chiếu, 147 mã giảm và 4 mã sàn; tỷ lệ tăng/giảm 0,980. Mức này không đủ +1 nhưng cũng không chạm ngưỡng -1 của v3.2, cho thấy thị trường phân hóa hơn là bán lan rộng toàn diện.",
            "VNIndex.ai ghi top 5 kéo giảm gồm VIC -3,27 điểm, VHM -1,72, LPB -1,18, VPL -0,56 và GAS -0,45; tổng -7,18 điểm, lớn hơn mức giảm ròng 5,69 điểm của chỉ số vì được bù một phần bởi các mã tăng như GVR, MSN, BSR, MWG và MCH. Rubric v3.2 dùng ngưỡng top 5 >70% cho mức tăng, nên yếu tố chất lượng dòng tiền phiên giảm này chấm 0 thay vì tự sửa quy tắc.",
            "Trong universe 133 mã, cảng biển–logistics tăng 4/4 mã với trung vị khoảng +4,10%; BĐS khu công nghiệp tăng 3/4 mã với trung vị khoảng +1,55%; công nghiệp tăng 4/7 mã và nông nghiệp tăng 4/6 mã. Ngược lại chứng khoán giảm 14/15 mã với trung vị khoảng -1,53% và bất động sản giảm 7/10 mã với trung vị khoảng -1,30%. Dòng tiền đang xoay nhóm rõ nhưng chưa hình thành lan tỏa toàn thị trường.",
            "VN30F1M đóng 1.894,40 điểm, cao hơn VN30 cơ sở 1.894,20 khoảng 0,20 điểm (+0,011%). Hợp đồng hiện tại đáo hạn 15/10/2026, nên 07/10 chưa thuộc 3 phiên trước đáo hạn. Chứng khoán Mỹ lập kỷ lục và lợi suất Mỹ hạ nhiệt là điểm hỗ trợ, nhưng Brent vẫn trên 100 USD/thùng; yếu tố phái sinh/vĩ mô chấm 0 vì bối cảnh pha trộn.",
            "Khối ngoại và tự doanh 07/10 tại mốc khóa chưa có hai nguồn hậu phiên độc lập cùng phạm vi để xác nhận số chính thức. Theo kỷ luật v3.2, yếu tố khối ngoại chấm 0 và điều kiện chặn liên quan được ghi KHÔNG KIỂM ĐƯỢC, không coi là đã qua."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.743,24",
                "note": "Đáy phiên 07/10, đã đối chiếu VNDIRECT và VNIndex.ai. Đóng dưới mốc này làm mất cấu trúc cân bằng trong phiên."
            },
            {
                "label": "Hỗ trợ mạnh",
                "value": "1.728,36",
                "note": "Đáy thấp nhất 20 phiên trước trong chuỗi VNDIRECT. Mất vùng này làm rủi ro suy yếu mở rộng."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.777,33",
                "note": "MA50 tự tính từ chuỗi 253 phiên. Giá đóng cửa cách khoảng 1,35% và chưa vượt, kích hoạt chặn mềm sát kháng cự."
            },
            {
                "label": "Kháng cự mạnh / MA20–MA200",
                "value": "1.786,53–1.796,65",
                "note": "Cụm MA20–MA200 tự tính. Cần lấy lại vùng này cùng thanh khoản và độ rộng cải thiện mới có cơ sở giảm phòng thủ."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.796,65 + xác nhận",
                "note": "Chỉ tính lại trạng thái sau khi vượt cụm MA, thanh khoản/độ rộng đạt chuẩn v3.2 và số phiên phân phối giảm dưới 6."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.743,24",
                "note": "Đóng dưới đáy phiên 07/10 làm hỏng cấu trúc cân bằng; dưới 1.728,36 là tín hiệu phòng thủ mạnh hơn."
            }
        ],
        "confluence": {
            "score": -2,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.753,39 dưới MA20 1.786,53 và MA50 1.777,33; MA20 thấp hơn mức 1.806,89 của 5 phiên trước."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm với GT khớp lệnh 12.473,83 tỷ, bằng 0,949 lần TB20; chưa đạt điều kiện -1 là >=1,2 lần TB20."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "144 mã tăng / 147 mã giảm, tỷ lệ 0,980; nằm giữa hai ngưỡng 0,67 và 1,5."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Phiên giảm có nhiều cụm ngành tăng thực; rubric top 5 >70% được định nghĩa cho mức tăng nên không tự chuyển thành -1."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Số hậu phiên chính thức 07/10 chưa đủ hai nguồn độc lập cùng phạm vi; không dùng số ước tính để chấm."
                },
                {
                    "factor": "Sức khỏe xu hướng / phiên phân phối",
                    "score": -1,
                    "note": "Có 8 phiên phân phối còn hiệu lực trong 25 phiên; 07/10 không tạo thêm vì thanh khoản thấp hơn 06/10."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Basis VN30F1M +0,20 điểm (+0,011%) nhưng bối cảnh quốc tế pha trộn giữa chứng khoán Mỹ/lợi suất tích cực và Brent trên 100 USD/thùng."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 8 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng >=6 của v3.2.",
                "KHÔNG KIỂM ĐƯỢC chặn cứng khối ngoại 07/10 vì số hậu phiên chính thức chưa đủ hai nguồn cùng phạm vi.",
                "CHẶN MỀM: giá đóng cửa cách MA50 khoảng 1,35% nhưng chưa vượt.",
                "R:R tới MA50 = (1.777,33 - 1.753,39) / (1.753,39 - 1.743,24) ≈ 2,36; không kích hoạt chặn R:R."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "KỊCH BẢN TỐT — VN-Index lấy lại 1.777,33 rồi đóng trên 1.786,53–1.796,65; thanh khoản phiên tăng đạt chuẩn, tỷ lệ tăng/giảm cải thiện rõ, số phiên phân phối giảm dưới 6 và điều kiện khối ngoại được xác minh",
                "then": "Chỉ khi đó mới tính lại điểm để đánh giá chuyển KHÔNG → CHỜ; không mặc định mở vị thế chỉ vì vượt một mốc giá."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "KỊCH BẢN CƠ SỞ — VN-Index giữ trên 1.743,24 nhưng còn dưới 1.777,33, dòng tiền tiếp tục xoay nhóm và thanh khoản quanh hoặc dưới TB20",
                "then": "Duy trì KHÔNG; tỷ trọng cổ phiếu định hướng tối đa 20%, không mở vị thế mới và chỉ quản trị hàng đang có."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "KỊCH BẢN XẤU — VN-Index đóng dưới 1.743,24; đặc biệt nếu thủng 1.728,36 cùng độ rộng xấu đi hoặc thanh khoản bán tăng",
                "then": "Hạ tiếp phần yếu, dừng mở mới, không bình quân giá xuống và giảm/không dùng margin."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — vượt 1.777,33 rồi 1.786,53–1.796,65 với xác nhận dòng tiền và chặn cứng được giải tỏa",
                "then": "Tính lại trạng thái; chưa tự động mua chỉ vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG CAO — giữ 1.743,24–1.777,33, thanh khoản/độ rộng chưa đạt chuẩn",
                "then": "GIỮ TRẠNG THÁI KHÔNG. Tỷ trọng định hướng <=20%, không mở mới, giảm hoặc không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG TRUNG BÌNH — đóng dưới 1.743,24; đặc biệt mất 1.728,36",
                "then": "GIẢM RỦI RO tiếp; xử lý phần yếu, không bắt đáy cơ học và không bình quân giá xuống."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 07/10/2026 • kiểm định sau ATC",
            "finalState": "KHÔNG",
            "score": "-2/7",
            "veto": "CHẶN CỨNG — 8 phiên phân phối; chặn khối ngoại 07/10 KHÔNG KIỂM ĐƯỢC",
            "marketState": "YẾU / PHÂN HÓA",
            "shortTrend": "Giảm nhẹ / dưới MA20 và MA50",
            "mediumTrend": "Yếu / dưới MA200",
            "liquidity": "0,949× TB20",
            "breadth": "144 tăng / 147 giảm",
            "flow": "Luân chuyển sang cảng biển–logistics, BĐS KCN, công nghiệp; chứng khoán và phần lớn BĐS suy yếu",
            "foreign": "CHƯA XÁC MINH số hậu phiên chính thức; không chấm điểm",
            "distributions": "8 phiên / 25 phiên",
            "proprietary": "CHƯA XÁC MINH tổng phiên 07/10",
            "tradingAbility": "Phòng thủ",
            "moneyIn": "Cảng biển–logistics; BĐS khu công nghiệp; công nghiệp; một phần nông nghiệp",
            "moneyOut": "Chứng khoán; phần lớn bất động sản; một số ngân hàng",
            "support": "1.743,24; mạnh 1.728,36",
            "resistance": "1.777,33; mạnh 1.786,53–1.796,65",
            "invalidation": "Đóng dưới 1.743,24",
            "buyZone": "Không áp dụng",
            "reduceZone": "Hạ tiếp nếu đóng dưới 1.743,24; tăng phòng thủ nếu thủng 1.728,36",
            "rr": "(1.777,33 - 1.753,39) / (1.753,39 - 1.743,24) ≈ 2,36",
            "margin": "Giảm / không dùng",
            "allocation": "<=20% cổ phiếu / >=80% tiền mặt",
            "bias": "Phòng thủ",
            "mainAction": "Không mở vị thế mới"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng không quá 20%.",
            "Rủi ro quyết định vẫn là 8 phiên phân phối còn hiệu lực trong khi chỉ số nằm dưới MA20/MA50/MA200; dòng tiền mới chỉ xoay nhóm chứ chưa lan tỏa toàn thị trường.",
            "Chỉ đổi quan điểm khi VN-Index lấy lại 1.777,33 rồi 1.786,53–1.796,65 với thanh khoản, độ rộng và số phiên phân phối cùng cải thiện; đóng dưới 1.743,24 thì hạ rủi ro tiếp."
        ],
        "focus": "KHÔNG • <=20% cổ phiếu • 1.743,24 mốc vô hiệu • 1.728,36 hỗ trợ mạnh • MA50 1.777,33 • MA20–MA200 1.786,53–1.796,65 • 0,949× TB20 • 8 phiên phân phối • không mở vị thế mới",
        "inference": "Nhật ký nguồn nội bộ được lưu tại docs/market-source-log-20261007.md. Data Gate 133/133 mã đã PASS: VNDIRECT là nguồn chính, KBS exact-date xác nhận 133/133 giá đóng cửa vì CafeF chưa có dòng đúng ngày tại mốc khóa. VN-Index 1.753,39 và -5,69 (-0,32%) được đối chiếu thêm với VNIndex.ai EOD 15:00. MA20/MA50/MA200, TB20, tỷ lệ độ rộng, phiên phân phối và R:R được tính bằng code từ chuỗi 253 phiên VNDIRECT 01/10/2025–07/10/2026. Điểm v3.2 = -2/7 với cấu phần -1,0,0,0,0,-1,0. Có 8 phiên phân phối còn hiệu lực nên chặn cứng kích hoạt và trạng thái cuối bắt buộc là KHÔNG. Khối ngoại/tự doanh chính thức 07/10 chưa đủ hai nguồn độc lập cùng phạm vi nên không dùng số tạm để chấm.",
        "limitations": [
            "Độ rộng HOSE 144 tăng/64 tham chiếu/147 giảm và GT khớp lệnh 12.473,83 tỷ đồng tại mốc khóa có một nguồn cùng phạm vi là VNDIRECT; đã tìm nguồn khác nhưng chưa có bộ hậu phiên cùng phạm vi để đối chiếu.",
            "Khối ngoại và tự doanh tổng phiên 07/10 chưa đủ hai nguồn hậu phiên độc lập cùng phạm vi; yếu tố khối ngoại chấm 0 và điều kiện chặn liên quan ghi KHÔNG KIỂM ĐƯỢC.",
            "Bản đồ ngành tính trên universe 133 mã của website, không đại diện toàn bộ số mã niêm yết.",
            "Kịch bản dùng mức khả năng định tính THẤP/CAO/TRUNG BÌNH theo v3.2; không dùng xác suất phần trăm."
        ],
        "zaloPost": "Phiên 07/10 giảm 5,69 điểm xuống 1.753,39, nhưng bản chất không phải một phiên bán tháo mới. Giá trị khớp lệnh theo cùng chuỗi VNDIRECT khoảng 12.474 tỷ đồng, chỉ bằng 0,949 lần bình quân 20 phiên và thấp hơn phiên trước. Vì vậy 07/10 không tạo thêm phiên phân phối; số phiên phân phối còn hiệu lực vẫn là 8.\n\nĐiểm đáng theo dõi là dòng tiền đang xoay nhóm khá rõ. Cảng biển – logistics có 4/4 mã trong bộ theo dõi tăng, BĐS khu công nghiệp tăng 3/4 mã, công nghiệp và nông nghiệp cũng có độ lan tỏa tốt hơn. Ngược lại chứng khoán giảm 14/15 mã và phần lớn bất động sản vẫn yếu. Đây là luân chuyển cục bộ, chưa phải trạng thái tiền vào đồng loạt toàn thị trường.\n\nVN-Index vẫn nằm dưới MA50 1.777,33 và cụm MA20–MA200 1.786,53–1.796,65. Điểm đồng thuận v3.2 là -2/7, đồng thời 8 phiên phân phối tiếp tục kích hoạt chặn cứng. Vì vậy trạng thái chốt vẫn là KHÔNG.\n\nKế hoạch phiên tới rất rõ: khi chỉ số còn dưới 1.777,33, tôi không mở vị thế mới. Nếu đóng dưới 1.743,24, ưu tiên hạ phần yếu; mất tiếp 1.728,36 thì tăng mức phòng thủ. Chỉ khi vượt 1.777,33 rồi vùng 1.786,53–1.796,65 với thanh khoản và độ rộng xác nhận, đồng thời số phiên phân phối giảm dưới 6, mới tính lại trạng thái.\n\nTỷ trọng định hướng vẫn tối đa khoảng 20% cổ phiếu. Với hàng đang có, ưu tiên giữ mã khỏe tương đối; tránh đuổi giá ở nhóm vừa tăng nóng và tiếp tục giảm hoặc không dùng margin.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 07/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-07&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index 253 phiên tính MA, TB20 và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-07&size=500"
            },
            {
                "label": "VNIndex.ai — đối chiếu EOD và đóng góp điểm 07/10/2026",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "DNSE — VN30F1M và ngày đáo hạn 15/10/2026",
                "url": "https://www.dnse.com.vn/senses/hop-dong-tuong-lai-VN30F2309"
            },
            {
                "label": "VnEconomy — chứng khoán Mỹ, lợi suất và dầu trước phiên 07/10",
                "url": "https://vneconomy.vn/chung-khoan-my-lap-ky-luc-moi-khi-loi-suat-trai-phieu-xuong-thang-gia-dau-tru-moc-100-usdthung.htm"
            },
            {
                "label": "VOV — S&P 500 và Nasdaq lập đỉnh mới trước phiên 07/10",
                "url": "https://vov.vn/thi-truong/chi-so-sp-500-va-nasdaq-lap-dinh-moi-post1339127.vov"
            }
        ]
    },
    {
        "id": "market-view-20261006",
        "date": "2026-10-06",
        "publishedAt": "06/10/2026 • Sau phiên",
        "edition": "Số 33",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT + HOSE/CafeF + VNIndex.ai + VietnamBiz + DNSE • dữ liệu cuối ngày 06.10.2026 • 133/133 mã đã khóa EOD",
        "title": "Tăng điểm nhưng độ rộng âm — hai chặn cứng vẫn khóa trạng thái",
        "thesis": "Dữ liệu đến hết phiên 06/10/2026. VN-Index đóng 1.759,08 điểm, tăng 5,88 điểm (+0,34%) nhưng vẫn dưới MA20 1.790,21, MA50 1.775,98 và MA200 1.796,12. Giá trị khớp lệnh theo chuỗi VNDIRECT đạt 14.489,25 tỷ đồng, bằng 1,118 lần bình quân 20 phiên 12.955,65 tỷ đồng; độ rộng 124 mã tăng, 64 tham chiếu, 171 mã giảm và 6 mã sàn. Top 5 mã kéo tăng đóng góp 4,24 điểm, tương đương 72,11% mức tăng của VN-Index. Khối ngoại HOSE bán ròng khoảng 2.613–2.614 tỷ đồng, nối chuỗi lên 10 phiên; cùng với 8 phiên phân phối còn hiệu lực, hai CHẶN CỨNG đang hoạt động. TRẠNG THÁI CHỐT: KHÔNG — phòng thủ, không mở vị thế mới, tỷ trọng cổ phiếu định hướng không quá 20%.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "6 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "Tăng điểm nhưng độ rộng âm — hai chặn cứng vẫn khóa trạng thái",
            "thesis": "VN-Index tăng phiên thứ hai nhưng chưa vượt MA50, độ rộng vẫn nghiêng về bên giảm, top 5 kéo tăng chiếm 72,11% mức tăng. Khối ngoại bán ròng phiên thứ 10 liên tiếp và 8 phiên phân phối còn hiệu lực buộc trạng thái duy trì KHÔNG.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "MA20 tiếp tục dốc xuống • RSI14 ~42,91 • 8 phiên phân phối.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "MA20 tiếp tục dốc xuống",
                            "tone": "negative"
                        },
                        {
                            "text": " • RSI14 ~42,91 • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "8 phiên phân phối",
                            "tone": "negative"
                        }
                    ],
                    "text": "Đóng cửa 1.759,08 thấp hơn MA20 1.790,21, MA50 1.775,98 và MA200 1.796,12; MA20 cũng thấp hơn mức 1.810,07 của 5 phiên trước.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng & dòng tiền",
                    "signal": "124 tăng / 171 giảm",
                    "detail": "Top 5 kéo tăng = 72,11% mức tăng VN-Index.",
                    "signalParts": [
                        {
                            "text": "124 tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "171 giảm",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Top 5 kéo tăng = 72,11%",
                            "tone": "negative"
                        },
                        {
                            "text": " mức tăng VN-Index.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Tỷ lệ tăng/giảm 0,725 chưa chạm ngưỡng -1 của yếu tố độ rộng, nhưng chỉ số xanh trong khi số mã giảm nhiều hơn vẫn kích hoạt chặn mềm. Top 5 vượt 70% nên chất lượng dòng tiền chấm -1.",
                    "tone": "negative"
                },
                {
                    "label": "Khối ngoại & thanh khoản",
                    "signal": "Khối ngoại HOSE ~−2.613 tỷ",
                    "detail": "10 phiên bán ròng liên tiếp • thanh khoản 1,118× TB20.",
                    "signalParts": [
                        {
                            "text": "Khối ngoại HOSE ~−2.613 tỷ",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "10 phiên bán ròng liên tiếp",
                            "tone": "negative"
                        },
                        {
                            "text": " • thanh khoản ",
                            "tone": "neutral"
                        },
                        {
                            "text": "1,118× TB20",
                            "tone": "warning"
                        }
                    ],
                    "text": "Tổng bán ròng HOSE trong 5 phiên giao dịch gần nhất xấp xỉ 7.146 tỷ đồng. Thanh khoản cải thiện nhưng chưa đạt ngưỡng 1,2× TB20 để chấm +1 cho một phiên tăng.",
                    "tone": "negative"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng tối đa 20%, giảm hoặc không dùng margin.",
                "Nếu VN-Index đóng dưới 1.734,94: coi nhịp hồi 06/10 thất bại; nếu tiếp tục thủng 1.728,36 thì tăng mức phòng thủ và xử lý phần yếu.",
                "Chỉ tính lại trạng thái khi chỉ số vượt 1.775,98 rồi vùng 1.790,21–1.796,12 với độ rộng, thanh khoản và chất lượng dòng tiền cùng cải thiện, đồng thời hai chặn cứng được giải tỏa."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "133/133 mã đã khóa EOD 06/10 • 128 mã khớp trực tiếp VNDIRECT–CafeF + 5 mã có Stockbiz exact-date xác nhận • MA/TB20/phân phối tính từ 252 phiên cùng nguồn",
                "shortLabel": "EOD 133/133 đã khóa • 2 chặn cứng đang hoạt động"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.759,08",
                "change": "+5,88 • +0,34%",
                "changeParts": [
                    {
                        "text": "+5,88",
                        "tone": "positive"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "+0,34%",
                        "tone": "positive"
                    }
                ],
                "tone": "positive",
                "direction": "up",
                "snapshotState": "price_up"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "124 tăng / 171 giảm",
                "change": "64 tham chiếu • 6 mã giảm sàn",
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative",
                "valueParts": [
                    {
                        "text": "124 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "171 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "64 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "6 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~14.489 tỷ",
                "valueParts": [
                    {
                        "text": "~14.489 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "1,118× bình quân 20 phiên ~12.956 tỷ",
                "changeParts": [
                    {
                        "text": "1,118×",
                        "tone": "warning"
                    },
                    {
                        "text": " bình quân 20 phiên ~12.956 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "up",
                "snapshotState": "liquidity_neutral"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "8 phiên phân phối • khối ngoại bán ròng 10 phiên",
                "changeParts": [
                    {
                        "text": "8 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "khối ngoại bán ròng 10 phiên",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng 1.759,08 điểm, tăng 5,88 điểm (+0,34%), mở cửa 1.755,34, cao nhất 1.763,84 và thấp nhất 1.734,94. VNDIRECT, HOSE/CafeF và VNIndex.ai cùng xác nhận mức đóng cửa; giá đóng ở khoảng 83,5% biên độ phiên, thuộc 1/3 trên, cho thấy lực cầu cuối phiên có cải thiện nhưng chưa đủ xác nhận đảo xu hướng.",
            "Chuỗi 252 phiên VNDIRECT cho MA20 1.790,21, MA50 1.775,98 và MA200 1.796,12. MA20 thấp hơn mức 1.810,07 của 5 phiên trước; RSI14 khoảng 42,91 và MACD khoảng -11,02 thấp hơn đường tín hiệu khoảng -4,39. Chỉ số vẫn nằm dưới cả ba đường MA quan trọng.",
            "Giá trị khớp lệnh theo chuỗi VNDIRECT là 14.489,25 tỷ đồng, bằng 1,118 lần TB20 12.955,65 tỷ đồng và cao hơn đáng kể phiên 05/10. HOSE/CafeF công bố giá trị khớp lệnh khoảng 14.563 tỷ đồng; do khác nhẹ phạm vi/phương pháp tổng hợp, website không trộn hai chuỗi và dùng VNDIRECT nhất quán để chấm thanh khoản.",
            "Độ rộng VNDIRECT là 124 mã tăng, 64 tham chiếu, 171 mã giảm và 6 mã sàn; tỷ lệ tăng/giảm 0,725. Con số này chưa xuống ngưỡng 0,67 để chấm -1, nhưng vẫn là độ rộng âm trong một phiên chỉ số xanh nên chặn mềm độ rộng được kích hoạt.",
            "VNIndex.ai ghi top 5 kéo tăng là VPL +1,22 điểm, VHM +1,19, BSR +0,72, LPB +0,56 và TCX +0,55; tổng 4,24 điểm, tương đương khoảng 72,11% mức tăng 5,88 điểm của VN-Index. Vì vượt ngưỡng 70%, yếu tố chất lượng dòng tiền chấm -1.",
            "Dòng tiền ngành có cải thiện thực ở chứng khoán với 13/15 mã tăng và năng lượng với 7/12 mã tăng; BĐS khu công nghiệp cũng có 3/4 mã tăng. Tuy nhiên ngân hàng chỉ cân bằng 7 tăng/7 giảm/4 tham chiếu, bất động sản phân hóa và độ rộng toàn HOSE vẫn âm. Đây là hồi phục có nhóm dẫn dắt cục bộ, chưa phải lan tỏa toàn thị trường.",
            "Khối ngoại HOSE bán ròng khoảng 2.613–2.614 tỷ đồng trong phiên 06/10 và chuỗi bán ròng toàn thị trường kéo dài sang phiên thứ 10 liên tiếp. Tổng bán ròng HOSE 5 phiên giao dịch gần nhất xấp xỉ 7.146 tỷ đồng. Trong khi đó tự doanh HOSE mua ròng khoảng 267–268 tỷ đồng, là lực đỡ cục bộ nhưng không đủ bù áp lực ngoại.",
            "VN30F1M đóng 1.903,50 điểm, cao hơn VN30 cơ sở 1.898,82 khoảng 4,68 điểm (+0,246%). Bối cảnh quốc tế trước phiên pha trộn: Nasdaq lập kỷ lục nhưng lợi suất Mỹ 10 năm ở khoảng 5,307% và Brent vẫn quanh 100 USD/thùng. Vì vậy yếu tố phái sinh/vĩ mô chấm 0 thay vì tự cộng +1."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.734,94",
                "note": "Đáy phiên 06/10, đã đối chiếu VNDIRECT và VNIndex.ai. Đóng dưới mốc này làm thất bại nhịp hồi trong ngày."
            },
            {
                "label": "Hỗ trợ mạnh",
                "value": "1.728,36",
                "note": "Đáy thấp nhất 20 phiên trước trong chuỗi VNDIRECT. Mất vùng này làm rủi ro suy yếu mở rộng trở lại."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.775,98",
                "note": "MA50 tự tính từ chuỗi 252 phiên. Giá hiện chỉ cách khoảng 0,95% nhưng chưa vượt, kích hoạt chặn mềm sát kháng cự."
            },
            {
                "label": "Kháng cự mạnh / MA20–MA200",
                "value": "1.790,21–1.796,12",
                "note": "Cụm MA20–MA200. Muốn giảm phòng thủ cần lấy lại vùng này cùng thanh khoản và độ rộng xác nhận."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.796,12 + xác nhận",
                "note": "Chỉ tính lại trạng thái khi vượt cụm MA, độ rộng/thanh khoản đạt chuẩn v3.2 và hai chặn cứng đã được giải tỏa."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.734,94",
                "note": "Đóng dưới đáy phiên 06/10 làm mất cấu trúc hồi; dưới 1.728,36 là tín hiệu phòng thủ mạnh hơn."
            }
        ],
        "confluence": {
            "score": -4,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.759,08 dưới MA20 1.790,21 và MA50 1.775,98; MA20 thấp hơn mức 1.810,07 của 5 phiên trước."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên tăng với GT khớp lệnh 14.489,25 tỷ, bằng 1,118 lần TB20; chưa đạt +1 là >=1,2 lần và không chạm -1 là <0,8 lần."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "124 mã tăng / 171 mã giảm, tỷ lệ 0,725; chưa đạt +1 và chưa chạm ngưỡng -1 là <=0,67."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": -1,
                    "note": "Top 5 kéo tăng đóng góp 4,24 điểm, tương đương 72,11% mức tăng 5,88 điểm của VN-Index."
                },
                {
                    "factor": "Khối ngoại",
                    "score": -1,
                    "note": "Khối ngoại bán ròng phiên thứ 10 liên tiếp; riêng HOSE 06/10 khoảng -2.613 tỷ đồng, tổng 5 phiên gần nhất khoảng -7.146 tỷ đồng."
                },
                {
                    "factor": "Sức khỏe xu hướng / phiên phân phối",
                    "score": -1,
                    "note": "Có 8 phiên phân phối còn hiệu lực trong 25 phiên."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Basis VN30F1M +4,68 điểm (+0,246%) hỗ trợ, nhưng lợi suất Mỹ cao và Brent quanh 100 USD/thùng khiến bối cảnh quốc tế pha trộn; không đủ sạch để chấm +1."
                }
            ],
            "veto": [
                "CHẶN CỨNG: khối ngoại bán ròng 10 phiên liên tiếp, vượt ngưỡng >=5 của v3.2.",
                "CHẶN CỨNG: 8 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng >=6 của v3.2.",
                "CHẶN MỀM: chỉ số xanh nhưng số mã giảm 171 > 124 mã tăng.",
                "CHẶN MỀM: top 5 kéo tăng chiếm 72,11% mức tăng chỉ số.",
                "CHẶN MỀM: giá đóng cửa cách MA50 khoảng 0,95% nhưng chưa vượt.",
                "CHẶN MỀM: R:R tới MA50 = (1.775,98 - 1.759,08) / (1.759,08 - 1.734,94) ≈ 0,70, thấp hơn 2."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "KỊCH BẢN TỐT — VN-Index lấy lại 1.775,98 rồi đóng trên 1.790,21–1.796,12; thanh khoản phiên tăng đạt chuẩn, tỷ lệ tăng/giảm cải thiện mạnh và cả hai chặn cứng được giải tỏa",
                "then": "Chỉ khi đó mới tính lại điểm để đánh giá chuyển KHÔNG → CHỜ; không mặc định mở vị thế chỉ vì vượt một mốc giá."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "KỊCH BẢN CƠ SỞ — VN-Index giữ trên 1.734,94 nhưng còn dưới 1.775,98, dòng tiền tiếp tục luân chuyển cục bộ và độ rộng chưa xác nhận",
                "then": "Duy trì KHÔNG; tỷ trọng cổ phiếu định hướng tối đa 20%, không mở vị thế mới, chỉ quản trị các vị thế đang có theo kỷ luật riêng."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "KỊCH BẢN XẤU — VN-Index đóng dưới 1.734,94; đặc biệt nếu thủng 1.728,36 cùng độ rộng xấu đi hoặc thanh khoản bán tăng",
                "then": "Hạ tiếp phần yếu, dừng mở mới, không bình quân giá xuống và giảm/không dùng margin."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — vượt 1.775,98 rồi 1.790,21–1.796,12 với xác nhận dòng tiền và hai chặn cứng được giải tỏa",
                "then": "Tính lại trạng thái; chưa tự động mua chỉ vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG CAO — giữ 1.734,94–1.775,98, thanh khoản/độ rộng chưa đạt chuẩn",
                "then": "GIỮ TRẠNG THÁI KHÔNG. Tỷ trọng định hướng <=20%, không mở mới, giảm hoặc không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG TRUNG BÌNH — đóng dưới 1.734,94; đặc biệt mất 1.728,36",
                "then": "GIẢM RỦI RO tiếp; xử lý phần yếu, không bắt đáy cơ học và không bình quân giá xuống."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 06/10/2026 • kiểm định sau ATC",
            "finalState": "KHÔNG",
            "score": "-4/7",
            "veto": "2 CHẶN CỨNG — khối ngoại bán ròng 10 phiên + 8 phiên phân phối",
            "marketState": "YẾU / HỒI KỸ THUẬT",
            "shortTrend": "Hồi nhưng dưới MA20 và MA50",
            "mediumTrend": "Yếu / dưới MA200",
            "liquidity": "1,118× TB20",
            "breadth": "124 tăng / 171 giảm",
            "flow": "Top 5 kéo tăng = 72,11%; chứng khoán và năng lượng dẫn cục bộ",
            "foreign": "HOSE khoảng -2.613 tỷ; chuỗi bán ròng 10 phiên; 5 phiên ~-7.146 tỷ",
            "distributions": "8 phiên / 25 phiên",
            "proprietary": "Tự doanh HOSE mua ròng khoảng 267–268 tỷ",
            "tradingAbility": "Phòng thủ",
            "moneyIn": "Chứng khoán, năng lượng, một phần BĐS khu công nghiệp",
            "moneyOut": "Khối ngoại bán mạnh; công nghệ và một số mã tiêu dùng/ngân hàng chịu áp lực",
            "support": "1.734,94; mạnh 1.728,36",
            "resistance": "1.775,98; mạnh 1.790,21–1.796,12",
            "invalidation": "Đóng dưới 1.734,94",
            "buyZone": "Không áp dụng",
            "reduceZone": "Hạ tiếp nếu đóng dưới 1.734,94; tăng phòng thủ nếu thủng 1.728,36",
            "rr": "(1.775,98 - 1.759,08) / (1.759,08 - 1.734,94) ≈ 0,70",
            "margin": "Giảm / không dùng",
            "allocation": "<=20% cổ phiếu / >=80% tiền mặt",
            "bias": "Phòng thủ",
            "mainAction": "Không mở vị thế mới"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng không quá 20%.",
            "Hai rủi ro quyết định là khối ngoại bán ròng 10 phiên liên tiếp và 8 phiên phân phối còn hiệu lực; nhịp tăng 06/10 chưa đủ để xóa hai chặn cứng.",
            "Chỉ đổi quan điểm khi VN-Index lấy lại 1.775,98 rồi 1.790,21–1.796,12 với thanh khoản, độ rộng và chất lượng dòng tiền cùng xác nhận; đóng dưới 1.734,94 thì hạ rủi ro tiếp."
        ],
        "focus": "KHÔNG • <=20% cổ phiếu • 1.734,94 mốc vô hiệu • 1.728,36 hỗ trợ mạnh • MA50 1.775,98 • MA20–MA200 1.790,21–1.796,12 • 1,118× TB20 • 8 phiên phân phối • khối ngoại bán ròng 10 phiên",
        "inference": "Nhật ký nguồn nội bộ được lưu tại docs/market-source-log-20261006.md. Data Gate 133/133 mã đã PASS: 128 mã khớp giá đóng cửa trực tiếp VNDIRECT–CafeF; DDV, DRI, OIL, PHP và VGI lệch CafeF nhưng Stockbiz exact-date xác nhận giá VNDIRECT. VN-Index 1.759,08 và +5,88 (+0,34%) được đối chiếu VNDIRECT, HOSE/CafeF và VNIndex.ai. MA20/MA50/MA200, TB20, tỷ lệ độ rộng, phiên phân phối và R:R được tính bằng code từ chuỗi 252 phiên VNDIRECT 01/10/2025–06/10/2026. Điểm v3.2 = -4/7 với cấu phần -1,0,0,-1,-1,-1,0. Có 8 phiên phân phối và khối ngoại bán ròng 10 phiên liên tiếp nên hai chặn cứng kích hoạt; trạng thái cuối bắt buộc là KHÔNG.",
        "limitations": [
            "VNDIRECT nmValue dùng cho chuỗi tính toán là khoảng 14.489 tỷ đồng, trong khi HOSE/CafeF công bố khớp lệnh khoảng 14.563 tỷ đồng; website không ghép hai phạm vi và dùng VNDIRECT nhất quán cho TB20/phân phối.",
            "Top đóng góp điểm lấy từ VNIndex.ai; tỷ lệ 72,11% là phép tính từ 5 mã dẫn đầu và mức tăng 5,88 điểm.",
            "Bản đồ ngành tính trên universe 133 mã của website, không đại diện toàn bộ số mã niêm yết.",
            "Kịch bản dùng mức khả năng định tính THẤP/CAO/TRUNG BÌNH theo v3.2; không dùng xác suất phần trăm."
        ],
        "zaloPost": "Phiên 06/10 là phiên tăng thứ hai liên tiếp của VN-Index, nhưng tôi chưa xem đây là tín hiệu đủ để nâng trạng thái. Chỉ số đóng 1.759,08 điểm, tăng 5,88 điểm (+0,34%) và hồi khá tốt từ đáy 1.734,94. Tuy nhiên VN-Index vẫn nằm dưới MA50 1.775,98 và cụm MA20–MA200 1.790,21–1.796,12.\n\nThanh khoản đã cải thiện lên khoảng 14.489 tỷ đồng theo cùng chuỗi VNDIRECT, tương đương 1,118 lần bình quân 20 phiên. Mức này tốt hơn 05/10 nhưng chưa đạt ngưỡng 1,2 lần để xác nhận một phiên tăng. Độ rộng vẫn nghiêng xấu với 124 mã tăng và 171 mã giảm. Top 5 mã kéo tăng đóng góp khoảng 72,1% mức tăng của chỉ số, nên chất lượng dòng tiền vẫn còn phụ thuộc vào một số mã lớn.\n\nĐiểm tích cực là dòng tiền đã lan sang chứng khoán và năng lượng: trong bộ 133 mã theo dõi, chứng khoán có 13/15 mã tăng, năng lượng có 7/12 mã tăng. Nhưng rủi ro lớn nhất chưa thay đổi: khối ngoại HOSE bán ròng khoảng 2.613 tỷ đồng và chuỗi bán ròng đã sang phiên thứ 10; đồng thời thị trường còn 8 phiên phân phối hiệu lực.\n\nĐiểm đồng thuận v3.2 là -4/7 và có hai chặn cứng, nên trạng thái chốt vẫn là KHÔNG. Khi VN-Index còn dưới 1.775,98, tôi không mở vị thế mới. Nếu đóng dưới 1.734,94, nhịp hồi thất bại; mất 1.728,36 thì tăng phòng thủ. Chỉ khi vượt 1.775,98 rồi vùng 1.790,21–1.796,12 với thanh khoản và độ rộng xác nhận, đồng thời hai chặn cứng được giải tỏa, mới tính lại trạng thái.\n\nTỷ trọng định hướng vẫn tối đa khoảng 20% cổ phiếu, phần còn lại giữ tiền; margin giảm hoặc không dùng.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 06/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-06&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index 252 phiên tính MA, TB20 và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-06&size=500"
            },
            {
                "label": "HOSE/CafeF — Điểm tin giao dịch ngày 06/10/2026",
                "url": "https://cafef.vn/du-lieu/hose-2992292/hose-diem-tin-giao-dich-ngay-06102026.chn"
            },
            {
                "label": "VNIndex.ai — đối chiếu EOD và đóng góp điểm 06/10/2026",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "VietnamBiz — khối ngoại HOSE bán ròng trên 2.613 tỷ, chuỗi 10 phiên",
                "url": "https://vietnambiz.vn/khoi-ngoai-xa-rong-2000-ty-mot-ma-ngan-hang-202610616713310.htm"
            },
            {
                "label": "VietnamBiz — tự doanh HOSE mua ròng khoảng 268 tỷ",
                "url": "https://vietnambiz.vn/tu-doanh-tiep-tuc-gom-co-phieu-vpb-202610618535841.htm"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 06/10/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1791219600&to=1791279000"
            },
            {
                "label": "VnEconomy — chứng khoán Mỹ, lợi suất và dầu trước phiên 06/10",
                "url": "https://vneconomy.vn/chung-khoan-my-lap-ky-luc-moi-gia-dau-cam-cu-moc-100-usdthung.htm"
            }
        ]
    },
    {
        "id": "market-view-20261005",
        "date": "2026-10-05",
        "publishedAt": "05/10/2026 • Sau phiên",
        "edition": "Số 32",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT + VNIndex.ai + DNSE + HNX + Báo Tin tức • dữ liệu cuối ngày 05.10.2026 • khối ngoại/tự doanh hậu phiên chính thức: CHƯA XÁC MINH",
        "title": "Hồi do trụ kéo, thanh khoản chưa xác nhận xu hướng",
        "thesis": "Dữ liệu đến hết phiên 05/10/2026. VN-Index đóng 1.753,20 điểm, tăng 15,49 điểm (+0,89%) nhưng vẫn nằm dưới MA20 1.793,78, MA50 1.774,79 và MA200 1.795,82. Giá trị khớp lệnh HOSE đạt 10.126,05 tỷ đồng, chỉ bằng 0,771 lần bình quân 20 phiên 13.130,73 tỷ đồng; độ rộng 155 mã tăng, 49 tham chiếu, 151 mã giảm và 4 mã sàn. Top 5 mã kéo tăng đóng góp 16,35 điểm, tương đương 105,55% mức tăng của VN-Index, cho thấy nhịp hồi vẫn phụ thuộc mạnh vào trụ. Có 8 phiên phân phối còn hiệu lực trong 25 phiên, kích hoạt CHẶN CỨNG. TRẠNG THÁI CHỐT: KHÔNG — phòng thủ, không mở vị thế mới, tỷ trọng cổ phiếu định hướng không quá 20%.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "Hồi do trụ kéo, thanh khoản chưa xác nhận xu hướng",
            "thesis": "VN-Index hồi +0,89% và đóng gần vùng cao của phiên, nhưng thanh khoản chỉ đạt 0,771 lần TB20, top 5 mã kéo tăng đóng góp 105,55% mức tăng và chỉ số vẫn dưới MA20/MA50/MA200. Với 8 phiên phân phối còn hiệu lực, trạng thái chốt vẫn là KHÔNG.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "8 phiên phân phối còn hiệu lực • RSI14 ~40,98.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "8 phiên phân phối",
                            "tone": "negative"
                        },
                        {
                            "text": " còn hiệu lực • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "RSI14 ~40,98",
                            "tone": "warning"
                        }
                    ],
                    "text": "Giá đóng cửa 1.753,20 thấp hơn MA20 1.793,78, MA50 1.774,79 và MA200 1.795,82; MA20 tiếp tục thấp hơn mức 1.812,76 của 5 phiên trước.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản",
                    "signal": "10.126 tỷ • 0,771× TB20",
                    "detail": "Phiên tăng nhưng thấp hơn ngưỡng 0,8× TB20 của v3.2.",
                    "signalParts": [
                        {
                            "text": "10.126 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "0,771× TB20",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "Phiên tăng",
                            "tone": "positive"
                        },
                        {
                            "text": " nhưng ",
                            "tone": "neutral"
                        },
                        {
                            "text": "thấp hơn ngưỡng 0,8× TB20",
                            "tone": "negative"
                        }
                    ],
                    "text": "Thanh khoản khớp lệnh thấp hơn khoảng 29,91% so với 02/10 và không xác nhận nhịp tăng.",
                    "tone": "negative"
                },
                {
                    "label": "Chất lượng dòng tiền",
                    "signal": "Top 5 kéo tăng = 105,55%",
                    "detail": "VIC +12,80 điểm • LPB +1,72 • HPG +0,78 là ba trụ đóng góp lớn nhất.",
                    "signalParts": [
                        {
                            "text": "Top 5 kéo tăng = 105,55%",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "VIC +12,80 điểm",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "LPB +1,72",
                            "tone": "positive"
                        },
                        {
                            "text": " • HPG +0,78",
                            "tone": "positive"
                        },
                        {
                            "text": " là ba trụ đóng góp lớn nhất.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Top 5 kéo tăng tổng cộng 16,35 điểm trong khi VN-Index chỉ tăng 15,49 điểm; yếu tố chất lượng dòng tiền chấm -1 vì mức tăng phụ thuộc mạnh vào trụ.",
                    "tone": "negative"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; phần giao dịch ngắn hạn giữ tối đa 20% cổ phiếu, giảm hoặc không dùng margin.",
                "Nếu VN-Index đóng dưới 1.738,78: coi nhịp hồi 05/10 thất bại và tiếp tục hạ phần yếu; dưới 1.728,36 thì tăng mức phòng thủ.",
                "Chỉ tính lại trạng thái khi chỉ số lấy lại 1.774,79 rồi vùng 1.793,78–1.795,82 với thanh khoản, độ rộng và chất lượng dòng tiền cùng cải thiện; số phiên phân phối phải giảm dưới 6."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "131/131 mã đã khóa EOD 05/10 • VN-Index đã đối chiếu 2 nguồn • MA/TB20/phân phối tính từ 251 phiên cùng nguồn • khối ngoại/tự doanh hậu phiên chính thức CHƯA XÁC MINH",
                "shortLabel": "EOD 131/131 đã khóa • chặn cứng vẫn hoạt động"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.753,20",
                "change": "+15,49 • +0,89%",
                "changeParts": [
                    {
                        "text": "+15,49",
                        "tone": "positive"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "+0,89%",
                        "tone": "positive"
                    }
                ],
                "tone": "positive",
                "direction": "up",
                "snapshotState": "price_up"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "155 tăng / 151 giảm",
                "change": "49 tham chiếu • 4 mã giảm sàn",
                "tone": "neutral",
                "direction": "flat",
                "snapshotState": "neutral",
                "valueParts": [
                    {
                        "text": "155 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "151 giảm",
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
                        "text": "4 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~10.126 tỷ",
                "valueParts": [
                    {
                        "text": "~10.126 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "0,771× bình quân 20 phiên ~13.131 tỷ",
                "changeParts": [
                    {
                        "text": "0,771×",
                        "tone": "negative"
                    },
                    {
                        "text": " bình quân 20 phiên ~13.131 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "8 phiên phân phối còn hiệu lực",
                "changeParts": [
                    {
                        "text": "8 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " còn hiệu lực",
                        "tone": "neutral"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng 1.753,20 điểm, tăng 15,49 điểm (+0,89%), mở cửa 1.738,92, cao nhất 1.756,30 và thấp nhất 1.738,78. VNDIRECT và VNIndex.ai khớp tuyệt đối điểm đóng cửa, mức thay đổi và biên phiên. Giá đóng cửa nằm ở khoảng 82,3% biên độ ngày, tức 1/3 trên — có hấp thụ cuối phiên nhưng chưa đủ để xác nhận đảo xu hướng.",
            "Chuỗi 251 phiên VNDIRECT từ 01/10/2025 đến 05/10/2026 cho MA20 1.793,78, MA50 1.774,79 và MA200 1.795,82. MA20 thấp hơn mức 1.812,76 của 5 phiên trước; RSI14 khoảng 40,98 và MACD khoảng -10,65 thấp hơn đường tín hiệu khoảng -2,73. Chỉ số vẫn ở dưới cả ba đường MA quan trọng.",
            "Giá trị khớp lệnh HOSE là 10.126,05 tỷ đồng, bằng 0,771 lần bình quân 20 phiên 13.130,73 tỷ đồng và thấp hơn 02/10 khoảng 29,91%. Theo v3.2, một phiên tăng với thanh khoản dưới 0,8 lần TB20 chấm -1: đây là nhịp hồi thiếu xác nhận dòng tiền.",
            "Độ rộng VNDIRECT là 155 mã tăng, 49 tham chiếu, 151 mã giảm và 4 mã sàn; tỷ lệ tăng/giảm 1,026. Độ rộng không xấu đến mức chấm -1 nhưng cũng chưa đủ ngưỡng 1,5 để chấm +1.",
            "VNIndex.ai ghi top 5 kéo tăng gồm VIC +12,80 điểm, LPB +1,72, HPG +0,78, VHM +0,68 và GEE +0,37; tổng 16,35 điểm, tương đương 105,55% mức tăng 15,49 điểm của VN-Index. Vì vậy yếu tố chất lượng dòng tiền chấm -1: chỉ số xanh nhưng phần lớn sức kéo đến từ một nhóm trụ rất hẹp.",
            "Trong universe 131 mã, công nghiệp có 6/7 mã tăng và cảng biển & logistics tăng 4/4 mã; đây là hai cụm có lan tỏa tương đối tốt hơn. Ngược lại, ngân hàng chỉ 7/18 mã tăng dù LPB tăng mạnh; chứng khoán chỉ 4/15 mã tăng và năng lượng 3/12 mã tăng. Dòng tiền có luân chuyển cục bộ nhưng chưa hình thành một mặt bằng dẫn dắt rộng.",
            "VN30F1M đóng 1.900,10 điểm, cao hơn VN30 cơ sở 1.894,46 khoảng 5,64 điểm (+0,298%). 05/10 không nằm trong 3 phiên trước ngày đáo hạn 15/10. Phần lớn thị trường châu Á tăng trong ngày 05/10 sau dữ liệu việc làm Mỹ yếu hơn dự kiến; yếu tố phái sinh/vĩ mô được chấm +1. Khối ngoại và tự doanh hậu phiên 05/10 chưa đủ hai nguồn độc lập để khóa số chính thức, vì vậy không dùng để nâng hoặc hạ điểm."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.738,78",
                "note": "Đáy phiên 05/10 đã được đối chiếu VNDIRECT và VNIndex.ai. Đóng dưới mốc này làm thất bại nhịp hồi của phiên."
            },
            {
                "label": "Hỗ trợ mạnh",
                "value": "1.728,36",
                "note": "Đáy phiên 02/10 trong chuỗi VNDIRECT. Thủng vùng này cho thấy áp lực giảm mở rộng trở lại."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.774,79",
                "note": "MA50 tự tính từ chuỗi 251 phiên. Giá đóng cửa hiện cách MA50 khoảng 1,22%, nằm trong vùng chặn mềm <=1,5% mà chưa vượt."
            },
            {
                "label": "Kháng cự mạnh / MA20–MA200",
                "value": "1.793,78–1.795,82",
                "note": "Cụm MA20 và MA200 tự tính. Muốn giảm phòng thủ cần lấy lại vùng này cùng thanh khoản và độ rộng cải thiện."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.795,82 + xác nhận",
                "note": "Chỉ tính lại trạng thái sau khi vượt cụm MA20–MA200, thanh khoản phiên tăng cải thiện rõ và số phiên phân phối giảm dưới 6."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.738,78",
                "note": "Đóng dưới đáy phiên 05/10 làm mất nhịp hồi; dưới 1.728,36 là tín hiệu rủi ro mạnh hơn."
            }
        ],
        "confluence": {
            "score": -3,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.753,20 dưới MA20 1.793,78 và MA50 1.774,79; MA20 cũng đang giảm so với 5 phiên trước."
                },
                {
                    "factor": "Thanh khoản",
                    "score": -1,
                    "note": "Phiên tăng nhưng GT khớp lệnh 10.126,05 tỷ chỉ bằng 0,771 lần TB20, thấp hơn ngưỡng 0,8 lần."
                },
                {
                    "factor": "Độ rộng",
                    "score": 0,
                    "note": "155 mã tăng / 151 mã giảm, tỷ lệ 1,026; chưa đạt +1 và không chạm -1."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": -1,
                    "note": "Top 5 kéo tăng đóng góp 16,35 điểm, tương đương 105,55% mức tăng 15,49 điểm của VN-Index; kéo trụ rõ."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Số hậu phiên 05/10 chưa có hai nguồn độc lập cùng phạm vi; số ước tính không dùng để chấm."
                },
                {
                    "factor": "Sức khỏe xu hướng / phiên phân phối",
                    "score": -1,
                    "note": "Có 8 phiên phân phối còn hiệu lực trong 25 phiên."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 1,
                    "note": "Basis VN30F1M +5,64 điểm (+0,298%); không ở tuần đáo hạn và bối cảnh châu Á trước mốc cắt không bất lợi rõ."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 8 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng >=6 của v3.2.",
                "KHÔNG KIỂM ĐƯỢC chặn cứng khối ngoại 05/10 vì số hậu phiên chính thức chưa đủ hai nguồn cùng phạm vi.",
                "CHẶN MỀM: R:R tới MA50 = (1.774,79 - 1.753,20) / (1.753,20 - 1.738,78) ≈ 1,50, thấp hơn 2.",
                "CHẶN MỀM: giá đóng cửa cách MA50 khoảng 1,22% và chưa vượt; đồng thời yếu tố chất lượng dòng tiền = -1 do kéo trụ."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "KỊCH BẢN TỐT — VN-Index lấy lại 1.774,79 rồi đóng trên 1.793,78–1.795,82; thanh khoản phiên tăng cải thiện rõ, tỷ lệ tăng/giảm đạt chuẩn và số phiên phân phối còn hiệu lực giảm dưới 6",
                "then": "Chỉ khi đó mới tính lại điểm để đánh giá chuyển KHÔNG → CHỜ; không mặc định mua chỉ vì vượt một mốc giá."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "KỊCH BẢN CƠ SỞ — VN-Index giữ trên 1.738,78 nhưng còn dưới 1.774,79, thanh khoản vẫn dưới TB20 và dòng tiền còn phụ thuộc trụ",
                "then": "Duy trì KHÔNG; giữ tối đa 20% cổ phiếu cho phần giao dịch ngắn hạn, không mở vị thế mới và ưu tiên mã khỏe tương đối."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "KỊCH BẢN XẤU — VN-Index đóng dưới 1.738,78; đặc biệt nếu thủng 1.728,36 cùng độ rộng xấu hơn hoặc thanh khoản tăng",
                "then": "Hạ tiếp tỷ trọng về mức rất thấp, dừng mở mới, xử lý mã yếu/chạm cắt lỗ và không dùng margin để bình quân giá xuống."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — lấy lại 1.774,79 rồi đóng trên 1.793,78–1.795,82, thanh khoản/độ rộng xác nhận và số phiên phân phối giảm dưới 6",
                "then": "Chỉ tính lại để đánh giá chuyển KHÔNG → CHỜ; chưa tự động mở vị thế vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG CAO — giữ trên 1.738,78 nhưng còn dưới 1.774,79 hoặc thanh khoản/dòng tiền chưa xác nhận",
                "then": "GIỮ TRẠNG THÁI KHÔNG. Tỷ trọng cổ phiếu định hướng tối đa 20%, không mua mới, giảm hoặc không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG TRUNG BÌNH — đóng dưới 1.738,78; đặc biệt nếu mất 1.728,36",
                "then": "GIẢM RỦI RO tiếp; dừng mở mới, không bắt dao rơi, không bình quân giá xuống và xử lý vị thế vi phạm cắt lỗ."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 05/10/2026 • kiểm định sau ATC",
            "finalState": "KHÔNG",
            "score": "-3/7",
            "veto": "CHẶN CỨNG — 8 phiên phân phối; chặn khối ngoại 05/10 KHÔNG KIỂM ĐƯỢC",
            "marketState": "YẾU",
            "shortTrend": "Hồi kỹ thuật trong xu hướng yếu / dưới MA20 và MA50",
            "mediumTrend": "Yếu / dưới MA200",
            "liquidity": "0,771× TB20",
            "breadth": "155 tăng / 151 giảm",
            "flow": "Top 5 kéo tăng = 105,55% mức tăng; trụ chi phối",
            "foreign": "CHƯA XÁC MINH số hậu phiên chính thức; không chấm điểm",
            "distributions": "8 phiên / 25 phiên",
            "tradingAbility": "Phòng thủ",
            "moneyIn": "Công nghiệp; cảng biển & logistics có lan tỏa tương đối trong universe 131 mã",
            "moneyOut": "Chứng khoán, năng lượng và phần lớn ngân hàng chưa đồng thuận",
            "support": "1.738,78; mạnh 1.728,36",
            "resistance": "1.774,79; mạnh 1.793,78–1.795,82",
            "invalidation": "Đóng dưới 1.738,78",
            "buyZone": "Không áp dụng",
            "reduceZone": "Hạ tiếp nếu đóng dưới 1.738,78; tăng phòng thủ nếu thủng 1.728,36",
            "rr": "(1.774,79 - 1.753,20) / (1.753,20 - 1.738,78) ≈ 1,50",
            "margin": "Giảm / không dùng",
            "allocation": "<=20% cổ phiếu / >=80% tiền mặt",
            "bias": "Phòng thủ",
            "mainAction": "Không mở vị thế mới"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng không quá 20%.",
            "Rủi ro lớn nhất là nhịp hồi thiếu thanh khoản và phụ thuộc mạnh vào trụ trong khi 8 phiên phân phối còn hiệu lực.",
            "Chỉ đổi quan điểm khi VN-Index lấy lại 1.774,79 rồi 1.793,78–1.795,82 với thanh khoản, độ rộng và chất lượng dòng tiền cùng cải thiện; đóng dưới 1.738,78 thì hạ rủi ro tiếp."
        ],
        "focus": "KHÔNG • <=20% cổ phiếu • 1.738,78 mốc vô hiệu • 1.728,36 hỗ trợ mạnh • MA50 1.774,79 • MA20–MA200 1.793,78–1.795,82 • 0,771× TB20 • 8 phiên phân phối • không mở vị thế mới",
        "inference": "Nhật ký nguồn nội bộ được lưu tại docs/market-source-log-20261005.md. Data Gate 131/131 mã đã PASS: VNDIRECT là nguồn chính, KBS exact-date xác nhận 131/131 giá đóng cửa; VN-Index 1.753,20 và +15,49 (+0,89%) được đối chiếu thêm với VNIndex.ai EOD 15:00. MA20/MA50/MA200, TB20, tỷ lệ độ rộng, phiên phân phối và R:R được tính bằng code từ chuỗi 251 phiên VNDIRECT 01/10/2025–05/10/2026. Điểm v3.2 = -3/7 với cấu phần -1,-1,0,-1,0,-1,+1. Có 8 phiên phân phối còn hiệu lực nên chặn cứng kích hoạt và trạng thái cuối bắt buộc là KHÔNG. Số khối ngoại 05/10 chưa đủ hai nguồn hậu phiên cùng phạm vi; không dùng số tạm để chấm.",
        "limitations": [
            "Thanh khoản khớp lệnh HOSE 10.126,05 tỷ đồng tại thời điểm khóa có một nguồn trực tiếp cùng phạm vi là VNDIRECT; các nguồn công khai khác hiển thị tổng giá trị giao dịch nên không được dùng để đối chiếu chéo.",
            "Khối ngoại và tự doanh tổng phiên 05/10 chưa đủ nguồn hậu phiên độc lập cùng phạm vi; yếu tố khối ngoại chấm 0 và điều kiện chặn liên quan ghi KHÔNG KIỂM ĐƯỢC.",
            "Bản đồ ngành tính trên universe 131 mã của website, không đại diện toàn bộ số mã niêm yết.",
            "Kịch bản dùng mức khả năng định tính THẤP/CAO/TRUNG BÌNH theo v3.2; không dùng xác suất phần trăm."
        ],
        "zaloPost": "Phiên 05/10 là một nhịp hồi đáng ghi nhận về điểm số, nhưng chưa đủ chất lượng để thay đổi trạng thái phòng thủ. VN-Index đóng 1.753,20 điểm, tăng 15,49 điểm (+0,89%) và đóng gần vùng cao của phiên. Tuy nhiên chỉ số vẫn nằm dưới MA50 1.774,79 và cụm MA20–MA200 1.793,78–1.795,82.\n\nĐiểm yếu nằm ở dòng tiền. Giá trị khớp lệnh HOSE chỉ khoảng 10.126 tỷ đồng, bằng 0,771 lần bình quân 20 phiên. Theo v3.2, một phiên tăng với thanh khoản dưới 0,8 lần TB20 chưa phải phiên xác nhận. Độ rộng cũng chỉ cân bằng tương đối với 155 mã tăng và 151 mã giảm, chưa cho thấy lực mua lan tỏa rõ.\n\nQuan trọng hơn, top 5 mã kéo tăng đóng góp tổng cộng 16,35 điểm trong khi VN-Index chỉ tăng 15,49 điểm. Riêng VIC đóng góp 12,80 điểm. Điều đó cho thấy nhịp hồi phụ thuộc mạnh vào trụ. Trong bộ 131 mã theo dõi, công nghiệp và cảng biển – logistics có độ lan tỏa tốt hơn, nhưng chứng khoán, năng lượng và phần lớn ngân hàng vẫn chưa đồng thuận.\n\nĐiểm đồng thuận v3.2 là -3/7. Thị trường vẫn có 8 phiên phân phối còn hiệu lực, đủ kích hoạt chặn cứng. Vì vậy trạng thái chốt tiếp tục là KHÔNG.\n\nKế hoạch rất rõ: khi VN-Index còn dưới 1.774,79, tôi không mở vị thế mới. Nếu đóng dưới 1.738,78, coi nhịp hồi thất bại và hạ tiếp phần yếu; mất 1.728,36 thì tăng mức phòng thủ. Chỉ khi lấy lại 1.774,79 rồi vùng 1.793,78–1.795,82 với thanh khoản và độ rộng cải thiện, mới tính lại trạng thái.\n\nTỷ trọng định hướng vẫn tối đa khoảng 20% cổ phiếu, phần còn lại giữ tiền; margin giảm hoặc không dùng. Bảo toàn vốn trước, cơ hội sau.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 05/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-05&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index 251 phiên tính MA, TB20 và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-05&size=500"
            },
            {
                "label": "VNIndex.ai — đối chiếu EOD và đóng góp điểm 05/10/2026",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 05/10/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1791133200&to=1791192600"
            },
            {
                "label": "HNX — quy cách hợp đồng tương lai VN30 và ngày giao dịch cuối cùng",
                "url": "https://www.upcom.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html"
            },
            {
                "label": "Báo Tin tức/TTXVN — bối cảnh chứng khoán châu Á 05/10/2026",
                "url": "https://baotintuc.vn/chung-khoan-chau-a-tang-diem-sau-bao-cao-viec-lam-cua-my-post1391461.html"
            }
        ]
    },
    {
        "id": "market-view-20261002",
        "date": "2026-10-02",
        "publishedAt": "02/10/2026 • Sau phiên",
        "edition": "Số 31",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT + Tuổi Trẻ + VNIndex.ai + DNSE + VietnamBiz/CafeF • dữ liệu cuối ngày 02.10.2026 • tự doanh tổng phiên: CHƯA XÁC MINH",
        "title": "Hồi khỏi đáy nhưng xu hướng suy yếu vẫn chi phối",
        "thesis": "Dữ liệu đến hết phiên 02/10/2026. VN-Index đóng 1.737,71 điểm, giảm 11,59 điểm (-0,66%), nằm dưới MA20 1.797,20, MA50 1.773,10 và MA200 1.795,65. Giá trị khớp lệnh HOSE đạt 14.447,31 tỷ đồng, tăng khoảng 29,15% so với 01/10 nhưng mới bằng 1,103 lần bình quân 20 phiên 13.093,96 tỷ đồng. Độ rộng chuẩn VNDIRECT là 87 mã tăng, 50 tham chiếu, 206 mã giảm và 10 mã sàn. Có 8 phiên phân phối còn hiệu lực trong 25 phiên và khối ngoại HOSE bán ròng phiên thứ 8 liên tiếp; cả hai cùng kích hoạt CHẶN CỨNG. TRẠNG THÁI CHỐT: KHÔNG — phòng thủ, không mở vị thế mới, tỷ trọng cổ phiếu định hướng không quá 20%.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "Hồi khỏi đáy nhưng xu hướng suy yếu vẫn chi phối",
            "thesis": "VN-Index hồi khỏi đáy 1.728,36 nhưng vẫn đóng dưới MA20/MA50/MA200. Độ rộng yếu, 8 phiên phân phối còn hiệu lực và chuỗi bán ròng khối ngoại trên HOSE đã sang phiên thứ 8; trạng thái chốt vẫn là KHÔNG.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "MA20 đang dốc xuống • 8 phiên phân phối còn hiệu lực.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "MA20 đang dốc xuống",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "8 phiên phân phối",
                            "tone": "negative"
                        },
                        {
                            "text": " còn hiệu lực.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Giá đóng cửa 1.737,71 thấp hơn MA20 1.797,20, MA50 1.773,10 và MA200 1.795,65; RSI14 khoảng 35,65 và MACD khoảng -9,42.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng",
                    "signal": "▼ 206 giảm / ▲ 87 tăng",
                    "detail": "50 tham chiếu • 10 mã sàn • tỷ lệ tăng/giảm 0,422.",
                    "signalParts": [
                        {
                            "text": "▼ 206 giảm",
                            "tone": "negative"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▲ 87 tăng",
                            "tone": "positive"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "50 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "10 mã sàn",
                            "tone": "negative"
                        },
                        {
                            "text": " • tỷ lệ tăng/giảm 0,422.",
                            "tone": "negative"
                        }
                    ],
                    "text": "Tỷ lệ tăng/giảm thấp hơn ngưỡng 0,67 của v3.2 nên yếu tố độ rộng chấm -1. Tuổi Trẻ ghi 90 tăng/216 giảm do phạm vi tổng hợp khác; website giữ VNDIRECT làm chuẩn vận hành.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản",
                    "signal": "~14.447 tỷ • 1,103× TB20",
                    "detail": "▲ +29,15% so với 01/10 • vẫn dưới ngưỡng 1,2× TB20.",
                    "signalParts": [
                        {
                            "text": "~14.447 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "1,103× TB20",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "▲ +29,15% so với 01/10",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "vẫn dưới ngưỡng 1,2× TB20",
                            "tone": "warning"
                        }
                    ],
                    "text": "Thanh khoản tăng mạnh theo ngày nhưng chưa đạt 1,2 lần TB20, vì vậy phiên giảm này chấm 0 ở yếu tố thanh khoản theo đúng v3.2.",
                    "tone": "warning"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; phần giao dịch ngắn hạn giữ tối đa 20% cổ phiếu, giảm hoặc không dùng margin.",
                "Nếu VN-Index đóng dưới 1.728,36: hạ tiếp phần yếu, không bắt dao rơi và không bình quân giá xuống.",
                "Chỉ đánh giá chuyển từ KHÔNG sang CHỜ khi chỉ số lấy lại 1.773,10 rồi vùng 1.795,65–1.797,20, đồng thời độ rộng/thanh khoản cải thiện và hai chặn cứng được giải tỏa."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "130/130 mã đã khóa EOD 02/10 • 128 mã CafeF khớp trực tiếp + MSR/VGI có nguồn thứ ba exact-date • MA/TB20/phân phối tính từ 250 phiên cùng nguồn • tự doanh tổng phiên CHƯA XÁC MINH",
                "shortLabel": "EOD 130/130 đã khóa • 2 chặn cứng đang hoạt động"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.737,71",
                "change": "−11,59 • −0,66%",
                "changeParts": [
                    {
                        "text": "−11,59",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,66%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "87 tăng / 206 giảm",
                "change": "50 tham chiếu • 10 mã giảm sàn",
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative",
                "valueParts": [
                    {
                        "text": "87 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "206 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "50 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "10 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~14.447 tỷ",
                "valueParts": [
                    {
                        "text": "~14.447 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "1,103× bình quân 20 phiên ~13.094 tỷ",
                "changeParts": [
                    {
                        "text": "1,103×",
                        "tone": "warning"
                    },
                    {
                        "text": " bình quân 20 phiên ~13.094 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "8 phiên phân phối • 2 chặn cứng",
                "changeParts": [
                    {
                        "text": "8 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "2 chặn cứng",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng 1.737,71 điểm, giảm 11,59 điểm (-0,66%). VNDIRECT và VNIndex.ai khớp tuyệt đối mức đóng cửa, mức giảm và biên phiên 1.728,36–1.751,60. Chỉ số hồi khỏi đáy nhưng đóng ở khoảng 40,2% biên độ ngày, tức 1/3 giữa chứ không phải 1/3 dưới.",
            "Chuỗi 250 phiên VNDIRECT từ 01/10/2025 đến 02/10/2026 cho MA20 1.797,20, MA50 1.773,10 và MA200 1.795,65. MA20 thấp hơn mức 1.814,79 của 5 phiên trước; RSI14 khoảng 35,65 và MACD khoảng -9,42 thấp hơn đường tín hiệu khoảng -0,75. Cấu trúc vẫn yếu dù chỉ số chưa đóng dưới đáy thấp nhất 20 phiên trước 1.737,58.",
            "Giá trị khớp lệnh HOSE 14.447,31 tỷ đồng, tăng khoảng 29,15% so với 01/10 và bằng 1,103 lần bình quân 20 phiên 13.093,96 tỷ đồng. Vì đây là phiên giảm nhưng thanh khoản chưa đạt 1,2 lần TB20, yếu tố thanh khoản chấm 0 theo đúng rubric v3.2.",
            "Độ rộng VNDIRECT là 87 mã tăng, 50 tham chiếu, 206 mã giảm và 10 mã sàn; tỷ lệ tăng/giảm 0,422. Tuổi Trẻ ghi 90 mã tăng và 216 mã giảm do khác phạm vi tổng hợp, nhưng cả hai nguồn đều xác nhận bên bán áp đảo. VNIndex.ai cho thấy VIC đóng góp khoảng +6,36 điểm nhưng VN-Index vẫn mất 11,59 điểm; top 5 mã kéo giảm lấy đi khoảng 5,80 điểm, tương đương khoảng 50,0% mức giảm.",
            "Bản đồ universe 130 mã cho thấy chứng khoán giảm 15/15 mã với trung vị khoảng -2,26%; ngân hàng giảm 15/17 mã với trung vị khoảng -1,65%; năng lượng giảm 11/12 mã với trung vị khoảng -1,62%. Nông nghiệp chỉ giữ nhịp cục bộ với 3/6 mã tăng; MSR +5,60% là điểm sáng riêng lẻ trong nhóm công nghiệp chứ chưa phải dòng tiền ngành. Chưa có nhóm dẫn dắt rõ.",
            "Khối ngoại HOSE ngày 01/10 đã là phiên bán ròng thứ 7 liên tiếp gần 79 tỷ đồng. Ngày 02/10, CafeF ghi HOSE bán ròng khoảng 3.361 tỷ đồng, kéo chuỗi sang phiên thứ 8 và kích hoạt CHẶN CỨNG thứ hai. Số ba sàn của Tuổi Trẻ là bán ròng 3.276 tỷ đồng; bài không trộn hai phạm vi.",
            "VN30F1M đóng 1.885,0 điểm, cao hơn VN30 cơ sở 1.875,99 khoảng 9,01 điểm (+0,480%). Basis dương là tín hiệu đệm ngắn hạn, nhưng bối cảnh quốc tế trước phiên pha trộn với lợi suất Mỹ và giá dầu ở mức cao nên yếu tố phái sinh/vĩ mô chấm 0. Dữ liệu tổng tự doanh 02/10 chưa được xác minh đủ tại thời điểm khóa nên không dùng để chấm điểm."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.728,36",
                "note": "Đáy phiên 02/10 đã được đối chiếu VNDIRECT và VNIndex.ai. Đóng dưới mốc này làm mất đáy phiên và buộc tiếp tục giảm rủi ro."
            },
            {
                "label": "Hỗ trợ mạnh tham chiếu",
                "value": "1.700",
                "note": "Số tròn tâm lý, chỉ dùng làm mốc quản trị tham chiếu; không phải điểm mua tự động."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.773,10",
                "note": "MA50 tự tính từ chuỗi 250 phiên. Lấy lại MA50 chỉ là bước đầu, chưa đủ giải tỏa hai chặn cứng."
            },
            {
                "label": "Kháng cự mạnh / MA200–MA20",
                "value": "1.795,65–1.797,20",
                "note": "MA200 và MA20 tự tính. Cần đóng trên vùng này cùng độ rộng, thanh khoản và trạng thái phân phối/khối ngoại cải thiện mới đủ cơ sở giảm phòng thủ."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.797,20 + xác nhận",
                "note": "Chỉ đánh giá nâng trạng thái sau khi hai chặn cứng được giải tỏa và điểm đồng thuận được tính lại; không tự động mua chỉ vì vượt giá."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.728,36",
                "note": "Đóng dưới đáy phiên 02/10 xác nhận rủi ro mở rộng nhịp giảm; không bắt đáy cơ học."
            }
        ],
        "confluence": {
            "score": -4,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.737,71 dưới MA20 1.797,20 và MA50 1.773,10; MA20 đang giảm so với 5 phiên trước."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm với GT khớp lệnh 14.447,31 tỷ, bằng 1,103 lần TB20; chưa đạt điều kiện -1 của v3.2 là >=1,2 lần TB20."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "87 mã tăng / 206 mã giảm, tỷ lệ 0,422 <=0,67."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Top 5 kéo giảm giải thích khoảng 50,0% mức giảm; rubric -1 về tập trung top 5 được định nghĩa cho mức tăng. Áp lực bán diện rộng được phản ánh riêng ở độ rộng và bản đồ ngành."
                },
                {
                    "factor": "Khối ngoại",
                    "score": -1,
                    "note": "Khối ngoại HOSE bán ròng phiên thứ 8 liên tiếp; riêng 02/10 CafeF ghi khoảng 3.361 tỷ đồng."
                },
                {
                    "factor": "Sức khỏe xu hướng / phiên phân phối",
                    "score": -1,
                    "note": "Có 8 phiên phân phối còn hiệu lực trong 25 phiên: 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09 và 02/10."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Basis VN30F1M +9,01 điểm (+0,480%) hỗ trợ nhẹ, nhưng bối cảnh lợi suất Mỹ và giá dầu cao khiến tổng hợp yếu tố này chỉ trung tính."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 8 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng >=6 của v3.2.",
                "CHẶN CỨNG: khối ngoại HOSE bán ròng 8 phiên liên tiếp, vượt ngưỡng >=5 của v3.2.",
                "R:R mở mới tới MA50 = (1.773,10 - 1.737,71) / (1.737,71 - 1.728,36) ≈ 3,78; không kích hoạt chặn R:R nhưng không được phép vượt hai chặn cứng."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "KỊCH BẢN TỐT — VN-Index lấy lại 1.773,10 rồi đóng trên 1.795,65–1.797,20; độ rộng và thanh khoản đạt chuẩn v3.2, số phiên phân phối giảm dưới 6 và chặn cứng khối ngoại được giải tỏa",
                "then": "Khi đó mới tính lại điểm để đánh giá chuyển KHÔNG → CHỜ; không mặc định mở vị thế chỉ vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "likelihood": "TRUNG BÌNH",
                "if": "KỊCH BẢN CƠ SỞ — VN-Index giữ trên 1.728,36 nhưng còn dưới 1.773,10, thanh khoản/độ rộng chưa đồng thuận và hai chặn cứng chưa được giải tỏa",
                "then": "Duy trì KHÔNG; giữ tối đa 20% cổ phiếu cho phần giao dịch ngắn hạn, ưu tiên mã khỏe tương đối và không mở vị thế mới."
            },
            {
                "state": "risk_off",
                "likelihood": "CAO",
                "if": "KỊCH BẢN XẤU — VN-Index đóng dưới 1.728,36 hoặc áp lực bán lan rộng hơn trong khi thanh khoản tiếp tục tăng",
                "then": "Hạ tiếp tỷ trọng về mức rất thấp, dừng mở mới, xử lý mã yếu/chạm cắt lỗ và không dùng margin để bình quân giá xuống."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — lấy lại 1.773,10 rồi đóng trên 1.795,65–1.797,20, độ rộng/thanh khoản đạt chuẩn và cả hai chặn cứng được giải tỏa",
                "then": "Chỉ tính lại để đánh giá chuyển KHÔNG → CHỜ; chưa tự động mở vị thế vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG TRUNG BÌNH — giữ trên 1.728,36 nhưng còn dưới 1.773,10 hoặc xác nhận dòng tiền chưa đủ",
                "then": "GIỮ TRẠNG THÁI KHÔNG. Tỷ trọng cổ phiếu định hướng tối đa 20%, không mua mới, giảm hoặc không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG CAO — đóng dưới 1.728,36 hoặc áp lực bán lan rộng hơn với thanh khoản tăng",
                "then": "GIẢM RỦI RO tiếp; dừng mở mới, không bắt dao rơi, không bình quân giá xuống và xử lý vị thế vi phạm cắt lỗ."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 02/10/2026 • kiểm định sau ATC",
            "finalState": "KHÔNG",
            "score": "-4/7",
            "veto": "2 CHẶN CỨNG — 8 phiên phân phối + khối ngoại bán ròng 8 phiên liên tiếp",
            "marketState": "YẾU",
            "shortTrend": "Giảm / dưới MA20 và MA50",
            "mediumTrend": "Yếu / dưới MA200",
            "liquidity": "1,103× TB20",
            "breadth": "87 tăng / 206 giảm",
            "flow": "Chưa có nhóm dẫn dắt rõ; chứng khoán, ngân hàng, năng lượng yếu diện rộng",
            "foreign": "HOSE bán ròng phiên thứ 8 liên tiếp; 02/10 khoảng 3.361 tỷ",
            "distributions": "8 phiên / 25 phiên",
            "tradingAbility": "Phòng thủ",
            "moneyIn": "Chưa có nhóm tiền vào đủ rộng; nông nghiệp chỉ giữ nhịp cục bộ",
            "moneyOut": "Chứng khoán, ngân hàng, năng lượng",
            "support": "1.728,36; mạnh tham chiếu 1.700",
            "resistance": "1.773,10; mạnh 1.795,65–1.797,20",
            "invalidation": "Đóng dưới 1.728,36",
            "buyZone": "Không áp dụng",
            "reduceZone": "Hạ tiếp nếu đóng dưới 1.728,36 hoặc vị thế riêng vi phạm cắt lỗ",
            "rr": "Khoảng 3,78 tới MA50 nhưng không dùng để vượt chặn cứng",
            "margin": "Giảm / không dùng",
            "allocation": "<=20% cổ phiếu / >=80% tiền mặt",
            "bias": "Phòng thủ",
            "mainAction": "Không mở vị thế mới"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng không quá 20%.",
            "Rủi ro lớn nhất là 8 phiên phân phối còn hiệu lực đồng thời với chuỗi bán ròng khối ngoại HOSE đã sang phiên thứ 8.",
            "Chỉ đổi quan điểm khi VN-Index lấy lại 1.773,10 rồi 1.795,65–1.797,20 với độ rộng, thanh khoản và hai chặn cứng cùng cải thiện; đóng dưới 1.728,36 thì hạ rủi ro tiếp."
        ],
        "focus": "KHÔNG • <=20% cổ phiếu • 1.728,36 mốc vô hiệu • MA50 1.773,10 • MA200–MA20 1.795,65–1.797,20 • 1,103× TB20 • 8 phiên phân phối • khối ngoại HOSE bán ròng phiên thứ 8 • không mở vị thế mới",
        "inference": "Nhật ký nguồn nội bộ được lưu tại docs/market-source-log-20261002.md. Data Gate 130/130 mã đã PASS: 128 mã khớp giá đóng cửa trực tiếp VNDIRECT–CafeF; MSR và VGI lệch CafeF đúng 100 đồng nhưng nguồn thứ ba hậu phiên xác nhận lần lượt 60.300 và 80.400, trùng VNDIRECT, nên chỉ thêm ngoại lệ exact-date cho 02/10. VN-Index 1.737,71 và -11,59 (-0,66%) được đối chiếu VNDIRECT, VNIndex.ai và báo hậu phiên. MA20/MA50/MA200, TB20, tỷ lệ độ rộng, phiên phân phối và R:R được tính bằng code từ chuỗi 250 phiên VNDIRECT 01/10/2025–02/10/2026. Điểm v3.2 = -4/7 với cấu phần -1,0,-1,0,-1,-1,0. Có 8 phiên phân phối và khối ngoại HOSE bán ròng 8 phiên liên tiếp, nên hai chặn cứng kích hoạt; trạng thái cuối bắt buộc là KHÔNG.",
        "limitations": [
            "Độ rộng VNDIRECT là 87 tăng/50 tham chiếu/206 giảm, trong khi Tuổi Trẻ ghi 90 tăng/216 giảm do khác phạm vi tổng hợp; website giữ VNDIRECT làm chuẩn vận hành và không trộn hai bộ số.",
            "Tự doanh tổng phiên 02/10 chưa có nguồn hậu phiên đủ rõ và độc lập tại thời điểm khóa; không dùng để chấm điểm hoặc đưa số vào bài Zalo.",
            "Bản đồ ngành tính trên universe 130 mã của website, không đại diện toàn bộ số mã niêm yết.",
            "Kịch bản dùng mức khả năng định tính THẤP/TRUNG BÌNH/CAO theo v3.2; không dùng xác suất phần trăm."
        ],
        "zaloPost": "Phiên 02/10 chưa cho tín hiệu để nâng rủi ro. VN-Index đóng 1.737,71 điểm, giảm 11,59 điểm (-0,66%) dù đã hồi khỏi đáy 1.728,36. Chỉ số vẫn nằm dưới MA50 1.773,10 và cụm MA200–MA20 1.795,65–1.797,20, nên xu hướng ngắn hạn vẫn yếu.\n\nĐiểm đáng ngại không chỉ nằm ở chỉ số. Giá trị khớp lệnh HOSE tăng lên khoảng 14.447 tỷ đồng, cao hơn phiên trước khoảng 29%, nhưng mới bằng 1,103 lần bình quân 20 phiên. Độ rộng VNDIRECT chỉ có 87 mã tăng so với 206 mã giảm. Trong bộ 130 mã theo dõi, chứng khoán giảm 15/15, ngân hàng giảm 15/17 và năng lượng giảm 11/12. VIC đóng góp khoảng 6,36 điểm nhưng VN-Index vẫn giảm 11,59 điểm, cho thấy áp lực bán ở phần còn lại của thị trường còn rộng. Chưa có nhóm dẫn dắt đủ rõ để mở mua mới.\n\nTheo v3.2, điểm đồng thuận là -4/7. Quan trọng hơn, hiện có 8 phiên phân phối còn hiệu lực và khối ngoại HOSE đã bán ròng sang phiên thứ 8 liên tiếp. Hai điều kiện này cùng kích hoạt chặn cứng, vì vậy trạng thái chốt là KHÔNG.\n\nKế hoạch phiên tới: nếu VN-Index còn dưới 1.773,10, tôi tiếp tục đứng ngoài với vị thế mới. Nếu đóng dưới 1.728,36, ưu tiên hạ tiếp phần yếu, không bắt dao rơi và không bình quân giá xuống. Chỉ khi chỉ số lấy lại 1.773,10 rồi vùng 1.795,65–1.797,20, đồng thời độ rộng, thanh khoản cải thiện và hai chặn cứng được giải tỏa, mới tính lại để xem có chuyển từ KHÔNG sang CHỜ hay không.\n\nViệc cần làm ngay là rà danh mục, giữ tối đa khoảng 20% cổ phiếu cho phần trading ngắn hạn và giảm hoặc không dùng margin. Bảo toàn vốn trước, cơ hội sau.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 02/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-02&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index 250 phiên tính MA, TB20 và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-02&size=500"
            },
            {
                "label": "VNIndex.ai — đối chiếu EOD, biên phiên, đóng góp điểm và khối ngoại ước tính 02/10",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "Tuổi Trẻ — VN-Index giảm phiên thứ 5 liên tiếp, thanh khoản và khối ngoại 02/10",
                "url": "https://tuoitre.vn/vn-index-giam-phien-thu-5-lien-tiep-pnj-van-san-du-giao-dich-lon-nhat-lich-su-100261002152649739.htm"
            },
            {
                "label": "VietnamBiz — khối ngoại HOSE 01/10 bán ròng phiên thứ 7 liên tiếp",
                "url": "https://vietnambiz.vn/khoi-ngoai-mua-rong-gan-3200-ty-dong-msr-trong-phien-dau-thang-10-2026101152641376.htm"
            },
            {
                "label": "CafeF — khối ngoại HOSE bán ròng 3.361 tỷ đồng ngày 02/10",
                "url": "https://cafef.vn/2-co-phieu-bluechips-bi-khoi-ngoai-xa-2300-ty-dong-phien-cuoi-tuan-188261002162342712.chn"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 02/10/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790874000&to=1790933400"
            },
            {
                "label": "24HMoney — MSR 60.300 hậu phiên 02/10",
                "url": "https://24hmoney.vn/stock/msr"
            },
            {
                "label": "Stockbiz — VGI 80.400 hậu phiên 02/10",
                "url": "https://web.stockbiz.vn/Stocks/VGI/HistoricalQuotes.aspx"
            }
        ]
    },
    {
        "id": "market-view-20261001",
        "date": "2026-10-01",
        "publishedAt": "01/10/2026 • Sau phiên",
        "edition": "Số 30",
        "sentiment": "cautious",
        "sentimentLabel": "KHÔNG",
        "dataStatus": "VNDIRECT + VNIndex.ai + DNSE + HNX • dữ liệu cuối ngày 01.10.2026 • khối ngoại/tự doanh cuối phiên chính thức: CHƯA XÁC MINH",
        "title": "Phá đáy 20 phiên, nhịp giảm chưa có xác nhận tạo đáy",
        "thesis": "Dữ liệu đến hết phiên 01/10/2026. VN-Index đóng 1.749,30 điểm, giảm 19,32 điểm (-1,09%), nằm dưới MA20 1.802,97, MA50 1.772,95 và MA200 1.795,70; đồng thời đóng dưới đáy thấp nhất của 20 phiên trước là 1.758,31. Giá trị khớp lệnh HOSE đạt 11.186,08 tỷ đồng, tương đương 0,843 lần bình quân 20 phiên 13.265,13 tỷ đồng; độ rộng 103 mã tăng, 76 tham chiếu, 172 mã giảm và 5 mã sàn. Có 7 phiên phân phối còn hiệu lực trong 25 phiên, kích hoạt CHẶN CỨNG theo v3.2. TRẠNG THÁI CHỐT: KHÔNG — phòng thủ, không mở vị thế mới, tỷ trọng cổ phiếu định hướng không quá 20%.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "rulebookVersion": "v3.2",
        "brief": {
            "headline": "Phá đáy 20 phiên, nhịp giảm chưa có xác nhận tạo đáy",
            "thesis": "VN-Index đóng dưới MA20/MA50/MA200 và phá đáy thấp nhất 20 phiên trước đó. Thanh khoản chỉ đạt 0,843 lần bình quân 20 phiên, trong khi 7 phiên phân phối còn hiệu lực kích hoạt chặn cứng; trạng thái chốt là KHÔNG.",
            "evidence": [
                {
                    "label": "Kỹ thuật",
                    "signal": "▼ dưới MA20 / MA50 / MA200",
                    "detail": "7 phiên phân phối còn hiệu lực • phá đáy 20 phiên trước 1.758,31.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA20 / MA50 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "7 phiên phân phối",
                            "tone": "negative"
                        },
                        {
                            "text": " còn hiệu lực • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "phá đáy 20 phiên trước 1.758,31",
                            "tone": "negative"
                        }
                    ],
                    "text": "Giá đóng cửa 1.749,30 thấp hơn MA20 1.802,97, MA50 1.772,95 và MA200 1.795,70; MA20 cũng thấp hơn mức 1.815,11 của 5 phiên trước.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng",
                    "signal": "▼ 172 giảm / ▲ 103 tăng",
                    "detail": "76 tham chiếu • 5 mã sàn • tỷ lệ tăng/giảm 0,599.",
                    "signalParts": [
                        {
                            "text": "▼ 172 giảm",
                            "tone": "negative"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▲ 103 tăng",
                            "tone": "positive"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "76 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "5 mã sàn",
                            "tone": "negative"
                        },
                        {
                            "text": " • tỷ lệ tăng/giảm 0,599.",
                            "tone": "negative"
                        }
                    ],
                    "text": "Độ rộng ở dưới ngưỡng 0,67 của v3.2 nên yếu tố độ rộng chấm -1.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản",
                    "signal": "~11.186 tỷ • 0,843× TB20",
                    "detail": "TB20 ~13.265 tỷ • giảm khoảng 1,15% so với 30/09.",
                    "signalParts": [
                        {
                            "text": "~11.186 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "0,843× TB20",
                            "tone": "warning"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "TB20 ~13.265 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "giảm khoảng 1,15% so với 30/09",
                            "tone": "negative"
                        }
                    ],
                    "text": "Phiên giảm nhưng thanh khoản chưa đạt 1,2 lần TB20, vì vậy yếu tố thanh khoản chấm 0 theo đúng v3.2, không tự hạ thành -1.",
                    "tone": "warning"
                }
            ],
            "actions": [
                "KHÔNG mở vị thế mới; phần giao dịch ngắn hạn giữ tối đa 20% cổ phiếu, giảm hoặc không dùng margin.",
                "Nếu VN-Index đóng dưới 1.737,58: hạ tiếp phần yếu, không bắt dao rơi và không bình quân giá xuống.",
                "Chỉ đánh giá chuyển từ KHÔNG sang CHỜ khi chỉ số lấy lại 1.772,95 rồi vùng 1.795,70–1.802,97, độ rộng/thanh khoản đồng thuận và số phiên phân phối còn hiệu lực giảm dưới 6."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "130/130 mã đã khóa EOD 01/10 • giá đóng cửa VN-Index đã đối chiếu 2 nguồn • MA/TB20/phân phối tính từ 249 phiên cùng nguồn • khối ngoại/tự doanh chính thức CHƯA XÁC MINH",
                "shortLabel": "EOD 130/130 đã khóa • chặn cứng đang hoạt động"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.749,30",
                "change": "−19,32 • −1,09%",
                "changeParts": [
                    {
                        "text": "−19,32",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−1,09%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "103 tăng / 172 giảm",
                "change": "76 tham chiếu • 5 mã giảm sàn",
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative",
                "valueParts": [
                    {
                        "text": "103 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "172 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "76 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "5 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~11.186 tỷ",
                "valueParts": [
                    {
                        "text": "~11.186 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "0,843× bình quân 20 phiên ~13.265 tỷ",
                "changeParts": [
                    {
                        "text": "0,843×",
                        "tone": "warning"
                    },
                    {
                        "text": " bình quân 20 phiên ~13.265 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA20 / MA50 / MA200",
                "valueParts": [
                    {
                        "text": "Dưới MA20 / MA50 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "7 phiên phân phối còn hiệu lực",
                "changeParts": [
                    {
                        "text": "7 phiên phân phối",
                        "tone": "negative"
                    },
                    {
                        "text": " còn hiệu lực",
                        "tone": "neutral"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "VN-Index đóng cửa 1.749,30 điểm, giảm 19,32 điểm (-1,09%). VNDIRECT và VNIndex.ai cùng khớp tuyệt đối mức đóng cửa và mức giảm. Dữ liệu VNDIRECT ghi mở cửa 1.765,71, cao nhất 1.768,05 và thấp nhất 1.737,58; VNIndex.ai lúc 14:57 hiển thị đáy 1.740,86 nên đáy phiên được gắn nhãn một nguồn và website ưu tiên VNDIRECT theo thứ bậc nguồn.",
            "Chuỗi 249 phiên VNDIRECT từ 01/10/2025 đến 01/10/2026 cho MA20 1.802,97, MA50 1.772,95 và MA200 1.795,70. MA20 thấp hơn mức 1.815,11 của 5 phiên trước. VN-Index đóng dưới đáy thấp nhất 20 phiên trước 1.758,31; RSI14 khoảng 38,03 và MACD khoảng -6,15 thấp hơn đường tín hiệu khoảng 1,42.",
            "Giá trị khớp lệnh HOSE là 11.186,08 tỷ đồng, bằng 0,843 lần bình quân 20 phiên 13.265,13 tỷ đồng và thấp hơn phiên 30/09 khoảng 1,15%. Theo v3.2 đây là phiên giảm nhưng thanh khoản chưa đạt 1,2 lần TB20, nên yếu tố thanh khoản chấm 0 chứ không chấm -1.",
            "Độ rộng HOSE theo VNDIRECT là 103 mã tăng, 76 tham chiếu, 172 mã giảm và 5 mã sàn; tỷ lệ tăng/giảm 0,599, thấp hơn ngưỡng 0,67 nên chấm -1. VNIndex.ai ghi top 5 mã kéo giảm là VIC -12,72 điểm, STB -1,45, LPB -1,24, BID -0,81 và VCB -0,69; tổng -16,91 điểm, tương đương khoảng 87,5% mức giảm của VN-Index. Tuy vậy độ rộng vẫn âm, nên phiên giảm không chỉ là câu chuyện của một mã trụ.",
            "Trong universe 130 mã của website, năng lượng là nhóm giữ nhịp tương đối tốt hơn với 7/12 mã tăng; ngược lại ngân hàng có 10/17 mã giảm và chứng khoán có 10/15 mã giảm. Dòng tiền vì vậy có luân chuyển cục bộ sang một phần năng lượng nhưng chưa đủ để gọi là lan tỏa thị trường.",
            "VN30F1M đóng 1.895,0 điểm, cao hơn VN30 cơ sở 1.890,57 khoảng 4,43 điểm (+0,234%). HNX quy định đáo hạn vào thứ Năm thứ ba của tháng; tháng 10/2026 tương ứng 15/10/2026, nên 01/10 không thuộc 3 phiên trước đáo hạn. Basis dương chỉ là tín hiệu đệm nhẹ; bối cảnh quốc tế trước phiên còn pha trộn nên yếu tố phái sinh/vĩ mô chấm 0.",
            "Khối ngoại 01/10 mới có số ước tính sau phiên từ một nguồn và tự doanh 01/10 chưa có nguồn hậu phiên đủ tin cậy tại thời điểm khóa. Hai dữ liệu này không được dùng để làm đẹp điểm số; yếu tố khối ngoại chấm 0 và điều kiện chặn liên quan khối ngoại được ghi KHÔNG KIỂM ĐƯỢC."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / mốc vô hiệu",
                "value": "1.737,58",
                "note": "Đáy phiên 01/10 theo VNDIRECT. Nếu VN-Index đóng dưới mốc này, kịch bản cân bằng ngắn hạn bị hủy và ưu tiên hạ tiếp rủi ro."
            },
            {
                "label": "Hỗ trợ mạnh tham chiếu",
                "value": "1.700",
                "note": "Số tròn tâm lý; trước phiên AIS cũng theo dõi vùng khoảng 1.720 và xa hơn 1.700. Đây là mốc quản trị, không phải điểm mua tự động."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.772,95",
                "note": "MA50 tự tính từ chuỗi 249 phiên. Lấy lại MA50 chỉ là bước đầu, chưa đủ xóa chặn cứng."
            },
            {
                "label": "Kháng cự mạnh / MA200–MA20",
                "value": "1.795,70–1.802,97",
                "note": "MA200 và MA20 tự tính. Muốn giảm phòng thủ cần đóng trên vùng này cùng độ rộng, thanh khoản và số phiên phân phối cải thiện."
            },
            {
                "label": "Xác nhận tích cực",
                "value": ">1.802,97 + xác nhận",
                "note": "Chỉ xem xét nâng trạng thái nếu đồng thời thanh khoản/độ rộng đạt ngưỡng v3.2 và chặn cứng 7 phiên phân phối đã được giải tỏa."
            },
            {
                "label": "Xác nhận rủi ro",
                "value": "<1.737,58",
                "note": "Đóng dưới đáy phiên 01/10 làm tăng rủi ro mở rộng nhịp giảm; không bắt đáy cơ học."
            }
        ],
        "confluence": {
            "score": -3,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / MA / cấu trúc",
                    "score": -1,
                    "note": "Đóng 1.749,30 dưới MA20 1.802,97 và MA50 1.772,95; đồng thời dưới đáy thấp nhất 20 phiên trước 1.758,31."
                },
                {
                    "factor": "Thanh khoản",
                    "score": 0,
                    "note": "Phiên giảm với GT khớp lệnh 11.186,08 tỷ, bằng 0,843 lần TB20; chưa đạt điều kiện -1 của v3.2 là phiên giảm kèm thanh khoản >=1,2 lần TB20."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "103 mã tăng / 172 mã giảm, tỷ lệ 0,599 <=0,67."
                },
                {
                    "factor": "Chất lượng dòng tiền",
                    "score": 0,
                    "note": "Top 5 kéo giảm giải thích khoảng 87,5% mức giảm nhưng điều kiện -1 trong rubric về tập trung top 5 được định nghĩa cho phiên tăng; không tự sửa rubric. Độ rộng âm được chấm riêng ở yếu tố 3."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "Số 01/10 mới ở mức ước tính một nguồn tại thời điểm khóa; không dùng để chấm điểm."
                },
                {
                    "factor": "Sức khỏe xu hướng / phiên phân phối",
                    "score": -1,
                    "note": "Có 7 phiên phân phối còn hiệu lực trong 25 phiên: 11/09, 14/09, 18/09, 23/09, 24/09, 28/09 và 30/09."
                },
                {
                    "factor": "Phái sinh / vĩ mô",
                    "score": 0,
                    "note": "Basis VN30F1M +4,43 điểm (+0,234%) hỗ trợ nhẹ, nhưng bối cảnh quốc tế trước phiên pha trộn; không đủ điều kiện nâng +1."
                }
            ],
            "veto": [
                "CHẶN CỨNG: 7 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng >=6 của v3.2.",
                "Khối ngoại: điều kiện bán ròng >=5 phiên liên tiếp tại 01/10 KHÔNG KIỂM ĐƯỢC vì số cuối phiên chính thức chưa đủ đối chiếu.",
                "R:R mở mới tới MA50 = (1.772,95 - 1.749,30) / (1.749,30 - 1.737,58) ≈ 2,02; không kích hoạt chặn R:R, nhưng R:R không được phép vượt chặn cứng."
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "likelihood": "THẤP",
                "if": "KỊCH BẢN TỐT — VN-Index lấy lại 1.772,95 rồi đóng trên vùng 1.795,70–1.802,97; độ rộng cải thiện theo ngưỡng v3.2, thanh khoản phiên tăng đạt ít nhất 1,2 lần TB20 và số phiên phân phối còn hiệu lực giảm dưới 6",
                "then": "Chỉ khi đó mới đánh giá chuyển KHÔNG → CHỜ hoặc cao hơn theo điểm đồng thuận mới; không mặc định mua chỉ vì vượt một mốc giá."
            },
            {
                "state": "neutral",
                "likelihood": "CAO",
                "if": "KỊCH BẢN CƠ SỞ — VN-Index còn dao động trong 1.737,58–1.772,95, thanh khoản dưới TB20 và độ rộng chưa chuyển dương rõ",
                "then": "Duy trì KHÔNG; giữ tối đa 20% cổ phiếu cho phần giao dịch ngắn hạn, ưu tiên mã khỏe tương đối và không mở vị thế mới."
            },
            {
                "state": "risk_off",
                "likelihood": "TRUNG BÌNH",
                "if": "KỊCH BẢN XẤU — VN-Index đóng dưới 1.737,58 hoặc áp lực bán lan rộng mạnh hơn trong khi thanh khoản tăng",
                "then": "Hạ tiếp tỷ trọng về mức rất thấp, dừng mở mới, xử lý mã yếu/chạm cắt lỗ và không dùng margin để bình quân giá xuống."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "TỐT • KHẢ NĂNG THẤP — lấy lại 1.772,95 rồi đóng trên 1.795,70–1.802,97, độ rộng/thanh khoản đạt chuẩn và số phiên phân phối còn hiệu lực giảm dưới 6",
                "then": "Chỉ đánh giá chuyển KHÔNG → CHỜ theo điểm mới; chưa tự động mở vị thế chỉ vì chỉ số vượt cản."
            },
            {
                "state": "neutral",
                "if": "CƠ SỞ • KHẢ NĂNG CAO — dao động 1.737,58–1.772,95, thanh khoản dưới TB20 hoặc độ rộng chưa cải thiện",
                "then": "GIỮ TRẠNG THÁI KHÔNG. Tỷ trọng cổ phiếu định hướng tối đa 20%, không mua mới, giảm hoặc không dùng margin."
            },
            {
                "state": "risk_off",
                "if": "XẤU • KHẢ NĂNG TRUNG BÌNH — đóng dưới 1.737,58 hoặc áp lực bán mở rộng với thanh khoản tăng",
                "then": "GIẢM RỦI RO tiếp; dừng mở mới, không bắt dao rơi, không bình quân giá xuống và xử lý vị thế vi phạm cắt lỗ."
            }
        ],
        "actionTable": {
            "dataCutoff": "Hết phiên 01/10/2026 • kiểm định sau ATC",
            "finalState": "KHÔNG",
            "score": "-3/7",
            "veto": "CHẶN CỨNG — 7 phiên phân phối còn hiệu lực",
            "marketState": "YẾU",
            "shortTrend": "Giảm / dưới MA20 và MA50",
            "mediumTrend": "Yếu / dưới MA200",
            "liquidity": "0,843× TB20",
            "breadth": "103 tăng / 172 giảm",
            "flow": "Top 5 kéo giảm chiếm khoảng 87,5% mức giảm; độ rộng vẫn âm",
            "foreign": "CHƯA XÁC MINH số chính thức; không chấm điểm",
            "distributions": "7 phiên / 25 phiên",
            "tradingAbility": "Phòng thủ",
            "moneyIn": "Năng lượng giữ nhịp tương đối",
            "moneyOut": "Ngân hàng, chứng khoán phân hóa bất lợi",
            "support": "1.737,58; mạnh tham chiếu 1.700",
            "resistance": "1.772,95; mạnh 1.795,70–1.802,97",
            "invalidation": "Đóng dưới 1.737,58",
            "buyZone": "Không áp dụng",
            "reduceZone": "Hạ tiếp nếu đóng dưới 1.737,58 hoặc vị thế riêng vi phạm cắt lỗ",
            "rr": "Khoảng 2,02 tới MA50 nhưng không dùng để vượt chặn cứng",
            "margin": "Giảm / không dùng",
            "allocation": "<=20% cổ phiếu / >=80% tiền mặt",
            "bias": "Phòng thủ",
            "mainAction": "Không mở vị thế mới"
        },
        "finalConclusion": [
            "PHÒNG THỦ — KHÔNG mở vị thế mới; tỷ trọng cổ phiếu định hướng không quá 20%.",
            "Rủi ro lớn nhất là 7 phiên phân phối còn hiệu lực trong khi chỉ số đã phá đáy 20 phiên và nằm dưới MA20/MA50/MA200.",
            "Chỉ đổi quan điểm khi VN-Index lấy lại 1.772,95 rồi 1.795,70–1.802,97 với độ rộng, thanh khoản và số phiên phân phối cùng cải thiện; đóng dưới 1.737,58 thì hạ rủi ro tiếp."
        ],
        "focus": "KHÔNG • <=20% cổ phiếu • 1.737,58 mốc vô hiệu • MA50 1.772,95 • MA200–MA20 1.795,70–1.802,97 • 0,843× TB20 • 7 phiên phân phối • không mở vị thế mới • giảm/không dùng margin",
        "inference": "Nhật ký nguồn nội bộ được lưu tại docs/market-source-log-20261001.md. Giá đóng cửa VN-Index 1.749,30 và mức giảm 19,32 điểm (-1,09%) đã đối chiếu VNDIRECT với VNIndex.ai. Thanh khoản khớp lệnh và độ rộng dùng VNDIRECT theo đúng phạm vi HOSE; nguồn thứ hai công khai tại thời điểm khóa không có cùng phạm vi khớp lệnh nên gắn nhãn 1 NGUỒN thay vì trộn tổng giao dịch. MA20/MA50/MA200, TB20, tỷ lệ độ rộng, phiên phân phối và R:R được tính bằng code từ chuỗi 249 phiên VNDIRECT 01/10/2025–01/10/2026, không ghép chuỗi. Điểm v3.2 = -3/7 với cấu phần -1,0,-1,0,0,-1,0. Có 7 phiên phân phối còn hiệu lực nên chặn cứng được kích hoạt và trạng thái cuối bắt buộc là KHÔNG. Số khối ngoại 01/10 mới ở mức ước tính một nguồn và tự doanh chưa xác minh đủ, vì vậy không dùng để chấm điểm hoặc đưa vào bài Zalo.",
        "limitations": [
            "Đáy phiên VNDIRECT là 1.737,58 trong khi VNIndex.ai lúc 14:57 hiển thị 1.740,86; website dùng VNDIRECT theo thứ bậc nguồn và ghi rõ đây là số một nguồn.",
            "Khối ngoại 01/10 chỉ có số ước tính một nguồn tại thời điểm khóa; yếu tố khối ngoại chấm 0. Tự doanh 01/10 chưa xác minh đủ.",
            "Bản đồ ngành tính trên universe 130 mã của website, không đại diện toàn bộ số mã niêm yết.",
            "Kịch bản dùng mức khả năng định tính THẤP/CAO/TRUNG BÌNH theo v3.2; không sử dụng xác suất phần trăm."
        ],
        "zaloPost": "Phiên 01/10 cho tín hiệu yếu hơn một nhịp rung lắc thông thường. VN-Index đóng 1.749,30 điểm, giảm 19,32 điểm (-1,09%) và đã nằm dưới cả MA20 1.802,97, MA50 1.772,95 lẫn MA200 1.795,70. Quan trọng hơn, chỉ số đã đóng dưới đáy thấp nhất của 20 phiên trước là 1.758,31. Đây chưa phải trạng thái phù hợp để đi tìm điểm mua mới.\n\nDòng tiền cũng chưa cho thấy lực đỡ đủ mạnh. Giá trị khớp lệnh HOSE khoảng 11.186 tỷ đồng, chỉ bằng 0,843 lần bình quân 20 phiên. Độ rộng nghiêng xấu với 103 mã tăng và 172 mã giảm. Trong bộ 130 mã tôi đang theo dõi, năng lượng giữ nhịp tương đối tốt hơn, còn ngân hàng và chứng khoán vẫn phân hóa bất lợi. Vì vậy ưu tiên hiện tại là bảo vệ sức mua, không phải cố tìm cổ phiếu để lấp đầy danh mục.\n\nĐiểm đồng thuận theo v3.2 là -3/7, nhưng yếu tố quyết định nằm ở cổng chặn: hiện có 7 phiên phân phối còn hiệu lực trong 25 phiên, vượt ngưỡng chặn cứng. Trạng thái chốt là KHÔNG. Với phần giao dịch ngắn hạn, tỷ trọng định hướng tối đa 20% cổ phiếu, phần còn lại giữ tiền; margin giảm hoặc không dùng.\n\nKế hoạch phiên tới rất rõ. Nếu VN-Index còn dưới MA50 1.772,95, tôi không mở vị thế mới. Nếu đóng dưới 1.737,58, ưu tiên hạ tiếp các mã yếu và tuyệt đối không bắt dao rơi. Chỉ khi chỉ số lấy lại 1.772,95 rồi vùng 1.795,70–1.802,97, đồng thời độ rộng, thanh khoản cải thiện và số phiên phân phối còn hiệu lực giảm dưới 6, mới đánh giá chuyển từ KHÔNG sang CHỜ.\n\nViệc cần làm ngay là rà lại danh mục, xử lý mã vi phạm cắt lỗ và giữ sức mua. Bảo toàn vốn trước, cơ hội sau.\n\nNội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng EOD 01/10/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-01&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index 249 phiên tính MA, TB20 và phân phối",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-01&size=500"
            },
            {
                "label": "VNIndex.ai — đối chiếu đóng cửa, đóng góp điểm và khối ngoại ước tính 01/10/2026",
                "url": "https://vnindex.ai/vnindex-hom-nay"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 01/10/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790787600&to=1790847000"
            },
            {
                "label": "HNX — quy cách hợp đồng tương lai VN30 và ngày giao dịch cuối cùng",
                "url": "https://eoffice.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html"
            },
            {
                "label": "HNX — lịch giao dịch tháng 10/2026 xác nhận 15/10 là Thứ Năm/ngày giao dịch",
                "url": "https://hnx.vn/vi-vn/m-tin-tuc-hnx/Thong%20bao%20Lich%20bieu%20giao%20dich%20mua%20ban%20lai%20TPCP%20cua%20KBNN%20thang%20102026-636444-0.html"
            },
            {
                "label": "SmartF — vùng hỗ trợ và đánh giá kỹ thuật trước phiên 01/10/2026",
                "url": "https://smartf.vn/article/chung-khoan-giao-dich-ngay-dau-tien-thang-10-du-dia-giam-dang-thu-hep/"
            },
            {
                "label": "VnEconomy — bối cảnh quốc tế trước phiên 01/10/2026",
                "url": "https://vneconomy.vn/chung-khoan-quoc-te.htm"
            }
        ]
    },
    {
        "id": "market-view-20260930",
        "date": "2026-09-30",
        "publishedAt": "30/09/2026 • Sau phiên",
        "edition": "Số 29",
        "sentiment": "cautious",
        "sentimentLabel": "PHÒNG THỦ",
        "dataStatus": "VNDIRECT + DNSE + Tuổi Trẻ + Mekong ASEAN • dữ liệu cuối ngày 30.09.2026 • tự doanh: CHƯA XÁC MINH",
        "title": "Mất MA50 sau nhịp bán cuối phiên — thanh khoản cải thiện nhưng chưa đạt chuẩn xác nhận",
        "thesis": "Dữ liệu đến hết phiên 30/09/2026. VN-Index đóng 1.768,62 điểm, giảm 9,11 điểm (-0,51%) và là phiên giảm thứ ba liên tiếp; chỉ số đóng dưới MA50 1.772,84, MA200 1.795,72 và MA20 1.806,89. Giá trị khớp lệnh đạt khoảng 11.316,38 tỷ đồng, tăng khoảng 9,7% so với 29/09 nhưng vẫn thấp hơn bình quân 5/10/20 phiên khoảng 6,3% / 15,3% / 16,0%. Độ rộng HOSE theo bộ dữ liệu VNDIRECT nghiêng giảm với 127 mã tăng, 58 mã tham chiếu, 171 mã giảm và 7 mã giảm sàn. Khối ngoại bán ròng khoảng 912 tỷ đồng trên ba sàn, là phiên bán ròng thứ sáu liên tiếp. VN30F1M đóng 1.908,4 điểm, cao hơn VN30 cơ sở khoảng 1,59 điểm nhưng chưa đủ bù các tín hiệu cơ sở bất lợi. Điểm đồng thuận -6/7, nhiều cổng loại trừ đang kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ; không mua đuổi, không bắt đáy diện rộng, không tăng đòn bẩy.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "brief": {
            "headline": "Mất MA50, áp lực bán cuối phiên lấn át nhịp hồi",
            "thesis": "VN-Index đóng dưới MA50/MA200/MA20 sau khi bị bán mạnh về cuối phiên. Thanh khoản có tăng so với 29/09 nhưng vẫn dưới nền 5–20 phiên, trong khi độ rộng, khối ngoại và chất lượng nhóm dẫn dắt chưa xác nhận đảo chiều.",
            "evidence": [
                {
                    "label": "Xu hướng",
                    "signal": "▼ dưới MA50 / MA200 / MA20",
                    "detail": "MA50 1.772,84 • MA200 1.795,72 • MA20 1.806,89.",
                    "signalParts": [
                        {
                            "text": "▼ dưới MA50 / MA200 / MA20",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "MA50 1.772,84",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "MA200 1.795,72",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "MA20 1.806,89",
                            "tone": "negative"
                        }
                    ],
                    "text": "VN-Index mở 1.780,67, lên 1.786,20 rồi lùi về 1.758,31 và đóng 1.768,62; RSI14 khoảng 42,43 và MACD -3,05 nằm dưới đường tín hiệu khoảng 3,32.",
                    "tone": "negative"
                },
                {
                    "label": "Độ rộng",
                    "signal": "▼ 171 giảm / ▲ 127 tăng",
                    "detail": "58 tham chiếu • 7 mã giảm sàn • bên bán vẫn chiếm ưu thế.",
                    "signalParts": [
                        {
                            "text": "▼ 171 giảm",
                            "tone": "negative"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▲ 127 tăng",
                            "tone": "positive"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "58 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "7 mã giảm sàn",
                            "tone": "negative"
                        },
                        {
                            "text": " • bên bán vẫn chiếm ưu thế.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Độ rộng VNDIRECT vẫn âm. Nguồn báo chí cuối phiên ghi 129 tăng/178 giảm do phạm vi thống kê khác; bài giữ một bộ số liệu VNDIRECT nhất quán và không hòa giải bằng suy đoán.",
                    "tone": "warning"
                },
                {
                    "label": "Thanh khoản",
                    "signal": "~11.316 tỷ • ▼ −16,0% so với TB20",
                    "detail": "▲ +9,7% so với 29/09 • ▼ −6,3% so với TB5.",
                    "signalParts": [
                        {
                            "text": "~11.316 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ −16,0% so với TB20",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "▲ +9,7% so với 29/09",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ −6,3% so với TB5",
                            "tone": "negative"
                        }
                    ],
                    "text": "Giá trị khớp lệnh có cải thiện theo ngày nhưng vẫn dưới bình quân 5, 10 và 20 phiên; chưa đạt chuẩn xác nhận một nhịp đảo chiều bền.",
                    "tone": "warning"
                }
            ],
            "actions": [
                "Không mua đuổi hoặc bắt đáy diện rộng khi VN-Index còn dưới 1.773 và chưa lấy lại vùng 1.795–1.800.",
                "Duy trì khoảng 20–30% cổ phiếu / 70–80% tiền mặt cho phần giao dịch ngắn hạn; không tăng đòn bẩy khi độ rộng và khối ngoại còn bất lợi.",
                "Chỉ nâng tỷ trọng từng bước nếu VN-Index đóng trên 1.795–1.800, độ rộng chuyển dương và giá trị khớp lệnh trở lại ít nhất quanh bình quân 20 phiên ~13.471 tỷ đồng."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "130/130 mã đã khóa giá 30/09 • MA/thanh khoản 225 phiên đã tái lập • VN30F1M và khối ngoại đã xác minh • tự doanh 30/09 CHƯA XÁC MINH",
                "shortLabel": "Dữ liệu giá đã khóa • tự doanh đang chờ xác minh"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.768,62",
                "change": "−9,11 • −0,51%",
                "changeParts": [
                    {
                        "text": "−9,11",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,51%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "127 tăng / 171 giảm",
                "change": "58 tham chiếu • 7 mã giảm sàn",
                "tone": "warning",
                "direction": "down",
                "snapshotState": "breadth_negative",
                "valueParts": [
                    {
                        "text": "127 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "171 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "58 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "7 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~11.316 tỷ",
                "valueParts": [
                    {
                        "text": "~11.316 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "−16,0% so với bình quân 20 phiên ~13.471 tỷ",
                "changeParts": [
                    {
                        "text": "−16,0%",
                        "tone": "negative"
                    },
                    {
                        "text": " so với bình quân 20 phiên ~13.471 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Dưới MA50 / MA200 / MA20",
                "valueParts": [
                    {
                        "text": "Dưới MA50 / MA200 / MA20",
                        "tone": "negative"
                    }
                ],
                "change": "MA50 1.772,84 • MA200 1.795,72 • MA20 1.806,89",
                "changeParts": [
                    {
                        "text": "MA50 1.772,84",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "MA200 1.795,72",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "MA20 1.806,89",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Cấu trúc phiên 30/09 xấu hơn phiên trước. VN-Index mở 1.780,67 điểm, có lúc lên 1.786,20 nhưng áp lực bán tăng về cuối phiên kéo chỉ số xuống đáy 1.758,31 trước khi đóng 1.768,62 điểm, giảm 9,11 điểm (-0,51%). Giá đóng cửa thấp hơn giá mở cửa và nằm dưới MA50 1.772,84, MA200 1.795,72 và MA20 1.806,89. RSI14 khoảng 42,43; MACD khoảng -3,05, nằm dưới đường tín hiệu khoảng 3,32 và dưới ngưỡng 0, nên chưa có tín hiệu kỹ thuật xác nhận đảo chiều.",
            "Thanh khoản khớp lệnh HOSE đạt khoảng 11.316,38 tỷ đồng, tăng khoảng 9,7% so với 29/09 nhưng vẫn thấp hơn bình quân 5 phiên khoảng 6,3%, bình quân 10 phiên khoảng 15,3% và bình quân 20 phiên khoảng 16,0%. Dòng tiền vì vậy có cải thiện theo ngày nhưng chưa đạt nền xác nhận; việc giá giảm trong khi thanh khoản nhích lên không phải tín hiệu để nâng rủi ro.",
            "Độ rộng HOSE theo VNDIRECT là 127 mã tăng, 58 mã tham chiếu, 171 mã giảm và 7 mã giảm sàn. Tuổi Trẻ ghi 129 mã tăng và 178 mã giảm do phạm vi/thời điểm tổng hợp khác; bài không trộn hai universe mà giữ bộ VNDIRECT làm chuẩn vận hành. Dù dùng bộ nào, số mã giảm đều áp đảo số mã tăng.",
            "Bản đồ dòng tiền trên universe 130 mã cho thấy năng lượng suy yếu rõ nhất: 11/12 mã giảm, trung vị khoảng -3,15%; PVT -4,61%, PVP -4,57%, PVC -3,94%, PVD -3,43%, GAS -3,42% và BSR -3,38%. Chứng khoán cũng yếu với 13/15 mã giảm, trong khi ngân hàng phân hóa tốt hơn với 9 mã tăng, 6 mã giảm và 2 mã đứng giá. Điểm sáng nằm ở các mã riêng lẻ như PET +5,37%, GEE +5,14%, VGC +4,65%, FRT +3,52%, PAN +2,78%, POW +2,36% và VPB +1,96%; chưa hình thành một nhóm dẫn dắt đủ rộng.",
            "Khối ngoại bán ròng khoảng 912 tỷ đồng trên ba sàn, là phiên bán ròng thứ sáu liên tiếp với tổng giá trị hơn 3.700 tỷ đồng kể từ 23/09. Riêng HOSE, CafeF ghi bán ròng khoảng 888 tỷ đồng; VHM bị bán ròng mạnh nhất khoảng 329 tỷ đồng, sau đó là TCB khoảng 156 tỷ và VIC khoảng 82 tỷ. Đây là một veto rõ vì dòng vốn ngoại tiếp tục đi ngược nỗ lực cân bằng của thị trường.",
            "VN30F1M đóng 1.908,4 điểm, cao hơn VN30 cơ sở 1.906,81 khoảng 1,59 điểm. Chênh lệch dương nhẹ giúp giảm bớt mức bi quan ở phái sinh nhưng không đủ đảo kết luận khi thị trường cơ sở mất MA50, độ rộng âm và thanh khoản dưới trung bình. Bối cảnh bên ngoài cũng chưa tạo lực đỡ rõ: chứng khoán Mỹ giảm nhẹ trong phiên 29/09 khi lợi suất trái phiếu tăng, còn giá dầu giảm mạnh; vì vậy yếu tố vĩ mô/phái sinh được chấm trung tính.",
            "Dữ liệu tự doanh sau phiên 30/09 chưa được xác minh đủ từ nguồn công khai tại thời điểm khóa bài. Theo nguyên tắc dữ liệu, biến này được ghi là CHƯA XÁC MINH và không được dùng để thay đổi điểm đồng thuận."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / đáy phiên",
                "value": "1.758–1.760",
                "note": "Đáy thực tế phiên 30/09 là 1.758,31. Giữ được vùng này chỉ giúp tránh mở rộng nhịp giảm; chưa tự động tạo điểm mua khi chỉ số vẫn dưới các đường trung bình quan trọng."
            },
            {
                "label": "Hỗ trợ mạnh",
                "value": "1.750–1.760",
                "note": "Đây là vùng hỗ trợ đã được theo dõi từ đầu tuần và nay trùng với đáy phiên. Nếu đóng dưới 1.750 với độ rộng tiếp tục âm, ưu tiên hạ rủi ro thay vì bắt đáy."
            },
            {
                "label": "Kháng cự gần / MA50",
                "value": "1.772–1.780",
                "note": "MA50 ở 1.772,84 và vùng mở cửa phiên quanh 1.780. Cần lấy lại vùng này trước khi nói đến cân bằng ngắn hạn."
            },
            {
                "label": "Kháng cự mạnh / MA200–MA20",
                "value": "1.795–1.807",
                "note": "MA200 ở 1.795,72 và MA20 ở 1.806,89. Chỉ đóng trên vùng này cùng độ rộng tích cực và thanh khoản cải thiện mới đủ cơ sở giảm trạng thái phòng thủ."
            },
            {
                "label": "Mốc xác nhận rủi ro / vô hiệu nhịp cân bằng",
                "value": "<1.758, mạnh hơn nếu <1.750",
                "note": "Đóng dưới 1.758 xác nhận mất đáy phiên; dưới 1.750 cùng áp lực bán lan rộng là tín hiệu giảm rủi ro mạnh hơn. Không bình quân giá xuống cơ học."
            }
        ],
        "confluence": {
            "score": -6,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / đường trung bình / cấu trúc",
                    "score": -1,
                    "note": "VN-Index đóng dưới MA50, MA200 và MA20; nến ngày giảm, đóng thấp hơn giá mở cửa. RSI14 dưới 50 và MACD dưới đường tín hiệu/0."
                },
                {
                    "factor": "Thanh khoản",
                    "score": -1,
                    "note": "Khớp lệnh khoảng 11.316 tỷ đồng, dù tăng 9,7% theo ngày nhưng vẫn thấp hơn TB5/TB10/TB20 khoảng 6,3%/15,3%/16,0%."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "127 mã tăng so với 171 mã giảm và 7 mã sàn theo VNDIRECT; bên bán chiếm ưu thế rõ."
                },
                {
                    "factor": "Dòng tiền",
                    "score": -1,
                    "note": "Năng lượng giảm 11/12 mã và chứng khoán giảm 13/15 mã trong universe theo dõi; điểm mạnh nằm ở các cổ phiếu riêng lẻ thay vì lan tỏa theo nhóm."
                },
                {
                    "factor": "Khối ngoại",
                    "score": -1,
                    "note": "Khối ngoại bán ròng khoảng 912 tỷ đồng trên ba sàn, là phiên bán ròng thứ sáu liên tiếp; VHM, TCB và VIC chịu áp lực bán lớn."
                },
                {
                    "factor": "Chất lượng nhóm dẫn dắt",
                    "score": -1,
                    "note": "Không có nhóm vốn hóa lớn dẫn dắt đủ rộng; ngân hàng phân hóa, trong khi Vingroup và dầu khí kéo chỉ số giảm. Điểm sáng PET/GEE/VGC/FRT/VPB mang tính riêng lẻ."
                },
                {
                    "factor": "Vĩ mô / phái sinh",
                    "score": 0,
                    "note": "VN30F1M cao hơn VN30 cơ sở khoảng 1,59 điểm là tín hiệu đỡ nhẹ; nhưng chứng khoán Mỹ giảm và lợi suất tăng, nên tổng hợp yếu tố này chỉ ở mức trung tính."
                }
            ],
            "veto": [
                "Thanh khoản chưa xác nhận: giá trị khớp lệnh vẫn thấp hơn bình quân 20 phiên khoảng 16,0%",
                "Độ rộng âm: số mã giảm nhiều hơn số mã tăng và có 7 mã giảm sàn",
                "Dòng tiền thiếu dẫn dắt diện rộng; năng lượng và chứng khoán suy yếu trong khi điểm mạnh chỉ tập trung ở một số mã riêng lẻ",
                "Khối ngoại bán ròng khoảng 912 tỷ đồng và kéo dài chuỗi bán ròng sang phiên thứ sáu",
                "R:R tại giá đóng cửa tới kháng cự gần MA50 chỉ khoảng 0,4:1 nếu dùng đáy 1.758,31 làm mốc vô hiệu; dưới chuẩn 2:1"
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "probability": 15,
                "if": "VN-Index lấy lại MA50 và đóng trên 1.795–1.800, độ rộng chuyển sang số mã tăng áp đảo và giá trị khớp lệnh ít nhất quay về quanh bình quân 20 phiên ~13.471 tỷ đồng",
                "then": "Mới xem xét nâng từng bước lên khoảng 30–40% cổ phiếu ở mã dẫn dắt có nền riêng khỏe; mỗi giao dịch phải có cắt lỗ 3–7% và R:R tối thiểu 2:1; chưa dùng đòn bẩy."
            },
            {
                "state": "neutral",
                "probability": 45,
                "if": "VN-Index dao động trong 1.758–1.795, chưa thủng đáy phiên nhưng cũng chưa lấy lại MA200 hoặc thanh khoản/độ rộng chưa đồng thuận",
                "then": "Duy trì PHÒNG THỦ với khoảng 20–30% cổ phiếu / 70–80% tiền mặt; chỉ trading rất ngắn ở mã khỏe tương đối, không mua đuổi và không bắt đáy diện rộng."
            },
            {
                "state": "risk_off",
                "probability": 40,
                "if": "VN-Index đóng dưới 1.758, đặc biệt dưới 1.750, kèm độ rộng xấu thêm hoặc thanh khoản bán tăng",
                "then": "Hạ về 0–20% cổ phiếu cho phần giao dịch ngắn hạn, dừng mở mới, xử lý vị thế vi phạm cắt lỗ và không dùng đòn bẩy để bình quân giá xuống."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "XÁC NHẬN TÍCH CỰC — VN-Index đóng trên 1.795–1.800, độ rộng chuyển dương và thanh khoản quay lại ít nhất quanh bình quân 20 phiên",
                "then": "TĂNG DẦN RẤT THẬN TRỌNG lên khoảng 30–40% cổ phiếu. Chỉ mua mã dẫn dắt có nền riêng khỏe, điểm vào độc lập, cắt lỗ 3–7% và R:R tối thiểu 2:1; chưa tăng đòn bẩy."
            },
            {
                "state": "neutral",
                "if": "GIỮ PHÒNG THỦ — VN-Index còn trong 1.758–1.795 hoặc chưa có đồng thuận giữa giá, độ rộng và thanh khoản",
                "then": "GIỮ 20–30% CỔ PHIẾU / 70–80% TIỀN MẶT cho phần giao dịch ngắn hạn. Không mua đuổi, không bắt đáy diện rộng; chỉ trading nhỏ ở mã khỏe tương đối với ngưỡng cắt lỗ rõ."
            },
            {
                "state": "risk_off",
                "if": "GIẢM RỦI RO — VN-Index đóng dưới 1.758, đặc biệt dưới 1.750, hoặc áp lực bán lan rộng với thanh khoản tăng",
                "then": "HẠ VỀ 0–20% CỔ PHIẾU. Dừng mở mới, xử lý vị thế yếu/vi phạm cắt lỗ; không dùng đòn bẩy và không bình quân giá xuống."
            }
        ],
        "focus": "1.758–1.760 hỗ trợ gần • 1.750 hỗ trợ mạnh • 1.772–1.780 kháng cự gần/MA50 • 1.795–1.807 MA200–MA20 • khớp lệnh ~11.316 tỷ • 127/58/171 • khối ngoại bán ròng ~912 tỷ • không mua đuổi • không tăng đòn bẩy",
        "inference": "Dữ liệu cuối ngày 30/09/2026 đã vượt cổng dữ liệu với 130/130 mã được khóa trong repo. VNDIRECT Finfo ghi VN-Index 1.768,62 điểm (-9,11; -0,51%), VN30 1.906,81 (-0,39%), HNX-Index 271,64 (+0,64%) và độ rộng HOSE 127 tăng/58 tham chiếu/171 giảm/7 sàn. Chuỗi 225 phiên cho MA20 1.806,89, MA50 1.772,84, MA200 1.795,72; RSI14 42,43; MACD -3,05 so với đường tín hiệu 3,32. Giá trị khớp lệnh 11.316,38 tỷ đồng thấp hơn bình quân 5/10/20 phiên khoảng 6,3%/15,3%/16,0%. DNSE cho thấy VN30F1M đóng 1.908,4 điểm, cao hơn VN30 cơ sở khoảng 1,59 điểm. Tuổi Trẻ xác nhận chỉ số giảm phiên thứ ba liên tiếp, giá trị khớp lệnh HOSE 11.316 tỷ đồng và khối ngoại bán ròng khoảng 912 tỷ đồng trên ba sàn, là phiên thứ sáu liên tiếp với tổng hơn 3.700 tỷ đồng từ 23/09. CafeF ghi riêng HOSE bán ròng khoảng 888 tỷ đồng. Trong universe 130 mã, năng lượng giảm 11/12 và chứng khoán giảm 13/15; ngân hàng phân hóa tốt hơn nhưng chưa tạo dẫn dắt đủ rộng. Tự doanh hậu phiên 30/09 chưa được xác minh đủ tại thời điểm khóa, vì vậy không dùng để chấm điểm. Điểm đồng thuận = -6/7 với cấu phần -1,-1,-1,-1,-1,-1,0; nhiều cổng loại trừ có hiệu lực. Kết luận tác nghiệp: PHÒNG THỦ.",
        "limitations": [
            "Dữ liệu tự doanh hậu phiên 30/09 chưa có nguồn công khai đủ tin cậy tại thời điểm khóa; không dùng số phiên trước để thay thế.",
            "Độ rộng VNDIRECT là 127 tăng/58 tham chiếu/171 giảm, trong khi Tuổi Trẻ ghi 129 tăng/178 giảm do phạm vi thống kê khác; bài giữ VNDIRECT làm chuẩn vận hành và không hòa giải bằng suy đoán.",
            "Bản đồ ngành được tính trên universe 130 mã đang theo dõi của website, không đại diện toàn bộ số mã niêm yết; chỉ nêu các nhóm có bằng chứng đủ rõ.",
            "Xác suất kịch bản và tỷ trọng là khung tác nghiệp quản trị rủi ro, không phải cam kết dự báo; từng cổ phiếu vẫn phải có điểm mua, cắt lỗ 3–7%, mục tiêu và R:R riêng."
        ],
        "zaloPost": "Phiên 30/09 kết thúc với tín hiệu yếu hơn phiên trước. VN-Index đóng 1.768,62 điểm, giảm 9,11 điểm (-0,51%) và là phiên giảm thứ ba liên tiếp. Chỉ số đã đóng dưới MA50 1.772,84, MA200 1.795,72 và MA20 1.806,89; RSI14 khoảng 42,4, MACD nằm dưới đường tín hiệu và dưới ngưỡng 0. Vì vậy chưa có xác nhận kỹ thuật cho một nhịp đảo chiều.\n\nThanh khoản có cải thiện theo ngày nhưng chưa đủ mạnh: giá trị khớp lệnh khoảng 11.316 tỷ đồng, tăng gần 9,7% so với 29/09 nhưng vẫn thấp hơn bình quân 20 phiên khoảng 16%. Độ rộng VNDIRECT tiếp tục âm với 127 mã tăng, 58 tham chiếu, 171 mã giảm và 7 mã sàn. Trong bộ 130 mã theo dõi, năng lượng giảm 11/12 mã, chứng khoán giảm 13/15 mã; điểm sáng PET, GEE, VGC, FRT, PAN, POW hay VPB vẫn là các trường hợp riêng lẻ, chưa tạo một nhóm dẫn dắt đủ rộng.\n\nKhối ngoại bán ròng khoảng 912 tỷ đồng trên ba sàn, kéo dài chuỗi bán ròng sang phiên thứ sáu. VN30F1M cao hơn VN30 cơ sở khoảng 1,59 điểm là tín hiệu đỡ nhẹ, nhưng chưa đủ bù cho thị trường cơ sở yếu. Tự doanh 30/09 chưa được xác minh đủ nên không đưa vào điểm số.\n\nĐiểm đồng thuận hiện -6/7, trạng thái PHÒNG THỦ. IF VN-Index chưa lấy lại 1.795–1.800 cùng độ rộng dương và thanh khoản quanh 13,47 nghìn tỷ đồng, THEN giữ khoảng 20–30% cổ phiếu và 70–80% tiền mặt, không tăng đòn bẩy. IF đóng dưới 1.758, đặc biệt 1.750, THEN hạ rủi ro mạnh hơn và dừng mở mới. IF vượt 1.800 có xác nhận, THEN mới nâng tỷ trọng từng bước ở cổ phiếu dẫn dắt có R:R tối thiểu 2:1 và cắt lỗ 3–7%.\n\nBảo toàn vốn trước, chỉ tăng tốc khi thị trường tự chứng minh. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số & độ rộng cuối ngày 30/09/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-30&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index tính MA, RSI, MACD và nền thanh khoản",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-30&size=500"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M ngày 30/09/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790701200&to=1790760600"
            },
            {
                "label": "Tuổi Trẻ — VN-Index giảm phiên thứ 3 liên tiếp, khối ngoại bán ròng phiên thứ sáu",
                "url": "https://tuoitre.vn/vn-index-giam-phien-thu-3-lien-tiep-novaland-giao-dich-dot-bien-gan-1000-ti-dong-10026093015335835.htm"
            },
            {
                "label": "Mekong ASEAN — VN-Index đảo chiều giảm hơn 9 điểm, thiếu nhóm ngành dẫn dắt",
                "url": "https://mekongasean.vn/nvl-duoc-giai-cuu-pnj-van-du-ban-san-hang-chuc-trieu-co-phieu-60168.html"
            },
            {
                "label": "CafeF — khối ngoại bán ròng phiên 30/09/2026",
                "url": "https://cafef.vn/phien-30-9-khoi-ngoai-thang-tay-ban-rong-mot-co-phieu-bluechip-bi-xa-hon-300-ty-dong-18826093015304619.chn"
            },
            {
                "label": "VnEconomy — bối cảnh chứng khoán Mỹ, lợi suất và giá dầu trước phiên 30/09",
                "url": "https://vneconomy.vn/chung-khoan-my-mat-diem-vi-noi-lo-lai-suat-tang-gia-dau-sut-giam-sau-tin-tot-tu-trung-dong.htm"
            }
        ]
    },
    {
        "id": "market-view-20260929",
        "date": "2026-09-29",
        "publishedAt": "29/09/2026 • Sau phiên",
        "edition": "Số 28",
        "sentiment": "cautious",
        "sentimentLabel": "PHÒNG THỦ",
        "dataStatus": "VNDIRECT + KBS + DNSE • dữ liệu cuối ngày 29.09.2026 • khối ngoại/tự doanh hậu phiên: CHƯA XÁC MINH",
        "title": "Rút chân nhưng thanh khoản cạn — dòng tiền vẫn co cụm, chưa đủ điều kiện nâng rủi ro",
        "thesis": "Dữ liệu đến hết phiên 29/09/2026. VN-Index đóng 1.777,73 điểm, giảm 2,95 điểm (-0,17%); VN30 giảm 0,42% còn 1.914,35 điểm và HNX-Index giảm 0,52% còn 269,91 điểm. Độ rộng HOSE vẫn nghiêng về bên giảm với 132 mã tăng, 66 mã tham chiếu, 161 mã giảm và 9 mã giảm sàn. Giá trị khớp lệnh đạt khoảng 10.320,33 tỷ đồng, thấp hơn bình quân 5/10/20 phiên lần lượt khoảng 14,5% / 22,7% / 23,4%. VN-Index đứng trên MA50 1.773,21 nhưng dưới MA200 1.795,58 và MA20 1.810,07; trong phiên lùi xuống 1.767,58 rồi hồi lại, cho thấy có cầu đỡ vùng thấp nhưng chưa xác nhận đảo chiều. VN30F1M đóng 1.920 điểm, cao hơn VN30 cơ sở khoảng 5,65 điểm. Khối ngoại và tự doanh hậu phiên 29/09 chưa có nguồn công khai đủ tin cậy tại thời điểm khóa bài nên không được dùng để nâng/hạ điểm. Điểm đồng thuận -2/7; cổng loại trừ vẫn kích hoạt bởi thanh khoản không xác nhận, dòng tiền co cụm và R:R tới cản gần dưới 2:1. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ; không mua đuổi, không tăng đòn bẩy.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "brief": {
            "headline": "Rút chân nhưng chưa đủ xác nhận đảo chiều",
            "thesis": "VN-Index giữ được MA50 sau khi rút khỏi vùng thấp, nhưng vẫn dưới MA200/MA20. Thanh khoản thấp và dòng tiền co cụm khiến trạng thái phù hợp vẫn là phòng thủ.",
            "evidence": [
                {
                    "label": "Xu hướng",
                    "signal": "↗ giữ MA50 • ▼ dưới MA200 / MA20",
                    "detail": "MA50 1.773,21 • MA200 1.795,58 • MA20 1.810,07.",
                    "signalParts": [
                        {
                            "text": "↗ giữ MA50",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ dưới MA200 / MA20",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "MA50 1.773,21",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "MA200 1.795,58",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "MA20 1.810,07",
                            "tone": "negative"
                        }
                    ],
                    "text": "Chỉ số rút chân từ 1.767,58 và đóng lại trên MA50, nhưng chưa vượt được hai vùng cản kỹ thuật phía trên.",
                    "tone": "warning"
                },
                {
                    "label": "Độ rộng",
                    "signal": "▼ 161 giảm / ▲ 132 tăng",
                    "detail": "66 tham chiếu • 9 mã giảm sàn • mặt bằng cổ phiếu vẫn phân hóa bất lợi.",
                    "signalParts": [
                        {
                            "text": "▼ 161 giảm",
                            "tone": "negative"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▲ 132 tăng",
                            "tone": "positive"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "66 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "9 mã giảm sàn",
                            "tone": "negative"
                        },
                        {
                            "text": " • mặt bằng cổ phiếu vẫn phân hóa bất lợi.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Độ rộng cải thiện so với 28/09 nhưng số mã giảm vẫn nhiều hơn số mã tăng; chưa đủ xác nhận một nhịp phục hồi lan tỏa.",
                    "tone": "warning"
                },
                {
                    "label": "Thanh khoản",
                    "signal": "~10.320 tỷ • ▼ −23,4% so với TB20",
                    "detail": "▼ −14,5% so với TB5 • lực cầu chưa đạt chuẩn xác nhận.",
                    "signalParts": [
                        {
                            "text": "~10.320 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ −23,4% so với TB20",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "▼ −14,5% so với TB5",
                            "tone": "negative"
                        },
                        {
                            "text": " • lực cầu chưa đạt chuẩn xác nhận.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Giá trị khớp lệnh thấp hơn cả nền 5, 10 và 20 phiên; nhịp rút chân chưa có dòng tiền đủ mạnh để nâng trạng thái.",
                    "tone": "negative"
                }
            ],
            "actions": [
                "Không mua đuổi khi VN-Index còn dưới 1.795–1.800.",
                "Giữ đòn bẩy thấp hoặc không dùng đòn bẩy khi thanh khoản và độ rộng chưa đồng thuận.",
                "Chỉ cân nhắc thăm dò nhỏ sau khi đóng trên 1.800, độ rộng chuyển dương và giá trị khớp lệnh ít nhất quay về quanh bình quân 20 phiên."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "EOD 130/130 đã khóa • MA/thanh khoản 224 phiên đã tái lập • VN30F1M đã xác minh • khối ngoại/tự doanh 29/09 CHƯA XÁC MINH",
                "shortLabel": "EOD đã khóa • dòng vốn tổ chức đang chờ xác minh"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.777,73",
                "change": "−2,95 • −0,17%",
                "changeParts": [
                    {
                        "text": "−2,95",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,17%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "132 tăng / 161 giảm",
                "change": "66 tham chiếu • 9 mã giảm sàn",
                "tone": "warning",
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
                        "text": "161 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "66 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "9 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~10.320 tỷ",
                "valueParts": [
                    {
                        "text": "~10.320 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "−23,4% so với bình quân 20 phiên ~13.471 tỷ",
                "changeParts": [
                    {
                        "text": "−23,4%",
                        "tone": "negative"
                    },
                    {
                        "text": " so với bình quân 20 phiên ~13.471 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Trên MA50, dưới MA200 / MA20",
                "valueParts": [
                    {
                        "text": "Trên MA50",
                        "tone": "positive"
                    },
                    {
                        "text": ", ",
                        "tone": "neutral"
                    },
                    {
                        "text": "dưới MA200 / MA20",
                        "tone": "negative"
                    }
                ],
                "change": "MA50 1.773,21 • MA200 1.795,58",
                "changeParts": [
                    {
                        "text": "MA50 1.773,21",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "MA200 1.795,58",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Phiên 29/09 tiếp tục là một phiên giằng co yếu. VN-Index mở 1.780,42 điểm, lùi xuống 1.767,58 rồi hồi và đóng 1.777,73 điểm. Việc rút khỏi đáy phiên cho thấy có cầu đỡ quanh vùng MA50, nhưng đóng cửa vẫn giảm 0,17% và dưới giá mở cửa nên chưa thể xem là tín hiệu đảo chiều.",
            "Thanh khoản là điểm yếu rõ nhất: giá trị khớp lệnh khoảng 10.320,33 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 14,5%, bình quân 10 phiên khoảng 22,7% và bình quân 20 phiên khoảng 23,4%. Cầu bắt đáy có xuất hiện nhưng quy mô dòng tiền chưa đạt chuẩn xác nhận.",
            "Độ rộng HOSE bớt xấu so với 28/09 nhưng vẫn âm: 161 mã giảm so với 132 mã tăng, 66 mã tham chiếu và 9 mã giảm sàn. Vì vậy mức giảm nhẹ của chỉ số chưa đồng nghĩa mặt bằng cổ phiếu đã khỏe trở lại.",
            "Trong universe 130 mã của website, năng lượng là nhóm dẫn dắt rõ nhất với 12/12 mã tăng, trung vị khoảng +1,89%; PVT +6,40%, PVP +5,04% và PVC +2,42%. Nông nghiệp cũng tích cực hơn với 4/6 mã tăng, trong khi ngân hàng giảm 12/17 mã và bất động sản giảm 6/9 mã. Chứng khoán cân bằng hơn với 7 mã tăng, 6 mã đứng giá và 2 mã giảm. Dòng tiền có luân chuyển nhưng vẫn tập trung theo nhóm, chưa lan tỏa đủ rộng.",
            "VN30F1M đóng 1.920 điểm, cao hơn VN30 cơ sở 1.914,35 khoảng 5,65 điểm. Chênh lệch dương là tín hiệu đỡ kỳ vọng ngắn hạn, nhưng không đủ bù cho thanh khoản thấp và trạng thái chỉ số còn dưới MA200/MA20.",
            "Khối ngoại và tự doanh hậu phiên 29/09 chưa có nguồn công khai đủ tin cậy tại thời điểm khóa bài. Theo nguyên tắc dữ liệu, bài không sử dụng số liệu 28/09 để thay thế và không cộng/trừ điểm cho hai biến này."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / MA50",
                "value": "1.767–1.773",
                "note": "Đáy phiên 1.767,58 và MA50 1.773,21 tạo vùng đỡ gần. Giữ được vùng này chỉ giúp duy trì cân bằng ngắn hạn, chưa tự động tạo điểm mua."
            },
            {
                "label": "Kháng cự gần / MA200",
                "value": "1.795–1.800",
                "note": "MA200 ở 1.795,58. Cần đóng trên vùng này cùng độ rộng chuyển dương và thanh khoản cải thiện mới đủ cơ sở giảm phòng thủ."
            },
            {
                "label": "Kháng cự mạnh / MA20",
                "value": "1.808–1.812",
                "note": "MA20 ở 1.810,07. Đây là cổng xác nhận cao hơn; hồi tới đây mà dòng tiền vẫn thấp thì ưu tiên quản trị hàng thay vì mua thêm."
            },
            {
                "label": "Mốc xác nhận rủi ro / vô hiệu view cân bằng",
                "value": "<1.765",
                "note": "Đóng dưới 1.765 làm mất vùng đỡ của phiên 29/09 và MA50; khi đó chuyển sang giảm rủi ro mạnh hơn, không bắt dao rơi."
            }
        ],
        "confluence": {
            "score": -2,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / đường trung bình / cấu trúc",
                    "score": 0,
                    "note": "VN-Index trên MA50 nhưng dưới MA200 và MA20; có rút chân từ 1.767,58 nhưng chưa hình thành cấu trúc tăng."
                },
                {
                    "factor": "Thanh khoản",
                    "score": -1,
                    "note": "Giá trị khớp lệnh thấp hơn TB5/TB10/TB20 khoảng 14,5%/22,7%/23,4%; không xác nhận nhịp hồi."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "132 mã tăng so với 161 mã giảm và 9 mã sàn; độ rộng vẫn âm dù đã bớt xấu hơn phiên trước."
                },
                {
                    "factor": "Dòng tiền",
                    "score": -1,
                    "note": "Năng lượng tăng 12/12 mã nhưng ngân hàng và bất động sản vẫn nghiêng giảm; dòng tiền co cụm theo nhóm thay vì lan tỏa toàn thị trường."
                },
                {
                    "factor": "Khối ngoại",
                    "score": 0,
                    "note": "CHƯA XÁC MINH hậu phiên 29/09 tại thời điểm khóa bài; không dùng dữ liệu phiên trước để suy diễn."
                },
                {
                    "factor": "Chất lượng nhóm dẫn dắt",
                    "score": 0,
                    "note": "Năng lượng dẫn dắt rõ, nông nghiệp và một phần công nghiệp/chứng khoán cải thiện, nhưng các nhóm vốn hóa lớn chưa đồng thuận."
                },
                {
                    "factor": "Vĩ mô / phái sinh",
                    "score": 1,
                    "note": "VN30F1M đóng cao hơn VN30 cơ sở khoảng 5,65 điểm; phái sinh hỗ trợ tâm lý ngắn hạn nhưng không thay thế xác nhận từ thị trường cơ sở."
                }
            ],
            "veto": [
                "Thanh khoản không xác nhận: giá trị khớp lệnh thấp hơn bình quân 20 phiên khoảng 23,4%",
                "Dòng tiền còn co cụm theo nhóm; năng lượng mạnh nhưng ngân hàng và bất động sản chưa đồng thuận",
                "R:R từ vùng đóng cửa 1.777,73 tới MA200 1.795,58 so với mốc vô hiệu dưới 1.765 chỉ khoảng 1,4:1, thấp hơn chuẩn 2:1"
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "probability": 20,
                "if": "VN-Index đóng trên 1.800, độ rộng chuyển sang số mã tăng áp đảo và giá trị khớp lệnh ít nhất quay về quanh bình quân 20 phiên ~13.471 tỷ đồng",
                "then": "Mới xem xét thăm dò nhỏ ở cổ phiếu dẫn dắt có nền riêng khỏe; không mua đuổi và chỉ nhận giao dịch có R:R tối thiểu 2:1."
            },
            {
                "state": "neutral",
                "probability": 55,
                "if": "VN-Index tiếp tục dao động trong 1.765–1.800, giữ được MA50 nhưng chưa lấy lại MA200 hoặc thanh khoản vẫn thấp",
                "then": "Duy trì PHÒNG THỦ; giữ tiền mặt cao, chỉ trading ngắn ở mã khỏe tương đối và không mở mua diện rộng."
            },
            {
                "state": "risk_off",
                "probability": 25,
                "if": "VN-Index đóng dưới 1.765 kèm độ rộng xấu thêm, đặc biệt nếu ngân hàng/bất động sản tiếp tục mở rộng đà giảm",
                "then": "Hạ tỷ trọng, dừng bắt đáy, xử lý các vị thế vi phạm kỷ luật rủi ro và không dùng đòn bẩy để bình quân giá xuống."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "XÁC NHẬN TÍCH CỰC — đóng trên 1.800, độ rộng chuyển dương và thanh khoản trở lại ít nhất quanh bình quân 20 phiên",
                "then": "TĂNG DẦN RẤT THẬN TRỌNG. Chỉ thăm dò nhỏ ở leader có nền riêng khỏe, điểm vào độc lập và R:R tối thiểu 2:1; chưa tăng đòn bẩy."
            },
            {
                "state": "neutral",
                "if": "GIỮ PHÒNG THỦ — VN-Index giữ 1.765–1.800 nhưng chưa lấy lại MA200 hoặc thanh khoản vẫn thấp",
                "then": "GIỮ TIỀN / CHỈ TRADING NGẮN. Không mua đuổi, không bắt đáy diện rộng; ưu tiên năng lượng hoặc mã khỏe riêng nhưng phải có stop rõ."
            },
            {
                "state": "risk_off",
                "if": "GIẢM RỦI RO — VN-Index đóng dưới 1.765 hoặc độ rộng xấu thêm trong khi nhóm vốn hóa lớn mất lực đỡ",
                "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý vị thế yếu/vi phạm ngưỡng rủi ro; không bình quân giá xuống bằng đòn bẩy."
            }
        ],
        "focus": "PHÒNG THỦ • Điểm đồng thuận -2/7 • veto: thanh khoản thấp + dòng tiền co cụm + R:R tới cản gần <2:1 • MA50 1.773,21 • MA200 1.795,58 • MA20 1.810,07 • giá trị khớp lệnh ~10.320 tỷ • VN30F1M chênh dương +5,65 điểm • khối ngoại/tự doanh CHƯA XÁC MINH • không tăng đòn bẩy",
        "inference": "Dữ liệu cuối ngày 29/09/2026 đã vượt cổng dữ liệu với 130/130 mã; CafeF chưa có dòng EOD đúng ngày nên toàn bộ 130 mã được KBS date-specific xác nhận giá đóng cửa trùng VNDIRECT. VNDIRECT khóa VN-Index 1.777,73 (-0,17%), VN30 1.914,35 (-0,42%), HNX-Index 269,91 (-0,52%) và độ rộng HOSE 132 tăng/66 tham chiếu/161 giảm/9 sàn. Chuỗi 224 phiên cho MA20 1.810,07, MA50 1.773,21 và MA200 1.795,58; giá trị khớp lệnh 10.320,33 tỷ đồng so với bình quân 5 phiên 12.076,57 tỷ, bình quân 10 phiên 13.353,85 tỷ và bình quân 20 phiên 13.470,99 tỷ. DNSE cho thấy VN30F1M đóng 1.920 điểm, cao hơn VN30 cơ sở khoảng 5,65 điểm. Trong universe 130 mã, năng lượng tăng 12/12 với trung vị +1,89%; ngân hàng giảm 12/17, bất động sản giảm 6/9, chứng khoán có 7 tăng/6 đứng giá/2 giảm. Khối ngoại và tự doanh hậu phiên 29/09 chưa được xác minh đủ tại thời điểm khóa, vì vậy chấm 0 cho yếu tố khối ngoại và không sử dụng tự doanh trong điểm số. Điểm đồng thuận = -2/7 với cấu phần 0,-1,-1,-1,0,0,+1. Cổng loại trừ có hiệu lực; kết luận tác nghiệp: PHÒNG THỦ.",
        "limitations": [
            "Khối ngoại hậu phiên 29/09 chưa có nguồn công khai đủ tin cậy tại thời điểm khóa; không dùng số 28/09 để thay thế.",
            "Dữ liệu tự doanh hậu phiên 29/09 chưa được công bố/xác minh đủ tại thời điểm khóa; không dùng trong chấm điểm.",
            "Bản đồ ngành được tính trên universe 130 mã đang theo dõi của website, không đại diện toàn bộ số mã niêm yết; chỉ nêu các nhóm có bằng chứng đủ rõ trong universe này.",
            "Xác suất kịch bản là xác suất tác nghiệp theo hệ đồng thuận/veto, không phải cam kết dự báo; các mốc là ngưỡng quản trị rủi ro có điều kiện."
        ],
        "zaloPost": "Phiên 29/09 không giảm nhiều về điểm số, nhưng chưa đủ dữ kiện để gọi là một phiên đảo chiều. VN-Index đóng 1.777,73 điểm sau khi có lúc lùi xuống 1.767,58. Cầu bắt đáy có xuất hiện và giúp chỉ số giữ lại MA50 quanh 1.773,21, nhưng phía trên vẫn còn MA200 1.795,58 và MA20 1.810,07.\n\nĐiểm yếu lớn nhất nằm ở dòng tiền. Giá trị khớp lệnh chỉ khoảng 10,32 nghìn tỷ đồng, thấp hơn bình quân 20 phiên hơn 23%. Độ rộng vẫn âm với 161 mã giảm so với 132 mã tăng và 9 mã sàn. Vì vậy nhịp rút chân hiện tại mới cho thấy có lực đỡ, chưa cho thấy tiền lớn đã quay lại diện rộng.\n\nDòng tiền đang xoay khá rõ vào năng lượng: 12/12 mã trong bộ theo dõi tăng giá, nổi bật PVT và PVP. Nông nghiệp cũng tích cực hơn, nhưng ngân hàng có 12/17 mã giảm và bất động sản có 6/9 mã giảm. Hợp đồng VN30F1M cao hơn VN30 cơ sở khoảng 5,65 điểm là tín hiệu đỡ tâm lý, nhưng chưa đủ để bỏ qua thanh khoản thấp. Khối ngoại và tự doanh hậu phiên 29/09 chưa được xác minh đủ nên tôi không dùng số phiên trước để lấp vào.\n\nKế hoạch phiên tới rất rõ: nếu VN-Index vẫn dưới 1.795–1.800, tiếp tục phòng thủ, không mua đuổi và giữ đòn bẩy thấp. Nếu đóng trên 1.800 với độ rộng chuyển dương và thanh khoản quay lại quanh 13,47 nghìn tỷ đồng, mới xem xét thăm dò nhỏ. Nếu đóng dưới 1.765, hạ rủi ro và không bắt dao rơi.\n\nBảo toàn vốn trước, chỉ tăng tốc khi thị trường tự chứng minh. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số và độ rộng EOD 29/09/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-29&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index tính MA và nền thanh khoản",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-29&size=500"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 29/09/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790614800&to=1790677800"
            }
        ]
    },
    {
        "id": "market-view-20260928",
        "date": "2026-09-28",
        "publishedAt": "28/09/2026 • Sau phiên",
        "edition": "Số 27",
        "sentiment": "cautious",
        "sentimentLabel": "PHÒNG THỦ / CHỜ XÁC NHẬN",
        "dataStatus": "VNDIRECT + KBS + DNSE + VietnamBiz • dữ liệu cuối ngày 28.09.2026 • tự doanh HOSE bán ròng khoảng 217 tỷ đồng",
        "title": "Cầu cuối phiên chưa đủ đảo trạng thái — độ rộng xấu buộc tiếp tục phòng thủ",
        "thesis": "Dữ liệu đến hết phiên 28/09/2026. VN-Index đóng 1.780,68 điểm, giảm 4,43 điểm (-0,25%); VN30 giảm 0,83% còn 1.922,42 điểm và HNX-Index giảm 0,33% còn 271,31 điểm. Độ rộng HOSE rất yếu với 102 mã tăng, 38 mã tham chiếu, 219 mã giảm và 8 mã giảm sàn. Giá trị khớp lệnh đạt 12.447,76 tỷ đồng, cao hơn bình quân 5 phiên khoảng 3,2% nhưng vẫn thấp hơn bình quân 10/20 phiên lần lượt khoảng 8,9% / 8,7%. VN-Index đứng trên MA50 1.773,74 nhưng dưới MA200 1.795,38 và MA20 1.812,76. VN30F1M đóng 1.923,5 điểm, basis dương 1,08 điểm so với VN30 cơ sở. Khối ngoại bán ròng khoảng 293 tỷ đồng trên HOSE và chuỗi bán ròng kéo dài ít nhất 4 phiên liên tiếp; tự doanh cũng bán ròng khoảng 217 tỷ đồng trên HOSE. Hai dòng vốn tổ chức cùng nghiêng về phía bán, nhưng điểm đồng thuận vẫn giữ nguyên vì thang điểm không có yếu tố tự doanh riêng. Điểm đồng thuận -5/7 và cổng loại trừ đang kích hoạt. TRẠNG THÁI TÁC NGHIỆP: PHÒNG THỦ / CHỜ XÁC NHẬN; không mua đuổi, không tăng đòn bẩy.",
        "author": "Xuân Lê TVS",
        "role": "Môi giới và tư vấn đầu tư",
        "readingTime": "5 phút đọc",
        "brief": {
            "headline": "Cầu cuối phiên chưa đủ đảo trạng thái",
            "thesis": "VN-Index hồi khỏi vùng thấp nhưng độ rộng vẫn nghiêng mạnh về bên giảm. Chỉ số còn dưới MA20/MA200, dòng tiền co cụm vào năng lượng và khối ngoại tiếp tục bán ròng.",
            "evidence": [
                {
                    "label": "Xu hướng",
                    "signal": "↗ giữ trên MA50 • ▼ dưới MA20 / MA200",
                    "detail": "MA50 1.773,74 • MA200 1.795,38 • MA20 1.812,76.",
                    "signalParts": [
                        {
                            "text": "↗ giữ trên MA50",
                            "tone": "positive"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ dưới MA20 / MA200",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "MA50 1.773,74",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "MA200 1.795,38",
                            "tone": "negative"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "MA20 1.812,76",
                            "tone": "negative"
                        }
                    ],
                    "text": "Chỉ số giữ được MA50 nhưng vẫn nằm dưới hai đường trung bình quan trọng phía trên; cấu trúc ngắn hạn chưa xác nhận đảo chiều.",
                    "tone": "warning"
                },
                {
                    "label": "Độ rộng",
                    "signal": "▼ 219 giảm / ▲ 102 tăng",
                    "detail": "38 tham chiếu • 8 mã giảm sàn • lực bán vẫn lan rộng.",
                    "signalParts": [
                        {
                            "text": "▼ 219 giảm",
                            "tone": "negative"
                        },
                        {
                            "text": " / ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▲ 102 tăng",
                            "tone": "positive"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "38 tham chiếu",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "8 mã giảm sàn",
                            "tone": "negative"
                        },
                        {
                            "text": " • lực bán vẫn lan rộng.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Số mã giảm hơn gấp đôi số mã tăng; mức giảm nhẹ của chỉ số che bớt độ yếu của mặt bằng cổ phiếu.",
                    "tone": "negative"
                },
                {
                    "label": "Thanh khoản",
                    "signal": "~12.448 tỷ • ▼ −8,7% vs TB20",
                    "detail": "▲ +3,2% vs TB5 • chưa đủ xác nhận một nhịp đảo chiều bền.",
                    "signalParts": [
                        {
                            "text": "~12.448 tỷ",
                            "tone": "neutral"
                        },
                        {
                            "text": " • ",
                            "tone": "neutral"
                        },
                        {
                            "text": "▼ −8,7% vs TB20",
                            "tone": "negative"
                        }
                    ],
                    "detailParts": [
                        {
                            "text": "▲ +3,2% vs TB5",
                            "tone": "positive"
                        },
                        {
                            "text": " • chưa đủ xác nhận một nhịp đảo chiều bền.",
                            "tone": "neutral"
                        }
                    ],
                    "text": "Thanh khoản có cải thiện so với nền 5 phiên nhưng vẫn dưới nền 10/20 phiên; lực cầu cuối ngày chưa đạt chuẩn xác nhận.",
                    "tone": "warning"
                }
            ],
            "actions": [
                "Không mua đuổi khi chỉ số còn dưới 1.795–1.800.",
                "Giữ đòn bẩy thấp hoặc không dùng đòn bẩy khi độ rộng và khối ngoại chưa cải thiện.",
                "Chỉ cân nhắc thăm dò nhỏ sau khi vượt 1.800, độ rộng chuyển dương và thanh khoản ít nhất quay về quanh bình quân 20 phiên."
            ],
            "dataIntegrity": {
                "tone": "warning",
                "label": "EOD 127/127 đã khóa • MA/thanh khoản 223 phiên đã tái lập • basis DNSE đã xác minh • tự doanh HOSE bán ròng khoảng 217 tỷ",
                "shortLabel": "EOD đã khóa • tự doanh đã xác minh"
            }
        },
        "metrics": [
            {
                "label": "CHỈ SỐ VN",
                "value": "1.780,68",
                "change": "−4,43 • −0,25%",
                "changeParts": [
                    {
                        "text": "−4,43",
                        "tone": "negative"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "−0,25%",
                        "tone": "negative"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "price_down"
            },
            {
                "label": "ĐỘ RỘNG SÀN TP.HCM",
                "value": "102 tăng / 219 giảm",
                "change": "38 tham chiếu • 8 mã giảm sàn",
                "tone": "negative",
                "direction": "down",
                "snapshotState": "breadth_negative",
                "valueParts": [
                    {
                        "text": "102 tăng",
                        "tone": "positive"
                    },
                    {
                        "text": " / ",
                        "tone": "neutral"
                    },
                    {
                        "text": "219 giảm",
                        "tone": "negative"
                    }
                ],
                "changeParts": [
                    {
                        "text": "38 tham chiếu",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "8 mã giảm sàn",
                        "tone": "negative"
                    }
                ]
            },
            {
                "label": "GIÁ TRỊ KHỚP LỆNH",
                "value": "~12.448 tỷ",
                "valueParts": [
                    {
                        "text": "~12.448 tỷ",
                        "tone": "neutral"
                    }
                ],
                "change": "−8,7% so với bình quân 20 phiên ~13.641 tỷ",
                "changeParts": [
                    {
                        "text": "−8,7%",
                        "tone": "negative"
                    },
                    {
                        "text": " so với bình quân 20 phiên ~13.641 tỷ",
                        "tone": "neutral"
                    }
                ],
                "tone": "warning",
                "direction": "down",
                "snapshotState": "liquidity_below_average"
            },
            {
                "label": "VỊ THẾ KỸ THUẬT",
                "value": "Trên MA50, dưới MA20 / MA200",
                "valueParts": [
                    {
                        "text": "Trên MA50",
                        "tone": "positive"
                    },
                    {
                        "text": ", ",
                        "tone": "neutral"
                    },
                    {
                        "text": "dưới MA20 / MA200",
                        "tone": "negative"
                    }
                ],
                "change": "MA50 1.773,74 • MA200 1.795,38",
                "changeParts": [
                    {
                        "text": "MA50 1.773,74",
                        "tone": "neutral"
                    },
                    {
                        "text": " • ",
                        "tone": "neutral"
                    },
                    {
                        "text": "MA200 1.795,38",
                        "tone": "neutral"
                    }
                ],
                "tone": "negative",
                "direction": "down",
                "snapshotState": "technical_negative"
            }
        ],
        "backdrop": [
            "Bản chất phiên 28/09 là một phiên suy yếu diện rộng nhưng có lực cầu bắt đáy cuối ngày giúp VN-Index thu hẹp mức giảm. Chỉ số đóng 1.780,68 điểm, giảm 0,25%, trong khi VN30 giảm mạnh hơn 0,83%; mức chênh này cho thấy áp lực ở nhóm vốn hóa lớn vẫn đáng kể.",
            "Thanh khoản không hoàn toàn cạn: giá trị khớp lệnh 12.447,76 tỷ đồng cao hơn bình quân 5 phiên khoảng 3,2%. Tuy vậy, mức này vẫn thấp hơn bình quân 10 phiên khoảng 8,9% và bình quân 20 phiên khoảng 8,7%, nên lực cầu chưa đủ để xác nhận đảo chiều khi mặt bằng giá vẫn yếu.",
            "Độ rộng là veto mạnh nhất: HOSE có 219 mã giảm so với 102 mã tăng và 8 mã giảm sàn. Chỉ số chỉ giảm 0,25% nhưng số mã giảm hơn gấp đôi số mã tăng, vì vậy không thể gọi đây là trạng thái cân bằng chỉ dựa trên điểm số cuối phiên.",
            "Trong universe 127 mã của website, năng lượng là nhóm hiếm hoi có dòng tiền thật sự lan tỏa: 11/12 mã tăng, trung vị khoảng +1,99%, nổi bật BSR +6,58%, PVS +5,70% và PVC +5,08%. Ngược lại, chứng khoán giảm 15/15 mã với trung vị khoảng -2,67%; bất động sản có 7/9 mã giảm, ngân hàng có 11/17 mã giảm. Dòng tiền vì vậy đang co cụm vào năng lượng thay vì mở rộng ra toàn thị trường.",
            "Khối ngoại tiếp tục là điểm trừ. VietnamBiz và DNSE cùng ghi nhận bán ròng khoảng 293 tỷ đồng trên HOSE; VietnamBiz cho biết chuỗi bán ròng đã kéo dài bốn phiên liên tiếp, trong khi DNSE mô tả là phiên thứ năm do khác phạm vi/chuỗi thống kê. Để tránh hòa giải bằng suy đoán, bài chỉ kết luận chắc chắn rằng bán ròng đang kéo dài ít nhất bốn phiên liên tiếp.",
            "Phái sinh không quá bi quan khi VN30F1M đóng 1.923,5 điểm, cao hơn VN30 cơ sở 1.922,42 khoảng 1,08 điểm. Tuy nhiên basis dương nhẹ không đủ bù cho độ rộng xấu, dòng tiền co cụm và áp lực bán ròng của khối ngoại. Tự doanh bán ròng khoảng 217 tỷ đồng trên HOSE; áp lực bán tập trung ở TCB, EIB và NAB, trong khi VPB tiếp tục được mua ròng. Dữ liệu này củng cố trạng thái thận trọng nhưng không làm thay đổi điểm đồng thuận vì tự doanh không phải một yếu tố chấm điểm độc lập trong thang 7 yếu tố."
        ],
        "levels": [
            {
                "label": "Hỗ trợ gần / MA50",
                "value": "1.770–1.775",
                "note": "MA50 ở 1.773,74. Giữ được vùng này giúp duy trì trạng thái cân bằng ngắn hạn, nhưng chưa tự động tạo điểm mua vì độ rộng vẫn yếu."
            },
            {
                "label": "Hỗ trợ mạnh",
                "value": "1.750–1.760",
                "note": "Đây là vùng hỗ trợ được nhiều báo cáo đầu tuần theo dõi. Nếu chỉ số xuyên vùng này với độ rộng tiếp tục xấu, ưu tiên giảm rủi ro thay vì bắt đáy."
            },
            {
                "label": "Kháng cự gần / MA200",
                "value": "1.795–1.800",
                "note": "MA200 ở 1.795,38. Đây là cổng xác nhận đầu tiên; cần đóng trên vùng này cùng độ rộng chuyển dương và thanh khoản cải thiện."
            },
            {
                "label": "Kháng cự mạnh / MA20",
                "value": "1.810–1.815",
                "note": "MA20 ở 1.812,76. Nếu hồi lên vùng này nhưng thanh khoản và độ rộng không theo kịp, ưu tiên xử lý phần hàng yếu thay vì mua thêm."
            },
            {
                "label": "Mốc vô hiệu nhịp cân bằng",
                "value": "<1.770",
                "note": "Đóng dưới 1.770 làm mất vùng đỡ gần và MA50; khi đó hủy view cân bằng ngắn hạn, chuyển sang giảm rủi ro rõ hơn."
            }
        ],
        "confluence": {
            "score": -5,
            "maxScore": 7,
            "factors": [
                {
                    "factor": "Giá / đường trung bình / cấu trúc",
                    "score": 0,
                    "note": "VN-Index đứng trên MA50 nhưng dưới MA200 và MA20; lực cầu cuối phiên giúp thu hẹp đà giảm nhưng chưa tạo cấu trúc tăng."
                },
                {
                    "factor": "Thanh khoản",
                    "score": -1,
                    "note": "Giá trị khớp lệnh cao hơn TB5 khoảng 3,2% nhưng vẫn thấp hơn TB10/TB20 khoảng 8,9%/8,7%; chưa xác nhận đảo chiều."
                },
                {
                    "factor": "Độ rộng",
                    "score": -1,
                    "note": "102 mã tăng so với 219 mã giảm và 8 mã sàn; áp lực bán lan rộng rõ rệt."
                },
                {
                    "factor": "Dòng tiền",
                    "score": -1,
                    "note": "Dòng tiền co cụm vào năng lượng; chứng khoán, bất động sản và ngân hàng nghiêng giảm rõ trong universe theo dõi."
                },
                {
                    "factor": "Khối ngoại",
                    "score": -1,
                    "note": "Khối ngoại bán ròng khoảng 293 tỷ đồng trên HOSE và chuỗi bán ròng kéo dài ít nhất 4 phiên."
                },
                {
                    "factor": "Chất lượng nhóm dẫn dắt",
                    "score": -1,
                    "note": "Năng lượng tăng mạnh và lan tỏa trong nhóm, nhưng chưa có sự đồng thuận từ các nhóm lớn khác; dẫn dắt còn quá hẹp để xác nhận thị trường khỏe."
                },
                {
                    "factor": "Vĩ mô / phái sinh",
                    "score": 0,
                    "note": "VN30F1M basis dương nhẹ khoảng 1,08 điểm là tín hiệu đỡ tâm lý, nhưng chưa đủ mạnh để bù các tín hiệu cơ sở bất lợi; tự doanh chưa xác minh."
                }
            ],
            "veto": [
                "Độ rộng yếu nghiêm trọng: 219 mã giảm so với 102 mã tăng, có 8 mã giảm sàn",
                "Dòng tiền co cụm vào năng lượng trong khi chứng khoán, bất động sản và ngân hàng nghiêng giảm",
                "Khối ngoại tiếp tục bán ròng khoảng 293 tỷ đồng trên HOSE và chuỗi bán ròng chưa kết thúc",
                "R:R từ vùng đóng cửa 1.780,68 tới kháng cự 1.795–1.800 so với mốc vô hiệu dưới 1.770 thấp hơn chuẩn 2:1"
            ]
        },
        "scenarios": [
            {
                "state": "positive",
                "probability": 15,
                "if": "VN-Index giữ 1.770–1.775 rồi đóng trên 1.800, độ rộng chuyển sang số mã tăng áp đảo và giá trị khớp lệnh ít nhất quay về quanh bình quân 20 phiên ~13.641 tỷ đồng",
                "then": "Chỉ xem xét chuyển từ phòng thủ sang thăm dò nhỏ ở cổ phiếu dẫn dắt có nền riêng tốt; không mua đuổi và chỉ nhận giao dịch có R:R tối thiểu 2:1."
            },
            {
                "state": "neutral",
                "probability": 55,
                "if": "VN-Index tiếp tục dao động trong 1.770–1.800, giữ được MA50 nhưng chưa lấy lại MA200 hoặc độ rộng vẫn âm",
                "then": "Duy trì PHÒNG THỦ / CHỜ XÁC NHẬN; giữ tiền mặt cao, chỉ nắm cổ phiếu khỏe tương đối và không mở mua diện rộng."
            },
            {
                "state": "risk_off",
                "probability": 30,
                "if": "VN-Index đóng dưới 1.770 và độ rộng tiếp tục xấu, đặc biệt khi ngân hàng/chứng khoán/bất động sản cùng suy yếu",
                "then": "Hạ thêm tỷ trọng cổ phiếu, dừng bắt đáy, xử lý các vị thế vi phạm kỷ luật rủi ro và không dùng đòn bẩy để bình quân giá xuống."
            }
        ],
        "playbook": [
            {
                "state": "positive",
                "if": "XÁC NHẬN TÍCH CỰC — giữ 1.770–1.775, đóng trên 1.800, độ rộng chuyển dương và thanh khoản trở lại ít nhất quanh bình quân 20 phiên",
                "then": "TĂNG DẦN RẤT THẬN TRỌNG. Chỉ thăm dò nhỏ ở cổ phiếu có nền riêng khỏe, điểm mua độc lập và R:R tối thiểu 2:1; chưa tăng đòn bẩy."
            },
            {
                "state": "neutral",
                "if": "GIỮ / CHỜ — VN-Index giữ 1.770–1.800 nhưng chưa lấy lại MA200 hoặc độ rộng vẫn nghiêng mạnh về bên giảm",
                "then": "GIỮ TIỀN / PHÒNG THỦ. Không mua đuổi, không bắt đáy diện rộng; ưu tiên rà soát danh mục và giữ sức mua cho tín hiệu rõ hơn."
            },
            {
                "state": "risk_off",
                "if": "GIẢM RỦI RO — VN-Index đóng dưới 1.770 hoặc độ rộng xấu thêm trong khi nhóm trụ mất lực đỡ",
                "then": "HẠ TỶ TRỌNG. Dừng mở mới, xử lý vị thế yếu hoặc vi phạm ngưỡng rủi ro; không bình quân giá xuống bằng đòn bẩy."
            }
        ],
        "focus": "PHÒNG THỦ / CHỜ XÁC NHẬN • Điểm đồng thuận -5/7 • veto: độ rộng rất yếu + dòng tiền co cụm + khối ngoại bán ròng kéo dài + R:R tới cản gần <2:1 • MA50 1.773,74 • MA200 1.795,38 • MA20 1.812,76 • giá trị khớp lệnh ~12.448 tỷ • VN30F1M basis +1,08 điểm • tự doanh HOSE -217 tỷ • không tăng đòn bẩy",
        "inference": "Dữ liệu cuối ngày 28/09/2026 đã vượt cổng dữ liệu với 127/127 mã; toàn bộ 127 mã được KBS đúng ngày xác nhận giá đóng cửa trùng VNDIRECT khi CafeF chưa có dòng EOD đúng ngày. VNDIRECT khóa VN-Index 1.780,68 (-0,25%), VN30 1.922,42 (-0,83%), HNX-Index 271,31 (-0,33%) và độ rộng HOSE 102 tăng/38 tham chiếu/219 giảm/8 sàn. Chuỗi 223 phiên cho MA20 1.812,76, MA50 1.773,74 và MA200 1.795,38; giá trị khớp lệnh 12.447,76 tỷ đồng so với bình quân 5 phiên 12.060,10 tỷ, bình quân 10 phiên 13.668,62 tỷ và bình quân 20 phiên 13.640,58 tỷ. DNSE cho thấy VN30F1M đóng 1.923,5 điểm, cao hơn VN30 cơ sở 1.922,42 khoảng 1,08 điểm. VietnamBiz và DNSE cùng ghi nhận khối ngoại bán ròng khoảng 293 tỷ đồng trên HOSE; số phiên bán ròng liên tiếp khác nhau giữa hai cách tổng hợp nên bài chỉ kết luận chắc chắn là ít nhất 4 phiên liên tiếp. Tự doanh 28/09 bán ròng khoảng 217 tỷ đồng trên HOSE theo VietnamBiz; VPB được mua ròng mạnh, trong khi TCB, EIB và NAB chịu bán ròng lớn. Trong universe 127 mã, năng lượng có 11/12 mã tăng với trung vị +1,99%; chứng khoán giảm 15/15 mã với trung vị -2,67%; bất động sản 7/9 mã giảm và ngân hàng 11/17 mã giảm. Điểm đồng thuận = -5/7 với cấu phần 0,-1,-1,-1,-1,-1,0. Cổng loại trừ có hiệu lực; kết luận: PHÒNG THỦ / CHỜ XÁC NHẬN.",
        "limitations": [
            "Dữ liệu tự doanh hậu phiên 28/09 đã được VietnamBiz cập nhật: bán ròng khoảng 217 tỷ đồng trên HOSE; bài dùng số liệu này như bằng chứng dòng tiền tổ chức nhưng không cộng/trừ thêm ngoài thang điểm 7 yếu tố.",
            "Nguồn hậu phiên cùng xác nhận khối ngoại bán ròng khoảng 293 tỷ đồng trên HOSE nhưng khác nhau về số phiên bán ròng liên tiếp; bài chỉ sử dụng phần giao nhau chắc chắn là xu hướng bán ròng đang kéo dài ít nhất 4 phiên.",
            "Bản đồ ngành được tính trên universe 127 mã đang theo dõi của website, không đại diện toàn bộ số mã niêm yết; chỉ nêu các nhóm có bằng chứng đủ rõ trong universe này.",
            "Các snapshot intraday có số điểm và thanh khoản khác EOD do thời điểm chụp; bài chỉ dùng EOD VNDIRECT đã khóa làm dữ liệu canonical."
        ],
        "zaloPost": "Phiên 28/09 nhìn điểm số thì giảm không nhiều, nhưng mặt bằng cổ phiếu yếu hơn con số -0,25% của VN-Index khá rõ. Chỉ số đóng 1.780,68 điểm, trong khi HOSE có 219 mã giảm so với 102 mã tăng và 8 mã giảm sàn. Đây là kiểu phiên mà nếu chỉ nhìn chỉ số sẽ dễ đánh giá thấp mức độ rủi ro trong danh mục.\n\nThanh khoản khớp lệnh khoảng 12,45 nghìn tỷ đồng, có cải thiện so với bình quân 5 phiên nhưng vẫn thấp hơn bình quân 20 phiên gần 9%. VN-Index giữ được MA50 quanh 1.773,74, nhưng phía trên còn MA200 quanh 1.795,38 và MA20 quanh 1.812,76. Vì vậy vùng 1.795–1.800 vẫn là cổng xác nhận đầu tiên, chưa vượt được thì chưa có lý do để nâng rủi ro.\n\nDòng tiền hôm nay co cụm rất rõ. Năng lượng là điểm sáng hiếm hoi với 11/12 mã trong bộ theo dõi tăng giá, nổi bật BSR, PVS và PVC. Ngược lại, nhóm chứng khoán giảm 15/15 mã; bất động sản và ngân hàng cũng nghiêng mạnh về bên giảm. Khối ngoại tiếp tục bán ròng khoảng 293 tỷ đồng trên HOSE. Phái sinh có basis dương nhẹ khoảng 1,08 điểm, nhưng chưa đủ để đảo kết luận khi độ rộng và dòng tiền cơ sở còn xấu. Tự doanh cũng bán ròng khoảng 217 tỷ đồng trên HOSE, củng cố yêu cầu giữ kỷ luật phòng thủ.\n\nKế hoạch phiên tới: nếu VN-Index giữ 1.770–1.775 và đóng trên 1.800 với độ rộng chuyển dương, thanh khoản ít nhất trở lại quanh 13,6 nghìn tỷ đồng, khi đó mới xem xét thăm dò nhỏ ở cổ phiếu khỏe riêng. Nếu vẫn dưới 1.800, tiếp tục giữ tiền và không mua đuổi. Nếu đóng dưới 1.770, hạ rủi ro và dừng bắt đáy.\n\nBảo toàn vốn trước, cơ hội rõ rồi mới tăng tốc. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
        "sources": [
            {
                "label": "VNDIRECT Finfo — chỉ số và độ rộng EOD 28/09/2026",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-28&size=500"
            },
            {
                "label": "VNDIRECT Finfo — chuỗi VN-Index tính MA và nền thanh khoản",
                "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-11-01~date:lte:2026-09-28&size=500"
            },
            {
                "label": "DNSE — dữ liệu VN30F1M 28/09/2026",
                "url": "https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790528400&to=1790591400"
            },
            {
                "label": "VietnamBiz — khối ngoại bán ròng 4 phiên liên tiếp",
                "url": "https://vietnambiz.vn/khoi-ngoai-ban-rong-4-phien-lien-tiep-2026928153133318.htm"
            },
            {
                "label": "VietnamBiz — tự doanh bán ròng khoảng 217 tỷ đồng trên HOSE phiên 28/09/2026",
                "url": "https://vietnambiz.vn/tu-doanh-miet-mai-gom-vpb-suot-10-phien-xa-tcb-2026928163221399.htm"
            },
            {
                "label": "DNSE — VN-Index giảm nhẹ, thanh khoản sụt giảm phiên 28/09/2026",
                "url": "https://www.dnse.com.vn/senses/tin-tuc/vn-index-giam-nhe-thanh-khoan-sut-giam-35287379"
            },
            {
                "label": "Stockbiz — đối chiếu bộ chỉ số hậu phiên 28/09/2026",
                "url": "https://web.stockbiz.vn/IndicesStats.aspx"
            }
        ]
    },
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
