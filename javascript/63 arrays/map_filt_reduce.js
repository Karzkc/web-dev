let a = [5,6,7,8,9]
// let new = []
// for (let i = 0; i < a.length; i++) {
//     const element = a[i]**2;
//     new.push(element);
    
// }
// console.log(new_arr);
// this is for long method we can reduce it with mapping - (=>)
let new_arr = arr.map(e=>{
    return e**2;
})
console.log(new_arr);
//output will be same , it is like lambda in python
// now we'' see about filter function used for conditions
const greater_than_10 = (e)=>{
    if (e > 40){
        return true;

    }
    return false;
}
console.log(new_arr.filter(greater_than_10));
// this will return only those greater than 40


// now we'll se about reduce function
let x = [1,2,3,4]
const redu = (a,b)=>{
    return a*b;
}
console.log(x.reduce(redu)); // this will return product of all elemets 


// to conevrt any other object into strinf from func is used

console.log(Array.from("kartik"));
