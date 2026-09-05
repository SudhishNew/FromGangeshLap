import{test,expect} from "@playwright/test"
import { LoginPage } from "./pages/loginpage";
// import {data} from "../tests/TestData/DDTestdata.json"

test('DDTest', async({page})=>{
    const log1=new LoginPage(page);
    await log1.navigate(data.url)
    await log1.login(data.UserName,data.Password)
    // await log1.login(data.Password)
    
    
})
