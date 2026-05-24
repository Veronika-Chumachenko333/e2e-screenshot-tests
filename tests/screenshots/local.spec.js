const { test, expect } = require('@playwright/test');

test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

test('Порівняння скриншота елемента h1', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const element = await page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});

test('Скриншот форми входу', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const form = await page.locator('#loginForm');
  expect(await form.screenshot()).toMatchSnapshot('screenshots/local-page/login-form.png');
});