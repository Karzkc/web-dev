var map = function(arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i],i)
    }
    return arr
};
let arr = [1,2,3]
let fn = function plusI(n,i){
    n+=i;
    return n
}
const new_Arr = map(arr,fn)
console.log(new_Arr);
