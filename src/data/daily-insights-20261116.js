/* Nhận định EOD 16/11/2026 — chỉ thêm dữ liệu, không sửa giao diện hoặc cấu trúc. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;
  const entry = {
  "id": "market-view-20261116",
  "date": "2026-11-16",
  "publishedAt": "16/11/2026 • Sau phiên",
  "edition": "Bản ngày 16/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 16/11 khóa 134/134 mã, 133/134 đóng cửa đối chiếu CafeF trực tiếp; MSR có nguồn thứ ba KBS. VNINDEX +0,11% đối chiếu HOSE/VNIndex.ai/VNDIRECT. HOSE thông cáo khớp 8.587 tỷ; nmquan 8.524,4 tỷ là gốc nhất quán tính TB20, chênh 62,6 tỷ chưa phân giải hoàn toàn. Độ rộng nmquan 102/220/51 (1 NGUỒN, chỉ cổ phiếu có khớp). ĐẦY ĐỦ 5 chỉ báo bắt buộc; chưa có MA200, ngoại KHỚP 5 phiên và Sổ gốc. Cổng nguồn đạt nhưng giữ nhãn giới hạn.",
  "title": "Chỉ số xanh nhờ trụ, phần lớn cổ phiếu vẫn yếu",
  "thesis": "VN-Index đóng 1.736,89 (+1,96 điểm; +0,11%), nhưng VN30 −0,04%, VNMID −1,21%, VNSML −0,99%. Độ rộng HOSE chỉ cổ phiếu có khớp theo nmquan là 102 tăng/220 giảm/51 đứng, tỷ lệ 0,464. Thanh khoản khớp cùng chuỗi nmquan đạt 8.524,4 tỷ, chỉ 0,682×TB20 là 12.491,04 tỷ; HOSE báo khớp 8.587 tỷ theo tổng hợp riêng. VIC, MCH và một vài trụ giữ chỉ số, trong khi phần lớn cổ phiếu không đồng thuận. Giá dưới MA20 1.738,75 và MA50 1.757,53; MA20 vẫn dốc lên +8,91 điểm/5 phiên, nền TRUNG TÍNH theo Prompt khi MA200 chưa có. Năm phiên phân phối/25 vẫn hiệu lực, không chạm cổng cứng ≥6. Điểm −4/7 => KHÔNG mở mua mới, ưu tiên bảo toàn vốn, không tăng đòn bẩy.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "5 phút đọc",
  "brief": {
    "headline": "Xanh điểm không đồng nghĩa có dòng tiền mua xác nhận",
    "thesis": "VN-Index +0,11% lên 1.736,89, nhưng có 220 mã giảm/102 mã tăng (phạm vi chỉ cổ phiếu HOSE có khớp). Khớp 8.524,4 tỷ theo chuỗi nmquan, bằng 0,682×TB20; HOSE thống kê khớp 8.587 tỷ, không trộn gốc. Giá dưới MA20 1.738,75 và MA50 1.757,53, MA20 còn dốc lên. Năm phiên phân phối/25 và điểm −4/7 => KHÔNG mở mua mới; nền TRUNG TÍNH, không suy xấu vì thiếu MA200.",
    "evidence": [
      {
        "label": "Xu hướng và quyết định",
        "signal": "−4/7 • KHÔNG",
        "detail": "MA20 1.738,75 / MA50 1.757,53 • 5 phân phối/25",
        "tone": "negative",
        "signalParts": [
          {
            "text": "−4/7",
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
            "text": " • MA20 vẫn dốc lên",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Thanh khoản khớp HOSE",
        "signal": "8.524,4 tỷ",
        "detail": "0,682×TB20 12.491,04 tỷ (cùng nmquan, 1 nguồn)",
        "tone": "negative",
        "signalParts": [
          {
            "text": "8.524,4 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "0,682×TB20",
            "tone": "negative"
          },
          {
            "text": " • 1 nguồn, không trộn thỏa thuận",
            "tone": "warning"
          }
        ]
      },
      {
        "label": "Độ rộng và lan tỏa",
        "signal": "102 tăng / 220 giảm",
        "detail": "51 đứng • VN30 −0,04% / VNMID −1,21%",
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
            "text": "220 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "VN30 −0,04%",
            "tone": "negative"
          },
          {
            "text": " • VNMID −1,21%",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở mua mới (bảng ĐẦY ĐỦ dòng 2, −4/7); không tăng margin. Rà mã yếu, ưu tiên hạ phần vi phạm stop riêng; tỷ trọng cổ phiếu định hướng không quá 20% theo Prompt, không bán tháo.",
      "NẾU chỉ số hồi qua MA20 1.738,75 nhưng chưa vượt đỉnh 16/11 là 1.753,01 và MA50 1.757,53 với khớp/độ rộng xác nhận THÌ vẫn CHỜ, chưa mở lệnh. Chỉ tính lại cổng khi đủ bằng chứng chuyển CÓ.",
      "NẾU đóng mất đáy phiên 16/11 là 1.733,71 THÌ rà ngay vị thế yếu, theo dõi hỗ trợ 1.724,03 rồi 1.701,90. Không bình quân giá xuống, tuân thủ điểm dừng lỗ từng cổ phiếu."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Số lõi: VNINDEX +0,11% đối chiếu HOSE/VNIndex.ai/VNDIRECT; HOSE khớp 8.587 tỷ, Vietstock hơn 8.500 tỷ; giá khớp chi tiết 8.524,4 tỷ cùng chuỗi nmquan là 1 NGUỒN, lệch 62,6 tỷ với HOSE. Độ rộng 102/220/51 chỉ 1 NGUỒN cùng phạm vi nmquan. MA20/50/dốc từ 60 giá VNIndex.ai; TB20/phân phối từ 30 dòng khớp nmquan. ĐẦY ĐỦ 5 chỉ báo; không có MA200, ngoại KHỚP 5 phiên, basis đáng tin và Sổ gốc.",
      "shortLabel": "EOD 16/11 • 134/134 mã • 0,682×TB20"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.736,89",
      "change": "+1,96 • +0,11%",
      "tone": "positive",
      "direction": "up",
      "snapshotState": "price_up"
    },
    {
      "label": "KHỚP LỆNH HOSE — GỐC TÍNH TB20",
      "value": "8.524,4 tỷ",
      "change": "0,682×TB20 • HOSE 8.587 tỷ (khác nguồn)",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "neutral",
      "changeParts": [
        {
          "text": "0,682×TB20",
          "tone": "negative"
        },
        {
          "text": " • HOSE 8.587 tỷ",
          "tone": "neutral"
        }
      ]
    },
    {
      "label": "ĐỘ RỘNG HOSE (CỔ PHIẾU CÓ KHỚP)",
      "value": "102 tăng / 220 giảm",
      "change": "51 đứng • 1 NGUỒN nmquan",
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
          "text": "220 giảm",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "VỊ THẾ KỸ THUẬT",
      "value": "Dưới MA20 / dưới MA50",
      "change": "MA20 dốc +8,91 điểm • 5 phân phối/25",
      "tone": "negative",
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
    "VN-Index tăng +1,96 điểm (+0,11%) lên 1.736,89, cao 1.753,01 và thấp 1.733,71. Giá đóng chỉ đạt 16,48% biên phiên tính từ đáy, thuộc 1/3 dưới — bên bán thắng thế cuối ngày. Dù vậy, khớp chỉ 0,682×TB20 nên không đủ kích hoạt chặn cứng xả cuối phiên theo định nghĩa Prompt.",
    "Bản tổng hợp HOSE 16/11 ghi khớp 8.587 tỷ và thỏa thuận 3.337 tỷ; nmquan ghi khớp 8.524,4 tỷ, thấp hơn HOSE 62,6 tỷ. Hai phạm vi/chuẩn hóa không được ghép để tính TB20. Để bảo toàn một gốc, 30 hàng nmquan ghi TB20 khớp của 20 phiên trước 12.491,04 tỷ; bội số 0,682; so khớp 13/11 cùng gốc 9.788,4 tỷ giảm 12,91%. Tổng giao dịch 11.923 tỷ theo HOSE không dùng thay KHỚP.",
    "Độ rộng cổ phiếu có giao dịch khớp theo nmquan: 102 tăng, 220 giảm, 51 đứng (tỷ lệ 0,464, yếu tố −1). VNDIRECT Finfo trên website đếm 97/216/51; VNIndex.ai đếm 100/217/87 cho rổ 404 mã; không trộn các tập khác nhau. VN30 −0,04%, VNMidcap −1,21% và VNSmallcap −0,99% theo HOSE: chỉ số tăng nhưng đa số cổ phiếu suy yếu.",
    "VNIndex.ai cho nhóm kéo tăng VIC +8,00, MCH +1,75, DMX +0,63, LPB +0,55, VHM +0,51 điểm. Vietstock nêu bốn mã đầu góp hơn 11,31 điểm theo phương pháp riêng. VNINDEX chỉ tăng ròng 1,96 điểm (<2), nên KHÔNG tính tỷ lệ top5/biến động chỉ số để chấm chất lượng, chỉ dùng làm mô tả hiện tượng gánh trụ. TCB −1,20, VCB −1,03, VPB −0,82 là các mã kéo xuống mạnh theo bảng VNIndex.ai.",
    "HOSE nhóm bất động sản VNREAL +1,34%, tiêu dùng VNCONS +1,06% nhờ một số mã trụ; nhóm tài chính VNFIN −0,84%, công nghiệp VNIND −1,56%, công nghệ VNIT −1,13% yếu. Vietstock ghi bất động sản +1,31% theo cách phân ngành khác. Không có chuỗi ngành gồm giá+khớp+ngoại cùng phương pháp nên không khẳng định tiền ròng vào/ra ngành.",
    "MA20 1.738,75 và MA50 1.757,53 tự tính từ đúng 60 giá đóng của VNIndex.ai (trong đó MA20 gồm 20 phiên 20/10–16/11, MA50 gồm 50 phiên 08/09–16/11). MA20 tăng 8,91 điểm so với 5 phiên trước, không dốc xuống. MA200 thiếu vì chỉ có 60 hàng. Theo Prompt, nền TRUNG TÍNH, trần CHỜ, chưa phải XẤU. Giá đã dưới cả MA20/MA50, yếu tố giá −1.",
    "Khớp HOSE +0,11% nhưng 0,682×TB20 nên yếu tố thanh khoản −1. Độ rộng 0,464 nên −1. Từ 25 phiên gần nhất, có sáu ứng viên phân phối 15/10, 19/10, 29/10, 02/11, 06/11, 12/11; 15/10 là phiên đáo hạn đã được MBS và lịch phái sinh xác nhận nên loại, còn 5 phiên hiệu lực (yếu tố phân phối −1). Giá 19/10 1.689,84 chỉ số cần 1.774,332 để xóa phân phối bằng +5%, trong khi đỉnh đóng sau đó là 1.774,15, chưa đạt; các ứng viên khác chưa hết hiệu lực.",
    "Khối ngoại HOSE tổng có thỏa thuận: HOSE báo mua ròng khoảng 21 tỷ, nmquan khoảng +10,2 tỷ; không được dùng thay khối ngoại KHỚP 5 phiên. Tự doanh tổng theo nmquan −33,7 tỷ (1 nguồn). Giá VN30F1M các nguồn không thống nhất: Stockbiz 1.855,1, Mofi 1.850,2, HNX trang giao dịch tổng hợp 1.851 nhưng không rõ ngày ở bảng đã mở; không dùng basis để cộng điểm. Lịch đáo hạn tháng 11 dự kiến 19/11, ngày 16 thuộc tuần đáo hạn; không gắn cờ ETF cơ cấu hôm nay khi không có chứng cứ giao dịch cơ cấu.",
    "Điểm theo Prompt 7 yếu tố: giá/MA −1, thanh khoản −1, độ rộng −1, chất lượng 0 vì thay đổi chỉ số dưới 2 điểm, ngoại KHỚP 0 chưa đủ chuỗi, phân phối −1 với 5 phiên, phái sinh/vĩ mô 0 do dữ liệu khác biệt/tuần đáo hạn. Tổng −4/7. Chặn mềm: xanh điểm/đỏ mã, thanh khoản yếu và giá sát kháng cự. Chặn cứng mới: xả cuối phiên không đạt do khớp <TB20; xanh điểm/đỏ mã kèm ≥1,2×TB20 không đạt; phân phối 5<6; ngoại + dưới MA50 và mốc vô hiệu lịch sử KHÔNG KIỂM ĐƯỢC do thiếu Sổ/ngoại KHỚP.",
    "Ba bước trạng thái: KHÔNG dòng 2 vì điểm −4≤−2 → áp trần nền TRUNG TÍNH vẫn KHÔNG → bỏ chống đảo chiều do không có Sổ gốc → KHÔNG dòng 2. Kịch bản tốt (THẤP) vượt 1.753,01/MA50 1.757,53 với khớp/độ rộng đồng thuận và chặn đã quét đủ; cơ sở (TRUNG BÌNH) giữ trên 1.733,71 nhưng dưới MA50; xấu (CAO) mất đáy 1.733,71, kiểm định 1.724,03 rồi 1.701,90. Không ghi phần trăm xác suất."
  ],
  "levels": [
    {
      "label": "Hỗ trợ gần — đáy 16/11",
      "value": "1.733,71",
      "note": "VNIndex.ai và nmquan cùng ghi đáy phiên 16/11. Đây là mốc quan sát, không phải mốc vô hiệu từ Sổ gốc."
    },
    {
      "label": "Hỗ trợ thấp hơn — đáy 13/11",
      "value": "1.724,03",
      "note": "Đáy phiên 13/11 từ nmquan và VNIndex.ai."
    },
    {
      "label": "Hỗ trợ mạnh — đáy 09/11",
      "value": "1.701,90",
      "note": "Đáy phiên 09/11 trong bảng nmquan."
    },
    {
      "label": "Kháng cự sát — MA20",
      "value": "1.738,75",
      "note": "TỰ TÍNH 20 đóng cửa 20/10–16/11 từ VNIndex.ai."
    },
    {
      "label": "Kháng cự — đỉnh 16/11",
      "value": "1.753,01",
      "note": "Đỉnh phiên 16/11, VNIndex.ai và nmquan cùng ghi."
    },
    {
      "label": "Kháng cự xu hướng — MA50",
      "value": "1.757,53",
      "note": "TỰ TÍNH từ 50 đóng cửa 08/09–16/11 cùng VNIndex.ai; chưa vượt."
    }
  ],
  "playbook": [
    {
      "if": "TỐT — khả năng THẤP: đóng trên 1.753,01 và MA50 1.757,53; khớp ≥1,2×TB20, tỷ lệ tăng/giảm ≥1,5, phân phối còn ≤4 và các cổng chặn được kiểm đủ.",
      "then": "Chạy lại toàn bộ điều kiện và chỉ cân nhắc mở mua khi trạng thái chuyển CÓ, chưa tự đặt vùng mua mới."
    },
    {
      "if": "CƠ SỞ — khả năng TRUNG BÌNH: vẫn giữ trên đáy phiên 16/11 là 1.733,71 nhưng hồi dưới MA50 1.757,53 và khớp dưới TB20.",
      "then": "Giữ các mã thật sự khỏe với mốc dừng lỗ riêng, ưu tiên hạ các mã yếu, không mua đuổi trụ và không tăng đòn bẩy."
    },
    {
      "if": "XẤU — khả năng CAO: đóng dưới 1.733,71, sau đó kiểm định vùng đáy 13/11 1.724,03 hoặc 09/11 1.701,90 cùng độ rộng tiếp tục xấu.",
      "then": "Phòng thủ, thực hiện cắt giảm vị thế đã vi phạm stop riêng, không bình quân giá xuống; không bán đồng loạt khi chưa chạm quy tắc mã."
    }
  ],
  "focus": "KHÔNG mở mua mới • 1.733,71 / 1.724,03 hỗ trợ • 1.738,75 / 1.753,01 / 1.757,53 kháng cự • khớp 0,682×TB20 • 5 phân phối",
  "inference": "Chế độ ĐẦY ĐỦ vì đủ MA20/50, dốc MA20/5, TB20 và phân phối từ hai chuỗi một gốc cho từng phép tính; MA200 thiếu nhưng không quyết định chế độ. Nền TRUNG TÍNH theo công thức, không tự đánh giá XẤU khi MA20 dốc lên và chưa có MA200. Điểm −4/7 tạo trạng thái KHÔNG dòng2, không phải do dữ liệu thiếu. Không có Sổ gốc và chuỗi ngoại KHỚP nên không coi chặn cứng lịch sử đã gỡ. Không áp dụng R:R chỉ số hoặc vùng mua mới; dùng stoploss riêng theo cấu trúc từng cổ phiếu.",
  "sources": [
    {
      "label": "HOSE — tổng hợp chỉ số, khớp lệnh và ngành 16/11",
      "url": "https://cafefnew.mediacdn.vn/download/161126/hose-iem-tin-giao-dich-ngay-16-11-2026-0.pdf"
    },
    {
      "label": "nmquan — 30 phiên giá, KHỚP và độ rộng đồng phương pháp",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "VNIndex.ai — 60 giá đóng, vùng giá và điểm trụ 16/11",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "Vietstock/FILI — diễn biến sau phiên 16/11, xác minh dòng tiền",
      "url": "https://fili.vn/2026/11/nhip-dap-thi-truong-1611-thanh-khoan-tiep-tuc-can-kiet-vn-index-van-trong-the-giang-co-1636-1515036.htm"
    },
    {
      "label": "Tài chính.com — VN30, VNMidcap và VNIndex",
      "url": "https://taichinh.com/chung-khoan"
    },
    {
      "label": "MBS — đối chiếu phiên đáo hạn phái sinh 15/10",
      "url": "https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-16-10-2026-kho-khan-van-deo-bam/"
    },
    {
      "label": "Hồ sơ kiểm toán và giới hạn 16/11",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261116.md"
    }
  ]
};
  const i = store.entries.findIndex(item => item && item.id === entry.id);
  if (i >= 0) store.entries[i] = entry;
  else store.entries.unshift(entry);
  if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
