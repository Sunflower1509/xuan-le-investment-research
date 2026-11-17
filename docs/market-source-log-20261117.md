# KIỂM TOÁN NGUỒN VÀ CỔNG XUẤT BẢN VN-INDEX — PHIÊN 17/11/2026

**Giờ đối chiếu bổ sung:** 17/11/2026, khoảng 15:29–15:31 giờ Việt Nam. **Mốc phân tích:** dữ kiện phiên 17/11 đã chốt, không lấy số phiên 18/11 hoặc số đo trong phiên làm số chốt. **Tài liệu điều khiển:** `docs/prompt-nhan-dinh-vnindex-v3.md`, Prompt v3.3.1, SHA `d3776d82a27f643bdc40b13729f564003417e2d0`. Tệp đính kèm riêng cùng tên chưa truy xuất được, sử dụng bản đã có trong repository.

## I. Ba lượt rà Prompt

1. **Lượt 1 — dữ liệu:** mục 0–I; số lõi, thứ bậc nguồn, khớp/tổng, cùng phạm vi, nhật ký số thiếu, cấm dùng dữ liệu trong phiên.
2. **Lượt 2 — quyết định:** mục II–VI; chỉ chấm 7 yếu tố, đếm phân phối, veto và ba bước trạng thái SAU khi cổng lõi đạt.
3. **Lượt 3 — công bố:** mục VII–XII; cổng chưa đạt phải dừng, không viết Zalo hay đăng bản phân tích, giữ nguyên cấu trúc và dữ liệu cũ.

## II. Dữ liệu lõi và nguồn đã mở

| Hạng mục | Số / phạm vi | Nguồn 1 (đọc thật) | Nguồn 2 / kiểm tra phạm vi | Nhãn |
|---|---|---|---|---|
| VN-Index đóng | **1.726,72**, giảm **10,17** (**−0,59%**) | Stockbiz, kết phiên 17/11: `VN-Index 1.726,72▼10,17 (−0,59%)`, https://stockbiz.vn/thi-truong | VNDIRECT Finfo được hệ thống EOD khóa `close: 1726.72`, `changePct: -0.585529...`, 17/11 trong `src/data/research-data.js`, https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/src/data/research-data.js | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.837,13**, **−0,39%** | Stockbiz: `VN30 1.837,13▼7,12 (−0,39%)`, https://stockbiz.vn/thi-truong | VNDIRECT Finfo EOD 17/11: `close:1837.13`, `changePct:-0.386...` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **248,60**, **−2,48%** | Stockbiz: `HNX-Index 248,60▼6,31 (−2,48%)` | Finfo EOD 17/11: `close:248.6`, `changePct:-2.475...` | **ĐÃ ĐỐI CHIẾU** |
| Độ rộng HOSE theo Finfo | **107 tăng / 199 giảm / 62 đứng** | VNDIRECT Finfo `marketSession.breadth` 17/11 trong tệp EOD đã khóa; nguồn gốc https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-17&size=500 | VNIndex.ai bản cập nhật **trong phiên 13:35** đếm 65/226/113 trên 404 mã, khác thời điểm/phạm vi, **không dùng để đối chiếu**; https://vnindex.ai/vnindex-hom-nay | **1 NGUỒN** cho phạm vi EOD Finfo |
| **GT khớp lệnh HOSE EOD 17/11** (không thỏa thuận, tỷ đồng) | **KHÔNG CÓ GIÁ TRỊ ĐƯỢC XÁC MINH** | nmquan trang `Lịch sử VN-Index`, truy xuất 15:29, bảng cuối mới tới **16-11-2026**, cột `GT khớp lệnh (tỉ)`, https://nmquan.vn/data/chi-so/vn-index/lich-su | HOSE điểm tin 17/11 chưa thấy công bố trong nguồn đã mở; CafeF trang lịch sử vẫn ghi **16/11**; Stockbiz chỉ có tổng không tách khớp, Dalink 4.058 tỷ lúc **12:46**, không phải EOD. | **CHƯA XÁC MINH** |
| Giá trị giao dịch **TỔNG**, khác số khớp | **14.639 tỷ** theo Stockbiz, phạm vi `nhóm VN-Index`; không dùng cho công thức khớp | Stockbiz 17/11: `Thanh khoản nhóm VN-Index đạt 14.639 tỷ đồng`, https://stockbiz.vn/thi-truong | Không có xác nhận 14.639 tỷ là giá trị **KHỚP không gồm thỏa thuận**; trang VNIndex.ai đang hiển thị **giá trị GD trong phiên 13:35**. | **1 NGUỒN** cho tổng có phạm vi riêng; **KHÔNG THAY KHỚP** |
| Khối ngoại HOSE **TỔNG** | **Bán ròng 421 tỷ** theo Stockbiz tại lần mở sau, chưa tách KHỚP | Stockbiz mục cập nhật sau phiên 17/11: `Khối ngoại bán ròng 421 tỷ đồng`, https://stockbiz.vn/thi-truong?trang=9 | Chênh so với số 358 tỷ được ghi ở lượt kiểm trước; bản mới chỉ 1 nguồn cùng mốc, không có chuỗi khớp HOSE 5 phiên cùng phạm vi | **1 NGUỒN** cho bản mới, không dùng kích hoạt veto |

