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
- `reports/`: PDF công bố trên website.
- `scripts/build-assets.sh`: build có thể tái lập từ `src/` sang `assets/`.

## Build tài nguyên

Yêu cầu Node.js và npm. Không chỉnh trực tiếp các file `*.min.*`.

```bash
./scripts/build-assets.sh
```

Nhánh `main` được triển khai lên GitHub Pages bằng workflow `.github/workflows/pages.yml`.
