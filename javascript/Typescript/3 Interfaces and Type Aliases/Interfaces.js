// What are Interfaces in TypeScript?
function getData(object) {
    console.log(object.name);
    console.log(object.age);
    console.log(object.is_married);
    console.log(object.gender);
    console.log("You are Eligible");
}
var object = {
    name: "kk",
    age: 19,
    is_married: false
};
getData(object);
