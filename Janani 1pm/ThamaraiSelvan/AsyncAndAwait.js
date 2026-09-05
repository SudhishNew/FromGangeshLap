
function fun1(){
  console.log(1)
}

async function fun2(){
  return new Promise((resolve)=>{
 setTimeout(()=>{
  console.log(2)
  resolve('im waiting')
},2000)
  })

}

function fun3(){
  console.log(3)
}
fun1()
await fun2().then((msg)=>{
  console.log(msg)
})
fun3()

