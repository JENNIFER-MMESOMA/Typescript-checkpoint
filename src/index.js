"use strict";
// Step 2: Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Step 3: Implement the start method
    start() {
        console.log("Car engine started");
    }
}
// Step 4: Create an instance of the Car class and call the start method
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // This will log "Car engine started" to the console
