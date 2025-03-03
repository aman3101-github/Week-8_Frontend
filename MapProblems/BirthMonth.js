function generateBirthMonths() {
    let birthMap = new Map();

    // Initialize map with empty arrays for each month
    for (let month = 1; month <= 12; month++) {
        birthMap.set(month, []);
    }

    // Assign 50 individuals with random birth months
    for (let i = 1; i <= 50; i++) {
        let birthMonth = Math.floor(1 + Math.random() * 12); // Random month (1-12)
        birthMap.get(birthMonth).push(i); // Store individual ID
    }

    console.log("Individuals grouped by birth month:");
    birthMap.forEach((individuals, month) => {
        console.log(`Month ${month}: ${individuals.length} individuals → ${individuals}`);
    });
}

// Generate and print birth month groups
generateBirthMonths();
