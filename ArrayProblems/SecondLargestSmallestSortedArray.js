// Function to generate a random 3-digit number
function getRandom3DigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

// Function to generate an array of 10 random 3-digit numbers
function generateRandomArray(size) {
    let numbers = [];
    for (let i = 0; i < size; i++) {
        numbers.push(getRandom3DigitNumber());
    }
    return numbers;
}

// Function to find the second largest and second smallest numbers
function findSecondLargestAndSmallest(numbers) {
    numbers.sort((a, b) => a - b); // Sort array in ascending order
    let secondSmallest = numbers[1]; // Second smallest element
    let secondLargest = numbers[numbers.length - 2]; // Second largest element
    return { secondSmallest, secondLargest };
}

// Generate and store random numbers in an array
let randomNumbers = generateRandomArray(10);
console.log("Generated Random Numbers:", randomNumbers);

// Find second largest and second smallest after sorting
let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Sorted Numbers:", randomNumbers);
console.log("Second Smallest:", result.secondSmallest);
console.log("Second Largest:", result.secondLargest);
