const { Car } = require("./car");

class Race {
  constructor(cars, length = 100, finalizo = false) {
    this.cars = cars;
    this.length = length;
  }
  rSG() {
    for (let index = 0; index < 10000; index++) {
      console.log(this.cars[0].run());
      console.log(this.cars[1].run());
      if (index === 9) this.finalizo = true;
    }
    if ((this.finalizo = false)) return this.rSG();
  }
}

const car1 = new Car("Rojinator 5000", "blue");
const car2 = new Car("Tinkinator 12000", "purple");
const race = new Race([car1, car2]);
race.rSG();
