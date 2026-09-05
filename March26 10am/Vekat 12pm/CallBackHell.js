//CallBackHell

setTimeout(()=>{
    console.log("task 1")
        setTimeout(()=>{
            console.log("task 2")
                setTimeout(()=>{
                    console.log("task 3")
                        setTimeout(()=>{
                            console.log("task 4")
                        },2000)
                },1000)
        },1000)
},5000)