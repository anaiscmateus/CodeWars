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