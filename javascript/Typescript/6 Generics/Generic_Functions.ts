// Generic functions are functions that can work with any data type. They are defined using a type parameter, which is a placeholder for the actual type that will be used when the function is called. This allows you to write more flexible and reusable code.

function identity<T>(arg: T): T {
    return arg;
}

// The above function takes a single argument of type T and returns it. The type T is a placeholder that will be replaced with the actual type when the function is called.
// For example:

const numberIdentity = identity<number>(42); // numberIdentity is of type number
const stringIdentity = identity<string>("Hello"); // stringIdentity is of type string
const booleanIdentity = identity<boolean>(true); // booleanIdentity is of type boolean