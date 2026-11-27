/* Bản nghiên cứu 26/11/2026 — bản nghiên cứu rút gọn, giữ nguyên bố cục. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261126",
  "date": "2026-11-26",
  "publishedAt": "26/11/2026 • Dữ liệu sau phiên",
  "edition": "Bản ngày 26/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "CHƯA ĐÁNH GIÁ",
  "dataStatus": "Dữ liệu đến hết 26/11/2026; HOSE công bố 16:52:20. Đã khóa và xuất bản giá 136/136 mã. Nghiên cứu rút gọn: chưa kiểm đủ lịch sự kiện và số phiên phân phối còn hiệu lực; thiếu Sổ gốc, MA200, chuỗi ngoại khớp lệnh. Khớp toàn HOSE theo Sở; chuỗi nmquan cùng phương pháp riêng. Không dùng số tổng khối ngoại thay cho khớp ròng.",
  "title": "VN-Index giảm 57,77 điểm: áp lực bán gia tăng, thanh khoản khớp lệnh tăng mạnh",
  "thesis": "VN-Index đóng cửa 1.629,68 điểm, giảm 57,77 điểm (3,42%), đúng mức thấp nhất phiên theo VNIndex.ai và nmquan. HOSE ghi nhận khớp lệnh 14.005 tỷ đồng, tăng 58,99% so với 8.809 tỷ phiên trước. Độ rộng 40 tăng, 273 giảm, 34 tham chiếu theo VNDIRECT và Thời báo Tài chính Việt Nam. Chỉ số dưới MA20 1.717,00 và MA50 1.740,15; rủi ro suy yếu được thể hiện cả ở điểm số, độ rộng lẫn thanh khoản.",
  "author": "Xuân Lê TVS",
  "role": "Nghiên cứu thị trường",
  "readingTime": "3 phút đọc",
  "brief": {
    "headline": "VN-Index giảm 57,77 điểm: áp lực bán gia tăng, thanh khoản khớp lệnh tăng mạnh",
    "thesis": "VN-Index đóng cửa 1.629,68 điểm, giảm 57,77 điểm (3,42%), đúng mức thấp nhất phiên theo VNIndex.ai và nmquan. HOSE ghi nhận khớp lệnh 14.005 tỷ đồng, tăng 58,99% so với 8.809 tỷ phiên trước. Độ rộng 40 tăng, 273 giảm, 34 tham chiếu theo VNDIRECT và Thời báo Tài chính Việt Nam. Chỉ số dưới MA20 1.717,00 và MA50 1.740,15; rủi ro suy yếu được thể hiện cả ở điểm số, độ rộng lẫn thanh khoản.",
    "evidence": [
      {
        "label": "Nền kỹ thuật",
        "signal": "Dưới MA20/MA50",
        "detail": "MA20 1.717,00; MA50 1.740,15; MA20 giảm 21,71 điểm so với 5 phiên trước.",
        "tone": "negative"
      },
      {
        "label": "Khớp lệnh HOSE",
        "signal": "14.005 tỷ",
        "detail": "Tăng 58,99% so với 25/11; nmquan cùng chuỗi 1,226 lần TB20.",
        "tone": "negative"
      },
      {
        "label": "Độ rộng thị trường",
        "signal": "40 tăng / 273 giảm",
        "detail": "34 tham chiếu; VN30 −2,79%, VNMIDCAP −3,29%, VNSMALLCAP −2,20%.",
        "tone": "negative",
        "signalParts": [
          {
            "text": "40 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "273 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "34 tham chiếu",
            "tone": "neutral"
          },
          {
            "text": "; VN30 −2,79%, VNMIDCAP −3,29%, VNSMALLCAP −2,20%.",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "Theo dõi mức độ lan tỏa của giá và thanh khoản khi đánh giá nhịp hồi.",
      "Phân biệt giao dịch khớp lệnh với thỏa thuận và biến động chỉ số với biến động cổ phiếu.",
      "Kiểm tra chuỗi phân phối và dữ liệu còn thiếu trước khi đưa ra kết luận trung hạn."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Dữ liệu đến hết 26/11/2026; HOSE công bố 16:52:20. Đã khóa và xuất bản giá 136/136 mã. Nghiên cứu rút gọn: chưa kiểm đủ lịch sự kiện và số phiên phân phối còn hiệu lực; thiếu Sổ gốc, MA200, chuỗi ngoại khớp lệnh. Khớp toàn HOSE theo Sở; chuỗi nmquan cùng phương pháp riêng. Không dùng số tổng khối ngoại thay cho khớp ròng.",
      "shortLabel": "EOD đã khóa 136/136 • nghiên cứu rút gọn"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.629,68",
      "change": "−57,77 • −3,42%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "14.005 tỷ",
      "change": "Tăng 58,99% so với phiên trước",
      "tone": "negative",
      "direction": "up",
      "snapshotState": "liquidity_above_average"
    },
    {
      "label": "ĐỘ RỘNG HOSE",
      "value": "40 tăng / 273 giảm",
      "change": "34 tham chiếu",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "40 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "273 giảm",
          "tone": "negative"
        }
      ],
      "changeParts": [
        {
          "text": "34 tham chiếu",
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
    "VN-Index giảm mạnh và đóng cửa ngay đáy phiên. Kết thúc ngày 26/11, chỉ số mất 57,77 điểm (3,42%), về 1.629,68 điểm. Khác với phiên trước, lần này giá giảm đi cùng thanh khoản khớp lệnh tăng rõ rệt.",
    "HOSE công bố giá trị khớp lệnh 14.005 tỷ đồng, tăng 58,99% so với phiên 25/11. Độ rộng theo VNDIRECT và Thời báo Tài chính Việt Nam ghi nhận 273 mã giảm, 40 mã tăng và 34 mã tham chiếu. Thanh khoản tăng trong một phiên giảm sâu phản ánh áp lực cung, chưa đủ để kết luận dòng tiền đang quay trở lại.",
    "Theo BSC, VIC là mã tác động giảm điểm lớn nhất. Tuy nhiên, diễn biến không chỉ nằm ở nhóm trụ: VN30 giảm 2,79%, nhóm vốn hóa vừa giảm 3,29% và nhóm vốn hóa nhỏ giảm 2,20%. Bộ chỉ số ngành HOSE cho thấy bất động sản giảm 5,37%, công nghiệp giảm 4,14% và công nghệ thông tin giảm 3,55%. Chưa có bằng chứng về một nhóm dẫn dắt đủ sức tạo cân bằng.",
    "Về kỹ thuật, chỉ số đã nằm dưới MA20 tại 1.717,00 và MA50 tại 1.740,15. Mốc tâm lý 1.650 cùng đỉnh phiên 1.677,93 là các tham chiếu quan sát nhịp hồi; đáy phiên 1.629,68 là tham chiếu đánh giá mức độ suy yếu. Một nhịp hồi điểm số cần được kiểm chứng bằng độ rộng và chất lượng thanh khoản, thay vì mặc định là đảo chiều.",
    "Chưa đủ chuỗi khối ngoại khớp lệnh, lịch sự kiện và Sổ dữ liệu gốc để hoàn tất đánh giá trung hạn. Việc phân biệt số liệu đã xác minh với các giả định là đặc biệt quan trọng trong những phiên biến động mạnh.",
    "Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định."
  ],
  "levels": [
    {
      "label": "Đáy phiên 26/11",
      "value": "1.629,68",
      "note": "VNIndex.ai và nmquan."
    },
    {
      "label": "Mốc tâm lý",
      "value": "1.650",
      "note": "Số tròn tham chiếu."
    },
    {
      "label": "Đỉnh phiên 26/11",
      "value": "1.677,93",
      "note": "VNIndex.ai và nmquan."
    },
    {
      "label": "MA20",
      "value": "1.717,00",
      "note": "Tự tính từ 20 giá đóng cửa VNIndex.ai."
    },
    {
      "label": "MA50",
      "value": "1.740,15",
      "note": "Tự tính từ 50 giá đóng cửa VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Chỉ số phục hồi trên 1.650 và độ rộng cải thiện.",
      "then": "Đánh giá chất lượng nhịp hồi so với thanh khoản và đỉnh phiên 26/11."
    },
    {
      "state": "neutral",
      "if": "Chỉ số dao động quanh vùng 1.629,68–1.650.",
      "then": "Quan sát cân bằng cung cầu; chưa xác nhận đảo chiều."
    },
    {
      "state": "risk_off",
      "if": "Chỉ số đóng cửa dưới đáy phiên 1.629,68.",
      "then": "Ghi nhận tín hiệu suy yếu tiếp diễn, đối chiếu độ rộng và thanh khoản."
    }
  ],
  "focus": "Giảm sâu • khớp lệnh tăng • đóng cửa tại đáy phiên",
  "inference": "Nghiên cứu rút gọn. Giá dưới MA20/MA50 và độ rộng tiêu cực là dữ kiện quan sát được; tỷ lệ đóng góp 5 mã giảm mạnh nhất theo BSC là 55,98% mức giảm. Chưa kiểm đủ lịch sự kiện, chuỗi phân phối và chặn lịch sử; không xác nhận trạng thái giao dịch, mốc vô hiệu hay tỷ trọng tài khoản.",
  "sources": [
    {
      "label": "HOSE — tổng hợp giao dịch 26/11, 16:52:20",
      "url": "https://web.stockbiz.vn/News/2026/11/26/1927505/hose-diem-tin-giao-dich-ngay-26-11-2026.aspx"
    },
    {
      "label": "BSC Research — bản tin 26/11",
      "url": "https://www.bsc.com.vn/bao-cao/16217-bsc-brief-26-11-thi-truong-giam-tren-dien-rong-rui-ro-dieu-chinh-chua-ket-thuc/"
    },
    {
      "label": "VNDIRECT — La bàn thị trường 26/11",
      "url": "https://www.vndirect.com.vn/https-www-vndirect-com-vn-vie_vietnam_daily_market_recap_november-26-1-pdf/"
    },
    {
      "label": "Thời báo Tài chính Việt Nam — phiên 26/11",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-26-11-ap-luc-ban-gia-tang-tren-dien-rong-vn-index-giam-207566.html"
    },
    {
      "label": "VNIndex.ai — dữ liệu phiên 26/11",
      "url": "https://vnindex.ai/vn-index/phien/26-11-2026"
    },
    {
      "label": "VNIndex.ai — chuỗi giá đóng cửa đến 26/11",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "nmquan — chuỗi giá trị khớp lệnh cùng phương pháp",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
