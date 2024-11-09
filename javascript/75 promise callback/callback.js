function prod(a,b) {
    return(a*b);
    // on calling this will simply return product
}
function calc(a,b,func) {
    // we can modify previous func with callback
    console.log("The answer is- ",func(a,b))
}

calc(5,5,prod)