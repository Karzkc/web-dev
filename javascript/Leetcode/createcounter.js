var createCounter = function(init) {
    return Object = {
        increment : function () {  
            ++init
            c = init
            return c
        },
        decrement : function () {
            --init
            c = init
            return c
        },
        reset : function () {
            c = init
            return c
        }
    }
};

const counter = createCounter(10)
increment = counter.increment()
reset = counter.reset()
decrement = counter.decrement()
console.log(increment,reset,decrement);

