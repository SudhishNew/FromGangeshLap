// for(let i=2;i<=20;i++){
// let count=0;
// for(let j=1; j<=i;j++){

//     if(i%j==0){
//         count++    //count=1 , count=2
//     }
// }
// if(count==2){
//     console.log(i)
// }
// }

function printStmnt(target) {
  if (target != 0) {
    console.log(target);
    printStmnt(target - 1);
  }
}

// printStmnt(10);

let a = "listen";
let b = "silene";

let x = a.split("").sort().join("");
let y = b.split("").sort().join("");

let result = x === y ? "Anagram" : "Not Anagram";
// console.log(result);

// pangram pgm input

// let input = "The quick brown fox jumps over the lay dog".toLowerCase();
// let arr=input.split('')
// // let arr = new Array(26);
// // console.log(arr.length);
// // let count=0;

// for (let i = 0; i < arr.length; i++) {

//   for(let j=i+1; j<arr.length;j++){
//  if(arr[i]==arr[j]){
//   arr[j]='*'

// }
//   }

// }

// console.log(arr);

// let ar=''
// for(let k=0; k<arr.length;k++){
//   if(arr[k]!='*'){
//     // ar=arr[k]
//     // console.log(arr[k])
//     ar+=arr[k]
//   }
// }
// console.log(ar)
// let org=ar.split('')
// let count=0
// for(let i=0;i<org.length;i++){
//   if(org[i]>='a'  && org[i]<='z' && org[i]!=' '){

//     count++
//   }
// }
// if(count==26){
//   console.log('Panagram')
// }else{
//   console.log('Not a panagram');

// }

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let pattern ="";
  for (let j = 1; j <= i; j++) {
    pattern +="* ";
  }
  console.log(pattern);
}
