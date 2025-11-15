function singleNumber(nums) {
    let a = []
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i]
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j]!==temp) {
                return temp
            }
            
        }
    }
}
console.log(singleNumber([2,2,1]));
