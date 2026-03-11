// Agenda - 
// array reduce
// string function
// introduction to objects
// Nested Objects
// Objects vs Arrays
// Destructuring
// Array of Objects
// Floating Point Numbers
// Special Numbers in JS


// array sort, map, find, filter, reduce , reverse


// Array.sort( callBackFn  ); -- (adj1, adj2)  return 1 or -1
// Array.map( callBackFn ); -- ( currentElement, currentIndex, wholeArray ) 
// Array.find( callBackFn ); -- ( currentElement, currentIndex, wholeArray ) // one value of the array or undefined
// Array.filter( callBackFn ); -- ( currentElement, currentIndex, wholeArray ) //array
// Array.reduce( callBackFn, initiator  ); (  accumulator, currentElement, currentIndex, wholeArray    )   //accumulator 


// console.log( num.find( (ele)  => ele % 2 != 0   )   );
// console.log( num.filter( (ele)  => ele % 2 != 0   )   );



// const num = [2, 5, 1, 0, 10];


// const total = num.reduce( //it take the first element as the value of the accumulator and function continue from second index
//     ( a, ele   ) => {
//       return a + "  " + (2 * ele);
//     }
// );

// console.log(total); // Tomba 2 5 1 0 10

//Write the sum all the number in an array
//Flattening the array
//Concatinating all value in an array

//Check whether a given string is palindrome or not
//reverse the string and check with its original value

// const str1 = "Malayalam";

// function checkPalindrome(str){
//     str = str.toLowerCase();
//     const arr = str.split("");
//     // console.log(arr);
//     arr.reverse();
//     // console.log(arr);
//     const revStr = arr.join("");
//     // console.log(revStr);
//     if(str === revStr){
//         console.log(`${str}  is palindrome`);
//     }
//     else{
//         console.log(`${str}  is not palindrome`);
//     }

// }
// checkPalindrome(str1);




// let shinobi = {
//   name: "Naruto Uzumaki",
//   "family": "green",
//    age: 17,
//   'village': "Leaf Village",
//    isNinja: true
// };  



// console.log(typeof(shinobi.name));    // 1
// console.log(typeof(shinobi.family));  // 2 
// console.log(typeof(shinobi.age));     // 3
// console.log(typeof(shinobi.village)); // 4
// console.log(typeof(shinobi.isNinja));

// console.log( shinobi["name"] );


// const bird = {
//     size: 'cat'
// };

// const animal = {
//     cat: "mango",
//     yahoo: "Lata",
//     "my name" : "Konsam"
// };
// A. animal.bird.size is invalid
// B. animal[bird.size]  is invalid
// C. animal.bird["size"] is invalid
// D. All are valid
// console.log( animal.bird.size ); //invalid
// console.log( animal[bird.size]  ); //valid
// console.log( animal.bird["size"]  ); //invalid

// animal.company = "Wipro";
// // delete animal.cat;
// console.log( animal );
// const { cat: model, yahoo: yahoo} = animal; //Object destructuring

// console.log( model, yahoo );


let arr = ["tomba", "singh"];
let [ a, b ] = arr;
console.log(a, b);
