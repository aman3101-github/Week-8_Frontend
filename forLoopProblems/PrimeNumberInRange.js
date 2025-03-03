// Read start and end from command line arguments
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

if (isNaN(start) || isNaN(end) || start < 2 || start > end) {
    console.log("Invalid input! Enter valid range (start ≥ 2 and start ≤ end).");
} else {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(num);
    }
}
