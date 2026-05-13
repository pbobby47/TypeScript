# TypeScript Tuple

In **TypeScript**, a **tuple** is a special type of array where:

- The **number of elements is fixed**
- Each element can have a **different type**
- The **order matters**

---

## Basic Tuple Syntax

```ts
let person: [string, number];

person = ["Alice", 25]; // Correct
person = [25, "Alice"]; // Error (wrong order)
person = ["Alice"]; // Error (missing element)
```

---

## Tuple with Multiple Types

```ts
let user: [string, number, boolean];

user = ["John", 30, true];
```

### Explanation

- `string` → name
- `number` → age
- `boolean` → isActive

---

## Accessing Tuple Values

```ts
let data: [string, number] = ["Age", 21];

console.log(data[0]); // "Age"
console.log(data[1]); // 21
```

---

## Named Tuples

```ts
let person: [name: string, age: number];

person = ["Bob", 40];
```

---

## Optional Elements in Tuple

```ts
let user: [string, number?];

user = ["Alice"];
user = ["Alice", 25];
```

---

## Tuple with Rest Elements

```ts
let numbers: [number, ...number[]];

numbers = [1, 2, 3, 4];
```

---

## Tuple vs Array

| Feature       | Tuple             | Array             |
| ------------- | ----------------- | ----------------- |
| Length        | Fixed             | Dynamic           |
| Types         | Different allowed | Usually same type |
| Order Matters | Yes               | No strict order   |

---

## Common Use Cases

- Returning multiple values from a function
- Representing structured data
- Key-value pairs

```ts
function getUser(): [string, number] {
  return ["Alice", 25];
}
```

---

## Example: Coordinates

```ts
let coordinates: [number, number];

coordinates = [10, 20];
```

---

## Conclusion

Tuples in TypeScript are useful when you know:

- the exact number of elements
- the type of each element
- and the order of elements

They provide better type safety compared to normal arrays.
