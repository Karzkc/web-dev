/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    nums.forEach(e=>{
        init = fn(init,e)
    })
    return init
};
let nums = []
let init = 25
let fn = function sum(accum, curr){
    return accum+curr
}    
let res = reduce(nums,fn,init)
console.log(res);
