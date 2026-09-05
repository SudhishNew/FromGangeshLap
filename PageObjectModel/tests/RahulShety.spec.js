import{test} from "@playwright/test"
import { LoginPage } from "./pages/Login.js"
import { Form } from "./pages/Catagory.js"
import {Details} from  "../tests/TestData/data.json"
import {excelReader} from "../tests/utils/Excel.js"
import {MyTest} from "../tests/Fixture/LoginFixture.js"
//    const d=excelReader()
//    for(let i of d){
//   test(i.Username, async({page})=>{
//        const l= new LoginPage(page)
//        const f=new Form(page)
//       // console.log(i.Username, i.Password)
//    await l.navigate(i.URL)
//    await l.user(i.Username)
//    await l.pwd(i.Password)
//    await l.dd()
//    await l.temrs()
//    await l.signinbtn()
//    await f.catagory()
//    await f.nameEnter(Details.Name)
//    await f.mailEnter(Details.mail)
//    await f.passEnter(Details.pwd)
//    await f.iceCheck()
//    await f.genderDD()
//    await f.statusRadio()
//    // await f.dob()
//    await f.submit()
//     await page.waitForTimeout(2000)
// })
// }
  

MyTest("Fixture", async({logFixture})=>{
   await logFixture.waitForTimeout(2000)
})

