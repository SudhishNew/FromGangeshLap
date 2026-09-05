//promise
let isTicket=true
function que(){
    return new Promise((resolve, reject)=>{
        if(isTicket==false){
            resolve("i got a ticket")
        }else{
            reject("Ticket is over")
        }
    })
}
que().then((msg)=>{
    console.log(msg)
}).catch((negmsg)=>{
    console.log(negmsg)
})