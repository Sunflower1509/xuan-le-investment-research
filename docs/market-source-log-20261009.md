# Nhật ký nguồn nội bộ — VN-Index, phiên 09/10/2026 (Prompt V3.2)

> Ngày phân tích và thực hiện: 09/10/2026 (Việt Nam). Mốc cắt thông tin: hết 09/10/2026; dữ liệu chứng khoán được xác nhận sau phiên ATC. Không sử dụng diễn biến các phiên sau.
> Nhật ký nội bộ. Bài công khai chỉ dùng số liệu có trong bảng này; số thiếu phải ghi rõ chưa xác minh.

## 1. Cổng dữ liệu lõi và đối chiếu phạm vi

| Chỉ tiêu | Giá trị | Phạm vi / đơn vị | Nguồn | Nhãn |
|---|---|---|---|---|
| VN-Index đóng cửa | 1.735,09 | điểm, 09/10 | VNDIRECT Finfo; VNIndex.ai EOD cập nhật 15:00 ngày 09/10 | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | −3,88 điểm; −0,2231206% (hiển thị −0,22%) | điểm / phần trăm | VNDIRECT Finfo; VNIndex.ai −3,88 / −0,22% | ĐÃ ĐỐI CHIẾU |
| Mở/cao/thấp | 1.737,63 / 1.744,89 / 1.724,17 | điểm ngày 09/10 | VNDIRECT Finfo; VNIndex.ai EOD | ĐÃ ĐỐI CHIẾU |
| VN30 | 1.873,43; −3,57 (−0,19%) | điểm | VNDIRECT Finfo | 1 NGUỒN |
| HNX-Index | 261,60; +5,38 (+2,10%) | điểm | VNDIRECT Finfo | 1 NGUỒN |
| Độ rộng HOSE (chuẩn website) | 121 tăng / 63 tham chiếu / 170 giảm / 5 sàn | số mã; universe được VNDIRECT trả về | VNDIRECT Finfo. VNIndex.ai: 129 tăng / 100 tham chiếu / 175 giảm / 5 sàn, phạm vi thống kê 404 mã khác, KHÔNG trộn! | 1 NGUỒN |
| Tỷ lệ tăng / giảm | 121 ÷ 170 = 0,712 | lần, universe VNDIRECT | TỰ TÍNH | TỰ TÍNH |
| Giá trị khớp lệnh HOSE 09/10 | 14.694,486447 tỷ đồng (hiển thị 14.694,49 tỷ) | VNDIRECT chỉ số VNINDEX: nmValue/1e9, loại trừ thỏa thuận | VNDIRECT Finfo full index-history | 1 NGUỒN |
| Giá trị khớp lệnh HOSE 08/10 | 12.740,769105 tỷ đồng (hiển thị 12.740,77 tỷ) | Cùng phạm vi và cột nmValue | VNDIRECT Finfo full index-history | 1 NGUỒN |
| Khối lượng khớp lệnh HOSE 09/10 | 745.542.163 cổ phiếu | nmVolume VNINDEX | VNDIRECT Finfo full index-history | 1 NGUỒN |
| Giá trị tổng giao dịch VNIndex.ai 09/10 | 27,54 nghìn tỷ; 911,32 triệu cổ phiếu | trang tổng hợp, có thể gồm thỏa thuận; KHÔNG so với VNDIRECT nmValue | VNIndex.ai EOD | 1 NGUỒN |
| Khối ngoại HOSE khớp lệnh cuối phiên | CHƯA XÁC MINH | Không lấy ước tính VNIndex.ai (có MCH giao dịch khối lượng lớn) hoặc số tạm sáng | Đã rà VNIndex.ai, Stockbiz, VnEconomy, Fili | CHƯA XÁC MINH |
| Khối ngoại chuỗi 5 phiên và chuỗi bán liên tiếp | CHƯA XÁC MINH cho ngày 09/10 | Không kéo tiếp chuỗi đến 08/10 thành 13 phiên | Thiếu bản tổng hợp độc lập EOD 09/10 | CHƯA XÁC MINH |
| Tự doanh phiên 09/10 | CHƯA XÁC MINH | toàn phiên | Chưa có số hậu phiên đáng tin | CHƯA XÁC MINH |
| VN30F1M basis và ngày đáo hạn kiểm chứng | CHƯA XÁC MINH | phái sinh | Chưa đủ nguồn hậu phiên và lịch HNX đúng hợp đồng | CHƯA XÁC MINH |

