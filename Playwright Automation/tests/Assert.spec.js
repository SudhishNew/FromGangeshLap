import{test,expect} from "@playwright/test"

test("Assert", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect.soft(page).not.toHaveTitle("Automation Testing ")
//   const title =await page.getByText("Automation Testing Practice")

const titl=await page.locator('//h1[@class="title"]').textContent()
  console.log(titl)
//     await expect(title).toBeVisible()
    await page.waitForTimeout(3000)
})