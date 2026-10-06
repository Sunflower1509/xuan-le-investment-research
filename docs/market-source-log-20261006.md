# Nhật ký nguồn nội bộ — Nhận định VN-Index 06/10/2026

> Mục đích: kiểm soát số liệu theo PROMPT NHẬN ĐỊNH VNINDEX v3.2.
> Ngày phân tích: 06/10/2026. Mốc cắt: hết phiên 06/10/2026 (giờ Việt Nam). Chốt kiểm định: sau ATC.
> Tài liệu nội bộ, không đưa lên giao diện công khai.

## 1. Cổng dữ liệu lõi

| Số liệu | Giá trị | Phạm vi / đơn vị | Nguồn 1 | Nguồn 2 | Nhãn |
|---|---:|---|---|---|---|
| VN-Index đóng cửa | 1.759,08 | điểm, EOD 06/10 | VNDIRECT Finfo | HOSE/CafeF + VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | +5,88 / +0,335387% | điểm / %, EOD | VNDIRECT Finfo | HOSE/CafeF + VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.755,34 / 1.763,84 / 1.734,94 | điểm | VNDIRECT lịch sử VNINDEX | VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| VN30 | 1.898,82 / +4,36 / +0,230145% | điểm / điểm / % | VNDIRECT Finfo | HOSE/CafeF | ĐÃ ĐỐI CHIẾU |
| HNX-Index | 265,53 / -4,09 / -1,51695% | điểm / điểm / % | VNDIRECT Finfo | Vietstock hậu phiên | ĐÃ ĐỐI CHIẾU |
| Độ rộng HOSE | 124 tăng / 64 tham chiếu / 171 giảm / 6 sàn | số mã | VNDIRECT Finfo | Thời báo Tài chính VN/VNDIRECT Compass xác nhận 124/64/171 | ĐÃ ĐỐI CHIẾU |
| Tỷ lệ tăng/giảm | 124/171 = 0,725146 | HOSE | TỰ TÍNH | — | TỰ TÍNH |
| GT khớp lệnh chuẩn tính chuỗi | 14.489,246570 tỷ | tỷ đồng | VNDIRECT nmValue | — | 1 NGUỒN CÙNG CHUỖI |
| GT khớp lệnh HOSE công bố | khoảng 14.563 tỷ | tỷ đồng | HOSE/CafeF | — | NGUỒN ĐỘC LẬP KHÁC PHẠM VI |
| TB20 GT khớp lệnh trước 06/10 | 12.955,649247 tỷ | tỷ đồng | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| Bội số thanh khoản/TB20 | 1,118373 lần | lần | TỰ TÍNH | — | TỰ TÍNH |

Ghi chú: VNDIRECT nmValue 14.489,25 tỷ và HOSE/CafeF 14.563 tỷ khác nhẹ về phạm vi/phương pháp tổng hợp. Để tránh ghép chuỗi, toàn bộ TB20 và phiên phân phối dùng duy nhất chuỗi VNDIRECT.

## 2. Kiểm định 133/133 mã website

Nguồn chính: VNDIRECT Finfo exact-date 06/10/2026.
Nguồn đối chiếu: CafeF exact-date; khi lệch giá phải có nguồn thứ ba exact-date.

- 128/133 mã: CafeF khớp giá đóng cửa trực tiếp với VNDIRECT.
- DDV: VNDIRECT 15.700; CafeF 15.500; Stockbiz hậu phiên ghi 15.700.
- DRI: VNDIRECT 16.400; CafeF 16.300; Stockbiz hậu phiên ghi 16.400.
- OIL: VNDIRECT 13.100; CafeF 13.000; Stockbiz hậu phiên ghi 13.100.
- PHP: VNDIRECT 49.500; CafeF 49.400; Stockbiz hậu phiên ghi 49.500.
- VGI: VNDIRECT 78.400; CafeF 78.300; Stockbiz hậu phiên ghi 78.400.
- Data Gate sau hòa giải exact-date: PASS 133/133.
- Khối lượng khớp trực tiếp 110/133; các sai khác nhỏ còn lại được ghi trong meta research-data.js. Website giữ nmVolume và pctChange VNDIRECT theo quy ước nguồn chính.

