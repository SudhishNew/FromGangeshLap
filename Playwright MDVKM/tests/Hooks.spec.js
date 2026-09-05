import{test,chromium} from "@playwright/test"

let page;
test.beforeAll( async({browser})=>{
    // browser= await chromium.launch()   //browser fixture
   page= await browser.newPage()                  //page fixture
    await page.goto('https://www.amazon.com/')
})
test.afterAll("afterAll",async()=>{
      const browser= await chromium.launch()   //browser fixture
   page= await browser.newPage() 
  await page.close()
})
test(" iphone", async()=>{
    // await page.goto('https://www.amazon.com/')
    await page.locator('[id="twotabsearchtextbox"]').fill("iphone")
    await page.locator('[id="twotabsearchtextbox"]').press('Enter')
})
test(" samsung ", async()=>{
    // await page.goto('https://www.amazon.com/')
    await page.locator('[id="twotabsearchtextbox"]').fill("samsung")
    await page.locator('[id="twotabsearchtextbox"]').press('Enter')
})
test(" earpods", async()=>{
    // await page.goto('https://www.amazon.com/')
    await page.locator('[id="twotabsearchtextbox"]').fill("earpods")
    await page.locator('[id="twotabsearchtextbox"]').press('Enter')
})


// import { test, expect } from '@playwright/test';

// let page;

// test.beforeAll(async ({ browser }) => {
//     console.log('Opening browser and Amazon website');

//     page = await browser.newPage();
//     await page.goto('https://www.amazon.in');
// });

// test.afterAll(async () => {
//     console.log('Closing browser');
//     await page.close();
// });

// test('Search Laptop', async () => {
//     await page.locator('#twotabsearchtextbox').fill('Laptop');
//     await page.locator('#nav-search-submit-button').click();

//     await expect(page).toHaveTitle(/Amazon/);
//     console.log('Laptop search completed');
// });

// test('Search Mobile', async () => {
//     await page.locator('#twotabsearchtextbox').fill('Mobile');
//     await page.locator('#nav-search-submit-button').click();

//     await expect(page).toHaveTitle(/Amazon/);
//     console.log('Mobile search completed');
// });

// test('Search Headphones', async () => {
//     await page.locator('#twotabsearchtextbox').fill('Headphones');
//     await page.locator('#nav-search-submit-button').click();

//     await expect(page).toHaveTitle(/Amazon/);
//     console.log('Headphones search completed');
// });