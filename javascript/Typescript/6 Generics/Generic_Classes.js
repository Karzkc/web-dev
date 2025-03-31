// just like generic functions and interfeces we can also create generic classes
// generic classes are classes that can work with any data type. They are defined using a type parameter, which is a placeholder for the actual type that will be used when the class is instantiated. This allows you to write more flexible and reusable code.
var GenericClass = /** @class */ (function () {
    function GenericClass(name, age, data) {
        this.name = name;
        this.age = age;
        this.data = data;
    }
    GenericClass.prototype.print = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Data: ").concat(this.data));
    };
    return GenericClass;
}());
// Example usage:
var obj1 = new GenericClass("Alice", 30, 42);
var obj2 = new GenericClass("Bob", 25, "Hello");
var obj3 = new GenericClass("Charlie", 35, true);
