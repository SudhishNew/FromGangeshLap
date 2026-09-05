// callback
  
function back(cb){
    console.log("its an 1st fuction")
    cb()
}

function call(){
    console.log("its a callback function")
}

// back(call)

//callbackHell

setTimeout(()=>{
    console.log("task 1")
        setTimeout(()=>{
            console.log("task 2")
                setTimeout(()=>{
                    console.log("task 3")
                        setTimeout(()=>{
                             console.log("tsak 4")
                        },1000)
                },1000)
        },1000)
},1000)
