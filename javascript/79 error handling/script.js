// error handling is used just like python i know that
let a = prompt('num1- ');
let b = prompt('num2- ');
if ((isNaN(a)) || isNaN(b)) {
    throw new SyntaxError("BRO you entered something wrong maybe string, be careful!");
    
    
}
let c = parseInt(a) + parseInt(b)
// if a and b are string by default then there will be nan as result so we can use eh
console.log(c);
// you can use try-catch
try {
    let d = c +x 
    console.log(x);
} catch (error) {
    console.log("bro wtf error hai!!");
    
}
finally{
    console.log("this is finally , it will always work error or not");
    
}




