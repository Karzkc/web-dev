// just like generic functions, we can also create generic interfaces 
// generic interfaces are interfaces that can work with any data type. They are defined using a type parameter, which is a placeholder for the actual type that will be used when the interface is implemented. This allows you to write more flexible and reusable code.

interface GenericInterface<T> {
    name: string;
    age: number;
    data: T;
}
function printGenericInterface<T>(obj: GenericInterface<T>) {
    console.log(`Name: ${obj.name}, Age: ${obj.age}, Data: ${obj.data}`);
}

// Example usage:
const obj1: GenericInterface<number> = { name: "Alice", age: 30, data: 42 };
const obj2: GenericInterface<string> = { name: "Bob", age: 25, data: "Hello" };
const obj3: GenericInterface<boolean> = { name: "Charlie", age: 35, data: true };
   