console.log("1️⃣ Script Start"); // 🟢 Goes to Call Stack and executes immediately

setTimeout(() => {
    console.log("5️⃣ setTimeout - Macrotask Queue"); // 🟡 Goes to Web API, moves to Macrotask Queue after 2 sec
}, 2000);

Promise.resolve().then(() => {
    console.log("3️⃣ Promise 1 - Microtask Queue"); // 🟢 Goes to Microtask Queue (runs after main script)
});

setTimeout(() => {
    console.log("6️⃣ setTimeout 2 - Macrotask Queue"); // 🟡 Goes to Web API, moves to Macrotask Queue after 0 sec
}, 0);

queueMicrotask(() => {
    console.log("4️⃣ queueMicrotask - Microtask Queue"); // 🟢 Runs after all script execution
});

setImmediate(() => {
    console.log("7️⃣ setImmediate - Macrotask Queue"); // 🟡 Executes after I/O phase (Node.js only)
});

process.nextTick(() => {
    console.log("2️⃣ process.nextTick - Microtask Queue (Higher Priority)"); // 🔥 Runs before Promises & other Microtasks
});

console.log("8️⃣ Script End"); // 🟢 Executes in Call Stack before any async tasks

/**
 * 🛠 ORDER OF EXECUTION 🛠
 * 1. "1️⃣ Script Start"
 * 2. "8️⃣ Script End"
 * 3. "2️⃣ process.nextTick - Microtask Queue" (Higher priority than Promises)
 * 4. "3️⃣ Promise 1 - Microtask Queue"
 * 5. "4️⃣ queueMicrotask - Microtask Queue"
 * 6. "6️⃣ setTimeout 2 - Macrotask Queue" (0ms but runs after Microtasks)
 * 7. "7️⃣ setImmediate - Macrotask Queue" (Only in Node.js)
 * 8. "5️⃣ setTimeout - Macrotask Queue" (Runs after 2000ms)
 */

