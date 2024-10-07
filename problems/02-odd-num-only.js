/*
Define a function oddNumOnly that takes in a number parameter and returns the
number if it is odd and returns null otherwise.
*/

// Your code here 
// create a function that takes in a number parameter
function oddNumOnly(num1) {
    // if the number is odd, return the number
    if (num1 % 2 !== 0) {
        return num1;
    } else {
        return null;
    }
}

console.log(oddNumOnly(2));   // => null
console.log(oddNumOnly(5));   // => 5
console.log(oddNumOnly(-17)); // => -17
console.log(oddNumOnly(0));   // => null
console.log(oddNumOnly(3))    // => 3

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddNumOnly;
