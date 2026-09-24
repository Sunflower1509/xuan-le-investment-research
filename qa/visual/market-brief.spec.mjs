import { test, expect } from "@playwright/test";

async function openMarketBrief(page) {
  await page.goto("./#daily-market", { waitUntil: "domcontentloaded" });
  await page.locator("[data-role='daily-insight'] .daily-decision-brief").waitFor({ state: "visible" });
  await page.waitForFunction(() => document.fonts?.status === "loaded" || !document.fonts);
  await page.waitForTimeout(180);
}

test("Market Decision Brief visual hierarchy and semantic colors", async ({ page }, testInfo) => {
  await openMarketBrief(page);

  const viewport = page.viewportSize();
  const brief = page.locator("[data-role='daily-insight'] .daily-decision-brief");
  const headline = brief.locator("h3");
  const thesis = brief.locator(".daily-thesis");
  const snapshot = brief.locator(".daily-market-snapshot");
  const evidence = brief.locator(".daily-key-readings article");
  const snapshotRows = snapshot.locator(".daily-snapshot-row");

  await expect(headline).toContainText("Thủng vùng nền quan trọng");
  await expect(thesis).toContainText("VN-Index mất MA20 và MA200");
  await expect(evidence).toHaveCount(3);
  await expect(snapshotRows).toHaveCount(4);
  await expect(page.locator(".daily-decision-state strong")).toHaveText("PHÒNG THỦ / GIẢM RỦI RO");
  await expect(page.locator(".daily-decision-actions > span")).toHaveCount(3);

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(bodyOverflow, "Market Decision Brief must not cause document-level horizontal overflow.").toBeLessThanOrEqual(1);

  const topMeta = await brief.locator(".daily-brief-topline").innerText();
  expect(topMeta).not.toContain("VNDIRECT + KBS");
  await expect(brief.locator(".daily-integrity-chip")).toContainText("EOD đã khóa");

  const firstDirection = snapshotRows.nth(0).locator(".daily-direction");
  await expect(firstDirection).toContainText("Giảm");
  await expect(firstDirection.locator("b")).toHaveText("▼");

  const breadthParts = snapshotRows.nth(1).locator(".daily-snapshot-value .daily-market-text");
  await expect(breadthParts).toHaveCount(3);
  await expect(breadthParts.nth(0)).toHaveText("76 tăng");
  await expect(breadthParts.nth(2)).toHaveText("219 giảm");

  const colors = await page.evaluate(() => {
    const root = document.querySelector(".daily-insight");
    const up = document.querySelector(".daily-snapshot-row:nth-child(2) .daily-snapshot-value .daily-market-text.positive");
    const down = document.querySelector(".daily-snapshot-row:nth-child(2) .daily-snapshot-value .daily-market-text.negative");
    return {
      positiveToken: getComputedStyle(root).getPropertyValue("--brief-positive").trim().toLowerCase(),
      negativeToken: getComputedStyle(root).getPropertyValue("--brief-negative").trim().toLowerCase(),
      up: getComputedStyle(up).color,
      down: getComputedStyle(down).color
    };
  });
  expect(colors.positiveToken).toBe("#08785a");
  expect(colors.negativeToken).toBe("#b42318");
  expect(colors.up).not.toBe(colors.down);

  const numberStyle = await snapshot.locator(".daily-snapshot-value").first().evaluate((el) => getComputedStyle(el).fontVariantNumeric);
  expect(numberStyle).toContain("tabular-nums");

  const headlineLines = await headline.evaluate((el) => {
    const style = getComputedStyle(el);
    const lineHeight = Number.parseFloat(style.lineHeight);
    return lineHeight > 0 ? el.getBoundingClientRect().height / lineHeight : 0;
  });
  if (viewport.width >= 1081) {
    expect(headlineLines, "Desktop headline should stay around two lines.").toBeLessThanOrEqual(2.2);
    const gridColumns = await brief.locator(".daily-brief-grid").evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
    expect(gridColumns).toBeGreaterThanOrEqual(2);
  }

  const details = page.locator("[data-role='daily-insight'] .daily-evidence");
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details.locator(".daily-full-narrative")).toContainText("Luận giải đầy đủ của phiên");
  await expect(details.locator(".daily-data-integrity")).toContainText("Khối ngoại & tự doanh");
  await expect(details.locator(".daily-sources")).toBeVisible();

  const screenshot = testInfo.outputPath("market-decision-brief.png");
  await page.locator("[data-role='daily-insight']").screenshot({ path: screenshot, animations: "disabled" });
  await testInfo.attach("market-decision-brief", { path: screenshot, contentType: "image/png" });
});
