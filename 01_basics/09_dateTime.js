// date is a object in JS
// begins with Jan 1,1970

// At this moment 7:37PM 30-08-2024 Friday

let myDate = new Date()
//object ya instance of date

// console.log(myDate);
// 2024-08-30T14:06:08.533Z

// console.log(myDate.toString());
// Fri Aug 30 2024 14:05:24 GMT+0000

// console.log(myDate.toDateString());
// Fri Aug 30 2024

// console.log(myDate.toISOString());
// 2024-08-30T14:06:44.091Z

// console.log(myDate.toJSON());
// 2024-08-30T14:07:14.693Z

// console.log(myDate.toLocaleDateString());
// 8/30/2024

// console.log(myDate.toLocaleString());
// 8/30/2024, 2:07:46 PM

console.log(typeof myDate);   //object

let myCreatedDate1 = new Date(2023,0,23)
console.log(myCreatedDate1.toDateString());
// Mon Jan 23 2023
// month is started from 00

let myCreatedDate2 = new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString());
// 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());
// 1/14/2023, 12:00:00 AM
// here month start from 01 for jan

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// 1725027484860   :: O/P is in millisecond

