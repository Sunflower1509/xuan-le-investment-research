/* Nhận định EOD 20/11/2026: chỉ bổ sung dữ liệu vào khuôn hiện có, không thay HTML/CSS hoặc chính sách dừng lỗ. */
(function () {
 const store = window.DAILY_MARKET_INSIGHTS;
 if (!store || !Array.isArray(store.entries)) return;
 const entry = {
  "id": "market-view-20261120",
  "date": "2026-11-20",
  "publishedAt": "20/11/2026 • Sau phiên",
  "edition": "Bản ngày 20/11",
  "rulebookVersion": "v3.3.1",
  "sentiment": "cautious",
  "sentimentLabel": "KHÔNG",
  "dataStatus": "EOD 20/11 khóa 136/136 mã, 134 giá CafeF trùng VNDIRECT trực tiếp; ABB/VGI được KBS đối chiếu. VN-Index 1.688,79 (−0,05%) HOSE/VNIndex.ai/VNDIRECT; HOSE khớp toàn sàn 10.809 tỷ (1 NGUỒN chi tiết), nmquan chuỗi 30 ngày cho ngày 20/11 10.667,7 tỷ (khác chuẩn hóa, không ghép khi tính). Độ rộng cổ phiếu HOSE VNDIRECT 91 tăng/206 giảm/65 đứng được đối chiếu Thời báo Tài chính. Chế độ ĐẦY ĐỦ: MA20/50/dốc từ 60 giá VNIndex.ai, TB20/phân phối từ 30 hàng KHỚP nmquan đồng phương pháp. 7 phiên phân phối còn hiệu lực/25 kích hoạt CHẶN CỨNG; thiếu MA200, chuỗi ngoại KHỚP và Sổ gốc.",
  "title": "Chỉ số gần như đứng yên, nhưng bảy phiên phân phối chưa được giải tỏa",
  "thesis": "Phiên 20/11 VN-Index đóng 1.688,79 điểm, −0,83 điểm (−0,05%), hồi mạnh từ đáy phiên 1.666,41. Màu chỉ số gần tham chiếu không đại diện phần lớn cổ phiếu: HOSE theo VNDIRECT có 91 tăng/206 giảm/65 đứng. VN30 −0,09%, VNMID −0,65%, VNSML −0,56%. HOSE ghi khớp toàn sàn 10.809 tỷ đồng, không gồm 5.253 tỷ thỏa thuận; nmquan thống kê 10.667,7 tỷ cùng bảng lịch sử 30 phiên, cho bội số 0,906×TB20 (11.779,57 tỷ) khi tính nhất quán một nguồn. VN-Index dưới MA20 1.730,89 và MA50 1.748,05, MA20 dốc xuống −5,51 điểm/5 phiên. Bảy phân phối/25 (19/10,29/10,02/11,06/11,12/11,17/11,18/11) còn hiệu lực, kích hoạt chặn cứng ≥6. Điểm −3/7; nền XẤU, trạng thái KHÔNG theo dòng 1 ĐẦY ĐỦ. Giảm phần yếu theo dừng lỗ mã, không tăng đòn bẩy hoặc bắt đáy thiếu xác nhận.",
  "author": "Xuân Lê TVS",
  "role": "Môi giới và tư vấn đầu tư",
  "readingTime": "6 phút đọc",
  "brief": {
    "headline": "Nhịp hồi cuối phiên chưa xóa được sức ép phân phối",
    "thesis": "VN-Index 1.688,79 (−0,83; −0,05%), HOSE 91 tăng/206 giảm/65 đứng theo VNDIRECT. HOSE khớp 10.809 tỷ toàn sàn, khác nmquan 10.667,7 tỷ chuẩn chuỗi; bội số cùng nmquan =0,906×TB20 11.779,57 tỷ. Dưới MA20 1.730,89/MA50 1.748,05; dốc MA20 −5,51. 7 phiên phân phối còn hiệu lực/25 ⇒ CHẶN CỨNG, nền XẤU; điểm −3/7, KHÔNG mở mua mới theo dòng 1.",
    "evidence": [
      {
        "label": "Xu hướng và quyết định",
        "signal": "−3/7 • KHÔNG",
        "detail": "ĐẦY ĐỦ • Nền XẤU • 7 phân phối / 25 phiên",
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
            "text": "7 phiên phân phối",
            "tone": "negative"
          },
          {
            "text": " • chặn cứng",
            "tone": "negative"
          }
        ]
      },
      {
        "label": "Khớp lệnh HOSE và tỷ lệ cùng gốc",
        "signal": "10.809 tỷ",
        "detail": "HOSE toàn sàn • nmquan 10.667,7 tỷ = 0,906×TB20 cùng nguồn",
        "tone": "warning",
        "signalParts": [
          {
            "text": "10.809 tỷ",
            "tone": "neutral"
          }
        ],
        "detailParts": [
          {
            "text": "HOSE 1 NGUỒN chi tiết",
            "tone": "warning"
          },
          {
            "text": " • bội số theo chuỗi riêng",
            "tone": "neutral"
          }
        ]
      },
      {
        "label": "Độ rộng và trung bình động",
        "signal": "91 tăng / 206 giảm",
        "detail": "65 đứng giá • MA20 1.730,89 / MA50 1.748,05",
        "tone": "negative",
        "signalParts": [
          {
            "text": "91 tăng",
            "tone": "positive"
          },
          {
            "text": " / ",
            "tone": "neutral"
          },
          {
            "text": "206 giảm",
            "tone": "negative"
          }
        ],
        "detailParts": [
          {
            "text": "Độ rộng 0,442",
            "tone": "negative"
          },
          {
            "text": " • dưới MA20 và MA50",
            "tone": "negative"
          }
        ]
      }
    ],
    "actions": [
      "KHÔNG mở mua mới (ĐẦY ĐỦ dòng 1 vì chặn cứng 7 phân phối, −3/7), không tăng margin. Rà mã đã mất nền hoặc vi phạm mốc dừng lỗ riêng. Tỷ trọng cổ phiếu định hướng tối đa 20% theo Prompt, không bán tháo đồng loạt.",
      "NẾU VN-Index giữ trên đáy 20/11 là 1.666,41 nhưng chưa lấy lại 1.689,62–1.700,00 THÌ chỉ quản lý các vị thế còn khỏe, chờ xác nhận thực chất. NẾU vượt 1.700 rồi MA20 1.730,89 cùng độ rộng/khớp tăng và phân phối hiệu lực giảm xuống ≤5 THÌ mới tính lại trạng thái, không tự mở mua.",
      "NẾU đóng cửa dưới 1.666,41 với độ rộng tiếp tục xấu THÌ ưu tiên xử lý các mã chạm điểm dừng lỗ riêng, giảm phần yếu theo kỷ luật; không bình quân giá xuống."
    ],
    "dataIntegrity": {
      "tone": "warning",
      "label": "Số lõi đóng/% HOSE/VNIndex.ai/VNDIRECT, độ rộng cổ phiếu HOSE 91/206/65 VNDIRECT và Thời báo Tài chính. Khớp toàn HOSE chính xác 10.809 tỷ có 1 NGUỒN HOSE; nmquan 10.667,7 tỷ theo bảng riêng, lệch 141,3 tỷ chưa phân xử; chỉ dùng cùng chuỗi nmquan 30 hàng để tính TB20 11.779,57, bội số 0,906 và 7 phân phối/25. Giá đóng 60 hàng VNIndex.ai để tính MA20 1.730,89, MA50 1.748,05, dốc −5,51. MA200, ngoại KHỚP 5 phiên, Sổ gốc và giá cao chính xác phiên chưa đủ kiểm; ngày ETF 13/11, phái sinh 19/11 đã được kiểm khi lọc sự kiện.",
      "shortLabel": "EOD 20/11 • 136/136 mã • 7 phân phối • −3/7"
    }
  },
  "metrics": [
    {
      "label": "VN-INDEX",
      "value": "1.688,79",
      "change": "−0,83 • −0,05%",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "price_down"
    },
    {
      "label": "KHỚP LỆNH HOSE",
      "value": "10.809 tỷ",
      "change": "0,906×TB20 theo cùng gốc nmquan riêng",
      "tone": "warning",
      "direction": "up",
      "snapshotState": "neutral"
    },
    {
      "label": "ĐỘ RỘNG HOSE",
      "value": "91 tăng / 206 giảm",
      "change": "65 đứng giá • tỷ lệ 0,442",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "breadth_negative",
      "valueParts": [
        {
          "text": "91 tăng",
          "tone": "positive"
        },
        {
          "text": " / ",
          "tone": "neutral"
        },
        {
          "text": "206 giảm",
          "tone": "negative"
        }
      ]
    },
    {
      "label": "PHÂN PHỐI VÀ TRẠNG THÁI",
      "value": "7 / 25 • KHÔNG",
      "change": "Chặn cứng hiệu lực • −3/7 • Nền XẤU",
      "tone": "negative",
      "direction": "down",
      "snapshotState": "technical_negative"
    }
  ],
  "backdrop": [
    "VN-Index chạm đáy 1.666,41 rồi hồi về 1.688,79, giảm 0,83 điểm (−0,05%), tức phiên ĐI NGANG theo định nghĩa ±0,2% của Prompt dù vẫn đỏ điểm. VN30 −0,09%, VNMIDCAP −0,65%, VNSMALLCAP −0,56% từ HOSE: nhịp hồi điểm số không lan tỏa đều. Độ rộng chỉ cổ phiếu HOSE VNDIRECT: 91 tăng/206 giảm/65 tham chiếu (tỷ lệ 0,442) đã đối chiếu với Thời báo Tài chính. VNIndex.ai đếm 96/212/96 của rổ 404 mã là phạm vi khác, không trộn.",
    "HOSE Điểm tin 20/11 ghi 608.922.411 chứng khoán khớp trị giá 10.809 tỷ, thỏa thuận 5.253 tỷ, tổng 16.062 tỷ. nmquan ghi khớp 10.667,7 tỷ theo bảng 30 ngày, lệch 141,3 tỷ với HOSE; chưa biết nguyên nhân chi tiết. Trong chuỗi 30 ngày nmquan, TB20 khớp 20 phiên LIỀN TRƯỚC đạt 11.779,565 tỷ, bội số phiên 20/11 cùng nguồn =10.667,7/11.779,565=0,906. Phiên đi ngang nên điểm thanh khoản 0; không dùng tổng 16.062 tỷ để tính bội số.",
    "Bảng giá đóng 60 phiên VNIndex.ai từ 26/08 đến 20/11 tính bằng Python: MA20 1.730,89, MA50 1.748,05, MA20 hôm nay thấp hơn MA20 năm phiên trước 5,51 điểm. Giá hiện dưới cả hai và MA20 dốc xuống. Theo Prompt nền XẤU, trần KHÔNG; MA200 chưa có không ảnh hưởng chế độ ĐẦY ĐỦ. Giá/MA chấm −1.",
    "Đếm 25 phiên từ 19/10 đến 20/11, có 7 phân phối giảm ≥0,2% với KHỚP cùng nmquan cao hơn phiên trước: 19/10, 29/10, 02/11, 06/11, 12/11, 17/11, 18/11. Không phiên nào hết hiệu lực theo +5%; riêng phân phối 19/10 cần giá đóng 1.774,332 để xóa, còn đỉnh đóng sau đó chỉ 1.774,15. Đã kiểm cờ ETF 13/11 và phái sinh 19/11, nhưng hai phiên này không phải ứng viên phân phối. Bảy phân phối còn hiệu lực ≥6 kích hoạt chặn cứng phòng thủ, điểm phân phối −1. Nếu có chứng cứ sự kiện khác áp dụng một trong bảy ngày, phải tính lại.",
    "Độ rộng 91/206=0,442 chấm −1. Phiên thay đổi −0,83 điểm (<2) nên không dùng tỷ lệ đóng góp top 5 để chấm chất lượng dòng tiền. VIC/TCB/STB/GAS/VPL hỗ trợ điểm, VCB/MBB/VPB/BID/ACB kéo xuống theo BSC/VNIndex.ai. Khối ngoại tổng HOSE bán ròng 841 tỷ, tập trung FPT/ACB/HDB, mua POW/TCH; không được dùng tổng thay ngoại KHỚP năm phiên. Tự doanh tổng theo nmquan −246 tỷ (1 nguồn, không là khớp riêng).",
    "Nhóm năng lượng theo HOSE VNENE +1,22%, bất động sản VNREAL +0,35% có sức giá tốt hơn thị trường nhưng chưa đủ bảng ngành về khớp và ngoại để gọi tiền vào thực; công nghệ VNIT −1,60%, công nghiệp VNIND −0,77%, vật liệu VNMAT −0,22% yếu. Ngân hàng phân hóa TCB/STB xanh nhưng VCB/MBB/VPB giảm. Chưa có nhóm dẫn dắt rõ, không suy tiền ròng chuyển từ ngành này sang ngành khác.",
    "Chấm bảy yếu tố: giá/MA −1, thanh khoản 0 do đi ngang, độ rộng −1, chất lượng 0 vì |−0,83|<2, ngoại KHỚP 0 thiếu chuỗi, phân phối −1 (7 còn hiệu lực), phái sinh/vĩ mô 0 do chưa có basis 3 phiên hoặc tin bất lợi chắc trước mốc cắt. Tổng −3/7. Chặn cứng đã kiểm: phân phối ≥6; chặn khác (ngoại KHỚP liên tiếp, ngưỡng vô hiệu từ Sổ gốc) KHÔNG KIỂM ĐƯỢC. Ba bước: KHÔNG dòng 1 → trần nền XẤU vẫn KHÔNG → bỏ chống đảo chiều vì không Sổ → KHÔNG dòng 1.",
    "Hỗ trợ quan sát: đáy phiên 20/11 tại 1.666,41 (VNIndex.ai + nmquan). Kháng cự gần đóng 19/11 1.689,62 (cách đóng hôm nay 0,83 điểm), số tròn 1.700,00; cản xa MA20 1.730,89/MA50 1.748,05. Giá cao 20/11 giữa nguồn VNIndex.ai 1.688,79 và VNSignal 1.689,18 chưa phân xử nên không dùng làm mốc kháng cự. Mốc vô hiệu từ Sổ gốc chưa có; không tự biến đáy 1.666,41 thành stop có hiệu lực.",
    "TỐT (THẤP): đóng vượt 1.700 rồi MA20 cùng cầu và độ rộng, số phân phối hiệu lực ≤5 và mọi chặn được kiểm; THÌ tính lại trạng thái, không tự mua trước khi chuyển CÓ. CƠ SỞ (TRUNG BÌNH): giữ trên 1.666,41 nhưng chưa vượt 1.700, quản trị vị thế khỏe, không mở mới. XẤU (CAO): đóng dưới 1.666,41 khi độ rộng tiếp tục xấu; THÌ giảm các mã chạm điểm dừng lỗ riêng, không bình quân xuống. Không có xác suất phần trăm hoặc vùng mua mới.",
    "**BÀI ĐĂNG NHÓM ZALO 20/11/2026 — THỐNG NHẤT VỚI BẢN NHẬN ĐỊNH**",
    "**NHẬN ĐỊNH VN-INDEX 20/11/2026 | XUÂN LÊ TVS**",
    "Index chỉ giảm 0,83 điểm, nhưng đó không phải dấu hiệu thị trường đã khỏe. VN-Index đóng 1.688,79 điểm, dưới mốc 1.700; HOSE theo thống kê cổ phiếu VNDIRECT có 91 mã tăng và 206 mã giảm. VIC, TCB, STB giúp chỉ số giữ điểm, còn phần lớn bảng điện vẫn chịu áp lực. Nhịp hồi cuối phiên cần được ghi nhận, nhưng chưa đủ gọi là đảo chiều.",
    "HOSE công bố 10.809 tỷ đồng khớp lệnh, không gồm thỏa thuận. Tính trên chuỗi khớp lệnh 30 phiên cùng một nguồn riêng biệt, thanh khoản hôm nay chỉ bằng 0,906 lần trung bình 20 phiên trước. Điều tôi lưu tâm hơn là **7 phiên phân phối còn hiệu lực trong 25 phiên**: áp lực cung đã tích tụ, chưa được giải tỏa chỉ bằng một buổi chiều rút chân.",
    "Nhóm năng lượng và một số mã bất động sản giữ sắc giá, nhưng chưa có bằng chứng dòng tiền vào rộng khắp. Công nghệ, công nghiệp còn yếu; ngân hàng phân hóa rõ khi TCB, STB đi ngược VCB, MBB, VPB. Khối ngoại bán ròng khoảng 841 tỷ đồng theo tổng giao dịch HOSE, không được nhầm với khối ngoại khớp lệnh.",
    "VN-Index đang ở dưới MA20 1.730,89 và MA50 1.748,05, trong khi MA20 đã dốc xuống. **Quan điểm vẫn là KHÔNG MỞ MUA MỚI.** NẾU chỉ số giữ được đáy phiên 1.666,41, THÌ ưu tiên quản trị các vị thế có nền còn tốt, không bắt đáy theo cảm giác. NẾU đóng dưới 1.666,41, THÌ rà các mã đã vi phạm điểm dừng lỗ riêng và thu hẹp rủi ro. NẾU lấy lại 1.700 rồi MA20 với độ rộng và thanh khoản xác nhận, THÌ mới tính lại trạng thái.",
    "Việc làm ngay: rà danh mục, giảm phần yếu đúng kỷ luật, không bình quân giá xuống hay tăng đòn bẩy. Tỷ trọng cổ phiếu phòng thủ tham khảo không quá 20%, không phải chỉ thị bán tháo cho mọi tài khoản. Giữ vốn trước, chờ khi thị trường tự chứng minh được sức mạnh.",
    "*Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm quyết định.*"
  ],
  "levels": [
    {
      "label": "Hỗ trợ sát — đáy 20/11",
      "value": "1.666,41",
      "note": "VNIndex.ai và nmquan đều ghi giá thấp 20/11; là mốc kiểm tra rủi ro, không phải mốc vô hiệu đang hiệu lực từ Sổ."
    },
    {
      "label": "Kháng cự rất gần — đóng 19/11",
      "value": "1.689,62",
      "note": "Giá đóng 19/11 từ HOSE/VNIndex.ai/nmquan, cách đóng hôm nay 0,83 điểm."
    },
    {
      "label": "Kháng cự tâm lý",
      "value": "1.700,00",
      "note": "Mốc số tròn tâm lý; đã mất, không tự coi là đã lấy lại."
    },
    {
      "label": "Kháng cự MA20",
      "value": "1.730,89",
      "note": "TỰ TÍNH từ 20 giá đóng 26/10–20/11, một gốc VNIndex.ai."
    },
    {
      "label": "Kháng cự MA50",
      "value": "1.748,05",
      "note": "TỰ TÍNH từ 50 giá đóng 14/09–20/11, một gốc VNIndex.ai."
    }
  ],
  "playbook": [
    {
      "state": "positive",
      "if": "TỐT (THẤP): đóng trở lại trên 1.700 rồi MA20 1.730,89 với khớp và độ rộng cải thiện, đồng thời số phiên phân phối còn hiệu lực giảm xuống ≤5 và mọi chặn được xác minh.",
      "then": "Chạy lại đủ bảy điểm và ba bước; chỉ xét điều kiện mở mua nếu trạng thái cuối chuyển CÓ. Hiện KHÔNG có vùng mua mới."
    },
    {
      "state": "neutral",
      "if": "CƠ SỞ (TRUNG BÌNH): giữ trên đáy 20/11 là 1.666,41 nhưng chưa vượt vùng 1.689,62–1.700,00.",
      "then": "Giữ mã còn khỏe theo kỷ luật từng vị thế, không tăng đòn bẩy, không mở mua mới."
    },
    {
      "state": "risk_off",
      "if": "XẤU (CAO): đóng thấp hơn đáy 20/11 là 1.666,41 và độ rộng tiếp tục bất lợi.",
      "then": "Ưu tiên rà những mã chạm mốc dừng lỗ riêng, giảm phần yếu theo kế hoạch, không bình quân giá xuống hoặc bán tháo máy móc."
    }
  ],
  "focus": "KHÔNG mở mua mới • VN-Index 1.688,79 • HOSE khớp 10.809 tỷ, bội số cùng nmquan 0,906×TB20 • 7 phân phối/25 kích hoạt chặn cứng • hỗ trợ 1.666,41 • cản 1.689,62–1.700,00",
  "inference": "Cổng lõi ĐẠT có giới hạn 1 NGUỒN ở trị số khớp toàn HOSE chính xác; đóng/% đối chiếu HOSE/VNIndex.ai/VNDIRECT, độ rộng 91/206/65 VNDIRECT và Thời báo Tài chính. CHẾ ĐỘ ĐẦY ĐỦ: MA20/MA50/dốc từ 60 giá VNIndex.ai; TB20 bội số và phân phối/25 từ 30 dòng KHỚP nmquan một gốc. Nền XẤU (dưới MA50, MA20 dốc −5,51), điểm −3/7. Có CHẶN CỨNG mới: 7 phân phối hiệu lực/25 ≥6. Ba bước KHÔNG dòng 1 → trần nền XẤU vẫn KHÔNG → bỏ chống đảo chiều vì thiếu Sổ gốc → KHÔNG dòng 1. Không có vùng mua mới hay R:R chỉ số vì thiếu mốc vô hiệu đang hiệu lực. Không sửa mốc mua/dừng lỗ/mục tiêu từng mã.",
  "sources": [
    {
      "label": "HOSE — Điểm tin 20/11/2026, chỉ số/khớp/thỏa thuận/ngành/ngoại tổng",
      "url": "https://web.stockbiz.vn/News/2026/11/20/1926324/hose-diem-tin-giao-dich-ngay-20-11-2026.aspx"
    },
    {
      "label": "VNDIRECT — giá và độ rộng EOD 20/11",
      "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-20&size=500"
    },
    {
      "label": "Thời báo Tài chính — độ rộng đúng phạm vi và nhóm ngành 20/11",
      "url": "https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-20-11-luc-mua-cuoi-phien-giup-vn-index-thu-hep-da-giam-207320.html"
    },
    {
      "label": "nmquan — lịch sử 30 phiên giá/KHỚP/độ rộng cùng phương pháp",
      "url": "https://nmquan.vn/data/chi-so/vn-index/lich-su"
    },
    {
      "label": "VNIndex.ai — 60 giá đóng, OHLC và nhóm tác động",
      "url": "https://vnindex.ai/vnindex-hom-nay"
    },
    {
      "label": "BSC Research — top trụ và thống kê theo rổ VNINDEX",
      "url": "https://www.bsc.com.vn/Report/ReportFile/16192"
    },
    {
      "label": "SSI/TBTC — ETF 13/11, có hiệu lực 16/11",
      "url": "https://thoibaotaichinhvietnam.vn/cac-quy-etf-du-kien-giao-dich-gan-1-000-ty-dong-trong-ky-co-cau-thang-11-206639.html"
    },
    {
      "label": "MBS — xác minh ngày đáo hạn hợp đồng tháng 11",
      "url": "https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-19-11-2026-bien-dong-kho-luong-phien-dao-han/"
    },
    {
      "label": "Hồ sơ kiểm toán số, nhãn nguồn và bảng tự kiểm 20 mục",
      "url": "https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/docs/market-source-log-20261120.md"
    }
  ]
};
 const i = store.entries.findIndex(item => item && item.id === entry.id);
 if (i >= 0) store.entries[i] = entry;
 else store.entries.unshift(entry);
 if (!store.updated || store.updated < entry.date) store.updated = entry.date;
})();
