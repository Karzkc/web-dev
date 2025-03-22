// ========== Buffer Examples in Node.js ==========

// 1. Creating Buffers
console.log('\n1. Creating Different Types of Buffers:');

// Create an empty buffer of length 10
const emptyBuffer = Buffer.alloc(10);
console.log('Empty Buffer:', emptyBuffer);

// Create a buffer from a string
const stringBuffer = Buffer.from('Hello World');
console.log('String Buffer in  Hexadecimal:', stringBuffer);
console.log('String Buffer as text:', stringBuffer.toString());

// Create a buffer from array of integers
const arrayBuffer = Buffer.from([1, 2, 3, 4, 5]);
console.log('Array Buffer:', arrayBuffer);

// 2. Writing to Buffers
console.log('\n2. Writing to Buffers:');

// Create a buffer of size 10
const writeBuffer = Buffer.alloc(10);
writeBuffer.write('Hello');
console.log('Buffer after writing "Hello":', writeBuffer);
console.log('Buffer as text:', writeBuffer.toString());

// 3. Buffer Operations
console.log('\n3. Buffer Operations:');

// Checking buffer length
console.log('Buffer Length:', stringBuffer.length);

// Converting buffer to JSON
console.log('Buffer to JSON:', stringBuffer.toJSON());

// Copying buffers
const sourceBuffer = Buffer.from('Hello');
const targetBuffer = Buffer.alloc(5);
sourceBuffer.copy(targetBuffer);
console.log('Copied Buffer as text:', targetBuffer.toString());

// 4. Buffer Comparison
console.log('\n4. Buffer Comparison:');

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Hello');
const buffer3 = Buffer.from('World');

console.log('buffer1 equals buffer2:', buffer1.equals(buffer2));
console.log('buffer1 equals buffer3:', buffer1.equals(buffer3));

// 5. Buffer Slicing
console.log('\n5. Buffer Slicing:');

const longBuffer = Buffer.from('Hello World');
const slicedBuffer = longBuffer.slice(0, 5);
console.log('Sliced Buffer as text:', slicedBuffer.toString());

// 6. Buffer Concatenation
console.log('\n6. Buffer Concatenation:');

const buff1 = Buffer.from('Hello ');
const buff2 = Buffer.from('World');
const combinedBuffer = Buffer.concat([buff1, buff2]);
console.log('Concatenated Buffer as text:', combinedBuffer.toString());

// 7. Checking Buffer Support
console.log('\n7. Buffer Information:');

console.log('Buffer.isBuffer(buff1):', Buffer.isBuffer(buff1));
console.log('Buffer.isBuffer("string"):', Buffer.isBuffer("string"));

// 8. Working with Different Encodings
console.log('\n8. Different Encodings:');

const encodingBuffer = Buffer.from('Hello World');
console.log('UTF8:', encodingBuffer.toString('utf8'));
console.log('Base64:', encodingBuffer.toString('base64'));
console.log('Hex:', encodingBuffer.toString('hex'));

// 9. Buffer and TypedArray
console.log('\n9. Buffer and TypedArray:');

// Create buffer from TypedArray
const uint8Array = new Uint8Array([1, 2, 3]);
const bufferFromTypedArray = Buffer.from(uint8Array);
console.log('Buffer from TypedArray:', bufferFromTypedArray);

// 10. Error Handling
console.log('\n10. Error Handling:');

try {
    // Try to create buffer with negative size
    const invalidBuffer = Buffer.alloc(-1);
} catch (error) {
    console.log('Error creating invalid buffer:', error.message);
}

console.log('\nNote: Buffers are useful when working with:');
console.log('- Binary data');
console.log('- File system operations');
console.log('- Network protocols');
console.log('- Cryptography');
console.log('- And other low-level operations'); 