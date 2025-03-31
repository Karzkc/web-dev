// 1. Basic Type Annotations
var username = "Kartik"; // String annotation
var age = 20; // Number annotation
var isStudent = true; // Boolean annotation
// 2. Array Annotations
var scores = [90, 85, 88]; // Array of numbers
var fruits = ["Apple", "Banana", "Mango"]; // Array of strings
// 3. Tuple Annotation (Fixed-length array with different types)
var person = ["Kartik", 20, true];
// 4. Enum Annotation (A set of named constants)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var favoriteColor = Color.Green; // Assigning an enum value
// 5. Function Parameter & Return Type Annotation
function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
// 6. Union Type Annotation (Variable can hold multiple types)
var id;
id = "123"; // ✅ Allowed
id = 123; // ✅ Allowed
// id = true; // ❌ Error
// 7. Object Type Annotation
var user = {
    name: "Kartik",
    age: 20,
    isActive: true
};
var employee1 = { id: 101, name: "Alice", department: "IT" };
var myCar = { brand: "Tesla", year: 2022, isElectric: true };
var greet = function (name) { return "Hello, ".concat(name, "!"); };
// 11. Any Type (Disables TypeScript type checking)
var randomValue = "Hello";
randomValue = 42; // ✅ Allowed
randomValue = true; // ✅ Allowed
// 12. Void Type (For functions that do not return a value)
function logMessage(message) {
    console.log(message);
}
// 13. Never Type (For functions that never return)
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
var lead = {
    name: "Kartik",
    skills: ["React", "Node.js", "TypeScript"],
    teamSize: 5
};
var student1 = { name: "Rahul" }; // ✅ Allowed
var user1 = { id: 1, name: "Kartik" };
// user1.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
console.log("All TypeScript annotations are demonstrated! ✅");
