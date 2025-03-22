var removeDuplicates = function(nums) {
    if (nums.length <=2) return nums.length;
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]; 
            k++;
        }
    }
    console.log(nums);
    return k;
};
let nums = [1,1,1,2,2,3]
console.log(nums);

console.log(removeDuplicates(nums));
