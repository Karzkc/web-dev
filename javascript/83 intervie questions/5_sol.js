let arr = [1,2,3,4,-10]

let newarr = arr.filter(e=> e>=0
)
newarr = newarr.reduce((a,b)=>a+b)
console.log(newarr);
