function greetings(){
    console.log("Hello World");
    console.log("Welcome to JavaScript. Programming");
}
greetings();

function displayName(personName){
    console.log(`The name of the person is ${personName}!`);
}
displayName();//undefined
displayName("Alice");

function addNumbers(num1, num2, num3=0){
  //by bypassing num3=0, we can make it an optional parameter. If the caller does not provide a value for num3, it will default to 0.
  let sum = num1 + num2 + num3;
  console.log(`The sum of ${num1}, ${num2} and ${num3} is ${sum}`);
}

let result = addNumbers(5, 10);
console.log(result); // Output: The sum of 5, 10 and 0 is 15
result = addNumbers(5, 10, 15);
console.log(result); // Output: The sum of 5, 10 and 15 is 30