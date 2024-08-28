// JS is a dynamic type language which offer greater flexibility in handling data. 

// Types of data types : Primitive and Non-primitive
// how a data is stored in memory and how can we access it
// Primitive -> call by value
// reference is not given , it is copied and then given . Changes made will be only be in copy data
// 7 types : String , Number , Boolean , null(empty/not zero/khali) , undefined(variable and memory space is declared but value is not decided) , Symbol(used to make any value unique) , BigInt

// Symbols
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// BigInt
const bigNumber = 3456543576654345645424n
console.log(typeof bigNumber);



//Non-Primitive / Reference -> call by reference
//reference of memory is given
// Types : Array,Objects,Function 

const heros = ["shaktiman" , "hanuman" , "heman"]

let myObj = {
    name:"Ritu",
    age: 22
}

const myFunction = function(){
    console.log("Namaste Duniya!!!");
}

// typeOf null -> object
// typeOf myFunction -> function , but isko bola jaata hai object-function
// typeOf heros -> object