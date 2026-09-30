import {test as base} from "@playwright/test"
import {LoginPage} from "../Pages/login"
import {data} from "../testData/Details.json"

 export const myTest=base.extend({

    LoginFixture: async({page}, use)=>{

        const l=new LoginPage(page)
        await l.navigate(data.URL)
        await l.userName(data.uname)
        await l.pwd(data.pswd)
        await l.login()
        await use(page)
    }
  })