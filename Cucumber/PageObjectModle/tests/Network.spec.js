import{test,expect}  from "@playwright/test"
 
test("Network Mocking", async({page,context})=>{
    
    await context.route(/.css$/, (route)=>
        route.abort()
    )
     await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

})

