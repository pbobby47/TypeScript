// ! Array:
/*
- An Array is a collection of homogenous or heterogenous data elements.
- Homogenous ---> same Data types
- Heterogenous ---> different Data types
*/

let players: string[] = ["Bittu", "sachin", "dhoni", "virat", "rohit", "surya"];
//  players data type is iffered as string[]
players.push("kl rahul");
console.log(players);

let scores: number[] = [78, 56, 21, 0, 45, 96, 100, 150];
// scores inferred the data type as  number[]
scores.push(200);
scores.push(300);
// scores("centuary");
console.log(scores);

let users: (string | number)[] = ["Bittu", "Kolkata", 741852, 41];
console.log(users);

let status: boolean[] = [true, false, true, false, false, false];
console.log(status);

let products: { productId: number; productName: string; price?: number }[];

products = [
  { productId: 101, productName: "Iphone", price: 1500 },
  { productId: 102, productName: "Vivo", price: 500 },
  { productId: 103, productName: "Moto" },
  { productId: 104, productName: "samsung", price: 600 },
  { productId: 105, productName: "Realme" },
];
console.log(products);

let user: {
  userName: string;
  course: string;
  skills: {
    frontend: string[];
    database: string[];
    backend: string[];
  };
}[];

user = [
  {
    userName: "Bittu",
    course: "JFS",
    skills: {
      frontend: ["HTML", "CSS", "JS"],
      database: ["SQL", "MongoDB"],
      backend: ["Java"],
    },
  },
  {
    userName: "Bittu",
    course: "JFS",
    skills: {
      frontend: ["HTML", "CSS", "JS"],
      database: ["SQL", "MongoDB"],
      backend: ["Java"],
    },
  },
  {
    userName: "Bittu",
    course: "JFS",
    skills: {
      frontend: ["HTML", "CSS", "JS"],
      database: ["SQL", "MongoDB"],
      backend: ["Java"],
    },
  },
];
