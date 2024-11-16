/**
 * @param {string} val
 * @return {Object}
*/

var expect = function (val) {
    return Obj = {
        toBe: function (val2) {
            if (val !== val2) {
                throw new Error("Not Equal");

            }
            else {
                return true;
            }
        },
        notToBe: function (val2) {
            if (val === val2) {
                throw new Error("Equal");
            }
            else {
                return true
            }
        }
    }
}
func = () => { expect(5).toBe(5) }
console.log(func());

