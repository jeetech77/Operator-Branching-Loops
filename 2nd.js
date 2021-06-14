const readlineSync = require('readline-sync');
let userNum=readlineSync.question("Enter a number to find out even or odd...\n");
if (userNum%2===0) {
    console.log("Given number is an even number");
}
else{
    console.log("Given number is an odd number");
}