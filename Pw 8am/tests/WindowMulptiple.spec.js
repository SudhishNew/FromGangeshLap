import { test, expect, chromium } from "@playwright/test";
import { log } from "node:console";

// let browser;
// let context;
// let page;

// test.beforeAll("Open the Browser ", async () => {
//   browser = await chromium.launch();
//   context = await browser.newContext();
//   page = await context.newPage();
//   await page.goto(
//     "https://www.hyrtutorials.com/p/window-handles-practice.html"
//   );
// });

// test.afterAll("Close the Browser", async () => {
//   await page.waitForTimeout(3000);
//   await browser.close();
// });

// test.skip("Single Tabs", async () => {
//   const [newPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator("#newTabBtn").click(),
//   ]);

//   await newPage.waitForLoadState();
//   const title = await newPage.title();
//   console.log(title);
//   await expect(newPage).toHaveTitle(" AlertsDemo - H Y R Tutorials ");
// });

// test("Multiple Tabs", async () => {
//   await page.locator("#newTabsBtn").click();
//   await page.waitForTimeout(2000);
//   const allPages = context.pages();

//   for (const p of allPages) {
//     await p.waitForLoadState();
//     console.log(await p.title());
//   }
// });

// test.skip("Single Browser Windows", async () => {
//   await page.locator("#newWindowBtn").click();

//   await page.waitForTimeout(2000);

//   const allPages = context.pages();
//   console.log(`Total windows opened: ${allPages.length}`);

//   const secondWindow = allPages[1];
//   console.log(await secondWindow.title());
//   await expect(secondWindow).toHaveTitle(" Basic Controls - H Y R Tutorials ");
// });

// test.skip("Multiple Broswer Windows", async () => {
//   await page.locator("#newWindowsBtn").click();

//   await page.waitForTimeout(2000);

//   const allPage = context.pages();
//   console.log(`Total length of page ${await allPage.length}`);

//   for (let i = 1; i < allPage.length; i++) {
//     await allPage[i].waitForLoadState();
//     console.log(`${i}th of page title ${await allPage[i].title()}`);
//   }
// });

// test("tab", async ({ page, context }) => {
//   await page.goto(
//     "https://www.hyrtutorials.com/p/window-handles-practice.html",
//   );
//   await page.getByRole("button", { name: "Open New Window" }).click();

//   const allPage = context.pages();
//   console.log(allPage.length);

//   console.log(await allPage[0].title());
//   // const page1Promise =  await page.waitForEvent('popup');

//   await page.waitForTimeout(5000);
//   // await page.pause()
// });

test("tab 1", async ({ page, context }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await Promise.all([ context.waitForEvent('page'),page.locator("#PopUp").click()])
  const pages = await context.pages();
  
  console.log(pages.length);
 

  for (let p of pages) {
      const title = await p.title();
      console.log(title);
      

    if (title === "Selenium") await p.getByText("Visit Conference").click();
  }

  await page.waitForTimeout(5000);
});


test('Many Window', async({page,context})=>{
  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')
 await Promise.all([context.waitForEvent('page') ,page.locator('#newWindowsBtn').click()])

 const AllPage=await context.pages()
 console.log(AllPage.length)

 for(let p of AllPage){

  const title=await p.title()
  console.log(title)

  if(title=="Basic Controls - H Y R Tutorials"){
    await p.locator('#firstName').fill('tejus')
  }

  await p.waitForTimeout(2000)
 }


})

test.only("many tabs", async({page,context})=>{
  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')
  await Promise.all([context.waitForEvent('page') ,page.locator('#newTabsBtn').click()])
  const AllTabs=await context.pages()
  console.log(AllTabs.length)

  for(let p of AllTabs){
    const title=await p.title()
    console.log(title)

    if(title=='Basic Controls - H Y R Tutorials'){

      await p.locator('[id="lastName"]').fill('Tejus Kumar')
    }
    await p.waitForTimeout(5000)


  }


})




