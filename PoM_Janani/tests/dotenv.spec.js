import{test} from "@playwright/test"
import{LoginPage} from "../pages/login"
import{ProductPage} from '../pages/product'
import dotenv from 'dotenv'
import path from 'path'
import {excelReader} from '../Utils/excel'



dotenv.config({path:path.resolve(__dirname,'../TestData/.env.QA')})

console.log(process.env.Base_Url);

const xldata=excelReader()

console.log(xldata);


for(let d of xldata){

    test(d.UserName, async({page})=>{

    let l=new LoginPage(page)
    let p=new ProductPage(page)

    await l.navigate(d.URL)
    await l.userName(d.UserName)
    await l.pwd(d.PassWord)
    await l.login()

    await page.waitForTimeout(2000)

    await p.selectproduct()
    await p.cart()
    await p.checkOut()
    await p.enterDetails(process.env.First_name, process.env.Last_name, process.env.Pin_code)
    await p.completeOrder()

    await page.waitForTimeout(2000)
    
})

}



