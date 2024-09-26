console.log("hello");
document.querySelector(".container").innerHTML // will show the html with code
document.querySelector(".BOX").innerText // WILL SHOW CODE AS TEXT
//inner will show stuf finsde that element
document.querySelector(".container").outerHTML// will show the html with that element itself
document.querySelector(".container").outerText

document.querySelector(".container").tagName // will tell the type of html tag only no nodes i.e. div here
document.querySelector("h1").nodeName // will give nodes + tags


document.querySelector("h1").textContent

document.querySelector("h1").hidden // return true or false 
document.querySelector("h1").hidden = true // will hide the h1
document.querySelector(".box").innerHTML = "Hello this is modified" // will the inner html


document.querySelector("h1").hasAttribute("style") // whether if carry following attribute or not
document.querySelector("h1").getAttribute("style") // will tell which attribute is there
document.querySelector("h1").setAttribute("style","color: red") // will set the change in a tag
document.querySelector("h1").attributes
document.querySelector("h1").removeAttribute("style")
document.designMode = "on" // is like god mod for website by accessing anything on  a webpage
// data-createdby="kartik" can be also accessed  
document.querySelector(".box").dataset // return data creator - DOMStringMap {createdby: 'kartik'}


