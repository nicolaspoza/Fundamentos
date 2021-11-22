// Quitar elementos a un array 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Quitar del Inicio
tecnologias.shift();

// Quitar del final
tecnologias.pop()


// Splice  te permite quitar desde una posición hasta cierta cantidad (si el segundo parametro no se pasa, elimianrá todos)
tecnologias.splice(1, 1);

// .filter
const nuevoArray = tecnologias.filter( function(tech) {
    return tech !== 'HTML'
})
console.log(nuevoArray)