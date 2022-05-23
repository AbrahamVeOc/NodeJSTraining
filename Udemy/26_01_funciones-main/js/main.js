// Sintaxis de declaración de funciones

function suma(a, b) {
  console.log(a + b);
}

function division(a, b) {
  let c = a / b;
  return c;
  console.log("Hola tras return"); // No se ejecutará
}

// Sintaxis de invocación

suma(4, 6);

let resultado = division(10, 2);
console.log(resultado);
