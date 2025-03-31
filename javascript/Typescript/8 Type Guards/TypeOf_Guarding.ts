// Type Guarding in TypeScript

// Type guarding is a way to ensure TypeScript understands the type of a value before performing operations on it. This prevents runtime errors and improves type safety.

// this method is knwon as type narrowing : it narrows down the type of a variable to a more specific type based on certain conditions.

function guard(arg: string|number){
    // arg.method : - only return common methods of both string and number ie toString etc 

    if (typeof arg === 'string'){
        // arg.method : - only return string methods
        console.log(arg.toUpperCase()) // string method
    }
    else if (typeof arg === 'number'){
        // arg.method : - only return number methods
        console.log(arg.toFixed(2)) // number method
    }
    else{
        throw new Error("Invalid argument type")
    }
}