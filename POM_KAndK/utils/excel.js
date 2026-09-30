import XLSX from "xlsx"

export function excelReader(){
    const xlPath='testData/TDForKandK.xlsx'     //path of the xl file
    const xlWorkBook=XLSX.readFile(xlPath)     //to read the xl file
    // const sheetName=xlWorkBook.SheetNames[0]    // to mention the sheet name
    const sheet=xlWorkBook.Sheets[xlWorkBook.SheetNames[0]]   // to mention the sheet
    const xlData=XLSX.utils.sheet_to_json(sheet)  //to convert sheet to json 
    return xlData;
}
