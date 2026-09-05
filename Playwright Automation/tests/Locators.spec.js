import{test} from "@playwright/test"

test("TestBlog", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const name=await page.locator('#name').fill("George")
   
    await page.locator('#email').fill("george143@gmail.com")
    await page.locator("[placeholder='Enter Phone']").type("9876543211")
    await page.locator('.form-control').nth(3).fill("anna nagar chennai")
    await page.waitForTimeout(3000)

})
