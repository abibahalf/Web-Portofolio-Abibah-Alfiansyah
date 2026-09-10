import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = path.join(__dirname, "index.html");
const outDir = path.join(__dirname, "images");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  channel: "msedge",
  headless: true,
});

const page = await browser.newPage({
  viewport: { width: 520, height: 980 },
  deviceScaleFactor: 2,
});

await page.goto("file:///" + html.replace(/\\/g, "/"), {
  waitUntil: "networkidle",
  timeout: 60000,
});

await page.addStyleTag({
  content: `
    body { background: #e6e8ec !important; }
    .page-header, .photos, .section-label, .shot > h2 { display: none !important; }
    .page { max-width: none !important; padding: 0 !important; }
    .gallery { display: block !important; }
    .shot { padding: 28px !important; background: #e6e8ec !important; margin: 0 !important; }
  `,
});

await page.waitForTimeout(1500);

const shots = await page.$$eval("[data-shot]", (els) =>
  els.map((el) => el.getAttribute("data-shot"))
);

for (const name of shots) {
  const el = await page.$(`[data-shot="${name}"]`);
  if (!el) continue;
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const file = path.join(outDir, name);
  await el.screenshot({ path: file, type: "png" });
  console.log("saved", name);
}

await browser.close();
