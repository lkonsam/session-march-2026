🚀 LESSON 3: Objects, Interfaces & Real API Models

This is VERY IMPORTANT for MERN + TypeScript
👉 React props
👉 API responses
👉 MongoDB data

✅ 3.1 Typing Objects (Basic)
let user: { name: string; age: number } = {
  name: "John",
  age: 30
};

✔ Works
❌ But becomes messy in real apps

✅ 3.2 Interfaces (Clean & Reusable)
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "John",
  age: 30
};

👉 This is the standard approach in MERN apps

✅ 3.3 Optional Properties
interface User {
  name: string;
  age?: number;
}

let user: User = {
  name: "John"
};

✔ age is optional

✅ 3.4 Readonly Properties
interface User {
  readonly id: number;
  name: string;
}

let user: User = {
  id: 1,
  name: "John"
};

user.id = 2; ❌ Error

👉 Useful for:

DB IDs
Immutable data
✅ 3.5 Nested Objects (Real World)
interface Address {
  city: string;
  pincode: number;
}

interface User {
  name: string;
  address: Address;
}

let user: User = {
  name: "John",
  address: {
    city: "Bangalore",
    pincode: 560001
  }
};
✅ 3.6 Arrays of Objects (Very Common)
interface User {
  name: string;
  age: number;
}

let users: User[] = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];
✅ 3.7 Type vs Interface (Interview Question)
Interface
interface User {
  name: string;
}
Type
type User = {
  name: string;
};

👉 Difference (interview-ready):

Interface → extendable (preferred for objects)
Type → more flexible (unions, etc.)
✅ 3.8 Extending Interfaces
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

let admin: Admin = {
  name: "John",
  role: "SuperAdmin"
};
✅ 3.9 Real API Example (IMPORTANT 🔥)

This is exactly what happens in MERN apps:

interface ApiResponse {
  success: boolean;
  data: {
    name: string;
    email: string;
  };
}

function getUser(): ApiResponse {
  return {
    success: true,
    data: {
      name: "John",
      email: "john@test.com"
    }
  };
}
🧠 Real React Example (Preview)
interface Props {
  title: string;
}

function Header(props: Props) {
  return <h1>{props.title}</h1>;
}

👉 This is how TypeScript is used in React