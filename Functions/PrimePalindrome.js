const prompt = require("prompt-sync")();

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Main program
let num = parseInt(prompt("Enter a number: "));

if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
    let palindromeNum = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindromeNum}.`);
    
    if (isPrime(palindromeNum)) {
        console.log(`Palindrome ${palindromeNum} is also prime.`);
    } else {
        console.log(`Palindrome ${palindromeNum} is NOT prime.`);
    }
} else {
    console.log(`${num} is NOT a prime number.`);
}
