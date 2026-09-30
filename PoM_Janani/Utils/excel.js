import XLSX from 'xlsx'

export function excelReader(){

   const xlpath= "TestData/TestData_janani.xlsx"    //path of the excel file

   const xlBook=XLSX.readFile(xlpath)                //to read complete xl file

   const sheetName=xlBook.SheetNames[0]              // to get the name of the sheet

   const sheet=xlBook.Sheets[sheetName]              // to  mention the sheet according to the sheetName 

   const data=XLSX.utils.sheet_to_json(sheet)        //to convert the sheet into json

   return data

}