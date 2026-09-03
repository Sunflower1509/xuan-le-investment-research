(() => {
  "use strict";

  const data = window.RESEARCH_DATA;
  if (!data || !Array.isArray(data.reports) || !Array.isArray(data.coverage)) return;

  const COVER_CLASS = "stock-cover-thumb";
  const STYLE_ID = "xltvs-stock-cover-ui-v1";
  const normalizeTicker = (value) => String(value || "").trim().toUpperCase();

  const covers = new Map();
  [...data.reports]
    .filter((report) => report?.reportType !== "trading" && report?.visual?.kind === "report-cover" && report?.visual?.src)
    .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")))
    .forEach((report) => {
      const ticker = normalizeTicker(report.ticker);
      if (ticker) covers.set(ticker, {
        src: String(report.visual.src),
        alt: String(report.visual.alt || `Bìa báo cáo định giá ${ticker}`)
      });
    });

  const coverageTickers = data.coverage.map((item) => normalizeTicker(item?.ticker)).filter(Boolean);
  const missingCovers = coverageTickers.filter((ticker) => !covers.has(ticker));
  window.__XLTVS_STOCK_COVER_STATUS__ = Object.freeze({
    coverage: coverageTickers.length,
    covers: covers.size,
    missing: Object.freeze([...missingCovers])
  });

  if (missingCovers.length) {
    console.error(`Stock cover mapping thiếu ${missingCovers.length} mã: ${missingCovers.join(", ")}`);
  }

  const ensureStyles = () => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .stock-cover-identity{display:grid!important;grid-template-columns:42px minmax(0,1fr);align-items:start;gap:10px;min-width:0}
      .stock-cover-identity.stock-cover-missing{grid-template-columns:minmax(0,1fr)}
      .${COVER_CLASS}{display:block;object-fit:cover;object-position:top center;background:#f8f5ee;border:1px solid #dcd8ce;box-shadow:0 4px 12px rgba(8,28,49,.08)}
      .stock-cover-coverage{width:42px;height:54px;border-radius:8px}
      .stock-cover-meta{min-width:0}
      .stock-watch-identity{display:flex;align-items:center;gap:10px;min-width:0}
      .stock-watch-identity.stock-cover-missing{display:block}
      .stock-cover-watchlist{width:38px;height:48px;border-radius:7px;flex:0 0 auto}
      .stock-watch-meta{min-width:0}
      .command-item-code.stock-cover-command-host{position:relative;isolation:isolate;overflow:hidden;background:#081c31}
      .stock-cover-command{position:absolute;z-index:-2;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;border:0;border-radius:0;box-shadow:none}
      .command-item-code.stock-cover-command-host:after{content:"";position:absolute;z-index:-1;inset:0;background:linear-gradient(180deg,rgba(8,28,49,.26),rgba(8,28,49,.82))}
      .stock-cover-code{position:relative;z-index:1;color:#fff!important;margin:0!important;font-size:.66rem!important;font-weight:850!important;letter-spacing:.02em;display:block!important}
      @media (width<=720px){.stock-cover-identity{grid-template-columns:38px minmax(0,1fr);gap:8px}.stock-cover-coverage{width:38px;height:49px}.stock-cover-watchlist{width:34px;height:44px}}
    `;
    document.head.append(style);
  };

  const makeImage = (ticker, cover, placement) => {
    const img = document.createElement("img");
    img.className = `${COVER_CLASS} stock-cover-${placement}`;
    img.src = cover.src;
    img.alt = placement === "command" ? "" : cover.alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.dataset.ticker = ticker;
    return img;
  };

  const enhanceCoverage = (root = document) => {
    root.querySelectorAll(".coverage-card:not([data-cover-enhanced='1'])").forEach((card) => {
      const head = card.querySelector(".coverage-card-head");
      const identity = head?.firstElementChild;
      const ticker = normalizeTicker(identity?.querySelector("h3")?.textContent);
      const cover = covers.get(ticker);
      if (!head || !identity || !ticker || !cover) return;

      const meta = document.createElement("div");
      meta.className = "stock-cover-meta";
      while (identity.firstChild) meta.append(identity.firstChild);

      const img = makeImage(ticker, cover, "coverage");
      img.addEventListener("error", () => {
        img.remove();
        identity.classList.add("stock-cover-missing");
      }, { once: true });

      identity.classList.add("stock-cover-identity");
      identity.append(img, meta);
      card.dataset.coverEnhanced = "1";
    });
  };

  const enhanceWatchlist = (root = document) => {
    root.querySelectorAll(".watchlist-item:not([data-cover-enhanced='1'])").forEach((item) => {
      const identity = item.firstElementChild;
      const ticker = normalizeTicker(identity?.querySelector("strong")?.textContent);
      const cover = covers.get(ticker);
      if (!identity || !ticker || !cover) return;

      const meta = document.createElement("div");
      meta.className = "stock-watch-meta";
      while (identity.firstChild) meta.append(identity.firstChild);

      const img = makeImage(ticker, cover, "watchlist");
      img.addEventListener("error", () => {
        img.remove();
        identity.classList.add("stock-cover-missing");
      }, { once: true });

      identity.classList.add("stock-watch-identity");
      identity.append(img, meta);
      item.dataset.coverEnhanced = "1";
    });
  };

  const enhanceCommand = (root = document) => {
    root.querySelectorAll(".command-item:not([data-cover-enhanced='1'])").forEach((item) => {
      const ticker = normalizeTicker(item.dataset.ticker);
      const host = item.querySelector(".command-item-code");
      const cover = covers.get(ticker);
      if (!ticker || !host || !cover) return;

      host.textContent = "";
      host.classList.add("stock-cover-command-host");
      const img = makeImage(ticker, cover, "command");
      const label = document.createElement("span");
      label.className = "stock-cover-code";
      label.textContent = ticker;
      img.addEventListener("error", () => img.remove(), { once: true });
      host.append(img, label);
      item.dataset.coverEnhanced = "1";
    });
  };

  let scheduled = false;
  const enhanceAll = () => {
    scheduled = false;
    ensureStyles();
    const research = document.querySelector("[data-role='research-results']") || document;
    const watchlist = document.querySelector("[data-role='watchlist-content']") || document;
    const command = document.querySelector("[data-role='command-results']") || document;
    enhanceCoverage(research);
    enhanceWatchlist(watchlist);
    enhanceCommand(command);
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(enhanceAll);
  };

  const observe = (selector) => {
    const root = document.querySelector(selector);
    if (!root) return;
    new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  };

  enhanceAll();
  observe("[data-role='research-results']");
  observe("[data-role='watchlist-content']");
  observe("[data-role='command-results']");
})();
