let a = Number(prompt("Enter the year: "));
if ((a % 400 === 0) || (a % 4 === 0 && a % 100 !== 0)) {
    console.log("The year is a leap year.");
} else {
    console.log("The year is not a leap year.");
}