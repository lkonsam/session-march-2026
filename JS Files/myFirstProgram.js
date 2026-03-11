
// const name;

// name = "John"; //constant variable should be initialized at the time of declaration

// console.log(name);


// name = "John"; //global variable  temporal dead zone

// console.log(name); 
// let name; //declaration is here


// name = "John"; //hoisting
// console.log(name); 
// var name; //declaration is here 


// let name = "Konsam";

// console.log(name[1]); //o

// name[1] = "L"; //Strings are immutable in JavaScript, so this operation will not change the string

// console.log(name[1]); //o

// console.log(name.charAt(1)); //o

// console.log(name); //Konsam


// const para = "My name is Konsam and my first name is also Konsam";

// console.log(para.length);  //50

// console.log( para.indexOf("name")    ); //3
// console.log( para.lastIndexOf("name")    );  //31
// // console.log( para.indexOf("cattle")    );  // -1 if not found


// const name = "Konsam";
// const age = 30;

// console.log("My name is " + name + " and \n I will be " + (age + 1) + " years old."); //String concatenation

// console.log(`My name is ${name} and 
//     I will be ${age + 1} years old.`); //Template literals (ES6)



// Array

// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.push("Mango"); 
// fruits.unshift("Strawberry");

// console.log(  fruits.pop() );
// console.log ( fruits.shift() );





// console.log(fruits);


//array slice and splice

// const num = [1, 2, 3, 4, 5];

// const sliced = num.slice(1, 4); //( ( index from which to start slicing) , (index at which to end slicing but not including it) )
// console.log(sliced);
// console.log(num);

// const spliced = num.splice(1, 0,  99 , 100, 12, 45, 56   ); // actually deletes or modifies the original array
// console.log(spliced);
// console.log(num);

// num.reverse(); //reverses the original array

// num[3] = 6;

// console.log(num);

// const num = [76, 51, 67, , 46, 52, false, null, undefined, "Helo", 0, 56];


// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// for (const n in num) {
//     console.log(n);
// }

// for (const n of num) {
//     console.log(n);
// }



 const num = [76, 51, 67, 46, 52, 0, 56, 11, 101];


//  num.sort(); //dictionary order sorting (lexicographical sorting)

//  num.sort( (a, b ) => a>b ? -1 : 1 );  // 1 and -1

//  console.log(num);

// console.log(num.includes(52)); //true
// console.log(num.includes(100)); //false

// sort(), map(), filter(),  find(),  reduce(),findIndex(), some(), every() are higher order functions in JavaScript

const indexOfValue = num.find( (ele, index, arr) => { //return single element which satisfy the condition
        // console.log( ele, index, arr);
        return ele < 20; //searching for first element which satisfy this condition

}     ); 
const filtered = num.filter( (ele, index, arr) => { // return array
        // console.log( ele, index, arr);
        return ele < 20; //searching for element which satisfy this condition

}     );



// console.log(filtered);


// const mapped = num.map( (ele, index, arr) => { // return array
//             return 2 * ele;
// }     );
// console.log(mapped);






