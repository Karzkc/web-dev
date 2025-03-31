// 1️⃣ Basic Function: Returns a number
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// 2️⃣ Function Type: Declares a function variable
let multiply: (x: number, y: number) => number;
multiply = (x, y) => x * y;
console.log(multiply(4, 2)); // Output: 8

// 3️⃣ Optional & Default Parameters
function greet(name: string, age?: number, country: string = "India"): string {
    return `Hello ${name}, Age: ${age ?? "Unknown"}, Country: ${country}`;
}
console.log(greet("Alice", 25)); // Hello Alice, Age: 25, Country: India
console.log(greet("Bob")); // Hello Bob, Age: Unknown, Country: India

// 4️⃣ Rest Parameters (Handling multiple arguments)
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// 5️⃣ Function with a Callback (Executes another function inside)
function double_function(a: number, callback_func: (x: number) => number): number {
    return callback_func(a);
}

// Callback function
const double = (num: number): number => num * 2;

// Calling function with a callback
console.log(double_function(10, double)); // Output: 20

// 6️⃣ Anonymous Callback Example (Directly passing function)
console.log(double_function(5, (x) => x * 3)); // Output: 15

// 7️⃣ Function Overloading: Multiple types for a single function name
function formatInput(input: string): string;
function formatInput(input: number): number;
function formatInput(input: string | number): string | number {
    if (typeof input === "string") return input.toUpperCase();
    return input * 2;
}

console.log(formatInput("hello")); // Output: HELLO
console.log(formatInput(10)); // Output: 20
