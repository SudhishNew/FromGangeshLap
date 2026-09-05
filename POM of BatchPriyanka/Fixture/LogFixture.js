import {test as base}  from "@playwright/test"
import {Login} from "../pages/loginPage.js"
import{excelReader} from "../utils/excel.js"
import {data} from "../pages/TestData/data.json"

export const MyTest=base.extend({

    LoginFixture: async({page}, use)=>{

        let l=new Login(page)
        const excelData = excelReader()
       /** if (!excelData || excelData.length === 0) {
            throw new Error('Excel reader returned no data for LoginFixture')
        }*/ 
        const d = excelData[0]
        await l.navigate(d.URL)
        await l.userAndPassword(d.UserName,d.PassWord)
        await l.dropDown()
        await l.agreeBtn()
        await l.signIn()
        await use(page)
    }
})