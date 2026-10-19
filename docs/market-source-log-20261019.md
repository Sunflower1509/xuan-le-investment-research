# NHẬT KÝ KIỂM SOÁT NGUỒN — VN-INDEX 19/10/2026 — Prompt V3.3.1

**Ngày phân tích và chốt giá:** 19/10/2026, thứ Hai, có phiên. **Mốc cắt thông tin:** hết phiên và hết ngày 19/10 giờ Việt Nam. Bản HOSE công bố 16:39 cùng ngày và kiểm toán Finfo lúc 19:13 cùng ngày, không đưa dữ liệu phiên sau. **Không có Sổ dữ liệu tự lưu của người dùng**; các bản đã xuất bản trên website không phải Sổ gốc. Đã đọc prompt `docs/prompt-nhan-dinh-vnindex-v3.md` ba lượt: cổng dữ liệu → logic quyết định → quy tắc đầu ra/giữ giao diện.

## A. Nhật ký giá và phạm vi

| Dữ kiện | Giá trị chốt | Nguồn, kiểm chứng và phạm vi | Nhãn |
|---|---|---|---|
| VN-Index đóng cửa | **1.689,84, −16,07 điểm, −0,94%** | HOSE, trang thông tin 19/10: `VNINDEX 1.689,84 -16,07 -0,94`; Stockbiz IndexStats 19/10; VNDIRECT Finfo bản khóa 19/10: `"close":1689.84` | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.839,18, −16,23, −0,87%** | HOSE `VN30 1.839,18 -16,23 -0,87`, VNDIRECT `"close":1839.18` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **257,91, −1,22, −0,47%** | Stockbiz chỉ số HNX, VNDIRECT Finfo EOD `"close":257.91` | **ĐÃ ĐỐI CHIẾU** |
| Mở, cao, thấp VNINDEX | **1.721,05 / 1.721,39 / 1.682,54** | VNDIRECT Finfo thô phiên 19/10 lúc 15:33 (kiểm toán `RAW_VENDOR_INDEX_QUOTE`), cùng điểm thấp 1.682,54 với VNIndex.ai; Investing.com ghi **mốc mở, cao khác**, vì vậy không khẳng định đồng nhất OH. | **1 NGUỒN OH; ĐỐI CHIẾU đáy** |
| HOSE **toàn thị trường**, GT/KL khớp | **11.393 tỷ; 586.284.301 CP** | HOSE công bố 16:39, dòng `Khớp lệnh 586.284.301 11.393`; tổng GD **13.425 tỷ** không được gọi là khớp | **1 NGUỒN** |
| **VNINDEX VNDIRECT**, GT/KL khớp | **11.323,15122708 tỷ; 519.290.379 CP** | VNDIRECT Finfo raw `"nmValue":11323151227080` và `"nmVolume":519290379`, nguồn duy nhất dùng **nhất quán cho MA/TB20/đếm phân phối**. BSC ghi khớp **11.351 tỷ**; các phạm vi không khớp hoàn toàn | **1 NGUỒN** |
| Độ rộng VNDIRECT | **153 tăng / 131 giảm / 75 đứng / 2 sàn** | VNDIRECT Finfo marketSession `"advances":153,"declines":131,"noChange":75`; VNIndex.ai 162/133/109 và BSC 161/132/109 khác tập/giờ | **1 NGUỒN** |
| VN30, VNMID, VNSML | **−0,87% / +0,33% / +0,22%** | HOSE bản tin phiên 19/10 | **ĐÃ ĐỐI CHIẾU VN30; 1 NGUỒN VNMID/VNSML** |
| Khối ngoại **tổng** HOSE | **−801 tỷ tổng giao dịch** | HOSE mua **1.405**, bán **2.206** (phạm vi tổng); BSC ghi ròng −799,52 (lệch quy ước); KHÔNG coi là số **khớp lệnh** | **ĐÃ ĐỐI CHIẾU hướng, KHÁC PHẠM VI** |
| Khối ngoại **khớp** HOSE + chuỗi 5 phiên | **Không đăng trị số chưa khóa chính thức** | HODL ròng **−792,2** nhưng ghi phiên 19/10 `(tạm)`, chưa đủ căn cứ chặn cứng theo V3.3.1. Kiểm BSC và HOSE: báo cáo tổng không phải khớp cùng phạm vi | **CHƯA XÁC MINH EOD**, chặn ngoại **KHÔNG KIỂM ĐƯỢC** |
| Tự doanh HOSE cuối phiên | **Chưa xác minh được ròng chuẩn** | Đã thử bản HOSE tự doanh, bản HOSE tổng, BSC; chưa đối chiếu được số mua/bán đúng phạm vi | **CHƯA XÁC MINH** |
| Basis VN30F1M | **Chưa đủ chứng cứ hợp đồng và giờ EOD** | Đã thử BSC, HNX phái sinh, trang phái sinh bên thứ ba; không chấm điểm | **CHƯA XÁC MINH** |
| Cờ đáo hạn/ETF 19/10 | **Không gắn cờ sự kiện** | HNX đáo hạn VN30F2610 vào 15/10, ngày 19/10 không phải ngày đáo hạn; không có thông báo sự kiện cơ cấu đủ rõ cho 19/10 | **Không gắn cờ** |

