
// setTimeout(()=>{
//     console.log('Venkata')
// },2000)

// console.log("Chalapathy")

//closure

function outer(){
    console.log('Outer Function')
    function inner(){
        console.log('Inner Function')
    }
    inner()
}

// outer()

//callback

function back(a){
    console.log('Original fucntion')
    a()
}

function call(){
    console.log('callback function')
}
back(call)
