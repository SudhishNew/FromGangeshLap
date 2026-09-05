import {test,expect} from "@playwright/test"
import {excelReader} from "../utils/excel.js"
import {Login} from "../pages/loginPage.js"

const d=excelReader()
let l;

for (let i of d){

    test(i.UserName, async({page})=>{
        console.log(i.UserName)

        l=new Login(page)
        await l.navigate(i.URL)
        await l.userAndPassword(i.UserName,i.PassWord)
        await l.dropDown()
        await l.agreeBtn()
        await l.signIn()
        await page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop')

    })


}