### Các đường dẫn thực tế đã đọc / kiểm toán
- HOSE thông tin chính thức (phân phối qua Stockbiz) https://web.stockbiz.vn/News/2026/10/19/1915522/hose-diem-tin-giao-dich-ngay-19-10-2026.aspx
- Stockbiz https://web.stockbiz.vn/IndicesStats.aspx
- VNIndex.ai EOD (bảng phạm vi riêng) https://vnindex.ai/vnindex-hom-nay
- BSC báo cáo 19/10 https://www.bsc.com.vn/en/bao-cao/16053-bsc-brief-19-10-the-market-declined-amid-selling-pressure-on-vic/
- Báo VietnamPlus 19/10 https://www.vietnamplus.vn/vn-index-mat-hon-16-diem-co-phieu-bat-dong-san-giam-manh-nhat-post1142914.vnp
- HODL khối ngoại (tạm) https://hodl.vn/indices/vnindex
- VNDIRECT Finfo raw qua **GitHub Actions read-only**, không mạo nhận trình duyệt trực tiếp mở API: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39250282942
- Workflow đối chiếu 133/133 giá CafeF/KBS: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39249798965
- Khôi phục watchdog: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39249776969
- HOSE thống kê tự doanh 19/10: https://web.stockbiz.vn/News/2026/10/19/1915521/hose-thong-ke-giao-dich-tu-doanh-ngay-19-10-2026.aspx (đường dẫn chỉ tham khảo, nếu không mở được thì **không** tính là trang đã mở).

### Nhật ký tìm kiếm số chưa xác minh và 1 NGUỒN

- **Giá trị khớp:** HOSE có số toàn thị trường 11.393 (dùng mô tả chính thức), BSC 11.351 (khác phạm vi/chuẩn nhà cung cấp), VNDIRECT Finfo VNINDEX 11.323,15122708 (dùng chuỗi một gốc); 3 trang khác nhau có số nhưng không đồng nhất phạm vi. Không tráo GT giao dịch tổng 13.354,74 của VNINDEX thành khớp.
- **Độ rộng:** VNDIRECT Finfo 153/131/75 dùng chấm; VNIndex.ai 162/133/109 và BSC 161/132/109 khác tập/giờ; đủ 2 trang đối chiếu khác phạm vi.
- **Khối ngoại khớp:** HODL ghi tạm −792,2; HOSE −801 là tổng; BSC −799,52 là tổng; chưa 2 nguồn khớp lệnh cùng phiên/phạm vi và không gán chặn 5 phiên.
- **Tự doanh:** thử HOSE điểm tin, HOSE thống kê tự doanh (chưa bóc giá trị được), BSC bài 19/10, không có tổng cùng phạm vi đủ khóa.
- **Phái sinh:** thử BSC báo cáo 19/10, HNX trang phái sinh, trang VNIndex.ai (không có basis EOD hợp đồng chính xác); ghi thiếu thay vì sáng tác.
- **Top 5 đóng góp giảm:** BSC highlight `VIC -12.85, VCB -1.21, VHM -1.19, VPB -1.03, HPG -0.61` (một nguồn cùng hệ đo); phần mô tả của cùng bài có số đóng góp VIC/VHM khác nên dùng **duy nhất bảng highlight**, không trộn và ghi 1 NGUỒN.

## B. Chuỗi tính toán một gốc — 261 phiên

Kiểm toán VNDIRECT raw `vnmarket_prices` trong GitHub Actions 39250282942: **261 hàng thực đọc từ 01/10/2025 đến 19/10/2026**. Hai hàng neo từ cùng bảng: `"date":"2026-10-16","close":1705.91`; `"date":"2026-10-19","close":1689.84`. Không nội suy. Một nguồn VNDIRECT cho toàn bộ phép tính.

