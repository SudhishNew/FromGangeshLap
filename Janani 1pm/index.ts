/** variables */

let userName : string = "Sudhish";
let age :number = 27;
let salary : number = 1.000;
let isEmployee : boolean = false;

/** Objects */

let empObj : {
    id : number;
    name : string;
    salary : number;
    department : string;
} = {
    id: 101,
    name : "Prakash",
    salary : 50000,
    department : "Test"
}

console.log(empObj);


/** Arrays */

let empIds : (number | string |boolean)[] = [1,2,3,4,5,6,"good", false];
console.log(empIds);


/**interface */

interface Student {
    id : number;
    name : string
    parents? : {
        father_Name: string
        mother_Name : string
    }
    isPresent : boolean
}

let student : Student = {
    id :1001,
    name : "Yoka",
    parents:{
        father_Name : "Moka",
        mother_Name : "Joka"
    },
    isPresent : false
}

/** Enum */


console.log(Role.Admin);
console.log(Role.Manager);
console.log(Role.Tester);
console.log(Role.Developer);