let num=8
let count=0
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++ //i=1=>count=1, i=5 => count=2
    }
}
if(count==2){
    console.log("prime")
}else{
    console.log("not a prime")
}