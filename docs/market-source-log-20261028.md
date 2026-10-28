# NHẬT KÝ NGUỒN — VN-INDEX PHIÊN 28/10/2026 — V3.3.1

**Ngày phân tích và ngày thực hiện:** 28/10/2026. **Giờ dữ liệu VNDIRECT:** 15:17 giờ Việt Nam; **Stockbiz:** 14:59; **VNIndex.ai:** trạng thái đóng cửa 15:00. **Mốc cắt:** hết 28/10/2026 (giờ Việt Nam). Không dùng số liệu phiên sau. **Sổ dữ liệu tự lưu của người dùng:** không được cung cấp. Không tự lấy bài đăng web làm Sổ gốc.

**Đọc Prompt ba lượt:** (1) cổng dữ liệu, nguồn, ngưỡng độc lập, chuỗi và cắt ngày; (2) MA, bảy yếu tố, phân phối, chặn mềm/cứng, ba bước trạng thái; (3) bố cục xuất bản, Zalo, nhật ký, 20 tự kiểm và Sổ. Nguồn chuẩn tại `docs/prompt-nhan-dinh-vnindex-v3.md` (V3.3.1). HTML/CSS, thứ tự section và dàn dòng v2.2.2 không chỉnh sửa.

## A. Nhật ký nguồn và trích số (chỉ các phiên 28/10)

| Số liệu | Giá trị | Phạm vi | Nguồn 1, trích trực tiếp | Nguồn 2, trích trực tiếp | Nhãn |
|---|---|---|---|---|---|
| VN-Index đóng, thay đổi | **1.766,65; +4,78; +0,27%** | VNINDEX, 28/10 EOD | VNDIRECT Finfo 15:17 `"close":1766.65,"change":4.7800000000002,"pctChange":0.271302650025262` | Stockbiz 14:59 `"28/10/2026 1766,65 +4,78(+0,27%)"`; VNIndex.ai 15:00 `"1.766,65 điểm (+4,78, +0,27%)"` | **ĐÃ ĐỐI CHIẾU** |
| Mở/cao/thấp | **1.762,64 / 1.767,48 / 1.753,95** | VNINDEX | VNDIRECT raw `"open":1762.64,"high":1767.48,"low":1753.95` | VNIndex.ai 15:00: `"1.762,64"`, `"1.767,48"`, `"1.753,95"` | **ĐÃ ĐỐI CHIẾU** |
| Giá trị khớp lệnh | **12.186,46542282 tỷ** (hiển thị 12.186,47) | Chỉ khớp lệnh, tập VNINDEX Finfo HOSE, không gồm thỏa thuận | VNDIRECT raw `"nmValue":12186465422820`; khối lượng `"nmVolume":512485970` | Stockbiz `14.775,67 tỷ` tổng GD; VNIndex.ai `14,78 nghìn tỷ` tổng GD, **khác phạm vi** | **1 NGUỒN** |
| Độ rộng | **121 tăng / 172 giảm / 60 đứng** | Tập VNINDEX VNDIRECT; 54 mã không giao dịch không cộng vào đứng giá | VNDIRECT raw `"advances":121,"declines":172,"noChange":60,"noTrade":54` | VNIndex.ai 404 mã: `"123"` tăng, `"174"` giảm, `"107"` đứng, **khác tập** | **1 NGUỒN** |
| VN30 | **1.890,22 / +1,82 / +0,10%** | Chỉ số VN30 | VNDIRECT marketSession `"close":1890.22` | Stockbiz 14:59 `"VN30 1.890,22 +1,82/+0,10%"` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **259,86 / +0,36 / +0,14%** | Chỉ số HNX | VNDIRECT marketSession `"close":259.86` | Stockbiz 14:59 `"HNX-INDEX 259,86 +0,36/+0,14%"` | **ĐÃ ĐỐI CHIẾU** |
| Top 5 đóng góp chiều tăng | **VCB +2,41; VIC +1,28; HDB +1,14; VPL +0,70; VPB +0,62 điểm** | Đóng góp chỉ số, một nguồn | VNIndex.ai bảng “Kéo chỉ số tăng” 15:00, từng ô nguyên văn: `"+2,41"`, `"+1,28"`, `"+1,14"`, `"+0,70"`, `"+0,62"` | Stockbiz không công bố bảng cùng phương pháp | **1 NGUỒN** |
| Nhóm ngân hàng | **+1,0%** | Chỉ số ngành gia quyền theo vốn hóa | VNIndex.ai 15:03 `"Ngân hàng+1,0 %"` | Không có hai nguồn cùng ngành và phương pháp | **1 NGUỒN, không suy dòng vốn ròng ngành** |
| Khối ngoại KHỚP HOSE | **Chưa xác minh** | Giá trị mua/bán ròng khớp, chuỗi 5 phiên | Stockbiz báo **tổng** mua 1.891,56 tỷ / bán 2.157,97 tỷ, không phải khớp riêng | VNIndex.ai báo −261,09 tỷ **ước tính**, HODL chưa khóa 28/10 đúng thời điểm | **CHƯA XÁC MINH** |
| Tự doanh HOSE | **Chưa xác minh** | 28/10 đúng phạm vi | nmquan lịch sử còn ở 27/10; thử Stockbiz, HODL không đủ dữ liệu đối chiếu cuối phiên | Chưa mở được hai nguồn đồng nhất ngày/phạm vi | **CHƯA XÁC MINH** |
| VN30F1M basis và kỳ hạn | **Chưa xác minh** | Phái sinh đúng kỳ/giờ EOD 28/10 | Stockbiz không có basis; HODL không có bảng đúng kỳ; dữ liệu HNX chưa đủ bản chốt trong lượt kiểm | Không suy hợp đồng hay basis | **CHƯA XÁC MINH** |
| Cờ sự kiện 28/10 | **Lịch sự kiện chưa xác minh đầy đủ** | đáo hạn/ETF/nghỉ lễ | Không lấy lịch của kỳ 15/10 làm cờ 28/10 | Không có chứng cứ gắn cờ 28/10 | **KHÔNG GẮN CỜ** |

