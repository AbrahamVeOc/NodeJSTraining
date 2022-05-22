// Estructura condicional if

let nombre = "Lucía";
let edad = 15;
let mayorEdad;

if (edad >= 18) {
  mayorEdad = true;
  console.log(nombre + " es mayor de edad");
}

// if (edad < 18)
//     console.log('Menor edad'); No se suele emplear el alivio de llaves

// Estructura if else

let a = 10;
let b = 20;

if (a > b) {
  console.log("a es mayor que b");
} else {
  console.log("a es menor o igual que b");
}

// Estructura if else if

a = b;

if (a > b) {
  console.log("a es mayor que b");
} else if (a === b) {
  console.log("a es igual a b");
} else {
  console.log("a es menor a b");
}
