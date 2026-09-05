import{test as base} from "@playwright/test"
import { LoginPage } from "../pages/loginpage.js";
import { Search } from  "../pages/searchHotel"
import {data} from "../TestData/DDTestdata.json"

// export const MyTest=base.extend({
//     loginFixture:async({page},use)=>{
//         const loginObject=new LoginPage(page);
//         await loginObject.navigate();
//         await loginObject.login(data.UserName,data.Password);
//         await use(page)
//     },
//      searchfixture: async({page},use)=>{
//        const searchob=new Search(page)
//         await searchob.SearchHotel(data.location,data.hotels,data.roomtype,data.Roomnos,data.indate,data.outdate,data.Adults,data.child)
//         await searchob.submitBtn()
//         await use(page)
//       }
    

// })
export const MyTest=base.extend({
  loginfixture:async({page},use)=>{
  const lo=new LoginPage(page);
  await lo.navigate()
  console.log(data)
  await lo.login(data.UserName, data.Password)
  await use(page)
  
}
})