| Dữ kiện | Công thức / kết quả tự tính | Nhãn |
|---|---|---|
| MA20 | Bình quân 20 giá đóng cửa gồm 19/10: **1.748,596 → 1.748,60** | TỰ TÍNH |
| MA50 | TB 50 close: **1.774,5716 → 1.774,57** | TỰ TÍNH |
| MA200 | TB 200 close: **1.796,7911 → 1.796,79** | TỰ TÍNH |
| Dốc MA20 | MA20 hôm nay **1.748,596** so MA20 cách 5 phiên **1.775,6445**, dốc giảm **27,0485 điểm** | TỰ TÍNH |
| GT khớp trung bình 20 phiên trước | **12.085,18484256 tỷ**, không tính 19/10 | TỰ TÍNH |
| Bội số GT khớp | **11.323,15122708/12.085,18484256 = 0,93694481 → 0,937 lần**, cùng nguồn VNDIRECT | TỰ TÍNH |
| Giá trị khớp tăng so 16/10 | **11.323,15122708 / 9.918,04526665 − 1 = +14,17%** theo VNDIRECT | TỰ TÍNH |
| Độ rộng | **153/131 = 1,168**, trung tính chấm điểm | TỰ TÍNH |
| Đóng cửa so biên độ phiên | (1689,84−1682,54)/(1721,39−1682,54) = **0,1879**, ở 1/3 dưới | TỰ TÍNH |
| Đáy 20 phiên trước | **1.690,56**, ngày 15/10; 19/10 đóng cửa thấp hơn **0,72 điểm** | TỰ TÍNH |
| Phân phối trong 25 phiên | **8** phiên: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, **19/10**. Phiên 14/09 đã ra khỏi cửa sổ; 15/10 vẫn loại do đáo hạn. 19/10 giảm ≥0,2%, GT khớp tăng so 16/10 nên là **phân phối mới** | TỰ TÍNH |
| Nền xu hướng | **XẤU**: giá đóng 1.689,84 < MA50 1.774,57; MA20 đi xuống; đóng dưới MA200 1.796,79 | TỰ TÍNH |
| 7 yếu tố | Giá/MA **−1**, thanh khoản **0** (phiên giảm nhưng bội số 0,937 <1,2), độ rộng **0** (1,168), chất lượng điểm kéo **0** (top5 giảm theo một bảng BSC lớn hơn 50%, không đủ điều kiện −1), khối ngoại **0 thiếu khóa khớp**, phân phối **−1**, phái sinh/vĩ mô **0 thiếu dữ liệu đủ chuẩn** => **−2/7** | TỰ TÍNH |
| Chặn cuối phiên | Giá đóng trong 1/3 dưới, **nhưng** khớp 0,937 <1 lần TB20, nên **không thỏa** chặn xả cuối; không gắn nhầm chặn này | TỰ TÍNH |
| Chặn xác nhận | **Chặn cứng: 8 phiên phân phối/25 ≥6**; khối ngoại 5 phiên/mốc vô hiệu Sổ cũ **KHÔNG KIỂM ĐƯỢC**; phiên 19 đóng dưới mốc kỹ thuật 1.690,56 đã công bố trên website 15/10 nhưng không giả đây là mốc trong Sổ người dùng | TỰ TÍNH / CHƯA KIỂM ĐƯỢC |
| Ba bước | Chế độ **ĐẦY ĐỦ** (MA20/50, dốc MA20, TB20, phân phối đều đủ). Thô **KHÔNG dòng 1** vì chặn cứng → trần nền XẤU **KHÔNG** → Sổ không được cung cấp, bỏ chống đảo chiều → **KHÔNG dòng 1** | TỰ TÍNH |
| R:R chỉ số | **KHÔNG ÁP DỤNG** vì giá đóng đã thấp hơn mốc rủi ro 1.690,56 của website, và mốc Sổ gốc chưa xác minh; không tính R:R từ stop đã gãy | ĐÚNG QUY TẮC |

## C. Nội tại ngành và hành động thực chiến

- Nhóm ngành chỉ có **dữ liệu giá** theo HOSE/BSC. HOSE: VNENE **+1,14%**, VNHEAL **+1,35%**, VNCONS **+0,28%**, VNREAL **−2,52%**, VNFIN **−0,47%**, VNIT **−1,63%**. Đây là chỉ số ngành, **không khẳng định khối ngoại hoặc vốn ròng ngành**.
- Trong 133 mã theo dõi đã khóa EOD: ngân hàng **2 tăng/13 giảm/3 đứng**; chứng khoán **8 tăng/5 giảm/2 đứng**; năng lượng **11 tăng/0 giảm/1 đứng**; cảng biển & logistics **3 tăng/0 giảm/1 đứng**. Đây là tập con của website, không thay thế tập HOSE.
- Nhóm gây sức ép chỉ số theo **bảng top âm BSC một nguồn**: VIC −12,85 điểm, VCB −1,21, VHM −1,19, VPB −1,03, HPG −0,61. Tổng **−16,89 điểm** so mức giảm VN-Index **−16,07** (tỷ lệ **105,10%**), chứng tỏ tập trung lực kéo xuống, còn phần khác bù lại. Một đoạn văn BSC cho số đóng góp khác: không dùng xen kẽ.
- **NẾU** phiên tới chưa lấy lại **1.690,56** (đáy 15/10, giờ là kháng cự gần đã gãy) **THÌ** không mua đuổi hồi, ưu tiên rà stop từng mã và giảm nhóm yếu.
- **NẾU** đáy phiên 19/10 **1.682,54** bị xuyên trong phiên sau, **THÌ** thận trọng hơn, nhưng kiểm quyết định theo đóng cửa và dừng lỗ riêng mã, không tự phát tín hiệu hỗ trợ thấp hơn.
- **NẾU** lấy lại **1.748,60 MA20**, **1.774,57 MA50**, **1.796,79 MA200**, phân phối còn **≤5**, thanh khoản và độ rộng đã xác minh, **THÌ** chỉ tính lại trạng thái trước khi cân nhắc mua.
- Tỷ trọng định hướng theo Prompt dòng 1 **≤20% cổ phiếu**, hạn chế/không dùng đòn bẩy; không thay stop/mục tiêu/vùng mua cổ phiếu hiện có.

