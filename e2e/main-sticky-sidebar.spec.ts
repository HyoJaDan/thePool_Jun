import { expect, test } from '@playwright/test';

const port = process.env.PORT_NUM ?? 3000;
test(`Main page's sidebar should be stick to the top`, async ({ page }) => {
  await page.goto(`http://localhost:${port}`);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // playwright does not offer logical visibility
  const isVisible = await page.evaluate(() => {
    const element = document.querySelector('#category-side-bar');
    if (element === null) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= 0;
  });

  expect(isVisible).toBeTruthy();
});
