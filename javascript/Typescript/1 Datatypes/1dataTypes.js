"use strict";
// primitive datatypes
let a = 12; // number
let b = "hello"; // string
// sam ebool etc
let arr = [1, 2, "char"]; // array
let obj = { a: 12 }; // obj 
//defining tuples
let new_Arr = ["char", 18]; // error otherwise
//Enums - Enumerations are way to define a set of named constant values
var constants;
(function (constants) {
    constants[constants["CONST1"] = 45] = "CONST1";
    constants["NAME"] = "kk";
    constants[constants["AGE"] = 19] = "AGE";
})(constants || (constants = {}));
console.log(constants);
// defining types
let num = 12;
//any type - with not type defined
let any;
any = 12;
any = "hello";
// unknown - we have to use conditons to access uk
let uk;
uk = 12;
if (typeof uk === 'string') {
    console.log(uk);
}
// void - function returning none
function voidfun() {
    // return 15 
}
// null 
let n;
let nu = null;
//undefined
let und;
//never - never let any other line run , infinite loops
function infiniteloop() {
    while (true) {
        console.log(true);
    }
}
// infiniteloop()
console.log(15); // disabled because of neevr
