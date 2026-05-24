const { test, expect } = require('@playwright/test');

test('Скриншот калькулятора', async ({ page }) => {
  await page.goto('http://localhost:3000/calculator.html');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/calculator/calculator-page.png');
});

test('Скриншот результату обчислення', async ({ page }) => {
  await page.goto('http://localhost:3000/calculator.html');
  await page.fill('#num1', '42');
  await page.fill('#num2', '7');
  await page.selectOption('#operation', 'multiply');
  await page.click('#calculate');
  const result = await page.locator('#result');
  expect(await result.screenshot()).toMatchSnapshot('screenshots/calculator/result-multiply.png');
});