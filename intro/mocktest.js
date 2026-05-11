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
var c = 30;
var d = 40;
var e = 50;
var f = 60;
// console.log("end");
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(value.toString().length);
        console.log(value * 10);
    }
}
printValue("Saranya Mam");
printValue(456123);
