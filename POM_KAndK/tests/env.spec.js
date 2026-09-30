import{test} from "@playwright/test"
import{LoginPage} from '../Pages/login'
import {ProductPage} from '../Pages/Product'
import {CheckOutPage} from '../Pages/checkout'
import {data} from "../testData/Details.json"
import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.resolve(__dirname, "../testData/.env")})
console.log(process.env.User_Name, process.env.Pass_Word);


test('Env', async({page})=>{
     let l= new LoginPage(page)
     await l.navigate()
     await l.userName(process.env.User_Name) 
     await l.pwd(process.env.Pass_Word)
     await l.login()
     await page.waitForTimeout(4000)

})