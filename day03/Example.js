class Employee {
  work() {
    console.log("Employee is working.");
  }
}

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

let homePage;

const { square } = require("../day02/Utility"); //  ./ vs  ../

console.log(square(3));
