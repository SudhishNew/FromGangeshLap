import {test} from "@playwright/test"
import {LoginPage} from '../Pages/login'
import {excelReader} from '../utils/excel'
import {ProductPage} from '../Pages/Product'

const xlDetails=excelReader()    //xlData
console.log(xlDetails);

for(let d of xlDetails){

    test(d.UserName, async({page})=>{

        let l=new LoginPage(page)
        let p= new ProductPage(page)
        
        await l.navigate()
        await l.userName(d.UserName)
        await l.pwd(d.Password)
        await l.login()

        await p.addToCart()
        await page.waitForTimeout(2000)

})
    
}






