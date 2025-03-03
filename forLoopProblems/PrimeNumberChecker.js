// Read number from command line argument
let num = parseInt(process.argv[2]);
let isPrime = true;

if (isNaN(num) || num < 2) {
    console.log("Invalid input! Enter a number greater than or equal to 2.");
} else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${num} is ${isPrime ? "a Prime Number" : "not a Prime Number"}`);
}
