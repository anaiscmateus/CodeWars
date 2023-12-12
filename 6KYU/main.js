/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. */
// parameters - number - integer
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

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// parameters - string
// returns a string with no duplicates
/* examples - ["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']
["kelless","keenness"]), ['keles','kenes'] */


function dup(s) {
    // loop through each letter
    // check if the current letter is the same as the next letter
    // if its not the same, add it to the new array
    let noDupes = []

    for (let i = 0; i < s.length; i++) {
        const word = s[i].split("")
        
        for (let i = 0; i < word.length; i++) {
            const letter = word[i]
            const nextLetter = word[i + 1]

            if (letter === nextLetter) {
                word.splice(i, 1)
            }         
        }

        noDupes.push(word.join(""))
    }

    return noDupes
};

// console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))
// console.log(dup(["abracadabra","allottee","assessee"]))



// example problems
/* Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid. */

// parameters - string of words - like a sentence, all lowercase, no periods
// return an array of the words - each word is an element in the array
// examples - "i love coding" => "love coding i"

function organizedList(x) {
    // split(" ") x
    // loop through each word, and grab the last letter
    // the index of the word will be ordered in alphabetical order by the last letter
    const listOfWords = x.split(" ").sort((a, b) => a.charCodeAt(a[-1]) - b.charCodeAt(b[-1]))

    return listOfWords
}

// console.log(organizedList('i love coding'))
// console.log(organizedList('man i need a taxi up to chicago'))

/* Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

Hint: You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations  */

// params - taking in an array of arrays
// return a number based on the product of the non duplicate array. 

function calcNumOfUniqueArrays(arr) {
    // loop through the array to identify the duplicates
    // remove one duplicate value from the array

    let counter = {}

    arr.forEach(e => {
        e.forEach(x => {
            if (counter[x]) {
                counter[x] ++
            } else {
                counter[x] = 1
            }
        })

        for (const [keys, value] of Object.entries(counter)) {
            if (value === 1) {

            }
        }    
    })


    return counter

    // for (let i = 0; i < arr.length; i++) {
    //     if (counter[arr[i]]) {
    //         counter[arr[i]] ++
    //     } else {
    //         counter[arr[i]] = 1
    //     }
    // }

    // return counter
}

// console.log(calcNumOfUniqueArrays([[1,2],[4],[5,6]]))
// console.log(calcNumOfUniqueArrays([[1,2],[4,4],[5,6,6]]))


/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

// params - string 
// returns the count of duplicate characters in the string

function duplicateCount(text){

  const counter = {}
  let result = 0
  text.toLowerCase().split("").forEach(e => {
    if(counter[e]) {
        counter[e] ++
    } else {
        counter[e] = 1
    }
  })

  for (const [key, value] of Object.entries(counter)) {
    if (value > 1) {
        result++
    }
  }

  return result
}

console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aabBcde'))

/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

// params are an array of numbers or words
// return the indexes with an even number, but skip over 0

function removeEveryOther(arr) {
    return arr.map((e, i) => {
      if (i === 0 || i % 2 === 0) {
        return e
      }
    }).filter(e => e !== undefined)
  }
  
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again'])
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9])
  console.log(removeEveryOther([[1, 2]]), [[1, 2]])
  console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']])

/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

high('man i need a taxi up to ubud'), 'taxi');
high('what time are we climbing up the volcano'), 'volcano'); 
high('take me to semynak'), 'semynak');   
high('aa b'), 'aa');
high('b aa'), 'b');
high('bb d'), 'bb');
high('d bb'), 'd');
high('aaa b'), 'aaa');

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

// params - string of words
// return the highest scoring word
// point are according to the position in the alphabet

function high(str) {
    const arrOfWords = str.split(" ");
  
    const scores = arrOfWords.map(word =>
      word.split("").reduce((a, b) => a + b.charCodeAt() - 96, 0)
    );
  
    const maxScore = Math.max(...scores);
    const indexOfMaxScore = scores.indexOf(maxScore);
  
    return arrOfWords[indexOfMaxScore];
  }
  
  console.log(high("man i need a taxi up to ubud"), "taxi");
  console.log(high('what time are we climbing up the volcano'), 'volcano');
  console.log(high('take me to semynak'), 'semynak');
  console.log(high('aa b'), 'aa');
  console.log(high('b aa'), 'b');
  console.log(high('bb d'), 'bb');
  console.log(high('d bb'), 'd');
  console.log(high('aaa b'), 'aaa');