// GOAL: You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODOs
    const totalFuel = mpg * fuelLeft // set a variable for total fuel calculation

    if (totalFuel >= distanceToPump) {
        // check to see if the total fuel is greater than or equal to the distance to the nearest pump
        return true // if true, it's possible
    } else {
        return false // if false, it's not possible
    }
}

console.log(zeroFuel(50, 25, 2))