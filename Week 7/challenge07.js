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