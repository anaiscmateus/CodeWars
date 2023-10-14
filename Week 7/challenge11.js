/* 8KYU - You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
    // your code here
    if (a.includes(x)) {
    // check to see if the array 'a' includes the value passed in 'x'
        return true // if yes, return true
    } else {
        return false // if not, return false
    }
}