// primitive datatypes
let a = 12 ; // number
let b = "hello"; // string
// sam ebool etc
let arr = [1,2,"char"] // array
let obj = {a:12};// obj 

//defining tuples
let new_Arr : [string,number] = ["char",18] // error otherwise

//Enums - Enumerations are way to define a set of named constant values
enum constants{
    CONST1 = 45,
    NAME = "kk",
    AGE = 19
}
console.log(constants);

// defining types
let num:number = 12;

//any type - with not type defined
let any;
any = 12
any = "hello"

// unknown - we have to use conditons to access uk
let uk : unknown;
uk = 12;
if (typeof uk==='string') {
    console.log(uk);
    
}

// void - function returning none
function voidfun():void {
    // return 15 
    
}

// null 
let n : null;
let nu = null;

//undefined
let und:undefined;

//never - never let any other line run , infinite loops
function infiniteloop ():never{
    while (true) {
        console.log(true);
    }
}
// infiniteloop()
console.log(15); // disabled because of neevr


