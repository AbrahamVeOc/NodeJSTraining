// Operadores lógicos

// Operador lógico AND &&

let valor1 = 12;
let valor2 = 13;
let valor3 = 12;

let resultado = valor2 < valor1 && valor1 === valor3;
console.log(resultado);

// Operador lógico OR ||

resultado = valor2 < valor1 || valor1 === valor3;
console.log(resultado);

// Operador lógico NOT ! (negación unaria)

let mayorEdad = false;

mayorEdad = !mayorEdad;
console.log(mayorEdad);

// Operador condicional (Ternario)

// expresiónDeCondición ? valor1 : valor2;

let estado;
let edadParticipante = 19;

estado = edadParticipante >= 18 ? 'Adulto' : 'Menor';

console.log('El participante es ' + estado);
