/* Bản nghiên cứu 25/11/2026 — nhánh rà soát, không đổi bố cục. */
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
  "sentimentLabel": "CHỜ XÁC MINH",
  "dataStatus": "Dữ liệu chỉ số đối chiếu HOSE, BSC và VNIndex.ai. Khớp toàn sàn HOSE lấy từ thông báo chính thức; chuỗi so sánh nmquan khác phương pháp, không ghép nguồn. Giá 136 mã chưa khóa ngày 25/11 tại thời điểm lập bản rà soát. Thiếu Sổ gốc, MA200 đã xác minh, chuỗi ngoại khớp và basis; lịch sự kiện chưa bao phủ đầy đủ.",
  "title": "VN-Index mất 1.700 điểm, độ rộng suy yếu, thanh khoản khớp thấp",
  "thesis": "VN-Index đóng cửa 1.687,45 điểm, giảm 9,69 điểm (−0,57%). Độ rộng theo phạm vi thống kê 84 tăng, 227 giảm, 53 đứng giá. HOSE công bố giá trị khớp toàn sàn 8.809 tỷ đồng, thỏa thuận 7.979 tỷ; chuỗi thống kê riêng của nmquan cho khớp 8.431,6 tỷ, bằng 0,736 lần trung bình 20 phiên trước của chính chuỗi đó. Giá dưới MA20 và MA50 đang phản ánh nền kỹ thuật yếu. Chưa khóa đủ dữ liệu để kết luận trạng thái tác nghiệp theo toàn bộ quy tắc V3.3.1.",
  "author": "Xuân Lê TVS",
  "role": "Nghiên cứu thị trường",
  "readingTime": "3 phút đọc",
  "brief": {
    "headline": "VN-Index mất 1.700 điểm, độ rộng suy yếu, thanh khoản khớp thấp",
    "thesis": "VN-Index đóng cửa 1.687,45 điểm, giảm 9,69 điểm (−0,57%). Độ rộng theo phạm vi thống kê 84 tăng, 227 giảm, 53 đứng giá. HOSE công bố giá trị khớp toàn sàn 8.809 tỷ đồng, thỏa thuận 7.979 tỷ; chuỗi thống kê riêng của nmquan cho khớp 8.431,6 tỷ, bằng 0,736 lần trung bình 20 phiên trước của chính chuỗi đó. Giá dưới MA20 và MA50 đang phản ánh nền kỹ thuật yếu. Chưa khóa đủ dữ liệu để kết luận trạng thái tác nghiệp theo toàn bộ quy tắc V3.3.1.",
    "evidence": [
      {
        "label": "Nền kỹ thuật",
        "signal": "YẾU",
        "detail": "MA20 1.723,85; MA50 1.743,76; MA20 giảm 16,64 điểm so với 5 phiên trước.",
        "tone": "negative"
      },
      {
        "label": "Khớp lệnh HOSE",
        "signal": "8.809 tỷ",
        "detail": "Số chính thức toàn sàn; chuỗi riêng nmquan 0,736×TB20.",
        "tone": "warning"
      },
      {
        "label": "Độ rộng thị trường",
        "signal": "84 tăng / 227 giảm",
        "detail": "53 đứng giá; VN30 −0,70%, VNMIDCAP −1,24%, VNSMALLCAP −0,89%.",
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
            "text": "53 đứng giá",
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
      "Kiểm tra sự đồng thuận giữa giá, độ rộng và khớp lệnh trước khi xác nhận nhịp phục hồi.",
      "Đối chiếu khối ngoại khớp riêng, không dùng tổng giao dịch thay thế.",
      "Chờ khóa dữ liệu giá cổ phiếu và bổ sung nhật ký sự kiện, Sổ gốc trước khi xác nhận trạng thái V3.3.1."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Bản nghiên cứu sơ bộ; khớp HOSE chính thức và chuỗi nmquan khác phạm vi/phương pháp; số liệu không được ghép. Chưa xác minh đủ chuỗi ngoại khớp, basis, lịch sự kiện và Sổ gốc.",
      "shortLabel": "EOD chỉ số • chờ khóa giá cổ phiếu"
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
      "change": "nmquan cùng gốc: 0,736×TB20",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "liquidity_below_average"
    },
    {
      "label": "ĐỘ RỘNG HOSE",
      "value": "84 tăng / 227 giảm",
      "change": "53 đứng giá",
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
          "text": "53 đứng giá",
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
    "Theo HOSE, VN30 giảm 0,70%, VNMIDCAP giảm 1,24% và VNSMALLCAP giảm 0,89%. Sự suy yếu xuất hiện ở nhiều nhóm vốn hóa, không chỉ một vài mã lớn.",
    "HOSE công bố 8.809 tỷ khớp và 7.979 tỷ thỏa thuận, tổng toàn thị trường 16.788 tỷ; giá trị giao dịch của VNINDEX là 16.091,20 tỷ. Không đánh đồng hai phạm vi. nmquan ghi 8.431,6 tỷ khớp, thấp hơn trung bình 20 phiên trước của chính nguồn đó là 11.452,58 tỷ.",
    "MA20 1.723,85; MA50 1.743,76; MA20 5 phiên trước 1.740,49. Dữ liệu đóng cửa cùng nguồn VNIndex.ai, tự tính; không có kết luận xác nhận MA200. Theo HOSE, năng lượng giảm 2,08%, công nghệ thông tin và nguyên vật liệu cùng giảm 1,55%.",
    "Độ rộng nguồn thống kê khác nhau; dùng 84/227/53 của phạm vi báo cáo nêu trên, không cộng ghép với tập 404 mã VNIndex.ai. Chưa xác nhận ngoại khớp riêng và basis. Không đưa điểm tổng hay kết luận chặn cứng khi chưa kiểm đủ sự kiện.",
    "BSC ghi nhận giá trị khớp lệnh rổ VN-Index 8.786 tỷ đồng, thấp hơn 23,4% so với bình quân 20 phiên theo phương pháp BSC. Con số này khác phạm vi khớp lệnh toàn HOSE 8.809 tỷ đồng. BSC ghi 87 mã tăng, 238 giảm, 82 đứng giá theo phạm vi báo cáo; không trộn với bộ số 84/227/53 của taichinh.com.",
    "BSC ghi nhận khối ngoại bán ròng 5.674,4 tỷ đồng theo tổng giao dịch HOSE. Không sử dụng số tổng này thay cho giao dịch khớp lệnh ròng."
  ],
  "levels": [
    {
      "label": "Mốc tâm lý",
      "value": "1.700",
      "note": "Mốc tròn; chỉ số kết phiên bên dưới."
    },
    {
      "label": "MA20",
      "value": "1.723,85",
      "note": "Tự tính từ 20 giá đóng cửa VNIndex.ai."
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
      "if": "Chỉ số phục hồi cùng độ rộng và khớp lệnh cải thiện.",
      "then": "Kiểm tra mức độ lan tỏa và chạy lại bộ chỉ báo."
    },
    {
      "state": "neutral",
      "if": "Chỉ số dao động, độ rộng và khớp lệnh chưa xác nhận.",
      "then": "Ghi nhận trạng thái chưa có xác nhận phục hồi."
    },
    {
      "state": "risk_off",
      "if": "Chỉ số tiếp tục giảm với độ rộng suy yếu.",
      "then": "Ghi nhận rủi ro tăng và kiểm tra lại dữ liệu, không suy diễn giá cổ phiếu."
    }
  ],
  "focus": "Nền kỹ thuật yếu • khớp lệnh dưới trung bình cùng nguồn • độ rộng tiêu cực • chưa khóa đủ dữ liệu V3.3.1",
  "inference": "Bản nghiên cứu sơ bộ, không phải tín hiệu giao dịch. Chưa hoàn tất khóa EOD cổ phiếu, lịch sự kiện và Sổ gốc; không xác nhận điểm tổng, chặn cứng, mốc vô hiệu hoặc R:R.",
  "sources": [
    {
      "label": "HOSE — Điểm tin giao dịch 25/11/2026",
      "url": "https://web.stockbiz.vn/News/2026/11/25/1927143/hose-diem-tin-giao-dich-ngay-25-11-2026.aspx"
    },
    {
      "label": "VNIndex.ai — lịch sử giá đóng cửa",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "nmquan — lịch sử khớp lệnh",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "Taichinh.com — độ rộng 25/11; nhãn ngày so sánh sai, không dùng nhãn đó",
      "url": "https://taichinh.com/chung-khoan"
    },
    {
      "label": "BSC — báo cáo thị trường 25/11, chỉ số và thanh khoản rổ VN-Index",
      "url": "https://www.bsc.com.vn/en/Report/ReportFile/16213"
    },
    {
      "label": "HNX — thông báo nghỉ giao dịch 24/11/2026",
      "url": "https://knowledge.hnx.vn/vi-vn/chi-tiet-lich-nghi-gd-60023839.html?_page=1"
    },
    {
      "label": "VOH — tổng bán ròng khối ngoại HOSE, 25/11",
      "url": "https://voh.com.vn/kinh-te/khoi-ngoai-ban-rong-ky-luc-gan-5-700-ty-dong-trong-phien-25-11-682274.html"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
