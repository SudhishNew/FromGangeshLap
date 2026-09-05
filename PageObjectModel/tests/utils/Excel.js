import   XLSX from "xlsx"

  export function excelReader(){
    const xlpath="tests/TestData/TestCredentials.xlsx"  //relative path 
       const workbook=  XLSX.readFile(xlpath)   //to read a xl file
       const sheetname=workbook.SheetNames[0]//to locate sheet using index
       const sheet=workbook.Sheets[sheetname]
       const xldata=XLSX.utils.sheet_to_json(sheet)   //to convert sheet to json
       return xldata;
       

  }

