//promise
let isTicket=true;
function que(){
    return new Promise((resolve,reject,pending)=>{
       if(isTicket==false){
        resolve("i got a tikect")
       }else{
        reject("Ticket is over ")
       }

    })
}

que().then((mesg)=>{
    console.log(mesg)
}).catch((err)=>{
    console.log(err)

}).finally(()=>{
    console.log(" go to home")
})

