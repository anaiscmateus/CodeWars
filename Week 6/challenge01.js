// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.
function century(year) {
    // Finish this :)
    // a century is defined by 100 years. divide by 100 to see how many chunks of 100 years it has

    let century = Math.ceil(year/100) // divide the year by 100 and round up to the nearest whole number    

    return century // return century
}

console.log(century(2000))