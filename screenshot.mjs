import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const dir = 'screenshots';
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

await page.goto('https://capstone-presentation-tan.vercel.app', { waitUntil: 'networkidle' });
await page.waitForSelector('.slide', { timeout: 10000 });

const total = await page.locator('.nav__dot').count();
console.log(`Total slides: ${total}`);

for (let i = 0; i < total; i++) {
  // Wait for any images on this slide to load
  await page.waitForTimeout(500);
  try {
    await page.waitForFunction(() => {
      const imgs = document.querySelectorAll('.slide__image img, .slide__images img');
      return Array.from(imgs).every(img => img.complete && img.naturalHeight > 0);
    }, { timeout: 3000 });
  } catch (e) {
    // No images or timeout — fine
  }
  await page.waitForTimeout(200);

  const padded = String(i + 1).padStart(2, '0');
  await page.screenshot({ path: `${dir}/slide_${padded}.png`, fullPage: false });
  console.log(`Captured slide ${i + 1}`);
  if (i < total - 1) await page.keyboard.press('ArrowRight');
}

await browser.close();
console.log('Done!');
