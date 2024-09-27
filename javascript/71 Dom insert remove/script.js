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
<<<<<<< HEAD
document.querySelector("h1").setAttribute("style", "color: red") // will set the change in a tag
=======
document.querySelector("h1").setAttribute("style","color: red") // will set the change in a tag
>>>>>>> df6f4e47b51eb66f5f9baf98a1813e6b6f32a374
document.querySelector("h1").attributes
document.querySelector("h1").removeAttribute("style")
document.designMode = "on" // is like god mod for website by accessing anything on  a webpage
// data-createdby="kartik" can be also accessed  
document.querySelector(".box").dataset // return data creator - DOMStringMap {createdby: 'kartik'}

<<<<<<< HEAD
// for inside script
let div = document.createElement("div");
div.innerHTML = "Inserted through js <b> by kk</b>"
div.setAttribute("class", "created");
document.querySelector(".container").append(div)
// like append add content in end prepend in start before and after for a node

// there are insertAdjacentHTMl /text / element attributes also
let rem = document.querySelector(".remove")
rem.remove()
// will remove remove div
document.querySelector(".container").classList
document.querySelector(".container").className

// will tell the class list - DOMTokenList(4) ['container', 'temp', 'class2', 'etc', value: 'container temp class2 etc']
document.querySelector(".container").classList.add("new")

// will add new class to the container

document.querySelector(".container").classList.remove("new")

// will remove new class from the container

document.querySelector(".container").classList.toggle("new")

// will toggle new class to the container if there then remove if not create one

=======
>>>>>>> df6f4e47b51eb66f5f9baf98a1813e6b6f32a374

