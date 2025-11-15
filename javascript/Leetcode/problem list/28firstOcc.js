function strStr(haystack, needle) {

    if (haystack.match(needle)) {
        return haystack.indexOf(needle)
    }
    else{
        return -1
    }
}
console.log(strStr("sadbutsad","sad"));
// console.log("leetcode".match("leets"));

