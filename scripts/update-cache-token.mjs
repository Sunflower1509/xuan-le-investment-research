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
const updated = html.replace(pattern, token);
if (updated !== html) await fs.writeFile(indexPath, updated, "utf8");
console.log(token);
