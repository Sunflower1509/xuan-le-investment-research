# Company Identity Visual Standard — Coverage Universe 125

Version: **CIVS 1.0**  
Scope: **PHÂN LOẠI NHÓM NGÀNH / Research cards**  
Target: **125/125 mã trong Coverage Universe**

## 1. Mục tiêu

Mỗi card phải giúp nhà đầu tư nhận ra **doanh nghiệp và economic identity** trong khoảng 1–2 giây, nhưng không được đánh đổi tính xác thực. Ảnh nhận diện doanh nghiệp là một lớp dữ liệu riêng, độc lập với bìa báo cáo định giá theo ngày.

- Card Research: ưu tiên Company Identity Visual đã xác minh.
- Dashboard/PDF: tiếp tục dùng bìa báo cáo định giá theo phiên bản.
- Mã chưa đạt chuẩn: giữ bìa báo cáo hiện tại; **không dùng ảnh tạm, ảnh stock hay ảnh suy đoán**.

## 2. Thứ tự ưu tiên nội dung ảnh

### Tier A — Core economic asset / operating activity
Ưu tiên cao nhất. Nhà máy, cảng, mỏ, kho LNG, data center, dự án BĐS, trang trại, dây chuyền, cửa hàng/mạng lưới bán lẻ, hạ tầng hoặc sản phẩm vận hành thực tế gắn trực tiếp với nguồn doanh thu/giá trị doanh nghiệp.

### Tier B — Verified corporate identity
Chỉ dùng khi doanh nghiệp dịch vụ/tài chính không có một tài sản vận hành hữu hình đại diện tốt hơn: trụ sở chính, chi nhánh flagship, trading floor, campus hoặc môi trường hoạt động được doanh nghiệp công bố chính thức.

### Tier C — Product / network identity
Dùng khi thương hiệu/sản phẩm/mạng lưới là economic identity rõ nhất: chuỗi cửa hàng, sản phẩm tiêu dùng chủ lực, nền tảng/dịch vụ do chính doanh nghiệp công bố.

## 3. Nguồn được phép

Chỉ chấp nhận nguồn first-party hoặc tài liệu first-party:

1. Website chính thức của doanh nghiệp.
2. IR / Media Center / Newsroom chính thức.
3. Báo cáo thường niên, ESG, company profile hoặc investor presentation do doanh nghiệp phát hành.
4. CDN được chính trang doanh nghiệp nhúng trực tiếp và được whitelist theo từng mã.

Không chấp nhận: Google Images như nguồn gốc, báo chí bên thứ ba, broker research bên thứ ba, Unsplash/Pexels/Pixabay/Freepik/Shutterstock/iStock, ảnh AI/generative, ảnh không xác định được quyền/ngữ cảnh.

## 4. Nội dung bị loại

Không chọn ảnh chỉ vì đẹp. Loại nếu ảnh chủ yếu là:

- lãnh đạo bắt tay, hội nghị, lễ ký kết, gala, trao giải, CSR;
- ảnh chân dung lãnh đạo;
- render dự án chưa xác nhận là tài sản thực tế nếu có thể gây hiểu nhầm;
- tài sản đã bán/ngừng vận hành hoặc không còn đại diện cho thesis hiện tại;
- thumbnail/video frame có overlay lớn, black bars hoặc UI làm giảm nhận diện, trừ khi không có nguồn tốt hơn và được đánh dấu hạ bậc;
- ảnh chất lượng thấp, crop mất chủ thể hoặc chữ/logo chiếm phần lớn diện tích.

## 5. Quality Gate — 10 điểm

Mỗi visual được chấm 5 tiêu chí, 0–2 điểm/tiêu chí:

1. **Identity accuracy** — đúng doanh nghiệp, không nhầm công ty con/thương hiệu.
2. **Economic relevance** — thể hiện hoạt động/tài sản tạo doanh thu hoặc giá trị cốt lõi.
3. **Source authority & traceability** — first-party, có source page và image URL truy vết được.
4. **Visual quality & crop** — đủ nét, chủ thể rõ ở thumbnail 16:9, không bị che/cắt sai.
5. **Recency & non-misleading** — còn đại diện cho doanh nghiệp hiện tại, không gây hiểu nhầm về quy mô/tình trạng tài sản.

**Ngưỡng công bố: >= 8/10 và không tiêu chí nào được 0.**  
Nếu không đạt: giữ fallback bìa báo cáo.

## 6. Chuẩn kỹ thuật

- Output cố định: **960×540, WebP, quality 84**.
- Nguồn tối thiểu: **640×360**; ưu tiên >=1280×720.
- Ảnh được tải về, normalize, strip metadata và phục vụ local; không hotlink trong UI.
- Mỗi file có SHA-256 và cache-busting token theo hash.
- Alt text phải mô tả chủ thể thật, không nhồi từ khóa.
- Card dùng `loading="lazy"`; dialog định giá không bị thay đổi.
- Nếu visual local lỗi tải, UI phải fail-safe về bìa báo cáo cũ.

## 7. Xác minh nguồn tự động

Pipeline được phép resolve ảnh từ trang chính thức theo hai cơ chế:

- **explicit**: image URL đã được kiểm chứng và khai báo trực tiếp;
- **img-alt / og:image discovery**: pipeline tải source page chính thức, tìm đúng ảnh theo alt/metadata đã khóa, sau đó kiểm tra host/CDN whitelist trước khi tải.

Mọi trường hợp discovery không khớp, host lạ, HTTP lỗi, ảnh quá nhỏ hoặc hash bất thường phải **fail-closed** và chặn deploy.

## 8. Quy tắc rollout 125 mã

Rollout theo batch nhỏ, không chạy theo số lượng bằng mọi giá:

- Batch chuẩn: 8–15 mã/lần.
- Ưu tiên: mã có báo cáo mới, mã leader/được xem nhiều, sau đó phủ đều các nhóm ngành.
- Mỗi batch phải PASS: source verification → normalize → test → audit → build → deploy → post-deploy verification.
- `coverageTarget = 125`; `verifiedCount` tăng dần. Các mã chưa verified tiếp tục dùng report-cover fallback.

## 9. Quy tắc thay ảnh

Thay visual khi:

- doanh nghiệp thay đổi tài sản/hoạt động cốt lõi;
- ảnh cũ gây hiểu nhầm hoặc crop kém;
- có nguồn first-party mới tốt hơn rõ rệt;
- source page/asset không còn truy cập được.

Không thay chỉ để “làm mới giao diện”. Tính nhất quán và khả năng nhận diện quan trọng hơn tần suất đổi ảnh.
