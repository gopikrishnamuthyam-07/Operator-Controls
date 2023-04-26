function checkIsPrime(number){
    let factors = 0;
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            factors += 1
        }
    }
    return factors === 0
}
let number = 100;
isPrime = checkIsPrime(number)
console.log(isPrime)