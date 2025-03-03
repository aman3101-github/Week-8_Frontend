// Function to generate the random number on dice
function rollDie() {
    // Generates a number between 1 and 6
    return Math.floor(1 + Math.random() * 6); 
}

function rollUntilTenTimes() {
    // Store counts of each number
    let dieMap = new Map(); 
    let maxCount = 10;
    
    // Initialize map with 0 count for each number
    for (let i = 1; i <= 6; i++) {
        dieMap.set(i, 0);
    }

    let reachedMax = false;
    while (!reachedMax) {
        let roll = rollDie(); // Roll the die
        dieMap.set(roll, dieMap.get(roll) + 1); // Increment count
        
        // Check if any number reached 10 times
        if (dieMap.get(roll) === maxCount) {
            reachedMax = true;
        }
    }

    console.log("Die Roll Counts:", dieMap);

    // Find max and min rolled numbers
    let maxRolled = [...dieMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
    let minRolled = [...dieMap.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log(`Number that appeared MAX times: ${maxRolled[0]} (${maxRolled[1]} times)`);
    console.log(`Number that appeared MIN times: ${minRolled[0]} (${minRolled[1]} times)`);
}

// Run the simulation
rollUntilTenTimes();
