const prompt = require("prompt-sync")();

// Function to check if a number is a palindrome
function isPalindrome(num) {
    // Convert number to string
    let strNum = num.toString();

    // Reverse the string
    let reversedStr = "";
    for (let i = strNum.length - 1; i >= 0; i--) {
        reversedStr += strNum[i];
    }

    // Compare original string and reversed string
    if (strNum === reversedStr) {
        return true;
    } else {
        return false;
    }
}

// Taking user input
let num = parseInt(prompt("Enter a number: "));

// Checking if the number is a palindrome
if (isPalindrome(num)) {
    console.log(num + " is a palindrome.");
} else {
    console.log(num + " is NOT a palindrome.");
}
