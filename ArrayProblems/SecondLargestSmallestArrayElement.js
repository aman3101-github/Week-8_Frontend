// Function to generate a random three-digit number
function generateRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

// Function to find the second largest and second smallest number in the array without sorting
function findSecondLargestAndSmallest(numbers) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of numbers) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    console.log(`Second Largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);
}

// Generate the array with 10 random three-digit numbers
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(generateRandomNumber());
}

console.log("Generated Numbers:", randomNumbers);
findSecondLargestAndSmallest(randomNumbers);
