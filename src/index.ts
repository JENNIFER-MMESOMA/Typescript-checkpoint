
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;  // Method signature, returns void
}

// Step 2: Implement the Car class
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Step 3: Implement the start method
    start(): void {
        console.log("Car engine started");
    }
}

// Step 4: Create an instance of the Car class and call the start method
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();  // This will log "Car engine started" to the console
