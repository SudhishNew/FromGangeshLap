// setTimeout(()=>{
//     console.log('wait')
// },2000)

// console.log("cant wait")

async function prom(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
        resolve("wait")
       },2000)
    })
}

async function nonProm(){
    console.log("can wait")
}
 await prom().then((msg)=>{
    console.log(msg)
 })
 await nonProm()