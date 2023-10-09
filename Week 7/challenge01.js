/* There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop. */

let busStops = [[10,0],[3,5],[5,8]]

// console.log(busStops[1][0])

var number = function(busStops){
    // Good Luck!
    // return the number of people still on the bus after the last stop
    // set total passengers on and off to 0
    let totalPassengersOn = 0
    let totalPassengersOff = 0
    
    // loop through all the passengers who got on and off and sum them up
    for (let i = 0; i < busStops.length; i++) {
        totalPassengersOn += busStops[i][0]
    }

    for (let i = 0; i < busStops.length; i++) {
        totalPassengersOff += busStops[i][1]
    }

    // return the difference to find the number of people on the bus after the last stop
    return totalPassengersOn - totalPassengersOff
}

number(busStops)