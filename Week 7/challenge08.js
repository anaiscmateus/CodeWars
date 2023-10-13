/* 8KYU 
Create a function which answers the question "Are you playing banjo?".
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