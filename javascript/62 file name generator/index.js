/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
console.clear();



let adj={
    1:"Crazy ",
    2:"Amazing ",
    3:"Fire "
}
let shop={
    1:"Engine ",
    2:"Foods ",
    3:"Garments "
}
let word={
    1:"Bros ",
    2:"Limited ",
    3:"Hub "
}
let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();
let a, b, c; 
if (rand1<=0.33 && 0<rand1) {
    a = adj[1]
}
else if (rand1>0.33&&rand1<=0.66) {
    a = adj[2]
}
else{
    a = adj[3]
}


if (rand2<=0.33 && 0<rand2) {
    b = shop[1]
}
else if (rand2>0.33&&rand2<=0.66) {
    b = shop[2]
}
else{
    b = shop[3]
}

if (rand1<=0.33 && 0<rand1) {
    c = word[1]
}
else if (rand1>0.33&&rand1<=0.66) {
    c = word[2]
}
else{
    c = word[3]
}

console.log(`Your Final Name is :- ${a} ${b} ${c}`);


