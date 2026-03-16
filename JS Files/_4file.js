// Agenda
// Global Scope
// Local Scope
// Lexical Scope
// Hoisting
// Callback
// Closure


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

// const arr = [ "a", "b", "c", "d", "Tom", "Cat"  ];

// //take out part of array without changing the original array

// const arrSlice = arr.slice(1,    4 ); //index 4 will not be include in the 

// console.log("Slice part: ",arrSlice);
// console.log("Slice ori: ", arr);

// const arrSplice = arr.splice(1,  3, "Chaoba", "Abhay"); 

// console.log("Splice part: ",arrSplice);
// console.log("Splice ori: ", arr);



// const obj1 = {
//     a: 10,
//     b: 20
// };

// // Object.freeze(obj1); //freezing the property of obj1

// obj1.a = 40;
// obj1.c = 40;
// console.log(obj1);


// const std = {
//     name: "Konsam",
//     roll: 20
// };

// Object.seal(std);

// delete std.roll;
// std.company = "Tomba";
// std.name = "Parbhat";
// console.log(std);


// const x = 10; //global scope


// function sum(a){
//      const x = 5;
//     console.log(a + x);
// }


// // sum(1);

// if(1){
//     const x = 5;
//     console.log(1 + x);
// // }
// var i;

// for(var i=0; i<3; i++){
//     myCall(i); 
// }

// function myCall(i){
//     setTimeout(() => {
//         console.log(i);
//     }, 100 * i);
// }


// console.log("CTK");




// searching in an array : Time complexity O(n), Omega(1)


// Map,  Big o of (1)
// Set  Big O of 1


// const myMap = new Map(); 

// //inserting value
// myMap.set( "a", 6   ); 
// myMap.set( "b", 6   ); 
// myMap.set( "c", 6   ); 
// myMap.set( "d", 6   ); 

// myMap.set( "b", 16   ); 
// // myMap.delete( "b" ); 


// // console.log(   myMap.get("b") );
// console.log(   myMap.has("b") );
// console.log(   myMap.size );


// const arr = [1, 4, 1, 3, 2, 7, 5, 2, 1, 3, 7];

// const myMap = new Map();
// for(const ele of arr){ //n times
//     myMap.set(  ele,   (  myMap.get( ele )  ||   0 ) + 1   );     //1 times  
// }
// console.log(  myMap   ); 


// Set


// const mySet = new Set();

//inserting
// mySet.add(  "a" );
// mySet.add(  "a" );
// mySet.add(  "a" );
// mySet.add(  "a" );
// mySet.add(  "a" );
// mySet.add(  "b" );
// mySet.has("a");
// mySet.delete("a");
// console.log(mySet);

// for(const ele of arr){ //n times
//     mySet.add(ele);
// }
//  console.log(mySet);
//  console.log(mySet.size);












