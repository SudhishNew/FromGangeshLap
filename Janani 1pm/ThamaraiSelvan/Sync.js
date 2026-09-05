
function fun1(){
    console.log(1)
}
async function fun2(){
   setTimeout(()=>{
    console.log(2)
   },2000)
}
function fun3(){
    console.log(3)
}
fun1()
await fun2()
fun3()


