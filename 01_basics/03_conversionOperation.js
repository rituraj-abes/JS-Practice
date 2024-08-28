// let score = "33"
//string string number 33

// let score = "33abc"
//string string number NaN

// let score = null
//object object number 0

// let score = undefined
//undefined undefined number NaN

//let score = true
//boolean boolean number 1

let score = "Ritu"
// string string number NaN

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumver = Number(score)
// console.log(typeof valueInNumver);
// console.log(valueInNumver);

//be carefull while converting the numbers as there is no strict check

/*
to convert in number => Number();
to convert in string => String();
to convert in boolean => Boolean();
*/

// For boolean
// 1 , "Ritu" => true
// 0 , ""     => false

//****************   Operations   ****************
let value = 3
let negValue = -value
// console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);    // 2 ka power 3
console.log(2/2);     //quotient
console.log(2%2);     //remainder
*/
let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3);

/*
these are not a good practice in production

console.log("1" + 2);    //12
console.log(1 + "2");    //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true);   //1
console.log(+"");     //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
*/

let gameCounter = 100;
gameCounter++;          //postfix
++gameCounter;          //prefix
console.log(gameCounter);

