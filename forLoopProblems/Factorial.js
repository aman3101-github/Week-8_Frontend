// Read number from command line argument
let num = parseInt(process.argv[2]);
let factorial = 1;

if (isNaN(num) || num < 0) {
    console.log("Invalid input! Enter a non-negative integer.");
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`${num}! = ${factorial}`);
}
