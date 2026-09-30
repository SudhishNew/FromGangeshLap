import XLSX from "xlsx"
export function excelReader(){

    const path="testData/PrashanthTestData.xlsx"   //xl file path

    const xlBook=XLSX.readFile(path)               //to read the xl file
    const sheetName=xlBook.SheetNames[0]           //mentioned sheet name
    const sheet=xlBook.Sheets[sheetName]           // mentioned sheet according to the sheet name
    const data=XLSX.utils.sheet_to_json(sheet)     //converted the sheet into json
    return data

}