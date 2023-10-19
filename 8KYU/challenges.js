/* 8KYU */
// GOAL: Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    
    i += i // add i to itself
    return i // return the sum
}

console.log(doubleInteger(10))

// GOAL: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    
    let word = '' // set an empty variable to hold the new word

    for (let i = 1; i < str.length - 1; i++) {
        // loop through the word starting from the second letter to the second to last letter, add those letters to the 'word' variable
        word += str[i]
    }
   
    return word // return the new word
}

console.log(removeChar('eloquent'))

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

// GOAL: You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODOs
    const totalFuel = mpg * fuelLeft // set a variable for total fuel calculation

    if (totalFuel >= distanceToPump) {
        // check to see if the total fuel is greater than or equal to the distance to the nearest pump
        return true // if true, it's possible
    } else {
        return false // if false, it's not possible
    }
}

console.log(zeroFuel(50, 25, 2))

// GOAL: Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
function booleanToString(b){
    return b.toString() // convert b to a string and return it
}

console.log(booleanToString(true))

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.
function century(year) {
    // Finish this :)
    // a century is defined by 100 years. divide by 100 to see how many chunks of 100 years it has

    let century = Math.ceil(year/100) // divide the year by 100 and round up to the nearest whole number    

    return century // return century
}

console.log(century(2000))

// GOAL: Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    //#Happy Coding! ^_^
    timeSinceMidnight = (h * 3600000) + (m * 60000) + (s * 1000)
    return timeSinceMidnight
}

console.log(past(0, 2, 1))

// Complete the solution so that it reverses the string passed into it.
function solution(str){
    // set an empty string to store the reversed word.
    let backwards = ''

    // for loop with i equal to the length of the word given minus 1.
    for (let i = str.length - 1; i > -1; i--) {
        // access the character at index of the word
        backwards += str[i] // concat that character to `backwards`
    }    
   
    return backwards  //return the reversed string
}

solution('world')

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    //check to see if number is even
    if (number % 2 === 0) {
    return 'Number is even'
    } else {
    return 'Number is odd'
    }
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
    // Code
    if (operation === '+') {
      return value1 + value2
      } else if (operation === '-') {
          return value1 - value2
      } else if (operation === '*') {
          return value1 * value2
      } else if (operation === '/') {
          return value1 / value2
      }
  }       

/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. */

function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m
    } else {
        return 0
    }
}


/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
*/

function areYouPlayingBanjo(name) {  
    let firstLetter = name[0] // get the first letter of the name
    if (firstLetter === 'r' || firstLetter === 'R') {
    // if check to see if the first letter is "R" or "r"
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("rolf"))

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
    // your code here
    if (a.includes(x)) {
    // check to see if the array 'a' includes the value passed in 'x'
        return true // if yes, return true
    } else {
        return false // if not, return false
    }
}

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    // Code here
    return str.toUpperCase()
  }