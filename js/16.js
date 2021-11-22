// Else IF y && 

const saldo = 500
const pagar = 600
const tarjeta = true

if( saldo > pagar) {
    console.log('Puedes pagar con saludo')
} else if ( tarjeta ) {
    console.log('puedes pagar con tarjeta')
} else {
    console.log('no puedes pagar')
}

// Veamos el operador && y || 
if(saldo > pagar && tarjeta) {
    console.log('puedes pagar')
} else {
    console.log('No puedes pagar')
}
if(saldo > pagar || tarjeta) {
    console.log('puedes pagar')
} else {
    console.log('No puedes pagar')
}



