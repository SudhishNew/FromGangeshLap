import{test, expect} from "@playwright/test";

test("QAPractice", async({page})=>{
    await page.goto("https://demoqa.com/text-box")
    await page.locator('[id="userName"]').fill("Sudhish")
    await page.getByPlaceholder("name@example.com").fill("sudhish@gmail.com")
    await page.fill('#currentAddress',"Annan nagar Chennai")
    await page.waitForTimeout(2000)
})
