// Danh mục tham khảo công khai: vùng kỹ thuật do chủ website xác lập 12/10/2026.
// Không ghi đè action/valuation/Trade Ledger và không biểu thị lệnh đã khớp.
export const REFERENCE_PORTFOLIO = Object.freeze({
  schemaVersion: 1,
  approvedOn: "2026-10-12",
  approvedBy: "Xuân Lê TVS",
  horizon: "1–3 tuần",
  stopPercent: 5,
  criticalPercent: 7,
  stopPolicyEffectiveFrom: "2026-10-28",
  stopPolicyVersion: "eod-midpoint-stop-v1",
  adjustmentBasis: "Vùng kỹ thuật do người quản lý cung cấp theo đồ thị AmiBroker; cần rà soát khi phát sinh quyền cổ đông.",
  entries: Object.freeze([
    Object.freeze({ ticker: "BSR", zoneLow: 29500, zoneHigh: 30000 }),
    Object.freeze({ ticker: "VPB", zoneLow: 23000, zoneHigh: 24000 }),
    Object.freeze({ ticker: "HDB", zoneLow: 22000, zoneHigh: 22800 }),
    Object.freeze({ ticker: "DGW", zoneLow: 46000, zoneHigh: 47500 }),
    Object.freeze({ ticker: "GMD", zoneLow: 53000, zoneHigh: 54500 }),
    Object.freeze({ ticker: "GVR", zoneLow: 32000, zoneHigh: 33000 })
  ])
});
