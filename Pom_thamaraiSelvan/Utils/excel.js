import XLSX from "xlsx"

export function excelReader(){
    const path="testdata/ThamaraiSelvan_Testdata.xlsx"    //path of the excel file
    const excelBook=XLSX.readFile(path)                   //to read the complrete excel file
    const sheetName=excelBook.SheetNames[0]               // to get the name of the sheet by using index position
    const sheet=excelBook.Sheets[sheetName]               //to mention the sheet by using sheetName
    const data=XLSX.utils.sheet_to_json(sheet)            // to convert the sheet into json
    return data

}