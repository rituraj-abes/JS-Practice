console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//this might does not give predictable value.
// whenever we compare , make sure to compare values with same data type. (Typescript does not allows you to compare 2 values with different data types)
//automatically "2" is converted to 2 by JS.
console.log("2" > 1); //true
console.log("02" > 1);//true

console.log(null > 0); //false , 0 > 0
console.log(null == 0);//false
console.log(null >= 0);//true
//Equality and comparison operator works differently.
//Comparison convert null to a number , treating it as 0. That's why null >=0 and null > 0 is false

console.log(undefined == 0); // false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// === : strict check
// not only value but also data type is also checked
console.log("2" == 2);  //true bcoz conversion ho jata hai 
console.log("2" === 2);  //false bcoz yaha data type bhi check hota hai (yaha conversion nhi hota hai)




