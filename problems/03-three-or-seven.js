/*Define a function threeOrSeven that takes in a number parameter and returns
3 if the number is divisible by 3, 7 if the number is divisible by 7, and
21 if the number is divisible by both 3 and 7. Otherwise the function should
return the original number.
*/

// Your code here 

// Create a function threeOrSeven that takes in a number parameter
function threeOrSeven(num1) {
    // if the number is divisible by 3 and 7, return 21
    // check 21 first because 21 is divisible by both 3 and 7
    if (num1 % 3 === 0 && num1 % 7 === 0) {
        return 21;
    // if the number is divisible by 3, return 3
    } else if (num1 % 3 === 0) {
        return 3;
    // if the number is divisible by 7, return 7
    } else if (num1 % 7 === 0) {
        return 7;
    // otherwise, return the original number
    } else {
        return num1;
    }
}

console.log(threeOrSeven(3));   // => 3
console.log(threeOrSeven(15));  // => 3
console.log(threeOrSeven(7));   // => 7
console.log(threeOrSeven(14));  // => 7
console.log(threeOrSeven(21));  // => 21
console.log(threeOrSeven(-42)); // => 21
console.log(threeOrSeven(100)); // => 100
console.log(threeOrSeven(0));   // => 0
console.log(threeOrSeven(-20)); // => -20

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeOrSeven;
