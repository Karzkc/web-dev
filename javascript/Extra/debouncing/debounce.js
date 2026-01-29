/* ============================================
    DEBOUNCE FUNCTION
   ============================================
 Debouncing delays function execution until
 after a specified delay has passed without
 being called again (e.g., search input)*/

function debouncer(fn, delay) {
    let timer;
    
    return function (...args) {
        // Cancel previous execution
        clearTimeout(timer);
        
        // Schedule new execution
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// ============================================
// SAMPLE FUNCTION
// ============================================

function sampleFN(args) {
    console.log(args);
}

// ============================================
// DEBOUNCE SETUP
// ============================================
// Create debounced version with 200ms delay

const debounce = debouncer(sampleFN, 200);

// ============================================
// USAGE EXAMPLE
// ============================================
// Only the last call will execute after 200ms
// Output: "atmkbfjg🥀"

debounce("a");
debounce("at");
debounce("atm");
debounce("atmk");
debounce("atmkb");
debounce("atmkbf");
debounce("atmkbfj");
debounce("atmkbfjg🥀");