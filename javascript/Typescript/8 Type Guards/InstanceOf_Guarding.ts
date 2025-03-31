// just like type of guarding, we can use instance of guarding to check the type of a class instance
// instance of guarding is used to check if an object is an instance of a specific class or constructor function.

class Animal {
    makeSoundAnimal() {
        console.log("Animal sound");
    }
}

class Human {
    makeSoundHuman() {
        console.log("Human sound");
    }
}

const animal = new Animal();
const human = new Human();

function makeSound(organism: Animal | Human) {
    if (organism instanceof Human) {
        organism.makeSoundHuman(); // Human method 
    }
    else if (organism instanceof Animal) {
        organism.makeSoundAnimal(); // Animal method 

    }
    else {
        throw new Error("Invalid organism type")
    }


}

// another example 

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Bike {
    ride() {
        console.log("Riding...");
    }
}

function checkVehicle(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
        vehicle.drive(); // ✅ Safe because we know it's a Car
    } else {
        vehicle.ride(); // ✅ Safe because it's a Bike
    }
}

const myCar = new Car();
const myBike = new Bike();

checkVehicle(myCar); // Driving...
checkVehicle(myBike); // Riding...
