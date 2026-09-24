import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("action radar keeps native table semantics and explicit column headers", () => {
  const app = read("src/scripts/app.js");
  assert.match(app, /<caption class="sr-only">Vùng mua tham khảo/);
  assert.match(app, /scope="col">Hạng \/ mã \/ trạng thái<\/th>/);
  assert.match(app, /scope="col">Giá đóng cửa<\/th>/);
  assert.match(app, /scope="col">Vùng mua đã khóa<\/th>/);
  assert.match(app, /scope="col">Khoảng cách<\/th>/);
  assert.match(app, /scope="col">Upside tới định giá cơ sở<\/th>/);
});

test("mobile financial grid exposes five core columns and expandable secondary details", () => {
  const app = read("src/scripts/app.js");
  const css = read("assets/css/data-navigation.css");
  assert.match(app, /data-action="toggle-action-details"/);
  assert.match(app, /class="action-detail-row"/);
  assert.match(app, /aria-expanded="false"/);
  assert.match(css, /\.action-table td\.action-col-valuation,[\s\S]*\.action-table td\.action-col-source,[\s\S]*\.action-table th\.action-col-valuation,[\s\S]*\.action-table th\.action-col-source \{\s*display: none !important;/);
  assert.match(css, /\.action-detail-toggle \{[\s\S]*width: 44px;[\s\S]*height: 44px;/);
  assert.match(css, /\.action-table \{[\s\S]*display: table !important;/);
});

test("sticky table context uses a fixed clone and horizontal overflow cue", () => {
  const html = read("index.html");
  const app = read("src/scripts/app.js");
  const css = read("assets/css/data-navigation.css");
  assert.match(html, /data-role="action-sticky-header"/);
  assert.match(html, /data-role="action-scroll-cue"/);
  assert.match(app, /const updateActionTableChrome/);
  assert.match(app, /stickyViewport\.scrollLeft = wrap\.scrollLeft/);
  assert.match(css, /\.action-sticky-header \{[\s\S]*position: fixed;/);
  assert.match(css, /\.action-table \.action-col-reference \{[\s\S]*position: sticky;/);
});

test("mobile pagination switches to simple previous-current-next controls", () => {
  const app = read("src/scripts/app.js");
  const css = read("assets/css/data-navigation.css");
  assert.match(app, /pagination-nav pagination-nav-simple/);
  assert.match(app, /Trang \$\{model\.page\} \/ \$\{model\.totalPages\}/);
  assert.match(css, /@media \(max-width: 767px\)/);
  assert.match(css, /\.pagination-nav-advanced \{\s*display: none !important;/);
  assert.match(css, /\.pagination-nav-simple \{[\s\S]*grid-template-columns: 44px minmax\(0, 1fr\) 44px;/);
});


test("compact mobile status is clamped while full recommendation remains in details", () => {
  const app = read("src/scripts/app.js");
  const css = read("assets/css/data-navigation.css");
  assert.match(app, /class="action-detail-status"><span>Trạng thái \/ chiến thuật<\/span><strong>\$\{escapeHtml\(action\.recommendation\)\}/);
  assert.match(css, /\.table-status \{[\s\S]*white-space: nowrap;[\s\S]*text-overflow: ellipsis;/);
  assert.match(css, /\.action-detail-status,[\s\S]*\.action-detail-sources \{\s*grid-column: 1 \/ -1;/);
});


test("mobile hidden secondary columns outrank nth-child table-cell overrides", () => {
  const css = read("assets/css/data-navigation.css");
  const hiddenRule = css.indexOf(".action-table td.action-col-valuation,");
  const genericCellRule = css.indexOf(".action-table td:nth-child(odd),");
  assert.ok(genericCellRule >= 0);
  assert.ok(hiddenRule > genericCellRule, "Hidden mobile columns must be declared after the generic table-cell override");
});
