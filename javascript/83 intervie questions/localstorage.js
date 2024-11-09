// if we want to store an input or variable in browser storage then we will use local storage 
// and it wont ask again if we use if else

if (localStorage.getItem("name")){
    a = localStorage.getItem("name")
    document.write("welcome " + a)

}
else{
    let a = prompt("enter Your name buddy:-")
    localStorage.setItem("name",a)
    document.write("welcome " + a)
}