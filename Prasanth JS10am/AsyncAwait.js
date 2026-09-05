//AsyncAwait
 
function fun1(){
    console.log(1);
}


async function fun2(){
    return new Promise((resolve)=>{
         setTimeout(()=>{
            console.log(2);
            resolve()
           
        },2000)
    })
      
}
function fun3(){
    console.log(3);
}

function fun4(){
    console.log(4);
}
fun1()
await  fun2()
fun3()
fun4()
