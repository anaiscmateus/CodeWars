/* 8KYU */
// GOAL: Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    // i will be an integer. Double it and return it.

    i += i // add i to itself
    return i // return the sum
}

// GOAL: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    
    let word = '' // set an empty variable to hold the new word

    for (let i = 1; i < str.length - 1; i++) {
        // loop through the word starting from the second letter to the second to last letter, add those letters to the 'word' variable
        word += str[i]
    }
   
    return word // return the new word
}

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

// GOAL: Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
function booleanToString(b){
    return b.toString() // convert b to a string and return it
}

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

// GOAL: Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    //#Happy Coding! ^_^
    timeSinceMidnight = (h * 3600000) + (m * 60000) + (s * 1000)
    return timeSinceMidnight
}

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

/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

function feast(beast, dish) {
    //your function here
      
      let beastFirst = beast[0]
      let beastLast = beast[beast.length - 1]
      let dishFirst = dish[0]
      let dishLast = dish[dish.length - 1]
      
      if (beastFirst === dishFirst && beastLast === dishLast) {
        return true
      } else {
        return false
      }
    }

/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once. */

function doubleChar(str) {
    // Your code here
    const doubleStr = str.split('').map(function(letter)
    {
        return letter + letter
    })

    return doubleStr.join('')
}
  
// console.log(doubleChar("abcd"))


/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */

function sumArray(array) {
    let sum = 0
    if (array) {
        if(array.length > 2) {
            array.sort((a,b) => a - b)
            for (let i = 1; i < (array.length - 1); i++) {
                sum += array[i]
            }
        }
    }
    return sum
}

function squareSum(numbers){
    // Complete the square sum function so that it squares each number passed into it and then sums the results together.
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2
    }

    return sum
}

/* Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :) */

// what are the parameters of the function?
// integer; the number of times the hula hoop goes around

// what will the function return?
// an encouraging message
    // if n > 10, then the message will be different

function hoopCount (n) {
    // check to see if n >= 10
    // if yes, we are going to console log "Great, now move on to tricks"
    // if n < 10 then console log "Keep at it until you get it"
    return n >= 10 ? "Great, now move on to tricks" : 'Keep at it until you get it'
}

/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner. */
// what are the parameters?
// name and owner which are strings

// what will the function return?
// the message "hello boss" if the name is equal to the owner, and "hello guest" if not

function greet (name, owner) {
    // have a conditional to check to see if the name === owner
    // if it is, return "hello boss"
    // else, return "hello customer"
    return name.toLowerCase() === owner.toLowerCase() ? "Hello boss" : "Hello guest"
}

/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

// what are the params?
// array: a list of numbers

// what will the function return? 
// the product of the nums of the array

function grow(x){
    // declare product variable and set it equal to 1
    let product = 1

    // loop through each number of the array and multiply it to the product variable
    x.forEach(n => product *= n)

    return product // return the product variable
}

/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */

// what are the parameters? an array of class mates grades and an integer representing your grade
// what do we want to return? return whether or not your grade if higher than the class avg (true or false)

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // get the average of the grades of your classmates
    // compare the average to your score and return true or false
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length ? true : false
}

/* Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade. */

function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3
    return avg < 59 ? 'F' : avg < 69 ? 'D' : avg < 79 ? 'C' : avg < 89 ? 'B' : avg <= 100 ? 'A' : avg
}

/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
    // Your code here
   return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
}


// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

/* After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */

function rentalCarCost(d) {
    // get total
    // check for number of days to decide the discount off the total
    let total = d * 40

    if (d >= 7) {
        total -= 50
    } else if ( d >= 3) {
        total -= 20
    }

    return total
}

/* We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number. */

const stringToNumber = function(str){
    return Number(str);
}

/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number. */


function checkForFactor (base, factor) {
    // code here
    return base % factor === 0 ? true : false
}

/* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One". */ 

function switchItUp(number){
    //Write your own Code!
    return number === 1 ? 'One' : number === 2 ? 'Two' : number === 3 ? 'Three': number === 4 ? 'Four' : number === 5 ? 'Five' : number === 6 ? 'Six' : number === 7 ? 'Seven' : number === 8 ? 'Eight' : number === 9 ? 'Nine' : number === 0 ? 'Zero' : 'not valid number'
}

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

function correct(string)
{
  let newString = []
    string.split("").forEach(letter => {
        if (letter === '5') {
            letter = 'S'
        }

        if (letter === '0') {
            letter = 'O'
        }

        if (letter === '1') {
            letter = 'I'
        }
      newString.push(letter)
    })

    return newString.join("")
}