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

// ! ============== Tuple Presentation ==================
/*
?  Array: 
- It is a collection of homogenous or heterogenous data elements of any length.

? Tuple:
- It is similar to Array data type.
- It is a collection of homogenous or heterogenous data elements of fixed length.
*/
/*
let data: string[] = ["Bobby", "Bittu", "Tejas"];
console.log(data);

let tupleData: [string, string, string] = ["Bobby", "Bittu", "Tejas"];
console.log(tupleData);

let studentData: [string, number, boolean] = ["Bittu", 20, true];
studentData = ["Tejas", 22, false];

let empData: [userName: string, userAge: number, userAvailable: boolean];
empData = ["Ram", 20, true];

let data1: [[string, string, string], [number, number]];
data1 = [
  ["Bobby", "Bittu", "Tejas"],
  [10, 20],
];

let friends: [string, string, string, string, string];
friends = ["Bobby", "Bittu", "Tejas", "Doremon", "Shin chan"];
//            0         1       2         3           4

for (let i in friends) {
  console.log(`Friend ${+i + 1} -, ${friends[i]}`);
}

// ? String ----> Number
// numericalString
// Number(numericalString)
// +numericalString
// numericalString*1

var s = "10";
console.log(s);
console.log(typeof s); // string

console.log(+s);
console.log(typeof +s); // number
*/

// ! ============= 13 May ================
/*
- type intersection
- interface intersection
*/

// ! Type Intersection
// Combining multiple types

// ! Interface Intersection
// Combining multiple intersections

interface A {
  a: string;
}

interface B {
  b: string;
}

interface C {
  c: number;
}

// interface Combine extends A, B, C {
// }

type Combine = A & B & C;

let obj: Combine = {
  a: "Hii",
  b: "Hello",
  c: 10,
};

// ? Example 2:
type adminType = {
  role: string;
  permission: string[];
} & {
  name: string;
  email: string;
};

let admin: adminType = {
  name: "Bobby",
  email: "bobby@gmail.com",
  role: "Admin",
  permission: ["Create", "Read", "Update", "Delete"],
};

console.log(admin);
