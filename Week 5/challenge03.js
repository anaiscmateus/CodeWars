// GOAL: You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

arrOfNums = [1,-4,7,12]

function positiveSum(arr) {
    
    let sum = 0 // set sum = 0 as default

    for (let i = 0; i < arr.length; i++) {
    // loop through all of the numbers in the array

        let num = arr[i]  // give the numbers in the array a variable of num

        if (num > 0) {
            // if the number is greater than zero, add that number to the sum
            sum += num
        }
    }

    return sum // return the sum of the positive numbers
}

console.log(positiveSum(arrOfNums))