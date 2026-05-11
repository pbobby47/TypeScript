// ! type alias
type bittu = string | number;

var empNo: bittu = 123;
empNo = "TYSS123";

type PERSONAL = {
  username: string;
  age: number;
  dob: string;
};

type MATRICULATION = {
  schoolName: string;
  percentage10: number;
};

type COLLEGE = {
  collegeName: string;
  collegePercentage: number;
};

type PROFILE = PERSONAL & MATRICULATION & COLLEGE;

let userOne: PROFILE = {
  username: "Bittu",
  age: 22,
  dob: "14-02-2004",
  schoolName: "lovely School",
  percentage10: 83,
  collegeName: "lovely Proffessional Unversity",
  collegePercentage: 80,
};

// type USER_PROFILE = {
//   userName: string;
// };

// type USER_PROFILE = {
//   age: number;
// };

// ! interface
// To create a structure for object we will be going with interface.

interface COURSE_DETAILS {
  courseID: number;
  courseName: string;
  courseDuration: number;
}

let jfs: COURSE_DETAILS = {
  courseID: 123,
  courseName: "Java Full Stack",
  courseDuration: 5,
};

let pfs: COURSE_DETAILS = {
  courseID: 456,
  courseName: "Python Full Stack",
  courseDuration: 4,
};

interface USER_PROFILE {
  userName: string;
}

interface USER_PROFILE {
  age?: number;
}

let user2: USER_PROFILE = {
  userName: "Bittu",
  age: 20,
};

let user3: USER_PROFILE = {
  userName: "Bobby",
};

// ? Example
interface MASTER_PROFILE {
  masterName: string;
  printDetails(): void;
}

let master1: MASTER_PROFILE = {
  masterName: "Bittu",
  printDetails: function () {
    console.log(`${this.masterName} is the master`);
  },
};

console.log(master1);
master1.printDetails();
