import {test} from "@playwright/test"

test('Demo', async({page})=>{
  await page.goto('https://www.facebook.com/login/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('sathya');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('sathya@123');
  await page.waitForTimeout(3000)
  await page.viewportSize()
})