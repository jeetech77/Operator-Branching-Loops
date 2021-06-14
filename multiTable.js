const readlineSync = require('readline-sync');
let userNumber=parseInt(readlineSync.question("Enter your number here \n"));
for (let index = 1; index <= 12; index++) {
    console.log(`${userNumber} * ${index} : ${userNumber*index}`);
}