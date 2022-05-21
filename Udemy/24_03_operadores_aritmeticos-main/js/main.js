// Operadores

// operando operador (unarios)
// operando1 operador operando2 (binarios)
// operador ternario (ver más adelante sintaxis)

// Operadores aritméticos

// + y -

let resultado = 6;
let factorCorreccion = 2;

let puntuacion = resultado - factorCorreccion;
console.log(puntuacion);

// El operador suma en el caso de tipos string los concatena

let nombre = "Laura";
let mensaje = "Hola ";

mensaje = mensaje + nombre;
console.log(mensaje);

resultado = 10;
factorCorreccion = "3";

puntuacion = resultado + factorCorreccion;
console.log(puntuacion);

// * y /

let a = 10;
let b = 2;

resultado = a / b;
console.log(resultado);

// Valor NaN (not a number);

a = "Hello";
resultado = a * b;
console.log(resultado);

// Resto %

let ejemploResto = 13 % 2;
console.log(ejemploResto);

// Incremento ++ (suma una unidad al valor de la variable)

let c = 1;
console.log(c++); // Postincremento
console.log(c);

let d = 10;
console.log(++d); // Preincremento

// Decremento -- (resta una unidad al valor de la variable)

let e = 4;
console.log(--e);

// Precedencia de operadores
// de derecha a izquierda y el mismo criterio que matemáticas

resultado = 12 + 3 * 8;
console.log(resultado);

// Podemos usar paréntesis para romper la precedencia de operadores

resultado = (12 + 3) * 8;
console.log(resultado);
