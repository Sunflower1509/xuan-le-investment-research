# Nhật ký nguồn nội bộ — Nhận định VN-Index 02/10/2026

> Mục đích: kiểm soát số liệu theo PROMPT NHẬN ĐỊNH VNINDEX v3.2.
> Ngày phân tích: 02/10/2026. Mốc cắt: hết phiên 02/10/2026 (giờ Việt Nam). Chốt kiểm định: sau ATC.
> Tài liệu nội bộ, không đưa lên giao diện công khai.

## 1. Cổng dữ liệu lõi

| Số liệu | Giá trị | Phạm vi / đơn vị | Nguồn 1 | Nguồn 2 | Nhãn |
|---|---:|---|---|---|---|
| VN-Index đóng cửa | 1.737,71 | điểm, EOD 02/10 | VNDIRECT Finfo: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-02&size=500 | Tuổi Trẻ hậu phiên 02/10: https://tuoitre.vn/ | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | -11,59 / -0,662551% | điểm / %, EOD | VNDIRECT Finfo | Tuổi Trẻ: -11,6 / khoảng -0,7%; VNIndex.ai: -11,59 / -0,66% | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.747,29 / 1.751,60 / 1.728,36 | điểm | VNDIRECT Finfo lịch sử VNINDEX | VNIndex.ai: https://vnindex.ai/vnindex-hom-nay | ĐÃ ĐỐI CHIẾU |
| VN30 | 1.875,99 / -14,58 / -0,771196% | điểm / điểm / % | VNDIRECT Finfo | ThuongTruong hậu phiên ghi VN30 1.875,99 / -14,58 | ĐÃ ĐỐI CHIẾU |
| HNX-Index | 266,75 / -1,91 / -0,710936% | điểm / điểm / % | VNDIRECT Finfo | Tuổi Trẻ hậu phiên ghi 266,75 / khoảng -0,7% | ĐÃ ĐỐI CHIẾU |
| Độ rộng HOSE chuẩn vận hành | 87 tăng / 50 tham chiếu / 206 giảm / 10 sàn | số mã | VNDIRECT Finfo | Tuổi Trẻ ghi 90 tăng / 216 giảm; khác phạm vi/tập hợp, không trộn số | ĐÃ ĐỐI CHIẾU CÓ SAI KHÁC PHẠM VI |
| Tỷ lệ tăng/giảm | 87/206 = 0,422330 | HOSE | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| GT khớp lệnh HOSE | 14.447,305005 tỷ | tỷ đồng, khớp lệnh | VNDIRECT Finfo nmValue | Tuổi Trẻ hậu phiên: 14.447 tỷ đồng | ĐÃ ĐỐI CHIẾU |
| GT khớp lệnh 01/10 | 11.186,080397 tỷ | tỷ đồng | VNDIRECT Finfo | — | 1 NGUỒN |
| Tăng GT khớp lệnh so 01/10 | +29,154310% | % | TỰ TÍNH = 14.447,305005 / 11.186,080397 - 1 | — | TỰ TÍNH |
| TB20 GT khớp lệnh trước 02/10 | 13.093,959051 tỷ | tỷ đồng, 20 phiên liền trước | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| Bội số thanh khoản/TB20 | 1,103357 lần | lần | TỰ TÍNH = 14.447,305005 / 13.093,959051 | — | TỰ TÍNH |
| Ngưỡng 1,2 lần TB20 | 15.712,750861 tỷ | tỷ đồng | TỰ TÍNH | — | TỰ TÍNH |

## 2. Kiểm định 130/130 mã website

Nguồn chính: VNDIRECT Finfo exact-date 02/10/2026.
Nguồn đối chiếu: CafeF exact-date; ngoại lệ exact-date phải có nguồn thứ ba.

- 128/130 mã: CafeF khớp giá đóng cửa với VNDIRECT.
- MSR: VNDIRECT 60.300; CafeF 60.400; 24HMoney hậu phiên cập nhật 15:10 ngày 02/10 ghi MSR 60.300 (+5,60%), trùng VNDIRECT. Nguồn: https://24hmoney.vn/stock/msr
- VGI: VNDIRECT 80.400; CafeF 80.300; Stockbiz hậu phiên lúc 15:00 ngày 02/10 ghi VGI 80.400 (-1,35%), trùng VNDIRECT. Nguồn: https://web.stockbiz.vn/Stocks/VGI/HistoricalQuotes.aspx
- Data Gate sau hòa giải exact-date: 130/130 mã PASS.
- Khối lượng khớp VNDIRECT và nguồn đối chiếu khớp 121/130; các sai khác nhỏ được ghi trong meta của research-data.js. Website giữ nmVolume VNDIRECT theo quy ước nguồn chính.

