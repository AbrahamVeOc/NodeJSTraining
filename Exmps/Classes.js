// class Automovil {
//   constructor(gasolina, color, modelo, position = { x: 0 }, estado = "off") {
//     this.gasolina = gasolina;
//     this.color = color;
//     this.modelo = modelo;
//     this.position = position;
//     this.estado = estado;
//   }

//   arrancar = function () {
//     if (this.estado === "on") return "calmate perro";
//     if (this.gasolina <= 0) {
//       this.gasolina = 0;
//       return "out of gas";
//     }
//     console.log("arranco", this.modelo);
//     this.estado = "on";
//     this.gasolina = this.gasolina - 3;
//     return `arranco exitosamente y quedan ${this.gasolina} litros de gasolina`;
//   };

//   apagar = function () {
//     this.estado = "off";
//   };

//   avanzar = function (mt) {
//     if (this.estado !== "on") return "off state";
//     if (mt * 0.2 > this.gasolina) return "Dont enough gas";
//     this.position = { x: this.position.x + mt };
//     this.gasolina = this.gasolina - 0.2 * mt;
//     return this.position;
//   };
// }

// // const bmw = new Automovil(10, "red", "E230", { x: 40 }, "on");
// // console.log(bmw.arrancar());

// const mb = new Automovil(20, "grey", "EC20");
// console.log(mb.arrancar());
// mb.apagar();
// mb.arrancar();
// mb.apagar();
// mb.arrancar();
// console.log(mb.avanzar(1100));
// console.log(mb.avanzar(11));

// // const viejo = new Automovil(0, "black", "viejoCR7");
// // console.log(viejo.arrancar());

// class Animal {
//   constructor(classe) {
//     this.classe;
//   }
//   caminar = function () {
//     console.log("camine");
//   };
// }

// class Dog extends Animal {
//   caminar() {
//     super.caminar();
//     console.log("lorem");
//   }

class Food {
  constructor(cal, ctime, price, percentage = 100) {
    this.properties = { cal, ctime, price, perc: percentage };
  }
  eat = function (perc) {
    // Validate if perc lower than 100 and greater than 0 and perc isnt greater than properties.percentage
    // if (perc ) {

    // }
    this.properties.perc -= perc;
  };
}

const pizzaSlice = new Food(500, "lunch", 2);
console.log(pizzaSlice.propiedades);
