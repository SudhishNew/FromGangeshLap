//promise

let istickect=100
let que=function (){
    return new Promise((resolve,reject,pending)=>{
        if(istickect==true){
            resolve('yes i got a ticket')
        }else if(istickect==false){
            reject('ticket is over')
        }
        


    })
}


// que().then((message)=>{
//     console.log(message)

// }).catch((negativemsg)=>{
//     console.log(negativemsg)

// })

// Promise.allSettled(que).then((message)=>{
//     console.log(message)
// })