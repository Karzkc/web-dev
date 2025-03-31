var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Constructors: Special methods for creating and initializing objects within a class.
// They have the same name as the class and are called when the 'new' keyword is used.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.display = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    return Point;
}());
var point = new Point(10, 20); // Creates a new Point object using the constructor
console.log(point.display()); // Output: (10, 20)
// Access modifiers (public, private, protected): Control the visibility of class members.
// - public: Accessible from anywhere (default).
// - private: Accessible only within the class.
// - protected: Accessible within the class and its subclasses.
var Circle = /** @class */ (function () {
    function Circle(radius, color, name) {
        this.radius = radius;
        this.color = color;
        this.name = name;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.getName = function () {
        return this.name;
    };
    return Circle;
}());
var ColoredCircle = /** @class */ (function (_super) {
    __extends(ColoredCircle, _super);
    function ColoredCircle(radius, color, name) {
        return _super.call(this, radius, color, name) || this;
    }
    ColoredCircle.prototype.displayColor = function () {
        // return this.color; // Error: Property 'color' is private and only accessible within class 'Circle'.
        return this.getName(); // OK: Can access protected member 'name'.
    };
    return ColoredCircle;
}(Circle));
var circle = new Circle(5, 'red', 'MyCircle');
console.log(circle.getArea()); // OK: Accessing public member.
// console.log(circle.color); // Error: Property 'color' is private and only accessible within class 'Circle'.
// console.log(circle.getName()); // Error: Property 'name' is protected and only accessible within class 'Circle' and its subclasses.
var coloredCircle = new ColoredCircle(3, 'blue', 'MyColoredCircle');
console.log(coloredCircle.displayColor()); // Output: MyColoredCircle
// Readonly properties: Can only be assigned a value once, either at declaration or in the constructor.
var Person = /** @class */ (function () {
    function Person(birthDate) {
        this.birthDate = birthDate;
        // this.birthDate = new Date(); // Error: Cannot assign to 'birthDate' because it is a read-only property.
    }
    return Person;
}());
var person = new Person(new Date('2000-01-01'));
console.log(person.birthDate); // Output: 2000-01-01T00:00:00.000Z
var address1 = { street: '123 Main St', city: 'Anytown' };
var address2 = { street: '456 Elm St', city: 'Otherville', zip: '12345' };
console.log(address1.zip); // Output: undefined
console.log(address2.zip); // Output: 12345
// Parameter properties: A shorthand for defining and initializing class members in the constructor.
var Employee = /** @class */ (function () {
    function Employee(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    Employee.prototype.display = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Department: ").concat(this.department);
    };
    return Employee;
}());
var employee = new Employee(1, 'John Doe', 'Sales');
console.log(employee.display()); // Output: ID: 1, Name: John Doe, Department: Sales
// Getters and setters: Allow you to control access to class members.
// Getters are used to retrieve the value of a property, and setters are used to set the value.
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (value) {
            if (value < -273.15) {
                throw new Error('Temperature cannot be below absolute zero.');
            }
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return (this._celsius * 9) / 5 + 32;
        },
        set: function (value) {
            this._celsius = ((value - 32) * 5) / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // Output: 77
// Static members: Belong to the class itself rather than instances of the class.
// They are accessed using the class name.
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircleArea = function (radius) {
        return MathUtils.PI * radius * radius;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.53975
// Abstract classes and methods: Cannot be instantiated directly and are meant to be subclassed.
// Abstract methods have no implementation in the abstract class and must be implemented by subclasses.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.displayColor = function () {
        return 'Colorless';
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea()); // Output: 50
console.log(rectangle.displayColor()); // Output: Colorless
