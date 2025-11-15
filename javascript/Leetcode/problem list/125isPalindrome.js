
function isPalindrome(s) {
    let org = []
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if ((code > 47 && code < 58) ||
            (code > 64 && code < 91) || 
            (code > 96 && code < 123)) { 
            org.push(s[i].toLowerCase())
        }

    }
    return org.join("")===org.reverse().join(""); 
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
