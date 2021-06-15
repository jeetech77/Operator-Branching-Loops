const readlineSync = require('readline-sync');
let userNum=readlineSync.question("Enter a number to find the factorial : \n");
let factOfNum=userNum;
while (userNum>1) {

    /*
    Here Logic is like below :-
    let userNum=5 then 
    factOfNum will be 5*4=20
    then 20*3 =60 and so on.
    */

   factOfNum*=(userNum-1);   
   userNum--;
}
    console.log(factOfNum);