/* There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop. */

let busStops = [[10,0],[3,5],[5,8]]

let number = function(busStops){
    // Good Luck!
    // return the number of people still on the bus after the last stop
    // set total passengers on and off to 0
    let totalPassengersOn = 0
    let totalPassengersOff = 0
    
    // loop through all the passengers who got on and off and sum them up
    for (let i = 0; i < busStops.length; i++) {
        totalPassengersOn += busStops[i][0]
    }

    for (let i = 0; i < busStops.length; i++) {
        totalPassengersOff += busStops[i][1]
    }

    // return the difference to find the number of people on the bus after the last stop
    return totalPassengersOn - totalPassengersOff
}

number(busStops)

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding! */

let num = 9119 

function squareDigits(num){
   let text = num.toString() // convert num passed through to a string
   let squareNum = '' // variable to hold the concat of squared nums
   for (let digit of text) {
    // loop thru each digit in the string and square it. Convert it to a string for concatenation
    digit = (digit ** 2).toString()

    squareNum += digit     // concat squared digits
   }

   return Number(squareNum)
}


/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    numbers.sort(function(a,b) {
        // sort numbers from smallest to largest using higher order function
        return a - b
    })

    return numbers[0] + numbers[1] //  return the sum of the first two numbers from the list which is now sorted from smallest to largest
}

let nums = [5, 8, 12, 19, 22]

/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative. */

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let squareRoot = Math.sqrt(sq) // get the square root of the number passed in
    if (squareRoot % 1 === 0) {
    // if the square root has no remainder, then it is a whole number
    // a perfect square is when you multiply the whole number by itself
        return (squareRoot + 1) ** 2 // get the next perfect square by adding 1 to the current square root and square it. return it.
    } else {
        return -1 // return -1 if the square passed in is not a perfect square
    }
}

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

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

function jadenfy(quote) {
    let splitQuote = quote.split(' ')
    let newQuote = []
    splitQuote.forEach(word => {
        let newWord = word.slice(0,1).toUpperCase() + word.slice(1)
        newQuote.push(newWord)
    })
    return newQuote.join(' ')
}

let quote = "How can mirrors be real if our eyes aren't real"

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types */
function findShort(s){
    let words = s.split(" ")
    words.sort(function(a, b) {
        return a.length - b.length
    })

    return words[0].length
}

/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let dnaSequence = dna.split("") // split the string into an array
    let rnaSequence = [] // new empty array to push RNA sequence to
    
    // loop through the DNA sequence
    dnaSequence.forEach(base => {
        if (base === 'T') {
        // if the base is equal to T change it to U
            base = 'U'
            rnaSequence.push(base) // push the new base to rnaSequence
        } else {
        // if not, still push it to rnaSequence
            rnaSequence.push(base)
        }
    })
    return rnaSequence.join("") // return rnaSequence as a string
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    // split the string into an array, and sort the numbers from smallest to largest
    const n = numbers.split(" ").sort(function(a,b) {
        return a - b
    })
    
    // return the largest and the smallest numbers in a string
    return `${n[(n.length - 1)]} ${n[0]}`
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let letters = str.toLowerCase().split("")
    let xCount = 0
    let yCount = 0
    let equalCount = false
    letters.forEach(function(letter){
        if (letter === 'x') {
            xCount += 1
        } else if (letter === 'o') {
            yCount += 1
        }
    })
    
    if (xCount === yCount) {
        equalCount = true
    }

    return equalCount
}

/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z. */

function printerError(s) {
    // your code
    let errorCount = 0
    s.split("").forEach(letter => {
        if (letter.toLowerCase() > 'm') {
            errorCount ++
        }
    })
    return `${errorCount}/${s.length}`
}

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// what are the parameters of the function?
// n which is a number
// the amount of times we increase by 3
// what will the function return 
// return the sum of the fractions

function SeriesSum(n)
{
    // declare variable for sum and set to zero
    let btm = 1
    let sum = 1
    // create a for loop where we let i = 1, i < n, i+3
    for (let i = 0; i < n; i++) {
        // check Rto see is btm is greater than 1
        if (btm > 1) {
            // add 1/btm to the sum
            sum += 1/btm
        }

        // add 3 to btm since we are counting by 3s
        btm += 3

    }  

    // if n < 1, then the sum is 0
    if (n < 1 ) {
        sum = 0
    }


    // return the sum rounded to two decimal places as a string
    return sum.toFixed(2).toString()
    
}

/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

// parameters - passing in a string of dna symbols
// return - the complementary symbols for each letter passed in

function DNAStrand(dna){
    // your code here
    // turn dna string into an array 
    dnaArray = dna.split("")
    // create a new array for the complementary string
    let compArr = []
    // loop through each letter
    dnaArray.forEach(letter => {
    // check the letter value and find it's complement and append to the array
    if (letter === 'A') {
        compArr.push('T')
    } else if (letter === 'T') {
        compArr.push('A')
    } else if (letter === 'G') {
        compArr.push('C')
    } else if (letter === 'C') {
        compArr.push('G')
    }
    })
    // convert the array into a string
    // return the complementary dna string
    return compArr.join("")
}

/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. */
// parameters: two strings
// returns a new sorted string, containing distinct letters

function longest(s1, s2) {
    let combinedStr = s1 + s2
    let newStr = []
    
    combinedStr.split("").forEach(char => !newStr.includes(char) ? newStr.push(char) : char)

    return newStr.sort().join("")
}



function disemvowel(str) {
    const disemvowelStr = str.split("").map(letter => {
        const lowercaseLetter = letter.toLowerCase();
        if (!(lowercaseLetter === 'a' || lowercaseLetter === 'e' || lowercaseLetter === 'i' || lowercaseLetter === 'o' || lowercaseLetter === 'u')) {
            return letter;
        }
    }).join("");

    return disemvowelStr;
}


/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

// params - a word (str)
// return the middle char of the word if the length if odd, the middle 2 if the word length in even
// split the word
// check if the word is even or odd word.length % 2  === 0
// if even, return the middle two letters
// if odd return the middle letter

function getMiddle(word) {
    const splitWord = word.split("");
    const middleIndex = Math.floor(splitWord.length / 2)
    
    return splitWord.length % 2 === 0 ? splitWord[middleIndex - 1] + splitWord[middleIndex] : splitWord[middleIndex]
}