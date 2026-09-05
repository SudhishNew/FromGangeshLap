// setTimeout(()=>{
//     console.log("wait")
// },1000)
// console.log("dont wait")

 async function wait(){
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("wait")
            resolve("waiting")
        },2000)
       
    })
}
async function prints(){
    
console.log("Im waiting")
}

await wait().then((msg)=>{
    console.log(msg)
})
await prints()
