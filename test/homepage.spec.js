const { test, expect } = require('@playwright/test');

test('homepage has ExploreX title', async ({ page }) => {
  await page.goto('https://your-deployed-url.com');
  await expect(page).toHaveTitle(/ExploreX/);
});
