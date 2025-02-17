let arr = [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up...",
    "Hacked Successfully!! 😈"
];

const add = async (arr) => {
    let a = document.querySelector(".text");

    for (let i = 0; i < arr.length; i++) {
        await time(); // Wait for a random delay
        a.innerHTML += arr[i] + "<br>";
    }
};

const time = () => {
    return new Promise((resolve) => {
        let r = 1 + Math.floor(Math.random() * 6);
        setTimeout(resolve, r * 1000);
    });
};

// Run the hacking effect
add(arr);
window.setInterval(function () {
    let dot = document.getElementById("dot");
    if (dot.innerHTML.length >= 3)
        dot.innerHTML = "";
    else
        dot.innerHTML += ".";
}, 800);
