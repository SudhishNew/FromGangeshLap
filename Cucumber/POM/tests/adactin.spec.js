import{test,expect} from "@playwright/test"
// import { LoginPage } from "./Pages/Login.js";
// import { Search } from "./Pages/SearchPage.js";
import { Search } from "./pages/searchHotel.js";
import logData from "../tests/TestData/DDTestdata.json"
import {MyTest} from "../tests/fixture/LoginFixture.js"
// import { searchTest } from "../tests/fixture/SearchFixture.js";


// test('Adactin', async({page})=>{

//     let loginObject=new LoginPage(page);
//     await loginObject.navigate(logData.url);
//     await loginObject.login(logData.UserName,logData.Password);

//     let searchObj= new Search(page);
//     await searchObj.SearchHotel({location:logData.location,
//        hotels: logData.hotels,
//        roomtype: logData.roomtype,
//        Roomnos: logData.Roomnos,
//        indate:logData.indate,
//         outdate:logData.outdate,
//         Adults: logData.Adults,
//         child:logData.child})
//     await searchObj.submitBtn();

//     await page.waitForTimeout(3000)
     
    
// })

MyTest("Adactin", async({loginfixture})=>{

//     //  let loginObject=new LoginPage(page);
//     // await loginObject.navigate(logData.url);
//     // await loginObject.login(logData.UserName,logData.Password);

//     // let searchObj= new Search(loginFixture);
//     // await searchObj.SearchHotel({location:logData.location,
//     //    hotels: logData.hotels,
//     //    roomtype: logData.roomtype,
//     //    Roomnos: logData.Roomnos,
//     //    indate:logData.indate,
//     //     outdate:logData.outdate,
//     //     Adults: logData.Adults,
//     //     child:logData.child})
//     // await searchObj.submitBtn();

    await loginfixture.waitForTimeout(3000)
    // await searchfixture.waitForTimeout(3000)
})
// searchTest(" searchHotel", async({loginFixture,searchfixture})=>{
//     await loginFixture.waitForTimeout(3000)
//     await searchfixture.waitForTimeout(3000)
// })