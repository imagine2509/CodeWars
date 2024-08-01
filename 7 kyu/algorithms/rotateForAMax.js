/**
 * https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript
 *
 * Let us begin with an example:
 *
 * Take a number: 56789. Rotate left, you get 67895.
 *
 * Keep the first digit in place and rotate left the other digits: 68957.
 *
 * Keep the first two digits in place and rotate the other ones: 68579.
 *
 * Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
 *
 * You have the following sequence of numbers:
 *
 * 56789 -> 67895 -> 68957 -> 68579 -> 68597
 *
 * and you must return the greatest: 68957.
 *
 * Task
 *
 * Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
 *
 * So max_rot (or maxRot or ... depending on the language) is such as:
 *
 * max_rot(56789) should return 68957
 *
 * max_rot(38458215) should return 85821534
 *
 * */

function maxRot(n) {
    const stringN = n.toString();
    const arr1 = [stringN]; // create array with initial number to push received numbers

    /** create function to rotate received number */
    const rotate = (stringNum) => {
        const arr = stringNum.split('') // split string into array
        const first = arr.shift() // get first digit
        arr.push(first) // create new array of rotated numbers of string type
        return arr.join('') // return rotated number
    }

    const checkIfDone = (stringsArray) => {
        if (stringsArray.length === stringN.length) { // base case
            let res = 0
            stringsArray.forEach((el) => {
                if (Number(el) > res) res = Number(el)
            })
            return res
        } else {
            const numberToRotate = stringsArray[stringsArray.length - 1].toString() // find last number in array

            const staticPart = numberToRotate
                .toString()
                .slice(0, stringsArray.length - 1) // find part that should remain unreverted on each iteration

            const dynamicPart = numberToRotate
                .toString()
                .slice(staticPart.length, numberToRotate.length) // find part that we should revert

            const rotatedPart = rotate(dynamicPart)
            const newNumber = parseInt(staticPart + rotatedPart)
            stringsArray.push(newNumber)
            return checkIfDone(stringsArray) // recursive call
        }
    }

    return checkIfDone(arr1) // start recursive process and return result
}

console.log(maxRot(56789))

/** Most upvoted solution in CodeWars */

function maxRot(n) {
    var str = n.toString();
    var arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}

/** My solution is much bigger because I wanted
 * to make a solution with recursive call
 * to get better understanding of this concept */