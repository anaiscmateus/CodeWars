/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. */
// parameters - number 
// return the expanded form of the number in a string '10 + 2'

function expandedForm(num) {
    // Your code here
    // take in the number
    // convert it to a string
    // loop through each of the numbers in the string 
    // take the length of the string into account
    let expandedNumber = []
    let lastNumIndex = num.toString().length - 1
    num.toString().split("").forEach((digit, i) => {
        if (digit > 0) {
            let distance = lastNumIndex - i // determines how many zeroes there are, the distance between the first number and the last number
            for (let i = 0; i < distance; i++) {
                    digit += '0'
                }

            expandedNumber.push(digit)
        }
    })

    return expandedNumber.join(" + ")
}


/* Complete the solution so that the function will break up camel casing, using a space between words. */
// complete the function
// parameters a string that will get looped thru
// return a string that breaks up the word based on camelCasing
function solution(string) {
    let solutionString = []
    string.split("").forEach(letter => {
        if(letter === letter.toUpperCase()) {
            solutionString.push(' ')
        }
        solutionString.push(letter)
    })
    return solutionString.join("")
}

/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

// params? a string, convert to a new string
// ignore capitalization
// return a new string with "(" or ")"

/* Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

function duplicateEncode(word){
    // .toLowerCase()
    // .split()
    const newWord = word.toLowerCase().split("").map((letter, i, word) => {
        return word.indexOf(letter) === word.lastIndexOf(letter) ? "(" : ")"
    })

    return newWord.join("")
    // .map()
    // .join()
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// parameters - taking in a string, or array
// returning a list of distinct items from the iterable param conserving the order of elems

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable) {
    // your code here - remember iterable can be a string or an array
    // loop through parameter to grab only the distinct values
    let uniqueList = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1]) {
            uniqueList.push(iterable[i])
        }
    }
    return uniqueList // return list of distinct values
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3])