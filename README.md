# Xuân Lê TVS Investment Research

Website công khai giới thiệu dashboard định giá, thư viện báo cáo PDF và danh mục cổ phiếu đã phân tích.

Trang chính thức: <https://sunflower1509.github.io/xuan-le-investment-research/>

## Cấu trúc

- `index.html`: tài liệu HTML duy nhất của website.
- `src/data/`: dữ liệu định giá và nhận định thị trường có thể bảo trì.
- `src/scripts/`: mã giao diện và tương tác.
- `src/styles/`: CSS nguồn.
- `assets/css/` và `assets/js/`: bundle production **được sinh trong CI/build và không track trong Git**; artifact deploy chỉ đưa các bundle đã minify lên website.
- `assets/images/reports/`: ảnh bìa WebP của từng báo cáo.
- `assets/images/logos/`: logo doanh nghiệp SVG local, ánh xạ 1:1 theo ticker trong `src/data/company-logos.js`.
- `reports/`: PDF công bố trên website; giữ nguyên đường dẫn public.
- `scripts/build/`: công cụ build và đóng gói production.
- `scripts/audit-site.mjs`: kiểm tra tính toàn vẹn dữ liệu, tài nguyên, SEO và thứ tự section.
- `scripts/audit-company-logos.mjs`: kiểm tra đủ logo theo Coverage Universe hiện hành, mapping ticker/sàn/ISIN, chữ ký SVG và SHA-256 local/live.
- `scripts/sync-company-logos.mjs`: đồng bộ logo theo kết quả ticker + sàn chính xác và dừng nếu nhận diện nguồn thay đổi.
- `scripts/process-trade-ledger.mjs`: xử lý tự động hóa EOD/Trade Ledger.
- `tests/`: kiểm thử quy tắc tự động hóa.

## Build tài nguyên

Yêu cầu Node.js và npm. Không chỉnh trực tiếp các file `*.min.*`.

```bash
bash scripts/build/build-assets.sh
```

Có thể kiểm tra đúng artifact sẽ được triển khai bằng một thư mục trống:

```bash
bash scripts/build/prepare-site.sh /tmp/xuan-le-site-preview
```

Nhánh `main` được triển khai lên GitHub Pages bằng workflow `.github/workflows/pages.yml`. Mã nguồn, script build và tài liệu bảo trì được giữ trong repository nhưng không đưa vào artifact công khai. Việc tổ chức thư mục nội bộ không được phép thay đổi `index.html`, thứ tự section, đường dẫn `assets/` hoặc `reports/` trên website.

## Trạng thái đồng bộ gần nhất

- Kiểm toán 27/09/2026: **127 báo cáo định giá = 127 mã Coverage Universe**; 127 ảnh bìa báo cáo; 127 logo doanh nghiệp; dữ liệu EOD toàn coverage khóa tại phiên **25/09/2026**.
- CIVS dùng một invariant duy nhất: **127 mã**, gồm 9 visual baseline đã xác minh + 118 candidate registry; runtime không còn chấp nhận universe 125.
- Daily Market, Trade Ledger và các nhãn first-paint EOD được audit theo runtime thực tế trước deploy.
- Bố cục công khai (đã được chủ website phê duyệt bổ sung 12/10/2026) khóa theo thứ tự `overview → daily-market → reference-portfolio → position-ledger → action-radar → research`. Bảo toàn tất cả section cũ; mọi thay đổi bố cục sau này phải được phê duyệt riêng.
## Danh mục tham khảo kỹ thuật 1–3 tuần (12/10/2026)

- `src/data/reference-portfolio.mjs` lưu **sáu vùng AmiBroker do người quản lý phê duyệt**: BSR 29.500–30.000; VPB 23.000–24.000; HDB 22.000–22.800; DGW 46.000–47.500; GMD 53.000–54.500; GVR 32.000–33.000 (đồng/cp). Không có NVB.
- `src/scripts/reference-portfolio-core.mjs` tính giá trung bình = (cận dưới + cận trên) / 2, phần trăm chênh lệch so với EOD và ngưỡng cảnh báo -5% **lý thuyết**. Không phải giao dịch thực, không tự động ghi Trade Ledger.
- `src/scripts/reference-portfolio.mjs`, `src/styles/reference-portfolio.css` hiển thị bảng kẻ ô trên desktop và thẻ trên mobile; toàn bộ CSS được giới hạn phạm vi.
- Chỉ đọc `window.RESEARCH_DATA.coverage` đã khóa theo phiên; **không tạo bộ giá thứ hai**. Workflow `.github/workflows/eod-daily.yml` hiện có sẽ tự phát hành EOD khi kiểm chứng thành công.
- Cảnh báo cũ của BSR (`eligibility: veto`) luôn được tôn trọng và được trình bày rõ. Vùng AmiBroker không ghi đè vùng theo định giá, hành động từ báo cáo hoặc Nhật ký tín hiệu.
- Giá trước ngày vùng được công bố chỉ dùng minh họa chênh lệch theo phép tính, **không diễn giải thành hiệu suất kể từ khuyến nghị**.
- Kiểm thử bằng `node --test tests/reference-portfolio.test.mjs`; kiểm toán tổng thể bằng `node scripts/audit-site.mjs`.
