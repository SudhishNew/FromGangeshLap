// callback - it is a function that passed an argument as a to another function then can be execute later


// function number(a,b, c){
//     console.log(a+b);
//     c()
// }

// function welcome(){
//     console.log("Hello welcome");
// }

number(10,20, welcome);

function sum(a){  //a=back()
    console.log("call function")
    a()
}
 function back(){
    console.log("back function")
 }
 sum(back)
