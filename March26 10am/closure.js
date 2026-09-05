// function outer() {
//     let outerVar = "I'm in the outer scope!";
//     function inner() {
//         console.log(outerVar); 
//         outerVar = "Updated"
//     }
//       return inner  
// }
// const closure = outer(); 
// closure();

function fun(){
    console.log("outer")
    function f(){
        console.log("inner")
    }
    f()
}

fun()