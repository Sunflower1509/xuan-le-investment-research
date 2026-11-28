/* Bản nghiên cứu 27/11/2026 — giữ nguyên khung hiển thị hiện hành. */
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
  "dataStatus": "Dữ liệu đến hết 27/11/2026; HOSE công bố 16:34:03. Nghiên cứu rút gọn: thiếu Sổ gốc, chưa hoàn tất lịch sự kiện, chuỗi phân phối, MA200, chuỗi ngoại khớp lệnh và phái sinh. Phạm vi thanh khoản HOSE toàn sàn khác với rổ VN-Index. Độ rộng dùng bộ đếm VNDIRECT Finfo và Thời báo Tài chính Việt Nam.",
  "title": "VN-Index hồi phục 24,22 điểm, thanh khoản chưa theo kịp",
  "thesis": "VN-Index kết phiên 27/11 tại 1.653,90 điểm, tăng 1,49%. Độ rộng cải thiện nhưng khớp lệnh toàn HOSE giảm 33,66% so với phiên trước; chỉ số vẫn dưới MA20 và MA50. Đây là nhịp hồi kỹ thuật, chưa đủ bằng chứng xác nhận đảo chiều.",
  "author": "Xuân Lê TVS",
  "role": "Nghiên cứu thị trường",
  "readingTime": "3 phút đọc",
  "brief": {
    "headline": "VN-Index hồi phục 24,22 điểm, thanh khoản chưa theo kịp",
    "thesis": "VN-Index kết phiên 27/11 tại 1.653,90 điểm, tăng 1,49%. Độ rộng cải thiện nhưng khớp lệnh toàn HOSE giảm 33,66% so với phiên trước; chỉ số vẫn dưới MA20 và MA50. Đây là nhịp hồi kỹ thuật, chưa đủ bằng chứng xác nhận đảo chiều.",
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
        "detail": "Giảm 33,66% so với 26/11; chuỗi nmquan cùng phương pháp đạt 0,806 lần TB20.",
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
      "Theo dõi khả năng duy trì nhịp hồi trên đỉnh phiên 27/11 và chất lượng thanh khoản.",
      "Phân biệt nhóm dẫn dắt về giá với bằng chứng dòng tiền ròng theo ngành.",
      "Chưa xác nhận đảo chiều; tiếp tục kiểm tra lịch sự kiện và chuỗi phân phối."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Dữ liệu đến hết 27/11/2026; HOSE công bố 16:34:03. Nghiên cứu rút gọn: thiếu Sổ gốc, chưa hoàn tất lịch sự kiện, chuỗi phân phối, MA200, chuỗi ngoại khớp lệnh và phái sinh. Phạm vi thanh khoản HOSE toàn sàn khác với rổ VN-Index. Độ rộng dùng bộ đếm VNDIRECT Finfo và Thời báo Tài chính Việt Nam.",
      "shortLabel": "EOD đã khóa 136/136 • nghiên cứu rút gọn"
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
      "snapshotState": "liquidity_below_average"
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
    "Phiên 27/11 lấy lại 24,22 điểm sau khi mất 57,77 điểm phiên trước. Độ rộng nghiêng về bên tăng, nhưng giá trị khớp lệnh toàn HOSE chỉ đạt 9.291 tỷ đồng, so với 14.005 tỷ đồng ngày 26/11. Nhịp hồi chưa đi kèm sự phục hồi tương ứng của thanh khoản.",
    "VN30 tăng 1,43%, VNMIDCAP tăng 1,14%, VNSMALLCAP tăng 0,70%. Sắc xanh có lan tỏa, song cường độ hồi giảm dần theo nhóm vốn hóa. Theo BSC, VIC, GAS, BSR, MBB và GVR đóng góp 58,88% số điểm tăng; điều này cho thấy ảnh hưởng đáng kể của nhóm vốn hóa lớn, không đồng nghĩa chỉ có trụ tăng.",
    "Bộ chỉ số ngành của HOSE cho thấy năng lượng tăng 6,50%, tiện ích tăng 2,21%, bất động sản tăng 1,78%; chăm sóc sức khỏe giảm 2,10%. Đây là bản đồ diễn biến giá, chưa đủ số liệu khớp lệnh và dòng tiền ròng theo ngành để kết luận luân chuyển vốn thực sự.",
    "Khối ngoại mua ròng 562 tỷ đồng theo tổng giao dịch HOSE. FILI ghi nhận mua ròng khớp lệnh 600 tỷ đồng và tự doanh bán ròng 35 tỷ đồng. Không trộn hai phạm vi giao dịch; một phiên đảo chiều chưa xác nhận xu hướng dòng vốn.",
    "Chỉ số đóng cửa ở phần giữa biên độ phiên, vẫn dưới MA20 1.711,91 và MA50 1.736,77. Đỉnh phiên 1.662,83 và đáy 1.639,23 là các tham chiếu gần; đáy phiên trước 1.629,68 là mốc theo dõi mức suy yếu. Chưa có Sổ gốc để xác nhận mốc vô hiệu đã công bố.",
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
      "label": "Đỉnh phiên 26/11",
      "value": "1.677,93",
      "note": "nmquan."
    },
    {
      "label": "MA20 / MA50",
      "value": "1.711,91 / 1.736,77",
      "note": "Tự tính từ chuỗi đóng cửa VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Chỉ số vượt đỉnh phiên 27/11 tại 1.662,83, độ rộng và thanh khoản cùng cải thiện.",
      "then": "Đánh giá tiếp khả năng lấy lại đỉnh phiên 26/11; chưa mặc định đảo chiều."
    },
    {
      "state": "neutral",
      "if": "Chỉ số còn dao động trong biên độ 1.639,23–1.662,83.",
      "then": "Theo dõi sự cân bằng cung cầu và độ bền của nhóm dẫn dắt."
    },
    {
      "state": "risk_off",
      "if": "Chỉ số đóng cửa dưới 1.629,68.",
      "then": "Ghi nhận rủi ro suy yếu tiếp diễn và kiểm chứng với thanh khoản, độ rộng."
    }
  ],
  "focus": "Hồi kỹ thuật • thanh khoản giảm • độ rộng cải thiện • nền MA yếu",
  "inference": "Chế độ rút gọn; nền xu hướng chưa đánh giá đầy đủ. Không có Sổ gốc để kiểm chặn lịch sử, chưa hoàn tất lịch sự kiện, chuỗi phân phối, MA200, chuỗi ngoại khớp lệnh và phái sinh. Không xác nhận trạng thái giao dịch hay mốc vô hiệu; không đưa vùng mua/bán hoặc tỷ trọng tài khoản.",
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
      "label": "VNDIRECT — La bàn thị trường 27/11",
      "url": "https://www.vndirect.com.vn/la-ban-thi-truong-27-11-2026-vn-index-tang-15-nhom-dau-khi-dan-dat-da-hoi-phuc/"
    },
    {
      "label": "Thời báo Tài chính Việt Nam — phiên 27/11",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-27-11-vn-index-phuc-hoi-manh-khoi-ngoai-tro-lai-mua-rong-207649.html"
    },
    {
      "label": "VNIndex.ai — dữ liệu phiên 27/11",
      "url": "https://vnindex.ai/vn-index/phien/27-11-2026"
    },
    {
      "label": "VNIndex.ai — chuỗi giá đóng cửa",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "nmquan — chuỗi khớp lệnh cùng phương pháp",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "FILI — giao dịch khối ngoại và tự doanh 27/11",
      "url": "https://fili.vn/2026/11/theo-dau-dong-tien-ca-map-2711-khoi-ngoai-tro-lai-mua-rong-830-1518803.htm"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
