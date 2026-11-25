/* Bản nghiên cứu 25/11/2026 — bản nghiên cứu rút gọn, giữ nguyên bố cục. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261125",
  "date": "2026-11-25",
  "publishedAt": "25/11/2026 • Sau phiên",
  "edition": "Bản ngày 25/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "CHƯA ĐÁNH GIÁ",
  "dataStatus": "Đã khóa và triển khai 136/136 giá đóng cửa EOD 25/11. Cổng lõi đạt có giới hạn: khớp toàn HOSE 8.809 tỷ chỉ một nguồn cùng phạm vi; độ rộng VNDIRECT và Thời báo Tài chính Việt Nam trùng. Rút gọn do chưa xác minh đầy đủ chuỗi khớp toàn HOSE, số phiên phân phối và lịch sự kiện. Không có Sổ gốc; không tự tạo mốc vô hiệu.",
  "title": "VN-Index mất 1.700: sức cầu yếu, áp lực bán lan rộng",
  "thesis": "VN-Index đóng cửa 1.687,45 điểm, giảm 9,69 điểm (0,57%), không giữ được mốc 1.700. Số cổ phiếu giảm áp đảo: 227 giảm, 84 tăng, 53 tham chiếu theo VNDIRECT và Thời báo Tài chính Việt Nam. HOSE công bố 8.809 tỷ đồng khớp lệnh và 7.979 tỷ đồng thỏa thuận. BSC ghi nhận thanh khoản khớp rổ VN-Index thấp hơn 23,4% so với bình quân 20 phiên. Giá dưới MA20 1.723,85 và MA50 1.743,76, phản ánh áp lực suy yếu kỹ thuật. Chưa có đủ bằng chứng về một nhịp hồi phục bền vững.",
  "author": "Xuân Lê TVS",
  "role": "Nghiên cứu thị trường",
  "readingTime": "3 phút đọc",
  "brief": {
    "headline": "VN-Index mất 1.700: sức cầu yếu, áp lực bán lan rộng",
    "thesis": "VN-Index đóng cửa 1.687,45 điểm, giảm 9,69 điểm (0,57%), không giữ được mốc 1.700. Số cổ phiếu giảm áp đảo: 227 giảm, 84 tăng, 53 tham chiếu theo VNDIRECT và Thời báo Tài chính Việt Nam. HOSE công bố 8.809 tỷ đồng khớp lệnh và 7.979 tỷ đồng thỏa thuận. BSC ghi nhận thanh khoản khớp rổ VN-Index thấp hơn 23,4% so với bình quân 20 phiên. Giá dưới MA20 1.723,85 và MA50 1.743,76, phản ánh áp lực suy yếu kỹ thuật. Chưa có đủ bằng chứng về một nhịp hồi phục bền vững.",
    "evidence": [
      {
        "label": "Nền kỹ thuật",
        "signal": "Dưới MA20/MA50",
        "detail": "MA20 1.723,85; MA50 1.743,76; MA20 giảm 16,64 điểm so với 5 phiên trước.",
        "tone": "negative"
      },
      {
        "label": "Khớp lệnh HOSE",
        "signal": "8.809 tỷ",
        "detail": "Toàn sàn theo HOSE; BSC rổ VN-Index thấp hơn TB20 23,4%.",
        "tone": "warning"
      },
      {
        "label": "Độ rộng thị trường",
        "signal": "84 tăng / 227 giảm",
        "detail": "53 tham chiếu; VN30 −0,70%, VNMIDCAP −1,24%, VNSMALLCAP −0,89%.",
        "tone": "negative",
        "signalParts": [
          {
            "text": "84 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "227 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "53 tham chiếu",
            "tone": "neutral"
          },
          {
            "text": "; VN30 −0,70%, VNMIDCAP −1,24%, VNSMALLCAP −0,89%.",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "Nghiên cứu: theo dõi chất lượng phục hồi quanh mốc tâm lý 1.700 và độ rộng thị trường.",
      "Đối chiếu riêng giao dịch khớp lệnh và thỏa thuận; không suy từ tổng khối ngoại sang khớp ròng.",
      "Chưa xác nhận xu hướng nền theo V3.3.1 vì chưa đủ chuỗi phân phối và lịch sự kiện. Không đưa khuyến nghị mua/bán hay tỷ trọng tài khoản."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Đã khóa và triển khai 136/136 giá đóng cửa EOD 25/11. Cổng lõi đạt có giới hạn: khớp toàn HOSE 8.809 tỷ chỉ một nguồn cùng phạm vi; độ rộng VNDIRECT và Thời báo Tài chính Việt Nam trùng. Rút gọn do chưa xác minh đầy đủ chuỗi khớp toàn HOSE, số phiên phân phối và lịch sự kiện. Không có Sổ gốc; không tự tạo mốc vô hiệu.",
      "shortLabel": "EOD đã khóa 136/136 • nghiên cứu rút gọn"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.687,45",
      "change": "−9,69 • −0,57%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "8.809 tỷ",
      "change": "BSC rổ VN-Index: thấp hơn TB20 23,4%",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "liquidity_below_average"
    },
    {
      "label": "ĐỘ RỘNG HOSE",
      "value": "84 tăng / 227 giảm",
      "change": "53 tham chiếu",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "84 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "227 giảm",
          "tone": "negative"
        }
      ],
      "changeParts": [
        {
          "text": "53 tham chiếu",
          "tone": "neutral"
        }
      ]
    },
    {
      "label": "NỀN KỸ THUẬT",
      "value": "Dưới MA20/MA50",
      "change": "MA20 dốc xuống",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index đã không giữ được mốc 1.700 điểm. Kết phiên 25/11, chỉ số lùi về 1.687,45 điểm, giảm 9,69 điểm (0,57%). Điểm đáng quan tâm hơn là số cổ phiếu giảm áp đảo số tăng: 227 giảm, 84 tăng và 53 tham chiếu.",
    "Giá trị khớp lệnh toàn HOSE đạt 8.809 tỷ đồng, trong khi giao dịch thỏa thuận đạt 7.979 tỷ đồng. Theo báo cáo BSC, giá trị khớp lệnh của rổ VN-Index thấp hơn 23,4% so với bình quân 20 phiên. Tổng giao dịch lớn vì có thỏa thuận, không đồng nghĩa sức mua trên bảng điện đã cải thiện.",
    "Áp lực bán không chỉ nằm ở vài cổ phiếu lớn. Theo BSC, nhóm dịch vụ tài chính giảm 1,75%, dầu khí giảm 2,00%; du lịch và giải trí tăng 1,13% nhưng chưa đủ sức kéo mặt bằng chung. Tổng bán ròng khối ngoại tăng mạnh, phần đáng kể đến từ giao dịch thỏa thuận VIC; không nên đồng nhất con số này với bán ròng qua khớp lệnh.",
    "Về kỹ thuật, chỉ số vẫn thấp hơn MA20 tại 1.723,85 và MA50 tại 1.743,76. Đáy phiên 1.686,05 và mốc tâm lý 1.700 là các tham chiếu để theo dõi chất lượng phiên tiếp theo. Nếu chỉ số lấy lại 1.700 với độ rộng và thanh khoản cải thiện, cơ sở đánh giá phục hồi sẽ tốt hơn; nếu đóng dưới 1.686,05, rủi ro suy yếu cần được đánh giá lại.",
    "Chưa có đủ dữ liệu về chuỗi khối ngoại khớp lệnh và lịch sự kiện để kết luận toàn bộ sức khỏe trung hạn. Trọng tâm là kiểm chứng sức cầu, nhận diện rủi ro và tránh biến một nhịp hồi đơn lẻ thành kỳ vọng đảo chiều.",
    "Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định."
  ],
  "levels": [
    {
      "label": "Đáy phiên 25/11",
      "value": "1.686,05",
      "note": "VNIndex.ai và nmquan cùng xác nhận."
    },
    {
      "label": "Mốc tâm lý",
      "value": "1.700",
      "note": "Mốc tròn, không phải điểm mua."
    },
    {
      "label": "Đỉnh phiên 25/11",
      "value": "1.706,16",
      "note": "VNIndex.ai và nmquan cùng xác nhận."
    },
    {
      "label": "MA20",
      "value": "1.723,85",
      "note": "Tự tính từ 20 giá đóng cửa VNIndex.ai; BSC đối chiếu."
    },
    {
      "label": "MA50",
      "value": "1.743,76",
      "note": "Tự tính từ 50 giá đóng cửa VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Chỉ số lấy lại 1.700, đồng thời độ rộng và khớp lệnh cải thiện.",
      "then": "Đánh giá lại chất lượng nhịp hồi; chưa mặc định đảo chiều."
    },
    {
      "state": "neutral",
      "if": "Chỉ số dao động giữa đáy phiên 1.686,05 và mốc 1.700.",
      "then": "Theo dõi sức cầu, độ rộng và sự phân hóa giữa nhóm vốn hóa."
    },
    {
      "state": "risk_off",
      "if": "Chỉ số đóng dưới 1.686,05, độ rộng tiếp tục bất lợi.",
      "then": "Đánh giá lại rủi ro suy yếu; không suy diễn thành mức giá của từng cổ phiếu."
    }
  ],
  "focus": "Áp lực bán lan rộng • thanh khoản khớp thấp • nhịp hồi chưa được xác nhận",
  "inference": "Rút gọn: cổng số lõi đạt có giới hạn. Theo quy tắc chấm điểm của Prompt, giá/MA −1, độ rộng −1, top 5 giảm đóng góp 3,07/9,69 điểm = 31,68% nên chất lượng dòng tiền −1; các yếu tố chưa đủ dữ liệu ghi 0. Không có Sổ gốc để kiểm chặn cứng đang hiệu lực; không xác nhận số phiên phân phối hay tỷ trọng tài khoản. Đây là nghiên cứu thị trường, không phải tín hiệu giao dịch.",
  "sources": [
    {
      "label": "HOSE — tổng hợp giao dịch 25/11, 16:50:52",
      "url": "https://web.stockbiz.vn/News/2026/11/25/1927143/hose-diem-tin-giao-dich-ngay-25-11-2026.aspx"
    },
    {
      "label": "BSC Research — báo cáo ngày 25/11/2026, trang 1–3",
      "url": "https://www.bsc.com.vn/Report/ReportFile/16212"
    },
    {
      "label": "Thời báo Tài chính Việt Nam — độ rộng và diễn biến 25/11, 17:28",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-25-11-luc-cau-suy-yeu-vn-index-quay-dau-giam-diem-207506.html"
    },
    {
      "label": "VNIndex.ai — lịch sử giá đóng cửa",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "nmquan — chuỗi lịch sử khớp lệnh, khác phương pháp tổng hợp",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
