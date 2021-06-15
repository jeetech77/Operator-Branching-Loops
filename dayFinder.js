const readlineSync = require('readline-sync');

let daysObj = {
    sunday: "WeekEnd",
    saturday: "WeekEnd",
    monday: "WeekDay",
    tuesday: "WeekDay",
    wednesday: "WeekDay",
    thrusday: "WeekDay",
    friday: "WeekDay",
}

let userDay=(readlineSync.question("Enter the day name : \n").toLowerCase());
if (daysObj[userDay]===undefined) {    // Handling invalid inputs.
    console.log(`${userDay} is not a proper day name.`);
}
else
console.log(`It's a ${daysObj[userDay]}`);    // Accesing object value using object properties.