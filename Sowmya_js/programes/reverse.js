let a="madam"
let reverse=""
let rev=a.split('')
console.log(rev);

for (let i=a.length-1;i>=0;i--){    //0,1,2,3,4,5,6
    reverse+=a[i]  
}
console.log(reverse);
if(a==reverse){
    console.log("its a palindrome");    
}else{
    console.log("not a palindrome");
    
}


