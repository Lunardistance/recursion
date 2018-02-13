function factorial(n) {
    //find the endpoing
    if (n <= 1) return 1
    //call the function recursively
    return n * factorial(n - 1)
}
// console.log(factorial(5))

function fibonacci(n) {
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(8))


function summit(n) {
    if (n <= 1) return 1
    return n + summit(n - 1)
}
console.log(summit(6))



function sumMult3(n) {
    if (n < 3) return (0)
    n = (n % 3 !== 0) ? (n - (n % 3)) : n
    return n + sumMult3(n - 3)
}

console.log(sumMult3(10))

function sumMult3Alt(n) {
    return (n < 3) ? 0 : (n % 3 !== 0) ? sumMult3(n - (n % 3)) : n + sumMult3(n - 3)
}
console.log(sumMult3Alt(10))



function removeVowels(str) {
    if (str.length === 0) return
    return('aeiouAEIOU'.indexOf(str[0])>-1) ?  ""+removeVowels(str.slice(1)) : str[0]+removeVowels(str.slice(1))
}