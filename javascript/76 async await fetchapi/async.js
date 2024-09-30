document.body.style.fontSize = "30px"
// async function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Resolved!!!")
//         }, 2000);
//     })
// }

async function getData() {
    // let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.text()
    // let data = await x.json()
    console.log(data);


}
async function main() {
    console.log("this will be executed");
    console.log("data entered!");
    let data = await getData()

    console.log(data);
    console.log("data processed!!");
}
main()

// data.then((v)=>{
//     console.log(data);
//     console.log("data processed!!");
// })





