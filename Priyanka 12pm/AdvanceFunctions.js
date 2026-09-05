//hoisting

// hoist()
// function hoist(){
//     console.log("Hoisting")
// }

// console.log(a)
// var a=10

//closure

function outer(){
    console.log("outer function")
    function inner(){
        console.log('Inner function')
    }
    inner()
}

outer()


