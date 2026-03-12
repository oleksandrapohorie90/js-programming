let school = "Cydeo";

// length of the string
console.log(school.length);

// first character
console.log(school.charAt(0));
console.log(school[0]); // Alternative way to access the first character
// last character
console.log(school.charAt(school.length - 1));

console.log(school[school.length - 1]); // Alternative way to access the last character

for(let i = 0; i < school.length; i++) {
    console.log(school[i]);
}

console.log("------------------");
school = school.toLowerCase();
console.log(school);

console.log("-----------------");
let expectedResult = "JavaScript";
let actualResult = "JAVASCRIPT";


let email = "cydeo@gmail.com";
let domain = email.substring(email.indexOf("@") + 1);
console.log(domain);

//concatenate two strings
let employeeName = "John";
let employeeSalary = 100_000;
console.log(`My name is ${employeeName} and my salary is $${employeeSalary} US Dollars.`);
