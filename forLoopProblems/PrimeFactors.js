// Read number from command line argument
let num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Invalid input! Enter a number greater than 1.");
} else {
    console.log(`Prime factors of ${num}:`);
    
    // Divide by 2
    while (num % 2 === 0) {
        console.log(2);
        num /= 2;
    }
    
    // Check odd factors from 3 to √N
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            console.log(i);
            num /= i;
        }
    }
    
    // If remaining number is prime
    if (num > 1) {
        console.log(num);
    }
}
