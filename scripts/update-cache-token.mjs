#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "index.html");
const argIndex = process.argv.indexOf("--date");
const date = argIndex >= 0 ? process.argv[argIndex + 1] : null;
if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) throw new Error("--date YYYY-MM-DD là bắt buộc.");

const html = await fs.readFile(indexPath, "utf8");
const pattern = /assets\/js\/site\.min\.js\?v=[^"']+/g;
const matches = html.match(pattern) || [];
if (matches.length !== 1) throw new Error(`Kỳ vọng đúng 1 JS cache token, thực tế ${matches.length}.`);
const token = `assets/js/site.min.js?v=${date.replaceAll("-", "")}-eod-auto`;
const [year, month, day] = date.split("-");
const dottedDate = `${day}.${month}.${year}`;
const slashDate = `${day}/${month}/${year}`;
const replacements = [
  {
    label: "nhãn Action Radar EOD",
    pattern: /(<[^>]+data-role=["']coverage-eod-label["'][^>]*>)[^<]*(<\/[^>]+>)/g,
    value: `$1Action Radar • EOD ${dottedDate}$2`
  },
  {
    label: "nhãn giá khóa",
    pattern: /(<[^>]+data-role=["']coverage-lock-label["'][^>]*>)[^<]*(<\/[^>]+>)/g,
    value: `$1Giá khóa ${day}.${month}$2`
  },
  {
    label: "ngày giá đóng cửa trong mô tả SEO",
    pattern: /(<meta\s+name=["']description["']\s+content=["'][^"']*?giá đóng cửa )\d{2}\/\d{2}\/\d{4}([^"']*["']\s*\/?>)/gi,
    value: `$1${slashDate}$2`
  }
];
let updated = html.replace(pattern, token);
for (const replacement of replacements) {
  const found = updated.match(replacement.pattern) || [];
  if (found.length !== 1) throw new Error(`Kỳ vọng đúng 1 ${replacement.label}, thực tế ${found.length}.`);
  updated = updated.replace(replacement.pattern, replacement.value);
}
if (updated !== html) await fs.writeFile(indexPath, updated, "utf8");
console.log(token);
