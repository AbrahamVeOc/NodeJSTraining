const dice = require("./utils.js");

class Car {
  constructor(model, color, hp = 100, health = 100, x = 0) {
    this.hp = hp;
    this.health = health;
    this.model = model;
    this.color = color;
    this.x = x;
  }
  run() {
    // "+=" equivalent to "this.x =  this.x + dice()""
    this.x += dice();
    return `${this.model} is in position: ${this.x}`;
  }
}
module.exports = { Car };
