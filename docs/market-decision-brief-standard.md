# Daily Market Research Brief — Typography & Information Hierarchy Hardening v2

**Version:** 2.0.0  
**Effective:** 25/09/2026  
**Scope:** `NHẬN ĐỊNH THỊ TRƯỜNG HÀNG NGÀY`  
**Status:** LOCKED

## 1. Reading architecture

Mọi bản nhận định mới phải đi theo đúng đường đọc:

```
REGIME / SESSION
→ HEADLINE
→ EXECUTIVE THESIS
→ MARKET EVIDENCE
→ ACTION
→ MARKET SNAPSHOT
→ TRADING PLAYBOOK
→ AUDIT / SOURCES
```

Ba lớp không được trộn:

- **FACT:** số liệu đã xác minh.
- **INTERPRETATION:** hàm ý của số liệu.
- **ACTION:** việc cần làm hoặc điều kiện thay đổi trạng thái.

## 2. Type-role contract

| Role | Font | Size | Line-height | Measure |
|---|---|---:|---:|---:|
| Headline | Source Serif XL | 32–36px | 1.14 | 30ch |
| Thesis | Manrope XL | 16px | 1.58 | 64ch |
| Evidence signal | Manrope XL | 14px | 1.40 | n/a |
| Evidence detail | Manrope XL | 13px | 1.48 | bounded by column |
| Snapshot label | Manrope XL | 10.5–12px | 1.35 | n/a |
| Snapshot metric | Manrope XL | 24px | 1.16 | tabular nums |
| Metadata | Manrope XL | 11px | 1.40 | n/a |

Quy tắc:
- Serif chỉ dùng cho headline editorial chính.
- Sans-serif dùng cho thesis, evidence, numbers, labels, metadata và action.
- Không đưa ngày phiên vào headline.
- Ngày phải là metadata: `PHIÊN DD/MM/YYYY · EOD`.
- Body text dài phải giữ line length khoảng 45–90 ký tự; thesis target khoảng 64ch.

## 3. Spacing tokens

```
xs = 6px
sm = 10px
md = 16px
lg = 24px
xl = 32px
```

Không tự thêm spacing ngẫu nhiên cho từng phiên. Khoảng cách phải xuất phát từ token.

## 4. Desktop layout

- Archive rail: khoảng **220px**.
- Main brief: `minmax(0,1fr) + 360px snapshot`.
- Headline tối đa khoảng 2 dòng.
- Decision Bar nằm **ngay sau evidence trong cột narrative** để tránh khoảng trắng chết khi Snapshot cao hơn.
- Snapshot không được lấn át thesis bằng font hoặc màu quá mạnh.

## 5. Executive Thesis

Phải có heading semantic:

`LUẬN ĐIỂM CHÍNH`

Nội dung:
- 2–3 câu.
- Kết luận trước.
- Không lặp lại toàn bộ raw data.
- Không dài quá khoảng 64ch.

## 6. Evidence Strip

Mỗi evidence item bắt buộc theo:

```
LABEL → SIGNAL → INTERPRETATION
```

Khuyến nghị schema:

```js
{
  label: "Xu hướng",
  signal: "▼ Dưới MA20 / MA200",
  detail: "MA20 1.815,11 • MA200 1.794,80 • sát MA50 1.774,20.",
  text: "Fallback đầy đủ",
  tone: "negative"
}
```

Không dùng cấu trúc `label → paragraph dài` ở vùng scan nhanh.

## 7. Semantic Snapshot States

Không dùng cùng badge `▼ Giảm` cho mọi loại metric.

Các state đã khóa:

| State | Label | Tone |
|---|---|---|
| `price_up` | ▲ Tăng | positive |
| `price_down` | ▼ Giảm | negative |
| `breadth_positive` | ▲ Độ rộng tích cực | positive |
| `breadth_negative` | ▼ Độ rộng tiêu cực | negative |
| `liquidity_above_average` | ▲ Trên trung bình | positive |
| `liquidity_below_average` | ▼ Dưới TB20 | warning |
| `technical_positive` | ▲ Kỹ thuật tích cực | positive |
| `technical_negative` | ▼ Kỹ thuật yếu | negative |
| `neutral` | • Trung tính | neutral |

Mỗi metric mới nên có:

```js
snapshotState: "price_down"
```

Fallback vẫn dùng `direction` + `tone`, nhưng `snapshotState` là chuẩn ưu tiên từ v2.

## 8. Color contract

Màu chỉ là progressive enhancement.

| Meaning | Color | Non-color cue |
|---|---:|---|
| Positive | `#08785A` | ▲ / + / “Tăng” |
| Negative | `#B42318` | ▼ / − / “Giảm” |
| Warning | `#8A5A00` | ! / “Cảnh báo” |
| Neutral | `#55636E` | • / “Trung tính” |

Cấm:
- tô cả paragraph đỏ/xanh;
- dùng màu là tín hiệu duy nhất;
- dùng badge “Giảm” cho liquidity chỉ vì giá trị thấp hơn bình quân;
- dùng nền bão hòa mạnh cho khối lớn.

## 9. Archive navigator

- Selected: `MỚI NHẤT + ngày + title + trạng thái`.
- Unselected: `ngày + title + trạng thái`.
- Không lặp edition badge trên mọi item.
- Title archive dùng UI sans-serif, tối đa 2 dòng.
- Sidebar là navigator, không phải mini-card marketing.

## 10. Responsive hierarchy

### Tablet
- Narrative trước, Snapshot sau.
- Evidence vẫn giữ signal riêng.
- Không ép 3 cột text quá nhỏ.

### Mobile
Thứ tự:
`Regime/Session → Headline → Thesis → Evidence → Action → Snapshot → Playbook → Audit`.

- Headline 28–33px.
- Thesis 15px / 1.60.
- Evidence về 2 cột, sau đó 1 cột ở viewport hẹp.
- Không paragraph full-width quá dài.
- Không document-level horizontal overflow.

## 11. Acceptance criteria

Một bản đạt v2 khi:

- ngày không nằm trong headline;
- headline desktop khoảng 2 dòng;
- thesis có heading semantic và max-width 64ch;
- evidence đúng `label → signal → interpretation`;
- decision bar nằm ngay dưới evidence;
- snapshot badge dùng semantic state đúng loại metric;
- snapshot number dùng sans-serif + tabular nums;
- archive không lặp edition badge trên mọi item;
- mobile không overflow ngang;
- audit/source vẫn truy cập đầy đủ;
- v2 contract được kiểm bằng unit + Playwright QA.

## 12. Research basis

Chuẩn v2 dựa trên:
- USWDS typography: body text khoảng 16px, line length 45–90 ký tự, target tốt khoảng 66 ký tự, long-form line-height ít nhất khoảng 1.5.
- W3C WAI: dùng heading + spacing để nhóm nội dung và hỗ trợ scan; heading phải mang nghĩa thật.
- GOV.UK layout: giới hạn chiều rộng text để tránh dòng quá dài, thường không quá khoảng 75 ký tự.
- Market Decision Brief v1 color/accessibility rules vẫn giữ nguyên.

Single source of truth:
1. `docs/market-decision-brief-standard.md`
2. `src/scripts/market-decision-brief.mjs`
3. `src/styles/market-decision-brief.css`
4. `docs/prompt-nhan-dinh-vnindex-v3.md`
5. regression + visual QA.
