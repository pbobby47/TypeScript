/*
type NUMBER = number;
let rollNo: NUMBER = 123;

type STRING = string;
let userName: STRING = "Bittu";

type NUM_STR = string | number;
let account_Id: NUM_STR = "ICICI0123";
account_Id = 789456123;

type NUM_STR_BOOL_UND = number | string | boolean | undefined;
let data: NUM_STR_BOOL_UND;
data = 123;
data = "Hello";
data = true;
data = undefined;

type STATUS =
  | "Married"
  | "Single"
  | "Commited"
  | "Brokeup"
  | "Commit_then_Brokeup";

let bittuStatus: STATUS;
bittuStatus = "Married";

type GENDER = "Male" | "Female" | "Others";

let x: GENDER = "Female";
*/

// ! ===================
interface EMPLOYEE {
  ename: string;
  designation: string;
  experience: number;
  skills: string[];
  job_location: string;
  isWorking: boolean;
}

let bobby: EMPLOYEE = {
  ename: "Bobby",
  designation: "Trainer",
  experience: 3,
  skills: ["WT", "React", "Node", "Mongodb", "Express"],
  job_location: "Coimbatore",
  isWorking: true,
};

interface USER{
  
}