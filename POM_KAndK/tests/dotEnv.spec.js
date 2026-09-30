import {test} from "@playwright/test"
import{LoginPage} from '../Pages/login'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.resolve(__dirname,"../testData/.env.QA")})
console.log(process.env.Base_URL);


test('DotEnv', async ({page})=>{
    let l=new LoginPage(page)
   await l.navigate(process.env.Base_URL)
    await l.userName(process.env.User_Name)
    await l.pwd(process.env.Pass_Word)
    await l.login()
    await page.waitForTimeout(3000)

})




