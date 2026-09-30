import {test} from "@playwright/test"
import { log } from "console"

test('Mouse Actions', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    //hover
    await page.locator('[class="dropbtn"]').hover()
    const hovertext=await page.locator('[class="dropdown-content"] a').allTextContents()
    console.log(hovertext);
    //double click
    await page.getByText('Copy Text').dblclick()
    //drag And drop
    const source=await page.locator('[id="draggable"]')
    const destination=await page.locator('[id="droppable"]')
    // await source.dragTo(destination)
    await page.dragAndDrop('[id="draggable"]', '[id="droppable"]')
    await page.waitForTimeout(2000)

})

