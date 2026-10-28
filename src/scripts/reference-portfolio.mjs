import { REFERENCE_PORTFOLIO } from "../data/reference-portfolio.mjs";
import referenceExits from "../data/reference-portfolio-exits.json";
import { buildReferencePortfolio } from "./reference-portfolio-core.mjs";

// Read-only public dashboard: it never modifies Research action zones or Trade Ledger.
(() => {
  "use strict";
  const root = document.querySelector("[data-role='reference-portfolio-root']");
  const source = window.RESEARCH_DATA;
  if (!root) return;

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  const money = (value) => Number.isFinite(value)
    ? new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 }).format(value) : "—";
  const percent = (value) => Number.isFinite(value)
    ? `${value > 0 ? "+" : value < 0 ? "−" : ""}${new Intl.NumberFormat("vi-VN", {
      minimumFractionDigits: 2, maximumFractionDigits: 2
    }).format(Math.abs(value))}%` : "—";
  const dateVi = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value || "")
    ? value.split("-").reverse().join("/") : "—";
  const tone = (value) => value > 0 ? "rp-positive" : value < 0 ? "rp-negative" : "rp-neutral";
  const relationLabel = (relation) => ({
    inside: "Trong vùng", above: "Trên vùng", below: "Dưới vùng", unavailable: "Chưa đối chiếu"
  })[relation] || "Chưa đối chiếu";
  const statusInfo = (row) => {
    if (row.exclusion) return { label: row.exclusion.severity === "critical-7" ? "ĐÃ LOẠI • GIẢM ≥7%" : "ĐÃ LOẠI • GIẢM ≥5%", css: "rp-danger" };
    switch (row.researchState) {
      case "report-veto": return { label: "CẢNH BÁO ĐỊNH GIÁ", css: "rp-danger" };
      case "stop-warning": return { label: "CẢNH BÁO −5%", css: "rp-danger" };
      case "below-zone": return { label: "CẦN RÀ SOÁT", css: "rp-warning" };
      case "inside-zone": return { label: "TRONG VÙNG • CHỜ XÁC NHẬN", css: "rp-success" };
      case "above-zone": return { label: "TRÊN VÙNG • THEO DÕI", css: "rp-warning" };
      default: return { label: "CHỜ DỮ LIỆU", css: "rp-muted" };
    }
  };
  const reportLink = (item) => {
    const file = item?.file;
    return typeof file === "string" && /^reports\/[A-Za-z0-9_.-]+\.pdf$/.test(file)
      ? `<a class="rp-report-link" href="${escapeHtml(file)}" target="_blank" rel="noopener noreferrer">Xem báo cáo định giá gốc ↗</a>`
      : "<span>Chưa có liên kết báo cáo</span>";
  };
  const notes = (row) => {
    const statements = [];
    if (row.exclusion) statements.push(`Tự động loại khỏi danh mục theo dõi sau EOD ${dateVi(row.exclusion.date)}: giá đóng cửa ${money(row.exclusion.close)} đồng/cp, chênh lệch ${percent(row.exclusion.differencePct)} so với giá trung bình vùng mua. Không ghi nhận lệnh bán và không tự đưa mã trở lại khi giá hồi phục.`);
    if (row.reportVeto) statements.push("Báo cáo định giá hiện hành đang chặn mua mới. Vùng AmiBroker là vùng theo dõi riêng, không gỡ bỏ cảnh báo hoặc kích hoạt giao dịch.");
    if (row.ticker === "HDB" || row.ticker === "GMD") statements.push("Đã có sự kiện quyền cổ đông gần đây. Khi cập nhật vùng trong AmiBroker cần kiểm tra cơ sở giá điều chỉnh để tránh lệch mốc.");
    if (row.stopBreached) statements.push("Giá EOD đã chạm hoặc dưới ngưỡng cảnh báo −5% lý thuyết. Đây không phải xác nhận đã bán hay khớp lệnh.");
    if (!row.close) statements.push("Chưa đủ giá EOD cùng phiên đã xác minh, không tính chênh lệch hay trạng thái vùng.");
    if (!statements.length) statements.push("Vị trí giá so với vùng kỹ thuật chỉ là thông tin nghiên cứu; không phải tín hiệu CÓ MUA hoặc kết quả giao dịch.");
    return statements.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
  };
  const detailHtml = (row, report) => `<div class="rp-detail-body">
      <div class="rp-detail-grid">
        <div><span>Giá TB vùng mua</span><strong>${money(row.midpoint)} đ/cp</strong></div>
        <div><span>Ngưỡng tham chiếu −5%</span><strong>${money(row.stopReference)} đ/cp</strong></div>
        <div><span>Ngày xác lập vùng</span><strong>${dateVi(REFERENCE_PORTFOLIO.approvedOn)}</strong></div>
        <div><span>${row.exclusion ? "Giá tại phiên bị loại" : "Giá đóng cửa / phiên"}</span><strong>${money(row.close)} đ • ${dateVi(row.priceDate)}</strong></div>
      </div>
      <div class="rp-detail-notes">${notes(row)}</div>
      <div class="rp-detail-links">
        ${reportLink(report)}
        ${row.priceSource ? `<a href="${escapeHtml(row.priceSource)}" target="_blank" rel="noopener noreferrer">Nguồn EOD VNDIRECT ↗</a>` : ""}
      </div>
    </div>`;

  let rows;
  try {
    rows = buildReferencePortfolio(REFERENCE_PORTFOLIO, source, referenceExits);
  } catch (error) {
    root.innerHTML = `<div class="rp-integrity-error" role="alert">Chưa thể xác minh dữ liệu danh mục. Hệ thống không hiển thị mức giá suy đoán.</div>`;
    return;
  }
  const byId = new Map((source.reports || []).map((r) => [r.id, r]));
  const byTicker = new Map(source.coverage.map((c) => [c.ticker, c]));
  const select = document.querySelector("[data-role='reference-portfolio-filter']");
  const desktop = document.querySelector("[data-role='reference-portfolio-desktop']");
  const mobile = document.querySelector("[data-role='reference-portfolio-mobile']");
  const summary = document.querySelector("[data-role='reference-portfolio-summary']");
  const detail = document.querySelector("[data-role='reference-portfolio-detail']");
  const asOf = document.querySelector("[data-role='reference-portfolio-asof']");
  const warning = document.querySelector("[data-role='reference-portfolio-note']");
  if (!desktop || !mobile || !summary || !asOf || !warning) return;

  asOf.textContent = `Giá EOD khóa ngày ${dateVi(source.meta.updated)} • Vùng AmiBroker xác lập ${dateVi(REFERENCE_PORTFOLIO.approvedOn)} • Loại tự động khi giảm từ 5%`;
  warning.textContent = source.meta.updated < REFERENCE_PORTFOLIO.approvedOn
    ? "Giá EOD đang hiển thị thuộc phiên trước ngày công bố vùng mua. Phần trăm là chênh lệch tham chiếu, không phải lợi nhuận kể từ khuyến nghị."
    : "Chênh lệch so với giá trung bình vùng mua chỉ là phép so sánh giá, không phải hiệu suất giao dịch hoặc tỷ lệ lãi/lỗ đã thực hiện.";

  const activeRows = rows.filter((row) => !row.exclusion);
  const excludedRows = rows.filter((row) => row.exclusion).map((row) => ({
    ...row,
    close: row.exclusion.close,
    changePct: row.exclusion.changePct,
    differencePct: row.exclusion.differencePct,
    priceDate: row.exclusion.date,
    priceSource: row.exclusion.priceSource,
    zoneRelation: "below",
    stopBreached: true
  }));
  const rowPasses = (row, filter) => filter === "all"
    || filter === row.zoneRelation
    || filter === "attention" && (row.reportVeto || row.stopBreached || !row.close);
  const stockRow = (row) => {
    const status = statusInfo(row);
    const report = byId.get(byTicker.get(row.ticker)?.reportId);
    return `<tr${row.exclusion ? ' class="rp-archived-row"' : ""}>
      <th scope="row" class="rp-code">${escapeHtml(row.ticker)}</th>
      <td class="rp-number">${money(row.close)}</td>
      <td class="rp-number ${tone(row.changePct)}">${percent(row.changePct)}</td>
      <td class="rp-zone">${money(row.zoneLow)} – ${money(row.zoneHigh)}</td>
      <td class="rp-number rp-midpoint">${money(row.midpoint)}</td>
      <td class="rp-number ${tone(row.differencePct)}">${percent(row.differencePct)}</td>
      <td><span class="rp-status ${status.css}">${escapeHtml(status.label)}</span><span class="rp-relation">${relationLabel(row.zoneRelation)}</span></td>
      <td class="rp-date">${dateVi(row.priceDate)}</td>
      <td><button type="button" class="rp-open-details" data-rp-ticker="${escapeHtml(row.ticker)}" aria-controls="reference-portfolio-detail">Chi tiết ↗</button></td>
    </tr>`;
  };
  const mobileCard = (row) => {
    const status = statusInfo(row);
    const report = byId.get(byTicker.get(row.ticker)?.reportId);
    return `<article class="rp-mobile-card${row.exclusion ? " rp-archived-card" : ""}">
      <div class="rp-mobile-head"><strong>${escapeHtml(row.ticker)}</strong><span class="rp-status ${status.css}">${escapeHtml(status.label)}</span></div>
      <div class="rp-mobile-grid">
        <div><span>Giá EOD</span><strong>${money(row.close)}</strong><small class="${tone(row.changePct)}">${percent(row.changePct)} phiên</small></div>
        <div><span>Vùng mua kỹ thuật</span><strong>${money(row.zoneLow)} – ${money(row.zoneHigh)}</strong><small>Đồng/cp</small></div>
        <div><span>Giá TB khuyến nghị</span><strong>${money(row.midpoint)}</strong><small>Đồng/cp</small></div>
        <div><span>So với giá TB</span><strong class="${tone(row.differencePct)}">${percent(row.differencePct)}</strong><small>${relationLabel(row.zoneRelation)}</small></div>
      </div>
      <div class="rp-mobile-bottom"><span>${row.exclusion ? "Ngày loại EOD" : "Giá EOD"}: ${dateVi(row.priceDate)}</span><details class="rp-details"><summary>Xem hồ sơ</summary>${detailHtml(row, report)}</details></div>
    </article>`;
  };

  const render = () => {
    const filter = select?.value || "all";
    const visible = filter === "excluded" ? excludedRows : activeRows.filter((row) => rowPasses(row, filter));
    const attention = activeRows.filter((row) => row.reportVeto || row.stopBreached || !row.close).length;
    summary.innerHTML = `<div class="rp-summary-card"><span>Đang theo dõi</span><strong>${activeRows.length.toString().padStart(2, "0")}</strong></div>
      <div class="rp-summary-card"><span>Đã loại (có lịch sử)</span><strong>${excludedRows.length.toString().padStart(2, "0")}</strong></div>
      <div class="rp-summary-card rp-summary-attention"><span>Cảnh báo còn theo dõi</span><strong>${attention.toString().padStart(2, "0")}</strong></div>`;
    warning.textContent = filter === "excluded"
      ? "LỊCH SỬ ĐÃ LOẠI: giá và phần trăm trong bảng được giữ cố định tại phiên phát sinh cảnh báo. Đây không phải giao dịch bán thực tế; mã không tự quay lại khi giá phục hồi."
      : source.meta.updated < REFERENCE_PORTFOLIO.approvedOn
        ? "Giá EOD đang hiển thị thuộc phiên trước ngày công bố vùng mua. Phần trăm là chênh lệch tham chiếu, không phải lợi nhuận kể từ khuyến nghị."
        : "Các mã giảm từ 5% so với giá TB được tự động đưa ra khỏi danh mục hiện hành sau EOD xác minh; xem mục Đã loại để truy vết. Chênh lệch giá không phải hiệu suất giao dịch.";
    desktop.innerHTML = visible.length
      ? `<table class="rp-table"><caption class="sr-only">${filter === "excluded" ? "Lịch sử mã tự động loại theo nguyên tắc giảm từ 5%" : "Danh mục kỹ thuật đang theo dõi, giá EOD và vùng mua AmiBroker"}</caption>
      <thead><tr><th scope="col">MÃ</th><th scope="col" class="rp-number">${filter === "excluded" ? "GIÁ EOD KHI LOẠI" : "GIÁ EOD"}</th><th scope="col" class="rp-number">+/− PHIÊN</th>
      <th scope="col">VÙNG MUA KỸ THUẬT</th><th scope="col" class="rp-number">GIÁ TB</th>
      <th scope="col" class="rp-number">SO VỚI GIÁ TB</th><th scope="col">TRẠNG THÁI</th>
      <th scope="col">${filter === "excluded" ? "NGÀY LOẠI" : "NGÀY EOD"}</th><th scope="col">HỒ SƠ</th></tr></thead>
      <tbody>${visible.map(stockRow).join("")}</tbody></table>`
      : '<p class="rp-no-results">Không có mã phù hợp bộ lọc hoặc không còn mã đang theo dõi.</p>';
    mobile.innerHTML = visible.length ? visible.map(mobileCard).join("")
      : '<p class="rp-no-results">Không có mã phù hợp bộ lọc hoặc không còn mã đang theo dõi.</p>';
  };
  desktop.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-rp-ticker]");
    if (!button) return;
    const row = rows.find((item) => item.ticker === button.dataset.rpTicker);
    if (!row || !detail) return;
    const report = byId.get(byTicker.get(row.ticker)?.reportId);
    detail.innerHTML = `<div class="rp-detail-panel-title"><strong>HỒ SƠ ${escapeHtml(row.ticker)} • VÙNG KỸ THUẬT AMIBROKER</strong>
      <button type="button" class="rp-close-details">Đóng ×</button></div>${detailHtml(row, report)}`;
    detail.querySelector(".rp-close-details")?.addEventListener("click", () => {
      detail.innerHTML = "";
      button.focus();
    }, { once: true });
  });
  select?.addEventListener("change", () => {
    if (detail) detail.innerHTML = "";
    render();
  });
  render();
})();
