//hoisting

hoist()
function hoist(){

    console.log("Hoisting")
}

// //var
// console.log(a)
// const a=10

function outer(){
    console.log("outer function ")
   function inner(){
        console.log("inner function")
        function inn(){
            console.log("inn function")
        }
        inn()
    }
    inner()
}
// outer()


//callback
function call(a){ //a=back()
    console.log("call function")
    a()
}

function back(){
    console.log("back function")
}
call(back)

