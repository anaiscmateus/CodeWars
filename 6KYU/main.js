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

/* Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

*/

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4,6,2,1,9,63,-134,566]), 566);
console.log(max([5]), 5);