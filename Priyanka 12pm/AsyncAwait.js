//async Await

async function wait(){
   return new Promise((resolve)=>{ 
    setTimeout(()=>{
        console.log("please wait")
        resolve('wait')
    },2000)
})
}

async function prints(){
    console.log('ok im waiting')
}
// await wait()
await wait().then((msg)=>{
    console.log(msg)
})
await prints()