// Read n from command line argument
let n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Invalid input! Enter a non-negative integer.");
} else {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}
