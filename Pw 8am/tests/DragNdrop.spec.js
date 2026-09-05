import {test} from "@playwright/test"

test("DragAndDrop", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//div[@id="draggable"]').scrollIntoViewIfNeeded()
    await page.dragAndDrop('//div[@id="draggable"]','//div/p[text()="Drop here"]')
    await page.waitForTimeout(2000)
})