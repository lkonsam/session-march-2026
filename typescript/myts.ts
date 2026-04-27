//number, boolean, string, null, undefined, void, unknown, any

// const, let, var
// let myVar : number = 4;
// myVar = 10;


// let city = "Bangalore"; //by default city became string
// city = 4; //it gives error


// Array
// let myArr : number[];
// myArr = [1,3,6];

// let myArr : Array<number>;
// myArr = [1,3,6];

// let city: unknown;
// city = 5; //for unkown the datatype of the assign value so here is number
// console.log(typeof(city)); //number
// city = "Bangalore"; //for unkown the datatype of the assign value so here is string
// console.log(typeof(city)); //string
//before using an unknown variable check its type

// let myVar: any;
// myVar = 5; //for unkown the datatype of the assign value so here is number
// console.log(typeof(myVar)); //number
// myVar = "Bangalore"; //for unkown the datatype of the assign value so here is string
// console.log(typeof(myVar)); //string
//we can use directly



// function sum (a: number, b: number) : number {
//     return a+b;
// }


// const multiply = (a: number, b: number): number => {
//   return a * b;
// };

// function logMessage(msg: string): void { //if no return
//   console.log(msg);
// }

// function greet(name: string, age?: number): string {
//   if (age) {
//     return `Hello ${name}, age ${age}`;
//   }
//   return `Hello ${name}`;
// }



// function createUser(user: { name: string; age: number }  ): string {
//   return `${user.name} is ${user.age} years old`;
// }

// type UserType = { name: string; age: number };
// function createUser(user: UserType ): string {
//   return `${user.name} is ${user.age} years old`;
// }
// type CreateUserType = (user: { name: string; age: number }  ) => string;

// const createUser: CreateUserType = (user) => `${user.name} is ${user.age} years old`;

// type MyObjType = {
//     name: string,
//     roll: number
// };
// type MyObjType = { //error type cannot be redeclare
//     std: number
// };


// let myObj: MyObjType = {
//     name: "Konsam",
//     roll: 140
// };


interface MyObjInterface {
    name: string,
    readonly roll: number
};

interface MyObjInterface { //by default it extend the existing interface with same name
    std?: number, //? == optional data
};

let myObj: MyObjInterface = {
    name: "Konsam",
    roll: 140,
};
myObj.std = 5;
// myObj.roll = 3; //Error because it is only readonly so the first assign value cannot be change