Trang VNDIRECT EOD: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-09&size=500

Trang lịch sử nhất quán VNDIRECT: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-09&size=500

Nhật ký tác vụ đã gọi và tính từ lịch sử VNDIRECT (255 phiên, kiểm tra 200 phiên và khối lượng): https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/37906211448

Trang VNIndex.ai, đã mở và đọc toàn văn, trạng thái hết phiên 09/10 15:00: https://vnindex.ai/vnindex-hom-nay

### Cảnh báo phạm vi
- **Không** lấy 27,54 nghìn tỷ của VNIndex.ai làm giá trị **khớp lệnh** vì con số này là tổng giao dịch; giá trị khớp lệnh chuyên biệt là 14.694,486447 tỷ VNDIRECT.
- VNDIRECT ghi 121 tăng/170 giảm/63 đứng, VNIndex.ai thống kê universe khác (129/175/100). Hai nguồn nhất quán về áp lực giảm nhiều hơn tăng nhưng **không** được coi là trùng số tuyệt đối.
- Không lấy ước tính ròng có giao dịch thỏa thuận lớn MCH của VNIndex.ai làm khối ngoại **khớp lệnh HOSE**. Không tuyên bố chuỗi bán 13 phiên.

## 2. Tính toán chuỗi cùng nguồn (TỰ TÍNH)

- Chuỗi: 255 dòng VNDIRECT Finfo của VNINDEX, phiên đầu **01/10/2025**, cuối **09/10/2026**; không ghép nguồn. MA là bình quân cộng của n phiên giá đóng cửa gần nhất; TB20 GT khớp lệnh là bình quân **20 phiên liền trước 09/10** (không gồm ngày 09/10).
- MA20 = **1.779,007** (hiển thị **1.779,01**); MA50 = **1.779,8172** (hiển thị **1.779,82**); MA200 = **1.797,3990** (hiển thị **1.797,40**); MA20 cách năm phiên = **1.797,2025**.
- TB20 thanh khoản phiên trước = **13.226,360418 tỷ đồng** (hiển thị **13.226,36**); bội số 09/10 = 14.694,486447 ÷ 13.226,360418 = **1,1110 lần** (hiển thị **1,111×**).
- Thay đổi thanh khoản so với 08/10 = (14.694,486447/12.740,769105 − 1) × 100 = **+15,33%**.
- Giá đóng cửa nằm ở tỷ lệ (1.735,09 − 1.724,17)/(1.744,89 − 1.724,17) = **0,527** trong biên ngày, tức **1/3 giữa**, không chạm điều kiện xả 1/3 dưới.
- Đáy phiên 09/10 **1.724,17** là mốc vô hiệu khi **đóng cửa** thủng, đáy phiên trước 08/10 **1.726,00** là hỗ trợ đã thử lại. Kháng cự gần **MA20 1.779,01** và **MA50 1.779,82**; kháng cự mạnh **MA200 1.797,40**. Mốc tròn **1.700** chỉ là mốc tâm lý, không phải hỗ trợ khẳng định.
- R:R giả định mở mới khi lấy kháng cự MA20 và điểm dừng theo mốc vô hiệu = (1.779,007 − 1.735,09)/(1.735,09 − 1.724,17) = **4,02**. Đây là phép đo chỉ số, **không** bật tín hiệu mua bởi chặn cứng phân phối.
- Phiên phân phối: VNINDEX giảm ít nhất 0,2%, GT khớp lệnh tăng so với phiên trước; hết hiệu lực sau 25 phiên hoặc khi sau đó chỉ số tăng >=5% từ close của phiên phân phối. Đếm trong **25 phiên gần nhất đến 09/10**: **10** phiên còn hiệu lực, ngày **11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10**.
- Riêng 09/10 là phân phối mới vì giảm 0,2231206% và khớp lệnh **14.694,49** tỷ > **12.740,77** tỷ ngày 08/10.
- Điểm đồng thuận 7 yếu tố: **giá −1** (dưới cả MA20/50), **GT 0** (phiên giảm chưa đạt 1,2×), **độ rộng 0** (0,712 nằm giữa 0,67 và 1,5), **chất lượng dòng tiền 0** (không xác minh được thanh khoản lan tỏa theo ngành), **khối ngoại 0** (thiếu dữ liệu EOD đúng phạm vi), **phân phối −1** (10/25), **phái sinh/vĩ mô 0** (chưa khóa) = **−2/7**.
- CHẶN CỨNG: **10 phiên phân phối / 25 phiên**, vượt ngưỡng từ 6. Chặn ngoại 5 phiên liên tiếp: **KHÔNG KIỂM ĐƯỢC**. Chặn cuối phiên: **không kích hoạt** theo (0,527 > 1/3), nhưng chỉ kết luận các điều kiện đã có dữ liệu.
- Trạng thái **KHÔNG**, khả năng giao dịch **phòng thủ**, tỷ trọng định hướng **≤20% cổ phiếu / ≥80% tiền mặt** theo Prompt V3.2, không mở mới và không tăng đòn bẩy. Đây là tỷ trọng khung chiến lược, không phải dự báo.

