// Unir 2 objetos
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}


const nuevoObjeto = {...producto, ...cliente}
const nuevoObjeto3 = Object.assign(producto, cliente);

const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto3)
