/*
! TS ---> JS + more (datatype)

? JS Syntax: 
declartiontype variable = value;

? TS Syntax: 
declartiontype variable : datatype = value;

? Type Annotation:
It is a process of declaring the data types in TS Explictly.
*/
/*
//? number
var age: number = 20;

//? string
var sname: string = "Tejas";

//? array
var friends: string[] = ["Vaishav", "Jayesh", "Pavan", "Himanshu"];
var marks: number[] = [70, 65, 85, 74, 96];
var data: (number | string)[] = ["Tejas", 96, "Jayesh", 85, "Pavan", 36];

//? object
var obj: { sname: string; age?: number; course: string; isActive: boolean } = {
  sname: "Tejas",
  age: 22,
  course: "Java Full Stack",
  isActive: true,
};

obj = {
  sname: "raj",
  course: "PFS",
  isActive: false,
};

//? boolean
var isSuperMan: boolean = true;

*/

// ! ======== 04th APRIL ========
// ! Type Inference:
/*!
// It is a process TS guessing the data type of variable based on initial value;
// It will allow only the same datatype.
// Type inference in TypeScript is the ability of the compiler to automatically determine the type of a variable, function return value, or expression without you explicitly annotating it.
// It makes TypeScript feel closer to JavaScript while still giving you type safety.

let salary = 50000;
// inferred datatype as number

let userName = "Bobby";
// inferred datatype as string

// userName = 123; //! Error

let students = ["Atul", "Akshay", "Pranav", "Pooja"];
// inferred datatype as sting[]

let marks = [95, 85, 62, 96];
// inferred datatype as number[]

let data = ["Hello", 46, true];
// inferred datatype as (string | number | boolean)[]

let obj = { sname: "Bobby", age: 20, course: "MERN" };
// inferred datatype as {sname:string, age:number, course:string};

let status = "Success";
// inferred datatype as status: string

const status1 = "Success";
// inferred datatype as status1: "Success"
// literal datatype

function add(a: number, b: number) {
  return a + b;
}
// function add(a: number, b: number): number

export {};
*/

// ! Special Data Types
/*
These are only available in typescript, there are no special data types in JavaScript.

- any (no type checking)
- unknown (manual type checking)
- void (no return value)
- never (datatype which will nerver have a value)
*/

// ? any (no type checking):
// It will not throw any compiler time errors.
/*!
// Developer A
let greeting: any = "Hello";

// Developer B
greeting = 500;

// Developer C
greeting = { name: "Qspiders" };

// Developer A : Here Developer A unware of B and C  Code, So He Applied toUpperCase string method.
// greeting.toUpperCase();

// Developer A 
greeting.toUpperCase();

export {};
*/

/*
- The any datatype was introduced, so that we can gradually migrate from JavaScript to typescript.
- Sometimes we are not sure about the datatype of a variable, in such situations we use any as an escape, or the datatype of the variable is keeps changing.
*/

// ? unknown (manual type checking)
/*
- unknown is a type-safe alternative to any
- This datatype is similar to the "any" datatype, the difference is that when we try to use any method this data type, we have to manually do the type checking.
*/

/*
? Any:
- Assign anything to variable 
- There is not type safety 

? Unknown
- Assign anything to a variable 
- There is Type Safety
*/

/*
We can use this, when we do not know the data type of a variable or the data type might change,  but we still want safety.

The only difference is that we have to do type safety manually for unknown.
*/
/*
let a: unknown;

a = "Hello";
a = 200;
a = ["Hii", 1, true];
a = { name: "Qspiders" };

if (typeof a == "string") {
  console.log(a.toUpperCase());
}

export {};
*/

// ! ================ Type Inference Presention ===============
/*
- Here, for us it is not required to enter the datatypes manually. 
- TypeScript itself will guess the datatype based on the inital value.
*/
/*!
let sname = "Tejas";
// sname = 456123;
// TS inferred the datatype as sname:string
console.log(sname);

let age = 20;
// age = false;
//  TS inferred the datatype as age:number
console.log(age);

let isMarried = false;
// TS inferred the datatype as isMarried:boolean
console.log(isMarried);

let ar = [10, 20, 30, 40, 50];
ar = [40, 50, 60, 78, 96];
// ar = ["hello", "Hai"];
// TS inferred the datatype as number[]
console.log(ar);

let friends = ["Tejas", "Vaishav", "Jayesh", "Pavan"];
// friends = [10, 20];
// TS inferred the datatype as string[]
console.log(friends);

let data = ["Tejas", 20, true, "Vaishav", 21, false];
data = [1, 2, 3, 4, 5];
data = ["Hai", "Hai", "Hai", "Hoi", "Hoi", "Hoi"];
data = [false, false, true, true, false];

// TS inferred the datatype as (string | number | boolean)[]
console.log(data);

let obj = {
  sname: "Tejas",
  age: 20,
  course: "JFS",
};
// TS inferred the datatype as obj:{sname:string, age:number, course:string}
console.log(obj);

// obj = {
//   sname: "Vaishav",
//   age: 20,
//   course: 456,
// };
// console.log(obj);

let status0 = "success"; // TS inferred the datatype as status0:string
status0 = "failure";

const status1 = "success"; // TS inferred the datatype as status1:success (literal)
// status1 = "success";

export {};
*/

