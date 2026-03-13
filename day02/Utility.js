function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate(num1,num2, operation){
    if(operation === "add"){
        return num1 + num2;
    } else if(operation === "subtract"){
        return num1 - num2;
    } else if(operation === "multiply"){
        return num1 * num2;
    } else if(operation === "divide"){
        return num1 / num2;
    } else {
        return "Invalid operation";
    }
}
//allows to export the functions defined in this file so that they can be imported and used in other files. 
//By exporting these functions, we can reuse them across different parts of our application without having to redefine them each time.
module.exports = {
    square,
    cube,
    calculate
};
