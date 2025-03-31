// 🌟 What Are Generics?
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generics in TypeScript allow you to write reusable, type-safe code. Instead of hardcoding specific types, we use a placeholder (like <T>) that can be replaced with any type at runtime.
// TypeScript Generics: Functions, Interfaces, and Classes
// ✅ 1. Generic Function (Replaces specific types with T)
function identity(value) {
    return value;
}
console.log(identity(10)); // Output: 10
console.log(identity("Hello")); // Output: Hello
// ✅ 2. Generic Function with Multiple Types
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge({ name: "Kartik" }, { age: 22 });
console.log(result); // Output: { name: "Kartik", age: 22 }
// ✅ 3. Generic Function with Constraints (Ensuring properties exist)
function logLength(item) {
    console.log("Length: ".concat(item.length));
}
logLength("Hello"); // Output: Length: 5
logLength([1, 2, 3]); // Output: Length: 3
var stringBox = { value: "Hello" };
var numberBox = { value: 42 };
console.log(stringBox.value); // Output: Hello
console.log(numberBox.value); // Output: 42
// ✅ 5. Generic Class (Reusable for different data types)
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.items = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    DataStorage.prototype.getItems = function () {
        return this.items;
    };
    return DataStorage;
}());
// Using Generic Class with different types
var textStorage = new DataStorage();
textStorage.addItem("Apple");
textStorage.addItem("Banana");
textStorage.removeItem("Apple");
console.log(textStorage.getItems()); // Output: ["Banana"]
var numberStorage = new DataStorage();
numberStorage.addItem(100);
numberStorage.addItem(200);
console.log(numberStorage.getItems()); // Output: [100, 200]
// ✅ 6. Generics with `as` Type Assertion
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement(["a", "b", "c"])); // Output: "a"
var response1 = { data: "Success" }; // Uses default type string
var response2 = { data: 200 }; // Explicitly set to number
// Partial<T>: Makes all properties optional
var partialUser = { name: "Kartik" }; // 'age' is optional
// Readonly<T>: Prevents modifications
var readonlyUser = { name: "Kartik", age: 22 };
// readonlyUser.age = 25; // ❌ Error: Cannot modify read-only property
