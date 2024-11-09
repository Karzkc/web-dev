import path from 'path'
// console.log(path);
let mypath = "d:\\Kartik Khiriya\\own\\new\\web dev\\javascript\\87 files fs modules\\path.js"
console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));
console.log(path.join("C:/",mypath));// this will undertand the req and join the paths
// This method of this module will tell what kind of extension does the given path file contain
// also we can use dirname and absename