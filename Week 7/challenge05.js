/* Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0. */
function findAverage(array) {
    // your code here
    let sum = 0
    if (array.length === 0) {
        return 0
    } else {
        array.forEach(number => sum += number)
        return sum / array.length
    }
}

let numbers = [1,2,3,4]
console.log(findAverage(numbers))