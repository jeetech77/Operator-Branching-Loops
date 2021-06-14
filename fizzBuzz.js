let numberList=[];
for (let index = 1; index <= 100; index++) {
   numberList.push(index);
}
numberList.forEach(element => {
    if ((element%3===0)&&(element%5===0)) {
        numberList[element-1]='FizzBuzz';
    }
    else if (element%3===0) {
        numberList[element-1]='Fizz';
    }
    if (element%5===0) {
        numberList[element-1]='Buzz';
    }
});
console.log(numberList)