// Funciones - Existen diferentes formas de crear funciones en JS, 

/*
    El hoisting es una forma de expresarse a como se ejecuta JavaScript(específicamente
    las fases de creación y ejecución). 

    Por lo tanto JS, registra primeros los Funciones, y en una segunda vuelta las ejecuta, con las variables no pasa esoo


*/

function sumar() {
    console.log(2 + 2)
}
sumar();

// Moverla arriba y sigue funcionando...

function sumar() {
    return 2 + 2
}


const resultado = sumar();

// Las funciones también toman parametros

function sumar(numero1, numero2) {
    return numero1 + numero2
}

const resultado = sumar(2, 30)

// Las funciones pueden tener parametros por default
function sumar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}

const resultado2 = sumar(2, 30)
const resultado3 = sumar(12)
const resultado4 = sumar()

console.log(resultado2)
console.log(resultado3)
console.log(resultado4)