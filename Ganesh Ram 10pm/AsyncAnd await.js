function print1(){
    console.log("Print one")
}
print1()
async function print2(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("Print two")
        resolve()
    },2000)
   })
}
await print2()

async function print3(){
    console.log("Print three")
}
// await print2()
await print3()

