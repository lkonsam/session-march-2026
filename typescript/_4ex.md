🚀 LESSON 4: Generics (🔥 Very Important)

This is where TypeScript becomes powerful and reusable.

🧠 What is a Generic?

👉 A generic lets you write flexible, reusable code without losing type safety.

Instead of:

function getData(data: string): string {
  return data;
}

👉 This only works for string ❌

✅ 4.1 Basic Generic Function
function getData<T>(data: T): T {
  return data;
}

✔ T = placeholder type

Usage:
getData<string>("hello");
getData<number>(100);
getData<boolean>(true);

👉 Same function works for all types

✅ 4.2 Type Inference (Important)
getData("hello"); // T = string
getData(10);      // T = number

👉 TypeScript automatically detects type

✅ 4.3 Generics with Arrays
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

Usage:

getFirst<number>([1, 2, 3]);
getFirst<string>(["a", "b"]);
✅ 4.4 Multiple Generics
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
pair<string, number>("age", 25);
✅ 4.5 Generics with Interfaces (🔥 Real MERN Use)
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

Usage:

let userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: { name: "John" }
};

👉 This is used everywhere in APIs

✅ 4.6 Generic Constraints (Important)
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

✔ Works for:

string
array

❌ Not for:

number
✅ 4.7 Generic with Arrow Function
const identity = <T>(value: T): T => value;
🧠 Real-World Use Case (MERN)
API call example:
function fetchData<T>(): Promise<T> {
  // pretend API call
  return {} as T;
}

Usage:

interface User {
  name: string;
}

const user = fetchData<User>();
🔥 Interview Questions
What are generics?
Why not use any instead?
What is <T>?
What are constraints?
Real-world usage?

👉 Key answer:

Generics allow reusable and type-safe code, unlike any which removes type safety.

🧪 EXERCISES (Lesson 4)
🟢 Ex 1: Basic Generic

Create:
👉 function identity
👉 returns whatever is passed

🟢 Ex 2: Array Generic

Create:
👉 function that returns last element of array

🟢 Ex 3: Multiple Generics

Create:
👉 function that takes 2 values
👉 returns object { key, value }

🟢 Ex 4: Generic Interface

Create:

Response<T>:
- success
- data
🟢 Ex 5: Constraint

Create:
👉 function that accepts only items with .length
👉 return length

🟢 Ex 6: Real API

Create:
👉 generic function fetchApi<T>()
👉 returns T

⚠️ Important Reality

If you understand:
✔ Generics
✔ Interfaces
✔ Functions

👉 You are already above 70% of candidates