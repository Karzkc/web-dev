// Extended Interfaces in TypeScript

// In TypeScript, an extended interface is an interface that inherits properties from another interface using the extends keyword. This allows us to create reusable and modular code by building upon existing interfaces.

interface Person {
    name: string;
    age: number;
}
  
interface Employee extends Person {
    salary: number|boolean|string;
}

function Interface(emp:Employee) {
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.salary);
    
}

let emp: Employee = {
    name: "Kartik",
    age: 20,
    salary: "hello",
};
  
Interface(emp)

// if we create two interfaces with the same name, it will merge them into one interface. This is useful for extending existing interfaces or adding new properties to them without modifying the original definition.
interface students{
    name: string
}

interface students{
    age: number
}
