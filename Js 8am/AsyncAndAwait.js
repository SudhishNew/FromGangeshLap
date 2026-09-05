//

// function fun1(){
//     console.log("Fun 1")
// }
// async function fun2(){
//  return new Promise((resolve)=>{
//      setTimeout(()=>{
//       console.log("Fun 2")
//       resolve("")
//   },2000)
//  })

// }
// async function fun3(){
//     console.log("Fun 3")
// }
// fun1()
// await fun2().then((msg)=>{
//     // console.log(msg)

// })
// await fun3()


//promise


function que(){
    return new Promise((resolve)=>{
        resolve("i got a ticket")
    })
}
que().then((msg)=>{
    console.log(msg)
})


//async await
function fun1(){
    console.log("one")
}
async function fun2(){
 return new Promise((resolve)=>{
      setTimeout(()=>{
     console.log("two")
     resolve()
   },2000)

 })
}
 function fun3(){
    console.log("three")
}
fun1()
await fun2()
await fun3()