"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userOne = {
    username: "Bobby",
    profileDetails: function () {
        console.log("Hii", this.username);
    },
};
console.log(userOne);
userOne.profileDetails();
let addition = firstNumber => {
    return firstNumber;
};
console.log(addition(10));
let addition1 = (firstNumber, secondNumber) => {
    if (typeof secondNumber == "number") {
        return firstNumber + secondNumber;
    }
    else {
        return firstNumber;
    }
};
console.log(addition1(10, 20));
let user2 = {
    profiles: ["bobby", "srinu", "nilai"],
};
let users = ["Bobby", "Srinu"];
console.log(users);
let users1 = ["Bobby", 123, "Dhivakar", 456];
console.log(users1);
let profile1 = {
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
let profile2 = {
    username: "Bobby",
    age: 22,
    street_name: "Peelamedu",
    pincode: 4566123,
    payment_mode: "Offline",
    amount: 500,
};
console.log(profile2);
let newUser = {
    username: "Bobby",
    age: 20,
};
//# sourceMappingURL=index.js.map