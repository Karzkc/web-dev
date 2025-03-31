// 🌟 What Are Generics?

// Generics in TypeScript allow you to write reusable, type-safe code. Instead of hardcoding specific types, we use a placeholder (like <T>) that can be replaced with any type at runtime.

// TypeScript Generics: Functions, Interfaces, and Classes

// ✅ 1. Generic Function (Replaces specific types with T)
function identity<T>(value: T): T {
    return value;
  }
  console.log(identity<number>(10)); // Output: 10
  console.log(identity<string>("Hello")); // Output: Hello
  
  // ✅ 2. Generic Function with Multiple Types
  function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  const result = merge({ name: "Kartik" }, { age: 22 });
  console.log(result); // Output: { name: "Kartik", age: 22 }
  
  // ✅ 3. Generic Function with Constraints (Ensuring properties exist)
  function logLength<T extends { length: number }>(item: T): void {
    console.log(`Length: ${item.length}`);
  }
  logLength("Hello"); // Output: Length: 5
  logLength([1, 2, 3]); // Output: Length: 3
  // logLength(10); // ❌ Error: Number doesn't have 'length' property.
  
  // ✅ 4. Generic Interface (Allowing dynamic data types)
  interface Box<T> {
    value: T;
  }
  const stringBox: Box<string> = { value: "Hello" };
  const numberBox: Box<number> = { value: 42 };
  console.log(stringBox.value); // Output: Hello
  console.log(numberBox.value); // Output: 42
  
  // ✅ 5. Generic Class (Reusable for different data types)
  class DataStorage<T> {
    private items: T[] = [];
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(item: T): void {
      this.items = this.items.filter(i => i !== item);
    }
  
    getItems(): T[] {
      return this.items;
    }
  }
  
  // Using Generic Class with different types
  const textStorage = new DataStorage<string>();
  textStorage.addItem("Apple");
  textStorage.addItem("Banana");
  textStorage.removeItem("Apple");
  console.log(textStorage.getItems()); // Output: ["Banana"]
  
  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(100);
  numberStorage.addItem(200);
  console.log(numberStorage.getItems()); // Output: [100, 200]
  
  // ✅ 6. Generics with `as` Type Assertion
  function getFirstElement<T>(arr: T[]): T {
    return arr[0] as T;
  }
  console.log(getFirstElement<number>([1, 2, 3])); // Output: 1
  console.log(getFirstElement<string>(["a", "b", "c"])); // Output: "a"
  
  // ✅ 7. Default Generic Types (When type is not provided, default to string)
  interface ResponseData<T = string> {
    data: T;
  }
  const response1: ResponseData = { data: "Success" }; // Uses default type string
  const response2: ResponseData<number> = { data: 200 }; // Explicitly set to number
  
  // ✅ 8. Utility Types (Built-in TypeScript Generics)
  interface User {
    name: string;
    age: number;
  }
  
  // Partial<T>: Makes all properties optional
  const partialUser: Partial<User> = { name: "Kartik" }; // 'age' is optional
  
  // Readonly<T>: Prevents modifications
  const readonlyUser: Readonly<User> = { name: "Kartik", age: 22 };
  // readonlyUser.age = 25; // ❌ Error: Cannot modify read-only property
  