/**
 * Generator function that yields sequential values
 * @param {number} args - Base number to increment
 * @yields {number} Incremented values
 * @returns {number} Final incremented value
 */
function * generator(args) {
    yield args + 1;  // First yield: base + 1
    yield args + 2;  // Second yield: base + 2
    return args + 3; // Final return: base + 3
}

// Create a generator instance with initial value 10
let gen = generator(10);

// Execute first next() call - returns first yield
console.log(gen.next()); // Output: { value: 11, done: false }

// Execute second next() call - returns second yield
console.log(gen.next()); // Output: { value: 12, done: false }

// Uncomment to execute third next() call - returns return value
// console.log(gen.next()); // Output: { value: 13, done: true }

// Terminate generator and return the specified value
console.log(gen.return(10)); // Output: { value: 10, done: true }

// Note: This will throw an error since generator is already terminated
console.log(gen.throw("atmkbfj🥀")); // Throws error
