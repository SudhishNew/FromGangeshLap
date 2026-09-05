// //promise

// let isticket=false
// function que(){
//     return new Promise((resolve,reject)=>{
//         if(isticket){
//             resolve("got a ticket ")
//         }
//         else{
//             reject("ticket is over")
//         }
//     })
// }
// que().then((msg)=>{
//     console.log(msg)
// }).catch((errormsg)=>{
//     console.log(errormsg)
// })


//promise

function que(){
    return new Promise((resolve,reject)=>{
        resolve("im waiting")

    })
}
que().then((msg)=>{
    console.log(msg)
})