const prompt = require("prompt-sync")();

let low = 1, high = 100, mid;
console.log("Think of a number between 1 and 100");

// Binary search logic
while (low < high) {
    mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number greater than ${mid}? (yes/no): `);

    if (response.toLowerCase() === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}

console.log(`Your magic number is: ${low}`);
