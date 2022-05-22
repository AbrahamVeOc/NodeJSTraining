let nombre = "Lucía";
let edad = 15;
let mayorEdad;

if (edad >= 18) {
  mayorEdad = true;
  console.log(nombre + " es mayor de edad");
}

let a = 10;
let b = 20;

if (a > b) {
  console.log("a es mayor que b");
} else {
  console.log("a es menor o igual que b");
}

a = b;

if (a > b) {
  console.log("a es mayor que b");
} else if (a === b) {
  console.log("a es igual a b");
} else {
  console.log("a es menor a b");
}
