import{ test} from "@playwright/test"

test('MultiWindows',async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#PopUp').scrollIntoViewIfNeeded()
    const [newWindow]=await Promise.all([ context.waitForEvent('page'), page.locator('#PopUp').click()])
    const allPages=await context.pages()
    console.log(allPages.length)
    
    for(let i of allPages){
        const title=await i.title()
        console.log(title)

        if(title=='Selenium'){
            // await page.waitForLoadState('networkidle')
            await i.locator('//a[contains(text(),"Visit Conference")]').click()
            // await i.waitForTimeout(2000)
            await i.close()
        }
        else if(title=='Fast and reliable end-to-end testing for modern web apps | Playwright'){
            //  await i.waitForLoadState('networkidle')    //    //a[text()="Get started"]
             await i.locator('//a[text()="Get started"]').click()
            //   await i.waitForTimeout(2000)
        }
        await page.waitForTimeout(2000)
        
    }
    

} )

test.only('tab', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')  //[name="q"]

    const [newTab]=await Promise.all([context.waitForEvent('page') ,page.locator('[onclick="myFunction()"]').click()])
    
    await newTab.locator('[name="q"]').fill("Muni")
    await newTab.waitForTimeout(3000)

})