## 3. Đóng góp chỉ số và bản đồ ngành

VNIndex.ai EOD 09/10, tự tổng hợp từ trang có danh sách đầy đủ:
- Top 5 kéo tăng: HDB +0,88; VPB +0,73; TCB +0,67; VHM +0,53; CTG +0,49 điểm. Tổng **+3,30** điểm, TỰ TÍNH.
- Top 5 kéo giảm: VIC −3,96; BSR −0,98; GVR −0,82; FPT −0,70; GAS −0,64 điểm. Tổng **−7,10** điểm, TỰ TÍNH.
- Tránh tính tỷ lệ đóng góp của top 5 vào % biến động khi chỉ số biến động dưới 2 điểm (không rơi vào trường hợp này), nhưng phép chia đơn giản của nhóm kéo giảm trên chỉ số giảm trong phiên phân hóa không đồng nghĩa dòng tiền bán toàn thị trường.

**Danh mục 133 mã** trên website, không phải thống kê toàn HOSE (cơ sở: 133 row verified EOD 09/10 từ src/data/research-data.js):
- Ngân hàng: 7 tăng, 5 đứng, 6 giảm trong 18 mã; HDB +3,94%, VPB +1,49%, TCB +1,41%.
- Chứng khoán: 9 tăng, 1 đứng, 5 giảm trong 15 mã; VIX +3,10%, BVS +2,76%; TVS −2,62%, HCM −1,91%.
- Bất động sản: 6 tăng, 1 đứng, 3 giảm trong 10 mã; NVL +6,83%, CEO +4,04%, KOS −6,76%.
- Năng lượng: 2 tăng, 10 giảm trong 12 mã; OIL +4,58%, GAS −1,59%, BSR −2,97%, PVP −3,60%.
- Công nghệ: 0 tăng, 2 giảm trong 2 mã; DGW −1,05%, FPT −3,02%.

**Quan trọng:** chưa có so sánh giá trị khớp lệnh từng ngành với TB20 cùng nhóm, cũng chưa khóa khối ngoại theo ngành. Vì vậy nhóm tăng chỉ được coi là **điểm sáng giá**, chưa đủ bằng chứng để gọi là **tiền vào mạnh**; nhóm yếu thể hiện **áp lực giá**, không khẳng định đã bị dòng tiền lớn rút ra.

## 4. Kịch bản và cổng xuất bản

- Tốt (THẤP): đóng >1.779,82 rồi >1.797,40, độ rộng/thanh khoản đồng thuận, số phiên phân phối <6 và dữ liệu ngoại xác nhận; tính lại trạng thái, chưa mặc định mua.
- Cơ sở (CAO): giữ trên 1.724,17, vẫn dưới MA20/50; trạng thái KHÔNG, giữ phòng thủ.
- Xấu (TRUNG BÌNH): đóng dưới 1.724,17 hoặc tiếp tục yếu đi; hạ rủi ro mã yếu; 1.700 là tham chiếu tâm lý.
- Trạng thái và tỷ trọng là điều kiện tác nghiệp, không phải xác suất dự đoán định lượng.
- Chỉ xuất bản sau khi nội dung Zalo và bảng hành động khớp tuyệt đối nhật ký và không có số CHƯA XÁC MINH trong Zalo. Không được tự điều chỉnh bố cục khóa v2.2.2.
