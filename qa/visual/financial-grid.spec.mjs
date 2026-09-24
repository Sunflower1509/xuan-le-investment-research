import { test, expect } from "@playwright/test";

const expectedPageSize = (width) => width <= 767 ? 15 : width <= 1279 ? 20 : 30;
const isMobileGrid = (width) => width <= 767;

async function openActionRadar(page) {
  await page.goto("./#action-radar", { waitUntil: "domcontentloaded" });
  await page.locator("[data-role='action-table'] .action-table").waitFor({ state: "visible" });
  await page.waitForFunction(() => document.fonts?.status === "loaded" || !document.fonts);
  await page.waitForTimeout(250);
}

async function collectMetrics(page) {
  return page.evaluate(() => {
    const wrap = document.querySelector("[data-role='action-table']");
    const table = wrap?.querySelector(".action-table");
    const firstRow = table?.querySelector(".action-data-row");
    const cue = document.querySelector("[data-role='action-scroll-cue']");
    const pagination = document.querySelector("[data-role='action-pagination']");
    return {
      viewport: { width: innerWidth, height: innerHeight },
      document: {
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth
      },
      table: {
        clientWidth: wrap?.clientWidth ?? 0,
        scrollWidth: wrap?.scrollWidth ?? 0,
        rowHeight: firstRow?.getBoundingClientRect().height ?? 0,
        visibleRows: table?.querySelectorAll(".action-data-row").length ?? 0
      },
      cueHidden: cue?.hidden ?? true,
      paginationText: pagination?.innerText ?? ""
    };
  });
}

test("financial grid smoke QA", async ({ page }, testInfo) => {
  await openActionRadar(page);

  const width = page.viewportSize().width;
  const expectedRows = expectedPageSize(width);
  const mobile = isMobileGrid(width);
  const table = page.locator("[data-role='action-table'] .action-table");
  const rows = table.locator(".action-data-row");
  const wrap = page.locator("[data-role='action-table']");
  const sticky = page.locator("[data-role='action-sticky-header']");
  const cue = page.locator("[data-role='action-scroll-cue']");

  await expect(rows).toHaveCount(expectedRows);
  await expect(page.locator("[data-role='action-pagination'] .pagination-meta")).toContainText(`${expectedRows} mã/trang`);

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(bodyOverflow, "The page itself must not horizontally overflow; only the financial table may scroll.").toBeLessThanOrEqual(1);

  const visibleHeaderCount = await table.locator("thead th").evaluateAll((headers) =>
    headers.filter((header) => getComputedStyle(header).display !== "none").length
  );
  expect(visibleHeaderCount).toBe(mobile ? 5 : 7);

  const firstRowHeight = await rows.first().evaluate((row) => row.getBoundingClientRect().height);
  expect(firstRowHeight, "Collapsed financial rows should stay compact enough for fast scanning.").toBeLessThan(mobile ? 110 : 105);

  if (width <= 1279) {
    const horizontalOverflow = await wrap.evaluate((el) => el.scrollWidth - el.clientWidth);
    expect(horizontalOverflow).toBeGreaterThan(20);

    const referenceCell = rows.first().locator(".action-col-reference");
    const xBefore = (await referenceCell.boundingBox()).x;
    await wrap.evaluate((el) => { el.scrollLeft = Math.min(260, el.scrollWidth - el.clientWidth); });
    await page.waitForTimeout(120);
    const xAfter = (await referenceCell.boundingBox()).x;
    expect(Math.abs(xAfter - xBefore), "Frozen reference column should not drift while horizontal scrolling.").toBeLessThanOrEqual(2);

    await expect(cue).toBeVisible();
    await wrap.evaluate((el) => { el.scrollLeft = el.scrollWidth; });
    await page.waitForTimeout(120);
    await expect(cue).toBeHidden();
    await wrap.evaluate((el) => { el.scrollLeft = 0; });
  }

  if (mobile) {
    await expect(page.locator("[data-role='action-pagination'] .pagination-nav-simple")).toBeVisible();
    await expect(page.locator("[data-role='action-pagination'] .pagination-nav-advanced")).toBeHidden();

    const firstToggle = rows.first().locator(".action-detail-toggle");
    await expect(firstToggle).toHaveAttribute("aria-expanded", "false");
    await firstToggle.click();
    await expect(firstToggle).toHaveAttribute("aria-expanded", "true");
    const detail = page.locator(`#${await firstToggle.getAttribute("aria-controls")}`);
    await expect(detail).toBeVisible();
    await expect(detail).toContainText("Định giá cơ sở");
    await expect(detail).toContainText("Nguồn kiểm chứng");
  } else {
    await expect(page.locator("[data-role='action-pagination'] .pagination-nav-advanced")).toBeVisible();
  }

  const tableTop = await table.evaluate((el) => el.getBoundingClientRect().top + scrollY);
  await page.evaluate((y) => scrollTo(0, y), tableTop + 180);
  await page.waitForTimeout(180);
  await expect(sticky).toBeVisible();

  const stickyTop = (await sticky.boundingBox()).y;
  const headerHeight = await page.evaluate(() =>
    Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0
  );
  expect(Math.abs(stickyTop - headerHeight), "Sticky financial header should sit directly below the site header.").toBeLessThanOrEqual(2);

  const viewportShot = testInfo.outputPath("sticky-viewport.png");
  await page.screenshot({ path: viewportShot, fullPage: false, animations: "disabled" });
  await testInfo.attach("sticky-viewport", { path: viewportShot, contentType: "image/png" });

  await page.evaluate(() => scrollTo(0, document.querySelector(".action-table-shell").getBoundingClientRect().top + scrollY - 12));
  await page.waitForTimeout(120);
  const shellShot = testInfo.outputPath("action-radar-shell.png");
  await page.locator(".action-table-shell").screenshot({ path: shellShot, animations: "disabled" });
  await testInfo.attach("action-radar-shell", { path: shellShot, contentType: "image/png" });

  const metrics = await collectMetrics(page);
  await testInfo.attach("layout-metrics.json", {
    body: Buffer.from(JSON.stringify(metrics, null, 2)),
    contentType: "application/json"
  });
});

test("pagination history restores page one after page two", async ({ page }) => {
  await openActionRadar(page);
  const width = page.viewportSize().width;
  const mobile = isMobileGrid(width);

  if (mobile) {
    await page.locator("[data-role='action-pagination'] .pagination-nav-simple [aria-label='Trang sau']").click();
  } else {
    await page.locator("[data-role='action-pagination'] .pagination-nav-advanced [aria-label='Trang 2']").click();
  }

  await expect.poll(() => new URL(page.url()).searchParams.get("entry_page")).toBe("2");
  await expect(page.locator("[data-role='action-pagination'] .pagination-meta")).toContainText("Trang 2/");

  await page.goBack();
  await expect.poll(() => new URL(page.url()).searchParams.get("entry_page")).toBe(null);
  await expect(page.locator("[data-role='action-pagination'] .pagination-meta")).toContainText("Trang 1/");
  await expect(page.locator("[data-role='action-table'] .action-data-row").first().locator(".table-rank")).toHaveText("01");
});
