import  {test} from "@playwright/test"

test("frames", async({page})=>{
    await page.goto('https://letcode.in/frame/')
    //by using url
    // await page.goto('https://letcode.in/frameui')
    // await page.locator('[name="fname"]').fill('Prasanth')

    //by frame name
    // await page.frame('firstFr').locator('[name="lname"]').fill('HarishJayraj')

    //by using frameLocator
    await page.frameLocator('#firstFr').getByPlaceholder('Enter name').fill('prasanth')

    //innerframe
    // await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('prasanth@gmail.com')

    //innerframe by using url 
    await page.goto('https://letcode.in/innerframe')
    await page.locator('[name="email"]').fill('prasanth@gmail.com')

    await page.waitForTimeout(2000)

})