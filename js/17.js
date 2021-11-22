// Ternarios
// Un operador ternario básicamente es un IF en una sola linea

const autenticado = false;
autenticado ? console.log('Usuario Autenticado') : console.log('no autenticado')


// Doble Ternario

const saldo = 300
const pagar = 400
const tarjeta = true
saldo > pagar ? console.log('Puedes pagar con saldo') : tarjeta ? console.log('puedes pagar con tarjeta') : console.log('no puedes pagar')


// Operador && - Ideal cuando solo hay una condición...

const admin = true
admin && console.log('Eres Admin')

