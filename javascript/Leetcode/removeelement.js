var removeElement = function(nums, val) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i<nums.length) {
        let e = nums[i]
        if (e!==val) {
            nums[j] = nums[i]
            k+=1
            j++
        }
        i++
    }
    return k;
};

let nums = [3,2,2,3] 
let val = 3
console.log(nums);

console.log(removeElement(nums, val));
