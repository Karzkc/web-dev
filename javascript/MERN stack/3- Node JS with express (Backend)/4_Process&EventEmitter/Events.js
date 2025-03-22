import { EventEmitter } from "events";

// creating an event instance
const myEmitter = new EventEmitter();

// creating an event handler
// .on and .addListener are the same

myEmitter.on("Event1" , () => {
  console.log("Event1 has been triggered");
});

// emitting an event
myEmitter.emit("Event1");


// removing an event listener
myEmitter.removeListener("Event1", () => {
  console.log("Event1 has been removed");
});


// event emiiter are same as functions in js but they are used to handle events in node.js
