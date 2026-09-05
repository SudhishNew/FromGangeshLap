//promise
let isticket=false
function que(){
    return new Promise((resolve, reject)=>{
        if(isticket){
            resolve("i got a ticket")
        }else{
            reject("ticket is over")
        }
    })
}
que().then((msg)=>{
    console.log(msg)
}).catch((errormsg)=>{
    console.log(errormsg)
})