## 3. Chuỗi kỹ thuật — TỰ TÍNH

Chuỗi: VNDIRECT Finfo, VNINDEX từ 01/10/2025 đến 02/10/2026, 250 phiên:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-02&size=500

| Chỉ tiêu | Giá trị | Công thức / phạm vi | Nhãn |
|---|---:|---|---|
| MA20 | 1.797,2025 | TB số học 20 close cuối | TỰ TÍNH |
| MA20 cách 5 phiên | 1.814,7905 | TB20 kết thúc tại T-5 | TỰ TÍNH |
| MA50 | 1.773,0956 | TB số học 50 close cuối | TỰ TÍNH |
| MA200 | 1.795,65015 | TB số học 200 close cuối | TỰ TÍNH |
| RSI14 | 35,6451 | Wilder RSI14 | TỰ TÍNH |
| MACD | -9,42471 | EMA12 - EMA26 | TỰ TÍNH |
| MACD signal | -0,74625 | EMA9 của MACD | TỰ TÍNH |
| Đáy thấp nhất 20 phiên trước | 1.737,58 | min(low), 20 phiên trước 02/10 | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | 0,402324 | (close-low)/(high-low), thuộc 1/3 giữa | TỰ TÍNH |
| Phiên phân phối còn hiệu lực | 8 | Theo định nghĩa v3.2 | TỰ TÍNH |
| Danh sách phiên phân phối | 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09, 02/10 | 25 phiên gần nhất | TỰ TÍNH |

Phiên 02/10 là phiên phân phối mới vì VN-Index giảm -0,662551% và GT khớp lệnh 14.447,305005 tỷ cao hơn 11.186,080397 tỷ của 01/10.

## 4. Đóng góp điểm và dòng tiền

Nguồn top đóng góp: VNIndex.ai, cập nhật hậu phiên 02/10:
https://vnindex.ai/vnindex-hom-nay

| Số liệu | Giá trị | Nhãn |
|---|---:|---|
| Top 5 kéo tăng | VIC +6,36; HDB +0,46; BVH +0,20; MWG +0,18; VPL +0,14 điểm | 1 NGUỒN |
| Top 5 kéo giảm | GAS -1,60; LPB -1,11; TCB -1,10; BID -1,05; MBB -0,94 điểm | 1 NGUỒN |
| Tổng top 5 kéo giảm | -5,80 điểm | TỰ TÍNH |
| Tỷ lệ top 5 kéo giảm / mức giảm chỉ số | 5,80 / 11,59 = 50,0431% | TỰ TÍNH |

Bản đồ ngành từ universe 130 mã website:
- Ngân hàng: 1 tăng / 1 tham chiếu / 15 giảm trên 17 mã; trung vị -1,6529%.
- Chứng khoán: 0 tăng / 0 tham chiếu / 15 giảm trên 15 mã; trung vị -2,2556%.
- Năng lượng: 1 tăng / 0 tham chiếu / 11 giảm trên 12 mã; trung vị -1,61515%.
- Nông nghiệp: 3 tăng / 0 tham chiếu / 3 giảm trên 6 mã; trung vị +0,25925%.
- Công nghiệp: 2 tăng / 0 tham chiếu / 5 giảm trên 7 mã; MSR +5,6042% là điểm sáng đơn lẻ, không đại diện cả nhóm.

Các thống kê ngành là TỰ TÍNH từ coverage 130 mã, không đại diện toàn bộ thị trường.

## 5. Khối ngoại

- 01/10: VietnamBiz xác nhận khối ngoại HOSE bán ròng gần 79 tỷ đồng, nối chuỗi lên 7 phiên liên tiếp:
  https://vietnambiz.vn/khoi-ngoai-mua-rong-gan-3200-ty-dong-msr-trong-phien-dau-thang-10-2026101152641376.htm
- 02/10: CafeF hậu phiên ghi khối ngoại HOSE bán ròng 3.361 tỷ đồng:
  https://cafef.vn/2-co-phieu-bluechips-bi-khoi-ngoai-xa-2300-ty-dong-phien-cuoi-tuan-188261002162342712.chn
- Tuổi Trẻ ghi toàn ba sàn bán ròng 3.276 tỷ đồng, khác phạm vi:
  https://tuoitre.vn/
- Suy ra HOSE 02/10 là phiên bán ròng liên tiếp thứ 8. Đây là TỰ TÍNH từ chuỗi đã xác minh ngày 01/10 + dấu âm ngày 02/10.

Yếu tố khối ngoại v3.2: -1.
CHẶN CỨNG khối ngoại bán ròng >=5 phiên: KÍCH HOẠT.

## 6. Tự doanh

