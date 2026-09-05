import{test,expect} from "@playwright/test"
import { LoginPage } from "./Pages/Login.js";
import { Search } from "./Pages/SearchPage.js";
import logData from "../tests/Pages/TestData.json"

test('Adactin', async({page})=>{

    let loginObject=new LoginPage(page);
    await loginObject.navigate(logData.url);
    await loginObject.login(logData.UserName,logData.Password);

    let searchObj= new Search(page);
    await searchObj.SearchHotel({location:logData.location,
       hotels: logData.hotels,
       roomtype: logData.roomtype,
       Roomnos: logData.Roomnos,
       indate:logData.indate,
        outdate:logData.outdate,
        Adults: logData.Adults,
        child:logData.child})
    await searchObj.submitBtn();

    await page.waitForTimeout(3000)
     
    
})