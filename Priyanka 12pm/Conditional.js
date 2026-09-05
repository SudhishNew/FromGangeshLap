//if
// let a=10
// let b=5
// if(a<b){

//     console.log("yes")
// }

//if else

    // if(a<b){
    //     console.log("a is big")
    // }
    // else{
    //     console.log("b is big")
    // }

    //if else if or if else ladder

    let mark =-10
    if(mark>80  && mark<=100){
        console.log("A grade")

    }else if(mark>60 && mark<=80){
        console.log("B grade")

    }else if(mark>=45 && mark<=60){
         console.log("C grade")
    }else if(mark<45 && mark>=0) {
        console.log("Fail")
    }else{
        console.log("out of range")
    }

    // switch case

    let n=5

    switch(n-3){
        case 1:
            console.log("Task 1");
            break;
        case 2:
            console.log("task 2");
            break;
        case 3:
            console.log("Task 3")
            break;
        default:
            console.log("Task default")

    }

    // nested

    // Ternary 
    let a=10
    let b=5
    let ter=a>b? "statement 1": "statement 2";
    console.log(ter)
    

