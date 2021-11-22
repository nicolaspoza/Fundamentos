// SELECTORES DEL DOM

// Seleccionar hasta un elemento
const heading = document.querySelector('h2');
console.log(heading)
console.log(heading.textContent)
console.log(heading.tagName)
console.log(heading.classList)
console.log(heading.id)


// Seleccionar múltiples elementos
const enlaces = document.querySelectorAll('nav a');
console.log(enlaces)
console.log(enlaces.textContent) // ERROR , se tendría que iterar


const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Nuevo Value'