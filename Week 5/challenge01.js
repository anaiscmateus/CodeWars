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

