import {test } from "@playwright/test"

test.beforeEach(async({page})=>{
     await page.goto('https://www.amazon.com/')
})

test('iphone', async({page})=>{
    // await page.goto('https://www.amazon.com/')
    await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('iphone 15');
  await page.goto('https://www.amazon.com/s?k=iphone+15&crid=DGMGX5O71MYR&sprefix=iphone+15%2Caps%2C353&ref=nb_sb_noss_1');
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_2 > span > .puis-card-container > div > div > .puisg-col.puisg-col-0-of-4.puisg-col-0-of-8.puisg-col-4-of-12.puisg-col-8-of-16 > div').click();
//   await page.getByText('Options:3 sizes3 sizes').nth(1).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Apple iPhone 15, 128GB, Pink' }).click();
  
})

test('samsung', async({page})=>{
    // await  page.goto('https://www.amazon.com/')
      await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('samsung s25');
  await page.goto('https://www.amazon.com/s?k=samsung+s25&crid=3FUI4XJ2F3LPX&sprefix=samsung+s25%2Caps%2C371&ref=nb_sb_noss_1');
  await page.locator('.a-link-normal').first().click();
  await page.getByRole('link', { name: 'Cell Phones & Accessories' }).click();
  

})

test('Boult ear pods', async({page})=>{
    // await page.goto('https://www.amazon.com/')
    await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.goto('https://www.amazon.com/s?k=boult+ear+pods&crid=DKTUU5CABZVJ&sprefix=%2Caps%2C344&ref=nb_sb_noss');
  await page.locator('.a-link-normal').first().click();
  await page.getByRole('link', { name: 'Electronics' }).click();

})