type STUDENT = {
  name: string;
  age: number;
  isAvailable: boolean;
};

let bobby: STUDENT = {
  name: "Bobby",
  age: 20,
  isAvailable: true,
};

type x = string;

let data1: x;
let data2: x;
let data3: x;
let data4: x;
let data5: x;

type a = string;
type b = string;

type USER = a & b;

type EMP = {
  empName: string;
  age: number;
  PAN?: string;
};

let emp1: EMP = {
  empName: "a",
  age: 20,
};

let emp2: EMP = {
  empName: "b",
  age: 20,
  PAN: "ENVPP741536",
};

interface MYUSER {
  userName: string;
  userLocation: string;
  userExp: number;
  userReference: MYUSER | null;
}

let Bobby: MYUSER = {
  userName: "Bobby",
  userLocation: "INDIA",
  userExp: 4,
  userReference: {
    userName: "Bobby",
    userLocation: "INDIA",
    userExp: 4,
    userReference: {
      userName: "Bobby",
      userLocation: "INDIA",
      userExp: 4,
      userReference: {
        userName: "Bobby",
        userLocation: "INDIA",
        userExp: 4,
        userReference: null,
      },
    },
  },
};

interface PROFILE {
  profileID: number;
}

let user1: PROFILE = {
  profileID: 123,
};

interface PROFILE {
  profileName?: string;
}
