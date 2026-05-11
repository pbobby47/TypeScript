/*
- Global - var, function 
- Script - let, const 
- Local - function scope
- Block - conditional , looping, let, const 
- Lexical - whenever nested function wants to variables of parent function jse will automatically creates a closure with only required variables. 
and the variables which stores in the closure comes under Lexical scope.
*/

// console.log("start");
var a = 10;
var b = 20;
let c = 30;
let d = 40;
const e = 50;
const f = 60;
// console.log("end");

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value.toString().length);
    console.log(value * 10);
  }
}

printValue("Saranya Mam");
printValue(456123);

// ? any:
// It will accept every data type
let userName = "Bobby"; // data type inferred as "string" automatically by TS
// userName = 145;

let empName: any = "Bobby";
empName = 145;
empName = true;

let rollNo;
rollNo = 456;

// ? unknown:
