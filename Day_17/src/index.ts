// ! Tuple:
/*
In TypeScript, a tuple is a special type of array where:

The number of elements is fixed
Each element can have a different type
The order matters
*/

// ? Example 1:
let person: [string, number];

person = ["Alice", 25]; // ✅ correct
// person = [25, "Alice"]; // ❌ error (wrong order)
// person = ["Alice"]; // ❌ error (missing element)

// ? Example 2:
let user: [string, number, boolean];

user = ["John", 30, true];

// ? Example 3:
let data: [string, number] = ["Age", 21];

console.log(data[0]); // "Age"
console.log(data[1]); // 21

// ? Example 4: More Readable
let person1: [name: string, age: number];

person1 = ["Bob", 20];

// ? Example 5: Optional Elements
let users: [string, number?];

users = ["Alice"]; // ✅
users = ["Alice", 25]; // ✅

// ? Example 6: Rest Parameters
let numbers: [number, ...number[]];

numbers = [1, 2, 3, 4]; // first must be number, rest can be more numbers

// ? Example 7: tuple with interface
interface STUDENT {
  0: string;
  1: number;
}

let s1: STUDENT = ["Bobby", 20];
console.log(s1);

// ? Example 8: interface with extends keyword with tuple

// ? Example 9: Forcing array to be a tuple
let arrayAsTuple = ["Bobby", 20, true] as const;

// ? Example 10:  RGB
let RGBA: [number, number, number, number];

RGBA = [255, 200, 150, 0.9];

let coords: [lat: string, long: string];
coords = ["12.2958 N", "76.6394 E"];

let TIME: [
  hour: number,
  minutes: number,
  seconds: number,
  milliseconds: number,
];

TIME = [5, 42, 53, 456];
