// Constructors: Special methods for creating and initializing objects within a class.
// They have the same name as the class and are called when the 'new' keyword is used.
class Point {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    display(): string {
      return `(${this.x}, ${this.y})`;
    }
  }
  
  const point = new Point(10, 20); // Creates a new Point object using the constructor
  console.log(point.display()); // Output: (10, 20)
  
  // Access modifiers (public, private, protected): Control the visibility of class members.
  // - public: Accessible from anywhere (default).
  // - private: Accessible only within the class.
  // - protected: Accessible within the class and its subclasses.
  class Circle {
    public radius: number; // Public member, accessible from anywhere
    private color: string; // Private member, accessible only within Circle
    protected name: string; // Protected member, accessible within Circle and its subclasses
  
    constructor(radius: number, color: string, name: string) {
      this.radius = radius;
      this.color = color;
      this.name = name;
    }
  
    public getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    private getColor(): string {
      return this.color;
    }
  
    protected getName(): string {
      return this.name;
    }
  }
  
  class ColoredCircle extends Circle {
    constructor(radius: number, color: string, name: string) {
      super(radius, color, name);
    }
  
    public displayColor(): string {
      // return this.color; // Error: Property 'color' is private and only accessible within class 'Circle'.
      return this.getName(); // OK: Can access protected member 'name'.
    }
  }
  
  const circle = new Circle(5, 'red', 'MyCircle');
  console.log(circle.getArea()); // OK: Accessing public member.
  // console.log(circle.color); // Error: Property 'color' is private and only accessible within class 'Circle'.
  // console.log(circle.getName()); // Error: Property 'name' is protected and only accessible within class 'Circle' and its subclasses.
  
  const coloredCircle = new ColoredCircle(3, 'blue', 'MyColoredCircle');
  console.log(coloredCircle.displayColor()); // Output: MyColoredCircle
  
  // Readonly properties: Can only be assigned a value once, either at declaration or in the constructor.
  class Person {
    readonly birthDate: Date;
  
    constructor(birthDate: Date) {
      this.birthDate = birthDate;
      // this.birthDate = new Date(); // Error: Cannot assign to 'birthDate' because it is a read-only property.
    }
  }
  
  const person = new Person(new Date('2000-01-01'));
  console.log(person.birthDate); // Output: 2000-01-01T00:00:00.000Z
  
  // Optional properties: Properties that may or may not exist on an object.
  // They are defined with a '?' after the property name.
  interface Address {
    street: string;
    city: string;
    zip?: string; // Optional property
  }
  
  const address1: Address = { street: '123 Main St', city: 'Anytown' };
  const address2: Address = { street: '456 Elm St', city: 'Otherville', zip: '12345' };
  
  console.log(address1.zip); // Output: undefined
  console.log(address2.zip); // Output: 12345
  
  // Parameter properties: A shorthand for defining and initializing class members in the constructor.
  class Employee {
    constructor(public id: number, public name: string, public department?: string) {}
  
    display(): string {
      return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
  }
  
  const employee = new Employee(1, 'John Doe', 'Sales');
  console.log(employee.display()); // Output: ID: 1, Name: John Doe, Department: Sales
  
  // Getters and setters: Allow you to control access to class members.
  // Getters are used to retrieve the value of a property, and setters are used to set the value.
  class Temperature {
    private _celsius: number = 0;
  
    get celsius(): number {
      return this._celsius;
    }
  
    set celsius(value: number) {
      if (value < -273.15) {
        throw new Error('Temperature cannot be below absolute zero.');
      }
      this._celsius = value;
    }
  
    get fahrenheit(): number {
      return (this._celsius * 9) / 5 + 32;
    }
  
    set fahrenheit(value: number) {
      this._celsius = ((value - 32) * 5) / 9;
    }
  }
  
  const temp = new Temperature();
  temp.celsius = 25;
  console.log(temp.fahrenheit); // Output: 77
  
  // Static members: Belong to the class itself rather than instances of the class.
  // They are accessed using the class name.
  class MathUtils {
    static PI: number = 3.14159;
  
    static calculateCircleArea(radius: number): number {
      return MathUtils.PI * radius * radius;
    }
  }
  
  console.log(MathUtils.PI); // Output: 3.14159
  console.log(MathUtils.calculateCircleArea(5)); // Output: 78.53975
  
  // Abstract classes and methods: Cannot be instantiated directly and are meant to be subclassed.
  // Abstract methods have no implementation in the abstract class and must be implemented by subclasses.
  abstract class Shape {
    abstract getArea(): number; // Abstract method
  
    displayColor(): string {
      return 'Colorless';
    }
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.getArea()); // Output: 50
  console.log(rectangle.displayColor()); // Output: Colorless