# NHẬT KÝ BẰNG CHỨNG VN-INDEX — 02/11/2026 — v3.3.1

**Ngày phân tích và ngày thực hiện:** Thứ Hai 02/11/2026. **Mốc cắt:** hết phiên 02/11/2026 (giờ Việt Nam), không đưa các diễn biến phiên sau vào. **Sổ gốc người dùng:** chưa được cung cấp; bản web 30/10 chỉ là tài liệu tham khảo, không được dùng thay Sổ mang sang. **Khung giao diện:** `market-decision-brief-standard.md` v2.2.2; không sửa HTML, CSS hoặc thứ tự mục.

**Đã kiểm tra Prompt ba lượt riêng:**
- Lượt 1: chương 0–I, xác minh ngày, nguồn, điều kiện ĐẠT/không ĐẠT, phạm vi khớp lệnh, nguồn độc lập, mốc cắt và chuỗi lịch sử.
- Lượt 2: chương II, trần xu hướng, bảy yếu tố, công thức phân phối/25 phiên, chặn mềm/cứng, ba bước quy đổi trạng thái, điều kiện gỡ.
- Lượt 3: chương III–XII, mốc kỹ thuật, kịch bản NẾU–THÌ, vùng mua theo trạng thái, 250–400 chữ Zalo, nội dung web, 20 tự kiểm và Sổ (chỉ phần mới).

## A. Nguồn đã mở và đối chiếu ngày 02/11

