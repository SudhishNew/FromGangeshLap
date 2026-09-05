import XLSX from "xlsx"
export function excelReader(){
const path="pages/TestData/TestDataCredentials.xlsx"
const workBook=XLSX.readFile(path)       // to read the excle file
const sheetName=workBook.SheetNames[0]   //  it reffers only the sheet name
const sheet=workBook.Sheets[sheetName]  // it reffers the specific sheet
const xlData=XLSX.utils.sheet_to_json(sheet)    // to convert sheet to json
return xlData;

}