const { test, expect } = require('@playwright/test');

// Тест для локального калькулятора
test('Калькулятор - додавання', async ({ page }) => {
  await page.goto('http://localhost:3000/calculator.html');
  await page.fill('#num1', '10');
  await page.fill('#num2', '5');
  await page.selectOption('#operation', 'add');
  await page.click('#calculate');
  await expect(page.locator('#result')).toHaveText('Результат: 15');
});

test('Калькулятор - ділення на нуль', async ({ page }) => {
  await page.goto('http://localhost:3000/calculator.html');
  await page.fill('#num1', '10');
  await page.fill('#num2', '0');
  await page.selectOption('#operation', 'divide');
  await page.click('#calculate');
  await expect(page.locator('#result')).toHaveText('Результат: Помилка: ділення на 0');
});
