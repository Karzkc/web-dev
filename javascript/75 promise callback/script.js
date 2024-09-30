// console.log("this will be shown  1st");
// console.log("this will be shown  2nd");

// setTimeout(() => {
//     console.log("this will be shown 4th but after 1 second and i am timeout 1");

// }, 2000);
// setTimeout(() => {
//     console.log("this will be shown 5th but after 1 second and i am  timeout 2");

// }, 2000);
// // this was about ansynchronity of js 
// //now about callback function

// console.log("this will be shown 3rd");

// const call = (arg) => {
//     console.log(arg);

// }
 
// const loadscript = (src, callback) => {
//     let script = document.createElement("script");
//     script.src = src
//     script.onload = callback("this is callback");
//     document.head.append(script)

// }

// // promises is used to avoid pyramid of doom by  callabcks there will be lost of callback function which will take another functions as arg
// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",call)

Q="what is your name"
if (Q=="what is your name") {
    console.log("my name is chat gpt");
    
} else if (Q=="how are you") {
    console.log("im fine");
    
} 
else{
    console.log("sorry as an ai model icant ");
    
}