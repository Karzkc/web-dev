// 1. Basic Type Annotations
let username: string = "Kartik";  // String annotation
let age: number = 20;  // Number annotation
let isStudent: boolean = true;  // Boolean annotation

// 2. Array Annotations
let scores: number[] = [90, 85, 88];  // Array of numbers
let fruits: string[] = ["Apple", "Banana", "Mango"];  // Array of strings

// 3. Tuple Annotation (Fixed-length array with different types)
let person: [string, number, boolean] = ["Kartik", 20, true];

// 4. Enum Annotation (A set of named constants)
enum Color {
  Red,   // 0
  Green, // 1
  Blue   // 2
}
let favoriteColor: Color = Color.Green; // Assigning an enum value

// 5. Function Parameter & Return Type Annotation
function add(a: number, b: number): number {
  return a + b;
}
let sum: number = add(5, 10);

// 6. Union Type Annotation (Variable can hold multiple types)
let id: string | number;
id = "123"; // ✅ Allowed
id = 123; // ✅ Allowed
// id = true; // ❌ Error

// 7. Object Type Annotation
let user: { name: string; age: number; isActive: boolean } = {
  name: "Kartik",
  age: 20,
  isActive: true
};

// 8. Type Alias (Reusable type definition)
type Employee = {
  id: number;
  name: string;
  department: string;
};

let employee1: Employee = { id: 101, name: "Alice", department: "IT" };

// 9. Interface (Similar to type alias but used for objects/classes)
interface Car {
  brand: string;
  year: number;
  isElectric: boolean;
}

let myCar: Car = { brand: "Tesla", year: 2022, isElectric: true };

// 10. Function with Interface
interface GreetFunction {
  (name: string): string;
}

const greet: GreetFunction = (name) => `Hello, ${name}!`;

// 11. Any Type (Disables TypeScript type checking)
let randomValue: any = "Hello";
randomValue = 42; // ✅ Allowed
randomValue = true; // ✅ Allowed

// 12. Void Type (For functions that do not return a value)
function logMessage(message: string): void {
  console.log(message);
}

// 13. Never Type (For functions that never return)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// 14. Intersection Type (Combining multiple types)
type Developer = {
  name: string;
  skills: string[];
};

type Manager = {
  teamSize: number;
};

type TechLead = Developer & Manager;

let lead: TechLead = {
  name: "Kartik",
  skills: ["React", "Node.js", "TypeScript"],
  teamSize: 5
};

// 15. Optional Properties (Using '?')
interface Student {
  name: string;
  age?: number; // Optional
}

let student1: Student = { name: "Rahul" }; // ✅ Allowed

// 16. Readonly Properties
interface ReadOnlyUser {
  readonly id: number;
  name: string;
}

let user1: ReadOnlyUser = { id: 1, name: "Kartik" };
// user1.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.

console.log("All TypeScript annotations are demonstrated! ✅");
