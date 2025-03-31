// Type Assertion (Tells TypeScript to treat a variable as a specific type)
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length; // Asserting as string
console.log("String length:", strLength);

// Another way to do type assertion
let strLength2: number = (<string>someValue).length;
console.log("String length (alternative assertion):", strLength2);


// Type Casting (Explicitly converting between types)
let num: number = 42;
let strNum: string = num.toString(); // Convert number to string
console.log("Converted Number to String:", strNum);

let strValue: string = "123";
let numValue: number = Number(strValue); // Convert string to number
console.log("Converted String to Number:", numValue);


// Non-Null Assertion Operator (!)
interface Person {
  name: string;
  age?: number; // Optional property
}

let person: Person = { name: "John" };
console.log("Person's Name:", person.name);
console.log("Person's Age:", person.age!); // Asserting that age is not null or undefined
