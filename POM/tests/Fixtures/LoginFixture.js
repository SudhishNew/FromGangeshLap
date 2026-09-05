import{LoginPage} from "../pages/Login.js"
import {test as base} from "@playwright/test"
import {data} from "../TesData/Data.json"

// export const myTest=base.extend({
// loginFixture: async({page},use)=>{
//     const l=new LoginPage(page)
//     await l.navigate()
//     await l.enterUsernamePassword(data.user, data.pwd)
//     await use(page)
// }
// })

   export const my
   = base.extend({
      loginfixture:  async ({page}, use)=>{
            const l=new LoginPage(page)
            await l.navigate()
            await l.enterUsernamePassword(data.user, data.pwd)
            await use(page)
        }
    })
