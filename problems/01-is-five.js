/*
Define a function `isFive` that takes in a number parameter. It should return
a string of 'is five' if the number is equal to 5 and `null` if it is not.
*/

// Your code here 
// create a function that takes in a number parameter
function isFive(num1) {
    // if the number is equal to 5, return 'is five'
    if (num1 === 5) {
        return 'is five';
    }
}

console.log(isFive(5));      // => 'is five'
console.log(isFive(13));     // => null
console.log(isFive("apple")) // => null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isFive;
