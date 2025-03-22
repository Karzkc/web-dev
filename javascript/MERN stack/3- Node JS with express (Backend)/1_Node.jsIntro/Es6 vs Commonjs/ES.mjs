// This file uses the .mjs extension, which stands for "Module JavaScript".
// It indicates that the file is an ES6 module, allowing the use of `import` and `export` statements.
// ES6 modules provide a standardized way to organize and reuse code in JavaScript.
//Exports , Require wont work here 


let num = 10;

// Named export: You can export multiple values by their names.
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export: You can export a single value as the default export.
const multiply = (a, b) => a * b;
export default multiply;

//default export can be imported with any name
//Named export should be imported with the same name
// Note: A module can have multiple named exports, but only one default export.