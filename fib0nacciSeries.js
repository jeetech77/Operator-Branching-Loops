const readlineSync = require('readline-sync');
let lastNum = parseInt(readlineSync.question("Enter the up to the last number to print the fibonacci series :- \n"));

let firstNum = 0;
let secNum = 1;
let nextNum = firstNum + secNum;
let fibSeries = [firstNum, secNum, nextNum];

for (let index = 0; nextNum < lastNum; index++) {
    firstNum = secNum;
    secNum = nextNum;
    nextNum = firstNum + secNum;
    if (nextNum >= lastNum) {
        // If nextNum will become more than lastNum after addition then it will stop to push that value in the fibSeries.
        break;
    }
    fibSeries.push(nextNum);   // Pushing every value in fibSeries.
}

fibSeries.forEach(element => {
    console.log(element);
});