## D. Sổ mới nội bộ — tuyệt đối không sao chép dòng cũ

```
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 19/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
19/10/2026;1689,84;1721,39;1682,54;-0,94;11323,15122708;153;131;75;;1839,18;;;Có;1 NGUỒN:GT khớp VNINDEX/độ rộng; CHƯA XÁC MINH:KN khớp/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG — dòng 1
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu Sổ gốc: KHÔNG KIỂM ĐƯỢC
Mốc kiểm soát cũ đã công bố website: 1690,56 (đáy 15/10) — phiên 19/10 đóng dưới; không hạ mốc để né chặn
Đáy kỹ thuật phiên 19/10: 1682,54 — mới, không thay mốc cũ trong Sổ
Kháng cự các MA: 1748,60 / 1774,57 / 1796,79
Chặn cứng 8 phiên phân phối/25, gỡ khi còn <=5
Các phiên phân phối: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10
Khối ngoại khớp 5 phiên: KHÔNG KIỂM ĐƯỢC
Chống đảo chiều từ Sổ gốc: BỎ QUA DO KHÔNG CÓ SỔ
PHẦN C — ĐÍNH CHÍNH
Không chỉnh sửa dòng lịch sử người dùng không cung cấp.
```

## E. Bảng tự kiểm 20 tiêu chí

| # | Hạng mục | Kết quả |
|---|---|---|
| 1 | Ngày và thời điểm cắt | ĐẠT |
| 2 | Không dùng phiên tương lai | ĐẠT |
| 3 | Số gốc đã mở HOSE/BSC/Stockbiz hoặc audit raw | ĐẠT |
| 4 | Nguồn, thời gian, phạm vi đã ghi | ĐẠT |
| 5 | Số lõi 2 nguồn độc lập | CHƯA ĐẠT HẾT: giá/% đạt; GT khớp và độ rộng 1 NGUỒN |
| 6 | Ghi nguồn và so các nguồn khác phạm vi | ĐẠT CÓ GIỚI HẠN |
| 7 | Chuỗi một nguồn 261 hàng, 2 neo và công thức | ĐẠT |
| 8 | Con số đưa lên web có thể truy ngược | ĐẠT CÓ GIỚI HẠN: không ghi số khối ngoại khớp chưa chốt |
| 9 | Không chép lại Sổ cũ | ĐẠT |
| 10 | Đúng phiên 19/10 | ĐẠT |
| 11 | Chế độ 5/5 phép tính | ĐẠT: ĐẦY ĐỦ |
| 12 | Nền xu hướng, dốc/MA có số | ĐẠT |
| 13 | Điểm 7 yếu tố và cờ sự kiện | ĐẠT CÓ GIỚI HẠN dữ liệu KN/basis |
| 14 | Chặn cứng, mềm và điều kiện gỡ | ĐẠT CÓ GIỚI HẠN Sổ cũ/KN không thể xác nhận |
| 15 | Ba bước quy đổi, dòng cuối | ĐẠT: KHÔNG dòng 1 |
| 16 | Không ghi vùng mua khi KHÔNG | ĐẠT |
| 17 | Mốc giá xuất xứ và không dời stop trái luật | ĐẠT; R:R không áp dụng |
| 18 | Ngành có dữ kiện GT/KN đủ chứng minh vốn vào/ra | KHÔNG ĐẠT: chỉ bản đồ **sức giá** có chứng cứ |
| 19 | Nội dung web đúng số và triển khai | ĐẠT kiểm thử tự động, có giới hạn: [Pages 39251458074](https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39251458074) thành công, 169/169 kiểm thử, kiểm tra toàn vẹn 133 báo cáo / 133 mã / 45 nhận định và đối chiếu byte sau xuất bản thành công. Chưa kiểm thử hiển thị độc lập trên nhiều thiết bị. |
| 20 | Chỉ một dòng Sổ mới, không chép Sổ cũ | ĐẠT |
