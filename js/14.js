// Otros Array Métodos utiles con Arrow Functions
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

// .filter
const nuevoArray = tecnologias.filter( function(tech) {
    return tech !== 'HTML'
})

// A arrow function 
// .filter
const nuevoArray = tecnologias.filter( tech =>  tech !== 'HTML' )

// Determina si un array incluye un elemento
tecnologias.includes('HTML')

//Si al Menos un elemento del array cumple devuelve True
console.log( numeros.some( numero => numero > 15 ) )

// Find - Devuelve el Primero que cumpla la condición
const resultado = numeros.find(numero => numero > 15)
console.log(resultado)

// Every - Si todos los elementos del array cumplen la condición
const resultado = numeros.every( numero  => numero > 3 )
console.log(resultado)

// Reduce, Ejecuta una función que va a ir acumulando un total
const resultado = numeros.reduce((total, numero) => numero + total, 0)

const nuevoArray = tecnologias.filter( tech => tech !== 'React')
const nuevoArray2 = tecnologias.filter( tech => tech === 'React')
console.log(nuevoArray)
console.log(nuevoArray2)