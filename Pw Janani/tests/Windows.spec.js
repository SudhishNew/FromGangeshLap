import {test} from "@playwright/test"

test('single tab', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const [newTab]= await Promise.all([context.waitForEvent('page'),page.getByText('New Tab').click()])

    const pages=await context.pages()
    console.log(await pages.length)
    console.log(await newTab.url())
    await newTab.locator('[name="q"]').fill('Roman reigns')
    
    await page.waitForTimeout(3000)
})

test('multi windows', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const [newWindow]=await Promise.all([context.waitForEvent('page'), page.locator('#PopUp').click()])
    const pages=await context.pages()
    console.log(pages.length);
    for(let p of pages){
        console.log(await p.title())
        if(await p.title()=='Selenium'){
            await p.getByText('Visit Conference Website for more information!').click()
        }
    }
    await page.waitForTimeout(3000)
    await page.bringToFront()
    await page.waitForTimeout(3000)
})