console.log("helllo");
document.body
document.body.childNodes // will show all nodes
document.body.childNodes[0] // 1st node or nth node
document.body.childNodes[1].childNodes // will show nodes inside nodes
let cont = document.body.childNodes[1]
console.log(cont);
// now i can directly access anything inside this through cont
cont.firstChild // output #text 
cont.lastChild  
cont.firstElementChild // will first non void div or content block i.e div.box
cont.lastElementChild // last one 
cont.firstElementChild.style.backgroundColor = "red" // will add style
cont.lastElementChild.style.backgroundColor = "pink" 
cont.firstElementChild.parentElement // will return parent element i.e. div.container
document.body.firstElementChild.childNodes // this will show all nodes which can be text comment everything - NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] 
document.body.firstElementChild.children // this will show only element childs - HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[1].nextElementSibling // this will show the just next alternate sibling element which is box 3
document.body.firstElementChild.children[1].previousElementSibling // previous one
document.body.firstElementChild.children[1].previousSibling //this will show previous node
document.body.firstElementChild.children[1].nextSibling//this will show next  node i.e text
document.body.children 
document.body.children[1].rows // will show all rows of table   
