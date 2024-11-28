/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let c = init
    return {

        increment: function () {
           
            return ++c
        },
        decrement: function () {
            
            return --c
        },
        reset: function () {
            c = init
            return c
        }
    }
};
