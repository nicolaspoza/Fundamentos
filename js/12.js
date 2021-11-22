// Funciones - Function Expression

// Otra forma  de crear funciones es con function expression, es muy similar a tener una variable y una función asociada a ella


const sumar = function() {
    console.log(2 + 2)
}
sumar();

// a diferencia de la function declaration, si las llamas antes de crearlas si causan
// un problema, esto debido al hoisting, donde JS primero registra funciones y después las ejecuta, pero eso no pasa con las variables


// Retornan valores
const sumar = function() {
    return 2 + 2;
}

const resultado = sumar();

// Funciones que toman parametros
const sumar = function(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = sumar(2, 3);

// Parametros por default
const sumar = function(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}

const resultado2 = sumar(2, 30)
const resultado3 = sumar(12)
const resultado4 = sumar()

console.log(resultado2)
console.log(resultado3)
console.log(resultado4)