import {test,expect} from "@playwright/test"
import {LoginPage} from "../Pages/login"
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.resolve(__dirname,"../testData/.env.QA")})
console.log(process.env.URL)
console.log(process.env.User_Name)
console.log(process.env.Pass_Word)

test('DotEnv', async ({page})=>{

    console.log(process.env.URL)
    let l=new LoginPage(page)
    await l.navigate(process.env.URL)
    await l.userName(process.env.User_Name)
    await l.password(process.env.Pass_Word)
    await l.login()
    
    await page.waitForURL('https://www.saucedemo.com/inventory.html')


})