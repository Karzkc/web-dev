var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]+nums[i+1]===target) {
            return [nums[i],nums[i+1]]
        }
    }
};