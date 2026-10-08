# Nhật ký nguồn nội bộ — Nhận định VN-Index 08/10/2026

> Mục đích: kiểm soát số liệu theo PROMPT NHẬN ĐỊNH VNINDEX v3.2.
> Ngày phân tích: 08/10/2026. Mốc cắt: hết phiên 08/10/2026 (giờ Việt Nam). Chốt kiểm định: sau ATC.
> Tài liệu nội bộ, không đưa lên giao diện công khai.

## 1. Cổng dữ liệu lõi

| Số liệu | Giá trị | Phạm vi / đơn vị | Nguồn 1 | Nguồn 2 | Nhãn |
|---|---:|---|---|---|---|
| VN-Index đóng cửa | 1.738,97 | điểm, EOD 08/10 | VNDIRECT Finfo | VNIndex.ai; VnEconomy hậu phiên 08/10 | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | -14,42 / -0,822407% | điểm / %, EOD | VNDIRECT Finfo | VNIndex.ai; VnEconomy: -14,42 / -0,82% | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.749,25 / 1.764,45 / 1.726,00 | điểm | VNDIRECT Finfo lịch sử VNINDEX | VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| VN30 | 1.877,00 / -17,20 / -0,908035% | điểm / điểm / % | VNDIRECT Finfo | VnEconomy: -0,91% | ĐÃ ĐỐI CHIẾU |
| HNX-Index | 256,22 / -3,60 / -1,385575% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| Độ rộng HOSE chuẩn vận hành | 110 tăng / 56 tham chiếu / 183 giảm / 7 sàn | số mã | VNDIRECT Finfo | VnEconomy ghi 122 tăng / 190 giảm do khác phạm vi/tập hợp | ĐÃ ĐỐI CHIẾU CÓ SAI KHÁC PHẠM VI |
| Tỷ lệ tăng/giảm | 110/183 = 0,601093 | HOSE | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| GT khớp lệnh chuẩn tính chuỗi | 12.740,769105 tỷ | tỷ đồng, nmValue | VNDIRECT Finfo | chưa có nguồn thứ hai cùng phạm vi tại mốc khóa | 1 NGUỒN |
| GT khớp lệnh 07/10 | 12.473,832326 tỷ | tỷ đồng | VNDIRECT Finfo | — | 1 NGUỒN |
| TB20 GT khớp lệnh trước 08/10 | 13.149,632483 tỷ | tỷ đồng | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| Bội số thanh khoản/TB20 | 0,968907 lần | lần | TỰ TÍNH | — | TỰ TÍNH |

Nguồn VNDIRECT:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-08&size=500

Nguồn VNIndex.ai:
https://vnindex.ai/vnindex-hom-nay

Nguồn VnEconomy:
https://vneconomy.vn/quet-sach-thanh-qua-3-phien-tang-vn-index-giam-manh-thu-thach-day-ngan-han.htm

Ghi chú: VnEconomy ghi độ rộng 122 tăng/190 giảm, trong khi VNDIRECT là 110/183/56. Do khác phạm vi/tập hợp, không trộn số; theo thứ bậc nguồn v3.2, website giữ VNDIRECT — cổng dữ liệu của công ty chứng khoán — làm chuẩn vận hành. Cả hai đều xác nhận bên giảm áp đảo.

## 2. Kiểm định 133/133 mã website

Nguồn chính: VNDIRECT Finfo exact-date 08/10/2026.
Nguồn đối chiếu: CafeF exact-date; mọi lệch giá phải có nguồn thứ ba exact-date.

- 128/133 mã: CafeF khớp giá đóng cửa trực tiếp với VNDIRECT.
- DRI: VNDIRECT 16.700; CafeF 16.600; KBS exact-date OHLC 16.0/16.8/15.9/16.7, KL 2.751.100 => đóng 16.700.
- G36: VNDIRECT 9.500; CafeF 9.400; KBS exact-date OHLC 10.0/10.0/9.2/9.5, KL 224.100 => đóng 9.500.
- MSR: VNDIRECT 68.200; CafeF 68.100; KBS exact-date OHLC 65.0/68.7/65.0/68.2, KL 2.462.100 => đóng 68.200.
- PHP: VNDIRECT 49.900; CafeF 49.600; KBS exact-date OHLC 50.5/51.5/49.4/49.9, KL 308.900 => đóng 49.900.
- QNS: VNDIRECT 52.200; CafeF 52.500; KBS exact-date OHLC 52.5/52.9/51.5/52.2, KL 417.500 => đóng 52.200.
- Data Gate sau hòa giải exact-date: PASS 133/133.
- Khối lượng khớp trực tiếp VNDIRECT–nguồn đối chiếu 122/133; các sai khác nhỏ còn lại được ghi trong meta research-data.js. Website giữ nmVolume/pctChange VNDIRECT theo quy ước nguồn chính.