## 3. Chuỗi kỹ thuật — TỰ TÍNH

Chuỗi: VNDIRECT Finfo, VNINDEX từ 01/10/2025 đến 06/10/2026, 252 phiên:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-06&size=500

| Chỉ tiêu | Giá trị | Nhãn |
|---|---:|---|
| MA20 | 1.790,2125 | TỰ TÍNH |
| MA20 cách 5 phiên | 1.810,0670 | TỰ TÍNH |
| MA50 | 1.775,9830 | TỰ TÍNH |
| MA200 | 1.796,12215 | TỰ TÍNH |
| RSI14 | 42,9122 | TỰ TÍNH |
| MACD | -11,02037 | TỰ TÍNH |
| MACD signal | -4,38575 | TỰ TÍNH |
| Đáy thấp nhất 20 phiên trước | 1.728,36 | TỰ TÍNH |
| Đỉnh cao nhất 20 phiên trước | 1.848,17 | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | 0,835294 | 1/3 trên |
| Phiên phân phối còn hiệu lực | 8 | TỰ TÍNH |
| Danh sách | 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09, 02/10 | TỰ TÍNH |

06/10 là phiên tăng nên không tạo phiên phân phối mới.

## 4. Đóng góp điểm và chất lượng dòng tiền

Nguồn: VNIndex.ai EOD 15:00 ngày 06/10:
https://vnindex.ai/vnindex-hom-nay

Top 5 kéo tăng:
- VPL +1,22 điểm
- VHM +1,19
- BSR +0,72
- LPB +0,56
- TCX +0,55

Tổng = +4,24 điểm.
Tỷ trọng = 4,24 / 5,88 = 72,108844%.

Top 5 kéo giảm:
- FPT -0,58
- ACB -0,48
- SSB -0,46
- VBB -0,20
- PNJ -0,16

Theo rubric v3.2, top 5 >70% mức tăng => yếu tố chất lượng dòng tiền = -1 và kích hoạt chặn mềm co cụm vào trụ.

## 5. Bản đồ ngành — universe 133 mã website

- Ngân hàng: 7 tăng / 4 tham chiếu / 7 giảm trên 18 mã; trung vị 0%.
- Chứng khoán: 13 tăng / 0 tham chiếu / 2 giảm trên 15 mã; trung vị +1,1628%.
- Năng lượng: 7 tăng / 2 tham chiếu / 3 giảm trên 12 mã; trung vị +0,8097%.
- Bất động sản: 3 tăng / 3 tham chiếu / 4 giảm trên 10 mã; trung vị 0%.
- BĐS KCN: 3 tăng / 0 tham chiếu / 1 giảm trên 4 mã.
- Công nghiệp: 3 tăng / 0 tham chiếu / 4 giảm trên 7 mã.

Dòng tiền có lan tỏa thực hơn ở chứng khoán và năng lượng, nhưng độ rộng toàn HOSE vẫn nghiêng âm 124/171; vì vậy chưa đủ nâng yếu tố 3 hoặc yếu tố 4.

## 6. Khối ngoại — có xác minh

Nguồn 06/10:
- HOSE/CafeF: bán ròng khoảng 2.614 tỷ đồng trên HOSE.
- VietnamBiz: bán ròng hơn 2.613 tỷ đồng trên HOSE; toàn thị trường là phiên bán ròng thứ 10 liên tiếp.

Chuỗi 5 phiên giao dịch gần nhất trên HOSE, dùng số hậu phiên:
- 30/09: -888 tỷ (CafeF)
- 01/10: -79 tỷ (VietnamBiz)
- 02/10: -3.284 tỷ (VietnamBiz)
- 05/10: -282 tỷ (VietnamBiz)
- 06/10: -2.613 tỷ (VietnamBiz)

Tổng xấp xỉ: **-7.146 tỷ đồng**.

=> Yếu tố khối ngoại = -1 (bán ròng >=3 phiên liên tiếp).
=> CHẶN CỨNG khối ngoại >=5 phiên liên tiếp: KÍCH HOẠT.

## 7. Tự doanh — có xác minh

- VietnamBiz: tự doanh HOSE mua ròng khoảng 268 tỷ đồng.
- CafeF: tự doanh HOSE mua ròng khoảng 267 tỷ đồng.

