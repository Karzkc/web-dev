function array() {
    let arr = [1,2,3,4,5,6,7,8,9]
    let new_arr = arr.map(e=>e*2)
    let prom = new Promise((resolve, reject) => {
        console.log(`Original array is ${arr}...`);
        console.log("The new array is...");
        setTimeout(() => {
            console.log(new_arr);
            resolve("success!!")  
        }, 500);
    })
    return prom
}

async function GetArr() {
    console.log("Loading Data...");
    let result = await array()
    console.log(result);
    
}

GetArr()