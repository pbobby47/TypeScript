// ? Example 1:
interface UserProfile {
  username: string;
  profileDetails(): void;
}

let userOne: UserProfile = {
  username: "Bobby",
  profileDetails: function () {
    console.log("Hii", this.username);
  },
};

console.log(userOne);
userOne.profileDetails();

// ? Example 2: Optional Paramters

interface ADD {
  (firstNumber: number, secondNumber?: number): number;
}

let addition: ADD = firstNumber => {
  return firstNumber;
};
console.log(addition(10));

let addition1: ADD = (firstNumber, secondNumber) => {
  if (typeof secondNumber == "number") {
    return firstNumber + secondNumber;
  } else {
    return firstNumber;
  }
};
console.log(addition1(10, 20));

// ? Example 3: interface with array
interface USERS {
  profiles: string[];
}

let user2: USERS = {
  profiles: ["bobby", "srinu", "nilai"],
};

interface USERS_DATA {
  [name: number]: string;
}

let users: USERS_DATA = ["Bobby", "Srinu"];
console.log(users);

interface USERS_DATA1 {
  [index: number]: string | number;
}

let users1: USERS_DATA1 = ["Bobby", 123, "Dhivakar", 456];
console.log(users1);

// Syntax:
/*
interface INTERFACENAME{
    [anyvariable: number] = elementtypes
}
*/

// ? Example 4: combining multiple interfaces
interface USER {
  username: string;
  age: number;
}

interface ADDRESS {
  street_name: string;
  pincode: number;
}

interface PAYMENT {
  payment_mode: string;
  amount: number;
}

interface PROFILE {
  user: USER;
  address: ADDRESS;
  payment?: PAYMENT;
}

let profile1: PROFILE = {
  user: {
    username: "Bobby",
    age: 22,
  },
  address: {
    street_name: "Peelamedu",
    pincode: 4566123,
  },
  payment: {
    payment_mode: "Offline",
    amount: 500,
  },
};

console.log(profile1);

// ? Example 5:
let profile2: USER & ADDRESS & PAYMENT = {
  username: "Bobby",
  age: 22,
  street_name: "Peelamedu",
  pincode: 4566123,
  payment_mode: "Offline",
  amount: 500,
};

console.log(profile2);

// ? Example 5.1:
interface PROFILE3 extends USER, ADDRESS, PAYMENT {}

// ? Example 5.2:
// type MY_USER = {
//   username: string;
// };

// type MY_USER = {
//   age: number;
// };

interface MY_USER {
  username: string;
}

interface MY_USER {
  age: number;
}

let newUser: MY_USER = {
  username: "Bobby",
  age: 20,
};
