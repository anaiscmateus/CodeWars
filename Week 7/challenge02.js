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

   return squareNum
}

console.log(squareDigits(num))