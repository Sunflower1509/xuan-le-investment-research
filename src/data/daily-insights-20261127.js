/* Bản nghiên cứu 27/11/2026 — bản nghiên cứu rút gọn, giữ nguyên bố cục. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261127",
  "date": "2026-11-27",
  "publishedAt": "27/11/2026 • Dữ liệu sau phiên",
  "edition": "Bản ngày 27/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "CHƯA ĐÁNH GIÁ",
  "dataStatus": "Dữ liệu đến hết phiên 27/11/2026; bản tổng hợp HOSE công bố 16:34:03. Bản nghiên cứu rút gọn. Chưa xác minh đầy đủ chuỗi thanh khoản toàn HOSE, lịch sự kiện, phiên phân phối, MA200, khối ngoại khớp lệnh 5 phiên và Sổ gốc. Giá đóng cửa 136/136 mã đã khóa và triển khai đúng phiên 27/11; nhật ký chênh lệch khối lượng được lưu riêng.",
  "title": "VN-Index hồi 24,22 điểm, thanh khoản chưa xác nhận đảo chiều",
  "thesis": "VN-Index đóng cửa 1.653,90 điểm, tăng 24,22 điểm (+1,49%). HOSE công bố giá trị khớp lệnh 9.291 tỷ đồng, giảm 33,66% so với phiên 26/11. Độ rộng cải thiện với 208 mã tăng, 83 mã giảm và 59 mã tham chiếu theo Thời báo Tài chính Việt Nam và taichinh.com. Chỉ số vẫn dưới MA20 1.711,91 và MA50 1.736,77. Nhịp hồi tích cực về điểm số nhưng chưa đủ xác nhận đảo chiều.",
  "author": "Xuân Lê TVS",
  "role": "Nghiên cứu thị trường",
  "readingTime": "3 phút đọc",
  "brief": {
    "headline": "VN-Index hồi 24,22 điểm, thanh khoản chưa xác nhận đảo chiều",
    "thesis": "VN-Index đóng cửa 1.653,90 điểm, tăng 24,22 điểm (+1,49%). HOSE công bố giá trị khớp lệnh 9.291 tỷ đồng, giảm 33,66% so với phiên 26/11. Độ rộng cải thiện với 208 mã tăng, 83 mã giảm và 59 mã tham chiếu theo Thời báo Tài chính Việt Nam và taichinh.com. Chỉ số vẫn dưới MA20 1.711,91 và MA50 1.736,77. Nhịp hồi tích cực về điểm số nhưng chưa đủ xác nhận đảo chiều.",
    "evidence": [
      {
        "label": "Nền kỹ thuật",
        "signal": "Dưới MA20/MA50",
        "detail": "MA20 1.711,91; MA50 1.736,77; MA20 giảm 23,24 điểm so với 5 phiên trước.",
        "tone": "negative"
      },
      {
        "label": "Khớp lệnh HOSE",
        "signal": "9.291 tỷ",
        "detail": "Giảm 33,66% so với 26/11. BSC: khớp rổ VN-Index thấp hơn bình quân 20 phiên 19,4%.",
        "tone": "warning"
      },
      {
        "label": "Độ rộng thị trường",
        "signal": "208 tăng / 83 giảm",
        "detail": "59 tham chiếu; VN30 +1,43%, VNMIDCAP +1,14%, VNSMALLCAP +0,70%.",
        "tone": "positive",
        "signalParts": [
          {
            "text": "208 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "83 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "59 tham chiếu",
            "tone": "neutral"
          },
          {
            "text": "; VN30 +1,43%, VNMIDCAP +1,14%, VNSMALLCAP +0,70%.",
            "tone": "positive"
          }
        ]
      }
    ],
    "actions": [
      "Đánh giá sự đồng thuận của độ rộng và thanh khoản trong các nhịp hồi tiếp theo.",
      "Phân biệt giao dịch khớp lệnh với thỏa thuận; không quy tổng giao dịch thành dòng tiền ròng.",
      "Theo dõi sức bền của các nhóm ngành và bổ sung chuỗi dữ liệu trước khi kết luận trung hạn."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Dữ liệu đến hết phiên 27/11/2026; bản tổng hợp HOSE công bố 16:34:03. Bản nghiên cứu rút gọn. Chưa xác minh đầy đủ chuỗi thanh khoản toàn HOSE, lịch sự kiện, phiên phân phối, MA200, khối ngoại khớp lệnh 5 phiên và Sổ gốc. Giá đóng cửa 136/136 mã đã khóa và triển khai đúng phiên 27/11; nhật ký chênh lệch khối lượng được lưu riêng.",
      "shortLabel": "Nghiên cứu rút gọn • đã khóa giá cổ phiếu"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.653,90",
      "change": "+24,22 • +1,49%",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "price_up"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "9.291 tỷ",
      "change": "Giảm 33,66% so với phiên trước",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "neutral"
    },
    {
      "label": "ĐỘ RỘNG HOSE",
      "value": "208 tăng / 83 giảm",
      "change": "59 tham chiếu",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "breadth_positive",
      "valueParts": [
        {
          "text": "208 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "83 giảm",
          "tone": "negative"
        }
      ],
      "changeParts": [
        {
          "text": "59 tham chiếu",
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
    "VN-Index lấy lại 24,22 điểm trong phiên cuối tuần, đóng cửa tại 1.653,90 điểm (+1,49%). Sau phiên giảm sâu trước đó, sự hồi phục giúp cải thiện tâm lý, nhưng chất lượng nhịp tăng vẫn cần được kiểm chứng.",
    "Giá trị khớp lệnh toàn HOSE đạt 9.291 tỷ đồng theo công bố của Sở, giảm 33,66% so với phiên trước. Mặt bằng cổ phiếu đã cải thiện với 208 mã tăng, 83 mã giảm và 59 mã tham chiếu theo phạm vi thống kê được sử dụng. Thanh khoản suy giảm trong phiên hồi cho thấy sức mua chưa thể hiện sự đồng thuận đủ mạnh để xác nhận đảo chiều.",
    "Nhóm năng lượng nổi bật, chỉ số ngành của HOSE tăng 6,50%, trong khi tiện ích tăng 2,21% và bất động sản tăng 1,78%. Ngược lại, y tế giảm 2,10%. Theo BSC, năm mã đóng góp tăng điểm lớn nhất chiếm khoảng 58,88% mức tăng của VN-Index. Đà hồi có lan tỏa nhưng vẫn phụ thuộc đáng kể vào cổ phiếu vốn hóa lớn. Khối ngoại đã mua ròng trở lại xét theo tổng giao dịch HOSE; số tổng không đồng nghĩa với khớp lệnh ròng.",
    "Về kỹ thuật, VN-Index vẫn thấp hơn MA20 tại 1.711,91 điểm và MA50 tại 1.736,77 điểm. Đỉnh phiên 1.662,83 và đáy phiên 1.639,23 là các tham chiếu để đánh giá sức bền của nhịp hồi. Nếu chỉ số vượt đỉnh phiên với độ rộng và khớp lệnh cải thiện, bằng chứng phục hồi sẽ tốt hơn; nếu mất đáy phiên, cần đánh giá lại rủi ro suy yếu.",
    "Chưa đủ dữ liệu để kết luận toàn bộ xu hướng trung hạn. Một phiên xanh không xóa được áp lực của phiên giảm sâu trước đó. Kỷ luật kiểm chứng dữ liệu và quản trị rủi ro vẫn cần được đặt lên hàng đầu.",
    "Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định."
  ],
  "levels": [
    {
      "label": "Đáy phiên 26/11",
      "value": "1.629,68",
      "note": "VNIndex.ai và nmquan."
    },
    {
      "label": "Đáy phiên 27/11",
      "value": "1.639,23",
      "note": "VNIndex.ai và nmquan."
    },
    {
      "label": "Đỉnh phiên 27/11",
      "value": "1.662,83",
      "note": "VNIndex.ai và nmquan."
    },
    {
      "label": "MA20",
      "value": "1.711,91",
      "note": "Tự tính từ 20 giá đóng cửa VNIndex.ai."
    },
    {
      "label": "MA50",
      "value": "1.736,77",
      "note": "Tự tính từ 50 giá đóng cửa VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Chỉ số vượt đỉnh phiên 1.662,83 cùng độ rộng và khớp lệnh cải thiện.",
      "then": "Ghi nhận bằng chứng phục hồi tốt hơn; chưa mặc định đảo chiều."
    },
    {
      "state": "neutral",
      "if": "Chỉ số dao động trong biên 1.639,23–1.662,83.",
      "then": "Đánh giá mức cân bằng cung cầu và độ lan tỏa."
    },
    {
      "state": "risk_off",
      "if": "Chỉ số đóng dưới 1.639,23.",
      "then": "Đánh giá lại mức độ suy yếu so với đáy phiên 26/11."
    }
  ],
  "focus": "Hồi kỹ thuật • độ rộng cải thiện • thanh khoản suy giảm",
  "inference": "Nghiên cứu rút gọn; điểm số và độ rộng cải thiện nhưng chỉ số vẫn dưới MA20/MA50. Chưa kiểm đủ lịch sự kiện, số phiên phân phối và chặn lịch sử. Không xác nhận trạng thái giao dịch, mốc vô hiệu, tỷ trọng tài khoản hay dòng tiền ròng ngành.",
  "sources": [
    {
      "label": "HOSE — tổng hợp giao dịch 27/11, 16:34:03",
      "url": "https://web.stockbiz.vn/News/2026/11/27/1927930/hose-diem-tin-giao-dich-ngay-27-11-2026.aspx"
    },
    {
      "label": "HOSE — tổng hợp giao dịch 26/11",
      "url": "https://web.stockbiz.vn/News/2026/11/26/1927505/hose-diem-tin-giao-dich-ngay-26-11-2026.aspx"
    },
    {
      "label": "BSC Research — bản tin 27/11",
      "url": "https://www.bsc.com.vn/bao-cao/16222-bsc-brief-27-11-vn-index-ghi-nhan-nhip-hoi-phuc-ky-thuat-tren-nen-thanh-khoan-thap/"
    },
    {
      "label": "Thời báo Tài chính Việt Nam — phiên 27/11",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-27-11-vn-index-phuc-hoi-manh-khoi-ngoai-tro-lai-mua-rong-207649.html"
    },
    {
      "label": "taichinh.com — số liệu cuối phiên",
      "url": "https://taichinh.com/chung-khoan"
    },
    {
      "label": "VNIndex.ai — phiên 27/11",
      "url": "https://vnindex.ai/vn-index/phien/27-11-2026"
    },
    {
      "label": "VNIndex.ai — lịch sử giá",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "nmquan — lịch sử phiên",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
