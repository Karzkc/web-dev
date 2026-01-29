function throttler(fn, delay) {
  let lastCall = 0;
  
  return function (...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;      // Update timestamp
      fn(...args);         // Execute throttled function
    }
    // Else: ignore call (throttled)
  };
}

// Sample usage
function sampleFN(message) {
  console.log("Throttled:", message);
}

const throttle = throttler(sampleFN, 2000);

// These calls within 2s → ONLY "a" logs, others ignored
throttle("a");      // Logs: "Throttled: a" ✓ (at t=0)
throttle("at");     // Ignored (t<2000ms)
throttle("atm");    // Ignored
throttle("atmk");   // Ignored  
throttle("atmkb");  // Ignored
throttle("atmkbf"); // Ignored
throttle("atmkbfj"); // Ignored
throttle("atmkbfjg🥀"); // Ignored
