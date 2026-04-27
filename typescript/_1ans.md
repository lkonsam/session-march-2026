✅ Exercise Review
🟢 Ex 1 — ✔️ Correct (with small note)
let username: string = "Alex";
username = "100"; // ✔️ valid (still string)

let isLoggedIn: boolean = true;
let age: number = 25;

✔️ You fixed all type issues
💡 Note: "100" is a string, so it’s valid — no problem here

🟢 Ex 2 — ✔️ Perfect
let city: string = "Delhi";
let population: number = 2000000;
let isCapital: boolean = true;

✔️ Clean and correct
✔️ You understood inference vs explicit typing

🟢 Ex 3 — ✔️ Perfect
let scores: number[] = [10, 20, 30, 40];
// OR
let scores: Array<number> = [10, 20, 30, 40];

✔️ Both are correct
💡 Interview tip: Prefer number[] (more common)

🟡 Ex 4 — ❌ Needs Correction (Important Concept)

Your understanding is slightly off here 👇

let value: unknown = "world";
console.log(value.toUpperCase()); ❌

👉 This will NOT work
Because unknown forces you to check type first

✅ Correct version:
let value: unknown = "world";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

👉 Key point:

any → no safety
unknown → must validate before use

💡 This is a frequent interview trap

🟢 Ex 5 — ✔️ Correct
let name: string = "John";
let age: number = 30;
let isAdmin: boolean = false;

✔️ Good

💡 Improvement (real-world style):

let user = {
  name: "John",
  age: 30,
  isAdmin: false
};

(We’ll type this properly in next lesson)

🟢 Ex 6 — ✔️ Perfect (Union Types)
let id: number | string;
id = 10;
id = "ABC";

✔️ Exactly what interviewer expects

🔴 Ex 7 — ❌ Incorrect (Important)
let price: number = 100;
let tax = "10";

let total: number = price + tax; ❌

👉 Problem:

price + tax → "10010" (string concatenation)
✅ Fix:
let tax: number = 10;
let total: number = price + tax;

OR

let total: number = price + Number(tax);

💡 Key concept:

JS converts number + string → string

🟢 Ex 8 — ✔️ Correct
let x: null = null;

✔️ Good

💡 Better (strict real-world usage):
let x: string | null = null;

👉 Because variables rarely stay only null