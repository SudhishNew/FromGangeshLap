// import {test as base} from "@playwright/test"  
//     import { Search } from "../pages/searchHotel"
//     import data from "../tests/TestData/DDTestdata.json"


export const MyTest= base.extend({
  searchfixture: async({page},use)=>{
   const searchob=new Search(page)
    await searchob.SearchHotel(data.location,data.hotels,data.roomtype,data.Roomnos,data.indate,data.outdate,data.Adults,data.child)
    await searchob.submitBtn()
    await use(page)
  }

})