Tại thời điểm khóa bài chưa tìm được số tổng tự doanh HOSE 02/10 từ nguồn hậu phiên đủ rõ và độc lập. Một số bài chỉ nêu giao dịch từng mã.
=> **CHƯA XÁC MINH**. Không dùng để chấm điểm và không đưa số tự doanh vào bài Zalo.

## 7. Phái sinh / đáo hạn

| Số liệu | Giá trị | Nguồn | Nhãn |
|---|---:|---|---|
| VN30F1M đóng cửa | 1.885,0 | DNSE chart API 02/10 | 1 NGUỒN |
| VN30 cơ sở | 1.875,99 | VNDIRECT | ĐÃ ĐỐI CHIẾU |
| Basis | +9,01 điểm / +0,480280% | TỰ TÍNH | TỰ TÍNH |
| Ngày đáo hạn tháng 10 | 15/10/2026 | HNX quy tắc thứ Năm tuần thứ ba + lịch giao dịch | ĐÃ XÁC MINH |

02/10 không nằm trong 3 phiên trước hoặc đúng ngày đáo hạn, nên basis được dùng để đánh giá.

## 8. Bối cảnh quốc tế trước mốc cắt

- Phiên Mỹ 01/10: S&P 500 +0,19%, Nasdaq +0,04%, Dow +0,04%.
- Lợi suất TPCP Mỹ 10 năm có lúc lên 5,344%, sau đó hạ.
- Brent quanh 102 USD/thùng và WTI quanh 93 USD/thùng trước phiên VN 02/10.

Nguồn: VietnamBiz, công bố trước/đầu phiên 02/10.
Bối cảnh pha trộn: chứng khoán Mỹ không xấu nhưng lợi suất và dầu cao là biến số bất lợi. Không đủ cơ sở chấm +1, cũng chưa quy thành -1 độc lập.
=> Yếu tố phái sinh/vĩ mô: 0.

## 9. Mốc tác nghiệp và R:R

| Mốc / phép tính | Giá trị | Xuất xứ | Nhãn |
|---|---:|---|---|
| Hỗ trợ gần / mốc vô hiệu | 1.728,36 | đáy phiên 02/10 | ĐÃ ĐỐI CHIẾU |
| Hỗ trợ mạnh tham chiếu | 1.700 | số tròn tâm lý, ghi rõ bản chất | TỰ QUY ƯỚC HỢP LỆ |
| Kháng cự gần | 1.773,10 | MA50 | TỰ TÍNH |
| Kháng cự mạnh | 1.795,65–1.797,20 | MA200–MA20 | TỰ TÍNH |
| R:R tới MA50 | (1.773,0956 - 1.737,71) / (1.737,71 - 1.728,36) = 3,78456 | TỰ TÍNH | TỰ TÍNH |

R:R >2 nên không kích hoạt chặn mềm R:R. Tuy nhiên R:R không được vượt CHẶN CỨNG.

## 10. Chấm điểm v3.2

1. **Giá / MA / cấu trúc: -1** — close 1.737,71 dưới MA20 1.797,20 và MA50 1.773,10; MA20 đang giảm so với 5 phiên trước.
2. **Thanh khoản: 0** — phiên giảm, thanh khoản 1,103× TB20; chưa đạt điều kiện -1 là >=1,2× TB20.
3. **Độ rộng: -1** — 87/206 = 0,422 <=0,67.
4. **Chất lượng dòng tiền: 0** — tiêu chí top 5 >70% mức tăng không áp dụng cho phiên giảm; thị trường yếu diện rộng được phản ánh ở độ rộng/ngành.
5. **Khối ngoại: -1** — HOSE bán ròng ít nhất 3 phiên liên tiếp; thực tế là phiên thứ 8.
6. **Sức khỏe xu hướng: -1** — 8 phiên phân phối còn hiệu lực /25.
7. **Phái sinh / vĩ mô: 0** — basis +0,480% hỗ trợ, nhưng bối cảnh lợi suất/dầu cao pha trộn nên không nâng +1.

**Tổng điểm: -4/7.**

### Cổng chặn
- **CHẶN CỨNG 1: KÍCH HOẠT** — 8 phiên phân phối >=6.
- **CHẶN CỨNG 2: KÍCH HOẠT** — khối ngoại HOSE bán ròng 8 phiên liên tiếp >=5.
- Xả cuối phiên: KHÔNG kích hoạt; close nằm 1/3 giữa dù thanh khoản >TB20.
- Xanh điểm/đỏ mã: không áp dụng vì chỉ số giảm.
- Đóng dưới mốc vô hiệu 1.728,36: chưa xảy ra.
- R:R <2: không kích hoạt; R:R khoảng 3,78.

**Trạng thái theo bảng II.D: KHÔNG — PHÒNG THỦ — tỷ trọng cổ phiếu định hướng <=20%, không mở vị thế mới.**
