const { Car } = require("./car");

class Race {
  constructor(cars, length = 100, finalizo = false) {
    this.cars = cars;
    this.length = length;
    this.finalizo = finalizo;
  }
  rSG() {
    for (let index = 0; index < this.cars.length; index++) {
      this.cars[index].run();
    }
    const filter = this.cars.filter((car) => car.x > this.length).length;
    if (filter > 0) {
      const winner = this.cars.filter(
        (car) => car.x === Math.max(...this.cars.map((car) => car.x))
      );
      console.log("winner", winner);
      console.log();
      this.finalizo = true;
    }
    if (this.finalizo !== true) this.rSG();
  }
}

const car1 = new Car("Rojinator 5000", "blue");
const car2 = new Car("Tinkinator 12000", "purple");
const car3 = new Car("Toponaitor 700", "red");
const car4 = new Car("Cosinator 900", "grey");
const car5 = new Car("VernieSexo 12000", "dark");
const car6 = new Car("Suprema 12000", "white");
const car7 = new Car("Lorem 1s000", "black");

const race = new Race([
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  new Car("kkk", "brown"),
]);

race.rSG();
