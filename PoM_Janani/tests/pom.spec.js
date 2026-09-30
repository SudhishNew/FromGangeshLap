import {test} from "@playwright/test"
import {LoginPage} from '../pages/login'
import {ProductPage} from '../pages/product'
import {data}  from '../TestData/data.json'
console.log(data);


test('pom', async({page})=>{

   let l= new LoginPage(page)
   let p=new ProductPage(page)
   await l.navigate(data.Url)
   await l.userName(data.user)
   await l.pwd(data.pwd)
   await l.login()
    await page.waitForTimeout(2000)

   await p.selectproduct()
   await p.cart()
   await p.checkOut()
   await p.enterDetails(data.FirstName,data.LastName,data.pinCode)
   await p.completeOrder()

   await page.waitForTimeout(3000)
  
})