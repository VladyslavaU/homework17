console.log('Sample JavaScript #1 HW #13');

const myNum = 10;
const myStr = "строка";
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
    first: 'First Name',
    last: 'Last Name'
};

const decimal2 = myNum.toFixed(2);
console.log(decimal2)

let i = 0;
console.log("i = " + "; first iteration, postfix increment i++ = " + i++);
console.log("i = " + i++ + "; second iteration, postfix increment i++ = " + i);
console.log("i = " + i + "; first and only iteration, prefix increment i++ = " + ++i);

console.log("i = " + "; first iteration, postfix decrement i++ = " + i--);
console.log("i = " + i-- + "; second iteration, postfix decrement i++ = " + i);
console.log("i = " + i + "; first and only iteration, prefix increment i++ = " + --i);

let myTest = 20;

function operators(myTest, myNum, operation, result) {
    console.log("myTest " + operation + " myNum means: " + myTest + " " + operation + " " + myNum + " and equals: " + result);
}

operators(myTest, myNum, "+=", myTest += myNum);
operators(myTest, myNum, "-=", myTest -= myNum);
operators(myTest, myNum, "*=", myTest *= myNum);
operators(myTest, myNum, "/=", myTest /= myNum);
operators(myTest, myNum, "%=", myTest %= myNum);

const myPi = Math.PI;
const myRound = Math.round(89.279);
const myRandom = Math.floor(Math.random() * 10) + 1;
const myPow = Math.pow(3, 5);

console.log("Pi: " + myPi);
console.log("Round of 82.279: " + myRound);
console.log("Random number from 1 to 10: " + myRandom);
console.log("3 in power of 5: " + myPow)

const str = "Мама мыла раму, рама мыла маму";

const strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: str.length
}

const isRamaPos = strObj.str.indexOf("рама");

console.log(strObj.str + " contains " + "рама: " + isRamaPos);

const strReplace = strObj.str.replace("мыла раму, рама мыла маму", "моет раму, Рама держит маму");

console.log("Replaced string: " + strReplace);

const caseChange = "string";
const upperCase = caseChange.toUpperCase();
const lowerCase = caseChange.toLowerCase();

console.log(caseChange + " to uppercase: " + upperCase);
console.log(caseChange + " to lowercase: " + lowerCase);