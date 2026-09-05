import{test} from "@playwright/test"

test("Practise", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const title=await page.getByText('Automation Testing Practice').innerText()
    console.log(title)
    await page.getByPlaceholder('Enter Name').fill("Mugesh")
    // await page.getByLabel('Email:').fill("mugesh@123")
    await page.getByRole('textbox',{name:'phone'}).fill('987654321')
    await page.getByLabel('Address:').fill("chennai medavakam")
    await page.waitForTimeout(3000)
})