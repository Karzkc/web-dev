// let pro = new Promise((resolve, reject) => {
//     console.log("will run when fullfilled");
//     reject(" not fulfilled")
// })
// console.log(pro);
//Promise { <rejected> ' not fulfilled' }

const get_promise = ()=>{
    return new Promise((resolve, reject) => {
        console.log("promise here");
        
        // resolve("fulfilled")
        reject("not fulfilled")
    })

}
let promise = get_promise()
// promise.then(result=>{
//     console.log("promise success using then and",result);
    
// })
promise.catch(err=>{
    console.log("promise fail using catch and",err);
    
})
