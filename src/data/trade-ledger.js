window.TRADE_LEDGER = {
  meta: {
    schemaVersion: 1,
    startedAt: "2026-08-13",
    dataMode: "EOD",
    performanceBasis: "gross-reference",
    owner: "Xuân Lê TVS"
  },
  // Append-only event log. Do not revise or remove an event to improve history.
  // activated:    { id, tradeId, type, ticker, date, price, zoneLow, zoneHigh, zoneBasisDate, stop, targets,
  //                 confirmation: { reportConditionsPassed: true, noHardVeto: true }, sourceUrl, note }
  // partial_exit: { id, tradeId, type, date, price, portionPct, reason, sourceUrl, note }
  //                 portionPct is measured against the original 100% position.
  // closed:       { id, tradeId, type, date, price, reason, sourceUrl, note }
  events: []
};
