// Modificar un objeto
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}


// Evitar modificiar un objeto - Freeze lo congela, no se pueden agregar ni modiificar propiedades existentes
Object.freeze(producto)
Object.seal(producto)  // Seal si permite reescribir las propiedades existentes, pero no permite añadir nuevas o eliminarlas

// Reescribir Propiedades
producto.precio = 500

// Añadir nuevas propiedades
producto.imagen = "Tablet.jpg"

// Eliminar Propiedades
delete producto.precio

console.log(producto)