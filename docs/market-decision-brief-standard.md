# Market Decision Brief Standard v1.0

**Effective:** 24/09/2026  
**Scope:** `Nhận định ngày` / Daily Market View  
**Status:** LOCKED — mọi bản nhận định mới phải theo chuẩn này trừ khi chuẩn được nâng version.

## 1. Mục tiêu

Biến nhận định thị trường thành một **decision brief** có thể quét nhanh nhưng vẫn giữ chiều sâu kiểm chứng.

Đường đọc bắt buộc:

```
REGIME → THESIS → EVIDENCE → MARKET SNAPSHOT → ACTION → AUDIT / SOURCES
```

Ba lớp thông tin không được trộn:

- **FACT:** số liệu đã xác minh.
- **INTERPRETATION:** ý nghĩa của số liệu.
- **ACTION:** việc cần làm / điều kiện đổi view.

## 2. Layout khóa

### Desktop
- Tỷ lệ nội dung chính: **65% narrative / 35% Market Snapshot**.
- Headline tối đa khoảng 2 dòng, không dùng cỡ kiểu hero marketing.
- Thesis 2–3 câu, tối đa khoảng 66ch.
- 3 luận điểm chính hiển thị dưới thesis.
- Action Bar full-width nằm ngay sau phần brief.

### Tablet
- Narrative trước, Market Snapshot sau.
- Snapshot có thể chuyển 2 cột nếu đủ rộng.

### Mobile
- Trình tự: **Regime → Headline → Thesis → 3 evidence → Snapshot → Action → Trading Playbook → Details**.
- Không giấu critical decision information trong tooltip.
- Metadata dài / audit trail đưa vào Details.

## 3. Màu ngữ nghĩa khóa

Màu chỉ là lớp tăng cường. Luôn đi kèm dấu, nhãn hoặc từ khóa để không phụ thuộc vào màu.

| Ý nghĩa | Token | Màu chữ | Cue bắt buộc |
|---|---|---:|---|
| Tăng / tích cực | `positive` | `#08785A` | `▲`, dấu `+`, hoặc chữ "Tăng" |
| Giảm / tiêu cực | `negative` | `#B42318` | `▼`, dấu `−`, hoặc chữ "Giảm" |
| Cảnh báo / cần xác minh | `warning` | `#8A5A00` | `!` hoặc nhãn "Cảnh báo" |
| Tham chiếu / trung tính | `neutral` | `#55636E` | dấu `•` hoặc chữ "Tham chiếu/Trung tính" |
| Văn bản chính | `ink` | `#17324D` | — |

Các màu trên nền trắng đều được chọn ở mức đủ đậm cho text thường; không dùng xanh/đỏ sáng kiểu bảng điện làm body text.

### Quy ước thị trường Việt Nam
- Giá / chỉ số **tăng**: xanh.
- Giá / chỉ số **giảm**: đỏ.
- Tham chiếu: neutral trong brief (không dùng vàng bảng điện cho mọi text tham chiếu vì giảm readability).
- Trần/sàn chỉ dùng màu đặc thù khi dữ liệu đó thật sự xuất hiện; không mở rộng palette nếu không cần.

## 4. Contract dữ liệu cho entry mới

Từ chuẩn v1.0, entry mới nên có:

```js
brief: {
  thesis: "2–3 câu, FACT đã được cô đọng thành interpretation.",
  evidence: [
    { label: "Xu hướng", text: "...", tone: "positive|negative|warning|neutral" },
    { label: "Độ rộng", text: "...", tone: "..." },
    { label: "Thanh khoản", text: "...", tone: "..." }
  ],
  actions: [
    "Hành động 1.",
    "Hành động 2.",
    "Hành động 3."
  ],
  dataIntegrity: {
    tone: "positive|warning|negative|neutral",
    label: "Mô tả audit đầy đủ",
    shortLabel: "Nhãn ngắn để đặt trên top strip"
  }
}
```

Mỗi metric nên có:

```js
{
  label: "VN-INDEX",
  value: "1.775,09",
  change: "−26,56 • −1,47%",
  tone: "negative",
  direction: "down"
}
```

Khi một metric chứa cả tăng và giảm (ví dụ độ rộng), dùng `valueParts` / `changeParts` để tô màu từng phần, không tô cả dòng một màu.

## 5. Rule màu

1. **Không dùng màu một mình.** Green/red luôn phải có `▲/▼`, `+/-`, hoặc chữ Tăng/Giảm.
2. **Không tô cả paragraph.** Màu chỉ dành cho số liệu, direction indicator, trạng thái, và border accent.
3. **Không dùng nền đỏ/xanh đậm cho khối lớn.** Chỉ dùng tint rất nhẹ để giữ chất institutional research.
4. **Warning ≠ Negative.** Thiếu xác minh / cần thận trọng dùng amber; suy giảm thực tế dùng red.
5. **Neutral không bị coi là xấu.** Dùng slate/gray để tránh ép diễn giải.
6. **Tính nhất quán quan trọng hơn màu "đẹp".** Không tự thêm palette mới ở từng phiên.

## 6. Data integrity

Top strip chỉ hiển thị nhãn ngắn. Full source/audit nằm trong `Dữ liệu, phương pháp và nguồn kiểm chứng`.

Không đưa chuỗi dài tên nguồn lên header chính.

## 7. Acceptance criteria

Một Daily Market View đạt chuẩn khi:

- Headline không chiếm vai trò visual lớn hơn Market Snapshot.
- Thesis đọc được trong 2–3 câu.
- 3 evidence points tách biệt.
- Market Snapshot có số tabular và direction cue.
- Tăng xanh / giảm đỏ / warning amber / neutral slate.
- Action Bar nói rõ trạng thái + 3 hành động.
- Full narrative, methodology, sources vẫn truy cập được trong Details.
- Mobile không tạo paragraph dài full-width.
- Không có thông tin quyết định chỉ tồn tại qua màu hoặc tooltip.
- Entry mới có `brief` đủ các field bắt buộc.

## 8. Nguồn nguyên tắc thiết kế

Chuẩn này dựa trên:
- WCAG 2.2 / W3C: không dùng màu là tín hiệu duy nhất.
- Carbon Design System: differential indicator nên dùng green cho positive, red cho negative và kèm symbol/text.
- USWDS: màu chỉ là progressive enhancement; phải giữ contrast.
- Quy ước bảng giá chứng khoán Việt Nam: tăng xanh, giảm đỏ.

Mọi thay đổi sau này phải nâng version và cập nhật đồng thời:
1. file chuẩn này,
2. `src/scripts/market-decision-brief.mjs`,
3. `docs/prompt-nhan-dinh-vnindex-v3.md`,
4. regression tests.
