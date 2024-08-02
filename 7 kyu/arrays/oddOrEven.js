/** https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
 * Given a list of integers, determine whether the sum of its elements is odd or even.
 *
 * Give your answer as a string matching "odd" or "even".
 *
 * If the input array is empty consider it as: [0] (array with a zero).
 *
 * Examples:
 *
 * Input: [0]
 * Output: "even"
 *
 * Input: [0, 1, 4]
 * Output: "odd"
 *
 * Input: [0, -1, -5]
 * Output: "even"
 * */

function oddOrEven(array) {
    if (array.length === 0) return 'even' // empty array case
    const sum = array.reduce((acc, value) => acc + value) // get elements sum with reduce method
    return sum % 2 === 0? 'even' : 'odd' // return even or odd depending on the modulo
}

console.log(oddOrEven([0])) // "even"
console.log(oddOrEven([0, 1, 4])) // "odd"
console.log(oddOrEven([0, -1, -5])) // "even"