function plusOne(digits) {
    
    let sum = 0;
    let stack = []
    for (let i = 0; i < digits.length; i++) {
        sum = sum + digits[i]*(10**(digits.length -i-1))
        console.log(sum);
        
    }
    
    String(sum).split("").forEach(i=>{
        stack.push(BigInt(i))
    })

    return stack
}
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