**Nguồn đã mở, kiểm đúng ngày và trạng thái:**

- VNDIRECT raw chỉ số, chuỗi lịch sử và phép tính: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40655936237 ; JSON `RAW_VENDOR_INDEX_QUOTE`, `SOURCE_HISTORY_ROWS_JSON`, `VERIFIED_MARKET_EVIDENCE_JSON`. Đơn vị dữ liệu gốc: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices
- VNDIRECT–KBS 133 giá EOD riêng lẻ, đối chiếu khối lượng và khóa sổ: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40655619086
- Stockbiz 28/10/2026 14:59: https://web.stockbiz.vn/IndicesStats.aspx
- VNIndex.ai trạng thái `Đã đóng cửa · 15:00`: https://vnindex.ai/vnindex-hom-nay
- Investing lịch sử 28/10 lúc mở ghi giá 1.766,18, **khác** VNINDEX VNDIRECT/Stockbiz/VNIndex.ai 1.766,65, không dùng làm giá khóa vì dấu hiệu chụp trước khi cập nhật đầy đủ: https://vn.investing.com/indices/vn-historical-data

**Nhật ký tìm kiếm bắt buộc cho ô 1 NGUỒN / CHƯA XÁC MINH:**

| Ô | Trang đã thử | Kết quả |
|---|---|---|
| Khớp lệnh | VNDIRECT raw (dùng); Stockbiz IndicesStats; VNIndex.ai; nmquan lịch sử | VNDIRECT có đúng `nmValue`; Stockbiz/VNIndex.ai **tổng giao dịch** khác phạm vi; nmquan chưa có ngày 28/10 |
| Độ rộng | VNDIRECT raw (dùng); VNIndex.ai; Stockbiz IndicesStats; nmquan | VNIndex.ai 404 mã khác tập, Stockbiz không có hàng độ rộng phù hợp, nmquan tới 27/10 |
| Top mã | VNIndex.ai (dùng); Stockbiz IndicesStats; nmquan VNIndex lịch sử | Stockbiz/nmquan không có đóng góp top theo cùng cách |
| Ngoại KHỚP | Stockbiz; VNIndex.ai; HODL; nmquan | Stockbiz tổng giao dịch; VNIndex.ai ước tính; HODL chưa thấy 28 khóa; nmquan đến 27/10 |
| Tự doanh | nmquan; Stockbiz; HODL | Không đủ bản ngày 28 và đồng phạm vi |
| Basis | Stockbiz; HODL; HNX nguồn tham khảo | Không có số đồng kỳ và đúng giờ chốt |
| Sự kiện | lịch HNX/đáo hạn; công bố cơ cấu ETF; lịch nghỉ giao dịch | Không có chứng cứ gắn cờ phiên 28 |

