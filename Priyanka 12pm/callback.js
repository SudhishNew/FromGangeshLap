//callback
// function  fun(fn){
//     console.log("Fun function")
//     fn()

// }

// function fun2(){
//     console.log("child function")
// }
// fun(fun2)

//call backHell

setTimeout(()=>{
    console.log('task 1')
        setTimeout(()=>{
            console.log("task 2")
                setTimeout(()=>{
                    console.log('task 3')
                        setTimeout(()=>{
                            console.log('task 4')
                        },1000)
                },1000)
        },1000)
},1000)