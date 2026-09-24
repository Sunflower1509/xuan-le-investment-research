import { defineConfig } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://sunflower1509.github.io/xuan-le-investment-research/";

const chromeProject = (name, viewport, extra = {}) => ({
  name,
  use: {
    browserName: "chromium",
    channel: "chrome",
    viewport,
    locale: "vi-VN",
    timezoneId: "Asia/Ho_Chi_Minh",
    colorScheme: "light",
    reducedMotion: "reduce",
    ...extra
  }
});

const webkitProject = (name, viewport, extra = {}) => ({
  name,
  use: {
    browserName: "webkit",
    viewport,
    locale: "vi-VN",
    timezoneId: "Asia/Ho_Chi_Minh",
    colorScheme: "light",
    reducedMotion: "reduce",
    ...extra
  }
});

export default defineConfig({
  testDir: ".",
  testMatch: /(?:financial-grid|market-brief)\.spec\.mjs/,
  timeout: 45_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: [
    ["line"],
    ["html", { outputFolder: "playwright-report", open: "never" }]
  ],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  outputDir: "test-results",
  projects: [
    chromeProject("chrome-desktop-1366", { width: 1366, height: 768 }),
    chromeProject("chrome-desktop-1440", { width: 1440, height: 900 }),
    webkitProject("ipad-class-webkit", { width: 834, height: 1194 }, {
      hasTouch: true,
      deviceScaleFactor: 2,
      userAgent: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1"
    }),
    chromeProject("chrome-android-390", { width: 390, height: 844 }, {
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
      userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Mobile Safari/537.36"
    }),
    webkitProject("safari-iphone-webkit-390", { width: 390, height: 844 }, {
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1"
    }),
    chromeProject("chrome-edge-320", { width: 320, height: 800 }, {
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 2
    })
  ]
});