## B. Chuỗi nguồn (a) và tính bằng công cụ

- Đã đọc **268 phiên**, từ **01/10/2025** đến **28/10/2026** từ **một nguồn duy nhất VNDIRECT Finfo**. Chuỗi liền mạch không ghép nguồn, không điền ngày thiếu. Giá 28/10 khớp hai nguồn độc lập. Hai dòng trích trực tiếp từ bảng raw (rút gọn trường): `"date":"2026-10-26","open":1773.75,"high":1781.45,"low":1759.84,"close":1763.55` và `"date":"2026-10-27","open":1763.46,"high":1772.62,"low":1758.6,"close":1761.87`; dòng khóa `"date":"2026-10-28","open":1762.64,"high":1767.48,"low":1753.95,"close":1766.65`. Hai dòng khác ở JSON `EXACT_SOURCE_SAMPLE_ROWS` 14–15/10.
- Phương thức: mã Node.js trong workflow chỉ đọc nêu trên, dùng `SOURCE_HISTORY_ROWS_JSON` 268 hàng thực. Các phép tính ghi nguyên từ kết quả máy.

| Chỉ báo | Công thức / kết quả | Nhãn |
|---|---|---|
| MA20 | Trung bình 20 giá đóng gồm 28/10 = **1.736,1800 → 1.736,18** | TỰ TÍNH |
| MA50 | Trung bình 50 giá đóng = **1.772,3032 → 1.772,30** | TỰ TÍNH |
| MA200 | Trung bình 200 giá đóng = **1.796,1608 → 1.796,16** | TỰ TÍNH |
| Độ dốc MA20 | 1.736,1800 − 1.739,1990 (MA20 của 5 phiên trước) = **−3,0190 điểm**, dốc xuống | TỰ TÍNH |
| TB20 khớp | 20 phiên ngay trước (không gồm 28/10): **12.326,295987703 tỷ đồng** | TỰ TÍNH |
| Bội số | 12.186,46542282 / 12.326,295987703 = **0,9886559137 → 0,989 lần** | TỰ TÍNH |
| Khớp so 27/10 | (12.186,46542282 / 10.254,68493203 −1) × 100 = **18,84%** | TỰ TÍNH |
| Vị trí đóng trong nến | (1.766,65−1.753,95)/(1.767,48−1.753,95) = **0,93865**, 1/3 trên | TỰ TÍNH |
| Độ rộng tăng/giảm | 121/172 = **0,70349**; trong khoảng (0,67;1,5), yếu tố 3 = 0; nhưng xanh điểm đỏ mã là chặn mềm | TỰ TÍNH |
| Top 5 chiều tăng | 2,41+1,28+1,14+0,70+0,62 = **6,15 điểm**; 6,15/4,78 = **128,66%** → yếu tố 4 −1 và chặn mềm | TỰ TÍNH trên 1 NGUỒN |
| Đáy của 20 phiên trước | **1.677,19 ngày 20/10/2026**, gốc lịch sử VNDIRECT | TỰ TÍNH |
| Phân phối 25 phiên | **7**: 24/09;28/09;30/09;02/10;08/10;09/10;19/10. Loại 15/10 có cờ đáo hạn (nhật ký lịch trước). Phiên 28/10 tăng 0,2713% không là phân phối. **7 ≥6: chặn cứng** | TỰ TÍNH |
| Nền | Đóng **1.766,65** < MA50 **1.772,30**, <MA200 **1.796,16** và MA20 dốc xuống → **XẤU**, trần **KHÔNG** | TỰ TÍNH |
| Điểm 7 yếu tố | Giá/MA 0; thanh khoản 0; độ rộng 0; chất lượng dòng tiền −1; ngoại 0 (thiếu); phân phối −1; phái sinh/vĩ mô 0 (thiếu) → **−2/7** | TỰ TÍNH |
| Trạng thái 3 bước | Bước 1: **KHÔNG dòng 1** vì chặn cứng phân phối; Bước 2 nền XẤU → KHÔNG; Bước 3 không có Sổ người dùng nên **không áp dụng chống đảo chiều** → **KHÔNG** | Theo V3.3.1 |
| Chặn khác | Xả cuối phiên: không (đóng 1/3 trên). Xanh điểm đỏ mã có 0,989× <1,2: không là chặn cứng. Chặn ngoại và mốc vô hiệu Sổ gốc: KHÔNG KIỂM ĐƯỢC. Chặn mềm: độ rộng, top5, MA50 cách đóng ~0,32% | TỰ TÍNH |
| R:R | **Không áp dụng**: KHÔNG mở mới và thiếu mốc vô hiệu gốc | Quy tắc |

