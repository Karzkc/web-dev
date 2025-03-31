// Type Intersections in TypeScript

// Type intersections in TypeScript allow you to combine multiple types into one using the & (AND) operator. This means an intersection type must include all properties from the combined types.

type a = number
type b = string

type c = a & b // c is a type that has both number and string properties

type A = { name: string };
type B = { age: number };

type Person = A & B;

const user: Person = {
  name: "Kartik",
  age: 20
};


