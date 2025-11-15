
function isValid(s) {
    let bracket = {
        "(":")",
        "[":"]",
        "{":"}"
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        console.log(bracket[s[i]]);
        
        if (bracket[s[i]]) {
            stack.push(s[i])
        }
        else{
            if (bracket[stack.pop()]!==s[i]) {
                stack.push(bracket[s[i]])
            }
        }
        
    }
    return stack.length ===0

}
console.log(isValid("())"));
