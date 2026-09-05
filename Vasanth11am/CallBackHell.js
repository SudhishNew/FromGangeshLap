//callbackHell

setTimeout(()=>{
    console.log("task 1")
        setTimeout(()=>{
            console.log("task 2")
                setTimeout(()=>{
                    console.log("task 3")
                        setTimeout(()=>{
                            console.log("task 4")
                        },4000)
                },2000)
        },3000)
},1000)