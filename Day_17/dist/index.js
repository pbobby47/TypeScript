"use strict";
// ! Tuple:
/*
In TypeScript, a tuple is a special type of array where:

The number of elements is fixed
Each element can have a different type
The order matters
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ? Example 1:
let person;
person = ["Alice", 25]; // ✅ correct
// person = [25, "Alice"]; // ❌ error (wrong order)
// person = ["Alice"]; // ❌ error (missing element)
// ? Example 2:
let user;
user = ["John", 30, true];
// ? Example 3:
let data = ["Age", 21];
console.log(data[0]); // "Age"
console.log(data[1]); // 21
// ? Example 4: More Readable
let person1;
person1 = ["Bob", 20];
// ? Example 5: Optional Elements
let users;
users = ["Alice"]; // ✅
users = ["Alice", 25]; // ✅
// ? Example 6: Rest Parameters
let numbers;
numbers = [1, 2, 3, 4]; // first must be number, rest can be more numbers
let s1 = ["Bobby", 20];
console.log(s1);
//# sourceMappingURL=index.js.map