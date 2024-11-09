// var koi bhi var koi redecalre krdega top pe usko global bnadega
// let const me har baar niche hi rhega
//JavaScript Hoisting refers to the behavior in JavaScript where variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) during the compilation phase, before the code is executed. This means that variables and functions can be used before they are declared in the code.

console.log(x); // undefined, because the declaration is hoisted, but not the value
var x = 5;
console.log(x); // 5



sayHello(); // "Hello!" - Function hoisting allows this to be called before declaration

function sayHello() {
    console.log("Hello!");
} 


console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;