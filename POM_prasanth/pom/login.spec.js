import {test, expect} from "@playwright/test"
import {LoginPage} from '../Pages/login'
import {Cart} from '../Pages/cart'
import {CheckOut} from '../Pages/checkOut'
import {data} from '../testData/details.json'
import { myTest } from "../fixture/loginfixture"

test('login POM', async({page})=>{

    let l=new LoginPage(page)       //when object creation  occurs, contructor will calls
    let c=new Cart(page)
    let ck=new CheckOut(page)

    await l.navigate(data.URL)
    await l.userName(data.userName)
    await l.password(data.password)
    await l.login()
    await page.waitForTimeout(2000)

    await c.selectProduct()
    await c.cart()
    await c.validate()
    await page.waitForTimeout(2000)

    await ck.checkOut()
    await ck.fistName(data.firstName)
    await ck.lastName(data.lastName)
    await ck.pinCode(data.pinCode)
    await ck.completeCheckOut()
    await ck.successMsgValidation()

    await page.waitForTimeout(2000)


})

myTest('fixture', async({page,LogFixture })=>{
    await LogFixture.waitForTimeout(2000)

     let c=new Cart(page)
    let ck=new CheckOut(page)

    await c.selectProduct()
    await c.cart()
    await c.validate()
    await page.waitForTimeout(2000)

    await ck.checkOut()
    await ck.fistName(data.firstName)
    await ck.lastName(data.lastName)
    await ck.pinCode(data.pinCode)
    await ck.completeCheckOut()
    await ck.successMsgValidation()

    await page.waitForTimeout(2000)


})