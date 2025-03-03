// Read 3 numbers from command line arguments
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

// Perform arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Initialize max and min
let max = result1;
let min = result1;

// Compare to find maximum
if (result2 > max) {
    max = result2;
} 
if (result3 > max) {
    max = result3;
} 
if (result4 > max) {
    max = result4;
}

// Compare to find minimum
if (result2 < min) {
    min = result2;
} 
if (result3 < min) {
    min = result3;
} 
if (result4 < min) {
    min = result4;
}

// Output results
console.log("Results:");
console.log("a + b * c =", result1);
console.log("a % b + c =", result2);
console.log("c + a / b =", result3);
console.log("a * b + c =", result4);
console.log("Maximum:", max);
console.log("Minimum:", min);
