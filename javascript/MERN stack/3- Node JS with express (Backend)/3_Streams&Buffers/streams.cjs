// ========== Stream Examples in Node.js ==========
const fs = require('fs');
const zlib = require('zlib');

// Create some sample files for our examples
fs.writeFileSync('input.txt', 'This is some sample text that we will use for our streaming examples.\n'.repeat(1000));

// 1. Reading Streams
console.log('\n1. Reading Streams Example:');

const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 64 // Read in 64-byte chunks
});

console.log('Starting to read file...');

// Handle stream events
readStream.on('data', (chunk) => {
    console.log('Received chunk of size:', chunk.length, 'bytes');
});

readStream.on('end', () => {
    console.log('Finished reading file');
});

readStream.on('error', (error) => {
    console.error('Error reading file:', error.message);
});

// 2. Writing Streams
console.log('\n2. Writing Streams Example:');

const writeStream = fs.createWriteStream('output.txt');

// Write some data
writeStream.write('Hello World!\n');
writeStream.write('This is another line.\n');
writeStream.end('This is the final line.\n');

writeStream.on('finish', () => {
    console.log('Finished writing to file');
});

// 3. Piping Streams
console.log('\n3. Piping Streams Example:');

const pipeReadStream = fs.createReadStream('input.txt');
const pipeWriteStream = fs.createWriteStream('piped_output.txt');

pipeReadStream.pipe(pipeWriteStream);

pipeWriteStream.on('finish', () => {
    console.log('Finished piping data');
});

// 4. Transform Streams (Compression Example)
console.log('\n4. Transform Streams (Compression) Example:');

const gzip = zlib.createGzip();
const compressReadStream = fs.createReadStream('input.txt');
const compressWriteStream = fs.createWriteStream('compressed.txt.gz');

compressReadStream
    .pipe(gzip)
    .pipe(compressWriteStream)
    .on('finish', () => {
        console.log('File successfully compressed');
    });

// 5. Custom Transform Stream
console.log('\n5. Custom Transform Stream Example:');

const { Transform } = require('stream');

// Create a transform stream that converts data to uppercase
class UppercaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

const uppercaseTransform = new UppercaseTransform();
const upperReadStream = fs.createReadStream('input.txt');
const upperWriteStream = fs.createWriteStream('uppercase_output.txt');

upperReadStream
    .pipe(uppercaseTransform)
    .pipe(upperWriteStream)
    .on('finish', () => {
        console.log('Finished converting to uppercase');
    });

// 6. Stream Events and Error Handling
console.log('\n6. Stream Events and Error Handling Example:');

const errorStream = fs.createReadStream('nonexistent_file.txt');

errorStream.on('error', (error) => {
    console.error('Error occurred:', error.message);
});

// 7. Readable Stream from Array
console.log('\n7. Readable Stream from Array Example:');

const { Readable } = require('stream');

class ArrayToStream extends Readable {
    constructor(array) {
        super({ objectMode: true });
        this.array = array;
        this.index = 0;
    }

    _read() {
        if (this.index < this.array.length) {
            this.push(this.array[this.index]);
            this.index++;
        } else {
            this.push(null);
        }
    }
}

const arrayStream = new ArrayToStream([1, 2, 3, 4, 5]);

arrayStream.on('data', (chunk) => {
    console.log('Array item:', chunk);
});

arrayStream.on('end', () => {
    console.log('Finished reading array');
});

// 8. Writable Stream to Console
console.log('\n8. Writable Stream to Console Example:');

class ConsoleWriteStream extends require('stream').Writable {
    _write(chunk, encoding, callback) {
        console.log('Received:', chunk.toString());
        callback();
    }
}

const consoleStream = new ConsoleWriteStream();
const writeToConsole = fs.createReadStream('input.txt');

writeToConsole.pipe(consoleStream);

// 9. Duplex Stream Example
console.log('\n9. Duplex Stream Example:');

const { Duplex } = require('stream');

class DuplexStream extends Duplex {
    constructor() {
        super();
        this.data = ['Hello', 'World', 'from', 'Duplex', 'Stream'];
        this.index = 0;
    }

    _read() {
        if (this.index < this.data.length) {
            this.push(this.data[this.index]);
            this.index++;
        } else {
            this.push(null);
        }
    }

    _write(chunk, encoding, callback) {
        console.log('Duplex received:', chunk.toString());
        callback();
    }
}

const duplexStream = new DuplexStream();

duplexStream.on('data', (chunk) => {
    console.log('Duplex reading:', chunk.toString());
});

duplexStream.write('Some data to write');

// Cleanup function
process.on('exit', () => {
    // Clean up temporary files
    try {
        fs.unlinkSync('input.txt');
        fs.unlinkSync('output.txt');
        fs.unlinkSync('piped_output.txt');
        fs.unlinkSync('compressed.txt.gz');
        fs.unlinkSync('uppercase_output.txt');
    } catch (err) {
        // Ignore errors during cleanup
    }
});

console.log('\nNote: Streams are useful for:');
console.log('- Reading/writing large files');
console.log('- Network communication');
console.log('- Data transformation');
console.log('- Memory efficient data processing');
console.log('- Real-time data handling'); 