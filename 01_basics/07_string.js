//different way to declare string
const gameName = new String('Hestson07-Hn')
//string is a object here . It contains key value pairs.

// string can be denoted using "" OR ''
// to concatinate : +
// console.log("hello" + "world");

const name = 'ritu'
const repoCount = 7;
// old way : not used now
// console.log(name + " " + repoCount + " Value");

//new way : use backticks ``
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// to check what character is present at that position 
// console.log(gameName.charAt(2));   //t

//checks ki 't' kiss position pe hai
// console.log(gameName.indexOf('t'));   //2

// const newString = gameName.substring(0,4); //Hest
//0 ot 3 , 4 is not included
// console.log(newString);

const anotherString = gameName.slice(-11,4)   //est
// yaha -ve index bhi de skte hai
// -11 mtlb 1 se start kra aur 4 mtlb 3rd index tk khtm ho gya 
console.log(anotherString);     
const newStringOne = "    Ritu    "
console.log(newStringOne);
console.log(newStringOne.trim());
//removes starting and ending space from string

const url = "https://ritu.com/ritu%20raj"
// in url space is replaced with %20
console.log(url.replace('%20' , '-'));

console.log(url.includes('ritu')); //true

console.log(gameName.split('-')); //splits the strings on the basis of '-' and store it in array
 

let str = "Hello";
console.log(str.__proto__);
//write this code in console of a browser and it will display all the avaliable functions
//if cannot understand , try mdn
