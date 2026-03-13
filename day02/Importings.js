/*const utility = require("./Utility.js");

let result = utility.square(5);
console.log(result); 

result = utility.cube(3);
console.log(result);

result = utility.calculate(10, 5, "+");
console.log(result);
*/
//only imports members individually from the Utility.js file, allowing us to use the calculate function directly without needing to reference the utility object.
const {calculate} = require("./Utility.js");
let result = calculate(10, 5, "add");
console.log(result);