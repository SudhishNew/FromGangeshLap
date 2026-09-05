function call(cb){
    console.log("call function")
    cb()

}

function back(){
    console.log("callback function")
}
// call(back)

//callback hell
 
setTimeout(()=>{
     console.log("task 1")
        setTimeout(()=>{
            console.log("task 2")
                setTimeout(()=>{
                    console.log("task 3")
                        setTimeout(()=>{
                            console.log("task 4")
                        },1000)
                },1000)
        },1000)
},1000)

