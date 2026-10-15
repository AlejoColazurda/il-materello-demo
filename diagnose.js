const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  // Typical desktop window size, NOT the mobile mockup size — reproduces how Alejo would actually open it.
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const failed = [];
  page.on('requestfailed', (req) => failed.push(`${req.url()} -> ${req.failure()?.errorText}`));
  page.on('response', (res) => {
    if (res.status() >= 400) failed.push(`${res.url()} -> HTTP ${res.status()}`);
  });
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push('pageerror: ' + err.message));

  await page.goto('http://localhost:4300', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // dish name visible on first card, for later comparison
  const dish1 = await page.textContent('app-dish-card .dish-name');
  console.log('Dish on card 1:', dish1.trim());

  await page.screenshot({ path: 'verify-rail.png' });
  await page.screenshot({ path: 'verify-scroll-1.png' });

  // Real mouse-wheel scroll (not programmatic scrollBy) over the frame center, like an actual user.
  const frameBox = await page.locator('.frame').boundingBox();
  await page.mouse.move(frameBox.x + frameBox.width / 2, frameBox.y + frameBox.height / 2);
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(600);

  const dish2 = await page.textContent('app-dish-card:nth-child(2) .dish-name').catch(() => null);
  const scrollTop = await page.evaluate(() => document.querySelector('.feed').scrollTop);
  console.log('Scroll top after real wheel event:', scrollTop);

  await page.screenshot({ path: 'verify-scroll-2.png' });

  // Click interactions: like, comments, share
  const likeBtn = page.locator('app-dish-card .rail .rail-btn').nth(0);
  const beforeLikeClass = await likeBtn.getAttribute('class');
  await likeBtn.click();
  await page.waitForTimeout(200);
  const afterLikeClass = await likeBtn.getAttribute('class');
  console.log('Like button class before/after click:', beforeLikeClass, '->', afterLikeClass);

  console.log('=== FAILED REQUESTS ===', failed.length ? failed.join('\n') : '(none)');
  console.log('=== CONSOLE ERRORS ===', consoleErrors.length ? consoleErrors.join('\n') : '(none)');

  await browser.close();
})();
