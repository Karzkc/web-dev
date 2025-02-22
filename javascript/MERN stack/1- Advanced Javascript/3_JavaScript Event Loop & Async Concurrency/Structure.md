JavaScript Event Loop Execution Order

1. Call Stack (LIFO - Last In, First Out)
   ├── Executes synchronous JavaScript code.
   ├── If a function is called, it is pushed onto the stack.
   ├── When the function completes, it is popped off the stack.

2. Web APIs (Async Tasks - like setTimeout, fetch, DOM events)
   ├── Handles asynchronous operations (timers, HTTP requests, etc.).
   ├── Once completed, the callback moves to the appropriate queue.

3. Microtask Queue (High Priority - Promises, MutationObserver)
   ├── Stores resolved Promises and other microtasks.
   ├── These execute immediately after the current synchronous code finishes.
   ├── They run before macrotasks in the same iteration of the event loop.

4. Macrotask Queue (Lower Priority - setTimeout, setInterval, I/O, UI rendering)
   ├── Stores callbacks from setTimeout, setInterval, setImmediate, and I/O tasks.
   ├── Executes after all microtasks have been processed.

5. Event Loop (Coordinator)
   ├── Constantly checks if the Call Stack is empty.
   ├── Moves the next task from the Microtask Queue to the Call Stack first.
   ├── If the Microtask Queue is empty, then moves a task from the Macrotask Queue.

6. Heap (Memory Allocation)
   ├── Stores objects, variables, and function references.

Execution Cycle:
1. **Call Stack** executes synchronous code.
2. **Async tasks** are sent to **Web APIs**.
3. **Web APIs** send completed tasks to **queues** (Microtask first, then Macrotask).
4. **Event Loop** moves tasks from queues to Call Stack when it’s empty.
5. **Call Stack** executes the next task.
6. The cycle repeats indefinitely.
