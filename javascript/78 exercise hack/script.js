function Hacked() {
    let a = document.querySelector(".text")
    a.innerText = "Initializing Hacking"
    setTimeout(() => {
        a.innerText = "Reading your Files";
    }, 4000);

    setTimeout(() => {
        a.innerText = "Password files Detected";
    }, 8000);

    setTimeout(() => {
        a.innerText = "Sending all passwords and personal files to server";
    }, 12000);

    setTimeout(() => {
        a.innerText = "Cleaning up";
    }, 16000);
    setTimeout(() => {
        a.innerText = "Hacked Successfully!! 😈";
    }, 20000);
    
    
    window.setInterval(function () {
        let dot = document.getElementById("dot");
        if (dot.innerHTML.length >= 3)
            dot.innerHTML = "";
        else
            dot.innerHTML += ".";
    }, 800);
    

}
Hacked()






