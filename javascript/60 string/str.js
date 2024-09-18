let a = "hello"
console.log(a[0]);
console.log(a.length);
let b = "world"
console.log("first word is "+a+"and second is "+b);
console.log(`first word is ${a} and second is ${b}`);
// this is tempalte literals it is used     , we can use " " , ' ' in string
console.log(`i'm kartik`);
//\n etc same escape sequence ....
let c=" im kartik hi hello"
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.slice(1,4));
console.log(c.slice(1));
console.log(c.replace("hi","bye"));//first occurence only
console.log(c.concat(" "+b));
console.log(c.trim());//remove white space
console.log(c.charAt(4));
console.log(c.indexOf("kar"));//-1 if not there
console.log(c.startsWith(" "));
console.log(c.endsWith("im"));
//simple true and false
console.log(c.split(" "));





