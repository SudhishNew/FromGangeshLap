import{test,expect} from"@playwright/test"
test("Frames", async({page})=>{
    await page.goto('https://letcode.in/frame/')
    await page.frameLocator('#firstFr').locator('[name="fname"]').fill("Tejas")
    await page.frameLocator('#firstFr').locator('[name="lname"]').fill('tejus@123')
    await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('tejus123@gmail.com')
    await page.waitForTimeout(2000)
})
test("Auto sugession", async({page})=>{
await page.goto('https://www.google.com/?zx=1783479533835')
await page.fill('#APjFqb','ind')
await page.click('(//ul[@role="listbox"]/li)[5]')
await page.waitForTimeout(3000)
})

test.only("single frame", async({page})=>{
    await page.goto('https://letcode.in/frame/')
    await page.frameLocator('#firstFr').locator('[name="fname"]').fill('tejus')  //    [title="Inner Frame"]
    await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('tejus123@gmail.com')
    await page.waitForTimeout(2000)

})