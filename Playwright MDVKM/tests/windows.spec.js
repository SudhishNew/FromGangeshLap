import { test, expect } from "@playwright/test";

// fixture
test("Single tab", async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");

   const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("#newTabBtn").click()
    ])

    await page.waitForTimeout(3000);

    const title = await newTab.title();
    console.log(title);
})

test("Single window", async({page, context})=>{
    await page.goto("https://www.timeanddate.com/worldclock/india/new-delhi");


     const liveTime=await page.locator('//span[@id="ct"][contains(text(),"13:")]').innerText()
    console.log(liveTime)
    // await page.locator("#newWindowBtn").click();
    // await page.waitForTimeout(3000);

    // const allWindow = await context.pages(); // return no of all page  2
    // console.log(`no of pages count ${allWindow.length}`)

    // const secondPage = allWindow[1];

    // const title = await secondPage.title();

    // console.log(title);


})

test("Dyanamic time", async({page})=>{  ////span[@id="ct"][contains(text(),"13:")]
    await page.goto("https://www.timeanddate.com/worldclock/india/new-delhi",{waitUntil:'domcontentloaded', timeout:60000});
    // await page.waitForLoadState()
    await page.locator('#ct').waitFor()
    const liveTime=await page.locator('//span[@id="ct"][contains(text(),"13:")]').innerText()
    console.log(liveTime)
})