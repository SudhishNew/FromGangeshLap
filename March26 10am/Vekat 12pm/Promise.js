
let isTicket=false
function que(){
    return new Promise((resolve,reject)=>{

        if(isTicket){
            resolve('I got a ticket')
        }else{
            reject('its over')
        }

    })
}

que().then((result)=>{
    console.log(result)
}).catch((eror)=>{
    console.log(eror)
})