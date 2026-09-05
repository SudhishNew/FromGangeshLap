/**dataType
def: it defines what kind of data that will holds by the variable

types: 1. Primitive
       2. Non- Primitive**/

//primitive  => single variable can store single data
//non primitive => single variable can store Multiple data

//primitive types
 
//number
let a=10.5 //numeric 
console.log(typeof a);

//string
let b='Prasanth@123' 
console.log(typeof b);

//boolean
let c=false
console.log(typeof c);

//null 
let d=null
console.log(typeof d);

//undefined  
let e
console.log(e);

//non primitive
//array => collection of data togather in a single unit
let s=[10,20,30,40]

s[4]=50
s.push(60,70,80)
console.log(s[2]);
console.log(s)

//object
let student={
       name:'Prasanth',
       id: 1,
       job: "QA",
       salary:'70k'
}



//accesing notations

student.company="TCS" //added a record
student.salary="80K"  //update the record
delete student.id     //delete the record
console.log(student)
console.log(student['job']);

//inbuild methods

console.log(Object.entries(student))









    