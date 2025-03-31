// just like generic functions and interfeces we can also create generic classes
// generic classes are classes that can work with any data type. They are defined using a type parameter, which is a placeholder for the actual type that will be used when the class is instantiated. This allows you to write more flexible and reusable code.

class GenericClass<T> {
    name: string;
    age: number;
    data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.age = age;
        this.data = data;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Data: ${this.data}`);
    }
}

// Example usage:
const obj1 = new GenericClass<number>("Alice", 30, 42);
const obj2 = new GenericClass<string>("Bob", 25, "Hello");
const obj3 = new GenericClass<boolean>("Charlie", 35, true);