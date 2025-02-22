//1. This code snippet demonstrates JavaScript's asynchronous and non-blocking nature
console.log(1);
setTimeout(() => {
    console.log(2);

}, 2000);
console.log(3);

//2. Same code with async await
function cb() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log(2);
    
        }, 2000);
    })
}
(async function fun() {
    console.log(1);
    await cb();
    console.log(3);
})()
