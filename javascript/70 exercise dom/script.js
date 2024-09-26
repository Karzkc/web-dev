// ***** Method 1 - 

// let color = ["red", "yellow", "green", "blue", "pink", "orange", "purple", "brown", "gray", "cyan", "magenta", "lime", "maroon", "navy", "olive", "silver", "teal",
//     "violet", "yellowgreen", "darkmagenta", "darkolive", "darkred", "darksalmon", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "firebrick", "floralwhite", "ghostwhite", "honeydew", "indianred", "ivory", "khaki", "lavender", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "light"
// ]
// let bg =  ["red", "yellow", "green", "blue", "pink", "orange", "purple", "brown", "gray", "cyan", "magenta", "lime", "maroon", "navy", "olive", "silver", "teal",
//     "violet", "yellowgreen", "darkmagenta", "darkolive", "darkred", "darksalmon", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "firebrick", "floralwhite", "ghostwhite", "honeydew", "indianred", "ivory", "khaki", "lavender", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "light"
// ]

// let color_num = Math.floor(Math.random()*50)
// let bg_num = Math.floor(Math.random()*50)
// let a = color[color_num]
// let b = bg[bg_num]
// console.log(color[color_num],bg[bg_num]);
// let boxes = document.querySelectorAll(".box");
// boxes.forEach(e=>{
//     e.style.color = a
//     e.style.backgroundColor = b
// })

// ***** Method 2 -

function rand() {
    let a = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let c = Math.floor(Math.random()*255)
    return `rgb(${a},${b},${c})` 
}
let boxes = document.querySelectorAll(".box")
boxes.forEach(e=>{
    e.style.color = rand();
    e.style.backgroundColor = rand();

})

