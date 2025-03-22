// Global Objects in Node.js

// 1. global object (similar to window in browsers)
console.log("\nGlobal Object Examples:");
global.customVar = "I'm a global variable";
console.log(global.customVar); // Access through global
console.log(customVar); // Direct access (not recommended)

// 2. Common Global Objects/Functions
console.log("\nCommon Global Objects and Functions:");

// Process object
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Current Directory:", process.cwd());

// Timer functions
console.log("\nTimer Functions:");
setTimeout(() => {
    console.log("Timeout after 1 second");
}, 1000);

setImmediate(() => {
    console.log("Immediate execution after current synchronous operations");
});

// Buffer (for handling binary data)
const buf = Buffer.from("Hello Global");
console.log("\nBuffer Example:", buf.toString());

// __dirname and __filename
console.log("\nPath Information:");
console.log("Directory name:", __dirname);
console.log("File name:", __filename);

// Console methods
console.log("\nConsole Methods:");
console.log("Regular log");
console.warn("Warning message");
console.error("Error message");
console.time("timer");
console.timeEnd("timer");

// URL and URLSearchParams
const myURL = new URL("https://example.com/path?query=value");
console.log("\nURL Parsing:", myURL.hostname);

// Global Error Classes
try {
    throw new Error("Custom error");
} catch (e) {
    console.log("\nError Handling:", e.message);
}

// Performance measurement
const { performance } = require('perf_hooks');
const start = performance.now();
// Some operations
console.log("\nPerformance Time:", performance.now() - start, "ms");
