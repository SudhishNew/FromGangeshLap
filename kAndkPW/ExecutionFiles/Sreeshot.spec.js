import {test} from '@playwright/test'

test('ScreenShot', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //visible page
    // await page.screenshot({path:'Screeshots/AutomationBlog.png'})

    //full page
    // await page.screenshot({path:'Screeshots/AutomationBlogFullPage.png', fullPage:true})

    //locator
    await page.locator('[class="dropbtn"]').screens({path:'Screeshots/pointmeBtn.jpeg'})
})

test('Hover', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[class="dropbtn"]').hover()
    const hoverText=await page.locator('[class="dropdown-content"] a').allTextContents()
   
    for(let i of hoverText){
         console.log(i)
    }
})