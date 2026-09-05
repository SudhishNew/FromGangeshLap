import {test,expect} from "@playwright/test"
import { excelRead } from "./Utils/ExcelReader.js"
import {LoginPage} from "../tests/pages/loginpage.js"

       const loginData= excelRead();

       for(let d of loginData){

        test(`Data Driven of ${d.UserName} ${d.Password}`, async({page})=>{

        //     let logOBJ=new LoginPage(page);
        //    await  logOBJ.navigate();
        //    await  logOBJ.login(d.UserName,d.Password)

           console.log(d.UserName, d.Password);
           
        //    await expect(page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php')

        })
       }


