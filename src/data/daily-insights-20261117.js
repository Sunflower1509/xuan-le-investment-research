/* Bản nhận định 17/11/2026 — chỉ bổ sung dữ liệu vào bộ nạp hiện hữu. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;
  const entry = {
  "id": "market-view-20261117",
  "date": "2026-11-17",
  "publishedAt": "17/11/2026 • Sau phiên",
  "edition": "Bản ngày 17/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "Giá cổ phiếu website đã khóa 135/135 mã EOD 17/11 bằng VNDIRECT Finfo/KBS; khớp HOSE toàn sàn 9.607,97 tỷ theo Thời báo Ngân hàng (bản đăng lại trên Vietnam.vn), 1 NGUỒN; VNSignal 9.596,85 tỷ thuộc rổ VNINDEX khác phạm vi. Độ rộng 107 tăng/199 giảm/62 đứng được đối chiếu EOD cùng tập. CHẾ ĐỘ RÚT GỌN do không có chuỗi KHỚP đồng phạm vi đủ cho TB20 và phân phối/25. Giá thấp 17/11 giữa nguồn lệch, MA200, ngoại KHỚP/5 phiên, basis và Sổ gốc chưa xác minh.",
  "title": "Mất mốc 1.730 điểm: giá yếu, dòng tiền chưa đủ sức nâng mặt bằng cổ phiếu",
  "thesis": "Phiên 17/11, VN-Index đóng 1.726,72 điểm (−10,17; −0,59%). Trên HOSE, theo cùng tập thống kê VNDIRECT, số mã giảm 199 lớn hơn nhiều so với 107 mã tăng, 62 đứng giá; VN30 giảm 0,39% và HNX-Index mất 2,48%. Báo cáo sau phiên ghi khớp HOSE 9.607,97 tỷ đồng, không gồm thỏa thuận (1 NGUỒN); tuyệt đối không thay bằng tổng giao dịch. Chỉ số đứng dưới MA20 1.740,49 và MA50 1.755,46, dù MA20 còn dốc lên 9,46 điểm trong năm phiên. Ngân hàng và dầu khí vốn hóa lớn kéo giảm, trong khi POW, KDH và một số mã khác giữ sức giá riêng; đó chưa phải sự trở lại đồng thuận của tiền mua. Thiếu chuỗi khớp đủ kỳ cho TB20 và phân phối/25 nên xu hướng nền CHƯA ĐÁNH GIÁ, áp dụng RÚT GỌN. Điểm đã kiểm −2/7 dẫn tới trạng thái KHÔNG (R2), không mở mua mới, giữ kỷ luật dừng lỗ theo từng mã.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "5 phút đọc",
  "brief": {
    "headline": "Đỏ điểm, thiếu cầu lan tỏa: ưu tiên giữ vốn",
    "thesis": "VN-Index 1.726,72 (−10,17; −0,59%); HOSE 107 tăng/199 giảm/62 đứng. Khớp lệnh toàn HOSE 9.607,97 tỷ, 1 NGUỒN, không trộn thỏa thuận. Đóng dưới MA20 1.740,49 và MA50 1.755,46; MA20 dốc +9,46 điểm/5 phiên. Chưa đủ chuỗi KHỚP cho TB20 và phân phối/25: RÚT GỌN, nền chưa đánh giá. Hai dấu hiệu đã kiểm (giá/MA, độ rộng) cho −2/7, dòng R2 KHÔNG mở mua mới.",
    "evidence": [
      {
        "label": "Tương quan giá / đường trung bình",
        "signal": "Dưới MA20 và MA50",
        "detail": "MA20 1.740,49 • MA50 1.755,46 • dốc MA20 +9,46",
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
            "text": "MA20 1.740,49",
            "tone": "neutral"
          },
          {
            "text": " • chưa lấy lại vùng cản",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Khớp lệnh thuần HOSE",
        "signal": "9.607,97 tỷ",
        "detail": "1 NGUỒN • TB20 cùng phạm vi chưa khóa; không tính bội số",
        "tone": "warning",
        "signalParts": [
          {
            "text": "9.607,97 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "1 NGUỒN",
            "tone": "warning"
          },
          {
            "text": " • chưa có TB20 khớp",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng và điểm quyết định",
        "signal": "107 tăng / 199 giảm",
        "detail": "62 đứng • tỷ lệ 0,538 • tổng điểm −2/7 (R2 KHÔNG)",
        "tone": "negative",
        "signalParts": [
          {
            "text": "107 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "199 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Độ rộng −1",
            "tone": "negative"
          },
          {
            "text": " • giá/MA −1",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở mua mới (RÚT GỌN R2, −2/7); giữ nguyên dừng lỗ của từng mã và không tăng margin. Rà soát trước các cổ phiếu yếu hoặc đã vi phạm dừng lỗ riêng; tỷ trọng phòng thủ định hướng tối đa 20% theo Prompt, thực hiện từng bước, không bán tháo máy móc.",
      "NẾU VN-Index hồi qua đỉnh phiên 1.735,04, MA20 1.740,49 rồi MA50 1.755,46, đồng thời có KHỚP và độ rộng cải thiện được kiểm chứng, THÌ chạy lại toàn bộ cổng để xét khả năng chuyển trạng thái; không tự phát lệnh chỉ vì một nhịp hồi.",
      "NẾU chỉ số tiếp tục yếu và đóng cửa dưới đáy 09/11 là 1.701,90, THÌ ưu tiên rà vị thế có nền yếu, giảm phần vi phạm mốc cắt lỗ riêng, tuyệt đối không bình quân giá xuống. Giá thấp chính xác của ngày 17/11 giữa các nguồn đang lệch nên không dùng làm ngưỡng cắt lỗ."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Giá/% 17/11 đã đối chiếu VNIndex.ai/VNSignal/Finfo; HOSE KHỚP 9.607,97 tỷ từ Thời báo Ngân hàng qua Vietnam.vn (1 NGUỒN); VNSignal 9.596,85 tỷ là rổ VNINDEX, khác phạm vi, không ép đối chiếu. Độ rộng 107/199/62 Finfo + Tài chính.com cùng tập. MA20/50/dốc từ 60 giá đóng cùng VNIndex.ai; thiếu lịch sử KHỚP cùng phạm vi cho TB20 và phân phối/25, chưa có MA200, ngoại KHỚP và Sổ gốc. Ngưỡng thấp 17/11 không dùng vì nguồn lệch.",
      "shortLabel": "EOD 17/11 • 135/135 mã • RÚT GỌN • −2/7"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.726,72",
      "change": "−10,17 • −0,59%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "9.607,97 tỷ",
      "change": "1 NGUỒN • TB20 chưa xác minh",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "neutral"
    },
    {
      "label": "ĐỘ RỘNG HOSE",
      "value": "107 tăng / 199 giảm",
      "change": "62 đứng giá • tập VNDIRECT",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "107 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "199 giảm",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "TRẠNG THÁI / PHÂN TÍCH",
      "value": "KHÔNG • −2/7",
      "change": "RÚT GỌN • nền chưa đánh giá",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index đã có thêm một phiên không thể giữ được sắc xanh. Đóng cửa 1.726,72 điểm, mất 10,17 điểm (0,59%) giữa lúc 199 cổ phiếu HOSE giảm, chỉ 107 mã tăng và 62 mã giữ tham chiếu theo cùng tập đếm của VNDIRECT. VN30 lùi 0,39%, HNX-Index giảm 2,48%. Điều đáng lưu tâm không chỉ là mức giảm điểm, mà là mặt bằng cổ phiếu ở nhiều nhóm chưa đi cùng một hướng.",
    "Thời báo Ngân hàng, đăng lại trên Vietnam.vn, tách rõ giá trị khớp lệnh toàn HOSE 9.607,97 tỷ đồng với thỏa thuận khoảng 5.030,63 tỷ; đây là số liệu KHỚP đúng định nghĩa nhưng mới có một nguồn chi tiết. VNSignal ghi khoảng 9.596,85 tỷ trên bảng giá trị rổ VNINDEX — khác phạm vi, không trộn. Chuỗi 60 ngày VNIndex.ai có cột giá trị TỔNG nên không thể dùng để tính TB20 khớp. Vì chưa có chuỗi cùng phạm vi đủ 21/26 phiên, bội số thanh khoản và số phiên phân phối/25 CHƯA XÁC MINH; không kết luận phiên này là phiên bán tháo có phân phối theo định nghĩa hệ thống.",
    "Từ 60 giá đóng cửa của VNIndex.ai (21/08–17/11), MA20 tự tính 1.740,49; MA50 1.755,46. MA20 còn dốc lên 9,46 điểm so với năm phiên trước, nhưng VN-Index đã đứng dưới cả hai đường. Chưa có MA200 và không đủ TB20 khớp/25 phiên phân phối để xác lập nền xu hướng đầy đủ: phải ghi CHẾ ĐỘ RÚT GỌN và nền CHƯA ĐÁNH GIÁ, thay vì tự gọi thị trường có xu hướng xấu chắc chắn.",
    "Sức bán tập trung vào nhiều mã trụ ngân hàng và dầu khí: VCB giảm 2,07%, BID giảm 2,05%, GAS giảm 3,71%, BSR giảm 4,72%, PVT giảm 5,26% theo bản tin sau phiên. Ngược lại, POW tăng 3,11%, KDH tăng 3,64%, DBC và một số cổ phiếu điện/bất động sản giữ nhịp riêng. Đây chỉ là phân hóa về giá; chưa có dữ liệu khớp và ngoại theo cả nhóm để khẳng định dòng vốn ròng chảy vào ngành nào.",
    "VNIndex.ai cho năm mã ghì điểm mạnh nhất VCB −1,89, GAS −1,34, BSR −1,24, VHM −1,19, BID −1,04: tổng 6,70 điểm, bằng 65,88% mức giảm 10,17 điểm. Theo Prompt, tỷ lệ trên 50% trong phiên giảm không tạo yếu tố bán dàn trải −1, nên chấm chất lượng dòng tiền 0; không tự nhấn mạnh nguồn một bảng là hai nguồn đối chiếu. Khối ngoại theo Thời báo Ngân hàng bán ròng tổng khoảng 420,8 tỷ đồng, nhưng chưa có chuỗi khối ngoại KHỚP HOSE đủ năm ngày nên không kích hoạt chặn ngoại.",
    "Bảy yếu tố được áp dụng có kiểm soát: giá dưới MA20 và MA50 −1; thanh khoản 0 do thiếu TB20; độ rộng 107/199=0,538 cho −1; chất lượng dòng tiền 0; khối ngoại khớp 0; phân phối/25 0 thiếu chuỗi; phái sinh/vĩ mô 0 chưa đủ căn cứ. Tổng −2/7. Theo bảng RÚT GỌN, R2 cho trạng thái thô KHÔNG; trần nền CHƯA ĐÁNH GIÁ tối đa CHỜ nên vẫn KHÔNG; không có Sổ gốc thì bỏ chống đảo chiều. KHÔNG mở vị thế mới là quyết định dựa trên giá và độ rộng đã kiểm, không phải phán đoán từ số liệu còn thiếu.",
    "Cổng chặn: các điều kiện cần bội số khớp, ngoại khớp năm phiên, số phân phối/25 và mốc vô hiệu lịch sử từ Sổ gốc chưa kiểm được; không coi đó là đã qua hoặc đang kích hoạt. Giá thấp ngày 17/11 giữa các nguồn có sai khác chưa phân xử nên không tự dùng để đặt stop chỉ số. Mốc phía dưới có xuất xứ là đáy 09/11 =1.701,90; phía trên là đỉnh 17/11 =1.735,04, MA20 1.740,49 và MA50 1.755,46.",
    "Kịch bản tích cực (THẤP): chỉ số vượt lần lượt 1.735,04, MA20 và MA50, sau đó đủ xác nhận về độ rộng, khớp và chặn để tính lại trạng thái; không tự mua. Kịch bản cơ sở (TRUNG BÌNH): giằng co dưới MA20 nhưng còn trên 1.701,90, giữ vị thế có cấu trúc tốt theo stop riêng, không mua đuổi. Kịch bản xấu (TRUNG BÌNH–CAO): đóng dưới 1.701,90 và nhiều mã tiếp tục yếu; ưu tiên xử lý các mã vi phạm dừng lỗ riêng, giảm đòn bẩy và không bình quân giá xuống. Khả năng mang tính định tính, không phải xác suất."
  ],
  "levels": [
    {
      "label": "Hỗ trợ có xuất xứ — đáy 09/11",
      "value": "1.701,90",
      "note": "Giá thấp 09/11 trong bảng VNSignal. Không được tự coi đây là mốc vô hiệu từ Sổ gốc hoặc stop của cổ phiếu."
    },
    {
      "label": "Kháng cự ngắn — đỉnh 17/11",
      "value": "1.735,04",
      "note": "Đỉnh phiên 17/11 trùng giữa VNIndex.ai và VNSignal."
    },
    {
      "label": "Kháng cự kỹ thuật — MA20",
      "value": "1.740,49",
      "note": "TỰ TÍNH 20 giá đóng 21/10–17/11 VNIndex.ai; giá hiện nằm dưới."
    },
    {
      "label": "Kháng cự xu hướng — MA50",
      "value": "1.755,46",
      "note": "TỰ TÍNH 50 giá đóng 09/09–17/11 cùng nguồn VNIndex.ai; giá hiện nằm dưới."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Kịch bản TỐT (THẤP): đóng vượt 1.735,04, MA20 1.740,49 và MA50 1.755,46, đồng thời có thanh khoản KHỚP và độ rộng xác nhận, không còn chặn chưa kiểm.",
      "then": "Chỉ tính lại đủ bảy yếu tố và ba bước trạng thái; mua mới chỉ khi thực sự chuyển CÓ. Hôm nay KHÔNG có vùng mua mới."
    },
    {
      "state": "neutral",
      "if": "Kịch bản CƠ SỞ (TRUNG BÌNH): dao động dưới MA20 1.740,49 nhưng còn giữ được vùng đáy 09/11 là 1.701,90.",
      "then": "Giữ các cổ phiếu đang khỏe có điểm dừng lỗ riêng; không mở mua mới, không tăng margin, ưu tiên giảm các mã mất nền."
    },
    {
      "state": "risk_off",
      "if": "Kịch bản XẤU (TRUNG BÌNH–CAO): đóng cửa thủng 1.701,90 với độ rộng tiếp tục bất lợi.",
      "then": "Giảm các vị thế đã vi phạm dừng lỗ của từng mã, hạn chế đòn bẩy và không bình quân xuống. Không dùng giá thấp 17/11 đang lệch nguồn làm mốc cắt."
    }
  ],
  "focus": "KHÔNG mở mua mới • hỗ trợ 1.701,90 • cản 1.735,04 / MA20 1.740,49 / MA50 1.755,46 • giá dưới MA20/50, độ rộng âm • 1 NGUỒN KHỚP HOSE",
  "inference": "CHẾ ĐỘ RÚT GỌN vì thiếu TB20 khớp và số phiên phân phối/25 từ chuỗi KHỚP cùng phạm vi. Cổng dữ liệu lõi ĐẠT có giới hạn: giá và độ rộng hai nguồn, khớp HOSE 9.607,97 tỷ một nguồn. Không có MA200, chuỗi ngoại KHỚP, giá thấp 17/11 thống nhất, basis HNX hoặc Sổ gốc. Bảy yếu tố −2/7 => thô KHÔNG R2 → nền CHƯA ĐÁNH GIÁ trần CHỜ vẫn KHÔNG → bỏ chống đảo chiều (không Sổ) → KHÔNG R2. Không công bố vùng mua mới hay R:R chỉ số vì thiếu mốc vô hiệu gốc và trạng thái KHÔNG. Nguyên tắc stoploss riêng của các mã giữ nguyên.",
  "sources": [
    {
      "label": "Thời báo Ngân hàng, dẫn trên Vietnam.vn — KHỚP HOSE 9.607,97 tỷ, cùng giao dịch thỏa thuận",
      "url": "https://www.vietnam.vn/vn-index-mat-moc-1-730-diem-dong-tien-tiep-tuc-dung-ngoai"
    },
    {
      "label": "VNIndex.ai — 60 giá đóng cửa và đóng góp cổ phiếu 17/11",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "VNSignal — lịch sử giá/đỉnh 17/11, giá trị rổ VNINDEX khác HOSE",
      "url": "https://vnsignal.vn/chi-so/vnindex/lich-su-gia"
    },
    {
      "label": "Tài chính.com — độ rộng HOSE theo cùng phạm vi VNDIRECT 17/11",
      "url": "https://taichinh.com/chung-khoan"
    },
    {
      "label": "Thời báo Tài chính Việt Nam — diễn biến ngành 17/11",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-17-11-ap-luc-ban-gia-tang-vn-index-giam-diem-tro-lai-207104.html"
    },
    {
      "label": "Tin nhanh Chứng khoán — tổng và thỏa thuận phạm vi khác ngày 17/11",
      "url": "https://www.tinnhanhchungkhoan.vn/sac-do-chiem-uu-the-vn-index-giam-hon-10-diem-trong-phien-ngay-1711-post401574.html"
    },
    {
      "label": "Hồ sơ kiểm toán nguồn, cổng và giới hạn ngày 17/11",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261117.md"
    }
  ]
};
  const i = store.entries.findIndex(item => item && item.id === entry.id);
  if (i >= 0) store.entries[i] = entry;
  else store.entries.unshift(entry);
  if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
