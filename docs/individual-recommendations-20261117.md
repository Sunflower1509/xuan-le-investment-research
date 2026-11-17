# Khuyến nghị riêng (công khai): POW, NT2, VIX, SHS

**Ngày chủ website cung cấp vùng mua:** 17/11/2026. Danh sách này được hiển thị thành một khối độc lập trong section `reference-portfolio`, dưới bảng sáu mã hiện hữu. Dữ liệu được xuất bản trên GitHub Pages **là công khai**, không phải tài khoản cá nhân có quyền riêng tư.

## Nguồn gốc dữ liệu và ý nghĩa các mốc

- **Vùng mua** do người quản lý nhập: POW 12.000–12.500; NT2 23.000–23.500; VIX 12.000–12.500; SHS 12.000–12.500 (đồng/cp).
- **Giá trung bình** = (cận dưới + cận trên) / 2, không làm tròn trước khi tính.
- **Mốc cảnh báo −5%** = 95% giá trung bình; **giới hạn −7%** = 93% giá trung bình. Đây là **mốc mô hình**, không phải giá khớp lệnh thực. Mức lỗ của nhà đầu tư phải tính theo giá mua/giá khớp thực tế, phí và trượt giá.
- **Kịch bản kỳ vọng T1 (R/R 2:1)** = giá TB + 2 × (giá TB − mốc −5%); **T2 (R/R 3:1)** = giá TB + 3 × khoảng rủi ro đó. Làm tròn lên bước giá theo sàn; **không phải kháng cự kiểm chứng, dự báo giá hay cam kết lợi nhuận**. Người quản lý có thể sau này xác nhận lại theo AmiBroker; không được tự chuyển mốc thành tín hiệu CÓ MUA.
- **Trạng thái CHỜ**: giá EOD nằm ngoài vùng hoặc thiếu xác nhận dòng tiền. Nếu giá trong vùng, chỉ đánh dấu 'trong vùng • chờ xác nhận'; không phát lệnh thực tế.

## Dữ liệu EOD

- POW, VIX, SHS dùng chung `window.RESEARCH_DATA.coverage` của Research Terminal. Không thêm báo cáo PDF, không ghi đè action hoặc bảng định giá.
- NT2 không có hồ sơ trong Coverage Universe hiện tại, vì vậy dùng `src/data/individual-nt2-eod.json` làm snapshot EOD riêng. Giá ban đầu 16/11/2026 = 23.700 đồng, 815.700 cổ phiếu; xác nhận bởi CafeF, Simplize và trích lục VNDIRECT qua taichinh.com.
- Sau mỗi phiên, `scripts/update-individual-nt2-eod.mjs --date YYYY-MM-DD` lấy giá VNDIRECT đúng ngày và **chỉ cập nhật khi CafeF có giá đóng cửa cùng ngày khớp VNDIRECT**. Nếu thiếu/sai nguồn, không sửa số cũ; website hiển thị rõ ngày giá và `CHỜ EOD XÁC MINH`. Lỗi NT2 không làm phá vỡ các bộ dữ liệu khác.
- Giá EOD phiên trước ngày công bố 17/11 chỉ dùng để đối chiếu với vùng mua; không coi là hiệu suất kể từ ngày khuyến nghị.

## Quy tắc loại tự động

- Sau EOD 17/11 trở đi, nếu Close <= giá TB × 0,95, mã chuyển vào `src/data/individual-recommendations-exits.json` (lưu một sự kiện/mã). Nếu Close <= giá TB × 0,93, sự kiện ghi mức nghiêm trọng `critical-7`.
- Sự kiện lưu ngày, giá, vùng lúc loại và nguồn. Không hồi tố, không nhân đôi; giá hồi phục không tự đưa mã quay trở lại.
- Không thao tác đặt lệnh, không tác động `trade-ledger.json` hoặc `reference-portfolio-exits.json`. Muốn tái kích hoạt mã phải có quy trình phê duyệt phiên bản nghiên cứu mới.
- `scripts/audit-site.mjs` chặn phát hành nếu có vi phạm đủ điều kiện mà chưa ghi lịch sử. Hai workflow Pages và EOD cùng chạy bộ xử lý.

## Nguồn nghiên cứu ngành và rủi ro

- POW: thông tin nghiên cứu Q3/2026 của SHS và bảng giá VNDIRECT/CafeF; theo dõi hoạt động nhà máy điện, giá khí và công nợ.
- NT2: công bố của doanh nghiệp tại `pvpnt2.vn` về 9 tháng 2026 và EOD phiên 16/11/2026 từ CafeF/Simplize.
- VIX: báo cáo tài chính Q3/2026 cho thấy rủi ro biến động tự doanh lớn; tiếp tục xác minh nợ vay và giá trị danh mục FVTPL.
- SHS: công bố BCTC Q3/2026 tại `shs.com.vn`, theo dõi chi phí vốn, dư nợ margin và lợi nhuận tự doanh.

## Nghiệm thu

Chạy `node --test tests/*.test.mjs`, `node scripts/process-individual-recommendations-exits.mjs`, `bash scripts/build/build-assets.sh`, `node scripts/audit-site.mjs`; kiểm thử Chromium/WebKit và xác minh post-deploy. Không chỉnh cấu trúc section hoặc sửa báo cáo PDF.
