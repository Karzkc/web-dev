console.log(module);
// Node.js Modules Definition and Examples

// 1. What is a Module?
// A module is a reusable block of code whose existence does not impact other code
// Node.js uses the CommonJS module system
// Each file is treated as a separate module

// 2. Types of Modules:
// - Core/Built-in Modules (like 'fs', 'http', 'path')
// - Local Modules (files we create)
// - Third-party Modules (from npm)

// 3. Module Properties
console.log("Module ID:", module.id);
console.log("Module Filename:", module.filename);
console.log("Module Loaded:", module.loaded);
console.log("Module Parent:", module.parent);
console.log("Module Children:", module.children);
console.log("Module Paths:", module.paths);

// 4. Module Exports
// Example of module.exports
const sampleFunction = () => {
    return "Hello from module";
};
module.exports = sampleFunction;

// 5. Multiple Exports Example
module.exports = {
    name: "Sample Module",
    version: "1.0.0",
    description: "This is a sample module"
};

// 6. Exports Shorthand
exports.title = "Module Demo";
exports.sayHello = () => "Hello";

// Full module object structure
console.log("\nComplete Module Object:");
console.log(module);

// script type common js is required in package.json
