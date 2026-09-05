import {test} from "@playwright/test"

test('Actions', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const source=await page.locator('[id="draggable"]')
    await source.scrollIntoViewIfNeeded()
    const destination=await page.locator('[id="droppable"]')
    // await source.dragTo(destination)
    await page.dragAndDrop('[id="draggable"]','[id="droppable"]' )
    await page.waitForTimeout(2000)

})