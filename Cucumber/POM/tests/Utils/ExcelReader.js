import  XLSX  from "xlsx";

export function excelRead(){
         const xlPath= "tests/TestData/utils.xlsx"; // relative path of xls
         const workbook=  XLSX.readFile(xlPath); //read xls file
         const sheetname=  workbook.SheetNames[0]; //locating the sheet based on indexing
         const sheet=  workbook.Sheets[sheetname];
         const data=  XLSX.utils.sheet_to_json(sheet);
         return data;
            
            
}