// The 'fs' module in Node.js provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
import fs from "fs";
import str from './demo.js'
// Function to write to a file
// function writeFile(filename, content) {
//     fs.writeFile(filename, content, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('File has been written');
//     });
// }

// // Function to read a file
// function readFile(filename) {
//     fs.readFile(filename, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(data);
//     });
// }

// // Function to append to a file
// function appendFile(filename, content) {
//     fs.appendFile(filename, content, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('Text has been appended');
//     });
// }

// // Function to delete a file
// function deleteFile(filename) {
//     fs.unlink(filename, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('File has been deleted');
//     });
// }

// // Function to check if a file exists
// function fileExists(filename) {
//     fs.access(filename, fs.constants.F_OK, (err) => {
//         console.log(`${err ? 'File does not exist' : 'File exists'}`);
//     });
// }

// Calling the functions
// writeFile('example.txt', 'Hello, world!');
// readFile('example.txt');
// appendFile('example.txt', '\nAppended text');
// deleteFile('example.txt');
// fileExists('example.txt');
// The functions provided above use the asynchronous versions of the fs module's methods. 
// Asynchronous methods in Node.js are non-blocking, meaning that the program can continue executing other code while waiting for the file system operations to complete. 
// This is achieved through callbacks, promises, or async/await syntax. 
// Asynchronous operations are generally preferred in Node.js to maintain performance and responsiveness, especially in I/O-bound applications.

// Synchronous methods, on the other hand, block the execution of code until the file system operation is complete. 
// These methods are simpler to use but can lead to performance issues if used in a context where many file operations are performed or where the operations take a significant amount of time. 
// Synchronous methods are typically used in scripts or command-line tools where blocking behavior is acceptable.

// Synchronous versions of the functions

// Function to write to a file synchronously
function writeFileSync(filename, content) {
    try {
        fs.writeFileSync(filename, content);
        console.log('File has been written');
    } catch (err) {
        console.error(err);
    }
}

// Function to read a file synchronously
function readFileSync(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

// Function to append to a file synchronously
function appendFileSync(filename, content) {
    try {
        fs.appendFileSync(filename, content);
        console.log('Text has been appended');
    } catch (err) {
        console.error(err);
    }
}

// Function to delete a file synchronously
function deleteFileSync(filename) {
    try {
        fs.unlinkSync(filename);
        console.log('File has been deleted');
    } catch (err) {
        console.error(err);
    }
}

// Function to check if a file exists synchronously
function fileExistsSync(filename) {
    try {
        fs.accessSync(filename, fs.constants.F_OK);
        console.log('File exists');
    } catch (err) {
        console.log('File does not exist');
    }
}

// Calling the synchronous functions
writeFileSync('exampleSync.txt', str);
// readFileSync('exampleSync.txt');
// appendFileSync('exampleSync.txt', '\nAppended text');
// deleteFileSync('exampleSync.txt');
// fileExistsSync('exampleSync.txt');