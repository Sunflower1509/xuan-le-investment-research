/* Automated Daily Market View archive. Updated by the scheduled VNINDEX research task. */
(function () {
  const store = window.DAILY_MARKET_INSIGHTS;
  if (!store || !Array.isArray(store.entries)) return;

  /*
   * Keep automated entries newest-first inside this array.
   * The scheduled task must only add a dated entry after passing the canonical
   * rulebook in docs/prompt-nhan-dinh-vnindex-v3.md and the data-verification gate.
   */
  const entries = [];

  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index];
    if (!entry || !entry.id || !entry.date) continue;
    const existingIndex = store.entries.findIndex((item) => item && item.id === entry.id);
    if (existingIndex >= 0) store.entries[existingIndex] = entry;
    else store.entries.unshift(entry);
  }

  if (entries[0]?.date) store.updated = entries[0].date;
})();
