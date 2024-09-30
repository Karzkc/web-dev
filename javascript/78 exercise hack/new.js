let arr = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up","Hacked Successfully!!😈"]

const add = async ((arr) => {
time();

    let a = document.querySelector(".text");
    for (let i = 0; i < 6; i++) {
        a.append(arr[i]+"<br>")
    }
})
add(arr)
const time = (() => {
    return new Promise((resolve, reject) => {
        let r = 1 + Math.floor(Math.random() * 6)
        setTimeout(() => {
            resolve()
        }, r * 1000);
    })

})

async function Hack() {
    let line = document.getElementsByClassName("text");


}
Hack()
await rand();