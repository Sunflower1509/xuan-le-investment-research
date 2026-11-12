/* Nhận định 12/11/2026 — chỉ bổ sung dữ liệu, giữ nguyên giao diện. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261112",
  "date": "2026-11-12",
  "publishedAt": "12/11/2026 • Sau phiên",
  "edition": "Bản ngày 12/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 12/11 đã khóa 134/134 mã: 131 giá đóng đối chiếu trực tiếp CafeF; MSR, OIL, VGI đối chiếu nguồn thứ ba. VN-Index 1.734,75/−0,70% đối chiếu VNIndex.ai/Stockbiz/Finfo. KHỚP HOSE 10.329,4 tỷ và độ rộng HOSE 102/203/66 cùng phạm vi nmquan chỉ 1 NGUỒN; không trộn tổng giao dịch có thỏa thuận hoặc rổ khác. CHẾ ĐỘ RÚT GỌN: MA50 thiếu, MA200 chưa có, ngoại KHỚP 5 phiên/Sổ gốc chưa kiểm được.",
  "title": "Áp lực bán lan rộng, dòng tiền phòng thủ dù thanh khoản không bùng",
  "thesis": "VN-Index phiên 12/11 đóng 1.734,75, giảm 12,15 điểm (−0,70%). VN30 giảm 0,85%, độ rộng HOSE theo rổ chỉ cổ phiếu có khớp của nmquan nghiêng hẳn bên giảm: 102 tăng/203 giảm/66 đứng. Khớp lệnh toàn HOSE 10.329,4 tỷ đồng, chỉ 0,815 lần trung bình 20 phiên trước 12.680,14 tỷ; không dùng tổng giao dịch gồm thỏa thuận. Chỉ số đóng dưới MA20 1.734,95, dù MA20 vẫn dốc lên 4,28 điểm/5 phiên. Theo chuỗi 30 phiên đơn nguồn đã kiểm, có 6 phiên phân phối còn hiệu lực sau khi loại phiên đáo hạn 15/10, kích hoạt chặn cứng. Bảy yếu tố cho điểm −2/7, trạng thái KHÔNG; giữ kỷ luật rủi ro và không mở mua mới. MA50, MA200 và Sổ gốc chưa đủ: đây là giới hạn dữ liệu, không phải tín hiệu bán tự thân.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "5 phút đọc",
  "brief": {
    "headline": "Áp lực bán lan rộng, ưu tiên phòng thủ",
    "thesis": "VN-Index 1.734,75 (−12,15; −0,70%); VN30 −0,85%. Độ rộng HOSE 102 tăng/203 giảm/66 đứng theo bảng chỉ cổ phiếu có khớp; thanh khoản khớp 10.329,4 tỷ = 0,815×TB20, không phải xả đột biến trong riêng phiên này. Đóng dưới MA20 1.734,95; 6 phiên phân phối/25 còn hiệu lực (đã loại 15/10 đáo hạn). Điểm −2/7, RÚT GỌN R1: KHÔNG mở mua mới.",
    "evidence": [
      {
        "label": "Xu hướng và chặn cứng",
        "signal": "6 phiên phân phối / 25",
        "detail": "MA20 1.734,95 • giá đóng 1.734,75 • nền chưa đánh giá",
        "tone": "negative",
        "signalParts": [
          {
            "text": "6 phiên phân phối / 25",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Dưới MA20",
            "tone": "negative"
          },
          {
            "text": " • thiếu MA50",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Thanh khoản khớp HOSE",
        "signal": "10.329,4 tỷ",
        "detail": "0,815× TB20 khớp 12.680,14 tỷ • 1 NGUỒN",
        "tone": "warning",
        "signalParts": [
          {
            "text": "10.329,4 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "0,815×TB20",
            "tone": "warning"
          },
          {
            "text": " • chỉ 1 nguồn",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng và lan tỏa",
        "signal": "102 tăng / 203 giảm",
        "detail": "66 đứng giá • VN30 −0,85% • 15/20 ngành giảm",
        "tone": "negative",
        "signalParts": [
          {
            "text": "102 tăng",
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
            "text": "VN30 −0,85%",
            "tone": "negative"
          },
          {
            "text": " • 15/20 ngành giảm",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở vị thế mới theo R1 (chặn phân phối), không tăng đòn bẩy. Chỉ giữ các mã thật sự khỏe chưa vi phạm điểm dừng lỗ riêng; ưu tiên cắt giảm phần yếu, tỷ trọng cổ phiếu định hướng không quá 20% theo chính sách Prompt; không bán tháo máy móc.",
      "NẾU chỉ số hồi nhưng chưa vượt đỉnh phiên 12/11 là 1.746,82, THÌ xem là hồi kiểm tra, không mua đuổi. Chỉ tính lại trạng thái khi vượt 1.746,82/1.751,57 kèm độ rộng và thanh khoản xác nhận, số phân phối còn ≤5 và không chặn khác.",
      "NẾU đóng dưới đáy phiên 12/11 là 1.731,91, THÌ rà ngay các cổ phiếu yếu, giữ kỷ luật cắt lỗ riêng; hỗ trợ kế tiếp từ đáy 09/11 là 1.701,90. Không bình quân xuống."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Cổng dữ liệu ĐẠT có giới hạn: giá/% được đối chiếu đa nguồn; giá trị KHỚP và độ rộng chỉ 1 NGUỒN vì các nguồn khác dùng phạm vi khác. Từ 30 phiên cùng nmquan tính MA20, dốc MA20, TB20 và phân phối; thiếu MA50/MA200, ngoại KHỚP 5 phiên, Sổ gốc, lịch ETF đủ; mốc và hành động không tự nội suy.",
      "shortLabel": "12/11 • 134/134 EOD • RÚT GỌN"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.734,75",
      "change": "−12,15 • −0,70%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "10.329,4 tỷ",
      "change": "0,815×TB20 • 1 NGUỒN",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "liquidity_below_average"
    },
    {
      "label": "ĐỘ RỘNG HOSE (CHỈ CỔ PHIẾU CÓ KHỚP)",
      "value": "102 tăng / 203 giảm",
      "change": "66 đứng giá • rổ nmquan, 1 NGUỒN",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative"
    },
    {
      "label": "PHÂN PHỐI / XU HƯỚNG",
      "value": "6 phiên / 25",
      "change": "CHẶN CỨNG • MA20 1.734,95",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index đóng 1.734,75 điểm (−12,15, −0,70%); mở cửa 1.746,70, cao 1.746,82, thấp 1.731,91. Giá đóng nằm ở 19,05% biên độ từ đáy, thuộc 1/3 dưới; nhưng khớp chỉ 0,815×TB20 nên không kích hoạt chặn xả cuối phiên theo Prompt. VN30 giảm −0,85% về 1.839,43; HNX tăng +0,35% về 256,62.",
    "Khớp lệnh toàn HOSE 10.329,4 tỷ theo bảng nmquan (gồm cổ phiếu/ETF/CCQ, không thỏa thuận). Tổng giao dịch HOSE theo cùng bảng 15.120,4 tỷ, có 4.791,0 tỷ thỏa thuận; Stockbiz và VNIndex.ai báo tổng khác nhau do phạm vi/giờ chốt, không thay thế KHỚP. Từ 20 phiên khớp liền trước, TB20=12.680,14 tỷ; bội số hiện tại 0,815. Chỉ có 1 nguồn chính xác cùng phạm vi, không nâng nhãn đối chiếu.",
    "Độ rộng theo cùng phương pháp nmquan chỉ cổ phiếu có giao dịch khớp: 102 tăng, 203 giảm, 66 đứng giá; tỷ lệ 0,502, chấm −1. VNIndex.ai tính 404 mã 102/201/101, Finfo trên website đếm 94/199/65 theo phạm vi khác; không trộn ba rổ.",
    "Trong bảng 30 phiên từ 02/10–12/11, đúng 7 phiên có giá giảm ≥0,2% và khớp lớn hơn phiên trước: 09/10, 15/10, 19/10, 29/10, 02/11, 06/11, 12/11. Loại 15/10 vì đáo hạn phái sinh đã xác minh qua iWinStock/MBS; còn 6 phiên phân phối, chưa có phiên nào hết hiệu lực do 25 phiên hoặc nhịp đóng tăng ≥5%. Lịch ETF khác chưa kiểm được toàn diện và sẽ phải đính chính nếu có thông báo cơ cấu áp dụng; kết quả hiện dựa trên cờ sự kiện đã có nguồn.",
    "MA20 từ 20 giá đóng cùng bảng nmquan =1.734,95, dốc 5 phiên +4,28. MA50 và MA200 chưa tính vì nguồn chỉ hiển thị 30 phiên. Nền xu hướng CHƯA ĐÁNH GIÁ, CHẾ ĐỘ RÚT GỌN; đây là giới hạn dữ liệu, không phải bằng chứng thị trường tự xấu. Điểm bảy yếu tố: giá/MA 0; thanh khoản 0 (phiên giảm 0,815×TB20); độ rộng −1; chất lượng 0 vì top5 giảm góp 6,16/12,15=50,70%, không ≤50%; ngoại KHỚP 0 thiếu chuỗi; phân phối −1 (6 phiên); phái sinh/vĩ mô 0 thiếu đối chiếu. Tổng −2/7.",
    "Nhóm ngành theo Stockbiz: 15/20 nhóm giảm, dịch vụ tài chính −1,27%, ngân hàng −0,60%, bất động sản −0,64%, công nghệ −2,30%. Năng lượng +0,74% và xây dựng/vật liệu +0,29% còn có sức giá riêng; BSR, PLX góp điểm hỗ trợ nhưng chưa đủ dữ liệu khớp và khối ngoại theo cả nhóm để gọi tiền vào bền vững. Top 5 mã đè chỉ số theo VNIndex.ai: VIC −3,52, VPB −0,82, TCB −0,66, GAS −0,60, BID −0,56 điểm — chỉ một nguồn cho điểm cụ thể.",
    "Khối ngoại theo nmquan tổng cả thỏa thuận bán ròng khoảng 857,2 tỷ, trong khi VNIndex.ai ước tính khoảng 880 tỷ theo giá; không dùng tổng thay KHỚP HOSE/chuỗi 5 phiên. Tự doanh HOSE và basis theo HNX đúng phiên chưa khóa đủ; không tạo thêm tín hiệu bằng nội suy.",
    "Cổng chặn cứng ≥6 phiên phân phối được kích hoạt trong phạm vi lịch đã kiểm. Trạng thái thô KHÔNG theo R1, sau trần nền CHƯA ĐÁNH GIÁ vẫn KHÔNG, chống đảo chiều bỏ qua do không có Sổ gốc. Không mua mới. Lịch sự kiện ETF và mốc vô hiệu từ Sổ gốc vẫn chưa kiểm được, không tuyên bố đã gỡ.",
    "Kịch bản tốt (THẤP): vượt 1.746,82 và 1.751,57, độ rộng/khớp đồng thuận, số phiên phân phối còn ≤5 và quét lại cổng. Cơ sở (TRUNG BÌNH): xoay quanh MA20 1.734,95, hồi yếu dưới kháng cự; chỉ quản trị mã đang giữ. Xấu (CAO): mất đáy phiên 1.731,91, kiểm định hỗ trợ 1.701,90 (đáy 09/11), cần hạ phần yếu, không bình quân xuống. Không ghi phần trăm xác suất."
  ],
  "levels": [
    {
      "label": "Hỗ trợ kỹ thuật MA20",
      "value": "1.734,95",
      "note": "TỰ TÍNH 20 giá đóng 16/10–12/11 cùng nmquan; 12/11 đóng ở 1.734,75 thấp hơn MA20."
    },
    {
      "label": "Đáy phiên 12/11 / xác nhận rủi ro",
      "value": "1.731,91",
      "note": "Đáy phiên 12/11 xác minh ở VNIndex.ai và nmquan; điều kiện đóng dưới làm tăng cảnh báo. Không tự coi là mốc vô hiệu đang hiệu lực của Sổ gốc."
    },
    {
      "label": "Hỗ trợ kế tiếp",
      "value": "1.701,90",
      "note": "Đáy 09/11 xác minh trên bảng lịch sử nmquan và VNIndex.ai."
    },
    {
      "label": "Kháng cự gần",
      "value": "1.746,82",
      "note": "Đỉnh phiên 12/11 từ VNIndex.ai và nmquan."
    },
    {
      "label": "Kháng cự kế",
      "value": "1.751,57",
      "note": "Đỉnh phiên 11/11 từ nmquan và hồ sơ nguồn ngày 11/11. Vượt giá thôi chưa được tự nâng lên CÓ."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Kịch bản TỐT, khả năng THẤP: đóng vượt 1.746,82, sau đó 1.751,57 cùng độ rộng tốt hơn, khớp cải thiện và phân phối đã giảm về ≤5.",
      "then": "CHỈ TÍNH LẠI cổng dữ liệu và trạng thái; chưa có vùng mua mới khi trạng thái vẫn KHÔNG."
    },
    {
      "state": "neutral",
      "if": "Kịch bản CƠ SỞ, khả năng TRUNG BÌNH: dao động quanh MA20 1.734,95 nhưng chưa lấy lại 1.746,82, thanh khoản dưới TB20.",
      "then": "GIỮ mã khỏe có stop riêng, không mua đuổi hay tăng tỷ trọng; tiếp tục ưu tiên bảo toàn vốn."
    },
    {
      "state": "risk_off",
      "if": "Kịch bản XẤU, khả năng CAO: đóng dưới đáy 12/11 là 1.731,91 và xác nhận áp lực về đáy 09/11 là 1.701,90.",
      "then": "PHÒNG THỦ; rà cổ phiếu yếu chạm điểm dừng lỗ riêng, giảm đòn bẩy, không bình quân giảm."
    }
  ],
  "focus": "KHÔNG mở mua mới • 6 phân phối/25 • hỗ trợ 1.734,95 / 1.731,91 • kháng cự 1.746,82 / 1.751,57 • rủi ro 1.701,90 • khớp thật 0,815×TB20",
  "inference": "Nguồn một gốc nmquan có 30 phiên, cột khớp HOSE rõ phạm vi; MA50 và MA200 chưa đủ chuỗi nên CHẾ ĐỘ RÚT GỌN, nền CHƯA ĐÁNH GIÁ. Có 6 phân phối sau loại 15/10 đáo hạn, theo những cờ sự kiện đã xác minh, kích hoạt R1 KHÔNG; chưa có Sổ gốc nên chặn cứng quá khứ không kiểm được. R:R của chỉ số không áp dụng vì mốc vô hiệu đang hiệu lực từ Sổ chưa có. Để trống ngoại KHỚP/tự doanh/ETF chưa xác minh, không tự bịa mốc hay vùng mua.",
  "sources": [
    {
      "label": "nmquan — lịch sử 30 phiên, giá trị KHỚP HOSE, độ rộng (1 nguồn)",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "VNIndex.ai — xác nhận đóng/cao/thấp và nhóm trụ 12/11",
      "url": "https://vnindex.ai/vn-index/phien/12-11-2026"
    },
    {
      "label": "Stockbiz — xác nhận VNINDEX, VN30 và bản đồ ngành ngày 12/11",
      "url": "https://stockbiz.vn/thi-truong"
    },
    {
      "label": "iWinStock — lịch sử đáo hạn 15/10",
      "url": "https://www.iwinstock.com/derivatives/"
    },
    {
      "label": "MBS — bản tin phái sinh xác nhận 15/10 là phiên đáo hạn",
      "url": "https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-15-10-2026-bien-dong-kho-luong-phien-dao-han/"
    },
    {
      "label": "Hồ sơ nguồn nội bộ 12/11",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261112.md"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
