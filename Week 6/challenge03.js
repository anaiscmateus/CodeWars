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