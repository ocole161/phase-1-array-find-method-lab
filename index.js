// code your solution here

function isWin(record) {
    return (record.result === "W")
}

function superbowlWin(record) {
    let result
    if (record.find(isWin)) {
        result = record.find(isWin).year
    }
    else {
        result = record.find(isWin)
    }
    return result
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

// console.log(isWin(record))

// console.log(record.find(isWin))

// console.log(record.find(isWin).result)

// console.log(record.find(isWin).year) 

console.log(superbowlWin(record))