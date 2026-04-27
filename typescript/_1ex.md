
🚀 LESSON 1: Basic Types (Foundation)

Think of TypeScript as:
👉 “JavaScript + strict rules”

✅ 1.1 Primitive Types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

👉 If you try:

name = 100; ❌

TypeScript will stop you immediately

✅ 1.2 Type Inference (Important for interviews)
let city = "Bangalore"; 
// TS automatically assumes → string

👉 You don’t always need to write types

✅ 1.3 Arrays
let numbers: number[] = [1, 2, 3];

let users: string[] = ["A", "B"];

Alternative:

let numbers: Array<number> = [1, 2, 3];
✅ 1.4 Any (Avoid this ❌)
let data: any = "hello";
data = 100; // allowed

👉 Interview tip:
“any disables TypeScript safety”

✅ 1.5 Unknown (Better than any ✅)
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

👉 Safe version of any

✅ 1.6 Null & Undefined
let x: null = null;
let y: undefined = undefined;


🧪 LESSON 1 EXERCISES (Basic Types)

Try these yourself first. Don’t rush to see answers.

🟢 Exercise 1: Fix the Type Errors
let username: string = "Alex";
username = 100;

let isLoggedIn: boolean = "true";

let age: number = "25";

👉 Task: Fix all type issues properly

🟢 Exercise 2: Type Inference
let city = "Delhi";
let population = 2000000;
let isCapital = true;

👉 Task:

What type does TypeScript infer for each?
Now explicitly define them
🟢 Exercise 3: Arrays
let scores = [10, 20, 30, "40"];

👉 Task:

Fix the array so it only accepts numbers
Add one more valid value
🟢 Exercise 4: any vs unknown
let data: any = "hello";
console.log(data.toUpperCase());

let value: unknown = "world";
console.log(value.toUpperCase());

👉 Task:

Why does one fail?
Fix the unknown version properly
🟢 Exercise 5: Real-World Scenario (User Data)

Create a variable for a user:

// Expected output example
// name: "John"
// age: 30
// isAdmin: false

👉 Task:

Define correct types
Assign values
🟢 Exercise 6: Strict Typing Challenge
let id;
id = 10;
id = "ABC";

👉 Task:

Add a proper type so it allows both values (without using any)
🟢 Exercise 7: Debug This
let price: number = 100;
let tax = "10";

let total = price + tax;

👉 Task:

Fix the issue
Make total a number
💡 Bonus (Interview Level)

What will be the type of:

let x = null;

👉 And how would you make it stricter?