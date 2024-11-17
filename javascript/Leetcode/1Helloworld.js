/**
 * @param {string} val
 * @return {Object}
*/

var expect = function (val) {
    return {
        toBe: function (val2) {
            if (val !== val2) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: function (val2) {
            if (val === val2) {
                throw new Error("Equal");
            } else {
                return true;
            }
        }
    };
};

const func = () => {
    return expect(5).toBe(5); 
};



