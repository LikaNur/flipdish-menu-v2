import { test, expect } from '@playwright/test';

test('Menu page renders with menu sections and items', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('heading', { name: 'Menu' })).toBeVisible();

  const sections = page.locator('section');
  await expect(sections.first()).toBeVisible();

  const menuItem = page.locator('article');
  await expect(menuItem.first()).toBeVisible();

  await expect(menuItem.first().locator('h1')).toBeVisible();
  
  await expect(menuItem.first().locator('p')).toContainText('£');

  const img = menuItem.first().locator('img');
  await expect(img).toBeVisible();
});
