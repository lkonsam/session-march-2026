🚀 LESSON 2: Functions in TypeScript

This is where TypeScript becomes actually useful — especially for APIs, React props, backend logic.

✅ 2.1 Basic Function Types
function add(a: number, b: number): number {
  return a + b;
}

👉 Breakdown:

a: number → parameter type
b: number → parameter type
: number → return type
❌ Common mistake
function add(a: number, b: number) {
  return a + b;
}

👉 This still works (TypeScript infers return type)
✔ But in interviews → always define return type

✅ 2.2 Arrow Functions
const multiply = (a: number, b: number): number => {
  return a * b;
};

Short version:

const multiply = (a: number, b: number): number => a * b;
✅ 2.3 Void (No Return)
function logMessage(msg: string): void {
  console.log(msg);
}

👉 void = no return value

✅ 2.4 Optional Parameters
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, age ${age}`;
  }
  return `Hello ${name}`;
}

👉 age? = optional

❌ Wrong
function greet(name?: string, age: number) {} ❌

👉 Optional must be last parameter

✅ 2.5 Default Parameters
function greet(name: string, country: string = "India"): string {
  return `Hello ${name} from ${country}`;
}
✅ 2.6 Function with Object (Real-World)

This is very important for MERN 👇

function createUser(user: { name: string; age: number }): string {
  return `${user.name} is ${user.age} years old`;
}

Usage:

createUser({ name: "John", age: 25 });
✅ 2.7 Type Alias for Functions (Cleaner)
type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;

👉 Used heavily in React & backend

✅ 2.8 Function Returning Object
function getUser(): { name: string; age: number } {
  return {
    name: "John",
    age: 30
  };
}
🧠 Real Backend Example (Important)
function login(email: string, password: string): boolean {
  if (email === "admin@test.com" && password === "1234") {
    return true;
  }
  return false;
}

👉 This is how APIs start

🔥 Interview Questions You Can Expect
Difference between void and never
Optional vs default params
Why define return types?
Function typing vs inference


🧪 EXERCISES (Lesson 2)

Try these 👇

🟢 Ex 1: Simple Function

Create a function:
👉 takes name (string)
👉 returns "Hello <name>"

🟢 Ex 2: Add Numbers

Create:
👉 function that takes 2 numbers
👉 returns sum

(define proper return type)

🟢 Ex 3: Optional Parameter

Create function:
👉 name required
👉 age optional
👉 return:

"John is 25" if age exists
"John" if not
🟢 Ex 4: Default Parameter

Create function:
👉 takes product and price
👉 default price = 100
👉 return string

🟢 Ex 5: Object Parameter (Important)

Create function:
👉 takes user object
👉 { name: string, isAdmin: boolean }
👉 return "Admin" or "User"

🟢 Ex 6: Arrow Function

Convert this to arrow function:

function square(n: number): number {
  return n * n;
}
🟢 Ex 7: Function Type Alias (Interview Level)

Create:
👉 type for function → takes string, returns boolean

Then implement:
👉 check if string length > 5

💡 Bonus (Important Interview Concept)

What is difference:

function test(): void {}
function test(): never {}