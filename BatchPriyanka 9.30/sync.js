//sync

let fun1=()=>{

    console.log("Step 1")
}

let fun2=()=>{
    setTimeout(()=>{      
 console.log("Step 2")
    },1000)
}

let fun3=()=>{

    console.log("Step 3")
}
fun1()
fun2()
fun3()