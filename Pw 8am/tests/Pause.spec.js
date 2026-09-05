import {test} from "@playwright/test"

test('pause', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const page1Promise = context.waitForEvent('page');
//   await page.getByRole('button', { name: 'New Tab' }).click();
  await page.locator('//button[text()="New Tab"]').click()
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'search' }).click();
  await page1.getByRole('textbox', { name: 'search' }).fill('Roman reigns');
  await page1.bringToFront(page)
  await page.waitForTimeout(4000)
  
    // await page.pause()
    
})