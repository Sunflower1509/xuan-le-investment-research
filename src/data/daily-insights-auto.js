/* Automated Daily Market View archive. Updated by the scheduled VNINDEX research task. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  /*
   * Keep automated entries newest-first inside this array.
   * The scheduled task must only add a dated entry after passing the canonical
   * rulebook in docs/prompt-nhan-dinh-vnindex-v3.md and the data-verification gate.
   */
  const entries = [
    {
      "id": "market-view-20260916",
      "date": "2026-09-16",
      "publishedAt": "16/09/2026 • Sau phiên",
      "edition": "Số 19",
      "sentiment": "watch",
      "sentimentLabel": "CHỜ / PHÒNG THỦ",
      "dataStatus": "VNDIRECT Finfo + KBS + Stockbiz + Thời báo Tài chính + VnEconomy + VNSignal/Entrade • EOD 16.09.2026 • tự doanh 16/09: CHƯA XÁC MINH",
      "title": "Điểm số giữ 1.810 nhưng nội lực yếu — VETO thanh khoản và độ rộng",
      "thesis": "VN-Index đóng cửa 1.810,11 điểm, giảm 1,04 điểm (-0,06%); VN30 ngược chiều tăng 0,16% lên 1.954,29 điểm, còn HNX-Index giảm 0,33% xuống 273,22 điểm. Bộ EOD khóa trong repo ghi nhận HOSE chỉ 109 mã tăng, 67 tham chiếu và 190 mã giảm, có 4 mã sàn. VN-Index vẫn đứng trên MA20 1.797,38, MA50 1.777,87 và MA200 1.791,07, nhưng giá trị khớp lệnh chỉ khoảng 12,00 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 13,40 nghìn tỷ đồng (-10,5%). Khối ngoại là điểm cộng với mua ròng ước khoảng 223,11 tỷ đồng trên HOSE và là phiên mua ròng thứ ba liên tiếp, trong khi VN30F1M đóng 1.948,1 điểm, basis khoảng -6,19 điểm so với VN30. TRẠNG THÁI TÁC NGHIỆP: CHỜ / PHÒNG THỦ; Confluence Score -2/7, hard veto đang kích hoạt, không mở vị thế mới diện rộng và không tăng margin.",
      "author": "Xuân Lê TVS",
      "role": "Môi giới và tư vấn đầu tư",
      "readingTime": "5 phút đọc",
      "metrics": [
        {
          "label": "VN-INDEX",
          "value": "1.810,11",
          "change": "−1,04 • −0,06%",
          "tone": "warning"
        },
        {
          "label": "ĐỘ RỘNG HOSE",
          "value": "109 tăng / 190 giảm",
          "change": "67 tham chiếu • 4 mã sàn",
          "tone": "warning"
        },
        {
          "label": "KHỚP LỆNH HOSE",
          "value": "~12.000 tỷ",
          "change": "−10,5% so với TB20 ~13.401 tỷ",
          "tone": "warning"
        },
        {
          "label": "KHỐI NGOẠI",
          "value": "MUA RÒNG ~223 tỷ",
          "change": "HOSE ước tính • phiên mua ròng thứ ba",
          "tone": "positive"
        }
      ],
      "backdrop": [
        "Bản chất phiên 16/09 là đi ngang yếu và phân hóa, không phải một phiên tăng khỏe. VN-Index gần như đứng yên tại 1.810,11 điểm nhưng VN30 tăng 0,16% lên 1.954,29 điểm trong khi độ rộng HOSE khóa EOD chỉ 109 tăng/67 tham chiếu/190 giảm. Sự lệch pha VN30 tốt hơn VN-Index cùng số mã giảm áp đảo cho thấy điểm số được cân bằng bởi nhóm vốn hóa lớn trong khi phần lớn thị trường chịu áp lực.",
        "Thanh khoản không xác nhận. Dữ liệu VNDIRECT Finfo cho thấy giá trị khớp lệnh HOSE khoảng 11.999 tỷ đồng, thấp hơn bình quân 5 phiên khoảng 13.483 tỷ (-11,0%), bình quân 10 phiên khoảng 13.245 tỷ (-9,4%) và bình quân 20 phiên khoảng 13.401 tỷ (-10,5%). Khối lượng khớp lệnh 446,94 triệu cổ phiếu cũng thấp hơn bình quân 20 phiên khoảng 12,6%. Đây là hard veto theo rulebook.",
        "Về kỹ thuật, close 1.810,11 vẫn cao hơn MA20 1.797,38 khoảng 0,71%, cao hơn MA50 1.777,87 khoảng 1,81% và cao hơn MA200 1.791,07 khoảng 1,06%. Dữ liệu Stockbiz/VNIndex.ai cùng ghi nhận O/H/L/C quanh 1.812,96/1.816,26/1.805,20/1.810,11, tương ứng nến đỏ thân nhỏ có râu hai đầu: lực cầu còn giữ được vùng 1.805 nhưng chưa đủ sức vượt đỉnh trong ngày.",
        "Bản đồ dòng tiền cho thấy sự xoay vòng sang một số mã năng lượng và trụ chọn lọc thay vì lan tỏa. Các nguồn trong ngày ghi nhận năng lượng nổi bật với PLX, BSR, OIL, PVS/PVT; SSB, GVR và DMX cũng nằm trong nhóm nâng đỡ chỉ số. Ngược lại, tài chính và bất động sản gây sức ép rộng hơn; công nghệ/tiêu dùng không thiết yếu yếu, và VnEconomy ghi nhận phần lớn 103 cổ phiếu giảm quá 1% là nhóm vừa và nhỏ. Đây là tín hiệu chất lượng thị trường suy giảm dù chỉ số chung chỉ giảm nhẹ.",
        "Khối ngoại là điểm cộng: VNIndex.ai ước tính mua ròng khoảng 223,11 tỷ đồng riêng HOSE, còn nguồn hậu phiên ghi gần 250 tỷ đồng trên toàn thị trường và là phiên mua ròng thứ ba liên tiếp. Tuy nhiên, lực mua ngoại chưa đủ bù cho độ rộng âm và thanh khoản dưới trung bình nên không làm mất hiệu lực veto.",
        "Phái sinh vẫn thận trọng ngay trước đáo hạn. VN30F1M đóng 1.948,1 điểm trong khi VN30 cơ sở đóng 1.954,29 điểm, tạo basis khoảng -6,19 điểm (-0,32%); hợp đồng đáo hạn 17/09. Bối cảnh quốc tế cũng chưa thuận lợi khi chứng khoán Mỹ giảm trong phiên 15/09 và thị trường chờ quyết định chính sách của Fed. Tự doanh 16/09 chưa được khóa độc lập; HOSE đang trong giai đoạn chuẩn hóa dữ liệu theo loại nhà đầu tư, vì vậy biến này được ghi CHƯA XÁC MINH và không dùng để nâng kết luận."
      ],
      "levels": [
        {
          "label": "Hỗ trợ gần / MA20",
          "value": "1.797–1.800",
          "note": "MA20 khóa từ chuỗi VNDIRECT ở 1.797,38. IF chỉ số giữ được vùng này và độ rộng cải thiện, THEN tiếp tục quan sát trạng thái tích lũy; không tự động coi là điểm mua."
        },
        {
          "label": "Hỗ trợ mạnh / vùng vô hiệu",
          "value": "1.778–1.791",
          "note": "MA50 khoảng 1.777,87 và MA200 khoảng 1.791,07 tạo cụm hỗ trợ trung hạn. Đóng cửa dưới cụm này làm vô hiệu view giữ cấu trúc và kích hoạt giảm rủi ro mạnh hơn."
        },
        {
          "label": "Xác nhận tích cực",
          "value": "1.820–1.825",
          "note": "Chỉ xem xét nâng từ PHÒNG THỦ khi đóng vượt vùng này, giá trị khớp lệnh trở lại tối thiểu quanh bình quân 20 phiên ~13.401 tỷ đồng, độ rộng chuyển dương và leader lan tỏa."
        },
        {
          "label": "Kháng cự mạnh",
          "value": "1.830–1.840",
          "note": "Vùng cản được nhiều CTCK lưu ý trước phiên 16/09. Nếu tiến vào đây trong khi thanh khoản/độ rộng không cải thiện, ưu tiên chốt trading hơn là mua đuổi."
        },
        {
          "label": "Xác nhận rủi ro",
          "value": "<1.797",
          "note": "Mất MA20 là tín hiệu đầu tiên phải hạ rủi ro; mất tiếp 1.791–1.778 chuyển trạng thái sang risk-off rõ rệt. Tại close 1.810,11, upside tới 1.830 so với rủi ro về MA20 cho R:R khoảng 1,6:1, dưới chuẩn 2:1 nên không mở mới."
        }
      ],
      "confluence": {
        "score": -2,
        "maxScore": 7,
        "factors": [
          {
            "factor": "Giá / MA / cấu trúc",
            "score": 1,
            "note": "Close 1.810,11 vẫn trên MA20/MA50/MA200; cấu trúc trung hạn chưa gãy."
          },
          {
            "factor": "Thanh khoản",
            "score": -1,
            "note": "Giá trị khớp lệnh ~12.000 tỷ, thấp hơn TB20 ~13.401 tỷ khoảng 10,5%."
          },
          {
            "factor": "Độ rộng",
            "score": -1,
            "note": "HOSE 109 tăng/190 giảm; bên giảm áp đảo."
          },
          {
            "factor": "Dòng tiền",
            "score": -1,
            "note": "Dòng tiền phân hóa, thiên về một số trụ/năng lượng trong khi mid-small điều chỉnh rộng."
          },
          {
            "factor": "Khối ngoại",
            "score": 1,
            "note": "HOSE ước mua ròng ~223 tỷ; phiên mua ròng thứ ba liên tiếp."
          },
          {
            "factor": "Chất lượng dẫn dắt",
            "score": 0,
            "note": "Có SSB/GVR/DMX và năng lượng chọn lọc nhưng chưa đủ lan tỏa để chấm +1."
          },
          {
            "factor": "Vĩ mô / phái sinh",
            "score": -1,
            "note": "VN30F1M basis khoảng -6,19 điểm ngay trước đáo hạn; Fed là biến số sự kiện lớn sau giờ Việt Nam."
          }
        ],
        "veto": [
          "Độ rộng yếu: 109 mã tăng so với 190 mã giảm trên HOSE",
          "Thanh khoản không xác nhận: GT khớp lệnh thấp hơn TB20 khoảng 10,5%",
          "Dòng tiền tập trung/chọn lọc trong khi phần lớn cổ phiếu vừa và nhỏ yếu",
          "R:R từ close 1.810,11 tới cản gần 1.830 so với MA20 1.797 chỉ khoảng 1,6:1, dưới chuẩn 2:1"
        ]
      },
      "scenarios": [
        {
          "state": "positive",
          "probability": 20,
          "if": "VN-Index giữ 1.797–1.800 rồi đóng vượt 1.820–1.825, GT khớp lệnh phục hồi tối thiểu quanh 13.401 tỷ, độ rộng chuyển dương và leader lan tỏa",
          "then": "Gỡ veto thanh khoản/độ rộng và chuyển từ PHÒNG THỦ sang xem xét mua thăm dò 20–30% ở leader có nền cơ bản tốt; từng deal stoploss 3–7% và chỉ nhận R:R ≥ 2:1."
        },
        {
          "state": "neutral",
          "probability": 55,
          "if": "VN-Index tiếp tục dao động trong 1.797–1.825, thanh khoản dưới trung bình hoặc độ rộng vẫn phân hóa",
          "then": "Duy trì CHỜ / PHÒNG THỦ, tỷ trọng tác nghiệp không quá 20%, giữ leader mạnh sẵn có, không mua đuổi và không tăng margin."
        },
        {
          "state": "risk_off",
          "probability": 25,
          "if": "VN-Index đóng dưới 1.797 và đặc biệt mất cụm 1.791–1.778 kèm số mã giảm tiếp tục áp đảo",
          "then": "Giảm rủi ro quyết liệt phần trading, dừng mở mới, xử lý vị thế vi phạm stoploss và giữ tiền mặt cao; tuyệt đối không bình quân giá xuống bằng margin."
        }
      ],
      "playbook": [
        {
          "state": "positive",
          "if": "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.820–1.825, GT khớp lệnh ≥ khoảng 13.401 tỷ, độ rộng chuyển dương và leader không còn tập trung ở vài trụ",
          "then": "CÓ THỂ MUA THĂM DÒ 20–30% tại leader có cơ bản/tăng trưởng tốt và setup riêng hợp lệ. Stoploss 3–7%; target theo kháng cự kế tiếp; chỉ nhận giao dịch có R:R ≥ 2:1, không mua đuổi xanh mạnh."
        },
        {
          "state": "neutral",
          "if": "THIẾU XÁC NHẬN — VN-Index giữ trong 1.797–1.825 nhưng thanh khoản dưới TB20, độ rộng âm hoặc VN30 tiếp tục khỏe hơn phần còn lại",
          "then": "CHỜ / PHÒNG THỦ. Tỷ trọng tác nghiệp ≤20%, không tăng margin; chỉ giữ leader có sức mạnh tương đối và loại dần mã yếu. Không mở vị thế mới diện rộng."
        },
        {
          "state": "risk_off",
          "if": "RISK-OFF — VN-Index đóng dưới 1.797; nghiêm trọng hơn nếu thủng 1.791–1.778 cùng độ rộng xấu và leader mất nền",
          "then": "GIẢM RỦI RO phần trading, dừng mua mới và xử lý mọi vị thế chạm stoploss 3–7%. Không bình quân giá xuống, ưu tiên bảo toàn vốn."
        }
      ],
      "focus": "CHỜ / PHÒNG THỦ • Score -2/7 • VETO độ rộng + thanh khoản + tập trung dòng tiền • MA20 1.797,38 • MA200 1.791,07 • MA50 1.777,87 • xác nhận 1.820–1.825 • cản 1.830–1.840 • GT khớp lệnh ~12.000 tỷ vs TB20 ~13.401 tỷ • basis F1M -6,19 • tỷ trọng tác nghiệp ≤20% • không margin",
      "inference": "EOD 16/09/2026 đã được khóa lại sau Data Gate: 127/127 mã coverage xác minh, hai sai lệch CafeF tại MSR/OIL được KBS date-specific xác nhận trùng VNDIRECT. VNDIRECT Finfo khóa VN-Index 1.810,11 (-0,06%), VN30 1.954,29 (+0,16%), HNX-Index 273,22 (-0,33%) và độ rộng HOSE 109 tăng/67 tham chiếu/190 giảm/4 sàn. Chuỗi 215 phiên VNDIRECT cho MA20 1.797,38, MA50 1.777,87, MA200 1.791,07; GT khớp lệnh 11.999 tỷ so với TB5 13.483 tỷ, TB10 13.245 tỷ và TB20 13.401 tỷ. Stockbiz và Thời báo Tài chính xác nhận close VN-Index/VN30/HNX; Thời báo Tài chính ghi tổng GTGD 14.845 tỷ. VNIndex.ai ước khối ngoại mua ròng 223,11 tỷ HOSE; nguồn hậu phiên ghi gần 250 tỷ toàn thị trường và phiên mua ròng thứ ba. VNSignal/Entrade khóa VN30F1M 1.948,1, basis tính theo VN30 EOD là -6,19 điểm. Confluence Score = -2/7 với cấu phần +1, -1, -1, -1, +1, 0, -1. Hard veto có hiệu lực vì độ rộng yếu, thanh khoản không xác nhận, dòng tiền tập trung và R:R tại giá hiện tại dưới 2:1. Tự doanh 16/09 chưa xác minh độc lập và không được dùng để nâng điểm. Kết luận: CHỜ / PHÒNG THỦ, tỷ trọng tác nghiệp ≤20%, không margin.",
      "limitations": [
        "CHƯA XÁC MINH độc lập: số liệu tự doanh HOSE ngày 16/09/2026; nguồn công khai được tìm kiếm chưa có bản hậu phiên cùng ngày và một số nền tảng thông báo HOSE tạm dừng dữ liệu giao dịch theo loại nhà đầu tư từ 01/09/2026.",
        "Trường low của VNDIRECT vnmarket_prices cho 16/09 có giá trị bất thường so với hai nguồn độc lập; cấu trúc nến sử dụng low 1.805,20 được Stockbiz và VNIndex.ai cùng hiển thị, không dùng trường low bất thường đó.",
        "Số đếm độ rộng giữa các nhà cung cấp có chênh lệch nhỏ do cách phân loại/no-trade; bài sử dụng bộ HOSE 109/67/190 đã khóa trong repo và không trộn phạm vi."
      ],
      "zaloPost": "Dữ liệu đã khóa đến hết phiên 16/09/2026. VN-Index đóng cửa 1.810,11 điểm, giảm 1,04 điểm (-0,06%), nhưng bề ngoài đi ngang không phản ánh đúng độ yếu bên dưới. VN30 vẫn tăng 0,16% lên 1.954,29 điểm trong khi HOSE chỉ có 109 mã tăng so với 190 mã giảm. Đây là dấu hiệu dòng tiền đang dựa nhiều vào một số cổ phiếu vốn hóa lớn thay vì lan tỏa rộng.\n\nVề kỹ thuật, VN-Index vẫn đứng trên MA20 1.797,38, MA50 1.777,87 và MA200 1.791,07 nên cấu trúc trung hạn chưa gãy. Điểm đáng lo là giá trị khớp lệnh chỉ khoảng 12,00 nghìn tỷ đồng, thấp hơn bình quân 20 phiên khoảng 13,40 nghìn tỷ, tức thiếu khoảng 10,5%. Khối ngoại là điểm cộng khi mua ròng ước khoảng 223 tỷ đồng trên HOSE và duy trì phiên mua ròng thứ ba, nhưng chưa đủ bù cho độ rộng xấu. VN30F1M đóng 1.948,1 điểm, thấp hơn VN30 khoảng 6,19 điểm ngay trước đáo hạn, cho thấy phái sinh vẫn giữ độ thận trọng.\n\nTrạng thái tác nghiệp của tôi là CHỜ / PHÒNG THỦ, Confluence Score -2/7 và đang có veto về thanh khoản, độ rộng và mức độ tập trung dòng tiền. Việc cần làm ngay ngày mai là không mua đuổi, không tăng margin; chỉ giữ các leader còn nền giá và sức mạnh tương đối, đồng thời loại dần các mã yếu hơn thị trường.\n\nIF VN-Index giữ được 1.797–1.800 và độ rộng cải thiện, THEN tiếp tục quan sát. IF đóng vượt 1.820–1.825 với giá trị khớp lệnh trở lại ít nhất quanh 13,40 nghìn tỷ và leader lan tỏa, THEN mới xem xét nâng tỷ trọng thăm dò. IF thủng 1.797, đặc biệt mất vùng 1.778–1.791, THEN giảm rủi ro rõ hơn. Ưu tiên theo dõi năng lượng và các leader vốn hóa lớn còn giữ dòng tiền; thận trọng với nhóm tài chính, bất động sản, công nghệ và cổ phiếu vừa/nhỏ đang suy yếu. Mỗi giao dịch cổ phiếu vẫn phải có stoploss 3–7% và R:R tối thiểu 2:1. Nội dung chỉ nhằm hỗ trợ ra quyết định, không phải cam kết lợi nhuận.",
      "sources": [
        {
          "label": "VNDIRECT Finfo — chỉ số, độ rộng và chuỗi EOD 16/09/2026",
          "url": "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-16&size=500"
        },
        {
          "label": "KBS — MSR EOD 16/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/MSR/data_day?sdate=16-09-2026&edate=16-09-2026"
        },
        {
          "label": "KBS — OIL EOD 16/09/2026",
          "url": "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=16-09-2026&edate=16-09-2026"
        },
        {
          "label": "Stockbiz — chỉ số thị trường 16/09/2026",
          "url": "https://web.stockbiz.vn/IndexDetail.aspx"
        },
        {
          "label": "Thời báo Tài chính Việt Nam — chỉ số & GTGD đóng cửa 16/09",
          "url": "https://thoibaotaichinhvietnam.vn/chung-khoan&s_cond=&BRSR=0"
        },
        {
          "label": "VnEconomy — cổ phiếu vừa và nhỏ điều chỉnh mạnh, khối ngoại duy trì mua ròng",
          "url": "https://vneconomy.vn/co-phieu-vua-va-nho-dieu-chinh-manh-khoi-ngoai-duy-tri-mua-rong.htm"
        },
        {
          "label": "DNSE — VN-Index giảm nhẹ, nhóm tài chính và bất động sản gây sức ép",
          "url": "https://www.dnse.com.vn/senses/tin-tuc/vn-index-giam-nhe-nhom-tai-chinh-va-bat-dong-san-gay-suc-ep-35286641"
        },
        {
          "label": "VNIndex.ai — phiên 16/09 & khối ngoại HOSE",
          "url": "https://vnindex.ai/vnindex-hom-nay"
        },
        {
          "label": "VNSignal — VN30F1M 16/09/2026",
          "url": "https://vnsignal.vn/thi-truong/chung-khoan-phai-sinh/vn30f1m"
        },
        {
          "label": "Entrade — bản tin phái sinh 16/09/2026",
          "url": "https://blog.entrade.com.vn/ban-tin-phai-sinh-16-09-2026-vn30f1m-hoi-manh-giang-co-tai-vung-1-945-1-955/"
        },
        {
          "label": "VTV — bối cảnh chứng khoán toàn cầu & Fed 16/09",
          "url": "https://vtv.vn/chung-khoan-the-gioi-do-san-100260916092532132.htm"
        }
      ]
    },
    {
      id: "market-view-20260915",
      date: "2026-09-15",
      publishedAt: "15/09/2026 • Sau phiên",
      edition: "Số 18",
      sentiment: "watch",
      sentimentLabel: "CHỜ / TRADING NGẮN",
      dataStatus: "VNDIRECT Finfo + Stockbiz + VietnamBiz + Mekong ASEAN • EOD 15.09.2026 • tự doanh & basis F1M sau phiên: chưa khóa độc lập",
      title: "Lấy lại 1.800 nhưng thanh khoản chưa xác nhận — không mua đuổi",
      thesis: "VN-Index đóng cửa 1.811,15 điểm, tăng 22,92 điểm (+1,28%); VN30 tăng 1,17% lên 1.951,14 điểm và HNX-Index tăng 0,81% lên 274,13 điểm. Bộ dữ liệu EOD khóa trong repo ghi nhận độ rộng HOSE tích cực với 222 mã tăng, 53 mã tham chiếu và 86 mã giảm, không có mã sàn. Dòng tiền ngoại tiếp tục là điểm cộng khi mua ròng khoảng 732 tỷ đồng toàn thị trường, riêng HOSE hơn 719 tỷ đồng, tập trung mạnh ở nhóm ngân hàng. Tuy nhiên, nguồn hậu phiên ghi nhận thanh khoản toàn thị trường chỉ khoảng 17.700 tỷ đồng, thấp hơn phiên trước; mức tăng giá vì vậy chưa được thanh khoản xác nhận đầy đủ. TRẠNG THÁI TÁC NGHIỆP: CHỜ / TRADING NGẮN; không mua đuổi tại vùng đóng cửa hiện tại, chỉ xem xét thăm dò khi retest 1.800 thành công hoặc khi vượt vùng xác nhận với thanh khoản cải thiện.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.811,15", change: "+22,92 • +1,28%", tone: "positive" },
        { label: "ĐỘ RỘNG HOSE", value: "222 tăng / 86 giảm", change: "53 tham chiếu • 0 mã sàn", tone: "positive" },
        { label: "THANH KHOẢN", value: "~17.700 tỷ", change: "Toàn thị trường • giảm so với phiên trước", tone: "warning" },
        { label: "KHỐI NGOẠI", value: "MUA RÒNG ~732 tỷ", change: "Toàn thị trường • HOSE >719 tỷ", tone: "positive" }
      ],
      backdrop: [
        "Phiên 15/09 là một nhịp hồi có chất lượng độ rộng tốt hơn rõ rệt so với 14/09: VN-Index lấy lại mốc 1.800 và đóng tại 1.811,15 điểm; dữ liệu VNDIRECT Finfo khóa riêng HOSE cho thấy 222 mã tăng/53 tham chiếu/86 mã giảm. Một số nguồn báo hậu phiên ghi số mã tăng cao hơn do khác cách tổng hợp; bài này dùng bộ HOSE đã khóa trong repo và không trộn phạm vi.",
        "Điểm chưa thuyết phục nằm ở thanh khoản. Mekong ASEAN ghi nhận khoảng 17.700 tỷ đồng giao dịch toàn thị trường, trong khi phiên 14/09 được các nguồn hậu phiên ghi nhận cao hơn. Giá tăng nhưng thanh khoản hạ nhiệt khiến tín hiệu breakout chưa đạt chuẩn xác nhận của rulebook; đây là veto quan trọng chống FOMO.",
        "Khối ngoại mua ròng khoảng 732 tỷ đồng toàn thị trường, riêng HOSE hơn 719 tỷ đồng và là phiên mua ròng thứ hai liên tiếp. VCB, BID, TCB, MBB, CTG, SSB và HDB nằm trong nhóm được mua ròng đáng kể; BSR cũng được mua ròng mạnh. Ngược lại, VIC và VHM chịu bán ròng lớn, cho thấy dòng tiền ngoại đang xoay rõ sang ngân hàng/năng lượng thay vì mua đồng đều toàn thị trường.",
        "Dòng tiền nội địa lan sang ngân hàng, chứng khoán và năng lượng; nhóm GELEX hồi phục sau phiên giảm mạnh trước đó. Đây là cải thiện về chất lượng dẫn dắt so với một phiên chỉ kéo trụ, nhưng thanh khoản chưa tăng tương ứng nên độ bền vẫn cần thêm ít nhất một phiên xác nhận.",
        "Về kỹ thuật, trước phiên 15/09 nhiều CTCK đặt vùng 1.770–1.790 là hỗ trợ hội tụ MA trung hạn và TPBS nêu MA200 quanh 1.755 điểm. Close 1.811,15 đã đứng trên các vùng hỗ trợ này và lấy lại khu 1.810–1.815 từng bị đánh mất. Tuy nhiên mức MA20 cập nhật sau phiên chưa được khóa độc lập từ nguồn thứ hai, vì vậy bài không tuyên bố VN-Index đã chính thức reclaim MA20."
      ],
      levels: [
        { label: "Pivot phải giữ", value: "1.800–1.810", note: "Vùng tâm lý và vùng hỗ trợ cũ vừa được lấy lại. Nếu retest giữ được với độ rộng tiếp tục tích cực, có thể xem xét thăm dò nhỏ; nếu rơi lại dưới vùng này ngay phiên kế tiếp thì coi nhịp 15/09 là hồi kỹ thuật chưa bền." },
        { label: "Hỗ trợ mạnh / mốc rủi ro", value: "1.770–1.790", note: "Vùng hỗ trợ được nhiều CTCK theo dõi trước phiên 15/09. Đóng cửa trở lại dưới 1.790 làm suy yếu mạnh view hồi; thủng 1.770 kích hoạt trạng thái risk-off rõ hơn." },
        { label: "Vùng xác nhận tích cực", value: "1.820–1.830", note: "Chỉ tăng rủi ro khi VN-Index đóng vững phía trên vùng này, thanh khoản tăng rõ so với 15/09, độ rộng vẫn nghiêng về bên tăng và leader không bị xả cuối phiên." },
        { label: "Kháng cự / vùng chốt trading", value: "1.850–1.870", note: "Đây là vùng cản đã được các CTCK lưu ý trước nhịp giảm. Tại close 1.811,15, R:R tới cận gần 1.850 so với mốc vô hiệu 1.790 chỉ khoảng 1,84:1, dưới chuẩn 2:1; vì vậy không mua đuổi ở giá đóng cửa hiện tại." }
      ],
      confluence: {
        score: 2,
        maxScore: 7,
        factors: [
          { factor: "Giá / MA / cấu trúc", score: 0, note: "Reclaim 1.800 và vùng MA trung hạn; MA20 sau phiên chưa khóa độc lập." },
          { factor: "Thanh khoản", score: -1, note: "Giá tăng nhưng thanh khoản toàn thị trường giảm so với phiên trước." },
          { factor: "Độ rộng", score: 1, note: "HOSE 222 tăng/86 giảm, lan tỏa tích cực." },
          { factor: "Dòng tiền", score: 1, note: "Lan sang ngân hàng, chứng khoán, năng lượng thay vì chỉ một trụ." },
          { factor: "Khối ngoại", score: 1, note: "Mua ròng phiên thứ hai; khoảng 732 tỷ toàn thị trường." },
          { factor: "Chất lượng dẫn dắt", score: 0, note: "Cải thiện nhưng chưa đủ dữ liệu thanh khoản ngành để chấm +1 chắc chắn." },
          { factor: "Vĩ mô / phái sinh", score: 0, note: "Fed là biến số lớn; basis F1M sau phiên 15/09 chưa khóa độc lập." }
        ],
        veto: [
          "Thanh khoản không xác nhận đà tăng",
          "R:R tại giá đóng cửa tới kháng cự gần 1.850 thấp hơn 2:1 nếu dùng 1.790 làm mốc vô hiệu"
        ]
      },
      scenarios: [
        { state: "positive", probability: 30, if: "Giữ trên 1.810 và đóng vượt 1.820–1.830 với thanh khoản tăng, độ rộng tiếp tục tích cực và leader ngân hàng/chứng khoán/năng lượng duy trì", then: "Có thể nâng từ CHỜ sang mua thăm dò 20–30% ở leader đạt điểm mua riêng; stoploss 3–7%, target tối thiểu 10–15%, R:R ≥ 2:1." },
        { state: "neutral", probability: 50, if: "Dao động trong 1.790–1.830, thanh khoản chưa mở rộng hoặc chỉ số tăng nhưng động lượng chậm lại", then: "Duy trì CHỜ / TRADING NGẮN, không mua đuổi; ưu tiên retest hợp lệ quanh 1.800–1.810 và giữ tiền mặt cao." },
        { state: "risk_off", probability: 20, if: "Đóng dưới 1.790, đặc biệt thủng 1.770 kèm độ rộng xấu và leader đồng loạt gãy nền", then: "Hạ mạnh phần trading, dừng mua mới, xử lý mọi vị thế chạm stoploss; không dùng margin để bình quân giá xuống." }
      ],
      playbook: [
        { state: "positive", if: "XÁC NHẬN TÍCH CỰC — VN-Index giữ trên 1.810 và đóng vượt 1.820–1.830, thanh khoản tăng rõ so với 15/09, độ rộng tiếp tục nghiêng về bên tăng và leader giữ sức mạnh tương đối", then: "CÓ MUA THĂM DÒ 20–30% vị thế dự kiến tại leader có nền cơ bản/tăng trưởng tốt và điểm mua riêng hợp lệ. Không mua đuổi xanh mạnh; stoploss 3–7%, target tối thiểu 10–15% hoặc kháng cự kế tiếp; chỉ nhận giao dịch có R:R ≥ 2:1." },
        { state: "neutral", if: "THIẾU XÁC NHẬN — VN-Index dao động 1.790–1.830, thanh khoản chưa tăng hoặc lực kéo tập trung trở lại vào vài trụ", then: "CHỜ / TRADING NGẮN. Không tăng margin, giữ tiền mặt cao; chỉ thăm dò tối đa 10–20% khi retest 1.800–1.810 thành công và cổ phiếu leader có setup riêng tốt. Không FOMO sau phiên tăng mạnh." },
        { state: "risk_off", if: "RISK-OFF — VN-Index đóng dưới 1.790; nghiêm trọng hơn nếu thủng 1.770 kèm số mã giảm áp đảo và leader ngân hàng/chứng khoán/năng lượng phá nền", then: "GIẢM RỦI RO phần trading; LOẠI các setup mất nền hoặc chạm stoploss, dừng mở vị thế mới và tránh dùng margin. Mọi vị thế vi phạm stoploss 3–7% phải xử lý theo kế hoạch." }
      ],
      focus: "Trọng tâm: giữ 1.800–1.810 • xác nhận 1.820–1.830 • hỗ trợ mạnh 1.770–1.790 • kháng cự 1.850–1.870 • HOSE 222/53/86 • thanh khoản toàn thị trường ~17.700 tỷ • khối ngoại mua ròng ~732 tỷ • không mua đuổi • stoploss 3–7% • R:R ≥ 2:1",
      inference: "Dữ liệu EOD được khóa trong repo từ VNDIRECT Finfo cho ngày 15/09/2026: VN-Index 1.811,15 điểm (+22,92; +1,28%), VN30 1.951,14 điểm (+1,17%), HNX-Index 274,13 điểm (+0,81%), độ rộng HOSE 222 tăng/53 tham chiếu/86 giảm và 0 mã sàn. Stockbiz hiển thị cùng mức đóng cửa chỉ số. Mekong ASEAN và VietnamBiz xác nhận khối ngoại mua ròng trên 700 tỷ đồng; VietnamBiz khóa 732 tỷ toàn thị trường và hơn 719 tỷ trên HOSE, tập trung ở ngân hàng, trong khi VIC/VHM bị bán ròng mạnh. Mekong ASEAN ghi thanh khoản khoảng 17.700 tỷ đồng và các nhóm ngân hàng, chứng khoán, năng lượng dẫn dắt; Kinh tế Chứng khoán cũng xác nhận sắc xanh lan rộng và năng lượng nổi bật nhưng ghi số mã tăng khác với VNDIRECT do cách tổng hợp, nên bài giữ bộ độ rộng HOSE đã khóa trong repo. Confluence Score = +2/7 với các thành phần 0, -1, +1, +1, +1, 0, 0. Veto đang kích hoạt vì thanh khoản không xác nhận đà tăng và R:R tại giá đóng cửa tới kháng cự gần 1.850 so với mốc vô hiệu 1.790 chỉ khoảng 1,84:1. Tự doanh và basis VN30F1M sau phiên 15/09 chưa được khóa độc lập sau nhiều lượt tìm kiếm; vì vậy kết luận bị downgrade về CHỜ / TRADING NGẮN, không mở vị thế mới diện rộng. Nội dung mang tính tham khảo; từng cổ phiếu phải có điểm mua riêng, stoploss 3–7% và R:R tối thiểu 2:1.",
      limitations: [
        "CHƯA XÁC MINH độc lập: giá/basis VN30F1M sau phiên 15/09; các nguồn phái sinh tìm được trong ngày chủ yếu đang phân tích dữ liệu phiên 14/09.",
        "CHƯA XÁC MINH độc lập: tự doanh sau phiên 15/09.",
        "MA20 cập nhật sau phiên chưa có nguồn thứ hai khóa con số; không tuyên bố đã reclaim MA20."
      ],
      zaloPost: "Dữ liệu đến hết phiên 15/09/2026. VN-Index lấy lại mốc 1.800 và đóng tại 1.811,15 điểm, tăng 22,92 điểm (+1,28%). VN30 tăng 1,17% lên 1.951,14 điểm; HNX-Index tăng 0,81% lên 274,13 điểm. Độ rộng HOSE trong bộ dữ liệu EOD khóa từ VNDIRECT Finfo cải thiện rõ với 222 mã tăng, 53 mã tham chiếu và 86 mã giảm. Khối ngoại tiếp tục là điểm cộng khi mua ròng khoảng 732 tỷ đồng toàn thị trường, riêng HOSE hơn 719 tỷ đồng, tập trung ở nhóm ngân hàng như VCB, BID, TCB, MBB, CTG. Dòng tiền cũng lan sang chứng khoán và năng lượng. Tuy nhiên, điểm tôi chưa chấp nhận để nâng trạng thái lên MUA là thanh khoản: nguồn hậu phiên ghi khoảng 17.700 tỷ đồng toàn thị trường, thấp hơn phiên trước. Giá tăng mà thanh khoản không mở rộng thì chưa đủ chuẩn xác nhận breakout. Confluence Score hiện +2/7 nhưng dính veto thanh khoản; thêm nữa, tại giá đóng cửa 1.811,15, khoảng lời tới kháng cự gần 1.850 so với mốc vô hiệu 1.790 cho R:R chỉ khoảng 1,84:1, dưới chuẩn 2:1. Trạng thái: CHỜ / TRADING NGẮN. IF VN-Index retest 1.800–1.810 và giữ được, leader duy trì sức mạnh, THEN có thể thăm dò nhỏ. IF đóng vượt 1.820–1.830 kèm thanh khoản tăng rõ, THEN mới nâng mức rủi ro. IF đóng dưới 1.790, đặc biệt thủng 1.770, THEN hạ phần trading và dừng mua mới. Không mua đuổi, không tăng margin. Từng deal cổ phiếu vẫn phải stoploss 3–7%, target tối thiểu 10–15% và R:R ≥ 2:1.",
      sources: [
        { label: "VNDIRECT Finfo — chỉ số & độ rộng EOD 15/09/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-15&size=500" },
        { label: "Stockbiz — chỉ số thị trường 15/09/2026", url: "https://web.stockbiz.vn/IndexDetail.aspx" },
        { label: "VietnamBiz — Khối ngoại mua ròng hơn 700 tỷ, xuống tiền lớn ở nhóm ngân hàng", url: "https://vietnambiz.vn/khoi-ngoai-mua-rong-hon-700-ty-xuong-tien-lon-o-nhom-ngan-hang-2026915153318997.htm" },
        { label: "Mekong ASEAN — SSB tăng trần phiên thứ hai, cổ phiếu nhóm Gelex hồi phục", url: "https://mekongasean.vn/ssb-tang-tran-phien-thu-hai-co-phieu-nhom-gelex-hoi-phuc-59620.html" },
        { label: "Kinh tế Chứng khoán — VN-Index bật tăng hơn 22 điểm, dòng tiền đổ mạnh vào cổ phiếu nhóm năng lượng", url: "https://kinhtechungkhoan.vn/vn-index-bat-tang-hon-22-diem-dong-tien-do-manh-vao-co-phieu-nhom-nang-luong" },
        { label: "SmartF — bối cảnh kỹ thuật MA/hỗ trợ trước phiên 15/09", url: "https://smartf.vn/article/vn-index-tim-diem-tua-giua-luc-luc-cau-bat-day-xuat-hien/" }
      ]
    }
  ];

  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index];
    if (!entry || !entry.id || !entry.date) continue;
    const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
    if (existingIndex >= 0) store.entries[existingIndex] = entry;
    else store.entries.unshift(entry);
  }

  if (entries[0]?.date) store.updated = entries[0].date;
})();
