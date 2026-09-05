let num=100;
// let count=0; //1,2,3

for(let j=1;j<=num;j++){//1,2,3,4
    let count=0; //1,2,3
for(let i=1; i<=j;i++){
    if(j%i==0){

        count++;
    }
   
}
if(count==2){
        console.log(j)
    }

}

//  if(count==2){
//         console.log("its a prime")
//     }else{
//         console.log("its not a prime")
//     }