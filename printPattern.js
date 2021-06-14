let firstStar=`\\* `;
let secStar='\\';
for (let index = 1; index <= 5; index++) {
    console.log(`${firstStar.repeat(index)} ${secStar}`);
    //Here repeat method just repeat the string as time as defined in perameter and using template literal to render that.
}