| Dữ liệu | Số chốt, đơn vị và phạm vi | Nguồn gốc đã đọc | Nguồn độc lập đối chiếu | Nhãn |
|---|---|---|---|---|
| VN-Index | **1.710,72; −30,90; −1,77%** | VNDIRECT Finfo raw `"date":"2026-11-02","close":1710.72,"change":-30.9,"pctChange":-1.77421021807282` (15:15) | Stockbiz sau 15:03 `1.710,72 -30,90/-1,77%`; VNIndex.ai 15:00 `1.710,72 -30,90 -1,77%` | **ĐÃ ĐỐI CHIẾU** |
| VN-Index mở/cao/thấp | **1.731,90 / 1.744,35 / 1.693,75** | VNDIRECT raw `open=1731.9,high=1744.35,low=1693.75` | VNIndex.ai `1.731,90/1.744,35/1.693,75` đúng phiên, giờ 15:00 | **ĐÃ ĐỐI CHIẾU** |
| Chỉ số khác | VN30 **1.813,41; −41,63; −2,24%**; HNX **250,55; −2,19; −0,87%** | VNDIRECT marketSession 02/11 | Stockbiz cuối phiên sau 15:03 cùng số | **ĐÃ ĐỐI CHIẾU** |
| Khớp lệnh HOSE, **không gồm thỏa thuận** | **15.840,06861909 tỷ**; KL **724.512.489 cp** | VNDIRECT Finfo `"nmValue":15840068619090,"nmVolume":724512489` 15:15 | Stockbiz ghi **tổng** 18.439,96 tỷ; VNIndex.ai **tổng** 18,44 nghìn tỷ, không cùng phạm vi. Chưa tìm thấy bảng khớp độc lập đồng phạm vi làm căn cứ khóa số nguyên gốc. | **1 NGUỒN** |
| Tổng giao dịch HOSE | **18.577,219527890 tỷ**; KL **877.465.335 cp** | VNDIRECT `accumulatedVal=18577219527890,accumulatedVol=877465335` | Stockbiz 18.439,96 tỷ / 872.751.636 cp; VNIndex.ai 18,44 nghìn tỷ / 872,75 triệu. **Có sai khác với VNDIRECT, không hòa giải bằng suy đoán**. | **CHƯA ĐỐI CHIẾU THỐNG NHẤT; không dùng làm khớp** |
| Độ rộng cùng tập VNDIRECT VNINDEX | **43 tăng / 267 giảm / 47 đứng**, 14 sàn; 51 không giao dịch | `"advances":43,"declines":267,"noChange":47,"floorStocks":14,"noTrade":51` | VNIndex.ai **404 mã**: `46/279/79`, khác tập đếm. Stockbiz bảng chỉ số không ghi độ rộng tương ứng. Không gộp hai phạm vi. | **1 NGUỒN** |
| Tập 5 mã gây giảm điểm | **VCB −4,65; VPB −2,89; BID −2,24; GVR −1,77; VHM −1,69 điểm** | VNIndex.ai 15:00, bảng “Ghì chỉ số giảm” từng mã | Vietstock/Fili có VCB, VPB, BID gây giảm nhưng số trước giờ khóa không cùng mốc; Stockbiz không có bảng điểm cùng công thức | **1 NGUỒN** |
| Ngành | Ngân hàng **−3,1%** (VNIndex.ai) | VNIndex.ai 15:00, chỉ số ngành gia quyền vốn hóa | Bài Fili trong phiên ghi ngân hàng yếu, không đủ cùng phạm vi đo | **1 NGUỒN; chỉ sức giá, không suy tiền ròng** |
| NĐT nước ngoài tổng HOSE | **Mua 1.878,60; bán 2.395,07; ròng −516,47 tỷ** | Stockbiz dòng 02/11/2026, **GTGD tổng**, gồm khả năng thỏa thuận | VNIndex.ai nói bán ròng ước tính −503,3 tỷ từ các mã; khác phương pháp | **KHÔNG ĐƯỢC coi là KHỚP** |
| NĐTNN **KHỚP** HOSE và chuỗi 5 phiên | **Chưa xác minh** | Thử Stockbiz (tổng), VNIndex.ai (ước tính), Taichinh.com (bảng chỉ số, không có ròng khớp cùng phạm vi) | Chưa có hai nguồn đồng phạm vi cho chuỗi 3–5 phiên | **CHƯA XÁC MINH** |
| Tự doanh đúng sàn/phiên và VN30F1M basis đúng kỳ | **Chưa xác minh** | Thử Stockbiz (không có cùng bảng chốt), VNIndex.ai (không có basis được khóa), VNB​uffet (bảng phái sinh trong phiên khác giờ) | Không gán basis từ dữ liệu trước ATC làm số cuối phiên | **CHƯA XÁC MINH** |
| Cờ sự kiện toàn thị trường 02/11 | **Chưa có bằng chứng xác lập cờ thanh khoản ETF/đáo hạn** | Lịch HNX đáo hạn 15/10, Stockbiz, VNIndex.ai, Vietstock 02/11 | Không dùng cờ của ngày khác; chặn phân phối kiểm theo số EOD | **KHÔNG GẮN CỜ; phạm vi lịch tổng thể chưa đủ** |

**Liên kết nguồn mở thực tế:**
1. Nhật ký VNDIRECT 271 dòng và JSON gốc: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41411967721 ; URL dữ liệu gốc https://api-finfo.vndirect.com.vn/v4/vnmarket_prices
2. Stockbiz ngày 02/11 sau đóng: https://web.stockbiz.vn/IndicesStats.aspx
3. VNIndex.ai, 02/11 `Đã đóng cửa • 15:00`: https://vnindex.ai/vnindex-hom-nay
4. Vietstock/Fili có mô tả phiên trong ngày, KHÔNG dùng số trước ATC làm số cuối: https://fili.vn/2026/11/nhip-dap-thi-truong-0211-sac-do-bao-phu-1636-1509945.htm
5. Taichinh.com giờ đầu ngày, chứng minh dữ liệu cũ chưa khóa: https://taichinh.com/chung-khoan
6. Investing phiên 02/11 được chụp lúc 12:56, **không dùng** thay giá chốt: https://vn.investing.com/indices/vn-historical-data

