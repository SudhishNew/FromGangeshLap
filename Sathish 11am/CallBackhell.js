//callBackHell
setTimeout(()=>{
    console.log("Task 1")
        setTimeout(()=>{
            console.log("task 2")
                setTimeout(()=>{
                    console.log("Task 3")
                        setTimeout(()=>{
                            console.log("Task 4")
                        },1000)
                },1000)
        },1000)
},1000)