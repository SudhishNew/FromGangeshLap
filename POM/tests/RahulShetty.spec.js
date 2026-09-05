import {test} from "@playwright/test"
import  {LoginPage} from "./pages/Login.js"
import { Shop } from "./pages/ShopPage.js"
import {data} from "../tests/TesData/Data.json"
import {my} from "../tests/Fixtures/LoginFixture.js"

// test("POM", async({page})=>{

//     let l=new LoginPage(page)
//     let s=new Shop(page)
//     await l.navigate()
//    await l.enterUsernamePassword(data.user,data.pwd)
//    await l.ddselect()
//    await l.agreeTerm()
//    await l.sign()
//     await s.catagoryLink()
//     await s.enterName("Sudhish")
    
//     await page.waitForTimeout(2000)
// })

my("fixture", async({loginfixture})=>{
    await loginfixture.waitForTimeout(3000)
})
