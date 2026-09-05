//array Methods
let a=[1,2,3,4,5]
let b=[6,7,8]
// for(let i in a){
//     console.log(i)
// }

// a.forEach((i)=>{
//     console.log(i);
    

// })
// let a=[1,2,3,4,5]

const evry=a.filter((i)=>i%2==0)
console.log(evry);

const mp=a.map((i)=>i+2)
console.log(mp)

const rdc=a.reduce((i,acc)=>acc*i)
console.log(rdc);





