import {test, chromium} from "@playwright/test"
let browser;
let page;
test.beforeAll(async ()=>{
     browser=await chromium.launch()
     page= await browser.newPage()
})

test.beforeEach(async()=>{
await page.goto('https://www.saucedemo.com/')
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(3000)

})
test.afterEach(async ()=>{
     await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
})

test.afterAll(async ()=>{
    await page.close()
    await browser.close()
})

test("Bag", async()=>{
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();    
})

test('Bycycle', async()=>{  
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
})

test("T-shirt", async()=>{
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
})