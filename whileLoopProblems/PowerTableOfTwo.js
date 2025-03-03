// Get input n from command line
let n = parseInt(process.argv[2]);

// Initialize variables
let power = 0;
let value = 1; // 2^0 = 1

// Print powers of 2 until 2^n or 256 is reached
while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    power++;
    value *= 2;
}
