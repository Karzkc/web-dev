function ispalindrome(x) {
    if (String(x).split('').reverse().join('')===String(x)) {
        return true
    }
    else{
        return false
    }
}
console.log(ispalindrome(-121));
