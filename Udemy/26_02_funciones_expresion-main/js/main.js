// Expression functions (anónimas)

let cuadrado = function (a) {
  return a * a;
};

console.log(cuadrado(5));

// Funciones flecha (ECMAScript 6 2015)

let cubo = (a) => {
  return a * a * a;
};

let cubo2 = (a) => a * a * a;

console.log(cubo(5));

let mensaje = () => console.log("Hola amigos");

mensaje();
