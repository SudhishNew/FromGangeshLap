import XLSX  from 'xlsx'

export function excelReader(){

    const path="tests/TestData/utils.xlsx";
    const workBook=XLSX.readFile(path);
    const sheetName= workBook.SheetNames[0];
    const sheet=workBook.Sheets[sheetName];
    const data= XLSX.utils.sheet_to_json(sheet)
     return data;

}


