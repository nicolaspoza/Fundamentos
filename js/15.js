// Condicionales

/*

Tu código se va a ejecutar de arriba hacia abajo, pero con los condiiconales podemos
ejecutar código basado en ciertas condiciones 
    Si pides un uber, primero revisamos que haya un chofer disponible, si utilizas
    un sistema para sacar una cita con un doctor, revisamos que haya disponibilidad

    si realizas un retiro del banco, revisamos que tu tarjeta sea válida y tengas la cantidad solicitada


*/

const disponible = 4000
const retirar = 200

if(retirar > disponible) {
    console.log('No puedes retirar')
} else {
    console.log('Si puedes retirar')
}

// > Mayor que
// < menor Que

// Veamos el operador de Comparar igualdad

const numero1 = 20;
const numero2 = "20";

if(numero1 == numero2) {
    console.log('Si, iguales')
} else {
    console.log('No son iguales')
}

// Operador estricto de igualdad, revisa valor y tipo de dato
if(numero1 == numero2) {
    console.log('Si, iguales')
} else {
    console.log('No son iguales')
}

// Comprobando un true

const autenticado = true
if(autenticado === true) {
    console.log('Si esta autenticado')
}