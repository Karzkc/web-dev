// This file uses the .cjs extension, which stands for "CommonJS". 
// It indicates that the file is a CommonJS module, allowing the use of `require` and `module.exports` statements.
// CommonJS modules provide a standardized way to organize and reuse code in JavaScript.
// Import and export statements won't work here.

let num = 10;

// Named export: You can export multiple values by their names.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Default export: You can export a single value as the default export.
const multiply = (a, b) => a * b;

// Exporting the functions
module.exports = {
    add,
    subtract,
    multiply // In CommonJS, you can export multiple values using an object.
};

// Note: In CommonJS, there is no concept of default export.
// All exports are named exports, and they should be imported with the same name.