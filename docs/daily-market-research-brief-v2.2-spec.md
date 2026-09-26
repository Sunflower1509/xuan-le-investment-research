# Daily Market Research Brief v2.2 — Semantic Data Color & Layout Consolidation

**Status:** DESIGN FREEZE — approved 26/09/2026  
**Implementation status:** NOT YET DEPLOYED  
**Current production standard while v2.2 is pending:** v2.1.0  
**Scope:** `NHẬN ĐỊNH THỊ TRƯỜNG HÀNG NGÀY`

## 1. Objective

v2.2 fixes two root causes observed in production:

1. **Semantic color is applied at row level instead of atomic-value level.**
2. **Date, headline, evidence and snapshot compete for horizontal space, creating fragmented typography and excessive wrapping.**

The implementation must improve scanability without reducing data depth or auditability.

## 2. Locked reading hierarchy

Desktop:

```
REGIME / DATA STATUS
DATE KICKER
HEADLINE
EXECUTIVE THESIS
EVIDENCE MATRIX
ACTION BAR          | MARKET SNAPSHOT
TRADING PLAYBOOK
AUDIT / SOURCES
```

Mobile:

```
REGIME / DATA STATUS
DATE
HEADLINE
THESIS
EVIDENCE
ACTION
SNAPSHOT
PLAYBOOK
AUDIT / SOURCES
```

## 3. Date + headline contract

The date remains automatic and is derived only from `entry.date`.

Desktop/tablet:

```
25/09
Hồi kỹ thuật nhưng chưa qua cổng xác nhận
```

Mobile uses the same order.

Rules:
- Date is a separate `<time datetime="YYYY-MM-DD">` element.
- Visible format is `DD/MM`.
- Date must not consume a dedicated horizontal column beside the headline.
- Date must never be hard-coded per session.
- Headline target: 1–2 lines on common desktop viewports.
- Headline describes the **market state**, not the action regime.
- Regime/action wording such as `PHÒNG THỦ / CHỜ XÁC NHẬN` stays in status/action layers and should not be repeated in the headline unless semantically indispensable.

## 4. Semantic Data Color Contract — atomic value level

### 4.1 Core rule

**A parent row tone must never override the semantic direction of a child value.**

Examples:

```
▲ 132 tăng      -> positive / green
▼ 176 giảm      -> negative / red
+0,56%          -> positive / green
−18,0%          -> negative / red
49 tham chiếu   -> neutral / slate
3 mã giảm sàn  -> negative / red
```

### 4.2 Color tokens

| Meaning | Token | Color | Required non-color cue |
|---|---|---:|---|
| Positive / increase | `positive` | `#08785A` | ▲, +, or text `tăng` |
| Negative / decrease | `negative` | `#B42318` | ▼, −, or text `giảm` |
| Warning / incomplete confirmation | `warning` | `#8A5A00` | ! or explicit warning label |
| Neutral / reference | `neutral` | `#55636E` | explicit neutral/reference text |

### 4.3 Data direction vs assessment state

These are different concepts and must not share one tone blindly.

Example — liquidity:

```
~11.587 tỷ                  -> neutral/ink
−18,0% vs TB20              -> negative/red
DƯỚI TB20                   -> warning/amber assessment badge
```

Example — technical position:

```
Trên MA50                   -> positive/green
Dưới MA20 / MA200           -> negative/red
KỸ THUẬT YẾU                -> negative assessment badge
```

## 5. Structured semantic parts

v2.2 requires reusable part arrays wherever a phrase contains mixed directions.

Preferred schema:

```js
signalParts: [
  { text: "▼ 176 giảm", tone: "negative" },
  { text: " / ", tone: "neutral" },
  { text: "▲ 132 tăng", tone: "positive" }
]

detailParts: [
  { text: "49 tham chiếu", tone: "neutral" },
  { text: " • ", tone: "neutral" },
  { text: "3 mã giảm sàn", tone: "negative" }
]
```

The same semantic-parts renderer should support:
- `valueParts`
- `changeParts`
- `signalParts`
- `detailParts`

No duplicated color-rendering logic.

## 6. Evidence Matrix v2.2

Replace the current three-column structure:

`LABEL | SIGNAL | INTERPRETATION`

with a two-column matrix:

`LABEL | PRIMARY FACT + SECONDARY INTERPRETATION`

Example:

```
ĐỘ RỘNG
▲ 132 tăng / ▼ 176 giảm
49 tham chiếu · 3 mã giảm sàn · độ rộng chưa xác nhận nhịp hồi.
```

Implementation target:

```
LABEL | PRIMARY FACT
      | SECONDARY INTERPRETATION
```

