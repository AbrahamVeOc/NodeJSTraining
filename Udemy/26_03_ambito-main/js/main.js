// Ámbito de las variables y constantes (dependiendo de su forma de declaración)

// Variables declaradas con var
// el ámbito el de la función más próxima

var apellidos = "López Pérez"; // ámbito global
var apellidos = "Fernández"; // Podemos (aunque sea mala práctica) redeclarar

function setMayorEdad(edad) {
  if (edad >= 18) {
    var adulto = true;
  } else {
    var adulto = false;
  }
  console.log(adulto);
}

// console.log(adulto); Error por estar fuera del ámbito

setMayorEdad(33);

// Variables declaradas con let ó constantes con const
// el ámbito es el bloque más próximo de la variable

let ciudad = "Barcelona"; // ámbito global
// let ciudad = 'Bogotá'; No podemos redeclarar (error)

function setPuntuacion(puntuacion) {
  if (puntuacion >= 5) {
    let apto = true;
    console.log(apto);
  } else {
    let apto = false;
    console.log(apto);
  }
  // console.log(apto); devolverá error porque apto tiene el ámbito de su bloque
}

setPuntuacion(7);

// Variables declaradas sin palabra reservada (mala práctica)
// el ámbito será siempre global con independencia de donde se declaren

function areaTriangulo(a, b) {
  area = 0.5 * a * b;
}

areaTriangulo(10, 20);

console.log(area); // No devolverá error porque la variable es global
