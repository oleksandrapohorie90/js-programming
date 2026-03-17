// environments: test, stage, dev, uat, prod

let environment = "prod";

if (environment === "test") {
  console.log("Running in Test Environment");
} else if (environment === "stage") {
  console.log("Running in Stage Environment");
} else if (environment === "dev") {
  console.log("Running in Dev Environment");
} else if (environment === "uat") {
  console.log("Running in UAT Environment");
} else if (environment === "prod") {
  console.log("Running in Production Environment");
} else {
  throw new Error(`Invalid environment: ${environment}`);
}

console.log("======================");
switch (environment) {
  case "test":
    console.log("Running in Test Environment");
    break;
  case "stage":
    console.log("Running in Stage Environment");
    break;
  case "dev":
    console.log("Running in Dev Environment");
    break;
  case "uat":
    console.log("Running in UAT Environment");
    break;
  case "prod":
    console.log("Running in Production Environment");
    break;
  default:
    throw new Error(`Invalid environment: ${environment}`);
}


//createa loop with 10 interations and print the iteration number in each iteration
for (let i = 1; i <= 10; i++) {
  console.log(`Iteration number: ${i}`);
}

console.log("======================");
let str = "Hello, World!";
for (let char of str) {
  console.log(char);
}
let dropdownOptions = ["Option 1", "Option 2", "Option 3"];
for (let option of dropdownOptions) {
  console.log(`Verifying each: "${option}"`);
}
/**
 * Word Break Problem
Given an input string and a dictionary of words, find out if the input string can be segmented
into a space-separated sequence of dictionary words. See following examples for more details.
This is a famous Google interview question, also being asked by many other companies now a days.
Consider the following dictionary
    { i, like, sam, sung, samsung, mobile, ice, cream, icecream, man, go, mango}
    Input:  ilike
    Output: Yes
    The string can be segmented as "i like".

    Input:  ilikesamsung
    Output: Yes
    The string can be segmented as "i like samsung" or "i like sam sung".
 */
function wordBreak(s, dict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && dict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}

// Test the function
let dict = ["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "icecream", "man", "go", "mango"];
console.log(wordBreak("ilike", dict)); // true
console.log(wordBreak("ilikesamsung", dict)); // true
console.log(wordBreak("ilikesam", dict)); // true
console.log(wordBreak("xyz", dict)); // false
