
let a = 5;
let b = 2;
if(a>18){
    console.log("you are eligible to vote");
}

else if(a==18){
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible to vote");
}


// these are some examples of if else else if conditionals statement 
// now we will see some mathematical operations
console.log(a+b); // this is addtion
console.log(a-b); // this is subtraction
console.log(a*b); //this is multiplication
console.log(a/b); // this is division
console.log(a**b); //this is exponentiation
console.log(a%b); //this is modulus

// now we will see some assignment operators

a = 5;
b = 2;
a += b; // this is a += b is same as a = a + b
console.log(a); // this will print 7

a = 5;

a -= b; // this is a -= b is same as a = a - b

console.log(a); // this will print 3

a = 5;

a *= b; // this is a *= b is same as a = a * b

console.log(a); // this will print 10

a = 5;

a /= b; // this is a /= b is same as a = a / b

console.log(a); // this will print 2.5

a = 5;

a %= b; // this is a %= b is same as a = a % b

console.log(a); // this will print 1

// now we will see some comparison operators
//== means comparison between two objects
// === means comparison between two objects with different properties and properties 

console.log(a == b); // this will print false

console.log(a === b); // this will print false

console.log(a!= b); // this will print true

console.log(a!== b); // this will print true
// now logical operators

console.log(a > b && a < 10); // this will print true

console.log(a > b || a < 10); // this will print true

console.log(!(a > b)); // this will print false


/* this is a multiline
 comment */
// turnary operator - ? this will put the execution only when  a certain condition is true 
a = 2 ;
b = 3  ;
c = a>b ? (a+b):(b-a);

console.log(c); // this will print 1