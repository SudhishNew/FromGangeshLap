// promise

let ticket=true
function queue(){
    return new Promise((resolve,reject)=>{

        if(ticket==false){
            resolve('I got a ticket')
        }else{
            reject('Ticket is over')
        }
    })
}

queue().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})