console.log('App is starting...');
var a = 10;
var b = 20;
// JavaScript code to add two numbers and store the result in the variable sum.
var sum = a + b;

console.log('Sum of ' + a + ' and ' + b + ' is ' + sum);
let myName = 'John Doe';
// Printing the value of myName to the console.
console.log('My name is ' + myName);
console.log(typeof(a, b, sum));
const c = 10;
// c = c + 10; // this will cause an error because 'c' is declared as 'const'
let x = 10;
var y = 20;
console.log(x);// This will print 10 to the console.
console.log(y); // This will print 20 to the console.
{
    let x = 20;
    console.log(x); // This will print 20 to the console.
    //this is beacuse of block scope in JavaScript 
    var y = 30; 
    console.log(y); // This will print 30 to the console.
}
//all datatypes in JavaScript 

console.log(typeof(5+5)); // number
console.log(typeof('5+5')); // string
console.log(typeof(true)); // boolean
console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined
//objects in JavaScript

var obj = {name: 'John Doe', age: 30};
console.log(typeof(obj)); // object
console.log(obj.name); // John Doe
console.log(obj.age); // 30
console.log(obj.address); // undefined 
// it is like dictionary in python
