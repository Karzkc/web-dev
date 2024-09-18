let arr = [1, 2, 3, 4, 5, 6]
console.log(arr);
// console.log(typeof arr);
// // In JavaScript, arrays are a special type of object. They are dynamic, meaning they can grow or shrink as needed, and can contain elements of different data types.
// console.log(arr.length);
// //same string functions but string ,tuple are immutable and array is mutable
// // arr[0]=6 ;
// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[1]);

;
    
    
// // }

// console.log(arr.toString());
// console.log(arr.join(" # "));
// // elements will get seperated by #

// console.log(`items popped ${arr.pop()} , modified array ${arr}`);
// console.log(`item added 69 ,with new lenghth ${arr.push(69)} new array ${arr}`);

// console.log(` shift will remove item form first , like initially string was ${arr} ,item removed from start ${arr.shift()} with new array ${arr}`);
// console.log(`similiarly unshift will add an element in start , like initially string was ${arr}, but now after adding 9 in start the lenghth of arr is ${arr.unshift(9)} with modified array ${arr}`);

// push and unshift , pop and shift are brother pairs
// console.log(arr.push(69)); will return lenghth of new modified array 


delete arr[5]; 
//this will only delete the item inside the array but the place will still exit 



console.log(`after deleting 6 from index 5 , array is ${arr}`);
console.log(arr);
console.log(arr[5]);

let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]
a.concat(b,c)
console.log(a.concat(b,c)); 
//will not chaneg exisiting array

// arr.splice(1,3)  this will return the numebr of elements removed and the elements which got removed  
console.log(arr.splice(1,3),arr);
// arr.splice(1,3,10,11,12) , this will add remaining elements in the array 
console.log(arr.splice(1,3,10,11,12),arr);

// arr.slice(start,end)
console.log(arr.slice(1,3));
console.log(arr.reverse());


// now accessing array by loops 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
 } // this will use classic for loop to access array


// but now for loop speacially for array 

arr.forEach((element_value,index,Arr)=>{
    console.log(element_value,index,Arr);
    
})
//this loop will give every detail of array 
// for in loop is much applicable for context of objects
let obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
        
        // this will return object only if it is its own property 
    }
}

// for of loop is more applicable for arrays

for (const i of arr) {
    console.log(i);
    
}

