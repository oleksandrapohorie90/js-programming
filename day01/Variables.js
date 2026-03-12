let studentName = "James";
let studentAge = 25;
let isFullTime = true;
//what you assign to the var determines what data type will be this variable. In this case, it is a String because we assigned a String value to it.
//dynamically typed language: we can change the data type of the variable by assigning a different value to it. For example, we can assign a number to the same variable and it will become a number data type.
console.log(studentName);
console.log(studentAge);
console.log(isFullTime);

//console.log(typeof studentName);
//console.log(typeof studentAge);
//console.log(typeof isFullTime);

studentName = "Emily";
console.log(studentName);
console.log("------------------------------------");

if(true){
    let a = 100;//use let when you want to declare a variable that is only accessible within the block it is declared in. In this case, the variable a is only accessible within the if block.
    //var a = 100; //use var when you want to declare a variable that is accessible throughout the entire function or globally if declared outside of any function. In this case, the variable a would be accessible outside of the if block as well.
    console.log(a);
}

let x = 300;// let allows to make sure variables are unique and cannot be redeclared within the same scope. If we try to declare another variable with the same name using let, it will throw an error.
let y = 400;// let allows to make sure variables are unique and cannot be redeclared within the same scope. If we try to declare another variable with the same name using let, it will throw an error.
const z = 500;// const is used to declare variables that cannot be reassigned after they have been initialized. This means that once a value is assigned to a const variable, it cannot be changed. However, if the value assigned to a const variable is an object or an array, the properties of that object or the elements of that array can still be modified.
console.log(x);
console.log(y);
console.log(z);

//x = 600; //this will work because x is declared with let, which allows reassignment.
//y = 700; //this will work because y is declared with let, which allows reassignment.
//z = 800; //this will throw an error because z is declared with const, which does not allow reassignment.

const PI = 3.14; //PI is a constant value that represents the ratio of the circumference of a circle to its diameter. It is a mathematical constant that is approximately equal to 3.14. We use const to declare PI because it is a value that should not be changed throughout the program.
const MAXIMUM_LIMIT = 100_000; //MAXIMUM_LIMIT is a constant value that represents the maximum limit for something in our program. We use const to declare MAXIMUM_LIMIT because it is a value that should not be changed throughout the program.
