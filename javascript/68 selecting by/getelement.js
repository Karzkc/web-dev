console.log("HEllllo");

let box = document.getElementsByClassName("box")
console.log(box);
box[1].style.backgroundColor = "red"
document.getElementById("temp").style.backgroundColor = "maroon"

document.querySelector(".box").style.backgroundColor = "purple" // will access first occured element 
document.querySelectorAll(".box") // will return all elements 
console.log(document.querySelectorAll(".box")); // but we cant apply driectly style on it as it isnt a array it is html collection thus we haev to use for loop
// document.querySelectorAll(".box").forEach(e => {
//     console.log(e);// will show all elemets in collection
//     e.style.backgroundColor = "yellow" // now it will applied on all 
// });
let coll = document.querySelectorAll(".box")
for (let i = 0; i < coll.length; i++) {
    const element = coll[i];
    console.log(element); // this method will also work to show all elements 
    element.style.backgroundColor = "orange" // this will also work
}
document.getElementsByTagName("div")
let e = document.getElementsByTagName("div")

// by this we can sellect html tags unlike class or id
// output - 
// HTMLCollection(7) [div.container, div.box, div#temp.box, div.box, div.box, div.box, div.box, temp: div#temp.box]
// get elements is used for classes , id , tags , name attribute etc
// now about matches function it is used to see if that selected element matches with another id or class or css attribute
e[2].matches("#temp") // will return true
e[1].matches("#temp") // will return false
// now closest , it will return the closest relating tag of given tag
e[2].closest("#temp") // will return the matching tag - <div class="box" id="temp" style="background-color: orange;">temp  </div>
// if no one amtches then it will return null 
e[1].closest("#temp") // null
// now contains - will return true if a element is in another element or vice versa otherwise false
document.querySelector(".container").contains(e[2]) // will return true that yess e2 is in  container
document.querySelector(".container").contains(e[0]) // will return true as it contain e0 that is itself
document.querySelector(".container").contains(document.querySelector("body")) // will return false as it doesnt contain body
document.querySelector("body").contains(document.querySelector(".container")) // but vice versa is true



