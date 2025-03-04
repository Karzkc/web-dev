var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }
    nums1 = nums1.sort()

    for (let i = nums1.length - 1; i >= 0; i--) {
        if (!nums1[i]) {
            nums1.splice(i, 1);
        }
    }
    return nums1;

}

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
console.log(merge(nums1, m, nums2, n));
