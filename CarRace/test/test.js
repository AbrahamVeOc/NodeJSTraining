/*
tener una clase Operator
    clase Operator debe de tener las propiedades de:
        name para guardar el nombre: Thermite
        side para guardar el bando (atk/def) : attk
        gun para guardar el arma
            ej: { name: 'Degle', damage: 40 }
        healt para guardar la salud ej: 100
    clase Operator debe de tener los metodos:
        implicitos
        attack(operator: Operator)
            metodo va leer this.gun.damage;
            0 .3


            crear dos operadores ej: Thermite - Melusi
*/

class Operator {
  constructor(name, side, gun, speed, armour = 100) {
    this.name = name;
    this.side = side;
    this.gun = gun;
    this.speed = speed;
    this.armour = armour;
  }
  gun() {
    for (let i = 0; index < this.Operator.armour; index - 0.3) {
      this.Operator[i].gun;
    }
  }
}

const operator = new Operator("Thermite", "ATK", "Deagle", 2);

console.log(Operator.Thermite);
