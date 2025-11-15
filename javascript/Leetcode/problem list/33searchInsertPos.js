
function searchInsert(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        if (target < nums[0]) {
            return 0;
        }
        for (let i = 0; i < nums.length - 1; i++) {
            if (target > nums[i] && target < nums[i + 1]) {
                return i + 1;
            }
        }
        return nums.length
    }
}

console.log(searchInsert([1, 3, 5, 6], 7));
