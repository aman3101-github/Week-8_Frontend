// Read day and month from command line arguments
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);
console.log(day, month);

if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
    console.log("True");
} else {
    console.log("False");
}
