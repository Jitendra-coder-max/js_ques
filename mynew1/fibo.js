

// const fib = (n) => {

//     const fibArr = [0,1]

//     for(let i = 2; i<=n; i++){
//         fibArr.push(fibArr[i-1]+ fibArr[i-2])
//     }

//     return fibArr
// }

// console.log(fib(10))



function generateFibonacciUntilValue(limit) {
    var fibonacciSeries = [0, 1];
    var nextFibonacci = 1;
    while (nextFibonacci <= limit) {
        fibonacciSeries.push(nextFibonacci);
        nextFibonacci = fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2];
    }
    return fibonacciSeries;
}

// Example usage:
var limit = 21; // Generate Fibonacci numbers until the value exceeds 21
console.log(generateFibonacciUntilValue(limit)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
