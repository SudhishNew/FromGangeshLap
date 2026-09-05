import Dad from "./Parent.js"

class Son extends Dad{
    payyan(){
        console.log("last son")
    }
}

let s=new Son()
s.dady()