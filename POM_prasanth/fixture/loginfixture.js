import {test as base} from "@playwright/test"
import { LoginPage } from "../Pages/login"
import {data} from "../testData/details.json"

export const myTest=base.extend({
    LogFixture : async ({page}, use)=>{

        const l=new LoginPage(page)
        await l.navigate(data.URL)
        await l.userName(data.userName)
        await l.password(data.password)
        await l.login()
        await use(page)


    }
})