Đây là lực đỡ cục bộ nhưng quy mô nhỏ hơn rất nhiều so với mức bán ròng khối ngoại; không dùng để vô hiệu hóa chặn cứng.

## 8. Phái sinh / vĩ mô

- VN30F1M: 1.903,50.
- VN30 cơ sở: 1.898,82.
- Basis: +4,68 điểm, tương đương +0,246469%.
- 06/10 chưa nằm trong 3 phiên trước ngày đáo hạn hợp đồng tháng 10.
- Mỹ phiên 05/10: Nasdaq +1,05% lập kỷ lục, S&P 500 +0,66%; nhưng lợi suất 10 năm lên 5,307% và Brent vẫn quanh 100,32 USD/thùng.

Đánh giá: basis dương nhưng bối cảnh quốc tế pha trộn, có cả tín hiệu hỗ trợ và biến số bất lợi rõ về lợi suất/dầu.
=> Yếu tố phái sinh/vĩ mô = 0, không tự cộng +1.

## 9. Mốc tác nghiệp và R:R

| Mốc | Giá trị | Xuất xứ |
|---|---:|---|
| Hỗ trợ gần / mốc vô hiệu | 1.734,94 | đáy phiên 06/10, VNDIRECT + VNIndex.ai |
| Hỗ trợ mạnh | 1.728,36 | đáy thấp nhất 20 phiên trước |
| Kháng cự gần | 1.775,98 | MA50 |
| Kháng cự mạnh | 1.790,21–1.796,12 | MA20–MA200 |

Khoảng cách từ close tới MA50:
(1.775,983 - 1.759,08) / 1.775,983 = 0,9518%.

R:R mở mới tới MA50:
(1.775,983 - 1.759,08) / (1.759,08 - 1.734,94)
= 16,903 / 24,14
= **0,7002**.

=> Chặn mềm R:R <2: KÍCH HOẠT.
=> Chặn mềm cách kháng cự <=1,5% mà chưa vượt: KÍCH HOẠT.

## 10. Chấm điểm v3.2

1. Giá / MA / cấu trúc: **-1** — close dưới MA20 và MA50; MA20 giảm so với 5 phiên trước.
2. Thanh khoản: **0** — phiên tăng với 1,118× TB20; chưa >=1,2 để +1 và không <0,8 để -1.
3. Độ rộng: **0** — 124/171 = 0,725; chưa >=1,5 và chưa <=0,67.
4. Chất lượng dòng tiền: **-1** — top 5 chiếm 72,11% mức tăng.
5. Khối ngoại: **-1** — bán ròng 10 phiên liên tiếp; tổng 5 phiên HOSE khoảng -7.146 tỷ.
6. Sức khỏe xu hướng: **-1** — 8 phiên phân phối còn hiệu lực.
7. Phái sinh/vĩ mô: **0** — basis dương nhưng bối cảnh quốc tế pha trộn.

**Tổng điểm: -4/7.**

### Cổng chặn

CHẶN CỨNG:
- Khối ngoại bán ròng 10 phiên liên tiếp >=5: KÍCH HOẠT.
- 8 phiên phân phối >=6: KÍCH HOẠT.
- Chỉ số xanh nhưng đa số mã đỏ + thanh khoản >=1,2× TB20: KHÔNG kích hoạt vì thanh khoản chỉ 1,118×.
- Bị xả cuối phiên: KHÔNG kích hoạt vì đóng cửa ở 1/3 trên.
- Đóng dưới mốc vô hiệu 1.734,94: chưa xảy ra.

CHẶN MỀM:
- Chỉ số xanh nhưng số mã giảm 171 > tăng 124: KÍCH HOẠT.
- Dòng tiền co cụm top 5 >70%: KÍCH HOẠT.
- Cách MA50 chỉ 0,95% mà chưa vượt: KÍCH HOẠT.
- R:R 0,70 <2: KÍCH HOẠT.

**Trạng thái theo bảng II.D: KHÔNG — PHÒNG THỦ — tỷ trọng cổ phiếu định hướng <=20%, hạ dần phần yếu, không mở vị thế mới.**
