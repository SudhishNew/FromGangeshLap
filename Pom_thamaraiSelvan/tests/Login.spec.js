import {test} from "@playwright/test"
import {LoginPage} from '../pages/Login'
import {excelReader} from '../Utils/excel'


const data=excelReader()

console.log(data)

for(let d of data){ 
    test(d.User_Name, async({page})=>{

    let l=new LoginPage(page)
    await l.navigate(d.URL) 
    await l.login(d.User_Name,d.Password) 

    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    
})

}


