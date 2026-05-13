"use strict";
// ! ================== Day 18 ====================
/*
- unions
*/
/*
// ? Example 1: Object Literal
// If we use a property in square bracket, It will consider the variable as a property.

let username: string | number;

username = "Bobby";

let x = {
  [username]: 10,
};
console.log(x); // { Bobby: 10 }

username = 45;
let y = {
  [username]: 20,
};
console.log(y); // { '45': 20 }

// ? Example 2:
let sname: string | number = "Bobby";
console.log(sname);
sname = 456;
console.log(sname);

let ar: string[] | number[] = ["userOne", "userTwo"];
console.log(ar);

ar = [10, 20];
console.log(ar);

let obj: { name: string } | { age: number };
obj = { name: "Bobby" };
console.log(obj);

obj = { age: 20 };
console.log(obj);

// ? Example 3: Functions Params
let userData = (data: string | number) => {
  return data;
};
console.log(userData(10)); // 10
console.log(userData("Bobby")); // Bobby

// ? Example 4:
// let value: string | number;
// value = "Bobby";
// // value = 1000;

// if (typeof value == "string") {
//   let UPPERCASE_VALUE: string = value.toUpperCase();
//   console.log(UPPERCASE_VALUE);
// } else {
//   value += 100;
//   console.log(value);
// }
*/
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    a: "Hii",
    b: "Hello",
    c: 10,
};
let admin = {
    name: "Bobby",
    email: "bobby@gmail.com",
    role: "Admin",
    permission: ["Create", "Read", "Update", "Delete"],
};
console.log(admin);
//# sourceMappingURL=index.js.map