// Arrow Functions

/*
  Los arrow functions fueron una de las grandes mejoras en ES6,
  simplifican bastante la creación de código y funcionan aún mejor con los array methods
 */

const sumar = function() {
 console.log(2 + 2)
}

const sumarArrow = () => {
    console.log(2 + 2)
}

// Ahora un arrow function con un return
const sumarArrow = () => {
    return 2 + 2
}

console.log( sumarArrow() )

// Una caracteristica de los arrow function es que si solo cuentan con una linea, dan por implicito el return
const sumarArrow = () => 2 + 2;
const resultado = sumarArrow();
console.log(resultado);

// Pasar parametros es sencillo también en el arrow
const sumarArrow = numero1 => numero1 + 2;

const sumarArrow = (numero1, numero2 ) => numero1 + numero2;

const resultado2 = sumarArrow(20, 30);
const resultado3 = sumarArrow(5, 3);
const resultado4 = sumarArrow(20, 1);

// También es posible tener parametros por default
const sumarArrow = (numero1 = 0, numero2 = 0 ) => numero1 + numero2;

const resultado4 = sumarArrow(20);
