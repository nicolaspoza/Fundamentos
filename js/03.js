// Objetos

// Los objetos pueden contener una gran información en una sola variable, es de los temas que más se utilizan en React, veamos como crear un objeto

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

// Acceder a las propiedades de un objeto
console.log(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring de Objetos
const { nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal enhacement...
const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
}
