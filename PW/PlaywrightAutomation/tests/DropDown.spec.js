import{test,chromium,expect} from "@playwright/test"

test("DropDown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
// single DropDown
// const country=await page.locator("#country").selectOption({value:"uk"});
// console.log(country)

// await expect(await page.locator("#country")).toHaveValue("uk")

//to get all values
// const allcountry=await page.locator('#country option').allTextContents()
// for(let count of allcountry){
//     console.log(count)
// }
//select by label

// await page.locator("#country").selectOption({label:"Australia"})
 
//select by index

// const indexof=await page.locator("#country").selectOption({index: 8})
// console.log(indexof)

// muliple DropDown

//slect by value
// await page.locator('#colors').selectOption([{value:"red"},{value:"green"}])

// await page.waitForTimeout(3000)

//select by index

// await page.locator("#colors").selectOption([{index:1},{index:3}])
// await page.waitForTimeout(3000)

//select by lable or text

await page.locator("#colors").selectOption([{label:"Red"},{label:"Green"}])
await page.waitForTimeout(3000)




})