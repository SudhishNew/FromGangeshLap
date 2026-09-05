//async and await

let fun1=()=>{
 console.log('Step 1')
}
let fun2= async()=>{
 return new Promise((resolve)=>{
    setTimeout(()=>{
    console.log("step 2")
    resolve()
},1000)
 })
}
let fun3=()=>{
 console.log("step 3")
}
fun1()
await fun2()
fun3()