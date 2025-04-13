import { test, expect } from '@playwright/test';

test('Test 2: Verify user can view product details', async ({ page }) => {
await page.goto('https://practicesoftwaretesting.com');
await page.locator('[data-test="product-01JRR1GJ1Z39MY3Z00QZFV1CQT"]').click();

await expect(page).toHaveURL('https://practicesoftwaretesting.com/product/01JRR1GJ1Z39MY3Z00QZFV1CQT');
await expect(page.locator('[data-test="product-name"]')).toHaveText('Combination Pliers');
await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15');
await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();
});