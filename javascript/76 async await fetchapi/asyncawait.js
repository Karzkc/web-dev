function indata(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data is- ",data);
            resolve("success")
        }, 2000);
    })
    
}

(async function getdata() {
    console.log("getting data...");
    await indata(14)
    console.log("getting data...");
    await indata(69)
    console.log("getting data...");
    await indata(64)
    
})()

