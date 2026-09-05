
let isTicket=true
function que(){
    return new  Promise ((resolve, reject)=>{
       if(isTicket!=true){
        resolve('I got a ticket')

       }else{
         reject('ticket is over')

       }

    })
}
que().then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})