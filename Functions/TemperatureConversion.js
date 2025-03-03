const prompt = require("prompt-sync")();

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    if (celsius < 0 || celsius > 100) {
        console.log("Invalid input! Celsius must be between 0 and 100.");
        return;
    }
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    if (fahrenheit < 32 || fahrenheit > 212) {
        console.log("Invalid input! Fahrenheit must be between 32 and 212.");
        return;
    }
    return (fahrenheit - 32) * 5 / 9;
}

// Main program
let choice = parseInt(prompt("Choose conversion: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius: "));
if (choice === 1) {
    let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
    console.log("Temperature in Fahrenheit:", celsiusToFahrenheit(celsius));
} else if (choice === 2) {
    let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
    console.log("Temperature in Celsius:", fahrenheitToCelsius(fahrenheit));
} else {
    console.log("Invalid choice!");
}
