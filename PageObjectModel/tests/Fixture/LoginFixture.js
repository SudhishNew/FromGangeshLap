
import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/Login.js"
import {Details} from "../TestData/data.json"

    export const MyTest= base.extend({
        logFixture: async({page}, use)=>{
            const l=new LoginPage(page)
            await l.navigate(Details.baseURL)
            await l.user(Details.Uname)
            await l.pwd(Details.pwd)
            await l.dd()
            await l.temrs()
            await l.signinbtn()
            await use(page)

        }
        })