let arr = [1,2,3,3,4,5,6,6,8,9]
let c = null
for (let i = 0; i < arr.length; i++) {
    if (arr[i]!=c){
        arr[i]*=2;

    }
    c = arr[i]
    
}
console.log(arr);

