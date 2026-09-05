/**variables
def:  it is a container to store data **/

// types : var, let, const
// var => its a global scope
var a=10  
    a=11  //can be reassign
var a=12  //can be redeclare
// console.log(a)

// let => its a block scoped 
 let b=100
     b=101 //can be reassign
// let b=102 // cannot be redeclare
// console.log(b);

// const => its a block scoped 
 const c=1000
    //    c=1001// connot be reassign
// const c=1002// cannot be redeclare
// console.log(c);

{
    const v=1000
    console.log(v)
}
console.log(v)









