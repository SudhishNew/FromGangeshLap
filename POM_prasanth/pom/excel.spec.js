import {test, expect} from "@playwright/test"
import {LoginPage}  from "../Pages/login"
import {excelReader} from '../Utils/excel'


const data=excelReader()
console.log(data)

for(let d of data){
    test(d.UserName, async({page})=>{

    let l=new LoginPage(page)
    await l.navigate(d.URL)
    await l.userName(d.UserName)
    await l.password(d.Password)
    await l.login()

    await page.waitForURL('https://www.saucedemo.com/inventory.html')

})

}



