// Destructuring con 2 objetos
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

const { nombre } = producto;
const { nombre: nombreCliente } = cliente

console.log(nombre)
console.log(nombreCliente)