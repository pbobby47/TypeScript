# May 13, 2026

# TypeScript Intersection Types

Intersection types in TypeScript allow you to combine multiple types into one using the `&` operator.

The resulting type contains all properties from the combined types.

---

# Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [Why Use Intersection Types](#why-use-intersection-types)
- [Example with Interfaces](#example-with-interfaces)
- [Intersection vs Union](#intersection-vs-union)
- [Extending Existing Types](#extending-existing-types)
- [Conflicting Properties](#conflicting-properties)
- [Practical Example](#practical-example)
- [With Utility Types](#with-utility-types)
- [Advantages](#advantages)
- [Disadvantages](#disadvantages)
- [Summary](#summary)

---

# Introduction

TypeScript intersection types are used to merge multiple types into a single type.

They are created using the `&` operator.

```ts
type Combined = TypeA & TypeB;
```

The resulting type must satisfy all combined types.

---

# Basic Syntax

```ts
type A = {
  name: string;
};

type B = {
  age: number;
};

type Person = A & B;
```

Now `Person` must contain both `name` and `age`.

```ts
const user: Person = {
  name: "Alice",
  age: 25,
};
```

---

# Why Use Intersection Types

Intersection types are useful when you want to:

- Merge object types
- Combine interfaces
- Add extra properties to existing types
- Create reusable composed types
- Improve type safety

---

# Example with Interfaces

```ts
interface Employee {
  employeeId: number;
}

interface User {
  username: string;
}

type EmployeeUser = Employee & User;

const emp: EmployeeUser = {
  employeeId: 101,
  username: "john",
};
```

---

# Intersection vs Union

## Intersection (`&`)

Must satisfy all types.

```ts
type A = { a: string };
type B = { b: number };

type C = A & B;

// Requires both a and b
```

Example:

```ts
const obj: C = {
  a: "Hello",
  b: 10,
};
```

---

## Union (`|`)

Can be either type.

```ts
type A = { a: string };
type B = { b: number };

type C = A | B;
```

Example:

```ts
const obj1: C = {
  a: "Hello",
};

const obj2: C = {
  b: 10,
};
```

---

# Extending Existing Types

```ts
type BaseResponse = {
  success: boolean;
};

type UserData = {
  id: number;
  name: string;
};

type UserResponse = BaseResponse & UserData;

const response: UserResponse = {
  success: true,
  id: 1,
  name: "Alice",
};
```

---

# Conflicting Properties

If two types define the same property with incompatible types, the result becomes `never`.

```ts
type A = {
  id: string;
};

type B = {
  id: number;
};

type C = A & B;
```

Equivalent to:

```ts
type C = {
  id: never;
};
```

This type cannot be instantiated.

```ts
const obj: C = {
  id: 1, // Error
};
```

---

# Practical Example

```ts
type Timestamped = {
  createdAt: Date;
};

type Post = {
  title: string;
  content: string;
};

type BlogPost = Post & Timestamped;

const post: BlogPost = {
  title: "Hello",
  content: "TypeScript intersections",
  createdAt: new Date(),
};
```

---

# With Utility Types

```ts
type User = {
  id: number;
  name: string;
};

type Admin = User & {
  role: "admin";
};

const admin: Admin = {
  id: 1,
  name: "John",
  role: "admin",
};
```

---

# Advantages

- Improves code reusability
- Enables type composition
- Provides strong type safety
- Reduces duplication
- Easy to combine multiple structures

---

# Disadvantages

- Conflicting properties can create `never`
- Complex intersections may reduce readability
- Overuse can make debugging harder

---

# Summary

Intersection types (`&`) combine multiple types into one.

```ts
type Combined = TypeA & TypeB;
```

The resulting type contains all properties from each type.

They are commonly used for:

- Combining interfaces
- Extending types
- Building reusable structures
- Creating safer TypeScript applications

---

# License

This project is open-source and available under the MIT License.
