var majorityElement = function(nums) {a
    if (nums.length ===1) {
        return nums[0]
    }
    let count = 0 
    for (let i = 1; i < nums.length; i++) {
        nums.forEach(e => {
            if (nums[i] ===e) {
                count ++
            }
        });
        if (count > nums.length/2) {
            return nums[i]
        }
    }
};

let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))