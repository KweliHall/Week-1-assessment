const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
console.log("Welcome to the password validator.");
reader.question("type in your strogest password", function(answer) {
    if (answer.length >= 10) {
        console.log("success, your password meets the requirements.")
    }else {
        console.log("your password does not meet the requirements.")
    }
});