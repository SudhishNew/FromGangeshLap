import {test,expect} from "@playwright/test"
import { LoginPage } from "./Pages/Login.js";
import logData from "../tests/Pages/TestData.json"
import {excelReader} from "../tests/Utils/ExcelReader.js"

const loginData=excelReader();
for(let DD of loginData){
    test(`Data driven from XL  ${DD.UserName} ${DD.Password} `, async({page})=>{
        const logOBJ=new LoginPage(page);
        await logOBJ.navigate(logData.url);
        await logOBJ.login(DD.UserName,DD.Password);
        await expect(page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php');

    })
}

