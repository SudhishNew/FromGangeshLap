//if

// let age1: number=24

// let age2:number=15

// if(age2>18){    //true block

//     console.log("eligible to vote");
    
// }

//if else

// let cibil1:number=750

// let cibil2: number=648

// if(cibil2>740){  //true block

//     console.log("eligible for loan");
    
// }else{
//     console.log("not eligible for loan");
    
// }

//if else if

let mark1: number=110
let mark2: number=43
if(mark1>80 && mark1<=100){
    console.log("grade A");
    
}else if(mark1>=60 && mark1<=80){

   console.log("grade B");    
}else if(mark1>=45 && mark1<60){

    console.log("grade C");    
}else if(mark1<45 && mark1>=0){
    console.log("fail");    
}else if(mark1>100 || mark1<0){
    console.log("out of range");
   
}

//switch case
let n=5

switch(n+4){

    case 1: 
    console.log("step 1");
    break

    case 2:
        console.log("step 2");
        break;
    case 3:
        console.log("step 3");    
        break;
    default:
        console.log("step default");
        
    
}