**Nhật ký tìm kiếm 1 NGUỒN/thiếu:**
- Khớp lệnh: (1) VNDIRECT `nmValue`; (2) Stockbiz `Giá trị GD` **tổng**; (3) VNIndex.ai `Giá trị giao dịch` **tổng**; (4) Taichinh.com tổng thị trường. Không tự trừ thỏa thuận từ nguồn khác để tạo khớp giả.
- Độ rộng: (1) VNDIRECT 43/267/47; (2) VNIndex.ai 46/279/79 trên 404 mã; (3) Taichinh.com độ rộng cũ trong phiên; (4) Stockbiz không có số cùng tập. Đã gắn nhãn 1 NGUỒN.
- Ngoại khớp: (1) Stockbiz GTGD tổng; (2) VNIndex.ai ước tính; (3) Taichinh.com không có chuỗi khớp cùng phương pháp. Không dùng chặn cứng ngoại vì thiếu chuỗi.
- Tự doanh/basis: (1) Stockbiz; (2) VNIndex.ai; (3) VNB​uffet bảng có cập nhật khác giờ, chưa đủ basis cuối phiên và 3 ngày; điểm 0.

## B. Tính toán bằng code từ chuỗi đồng nhất VNDIRECT

Kiểm toán độc lập `41411967721` đọc đủ **271 phiên** từ **01/10/2025** đến **02/11/2026**, không nối nguồn khác. Hai dòng lịch sử có thể đối chiếu trực tiếp (trích rút gọn trường nguồn):
- `"date":"2026-10-29","close":1755.61,"nmValue":12452819462590`
- `"date":"2026-10-30","close":1741.62,"nmValue":11950466727210`
- Dòng cuối: `"date":"2026-11-02","close":1710.72,"nmValue":15840068619090`.

| Phép tính | Kết quả có gốc | Nhãn |
|---|---|---|
| MA20 gồm 02/11 | 20 giá đóng **1.734,5670 → 1.734,57** | TỰ TÍNH |
| MA50 | 50 giá đóng **1.772,7388 → 1.772,74** | TỰ TÍNH |
| MA200 | 200 giá đóng **1.794,27535 → 1.794,28** | TỰ TÍNH |
| Dốc MA20 5 phiên | 1.734,5670 − 1.737,0715 = **−2,5045 điểm** | TỰ TÍNH |
| TB20 khớp (20 phiên trước, không gồm 02/11) | **12.308,295144014 tỷ** | TỰ TÍNH |
| Khớp/TB20 | 15.840,06861909 / 12.308,295144014 = **1,286942540 → 1,287×** | TỰ TÍNH |
| Khớp so 30/10 | (15.840,06861909 / 11.950,46672721 −1)×100 = **32.548%** | TỰ TÍNH |
| Độ rộng | 43/267 = **0.16105** ≤0,67 ⇒ **−1** | TỰ TÍNH (tập VNDIRECT, 1 nguồn) |
| Top 5 kéo giảm | 4,65+2,89+2,24+1,77+1,69 = **13.24**; /30,90=**42.85%** ≤50% ⇒ phiên giảm bán rộng, yếu tố chất lượng dòng tiền **−1** | TỰ TÍNH từ bảng đóng góp 1 NGUỒN |
| Vị trí đóng trong nến | (1.710,72−1.693,75)/(1.744,35−1.693,75)=**0.335375**. Lớn hơn đúng 1/3 (0,333333), nên **không kích hoạt chặn xả cuối theo công thức**; chênh sát ranh, không nói có lực hấp thụ rõ. | TỰ TÍNH, OHLC đã đối chiếu |
| Đáy 20 phiên liền trước | **1.677,19** (20/10/2026), tính theo chuỗi VNDIRECT | TỰ TÍNH |
| Phiên phân phối 02/11 | −1,7742% (≤−0,2%) **và** khớp 15.840,07 >11.950,47 tỷ của 30/10 ⇒ **Có phân phối mới** | TỰ TÍNH |
| Phân phối còn hiệu lực / 25 phiên | **7** ngày 30/09,02/10,08/10,09/10,19/10,29/10,02/11; ngày 28/09 ra khỏi cửa sổ 25. 15/10 có cờ đáo hạn đã được xác lập ở nhật ký kỳ trước. **≥6 ⇒ chặn cứng**, chỉ gỡ khi ≤5 | TỰ TÍNH |
| Nền | Giá đóng 1.710,72 dưới MA50 1.772,74, dưới MA200 1.794,28, dưới MA20 1.734,57; MA20 giảm ⇒ **XẤU**, trần KHÔNG | Theo V3.3.1 |
| Điểm 7 yếu tố | Giá/MA **−1**; thanh khoản **−1** (giảm mà khớp 1,287×TB20); độ rộng **−1**; chất lượng bán lan rộng **−1**; ngoại **0** (thiếu); sức khỏe xu hướng **−1**; phái sinh/vĩ mô **0** (thiếu): tổng **−5/7** | Theo V3.3.1 |
| Chặn cứng | ĐÃ XÁC MINH **7 phân phối/25**. Không có chặn xả cuối theo phép đo 0,335375>1/3. Ngoại khớp và mốc vô hiệu của Sổ người dùng **KHÔNG KIỂM ĐƯỢC**; không giả định đã vượt qua. | Theo V3.3.1 |
| Đường đi 3 bước | **Bước 1 KHÔNG dòng 1** (chặn cứng 7 phân phối); **Bước 2 KHÔNG** (nền XẤU); **Bước 3 bỏ qua** vì không có Sổ gốc phiên trước; chốt **KHÔNG dòng 1**. | Theo V3.3.1 |
| R:R | Không áp dụng khi chốt KHÔNG và chưa có mốc vô hiệu đã công bố trong Sổ người dùng. Không lấy đáy phiên thay stop cũ. | Theo V3.3.1 |

