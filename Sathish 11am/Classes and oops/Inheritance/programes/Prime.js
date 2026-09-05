let limit=50
let result='';

for (let i=1;i<=limit;i++){
let count=0
for(let j=1; j<=i;j++){  //1=>count=1, 2=>count=1, 3=>count=1, 4=>count=1,5=>count=1, 6=> count=1,7 => count=2

    if(i%j==0){
        count++
    }
}
if(count==2){
//    process.stdout.write(i + " ");

result += i+ " "

}

}
console.log(result)
console.log("number")