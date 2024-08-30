const score = 400
//by defualt JS will save this variable as number.
console.log(score);

const balance =  new Number(100)
//can also explicitly save the variables as number
console.log(balance);

console.log(balance.toString().length);
//convert to string and then apply string methods

console.log(balance.toFixed(2));
//set the precision value

const otherNumber = 23.663;

//Range between 1-21. Returns a string 
//use this wisely as it might return unexpected values
console.log(otherNumber.toPrecision(3));

const num1 = 1000000;
//US standard
console.log(num1.toLocaleString());

// Indian standard
console.log(num1.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991


// *******************************MATHS***************************************

console.log(Math);
// it is a object and has its own properties

console.log(Math.abs(-4));
//negative is converted to positive

console.log(Math.round(4.6));
//rounds off the number 4.3-> 4 and 4.8->5

console.log(Math.ceil(4.8));
//rounds off to the lower value

console.log(Math.floor(4.2));
//rounds off to the higher value

console.log(Math.min(4,5,6,3,9,0,1));

console.log(Math.random());
//returns a number between 0 to 1

//let's say want to create a game of dice which return random values.
console.log(Math.floor((Math.random()*10) + 1));
//floor to round off to a natural number
//Added one to handle case of 0.041

const min = 10 ;
const max = 20 ;

// Math.floor(Math.random() * (max - min + 1)) + min

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