## C. Quy tắc hành động, mốc có xuất xứ

- **Đã xảy ra:** VN-Index đóng **1.710,72 dưới đáy 30/10 (1.727,00)**. Kích hoạt rà soát vị thế yếu theo kế hoạch đã đăng phiên 30/10; không đồng nhất việc VN-Index thủng mốc với mọi mã cổ phiếu đều phải bán.
- **Hỗ trợ quan sát:** đáy 02/11 **1.693,75** (VNDIRECT/VNIndex.ai), đáy 20 phiên trước **1.677,19** (20/10 theo một nguồn); không tạo vùng mua vì trạng thái KHÔNG.
- **Kháng cự gần:** đáy 30/10 **1.727,00** nay nằm trên giá đóng, MA20 **1.734,57**, đỉnh phiên 02/11 **1.744,35**; cản xa MA50 **1.772,74**, MA200 **1.794,28**.
- **NẾU** đóng dưới **1.693,75** THÌ ưu tiên rà rủi ro từng mã, xử lý mã vi phạm dừng lỗ đã khóa, tránh dùng margin hay bình quân xuống.
- **NẾU** lấy lại MA20, vượt MA50 **1.772,74**, MA20 đảo dốc, phân phối còn ≤5, dữ liệu khớp/độ rộng/ngoại được xác nhận THÌ tính lại toàn bộ cổng; **không mua tự động** chỉ vì giá hồi.
- **Dòng tiền:** nhóm ngân hàng yếu (VNIndex.ai chỉ số ngành −3,1% và VCB/VPB/BID gây áp lực), nhưng chưa đủ bảng giá+khớp+ngoại **cấp ngành** để gọi tên tiền rút ròng theo phạm vi Prompt. Không thấy nhóm tiền vào thật được xác minh ba tiêu chí.
- **Danh mục tham khảo:** hệ thống tự loại VPB, GMD, GVR ngày 02/11 khi vi phạm dừng lỗ so với trung điểm vùng AmiBroker; BSR và DGW vẫn thuộc lịch sử. Không phải lệnh bán áp dụng tự động cho tài khoản môi giới thực.

## D. Bảng tự kiểm 20 mục

