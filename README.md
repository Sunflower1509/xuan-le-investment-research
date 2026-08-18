# Xuân Lê TVS Investment Research

Website công khai giới thiệu dashboard định giá, thư viện báo cáo PDF và danh mục cổ phiếu đã phân tích.

Trang chính thức: <https://sunflower1509.github.io/xuan-le-investment-research/>

## Cấu trúc

- `index.html`: tài liệu HTML duy nhất của website.
- `src/data/`: dữ liệu định giá và nhận định thị trường có thể bảo trì.
- `src/scripts/`: mã giao diện và tương tác.
- `src/styles/`: CSS nguồn.
- `assets/css/` và `assets/js/`: bundle production đã minify; đây là hai tài nguyên mã duy nhất được `index.html` tải.
- `assets/images/reports/`: ảnh bìa WebP của từng báo cáo.
- `reports/`: PDF công bố trên website; giữ nguyên đường dẫn public.
- `scripts/build/`: công cụ build và đóng gói production.
- `scripts/audit-site.mjs`: kiểm tra tính toàn vẹn dữ liệu, tài nguyên, SEO và thứ tự section.
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
