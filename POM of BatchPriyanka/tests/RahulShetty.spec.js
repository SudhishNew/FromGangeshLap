import {test} from "@playwright/test"
import {Login} from '../pages/loginPage.js'
import {data} from "../pages/TestData/data.json"
import {MyTest} from "../Fixture/LogFixture.js"


test.skip('Rahul Shetty', async({page})=>{
    
    let l= new Login(page)
    await l.navigate(data.url)
    await l.userAndPassword(data.UserName,data.PassWord)
    await l.dropDown()
    await l.agreeBtn()
    await l.signIn()
    await page.waitForTimeout(3000)

})

MyTest('custom fixture', async({LoginFixture})=>{
    await LoginFixture.waitForTimeout(3000)
})