## C. Đối chiếu xuất bản website và rủi ro

- Giá: bản `src/data/research-data.js` ngày 28/10, 133/133 mã đã đối chiếu chính xác giá đóng qua VNDIRECT–KBS. CafeF chưa có dòng đúng phiên khi khóa; 129/133 khối lượng trùng, bốn mã BVS, CEO, PVS, SHS khác khối lượng nhỏ/riêng nguồn; dùng khối lượng nguồn chính, không coi khối lượng khác là giá khác.
- Phân kỳ: VN-Index +0,27% và VN30 +0,10%, nhưng chưa đủ dữ kiện VNMID/VNSML đã khóa cùng phạm vi; không suy tiền lan tỏa.
- Sự kiện 15/10: HNX công bố quy tắc Thứ Năm thứ ba của tháng đáo hạn (https://cbtd.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html), danh sách tháng 10/2026 trùng 15/10 (https://www.dsc.com.vn/kien-thuc/dao-han-phai-sinh-la-gi); không gắn cờ cho 28/10 chỉ từ lịch kỳ cũ.\n- Bản đồ: **ngân hàng giữ nhịp** theo VNIndex.ai ngành +1,0% và các mã VCB, HDB kéo điểm; **chưa có nhóm tiền VÀO thật được xác minh đồng thời giá/khớp/ngoại**; chưa có cơ sở ghi nhóm tiền RA ròng nguyên ngành. Nhận định không dùng riêng DGW/PET để kết luận về toàn ngành.
- Mốc có xuất xứ: hỗ trợ 1.753,95 (đáy phiên 28), MA20 1.736,18, đáy 20 phiên trước 1.677,19; kháng cự 1.767,48 (đỉnh phiên), MA50 1.772,30, MA200 1.796,16. Không đặt mốc vô hiệu từ Sổ giả.
- Ba kịch bản định tính và hành động NẾU–THÌ nằm trong bản công bố. Không tự ghi vùng mua vì **trạng thái KHÔNG dòng 1**.
- Bài Zalo trong bản ghi nội dung có độ dài **344 chữ**, giữ cùng số, trạng thái và miễn trừ.
- Mọi nội dung mới chỉ nằm trong **một entry ngày 28/10** ở `src/data/daily-insights-auto.js`, không thay đổi bản cũ, CSS hoặc thứ tự mục. **Giá EOD** cập nhật bởi workflow riêng. Bản bài đăng đã được triển khai và kiểm xác nhận tại https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40656317232: 169 test đạt, 0 trượt, 133 ảnh bìa và 133 logo, SHA-256 CSS giữ nguyên. Các lịch EOD/watchdog có sẵn vẫn giữ nguyên.

## D. Bảng tự kiểm 20 mục

| # | Mục | Kết quả | Căn cứ / hạn chế |
|---|---|---|---|
| 1 | Phiên và thời điểm nguồn | ĐẠT | 28/10 có phiên, vendor 15:17 |
| 2 | Không dùng phiên tương lai | ĐẠT | Chỉ dữ liệu đến 28/10 |
| 3 | Không lấy từ trí nhớ / snippet | ĐẠT | Raw vendor và các trang đã mở |
| 4 | Nguồn đã mở | ĐẠT | Link GitHub audit + Stockbiz + VNIndex.ai |
| 5 | Hai nguồn độc lập số lõi | ĐẠT CÓ GIỚI HẠN | Đóng/% 2+ nguồn; khớp/độ rộng chỉ **1 NGUỒN**, trần không thể CÓ |
| 6 | Nhật ký tìm kiếm số thiếu | ĐẠT | Mục A đủ 3 trang cho số chưa xác minh |
| 7 | Tự tính chuỗi một nguồn | ĐẠT | 268 hàng cùng VNDIRECT, code audit |
| 8 | Số xuất bản truy về nhật ký | ĐẠT | Mục A/B/C |
| 9 | Không sửa Sổ lịch sử | ĐẠT | Không có Sổ gốc, chỉ dòng mới dưới đây |
| 10 | Ngày do người dùng chỉ định | ĐẠT | 28/10 |
| 11 | Chế độ đầy đủ / rút gọn | ĐẠT | ĐẦY ĐỦ nhờ 268 phiên |
| 12 | Nền xu hướng | ĐẠT | XẤU với MA20/50/200 và dốc |
| 13 | Bảy yếu tố | ĐẠT | −2/7, thiếu chấm 0 |
| 14 | Chặn và chặn từ trước | ĐẠT CÓ GIỚI HẠN | 7 phân phối kiểm được; không có Sổ thì chặn cũ KHÔNG KIỂM ĐƯỢC |
| 15 | Trạng thái ba bước | ĐẠT | KHÔNG dòng 1; bước chống đảo chiều bỏ do không có Sổ |
| 16 | Vùng mua theo dòng cuối | ĐẠT | Không đăng vùng mua |
| 17 | Mốc, R:R, kịch bản | ĐẠT CÓ GIỚI HẠN | Có gốc mốc; R:R không áp dụng; vô hiệu Sổ không kiểm được |
| 18 | Bản đồ tiền ngành có chứng cứ | ĐẠT | Chỉ ghi ngân hàng giữ nhịp, không khẳng định tiền vào thật |
| 19 | Zalo/web đúng số, đúng bố cục | ĐẠT | GitHub Pages run 40656317232 thành công; 169/169 test, 133 ảnh và 133 logo, byte sau triển khai khớp |
| 20 | Sổ mới, Phần B, không chép cũ | ĐẠT CÓ GIỚI HẠN | Chỉ bổ sung 28/10; không có Sổ người dùng |

## E. Phần bổ sung Sổ dữ liệu (không đăng web)

```text
=== SỔ DỮ LIỆU VNINDEX — BỔ SUNG PHIÊN 28/10/2026 ===

PHẦN A — CHỈ DÒNG MỚI
28/10/2026;1766,65;1767,48;1753,95;0,271302650025262;12186,46542282;121;172;60;;1890,22;;;Không;1 NGUỒN: khớp, độ rộng; CHƯA XÁC MINH: ngoại khớp, phái sinh

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu đang hiệu lực: KHÔNG KIỂM ĐƯỢC — thiếu Sổ người dùng
Hỗ trợ gần: 1753,95 (đáy 28/10), 1736,18 (MA20)
Kháng cự gần: 1767,48 (đỉnh 28/10); 1772,30 (MA50)
Chặn cứng có căn cứ ở phiên này: 7 phiên phân phối/25; gỡ khi còn tối đa 5
Phiên phân phối còn hiệu lực: 24/09; 28/09; 30/09; 02/10; 08/10; 09/10; 19/10
Khối ngoại mua/bán liên tiếp: CHƯA XÁC MINH
Basis VN30F1M âm >1% liên tiếp: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không có đính chính khi chưa được cung cấp Sổ gốc
```

**Quy tắc an toàn:** Dữ liệu thiếu không đồng nghĩa thị trường xấu. Trạng thái KHÔNG ngày 28 có căn cứ kiểm được riêng (7 phân phối và nền XẤU), không phải vì thiếu ngoại/basis hay thiếu Sổ.
