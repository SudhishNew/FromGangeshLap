import{test} from "@playwright/test"

test("Gogle Search", async({page})=>{
    await page.goto("https://www.google.com/")

    await page.locator("#APjFqb").type("ind")
    await page.locator("[role='listbox'] [role='option']").first().waitFor()
    const sug=await page.locator("[role='listbox'] [role='option']").allInnerTexts()
    console.log(sug)
    for(let e of sug){
        if(e=='ind vs eng'){
            await page.click()
        }
    }
    await page.waitForTimeout(3000)
})

test.only('frame',async({page})=>{
    await page.goto('https://letcode.in/frame')
    // await page.frameLocator('[id="firstFr"]').scrollIntoViewIfNeeded()
    await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill('roman')
   await page.locator('[id="firstFr"]').scrollIntoViewIfNeeded()
    // await page.waitForTimeout(3000)
    // await page.frameLocator('[id="firstFr"]').scrollIntoViewIfNeeded()
    await page.frameLocator('[id="firstFr"]').frameLocator('[src="innerframe"]').locator('[name="email"]').fill("roman1408@gmailcom")
    await page.waitForTimeout(3000)
})