Nguồn KBS:
https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DRI/data_day?sdate=08-10-2026&edate=08-10-2026
https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/G36/data_day?sdate=08-10-2026&edate=08-10-2026
https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/MSR/data_day?sdate=08-10-2026&edate=08-10-2026
https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/PHP/data_day?sdate=08-10-2026&edate=08-10-2026
https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/QNS/data_day?sdate=08-10-2026&edate=08-10-2026

## 3. Chuỗi kỹ thuật — TỰ TÍNH

Chuỗi: VNDIRECT Finfo, VNINDEX từ 01/10/2025 đến 08/10/2026, 254 phiên:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-08&size=500

| Chỉ tiêu | Giá trị | Nhãn |
|---|---:|---|
| MA20 | 1.782,0130 | TỰ TÍNH |
| MA20 cách 5 phiên | 1.802,9710 | TỰ TÍNH |
| MA50 | 1.778,7278 | TỰ TÍNH |
| MA200 | 1.797,11945 | TỰ TÍNH |
| RSI14 | 38,064887 | TỰ TÍNH |
| MACD | -13,140480 | TỰ TÍNH |
| MACD signal | -7,297137 | TỰ TÍNH |
| Đáy thấp nhất 20 phiên trước | 1.728,36 | TỰ TÍNH |
| Đỉnh cao nhất 20 phiên trước | 1.841,20 | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | 0,337321 | (close-low)/(high-low), nhỉnh hơn 1/3 dưới nên xếp 1/3 giữa | TỰ TÍNH |
| Phiên phân phối còn hiệu lực | 9 | TỰ TÍNH |
| Danh sách | 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10 | TỰ TÍNH |

08/10 là phiên phân phối mới vì VN-Index giảm -0,822407% và GT khớp lệnh 12.740,769105 tỷ cao hơn 12.473,832326 tỷ của 07/10.

## 4. Đóng góp điểm

Nguồn: VNIndex.ai, EOD 08/10:
https://vnindex.ai/vnindex-hom-nay

Top 5 kéo tăng:
- GAS +1,79 điểm
- PLX +0,37
- BVH +0,37
- VPL +0,26
- BSR +0,26
Tổng = +3,05 điểm.

Top 5 kéo giảm:
- VHM -3,90 điểm
- VIC -3,21
- VCB -1,03
- BID -0,96
- CTG -0,88
Tổng = -9,98 điểm.

Độ lớn top 5 kéo giảm / mức giảm VN-Index = 9,98 / 14,42 = 69,209431%.

Rubric v3.2 định nghĩa -1 của yếu tố 4 bằng top 5 >70% **mức tăng** hoặc chỉ 1 nhóm ngành gánh. Phiên 08/10 là phiên giảm và có nhiều cụm tăng thực (năng lượng, nông nghiệp, BĐS KCN), nên không tự sửa rubric; yếu tố 4 chấm 0.

## 5. Bản đồ ngành — universe 133 mã website

- Ngân hàng: 3 tăng / 0 tham chiếu / 15 giảm trên 18 mã; trung vị -1,04805%.
- Chứng khoán: 1 tăng / 1 tham chiếu / 13 giảm trên 15 mã; trung vị -2,7719%.
- Năng lượng: 10 tăng / 0 tham chiếu / 2 giảm trên 12 mã; trung vị +1,74755%. PLC +4,918%; GAS +4,5918%; PLX +3,8674%.
- Bất động sản: 2 tăng / 1 tham chiếu / 7 giảm trên 10 mã; trung vị -0,91665%.
- Công nghiệp: 3 tăng / 0 tham chiếu / 4 giảm trên 7 mã; trung vị -0,4360%; MSR +5,9006% là điểm sáng riêng.
- Nông nghiệp: 4 tăng / 0 tham chiếu / 2 giảm trên 6 mã; trung vị +1,4437%.
- Cảng biển & logistics: 0 tăng / 1 tham chiếu / 3 giảm trên 4 mã; trung vị -1,29955%.
- BĐS khu công nghiệp: 3 tăng / 0 tham chiếu / 1 giảm trên 4 mã; trung vị +0,5903%.
- BĐS nhà ở: 1 tăng / 0 tham chiếu / 3 giảm trên 4 mã; trung vị -1,09225%.

