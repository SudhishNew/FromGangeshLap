
let Ticket=false
function que(){
    return new Promise((resolve, reject)=>{
        if(Ticket==true){
            resolve('I got a ticket')
        }else{
            reject('Ticket is soldout')
        }
     
    })
}
que().then((msg)=>{
    console.log(msg)
}).catch((errmsg)=>{
    console.log(errmsg)
})