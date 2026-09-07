from pathlib import Path

path = Path('src/data/daily-insights.js')
text = path.read_text(encoding='utf-8')

if 'id: "market-view-20260907"' in text:
    raise SystemExit('07/09 entry already exists; refusing duplicate write')

old_updated = '  updated: "2026-09-04",'
if old_updated not in text:
    raise SystemExit('Expected prior updated date 2026-09-04 not found')
text = text.replace(old_updated, '  updated: "2026-09-07",', 1)

anchor = '  entries: [\n'
if text.count(anchor) != 1:
    raise SystemExit('entries anchor missing or non-unique')

entry = '''    {
      id: "market-view-20260907",
      date: "2026-09-07",
      publishedAt: "07/09/2026 • Sau phiên",
      edition: "Số 12",
      sentiment: "negative",
      sentimentLabel: "GIẢM RỦI RO",
      dataStatus: "ĐTCK + CafeF/Vietcap • EOD 07.09.2026",
      title: "VN-Index đảo chiều giảm sâu, VETO từ độ rộng kích hoạt giảm rủi ro",
      thesis: "VN-Index giảm 31,44 điểm (-1,70%) xuống 1.821,64 điểm sau khi có lúc lùi dưới 1.810. Độ rộng HOSE xấu rõ với 84 mã tăng và 235 mã giảm; tổng GTGD đạt 17.153 tỷ đồng, tăng 2,7% và khối lượng tăng 4,1% so với 04/09, trong khi khớp lệnh chỉ khoảng 13.600 tỷ. Khối ngoại bán ròng 469 tỷ đồng trên HOSE. TRẠNG THÁI TÁC NGHIỆP: GIẢM RỦI RO do VETO độ rộng và áp lực bán ở nhóm vốn hóa lớn.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "2 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.821,64", change: "−31,44 • −1,70%", tone: "negative" },
        { label: "GTGD HOSE", value: "17.153 tỷ", change: "+2,7% giá trị • +4,1% khối lượng vs 04/09", tone: "warning" },
        { label: "ĐỘ RỘNG HOSE", value: "84 tăng / 235 giảm", change: "Số mã giảm gần gấp 3 lần số mã tăng", tone: "negative" },
        { label: "KHỐI NGOẠI HOSE", value: "BÁN RÒNG", change: "−469 tỷ đồng", tone: "negative" }
      ],
      backdrop: [
        "VN-Index mở đầu phiên có lúc tăng gần 20 điểm nhưng đảo chiều mạnh trong buổi chiều và đóng cửa 1.821,64 điểm, giảm 31,44 điểm. Chỉ số có thời điểm thủng 1.810 trước khi hồi nhẹ cuối phiên; diễn biến này phủ nhận phần lớn nhịp bứt phá trên 1.850 của ngày 04/09.",
        "Độ rộng HOSE nghiêng mạnh về phía bán với 235 mã giảm so với 84 mã tăng. Tổng khối lượng đạt hơn 643,8 triệu cổ phiếu và GTGD 17.153 tỷ đồng, đều tăng nhẹ so với 04/09; riêng giá trị khớp lệnh theo CafeF khoảng 13.600 tỷ đồng, cho thấy cầu chủ động chưa đủ hấp thụ áp lực chốt lời ở nhóm trụ.",
        "VIC giảm 4,3% và riêng mã này lấy xấp xỉ 17,5 điểm khỏi VN-Index; TCB, CTG, VNM, VPB, MBB, BSR và TCX cũng giảm. Bất động sản giảm hơn 3%; chứng khoán và ngân hàng đồng loạt chịu sức ép, xác nhận VETO từ nhóm dẫn dắt thay vì một nhịp rung lắc hẹp.",
        "Khối ngoại bán ròng 469 tỷ đồng trên HOSE theo dữ liệu Vietcap được CafeF dẫn lại. VCB bị bán ròng khoảng 92 tỷ đồng, CTG 74 tỷ, VIC 53 tỷ; chiều mua tập trung ở HDB, VRE và VPB nhưng không đủ cân bằng áp lực bán chung."
      ],
      levels: [
        { label: "Vùng phòng thủ gần", value: "1.805–1.820", note: "Chỉ số đã xuyên 1.810 trong phiên và đóng sát 1.820. Nếu tiếp tục đóng dưới vùng này, trạng thái risk-off được củng cố." },
        { label: "Vùng cần lấy lại", value: "1.830–1.850", note: "Cần phục hồi và giữ lại vùng này cùng độ rộng cân bằng hơn trước khi xem xét hạ mức cảnh báo." },
        { label: "Ngưỡng xác nhận tích cực", value: "> 1.870", note: "Chỉ chuyển sang positive khi đóng vượt 1.870, số mã tăng áp đảo, thanh khoản đồng thuận và không còn VETO từ nhóm trụ." }
      ],
      playbook: [
        { state: "positive", if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.870, độ rộng chuyển sang số mã tăng áp đảo, thanh khoản cải thiện và không còn VETO từ nhóm dẫn dắt", then: "TĂNG DẦN tỷ trọng ở leader/setup hợp lệ; chia lệnh, chỉ nhận giao dịch có R:R tối thiểu 2:1 và stoploss 3–7% theo cấu trúc từng mã." },
        { state: "neutral", if: "CÂN BẰNG / CHƯA XÁC NHẬN — VN-Index giữ được 1.805–1.820, lấy lại 1.830–1.850 nhưng độ rộng hoặc thanh khoản vẫn chưa đồng thuận", then: "GIỮ / CHỜ với tỷ trọng vừa phải; giữ mã khỏe, chờ điểm vào có R:R tốt và không mua đuổi khi chưa đủ xác nhận." },
        { state: "risk_off", if: "VETO / RISK-OFF — VN-Index đóng dưới 1.820 hoặc độ rộng tiếp tục xấu rõ, nhóm vốn hóa lớn mở rộng đà giảm, hay áp lực bán gia tăng", then: "GIẢM RỦI RO phần trading; không bắt đáy sớm, không bình quân giá xuống. Với vị thế đang nắm giữ, tuân thủ stoploss 3–7% theo cấu trúc từng mã." }
      ],
      focus: "1.805–1.820 • vùng lấy lại 1.830–1.850 • VETO độ rộng • VIC/nhóm trụ • khối ngoại bán ròng",
      inference: "VN-Index 1.821,64 điểm, giảm 31,44 điểm (-1,70%), độ rộng 84 tăng/235 giảm, khối lượng hơn 643,8 triệu cổ phiếu và GTGD HOSE 17.153 tỷ đồng được lấy từ Tin nhanh Chứng khoán ngày 07/09/2026; nguồn này ghi khối lượng tăng 4,1% và giá trị tăng 2,7% so với 04/09. CafeF ghi giá trị khớp lệnh HOSE khoảng 13.600 tỷ đồng và khối ngoại bán ròng 469 tỷ đồng trên HOSE theo dữ liệu Vietcap. Việc xếp trạng thái GIẢM RỦI RO là diễn giải tác nghiệp của Xuân Lê TVS theo quy tắc VETO: độ rộng xấu rõ và nhóm vốn hóa lớn đồng loạt gây áp lực, dù điểm đóng cửa vẫn nhỉnh hơn 1.820. Các vùng 1.805–1.820, 1.830–1.850 và trên 1.870 là mốc tác nghiệp có điều kiện, không phải mức được đảm bảo. Không nội suy số liệu thiếu. Với giao dịch mới hoặc vị thế đang quản trị, ưu tiên R:R tối thiểu 2:1 khi có setup hợp lệ và stoploss 3–7% theo cấu trúc từng mã. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.",
      sources: [
        { label: "Tin nhanh Chứng khoán — Cổ phiếu lớn gây sức ép, VN-Index giảm hơn 31 điểm", url: "https://www.tinnhanhchungkhoan.vn/co-phieu-lon-gay-suc-ep-vn-index-giam-hon-31-diem-post397154.html" },
        { label: "CafeF — VN-Index đánh rơi gần 31 điểm phiên đầu tuần", url: "https://cafef.vn/vn-index-dot-ngot-danh-roi-30-diem-phien-dau-tuan-dieu-gi-dang-xay-ra-188260907155447896.chn" },
        { label: "CafeF/Vietcap — Khối ngoại bán ròng 469 tỷ đồng trên HOSE", url: "https://cafef.vn/khoi-ngoai-ban-rong-gan-500-ty-dong-trong-ngay-vn-index-giam-sau-co-phieu-nao-bi-xa-manh-nhat-188260907152912131.chn" }
      ]
    },
'''

text = text.replace(anchor, anchor + entry, 1)
path.write_text(text, encoding='utf-8')

# Lightweight integrity checks for the new entry.
updated = path.read_text(encoding='utf-8')
if updated.count('id: "market-view-20260907"') != 1:
    raise SystemExit('New entry integrity failure')
start = updated.index('id: "market-view-20260907"')
end = updated.index('id: "market-view-20260904"')
block = updated[start:end]
states = [block.find('state: "positive"'), block.find('state: "neutral"'), block.find('state: "risk_off"')]
if any(x < 0 for x in states) or states != sorted(states):
    raise SystemExit('Playbook state order invalid')
print('PATCH_OK')
