import {test, chromium} from "@playwright/test"

test('FB launch', async()=>{

    const browser=await chromium.launch()
     const page=await browser.newPage()
     await page.goto('https://www.facebook.com/')


})

test('Insta launch', async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.go('https://www.instagram.com/?hl=en')

})

test('YouTube', async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.youtube.com/')

})


test.only('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Pta');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Prashanth');
  await page.getByRole('textbox', { name: 'Enter EMail' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('prashanth@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('1234567899');
  await page.getByRole('radio', { name: 'Male', exact: true }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();
  await page.getByLabel('Country:').selectOption('india');
  await page.locator('#datepicker').dblclick();
  await page.getByRole('link', { name: '7', exact: true }).click();
  await page.getByRole('button', { name: 'Copy Text' }).dblclick();
});
