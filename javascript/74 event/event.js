let btn = document.getElementById("btn")

btn.addEventListener("contextmenu",()=>{
    // alert("I was touched inappropriately!!")
    document.querySelector(".box").innerHTML= "button was clicked <b>in wrong way</b>!!!"
}

)
// there are many more mouse event listeners
document.addEventListener("keydown",(e)=>{
    alert(`The key ${e.key} ( code: ${e.keyCode}) was pressed brutally`)
    // console.log(e.key);
    
})
// keyboard events with key and keycode
