// Read year from command line arguments
let year = parseInt(process.argv[2]);

// Check for 4-digit number
if (year >= 1000 && year <= 9999) { 
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year, "is a Leap Year");
            } else {
                console.log(year, "is NOT a Leap Year");
            }
        } else {
            console.log(year, "is a Leap Year");
        }
    } else {
        console.log(year, "is NOT a Leap Year");
    }
} else {
    console.log("Please enter a valid 4-digit year.");
}