Kết luận bản đồ dòng tiền: tiền xoay rõ sang năng lượng và nông nghiệp, BĐS KCN giữ nhịp; chứng khoán, ngân hàng, phần lớn bất động sản và cảng biển–logistics bị rút tiền. Đây là luân chuyển chọn lọc, chưa phải lan tỏa toàn thị trường.

## 6. Khối ngoại — ĐÃ XÁC MINH

Nguồn chính 08/10: VietnamBiz:
https://vietnambiz.vn/khoi-ngoai-ban-rong-12-phien-lien-tiep-xa-manh-nhom-ngan-hang-202610815382148.htm

- Toàn thị trường 08/10: bán ròng 448 tỷ đồng; chuỗi bán ròng 12 phiên liên tiếp.
- Riêng HOSE 08/10: bán ròng 446 tỷ đồng.
- VnEconomy ghi vị thế ròng buổi sáng -181,3 tỷ và buổi chiều -269,9 tỷ; cộng hai phiên khoảng -451,2 tỷ, sai khác nhỏ do phương pháp/phạm vi. Giữ số VietnamBiz 446 tỷ làm số HOSE chốt.

Chuỗi 5 phiên HOSE dùng cùng nguồn VietnamBiz:
- 02/10: -3.284 tỷ.
- 05/10: -282 tỷ.
- 06/10: -2.613 tỷ.
- 07/10: -911 tỷ.
- 08/10: -446 tỷ.
Tổng 5 phiên = **-7.536 tỷ đồng** — TỰ TÍNH.

Nguồn:
https://vietnambiz.vn/khoi-ngoai-ban-rong-3300-ty-dong-pnj-cung-mot-ma-ngan-hang-bi-xa-manh-202610219117700.htm
https://vietnambiz.vn/khoi-ngoai-ban-rong-9-phien-lien-2026105153152987.htm
https://vietnambiz.vn/khoi-ngoai-xa-rong-2000-ty-mot-ma-ngan-hang-202610616713310.htm
https://vietnambiz.vn/khoi-ngoai-ban-rong-hon-900-ty-dong-pnj-dan-dau-2026107154437660.htm
https://vietnambiz.vn/khoi-ngoai-ban-rong-12-phien-lien-tiep-xa-manh-nhom-ngan-hang-202610815382148.htm

=> Yếu tố khối ngoại = -1.
=> CHẶN CỨNG khối ngoại bán ròng >=5 phiên: KÍCH HOẠT.

## 7. Tự doanh

Đã tìm VietnamBiz, CafeF, HOSE/Stockbiz và trang dữ liệu tự doanh vào mốc khóa khoảng 16h ngày 08/10. Dữ liệu tự doanh HOSE công khai tại thời điểm này vẫn dừng ở 07/10 hoặc chưa có bài hậu phiên 08/10 đủ rõ.

=> **CHƯA XÁC MINH** tổng tự doanh 08/10.
=> Không đưa số tự doanh vào bài Zalo và không dùng để chấm điểm 7 yếu tố.

## 8. Phái sinh / đáo hạn / vĩ mô

- VN30F1M đóng 1.880,20 điểm theo DNSE chart API, 241 thanh 1 phút.
- VN30 cơ sở: 1.877,00.
- Basis = +3,20 điểm = +0,170485% — TỰ TÍNH.
- HNX quy định ngày giao dịch cuối cùng là thứ Năm thứ ba trong tháng đáo hạn; tháng 10/2026 là 15/10/2026. 08/10 chưa thuộc 3 phiên trước hoặc đúng ngày đáo hạn.
- Mỹ phiên 07/10: Dow -0,66%, S&P 500 -0,22%, Nasdaq -0,22%; lợi suất dài hạn chạm mức cao nhất 24 năm, Brent trên 100 USD/thùng; lo ngại lạm phát/nợ công và khả năng chu kỳ tăng lãi suất kéo dài.
Nguồn quốc tế: VietnamPlus/TTXVN, 07:37 ngày 08/10:
https://www.vietnamplus.vn/cac-chi-so-chung-khoan-my-giam-diem-roi-khoi-cac-muc-cao-ky-luc-post1140666.amp
Nguồn quy tắc đáo hạn HNX:
https://cms.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html

