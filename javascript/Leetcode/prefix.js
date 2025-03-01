var longestCommonPrefix = function(list) {
    let temp = list[0];
    for (let i = 1; i < list.length; i++) {
        while (!list[i].startsWith(temp)) {
            temp = temp.slice(0, -1);
            if (temp === "") 
                return "";
        }
    }
    return temp;
};
let strs = ["flower","flw","flght"];
console.log(longestCommonPrefix(strs));