// ! ================= 01st May ======================
/*!
let sname: any = "Bobby";
sname.toUpperCase();

let userName: unknown = "Bobby";
// userName.toUpperCase(); //! Error

if (typeof userName == "string") {
  userName.toUpperCase();
}

export {};

// ! Type Narrowing:
// Type Narrowing is the process of filtering out a particular data type so that we can use methods on such variables
// Type Checking is nothing but Type Narrowing.
let b: unknown = 300;

b = ["a", "x", 100, 200];

b = "Hello String";

if (typeof b == "string") {
  b.toUpperCase();
}

let x: number | string;
x = 100;
x = "Hello";

if (typeof x == "string") {
  x.toUpperCase();
}

export {};

// ! Void
// The Void datatype mainly represents the absence of any value.
// It is most used to indicate that we do not want to return anything from a function.
// In JavaScript, If we are not returing anything It will return undefined automatically.

function greetUser(): void {
  let a = 2 + 2;
}
console.log(greetUser());

function printNames(): void {
  let students = ["Bobby", "Srinu"];

  for (let i of students) {
    console.log(i);
  }
}

printNames();
// Void datatype is all about the intention, it means if developer does not want to return anything from a function, he can use the void data type to inform the other developers.

// But from the compiled JavaScript, the default behaviour of the a function cannot be changed.

// If developer A mentioned void , Other Developers will understand we should not return anything from this function.

// ! Never
// Never is a datatype, It will nerver return any data type.

// Whenever there is a scenario like  there is a possibility  not return is working.

function errorHandler(): never {
  throw new Error("the function is terminating");
}
errorHandler();
console.log("After  Execution");
*/

// ! =============== Today Presentation =============
// ? Special Data Types
/*
- any
- unknown
- void 
- never 
*/
/*
// ? any
// - It will stop the type checking from TypeScript.
// - Which means it will not care about what is the data type you are assigning into a variable.
// - no compile time errors in "ANY" datatype.
// - If any errors are available, It will showing at the time of runtime.

let sname = "Tejas"; // Declaration + Initialization
console.log(sname);

let userName; // Declartion
userName = 10;
userName = true;
userName = [10, 20, 30, 40];
userName = { sname: "Tejas" };
userName = function () {
  console.log("Hii");
};

console.log(userName); // undefined

let empname: any = "Tejas";
empname = 10;
empname = true;
empname = () => {
  return "hello";
};
empname = { sname: "Tejas", age: 20 };

empname.toUpperCase();
empname.toLowerCase();

// ? unknown:
// - It is an alternative to ANY datatype.
// - In case of "ANY" datatype we will nerver get any errors at compile time.
// - To catch that we have something called as "UNKNOWN" datatype.
// - Before applying methods we have to do manual type checking.

let studentName: unknown = "Bobby";
studentName = 10;
studentName = [10, 20, 30];

if (typeof studentName == "string") {
  studentName.toUpperCase();
}
if (typeof studentName == "number") {
  studentName.toString();
}
if (Array.isArray(studentName)) {
  studentName.push(40);
}
*/

// ! =============== Today Presentation =============
/*
- Void
- Never
*/

// ! Void:
/*
- Whenever we don't want to return anything from a function , we will go for void datatype. 
- void allows only undefined as a function result.
- If we are not returing anything from the function, By default JavaScript will results undefined.
- In this case, function will reach the return statement and results undefined automatically.
*/
/*
function printNames(): void {
  let names = ["Tejas", "Himanshu", "Atharva", "Hari", "Bhavya", "Bobby"];

  for (let i of names) {
    console.log(i);
  }
}
console.log(printNames());
*/
//~ In the above code is there any problem?
// No

// ! Never
// We will not even reach the return statement.
// In this case, function will not reach the return statement
/*
function ShowError(): never {
  throw new Error("Some thing went wrong");
}
ShowError();
*/

// ! ================= 05 May 2026 Presentation ==============
// ! Array:
/*
- An Array is a collection of Homogenous or Heterogenous data elements.
*/

let userNames: string[] = ["Tejas", "Himanshu", "Hemanth", "Bobby", "sachin"]; // Homogenous
console.log(userNames);

let userNames1: Array<string> = [
  "Tejas",
  "Himanshu",
  "Hemanth",
  "Bobby",
  "sachin",
]; // Homogenous
console.log(userNames1);

let data: (string | number)[] = ["Tejas", "Java Trainer", 10];
console.log(data);

let data1: Array<string | number> = ["Tejas", "Java Trainer", 10];
console.log(data1);

let x: (string | number | boolean | null | undefined)[] = [
  "Tejas",
  10,
  null,
  undefined,
  true,
];
console.log(x);

let y: Array<string | number | boolean | null | undefined> = [
  "Tejas",
  10,
  null,
  undefined,
  true,
];
console.log(y);

let empnames = ["Tejas", "Himanshu", "Hemanth", "Bobby", "Indhuja", "Divakar"];
//                  0         1           2         3         4         5
console.log(empnames);

// while
// for
//? for in
// It will iterate based on indexes.
for (let i in empnames) {
  console.log(i); // 0 1 2 3 4 5
}

//? for of
// It will iterate based on values.
for (let i of empnames) {
  console.log(i); // Tejas  Himanshu  Bobby   Indhuja  Divakar
}

//? forEach
// It will iterate based on values and indexes
// ~ Syntax: variableName.forEach(callbackFn);
// For Each is a HOF , It wants one Callback Fn.
// Callback Fn Can be Named Function / Anonymous Function / Arrow  Function .
// That Callback Fn Should Contain 2 Parameters
// 1st Parameter will iterate over values
// 2nd Parameter will iterate over indexes
// Both are optional

empnames.forEach(function () {
  console.log("Hii");
});

// map
