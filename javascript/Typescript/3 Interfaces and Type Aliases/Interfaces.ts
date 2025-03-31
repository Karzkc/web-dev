// What are Interfaces in TypeScript?

// In TypeScript, an interface is a way to define a structure or contract for an object. It specifies the properties and their types, ensuring that objects follow a consistent shape.

// Why Use Interfaces?

// ✅ Helps in defining a structure for objects.
// ✅ Ensures type safety.
// ✅ Supports inheritance (extending other interfaces).
// ✅ Can be used in functions and classes.

interface Types{
    name: string,
    age: number,
    is_married: boolean,
    gender?:string // optional
}

function getData(object:Types) {
    console.log(object.name);
    console.log(object.age);
    console.log(object.is_married);
    console.log(object.gender);
    
    console.log("You are Eligible");
    
}

let object = {
    name: "kk",
    age:19,
    is_married:false
}
getData(object)
