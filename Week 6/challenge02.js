// GOAL: Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^
    timeSinceMidnight = (h * 3600000) + (m * 60000) + (s * 1000)
    return timeSinceMidnight
}

console.log(past(0, 2, 1))