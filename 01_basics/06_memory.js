//stack and heap memory

//Stack : primitive (value we get is a copy)
//Heap : non - primitive (here we get reference of the value, any changes made here will reflect in the original value)

let myYtName = "Hetsondotcom"
let anotherName = myYtName

anotherName = "RituRajdotcom"

console.log(myYtName);
console.log(anotherName);
//copy is made first then the copied value is changed. Original value is not affected at all

let userOne = {
    email: "user@google.com",
    upi: "upi@pnb"
}

let userTwo = userOne

userTwo.email = "ritu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//refernce is passed, changes made in copied variable will affect the original value