Rules:
- Remove the production label `FACT → INTERPRETATION`.
- Primary fact is visually stronger than secondary interpretation.
- Directional values receive atomic semantic colors.
- Interpretation remains neutral copy unless it is itself a directional fact.
- Evidence rows must not become paragraph cards.

## 7. Executive Thesis

Target:
- 1 conclusion sentence + 1 supporting sentence.
- 16px body or equivalent.
- line-height >= 1.5.
- max measure about 64–66ch.
- No raw-data dump.
- No duplication of the Action Bar.

Example structure:

```
Phiên 25/09 mới là nhịp hồi kỹ thuật, chưa đủ điều kiện xác nhận đảo chiều.
Độ rộng vẫn âm, thanh khoản thấp hơn TB20 khoảng 18% và VN-Index chưa lấy lại MA200.
```

## 8. Market Snapshot consolidation

Keep four core rows but reduce visual mass.

Target:
- metric: ~21–22px on desktop;
- reduce vertical padding about 15–20%;
- smaller state badges;
- no saturated full-row backgrounds;
- preserve left semantic accent;
- atomic mixed-color values remain supported.

Required snapshot states:
- `price_up`
- `price_down`
- `breadth_positive`
- `breadth_negative`
- `liquidity_above_average`
- `liquidity_below_average`
- `technical_positive`
- `technical_negative`
- `neutral`

## 9. Action layer

Action Bar stays directly under evidence.

Rules:
- Do not repeat the same regime in headline, top badge and action copy.
- The Action Bar owns concrete actions.
- The top regime badge owns market operating state.
- The headline owns market description.

## 10. Archive rail

Keep v2.1 compact navigator behavior.

No additional decoration is added in v2.2.

## 11. Accessibility contract

Color is never the only carrier of direction.

Every positive/negative differential must include at least one non-color cue:
- `+` / `−`
- `▲` / `▼`
- explicit text such as `tăng`, `giảm`

Contrast of normal semantic text must continue to meet WCAG AA on its production background.

## 12. Responsive acceptance

### Desktop — 1366×768 and 1440×900
- headline <= 2.2 lines;
- date kicker does not reduce headline width;
- no document-level horizontal overflow;
- evidence remains compact;
- Action Bar begins before or near the bottom of Snapshot, avoiding dead space.

### Tablet — iPad-class
- narrative before snapshot when stacked;
- evidence readable without micro-fonts;
- no clipped badges or values.

### Mobile — 390×844 and 320×800
- date -> headline -> thesis -> evidence -> action -> snapshot;
- mixed semantic colors remain correct;
- no document-level overflow;
- no information available only by hover or color.

## 13. Mandatory regression tests

The v2.2 implementation is not mergeable until tests prove:

1. `132 tăng` computed color = positive token.
2. `176 giảm` computed color = negative token.
3. `−18,0%` computed color = negative token.
4. liquidity state badge remains warning/amber.
5. `49 tham chiếu` remains neutral.
6. no parent-row selector can force one color onto mixed semantic parts.
7. date derives from `entry.date`.
8. headline contains no session date and targets <=2.2 lines on desktop.
9. production has no `FACT → INTERPRETATION` helper label.
10. branch-local Playwright QA passes Chromium + WebKit device matrix.

## 14. Implementation sequence — locked

1. Add one reusable `semanticParts` renderer.
2. Upgrade daily-entry schema with `signalParts` / `detailParts`.
3. Remove row-level signal color inheritance.
4. Convert date from horizontal prefix column to vertical kicker.
5. Add headline-copy guard against action/regime duplication.
6. Convert Evidence Strip from 3 columns to 2 columns.
7. Compact Market Snapshot by 15–20%.
8. Update runtime standard / prompt / docs to v2.2 only after UI implementation is complete.
9. Add regression tests.
10. Run cross-browser visual QA.
11. Merge only if all gates pass.

## 15. Research basis

- Carbon Design System — Status indicators / differential indicators: positive values use green and negative values red; differential indicators require a +/−, caret or arrow cue.
  https://carbondesignsystem.com/patterns/status-indicator-pattern/
- W3C WCAG 2.2 — Use of Color: color cannot be the only visual means of conveying information.
  https://www.w3.org/WAI/WCAG22/Understanding/use-of-color
- USWDS Typography: most text should be about 45–90 characters per line; around 66 characters is a useful long-text target.
  https://designsystem.digital.gov/components/typography/
- GOV.UK Layout: constrain content width so desktop text does not become excessively long, commonly around 75 characters per line.
  https://design-system.service.gov.uk/styles/layout/

## 16. Freeze rule

This document is the approved v2.2 implementation specification.

Until v2.2 is implemented and QA passes:
- production remains v2.1;
- do not partially apply isolated color/layout patches to production;
- implementation changes must be evaluated against this complete contract.
