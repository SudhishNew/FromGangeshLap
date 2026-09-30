import{test} from "@playwright/test"
import{LoginPage} from '../Pages/login'
import {ProductPage} from '../Pages/Product'
import {CheckOutPage} from '../Pages/checkout'
import {data} from "../testData/Details.json"
import dotenv from "dotenv"
import path from "path"
import {excelReader} from '../utils/excel'

        const dataXL= excelReader()

dotenv.config({path:path.resolve(__dirname, "../testData/.env")})

test('pom', async({page})=>{

   let l= new LoginPage(page)
   let p=new ProductPage(page)
   let c=new CheckOutPage(page)
   console.log(process.env.username);
   

   await l.navigate()
   await l.userName(data.uname)
   await l.pwd(data.pswd)
   await l.login()
   await page.waitForTimeout(2000)
   await p.addToCart()
   await page.waitForTimeout(2000)
   await c.cart()
   await c.checkOut()
   await c.orderDetails(data.firstName, data.lastName, data.zipCode)
   await page.waitForTimeout(2000)
   await c.complete()
   
   await page.waitForTimeout(3000)

})