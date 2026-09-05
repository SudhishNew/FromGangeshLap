import{ test} from "@playwright/test"

test('Inbuild locators', async({page})=>{

    await page.goto('https://jatin99.github.io/Playwright-demo-app/')
    const title=await page.title()
    //using getByTestId
    await page.getByTestId('username-input').pressSequentially('Janani',{delay:500})
    //using getByTitle
    await page.getByTitle("Click to toggle status").first().click()
    //using getByRole
    await page.getByRole('button',{name:'+ Add Employee'}).click()
    await page.waitForTimeout(2000)

    console.log(title)

} )