/* Báo cáo sau phiên 13/11/2026. Chỉ thêm dữ liệu, không sửa DOM, HTML hay CSS. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;
  const entry = {
  "id": "market-view-20261113",
  "date": "2026-11-13",
  "publishedAt": "13/11/2026 • Sau phiên",
  "edition": "Bản ngày 13/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 13/11 khóa 134/134 mã (130 trực tiếp CafeF, 4 ngoại lệ có KBS). VNINDEX 1.734,93/+0,01% đối chiếu VNIndex.ai, Stockbiz, VNDIRECT. KHỚP HOSE 9.757,8 tỷ (nmquan; Vietstock khoảng 9.770 tỷ); độ rộng 108 tăng/192 giảm/69 đứng (phạm vi cổ phiếu có khớp của nmquan, so trùng header Thời báo Tài chính). ĐẦY ĐỦ 5 chỉ số quy tắc, chưa có MA200; thiếu chuỗi ngoại KHỚP 5 phiên và Sổ gốc. ETF cơ cấu ngày 13/11 làm méo ATC.",
  "title": "Xanh điểm nhờ nhóm trụ, sức mua chưa đủ xác nhận",
  "thesis": "VN-Index đóng 1.734,93 điểm (+0,18; +0,01%) sau khi kiểm định đáy 1.724,03. Độ rộng HOSE chỉ cổ phiếu có khớp 108 tăng/192 giảm/69 đứng; VN30 tăng 0,30%, HNX giảm 0,64% và 12/20 nhóm ngành giảm. KHỚP HOSE 9.757,8 tỷ, tương ứng 0,781×TB20 (12.497,41 tỷ) theo 30 phiên cùng gốc; KHÔNG dùng tổng GD 15.138 tỷ có thỏa thuận. ETF cơ cấu ngày 13/11 có thể gây nhiễu ATC. Giá dưới MA20 1.736,40, MA50 1.759,23; MA20 dốc tăng 6,22 điểm/5 phiên nên nền TRUNG TÍNH theo Prompt (MA200 chưa xác minh). Còn 5 phiên phân phối/25 sau loại 15/10 đáo hạn, không tự kích hoạt chặn ≥6. Điểm −3/7 và chặn mềm xanh điểm đỏ mã: trạng thái KHÔNG mở vị thế mới (dòng 2), ưu tiên quản trị vốn và cổ phiếu đang nắm giữ.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "5 phút đọc",
  "brief": {
    "headline": "Giữ được điểm số nhưng sức mua chưa lan tỏa",
    "thesis": "VN-Index +0,01% lên 1.734,93, trong khi 192 mã giảm >108 mã tăng. KHỚP HOSE 9.757,8 tỷ, chỉ 0,781×TB20; ngày cơ cấu ETF làm nhiễu ATC. Giá dưới MA20 1.736,40 và MA50 1.759,23 dù MA20 còn dốc lên. Năm phân phối/25, điểm −3/7: KHÔNG mở mua mới; không coi thiếu MA200 và Sổ gốc là tín hiệu thị trường xấu.",
    "evidence": [
      {
        "label": "Xu hướng và cổng quyết định",
        "signal": "−3/7 • KHÔNG",
        "detail": "Dưới MA20/MA50 • nền TRUNG TÍNH • 5 phân phối/25",
        "tone": "negative",
        "signalParts": [
          {
            "text": "−3/7",
            "tone": "negative"
          },
          {
            "text": " • KHÔNG",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Dưới MA20/MA50",
            "tone": "negative"
          },
          {
            "text": " • nền trung tính",
            "tone": "neutral"
          }
        ]
      },
      {
        "label": "Thanh khoản khớp HOSE",
        "signal": "9.757,8 tỷ",
        "detail": "0,781× TB20 12.497,41 tỷ • ETF cơ cấu 13/11",
        "tone": "warning",
        "signalParts": [
          {
            "text": "9.757,8 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "0,781×TB20",
            "tone": "warning"
          },
          {
            "text": " • ATC có ETF",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng và sự phân hóa",
        "signal": "108 tăng / 192 giảm",
        "detail": "69 đứng giá • VN30 +0,30% / HNX −0,64%",
        "tone": "negative",
        "signalParts": [
          {
            "text": "108 tăng",
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
            "text": "VN30 +0,30%",
            "tone": "positive"
          },
          {
            "text": " • HNX −0,64%",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "Trạng thái KHÔNG theo dòng 2 (điểm −3/7): không tăng vị thế mới hoặc đòn bẩy; rà điểm dừng lỗ riêng. Tỷ trọng cổ phiếu định hướng ≤20% theo khung rủi ro, không bán tháo đồng loạt.",
      "NẾU hồi vượt 1.737,36 nhưng chưa vượt MA50 1.759,23 với độ rộng và khớp tốt hơn THÌ vẫn quan sát, không mua đuổi; chỉ xét lại khi cổng trạng thái chuyển CÓ và các chặn được kiểm đủ.",
      "NẾU đóng dưới đáy phiên 13/11 là 1.724,03 THÌ đánh giá rủi ro kiểm định 1.701,90 (đáy 09/11), ưu tiên xử lý những mã yếu chạm stop riêng; tuyệt đối không bình quân xuống."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Bộ lõi đã đối chiếu theo độ chính xác nguồn: 1.734,93 +0,01% đa nguồn, khớp 9.757,8 tỷ nmquan/Vietstock làm tròn, độ rộng 108/192/69 đúng cùng tập. MA20/50 và dốc từ 60 giá VNIndex.ai; TB20 khớp, phân phối từ 30 dòng nmquan, không trộn giá trị tổng. Đủ 5 điều kiện để ĐẦY ĐỦ; MA200, ngoại KHỚP 5 phiên và Sổ gốc chưa kiểm. ETF 13/11 ảnh hưởng ATC, lịch ETF khác còn giới hạn.",
      "shortLabel": "13/11 • 134/134 mã • 0,781×TB20 • −3/7"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.734,93",
      "change": "+0,18 • +0,01%",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "price_up"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "9.757,8 tỷ",
      "change": "0,781×TB20 • −5,88% so 12/11",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "liquidity_below_average",
      "changeParts": [
        {
          "text": "0,781×TB20",
          "tone": "warning"
        },
        {
          "text": " • −5,88% so 12/11",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "ĐỘ RỘNG HOSE (CHỈ CỔ PHIẾU CÓ KHỚP)",
      "value": "108 tăng / 192 giảm",
      "change": "69 đứng giá • rổ nmquan",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "108 tăng",
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
      ]
    },
    {
      "label": "XU HƯỚNG KỸ THUẬT",
      "value": "Dưới MA20 / dưới MA50",
      "change": "MA20 dốc lên +6,22 • 5 phân phối/25",
      "tone": "warning",
      "direction": "down",
      "snapshotState": "technical_negative",
      "valueParts": [
        {
          "text": "Dưới MA20",
          "tone": "negative"
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
    }
  ],
  "backdrop": [
    "VN-Index tăng 0,18 điểm (+0,01%) lên 1.734,93 sau phiên mở 1.727,31, cao 1.737,36, thấp 1.724,03. Giá đóng tại 81,77% biên độ từ đáy, trong 1/3 trên — không có dấu hiệu xả cuối theo vị trí đóng. Chỉ số hồi cuối ngày trong lúc ETF cơ cấu danh mục, không đồng nghĩa cầu bền vững.",
    "Theo bảng nmquan ngày 13/11, khớp lệnh HOSE (không thỏa thuận) 9.757,8 tỷ, giảm 5,88% so khớp 12/11 là 10.367,7 tỷ cùng gốc. TB20 của 20 phiên LIỀN TRƯỚC là 12.497,41 tỷ, hệ số 0,781. Stockbiz có tổng giao dịch 15.138 tỷ và VNIndex.ai 15,14 nghìn tỷ bao gồm thỏa thuận; hai số này không được đưa vào TB20. Vietstock độc lập báo khớp hơn 9.770 tỷ do cách làm tròn/phạm vi.",
    "Độ rộng theo nmquan chỉ cổ phiếu có giao dịch khớp: 108 tăng, 192 giảm, 69 tham chiếu, tỷ lệ 0,5625 nên chấm −1. Đầu trang Thời báo Tài chính cũng nêu 108/69/192. VNIndex.ai đếm 404 mã gồm chứng chỉ quỹ/ETF: 106/191/107; VNDIRECT Finfo ghi 100/189/69; các phạm vi khác nhau không được trộn.",
    "VN30 tăng 0,30% trong khi VN-Index chỉ +0,01% và HNX giảm 0,64%, cho thấy điểm số phụ thuộc một số cổ phiếu lớn hơn là sức mạnh thị trường. Vietstock xác nhận STB, VJC, TCB, VPB góp trên 2,27 điểm, trong khi toàn chỉ số chỉ tăng 0,18. Theo VNIndex.ai, năm mã STB +0,89, TCB +0,65, VJC +0,46, VPB +0,41, POW +0,28 kéo tăng tổng 2,69 điểm. Do biến động chỉ số nhỏ hơn 2 điểm, KHÔNG dùng tỷ lệ đóng góp top5 để chấm chất lượng dòng tiền, đúng mục 0.6.",
    "Stockbiz 13/11 ghi 12/20 ngành giảm. Viễn thông +0,99%, bảo hiểm +0,79%, ngân hàng +0,22%, công nghệ +0,36% là sức giá tương đối; FPT +1,11%, STB +3,34%, POW +3,57% là điểm sáng riêng, chưa xác minh được dòng tiền vào ròng toàn nhóm. Năng lượng −0,36%, dịch vụ tài chính −0,30%, bất động sản −0,08%, công nghiệp −0,69% kém tích cực. Không trộn phần trăm ngành của Vietstock và VNIndex.ai có hệ phân loại khác.",
    "Khối ngoại HOSE theo thống kê TỔNG gồm thỏa thuận được nmquan ghi mua ròng 337,5 tỷ; Vietstock ghi mua ròng 320,88 tỷ với phương pháp khác. Cả hai cùng chiều nhưng chưa có chuỗi khối ngoại KHỚP HOSE 5 phiên đồng phạm vi, nên yếu tố ngoại chấm 0; không dùng số tổng thay ngoại khớp.",
    "Hợp đồng VN30F1M đóng 1.851,0, VN30 1.844,91, basis +6,09 điểm tương đương +0,330% VN30, đã đối chiếu iWinStock và Stockbiz. iWinStock nêu đáo hạn 19/11, chưa khóa thêm bằng lịch HNX gốc. Không suy vĩ mô không rủi ro từ thiếu bài báo, nên yếu tố phái sinh/vĩ mô chấm 0 theo thận trọng.",
    "Từ 60 giá đóng cửa VNIndex.ai: MA20 1.736,40, MA50 1.759,23; MA20 cao hơn năm phiên trước 6,22 điểm. Xu hướng nền TRUNG TÍNH (không đủ TỐT, chưa đủ điều kiện XẤU khi MA20 dốc lên và MA200 chưa có). Từ 30 phiên khớp nmquan, các phiên phân phối 15/10,19/10,29/10,02/11,06/11,12/11: loại 15/10 do đáo hạn phái sinh, còn 5 phiên trong 25. Chặn ≥6 phân phối không còn đủ điều kiện theo chuỗi này; những chặn quá khứ khác từ Sổ gốc không thể kiểm khi người dùng chưa cung cấp Sổ. Lịch ETF khác cũng chưa được kiểm đầy đủ.",
    "Chấm 7 yếu tố: giá/MA −1, khớp phiên ETF 0, độ rộng −1, top5 0 do biên chỉ số dưới 2 điểm, ngoại khớp 0 vì thiếu chuỗi, phân phối −1 vì 5 phiên, phái sinh/vĩ mô 0 vì xác minh chưa đủ: tổng −3/7. Bước 1 KHÔNG dòng 2 (điểm≤−2), bước 2 nền TRUNG TÍNH trần CHỜ nên vẫn KHÔNG, bước 3 chống đảo chiều không có Sổ gốc nên bỏ qua. Cổng mềm từ xanh điểm đỏ mã và kháng cự gần chưa vượt, không mở mua mới.",
    "Ba kịch bản: TỐT (THẤP) khi đóng vượt đỉnh 13/11 1.737,36 rồi vượt MA50 1.759,23, khớp/độ rộng cải thiện và chặn được rà; CƠ SỞ (TRUNG BÌNH) giữ đáy 1.724,03 nhưng dưới MA50, giữ hàng còn nền tốt; XẤU (TRUNG BÌNH–CAO) đóng dưới 1.724,03, áp sát đáy 09/11 1.701,90 và mã yếu cần tuân thủ stop. Không ghi xác suất phần trăm."
  ],
  "levels": [
    {
      "label": "Hỗ trợ gần — đáy phiên 13/11",
      "value": "1.724,03",
      "note": "Đáy phiên 13/11 được VNIndex.ai và nmquan xác minh; mốc rủi ro để theo dõi, không phải stop cổ phiếu hay mốc vô hiệu Sổ gốc."
    },
    {
      "label": "Hỗ trợ kế — đáy phiên 09/11",
      "value": "1.701,90",
      "note": "Đáy phiên 09/11 từ bảng lịch sử VNIndex.ai và nmquan."
    },
    {
      "label": "Cản sát — MA20 và đỉnh 13/11",
      "value": "1.736,40 / 1.737,36",
      "note": "MA20 TỰ TÍNH từ 20 giá VNIndex.ai; đỉnh 13/11 đối chiếu đa nguồn."
    },
    {
      "label": "Cản kế — đỉnh 11/11",
      "value": "1.751,57",
      "note": "Đỉnh phiên 11/11 trong lịch sử nmquan và VNIndex.ai."
    },
    {
      "label": "Cản xu hướng — MA50",
      "value": "1.759,23",
      "note": "TỰ TÍNH từ 50 giá đóng trong cùng bảng VNIndex.ai; chưa thể nâng trạng thái chỉ vì chạm MA50."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "Kịch bản TỐT, khả năng THẤP: đóng vượt 1.737,36, rồi MA50 1.759,23, độ rộng tăng/giảm ít nhất 1,5 và khớp ≥1,2×TB20; phân phối và mọi chặn đã được kiểm.",
      "then": "TÍNH LẠI ba bước trạng thái; chỉ xem xét vùng mua khi có kết quả CÓ thật sự. Hiện tại KHÔNG phát sinh vùng mua mới."
    },
    {
      "state": "neutral",
      "if": "Kịch bản CƠ SỞ, khả năng TRUNG BÌNH: giữ trên đáy 13/11 là 1.724,03 nhưng chưa vượt MA50 1.759,23, thanh khoản tiếp tục dưới TB20.",
      "then": "Ưu tiên giữ các mã còn đúng cấu trúc theo stop riêng; không mở mới, không mua đuổi nhịp hồi từ ETF."
    },
    {
      "state": "risk_off",
      "if": "Kịch bản XẤU, khả năng TRUNG BÌNH–CAO: đóng dưới 1.724,03 và tiến tới kiểm định 1.701,90 với độ rộng yếu.",
      "then": "Đánh giá giảm các vị thế yếu hoặc đã chạm điểm dừng lỗ riêng; hạn chế đòn bẩy và không bình quân xuống."
    }
  ],
  "focus": "KHÔNG mở mua mới • VN-Index 1.734,93 • MA20 1.736,40/MA50 1.759,23 • hỗ trợ 1.724,03 và 1.701,90 • 0,781×TB20 • đỏ mã nhiều hơn xanh • ETF ATC",
  "inference": "Có dữ liệu ĐẦY ĐỦ 5 chỉ số bắt buộc từ các chuỗi một gốc cho từng phép tính, dù MA200 chưa có. Ngày ETF 13/11 cờ sự kiện, không chấm thanh khoản âm cơ học; mức thay đổi VN-Index chỉ 0,18 điểm nên KHÔNG tính tỷ lệ top 5. Năm phân phối/25 (sau loại 15/10 đáo hạn); các chặn cứng cũ không rà toàn diện vì không có Sổ gốc, không được coi là đã gỡ. Trạng thái cuối KHÔNG dòng 2 do −3/7, không do thiếu dữ liệu. Vùng mua mới và R:R chỉ số không áp dụng khi trạng thái KHÔNG và mốc vô hiệu Sổ gốc chưa có. Không thay vùng mua/stop/target của bất kỳ cổ phiếu nào.",
  "sources": [
    {
      "label": "nmquan — lịch sử KHỚP HOSE và độ rộng 30 phiên",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "VNIndex.ai — lịch sử 60 giá, đóng/cao/thấp/đóng góp 13/11",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "FILI/Vietstock — kết phiên 13/11 và khớp gần 9.770 tỷ",
      "url": "https://fili.vn/2026/11/nhip-dap-thi-truong-1311-ap-luc-tu-nhom-tru-ghim-chan-vn-index-dong-tien-phan-hoa-manh-theo-tin-doanh-nghiep-1636-1514517.htm"
    },
    {
      "label": "Stockbiz — VN30, bản đồ ngành và vốn hóa lớn",
      "url": "https://stockbiz.vn/thi-truong"
    },
    {
      "label": "iWinStock — VN30F1M 13/11 và lịch đáo hạn",
      "url": "https://www.iwinstock.com/derivatives/"
    },
    {
      "label": "Stockbiz/FireAnt — đối chiếu giá VN30F1M",
      "url": "https://stockbiz.vn/ma-chung-khoan/VN30F1M/giao-dich"
    },
    {
      "label": "Thời báo Tài chính/SSI Research — lịch cơ cấu ETF tháng 11",
      "url": "https://thoibaotaichinhvietnam.vn/cac-quy-etf-du-kien-giao-dich-gan-1-000-ty-dong-trong-ky-co-cau-thang-11-206639.html"
    },
    {
      "label": "MBS — bản tin phiên đáo hạn phái sinh 15/10",
      "url": "https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-15-10-2026-bien-dong-kho-luong-phien-dao-han/"
    },
    {
      "label": "Hồ sơ nguồn và giới hạn kiểm toán 13/11",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261113.md"
    }
  ]
};
  const i = store.entries.findIndex(item => item && item.id === entry.id);
  if (i >= 0) store.entries[i] = entry;
  else store.entries.unshift(entry);
  if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
