import{test} from "@playwright/test"

test('Frames', async({page})=>{
    await page.goto('https://letcode.in/frame')
    await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill("Mugesh")
    await page.frameLocator('[id="firstFr"]').locator('[name="lname"]').fill("mugesh123@gmail.com")
    await page.frameLocator('[id="firstFr"]').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill("mugesh123@gmail.com")
    await page.waitForTimeout(2000)
})

