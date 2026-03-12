//Arithmetic Operators
// +, -, *, /, %
console.log(10+20);
console.log(20-10);
console.log(10*20);
console.log(20/10); // every time we divide two numbers, we get a quotient. If the division is not exact, we get a decimal number.
console.log(20%10); // the modulus operator returns the remainder of the division.

let x;
console.log(x);
x = 1000;
console.log(x);

//Relational Operators
// >, <, >=, <=, ==, !=
console.log(10 > 20);
console.log(20 < 10);
console.log(10 >= 10);
console.log(20 <= 10);
console.log(10 == 10);//is able to compare int with string and it will return true if the values are the same, regardless of the data type. This is called type coercion.
console.log(10 != 20);//also ignores the datatype and checks only the value. So if we compare an int with a string, it will return false if the values are the same, regardless of the data type.
console.log(100 === 100);//strict equal doesnt ignore the data type, it checks both the value and the data type. So if we compare an int with a string, it will return false even if the values are the same.
console.log(100 !== 200);//strict not equal checks both the value and the data type. So if we compare an int with a string, it will return true because they are not the same in terms of value and data type.

//Logical Operators
// &&, ||, !
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false