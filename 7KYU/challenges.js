/* There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop. */

let busStops = [[10,0],[3,5],[5,8]]

// console.log(busStops[1][0])

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

console.log(squareDigits(num))

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
console.log(sumTwoSmallestNumbers(nums))

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

console.log(findNextSquare(625))

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
console.log(jadenfy(quote))

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types */
function findShort(s){
    let words = s.split(" ")
    words.sort(function(a, b) {
        return a.length - b.length
    })

    return words[0].length
}

let s = 'bitcoin take over the world maybe who knows perhaps'
console.log(findShort(s))


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

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))