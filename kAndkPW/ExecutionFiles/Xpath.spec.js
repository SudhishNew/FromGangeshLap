import{test} from "@playwright/test"

test('Absolute', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
const titleH1=  await page.locator("/html/body/div[4]/div[2]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div/div[1]/h1").textContent()
console.log(titleH1)
})

test('Relative', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //relative xpath
const titleH1=  await page.locator('//h1[@class="title"]').textContent()
await page.locator('//input[@id="name"]').fill('Srinath')
console.log(titleH1)
await page.locator('//input[@placeholder="Enter EMail"]').fill('srinath@gmail.com')
//xpath by text()
await page.locator('//button[text()="START"]').click()
//xpath and
await page.locator('//input[@class="form-control" and @maxlength="10"]').fill('87654321901')
//xpath using position
await page.locator('(//label[@class="form-check-label"])[3]').check()
const dd=await page.locator('//select[@id="country"]')
await dd.click()
await page.waitForSelector('//select[@id="country"]/option)[3]')

// await dd.locator('(//select[@id="country"]/option)[3]').click()
await page.waitForTimeout(2000)
})

test('Dynamic xpath', async({page})=>{
    await page.goto('https://www.google.com/')
    //contains
    // await page.locator('//textarea[contains(@data-ved,"0ahUKEw")]').fill('India')
    //starts-with
    await page.locator('//textarea[starts-with(@data-ved,"0ahUKE")]').fill('Mumbai Indians ka Raja')
    await page.locator('//textarea[starts-with(@data-ved,"0ahUKE")]').press('Enter')
})

test.only('Xpath Axes', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('[role="searchbox"]').fill('iphone')
    await page.locator('[role="searchbox"]').press('Enter')
    await page.locator('//div[@class="a-row"]/following::a/child::h2/child::span[contains(text(),"iPhone 17 Pro 512 GB: 15.93 cm (6.3″) ")]').click()
    await page.waitForTimeout(2000)
})

