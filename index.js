// const students = [{
//     name:'john',
//     score:70,
// },
// {
//     name:"mark",
//     score:90
// }];
// for (const student of students) {
//     console.log('Name', student.name);
//     console.log('Score', student.score);
// }
function addNumber(a, b) {
    return a + b;
}
// console.log(addNumber(2,3))
console.log(addNumber(3, 3)); //javscript is not understand type  annotation
// promitive value is represent directly at the lowest level of the launguage implementation there are (string, null, number undefined, boolean, biglnt, symbol)
var firstname = "jhon";
var automobile = "BMW";
var city = "net york";
var students = 32;
var studentAsString = students.toString();
var safInt = Number.MAX_SAFE_INTEGER;
console.log(safInt);

const safeIntPlusOne =  safInt +1;
const safeIntPlusTwo = safInt +2;
console.log(safeIntPlusOne)
console.log(safeIntPlusTwo)

let bigInt3: bigint = BigInt(1234)
// let bigInt1: bigint = 12345.6n
// console.log(bigInt1)

// let c:bigint = bigInt1 - bigInt2

// let e:biginit  = 12345.6n; 