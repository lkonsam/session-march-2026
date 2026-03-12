
// var student = [
//       {
//        name: "Kevin",
//        rollNumber: 25,
//        stream: "PCM"
//       },
//       {
//         name: "Martin",
//         rollNumber: 20,
//         stream: "PCM"
//       },
//       {
//         name: "Malem",
//         rollNumber: 1,
//         stream: "Arts"
//       },
//       {
//          name: "Robert",
//          rollNumber: 30,
//          stream: "PCB"
//       }
// ];


// student.sort(
//     ( a, b) => {
//         return a.name.localeCompare(b.name) > 0 ? -1 : 1;
//     }
// );
// console.log(student);




// const obj1 = {
//     a: 10,
//     b: 20
// };

// const obj2 = obj1; //shallow copy 
// obj2.a = 40; 


// console.log(obj1); // {a: 40, b: 20}
// console.log(obj2); // {a: 40, b: 20}

// const obj1 = {
//     a: 10,
//     b: 20,
//     c: {d: 30}
// };

// // const obj2 = {...obj1}; //spread operator  it is deep copy 
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.c.d = 40; 


// console.log(obj1); // {a: 40, b: 20}
// console.log(obj2); // {a: 40, b: 20}


// const obj1 = {
//     a: 10,
//     b: 20
// };

// Object.freeze(obj1); //freezing the property of obj1

// obj1.a = 40;
// console.log(obj1);


// const std = {
//     name: "Konsam",
//     roll: 20
// };

// Object.seal(std);

// std.company = "Tomba";

// console.log(std);




// ES6 feature
// Arrow Function

//  () => 1; 

//  () => {
//     //multiple statement
//     //return 1;
//  }


// console.log(sum(1, 3));


// function sum(a, b){
//     return a+b;
// }


// const sum = (a, b) => a+b;
// const sum = (a, b) => {
//     return a+b;
// };

// console.log(sum(1, 3));



function a(callFn){
    this
    callFn();
}


//statmen]]]

const b = () => {
}
a(b);