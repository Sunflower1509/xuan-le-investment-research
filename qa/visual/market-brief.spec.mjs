import { test, expect } from "@playwright/test";

async function openMarketBrief(page) {
  await page.goto("./#daily-market", { waitUntil: "domcontentloaded" });
  await page.locator("[data-role='daily-insight'] .daily-decision-brief").waitFor({ state: "visible" });
  await page.waitForFunction(() => document.fonts?.status === "loaded" || !document.fonts);
  await page.waitForTimeout(180);
}

test("Daily Market Research Brief v2 hierarchy, type roles and semantic snapshot states", async ({ page }, testInfo) => {
  await openMarketBrief(page);

  const viewport = page.viewportSize();
  const insight = page.locator("[data-role='daily-insight']");
  const brief = insight.locator(".daily-decision-brief");
  const headline = brief.locator(".daily-brief-narrative > .daily-title-line > h3");
  const titleDate = brief.locator(".daily-title-date");
  const titleSeparator = brief.locator(".daily-title-separator");
  const thesis = brief.locator(".daily-thesis");
  const snapshot = brief.locator(".daily-market-snapshot");
  const evidence = brief.locator(".daily-key-readings article");
  const snapshotRows = snapshot.locator(".daily-snapshot-row");
  const decision = brief.locator(".daily-decision-bar");

  await expect(headline).toHaveText("Thủng vùng nền quan trọng — ưu tiên bảo toàn vốn và sức mua");
  await expect(titleDate).toHaveText("24/09");
  await expect(titleDate).toHaveAttribute("datetime", "2026-09-24");
  await expect(titleSeparator).toHaveText("·");
  await expect(brief.locator(".daily-session-date")).toHaveCount(0);
  await expect(brief.locator(".daily-session-lock")).toHaveText("EOD");

  await expect(brief.locator(".daily-executive-thesis h4")).toHaveText("Luận điểm chính");
  await expect(thesis).toContainText("VN-Index mất MA20 và MA200");
  await expect(brief.locator(".daily-evidence-strip h4")).toHaveText("Bằng chứng thị trường");
  await expect(evidence).toHaveCount(3);
  await expect(evidence.nth(0).locator(".daily-reading-signal")).toContainText("Dưới MA20 / MA200");
  await expect(evidence.nth(1).locator(".daily-reading-signal")).toContainText("219 giảm");
  await expect(evidence.nth(2).locator(".daily-reading-signal")).toContainText("13.411");

  await expect(snapshotRows).toHaveCount(4);
  await expect(snapshotRows.nth(0).locator(".daily-direction")).toContainText("Giảm");
  await expect(snapshotRows.nth(1).locator(".daily-direction")).toContainText("Độ rộng tiêu cực");
  await expect(snapshotRows.nth(2).locator(".daily-direction")).toContainText("Dưới TB20");
  await expect(snapshotRows.nth(3).locator(".daily-direction")).toContainText("Kỹ thuật yếu");

  await expect(page.locator(".daily-decision-state strong")).toHaveText("PHÒNG THỦ / GIẢM RỦI RO");
  await expect(page.locator(".daily-decision-actions > span")).toHaveCount(3);

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(bodyOverflow, "Daily Market Brief must not cause document-level horizontal overflow.").toBeLessThanOrEqual(1);

  const topMeta = await brief.locator(".daily-brief-topline").innerText();
  expect(topMeta).not.toContain("VNDIRECT + KBS");
  await expect(brief.locator(".daily-integrity-chip")).toContainText("EOD đã khóa");

  const breadthParts = snapshotRows.nth(1).locator(".daily-snapshot-value .daily-market-text");
  await expect(breadthParts).toHaveCount(3);
  await expect(breadthParts.nth(0)).toHaveText("76 tăng");
  await expect(breadthParts.nth(2)).toHaveText("219 giảm");

  const computed = await page.evaluate(() => {
    const headline = document.querySelector(".daily-brief-narrative > .daily-title-line > h3");
    const titleDate = document.querySelector(".daily-title-date");
    const titleLine = document.querySelector(".daily-title-line");
    const thesis = document.querySelector(".daily-thesis");
    const metric = document.querySelector(".daily-snapshot-value");
    const narrative = document.querySelector(".daily-brief-narrative");
    const decision = document.querySelector(".daily-decision-bar");
    const snapshot = document.querySelector(".daily-market-snapshot");
    const h = getComputedStyle(headline);
    const t = getComputedStyle(thesis);
    const m = getComputedStyle(metric);
    return {
      headlinePx: Number.parseFloat(h.fontSize),
      titleDatePx: Number.parseFloat(getComputedStyle(titleDate).fontSize),
      titleDateTop: titleDate.getBoundingClientRect().top,
      headlineTop: headline.getBoundingClientRect().top,
      titleLineDisplay: getComputedStyle(titleLine).display,
      headlineLineHeight: Number.parseFloat(h.lineHeight),
      headlineHeight: headline.getBoundingClientRect().height,
      thesisPx: Number.parseFloat(t.fontSize),
      thesisLineHeight: Number.parseFloat(t.lineHeight),
      thesisMaxWidth: t.maxWidth,
      metricPx: Number.parseFloat(m.fontSize),
      metricFamily: m.fontFamily,
      metricNumeric: m.fontVariantNumeric,
      narrativeWidth: narrative.getBoundingClientRect().width,
      decisionTop: decision.getBoundingClientRect().top,
      snapshotBottom: snapshot.getBoundingClientRect().bottom
    };
  });

  expect(computed.thesisPx).toBeGreaterThanOrEqual(viewport.width <= 760 ? 14.5 : 15.5);
  expect(computed.thesisLineHeight / computed.thesisPx).toBeGreaterThanOrEqual(1.5);
  expect(computed.metricPx).toBeGreaterThanOrEqual(23);
  expect(computed.metricFamily.toLowerCase()).toContain("manrope");
  expect(computed.metricNumeric).toContain("tabular-nums");

  if (viewport.width >= 1081) {
    expect(computed.titleDatePx).toBeGreaterThanOrEqual(13.5);
    expect(Math.abs(computed.titleDateTop - computed.headlineTop)).toBeLessThanOrEqual(18);
    expect(computed.headlinePx).toBeGreaterThanOrEqual(31.5);
    expect(computed.headlinePx).toBeLessThanOrEqual(36.5);
    const headlineLines = computed.headlineHeight / computed.headlineLineHeight;
    expect(headlineLines, "Desktop headline should stay around two lines.").toBeLessThanOrEqual(2.2);
    const gridColumns = await brief.locator(".daily-brief-grid").evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
    expect(gridColumns).toBeGreaterThanOrEqual(2);
  }

  // Decision is part of the narrative flow instead of waiting below the taller snapshot.
  expect(computed.decisionTop).toBeLessThan(computed.snapshotBottom);

  // Archive is a navigator: only the latest item receives a badge.
  await expect(page.locator("[data-role='daily-archive-list'] .daily-archive-item i")).toHaveCount(1);

  const details = insight.locator(".daily-evidence");
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details.locator(".daily-full-narrative small")).toHaveText("LUẬN GIẢI ĐẦY ĐỦ");
  await expect(details.locator(".daily-full-narrative h5")).toHaveText("Diễn biến và hàm ý của phiên");
  await expect(details.locator(".daily-data-integrity")).toContainText("Khối ngoại & tự doanh");
  await expect(details.locator(".daily-sources")).toBeVisible();

  if (viewport.width <= 760) {
    expect(computed.titleDateTop).toBeLessThan(computed.headlineTop);
  }

  const screenshot = testInfo.outputPath("daily-market-research-brief-v2-1.png");
  await insight.screenshot({ path: screenshot, animations: "disabled" });
  await testInfo.attach("daily-market-research-brief-v2-1", { path: screenshot, contentType: "image/png" });
});
