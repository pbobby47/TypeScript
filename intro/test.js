console.log("start");
var a = 10; // Global
var b = 20; // Global
let c = 30; // Script
let d = 40; // Script
const e = 50; // Script
const f = 60; // Script
console.log("end");

/*
- var ----> undefined
- let/const ---> value unavailable
*/

var a = 10;
a = "hello";
a = true;
a = [10, 20, 30, 40];
a = { sname: "Bobby" };

// TS -----> JS + more(datatypes)
// TS -----> JS + applying datatypes