**Đính chính minh bạch đối với nhật ký lập lúc 15:20:** trang `vnindex.ai/vnindex-hom-nay` khi mở lại **vẫn ghi "Đang giao dịch · 13:35"** và chỉ số 1.718,25, **không phải EOD**. Vì vậy KHÔNG giữ nhãn đã đối chiếu từ VNIndex.ai EOD mà nhật ký trước từng gán. Thay bằng số EOD thực có nguồn Stockbiz + VNDIRECT. Không tiếp tục viện dẫn con số OHLC/MA được trích từ trang đang trong phiên để làm báo cáo EOD.

## III. Nhật ký tìm chỉ tiêu KHỚP bị thiếu (ít nhất ba trang)

1. **nmquan** — https://nmquan.vn/data/chi-so/vn-index/lich-su — **có số nhưng sai phiên**: hàng mới nhất 16-11-2026, chưa có khớp 17/11.
2. **CafeF HOSE/stock history** — https://cafef.vn/du-lieu/lich-su-giao-dich-hvn-1.chn — **có số nhưng sai phiên**: trang còn thông báo dữ liệu đóng phiên 16/11, khớp 8.566,75 tỷ thuộc ngày cũ.
3. **Stockbiz** — https://stockbiz.vn/thi-truong — **có số, khác phạm vi**: 14.639 tỷ tổng GD nhóm VN-Index, không tách thỏa thuận.
4. **VNIndex.ai** — https://vnindex.ai/vnindex-hom-nay — **có số nhưng sai mốc giờ**: trang 13:35 đang giao dịch, giá trị giao dịch TỔNG không khớp.
5. **Dalink** — https://dalink.net/thi-truong/chi-so/VNINDEX — **có số nhưng sai mốc giờ**: giá trị khớp 4.058 tỷ lúc 12:46, không phải EOD.
6. **Thời báo / báo sáng và HDBS bản tin 17/11** — https://hdbs.vn/ban-tin-thi-truong-ngay-17-11-2026/ — **có số nhưng sai phiên**: bản tin hôm nay nhắc phiên 13/11, không dùng cho 17/11.
7. **Bài báo tổng hợp 17/11** — https://vov.vn/thi-truong/nhan-dinh-chung-khoan-1711-dong-tien-suy-yeu-nha-dau-tu-nen-han-che-mua-them-post1350702.vov — **có số nhưng sai phiên**: nhận định trước mở phiên 17 về ngày 16, không phải EOD 17.

Không lấy tổng giao dịch trừ ước lượng thỏa thuận, không nội suy thanh khoản từ khối lượng, không tự dựng số trong thiếu hụt.

**Bổ sung lượt tìm 15:43–15:44 ngày 17/11/2026:** mở lại nmquan (vẫn dừng 16/11); báo cáo HDBS 17/11 và PSI Morning 17/11 đều phân tích *phiên 16/11*; Vietstock/FILI trang 17/11 chỉ có cập nhật đến cuối phiên sáng, không có giá trị khớp EOD; tìm thông cáo HOSE 17/11 nhưng chưa truy xuất được toàn văn; mở Stockbiz sau phiên chỉ có tổng 14.639 tỷ cho nhóm VN-Index. Khối ngoại Stockbiz mới hiển thị −421 tỷ, đã thay số −358 tỷ từ lượt trước và ghi nhận lệch giờ cập nhật, không dùng cho phép tính ngoại KHỚP. **Không có số khớp HOSE 17/11 được xác nhận từ các nguồn này.**

## IV. Cổng và quyết định

Đúng mục **0.7 và VII.0** của Prompt v3.3.1, **thiếu giá trị KHỚP LỆNH HOSE đúng phiên 17/11** là thiếu **số lõi**. **Cổng KHÔNG ĐẠT** ⇒ câu bắt buộc:

**KHÔNG ĐỦ DỮ LIỆU — KHÔNG NHẬN ĐỊNH**

Không chấm 7 yếu tố, không khẳng định số phân phối mới hay trạng thái CÓ/CHỜ/KHÔNG, không đăng nhận định 17/11 hoặc viết bản Zalo 250–400 chữ mang tính khuyến nghị. Các phép tính trung bình từ nguồn chưa chốt đúng ngày không được dùng vượt cổng. Bản 16/11 vẫn giữ nguyên để khách không nhận nhầm báo cáo chưa đủ số.

**Đầu vào còn cần:** giá trị khớp lệnh HOSE **cuối phiên 17/11/2026**, tỷ đồng, **không bao gồm thỏa thuận**, kèm nguồn và phạm vi thống kê để nối vào chuỗi khớp lệnh đã có. Người dùng không bị yêu cầu tự tìm nếu nguồn công bố sau; hiện chưa tìm được nên không giả số.

## V. Kiểm tra kỹ thuật và đồng bộ

- EOD giá 17/11 đã **khóa 135/135 mã**, đối chiếu VNDIRECT Finfo với **KBS đúng ngày 135/135 mã**, 0/135 trực tiếp với CafeF do nguồn CafeF chưa có dòng đúng ngày tại thời điểm khóa, không gọi đó là đối chiếu CafeF thành công.
- Workflow GitHub `44045509869` **thành công**, 188/188 phép thử đạt; kiểm toán website, kiểm soát phạm vi sửa đổi và so khớp byte sau triển khai **đạt**. https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/44045509869
- Cổng thời gian của push maintenance trước 15:15 chọn ngày 16/11 là **đúng quy tắc an toàn**, không phải giá 17 đã cập nhật. Lượt đặt đích 17/11 sau đó phát hiện 2 test cố định ngày 16; đã chỉnh thành test theo ngày hiện hành, giữ kiểm tra stale NT2, sửa Regex test, **không bỏ phép thử**.
- Bộ lịch EOD `TARGET_DATE: ${{ inputs.date }}` đã được khôi phục; lịch chạy 15:27/16:07 giờ Việt Nam giữ nguyên; không sửa quy tắc market stop, HTML/CSS, thứ tự mục hoặc danh mục.
- `src/data/research-data.js` đã có `meta.updated=2026-11-17`, `marketSession.date=2026-11-17`; `src/data/individual-nt2-eod.json` giữ snapshot **16/11** và không đưa dữ liệu cũ làm EOD NT2 17.
- **Không có module nhận định 17/11**, không thay bản 16/11. Đây là cổng xuất bản có chủ đích, không phải lỗi hiển thị.

## VI. Tự kiểm kiểm soát 20 mục theo Prompt

| Tiêu chí | Tình trạng |
|---|---|
| 1. Đúng ngày, chốt giờ | ĐẠT có ghi giờ |
| 2. Không dùng tương lai | ĐẠT |
| 3. Số lõi có trích nguồn thật | ĐẠT với số có được |
| 4. Trang được mở thực sự | ĐẠT với trang đã dẫn |
| 5. Đủ mọi số lõi | **KHÔNG ĐẠT — thiếu KHỚP 17/11** |
| 6. Nhật ký 3+ nguồn cho số thiếu | ĐẠT |
| 7. Chuỗi một gốc | KHÔNG thực hiện vượt cổng |
| 8. Số xuất bản có nguồn | ĐẠT — không xuất bản số chưa khóa |
| 9. Không sửa Sổ cũ | ĐẠT |
| 10. Ngày theo lệnh | ĐẠT |
| 11. Xác định chế độ | KHÔNG thực hiện do cổng lõi |
| 12. Nền xu hướng | KHÔNG thực hiện do cổng lõi |
| 13. 7 yếu tố | KHÔNG thực hiện do cổng lõi |
| 14. Kiểm cổng chặn | KHÔNG thực hiện do cổng lõi |
| 15. Đường trạng thái ba bước | KHÔNG thực hiện do cổng lõi |
| 16. Vùng mua | KHÔNG công bố |
| 17. Mốc/R:R | KHÔNG công bố |
| 18. Bản đồ dòng tiền ngành | KHÔNG xuất bản nhận định |
| 19. Đồng nhất web/Zalo, giữ bố cục | Bảo toàn bố cục ĐẠT; Zalo không viết theo nguyên tắc dừng |
| 20. Bổ sung Sổ dữ liệu | CHƯA thực hiện vì dữ liệu lõi thiếu và Sổ gốc chưa được cung cấp |

**Hồ sơ này là tài liệu kiểm toán nội bộ trong `docs/`, không nạp vào mục nhận định công khai.** Không đổi cấu trúc website.
