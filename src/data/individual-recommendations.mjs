// Public, clearly labeled individual research scenarios, not executed trades.
// Zones: supplied by website owner 2026-11-17; targets are arithmetic R/R scenarios, NOT verified chart resistance.
export const INDIVIDUAL_RECOMMENDATIONS = Object.freeze({
  schemaVersion: 1,
  publishedOn: "2026-11-17",
  approvedBy: "Xuân Lê TVS",
  horizon: "1–3 tuần",
  riskReviewPct: 5,
  riskCriticalPct: 7,
  rewardMultiples: [2, 3],
  entries: Object.freeze([
    Object.freeze({ ticker: "POW", exchange: "HOSE", zoneLow: 12000, zoneHigh: 12500, sector: "Điện", note: "Theo dõi Nhơn Trạch 3&4 và mức huy động điện; báo cáo định giá hiện hành chưa xác nhận điểm mua." }),
    Object.freeze({ ticker: "NT2", exchange: "HOSE", zoneLow: 23000, zoneHigh: 23500, sector: "Điện", note: "Kết quả kinh doanh phục hồi; theo dõi huy động điện, giá khí và thanh khoản. Chưa có hồ sơ NT2 trong Research Terminal." }),
    Object.freeze({ ticker: "VIX", exchange: "HOSE", zoneLow: 12000, zoneHigh: 12500, sector: "Chứng khoán", note: "Chịu rủi ro biến động tự doanh, định giá tài sản và thanh khoản thị trường. Không tự thay thế điều kiện của báo cáo hiện hành." }),
    Object.freeze({ ticker: "SHS", exchange: "HNX", zoneLow: 12000, zoneHigh: 12500, sector: "Chứng khoán", note: "Theo dõi áp lực chi phí vốn, biên lãi vay margin và kết quả tự doanh. Báo cáo định giá hiện hành vẫn giữ trạng thái chờ." })
  ])
});