Đánh giá v3.2: basis dương là điểm đệm, nhưng bối cảnh vĩ mô quốc tế bất lợi rõ trước phiên.
=> Yếu tố 7 = **-1**.

## 9. Mốc tác nghiệp và R:R

| Mốc / phép tính | Giá trị | Xuất xứ | Nhãn |
|---|---:|---|---|
| Hỗ trợ gần / mốc vô hiệu | 1.726,00 | đáy phiên 08/10, VNDIRECT + VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| Hỗ trợ mạnh tham chiếu | 1.700 | số tròn tâm lý, ghi rõ bản chất | TỰ QUY ƯỚC HỢP LỆ |
| Kháng cự gần | 1.778,73 | MA50 | TỰ TÍNH |
| Kháng cự mạnh | 1.782,01–1.797,12 | MA20–MA200 | TỰ TÍNH |
| Khoảng cách tới MA50 | (1.778,7278 - 1.738,97) / 1.778,7278 = 2,235182% | TỰ TÍNH | TỰ TÍNH |
| R:R tới MA50 | (1.778,7278 - 1.738,97) / (1.738,97 - 1.726,00) = 3,065366 | TỰ TÍNH | TỰ TÍNH |

R:R >2: không kích hoạt chặn mềm R:R.
Giá cách MA50 >1,5%: không kích hoạt chặn mềm sát kháng cự.

## 10. Chấm điểm v3.2

1. Giá / MA / cấu trúc: **-1** — close 1.738,97 dưới MA20 1.782,01 và MA50 1.778,73; MA20 giảm từ 1.802,97 của 5 phiên trước.
2. Thanh khoản: **0** — phiên giảm nhưng thanh khoản 0,969× TB20; chưa đạt điều kiện -1 là >=1,2×.
3. Độ rộng: **-1** — 110/183 = 0,601 <=0,67.
4. Chất lượng dòng tiền: **0** — phiên giảm; rubric top 5 >70% áp cho mức tăng, đồng thời vẫn có nhiều cụm ngành tăng thực.
5. Khối ngoại: **-1** — bán ròng 12 phiên liên tiếp; HOSE 08/10 -446 tỷ, 5 phiên -7.536 tỷ.
6. Sức khỏe xu hướng: **-1** — 9 phiên phân phối còn hiệu lực /25.
7. Phái sinh / vĩ mô: **-1** — basis +0,170% nhưng bối cảnh vĩ mô quốc tế bất lợi rõ: Phố Wall giảm, lợi suất dài hạn lên đỉnh 24 năm, Brent >100 USD/thùng.

**Tổng điểm: -5/7.**

### Cổng chặn

CHẶN CỨNG:
- Khối ngoại bán ròng 12 phiên liên tiếp >=5: **KÍCH HOẠT**.
- 9 phiên phân phối >=6: **KÍCH HOẠT**.
- Bị xả cuối phiên: KHÔNG kích hoạt theo công thức; vị trí đóng cửa 0,337321 chỉ nhỉnh hơn 1/3 dưới và thanh khoản 0,969× TB20.
- Chỉ số xanh nhưng đa số mã đỏ + thanh khoản >=1,2×: không áp dụng vì chỉ số giảm.
- Đóng dưới mốc vô hiệu 1.726,00: chưa xảy ra.

CHẶN MỀM:
- Phiên tăng thanh khoản không xác nhận: không áp dụng.
- Xanh điểm nhưng đỏ mã: không áp dụng.
- Dòng tiền co cụm factor 4=-1: không kích hoạt.
- Cách kháng cự <=1,5%: không kích hoạt; cách MA50 ~2,24%.
- R:R <2: không kích hoạt; R:R ~3,07.

**Trạng thái theo bảng II.D: KHÔNG — PHÒNG THỦ — tỷ trọng cổ phiếu định hướng <=20%, hạ dần phần yếu, không mở vị thế mới.**
