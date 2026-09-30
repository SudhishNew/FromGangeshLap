// /**var
// can be reassign
// can be redeclare**/

// var a=10     //assignment and declaration
//     a=11     //can be reassign
// var a=12     //can be redeclare
// // console.log(a)

// /**let
// can be reassign
// cannot be redeclare**/

// let b=100      //assignment and declaration
//     b=101      //can be reassign
// // let b=102      //cannot be redeclare
// // console.log(b);

// /**const
// cannot be reassign and redeclare**/

// const c=1000    //assignment and declaration
// //   c=1001    //cannot reassign
// // const c=1002


// {

//     const v=1000
//     console.log(v);
    

// }
// // console.log(v);


// let t: string|null|number=10



// let arr:any[] = [12,23,4,"sudhish", false]

function infiniteLoop(): never {
    while (true) {
        console.log("Running...");
    }
}
infiniteLoop()

