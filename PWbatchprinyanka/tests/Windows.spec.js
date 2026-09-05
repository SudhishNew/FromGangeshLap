import {test} from "@playwright/test"

test('Many windows', async({page, context})=>{
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')
    await Promise.all([context.waitForEvent('page'),page.locator('#newWindowsBtn').click()])
    const Allwindows=await context.pages()
    console.log(Allwindows.length)


    for(let i of Allwindows){
        const title=await i.title()
        console.log(title)

        if(title=="Basic Controls - H Y R Tutorials"){
            await i.locator('#firstName').scrollIntoViewIfNeeded()
            await i.locator('#firstName').fill('Priyanka')
            await i.waitForTimeout(3000)
        }
    }
})