| # | Mục | Kết quả | Căn cứ / giới hạn |
|---|---|---|---|
| 1 | Đúng phiên, thời điểm | ĐẠT | VNDIRECT 02/11 15:15, Stockbiz và VNIndex.ai đóng |
| 2 | Không dùng số phiên sau mốc | ĐẠT | Chỉ lịch đến 02/11 |
| 3 | Không dùng trí nhớ/snippet như nguồn | ĐẠT | JSON raw và trang web đã mở |
| 4 | Trang nguồn đã đọc, link thực | ĐẠT | Mục A |
| 5 | Hai nguồn cho số lõi, giữ đúng đơn vị | ĐẠT CÓ GIỚI HẠN | Đóng/% hai nguồn; khớp/độ rộng 1 NGUỒN và ghi phạm vi |
| 6 | Nhật ký thử tối thiểu 3 trang đối với dữ liệu thiếu | ĐẠT | Mục A |
| 7 | Chuỗi gốc và phép tính | ĐẠT | 271 hàng, máy tính qua workflow |
| 8 | Số liệu khớp nhật ký | ĐẠT | Mục A/B |
| 9 | Không đụng Sổ cũ | ĐẠT | Không có Sổ gốc |
| 10 | Ngày lấy từ lệnh | ĐẠT | 02/11/2026 |
| 11 | Chế độ ĐẦY ĐỦ/RÚT GỌN | ĐẠT | ĐẦY ĐỦ (5 chỉ tiêu từ 271 phiên) |
| 12 | Nền xu hướng đủ số | ĐẠT | XẤU, giá dưới MA20/50/200, dốc MA20 âm |
| 13 | Chấm 7 yếu tố đúng ngưỡng | ĐẠT | −5/7; ngoại và phái sinh thiếu = 0 |
| 14 | Chặn và hiệu lực | ĐẠT CÓ GIỚI HẠN | 7 phân phối kiểm được; ngoại và Sổ chưa kiểm được |
| 15 | 3 bước và trạng thái cuối | ĐẠT | KHÔNG dòng 1; không do thiếu dữ liệu |
| 16 | Quy tắc không mở vùng mua | ĐẠT | KHÔNG ⇒ không vùng mua |
| 17 | Mốc, R:R và 3 kịch bản | ĐẠT CÓ GIỚI HẠN | Mốc vô hiệu Sổ không có; R:R không áp dụng |
| 18 | Bản đồ ngành theo chứng cứ | ĐẠT | Sức giá ngân hàng, không suy dòng vốn ròng |
| 19 | Bài Zalo trùng với web, không đổi bố cục | CHỜ KẾT QUẢ TRIỂN KHAI | Xác minh sau xuất bản |
| 20 | Sổ chỉ nối dòng mới/Phần B | ĐẠT | Phần E |

## E. Phần bổ sung Sổ tự lưu (chỉ cung cấp để người dùng cập nhật Sổ, không đăng lên web)

```text
=== SỔ VNINDEX BỔ SUNG PHIÊN 02/11/2026 ===
PHẦN A — CHỈ DÒNG MỚI
02/11/2026;1710,72;1744,35;1693,75;-1,77421021807282;15840,06861909;43;267;47;;1813,41;;;Có;1 NGUỒN: khớp và độ rộng; CHƯA XÁC MINH: ngoại KHỚP và basis

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu từ Sổ gốc: KHÔNG KIỂM ĐƯỢC
Hỗ trợ: 1693,75 (đáy 02/11); 1677,19 (đáy 20 phiên trước)
Kháng cự: 1727,00 (đáy 30/10); 1734,57 (MA20); 1772,74 (MA50)
Chặn cứng hiện hiệu lực: 7 phiên phân phối/25, chỉ gỡ khi ≤5
Phân phối hiệu lực: 30/09;02/10;08/10;09/10;19/10;29/10;02/11
Ngoại KHỚP liên tiếp: CHƯA XÁC MINH
Basis VN30F1M âm >1% liên tiếp: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không tự sửa dòng cũ khi chưa có Sổ gốc người dùng.
```

**Ghi chú chất lượng:** Không coi mất dữ liệu là thị trường xấu; tình trạng KHÔNG ngày 02/11 được quyết định bởi số liệu định lượng đã đủ: chặn 7 phân phối và nền XẤU. Nhãn `1 NGUỒN` không đủ điều kiện cho trạng thái CÓ.
