let elements = ["Java", 11, 2.5, true];
//in javascript arrays can contain different types of data and are dynamically sized
console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
console.log(elements[3]);

for(let i=0; i<elements.length; i++){
    console.log(elements[i]);
}

let students = ["Alice", "Bob", "Charlie"];

for(let student of students){
    console.log(student);
}

console.log(students.length); // Output: 3
students.push("David"); // Adding a new student to the end of the array
console.log(students); // Output: ["Alice", "Bob", "Charlie", "David"]
students.unshift("David");
//tabnine peprlexity suggested code