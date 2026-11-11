/* Báo cáo EOD 11/11/2026 — dữ liệu và khung trình bày đã có; không sửa DOM/CSS. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;
  const entry = {
  "id": "market-view-20261111",
  "date": "2026-11-11",
  "publishedAt": "11/11/2026 • Sau phiên",
  "edition": "Số 59",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "rulebookVersion": "v3.3.1",
  "dataStatus": "Đã khóa EOD 11/11: bảng giá 134/134 mã; VNINDEX và khớp VNINDEX đối chiếu VNSignal/Tuổi Trẻ/Dalink; độ rộng tập VNDIRECT 134/154/76 đối chiếu taichinh.com. Thiếu chuỗi TB20 khớp, phân phối/25, MA200, ngoại KHỚP/5 phiên, basis HNX và Sổ dữ liệu gốc. CHẾ ĐỘ RÚT GỌN; không suy đoán phần thiếu.",
  "title": "Chỉ số xanh nhờ trụ, thị trường chưa xác nhận dòng tiền",
  "thesis": "Phiên 11/11 VN-Index đóng 1.746,90 (+3,83; +0,22%) nhưng VN30 giảm 0,30%, độ rộng cùng tập VNDIRECT chỉ 134 tăng/154 giảm/76 đứng. Khớp cổ phiếu rổ VNINDEX 9.946,45 tỷ, giảm 23,92% so phiên 10/11; tổng giao dịch 13.844,23 tỷ gồm thỏa thuận không thay thế được số khớp. VIC cùng một số mã vốn hóa lớn đỡ điểm, trong khi ngân hàng, chứng khoán và bất động sản còn phân hóa. MA20 1.733,13 dốc lên 2,55 điểm/5 phiên nhưng VN-Index chưa lấy lại MA50 1.763,45. Điểm đồng thuận -1/7 do dòng tiền co cụm; chế độ RÚT GỌN R3 cho trạng thái KHÔNG mở vị thế mới. Không có Sổ gốc nên không được coi các chặn cứng quá khứ đã gỡ.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "5 phút đọc",
  "brief": {
    "headline": "Tăng điểm nhờ trụ, sức mua chưa lan tỏa",
    "thesis": "VN-Index +0,22% lên 1.746,90, nhưng VN30 −0,30% và 154 mã giảm >134 mã tăng. Khớp VNINDEX 9.946,45 tỷ, giảm 23,92%; VIC cùng một số mã lớn gánh chỉ số. MA20 1.733,13 dốc lên nhưng giá vẫn dưới MA50 1.763,45. Điểm −1/7 (top 5 quá tập trung), RÚT GỌN R3: KHÔNG mở mua mới. Giới hạn dữ liệu là lý do chưa đánh giá xu hướng nền, không phải tín hiệu bán riêng biệt.",
    "evidence": [
      {
        "label": "Xu hướng kỹ thuật",
        "signal": "Trên MA20 / dưới MA50",
        "detail": "MA20 1.733,13 ↑2,55 điểm/5 phiên; MA50 1.763,45",
        "tone": "warning",
        "signalParts": [
          {
            "text": "Trên MA20",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "dưới MA50",
            "tone": "negative"
          }
        ]
      },
      {
        "label": "Thanh khoản khớp thực",
        "signal": "9.946,45 tỷ",
        "detail": "−23,92% so 10/11 • không dùng tổng GD 13.844,23 tỷ",
        "tone": "negative",
        "signalParts": [
          {
            "text": "9.946,45 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "−23,92% so 10/11",
            "tone": "negative"
          },
          {
            "text": " • không trộn thỏa thuận",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng & chất lượng",
        "signal": "134 tăng / 154 giảm",
        "detail": "Top 5 góp 7,16/3,83 = 186,95% (bảng VNIndex.ai một nguồn)",
        "tone": "negative",
        "signalParts": [
          {
            "text": "134 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "154 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Top 5 gánh 186,95%",
            "tone": "negative"
          },
          {
            "text": " • lệch phương pháp điểm trụ giữa nguồn",
            "tone": "warning"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở vị thế mới (R3, −1/7), không tăng margin; giữ cổ phiếu đang khỏe theo mốc dừng lỗ riêng. Định hướng hạ dần phần yếu để cổ phiếu còn 20–30%, không bán tháo đồng loạt.",
      "NẾU vẫn giữ MA20 1.733,13 THÌ chỉ theo dõi, không mua đuổi. NẾU mất 1.733,13 rồi kiểm định đáy 09/11 là 1.701,90 THÌ giảm phần giao dịch yếu và đòn bẩy theo kỷ luật từng mã.",
      "NẾU đóng vượt 1.751,57 và MA50 1.763,45, đồng thời độ rộng/khớp cải thiện và xác minh được các chặn trước đó đã gỡ THÌ tính lại trạng thái; chưa tự nâng thành CÓ."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "11/11 đã xác minh số lõi cùng phạm vi; MA20/MA50 từ 60 giá cùng VNIndex.ai. RÚT GỌN: thiếu lịch sử KHỚP đủ cho TB20 và phân phối, thiếu Sổ gốc; MA200/ngoại KHỚP/basis chưa khóa. Không sử dụng tổng giao dịch gồm thỏa thuận làm thanh khoản khớp.",
      "shortLabel": "EOD 11/11 • 134/134 mã • RÚT GỌN"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.746,90",
      "change": "+3,83 • +0,22%",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "price_up"
    },
    {
      "label": "KHỚP LỆNH RỔ VNINDEX",
      "value": "9.946,45 tỷ",
      "change": "−23,92% so 10/11",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "liquidity_below_average"
    },
    {
      "label": "ĐỘ RỘNG HOSE (VNDIRECT)",
      "value": "134 tăng / 154 giảm",
      "change": "76 đứng giá • 2 trần / 3 sàn ở phạm vi khác: không trộn",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative"
    },
    {
      "label": "VỊ THẾ KỸ THUẬT",
      "value": "Trên MA20 / dưới MA50",
      "change": "MA20 1.733,13 ↑ • MA50 1.763,45",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index tăng 3,83 điểm lên 1.746,90 nhưng điểm số không phản ánh sức khỏe chung: VN30 giảm 0,30%; 134 mã tăng, 154 giảm và 76 đứng giá ở tập đếm của VNDIRECT. Rổ 404 mã trên VNIndex.ai đếm 136/155/113, khác phạm vi — không trộn.",
    "VNSignal ghi KHỚP VNINDEX 9.946,44670919 tỷ, phiên 10/11 là 13.074,05166696 tỷ: giảm 23,92%. Tổng giao dịch ngày 11/11 là khoảng 13.844,23 tỷ gồm thỏa thuận, không thể dùng cho bội số TB20 khớp. TB20 KHỚP chưa xác minh.",
    "VNIndex.ai ghi top 5 mã kéo tăng VIC +4,81; VHM +0,76; GAS +0,62; VCB +0,61; BID +0,36 điểm: tổng +7,16 điểm bằng 186,95% mức tăng ròng +3,83. Tuổi Trẻ ghi cùng các mã nhưng điểm đóng góp khác (VIC +5,21): hai nguồn sử dụng phương pháp khác nhau, không trộn số. Dù theo nguồn nào, mức tăng tập trung vào trụ.",
    "Nhóm bất động sản +1,0% gia quyền theo VNIndex.ai, nhưng VIC/VHM tăng trong khi KDH, NVL, DXG, DIG giảm theo Tuổi Trẻ; chưa thể coi là dòng tiền ngành lan tỏa. Ngân hàng: TPB/SHB tăng, VPB/STB giảm. Dịch vụ tài chính −0,3%, sản xuất thực phẩm −1,5% gia quyền; chứng khoán VCI tăng nhưng VIX/SSI/HCM giảm. Chưa có bộ giá-khớp-ngoại đồng ngành để kết luận tiền ròng vào/ra.",
    "Chuỗi 60 giá đóng cửa VNIndex.ai 17/08–11/11 dùng một gốc: MA20=1.733,13, MA50=1.763,45, MA20 tăng 2,55 điểm so với năm phiên trước. Nền xu hướng chưa đánh giá vì thiếu số phân phối/25 và MA200. Điểm: giá/MA 0; thanh khoản 0 thiếu TB20; độ rộng 0 (134/154=0,870); top5 −1 (186,95%); khối ngoại 0 thiếu chuỗi khớp; phân phối 0 thiếu chuỗi; phái sinh 0 chưa xác minh. Tổng −1/7.",
    "Cổng chặn mềm đã kiểm: chỉ số xanh nhưng mã giảm nhiều hơn mã tăng; top5 trụ chiếm quá lớn; kháng cự 1.751,57 (đỉnh phiên) chỉ cách 0,27%. Điều kiện chặn cứng từ Sổ gốc, phân phối/25 và ngoại KHỚP 5 phiên chưa kiểm được. Theo bảng RÚT GỌN R3 −1, trạng thái cuối KHÔNG là do chất lượng dòng tiền đã kiểm, không phải do thiếu dữ liệu.",
    "Kịch bản tốt: vượt 1.751,57 và MA50 1.763,45 kèm độ rộng/khớp/điểm phân phối đủ xác nhận để tính lại cổng; hiện đánh giá khả năng THẤP. Cơ sở: dao động giữa MA20 1.733,13 và MA50 1.763,45, khả năng TRUNG BÌNH. Xấu: mất MA20 rồi kiểm định đáy phiên 09/11 là 1.701,90, cần phòng thủ phần cổ phiếu yếu, khả năng TRUNG BÌNH. Các mức khả năng định tính không phải xác suất."
  ],
  "levels": [
    {
      "label": "Hỗ trợ gần • MA20",
      "value": "1.733,13",
      "note": "TỰ TÍNH từ 60 phiên đóng cửa VNIndex.ai; không phải mốc cắt lỗ của từng cổ phiếu."
    },
    {
      "label": "Đáy phiên 11/11",
      "value": "1.734,25",
      "note": "Đáy phiên 11/11 từ VNSignal và VNIndex.ai; đóng mất cụm đáy/MA20 là tín hiệu giảm rủi ro."
    },
    {
      "label": "Kháng cự gần",
      "value": "1.751,57",
      "note": "Đỉnh phiên 11/11 từ VNSignal/VNIndex.ai; chưa vượt xác nhận."
    },
    {
      "label": "Kháng cự kế",
      "value": "1.763,45",
      "note": "MA50 từ 60 phiên VNIndex.ai, TỰ TÍNH."
    },
    {
      "label": "Ngưỡng xác nhận rủi ro",
      "value": "1.701,90",
      "note": "Đáy phiên 09/11 (VNSignal). Mốc vô hiệu Sổ gốc chưa có, không giả định mốc này là mốc đang hiệu lực."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Kịch bản TỐT (khả năng THẤP): đóng vượt đỉnh 11/11 là 1.751,57 và MA50 1.763,45; khớp, độ rộng và tình trạng phân phối được xác minh tích cực.",
      "then": "TÍNH LẠI trạng thái theo Prompt; chỉ cân nhắc mua khi kết quả thực sự chuyển CÓ. Chưa phát sinh vùng mua hôm nay."
    },
    {
      "state": "neutral",
      "if": "Kịch bản CƠ SỞ (khả năng TRUNG BÌNH): giá giữ trên MA20 1.733,13 nhưng vẫn ở dưới MA50 1.763,45; thanh khoản chưa chứng minh lan tỏa.",
      "then": "GIỮ mã khỏe theo điểm dừng lỗ riêng, không mua đuổi, không tăng margin, ưu tiên thu gọn phần yếu."
    },
    {
      "state": "risk_off",
      "if": "Kịch bản XẤU (khả năng TRUNG BÌNH): đóng cửa mất MA20 1.733,13, sau đó kiểm định đáy 09/11 là 1.701,90 hoặc xuất hiện chặn cứng đã xác minh.",
      "then": "PHÒNG THỦ: rà danh mục, thực hiện stop từng mã khi vi phạm, giảm đòn bẩy, không bình quân giá xuống."
    }
  ],
  "focus": "KHÔNG mở mua mới • MA20 1.733,13 • cản 1.751,57 và MA50 1.763,45 • tránh mua đuổi trụ • dữ liệu KHỚP phải tách thỏa thuận",
  "inference": "Chế độ RÚT GỌN vì thiếu chuỗi KHỚP đủ kỳ cho TB20 và phiên phân phối. Nền chưa đánh giá, trạng thái R3 KHÔNG do điểm −1 của dòng tiền co cụm đã kiểm. Không có Sổ gốc nên chưa kiểm được chặn cứng quá khứ và mốc vô hiệu; không suy là đã gỡ. R:R không áp dụng khi mốc vô hiệu gốc chưa được cung cấp. Mọi vùng mua mới KHÔNG ÁP DỤNG. Nhà đầu tư quản trị stoploss riêng theo cấu trúc từng cổ phiếu.",
  "sources": [
    {
      "label": "VNSignal — 20 ngày giá và giá trị KHỚP VNINDEX 11/11",
      "url": "https://vnsignal.vn/chi-so/vnindex/lich-su-gia"
    },
    {
      "label": "VNIndex.ai — 60 giá đóng cửa, điểm đóng góp và sức giá ngành",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "VNIndex.ai — chi tiết phiên 11/11",
      "url": "https://vnindex.ai/vn-index/phien/11-11-2026"
    },
    {
      "label": "Tài chính.com — VN30 và độ rộng cùng tập VNDIRECT",
      "url": "https://taichinh.com/chung-khoan"
    },
    {
      "label": "Tuổi Trẻ — diễn biến trụ và ngành ngày 11/11",
      "url": "https://tuoitre.vn/vn-index-chung-nhip-sau-phien-but-pha-thanh-khoan-am-dam-10026111115412924.htm"
    },
    {
      "label": "Dalink — giá trị khớp VNINDEX (làm tròn tỷ)",
      "url": "https://dalink.net/thi-truong/chi-so/VNINDEX?range=1m"
    },
    {
      "label": "Kiểm toán nguồn nội bộ 11/11",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261111.md"
    }
  ]
};
  const index = store.entries.findIndex(item => item && item.id === entry.id);
  if (index >= 0) store.entries[index] = entry;
  else store.entries.unshift(entry);
  if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
