console.log("promise 1 always executed");

let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random()
    if (rand<0.5) {
        reject("Error Code is rejected 1st time")
    }
    else{
        setTimeout(() => {
            console.log("I am done in 1st time");
            resolve("resolve text for 1st")
        }, 2000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random()
    if (rand<0.5) {
        reject("Error Code is rejected 2nd time")
    }
    else{
        setTimeout(() => {
            console.log("I am done in 2nd time");
            resolve("resolve text for 2nd")
        }, 1000);
    }
})
prom1.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

let prom3 = Promise.all([prom1,prom2])
prom3.then((a)=>{
    console.log(a);

}).catch((err)=>{
    console.log(err);
    
})
// when both resolved list of promises func will be shown in all - (2) ['resolve text for 1st', 'resolve text for 2nd']
// in all settled both will be shown irrespective of resolve or reject with status and value 

let prom4 = Promise.allSettled([prom1,prom2])
prom4.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})
//output - reason
// : 
// "Error Code is rejected 1st time"
// status
// : 
// "rejected"
// [[Prototype]]
// : 
// Object
// 1
// : 
// status
// : 
// "fulfilled"
// value
// : 
// "resolve text for 2nd"
let prom5 = Promise.race([prom1,prom2])
prom5.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})
// race will show 1st one to resolve
let prom6 = Promise.any([prom1,prom2])
prom6.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})
// if one resolved ANY will wait for the other one to be resolved