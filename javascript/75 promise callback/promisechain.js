function getdata(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data is:-", dataid);
            resolve("success")
        }, 3000);
    })
}

// let get = getdata(69)
// get.then((res)=>{
//     console.log(res);

// }) instead this we can directly use then on func

getdata(69).then(() => {
    return getdata(14)
}).then(() => {
    return getdata(1455)
}).then((result) => {
    console.log(result);

})

