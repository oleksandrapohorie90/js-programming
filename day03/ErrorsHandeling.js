console.log(result);//reference error because result is not defined

try {
  console.log(result); // This will throw a ReferenceError
} catch (error) {
  console.error(`An error occurred: ${error.message}`); // Output: An error occurred: result is not defined
}finally {
  console.log("This will always run..."); // Output: This will always run...
}

console.log("Test ended");

throw new Error("This is a custom error message"); // This will throw a custom error with the message "This is a custom error message"