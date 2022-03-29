// Write your code below this line.

//Partner Discussion 
// let array = []

// function luckyNumbers(n) {
//     for (let i = 0; i < n; i++) {
//         let num = Math.floor(Math.random() * 10);
//         array.push(num)
//     }
//     console.log(array)
//     }

// luckyNumbers(12)

function findLuckyNumbers(n) {
    let array = [1,2,3,4,5,6,7,8,9,10]
    let luckyNumbers = []
    for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * array.length);
        luckyNumbers.push(array[x])
        array.splice(x, 1)
    }
    return luckyNumbers
}

console.log(findLuckyNumbers(7))