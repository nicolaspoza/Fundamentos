// Eventos del DOM (Clicks)

// Una de las caracteristicas de JS es hacer las apps dinamicas y esperar a que un evento ocurra, como un click
// o también cuando vas escribiendo en un input

const heading = document.querySelector('.heading');
heading.addEventListener('click', clickHeading)

function clickHeading() {
    console.log('Diste Click')
}

// Con un callback
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar click'
})

// Clicks en múltiples elementos
const enlaces = document.querySelectorAll('.navegacion a');

// enlaces.addEventListener('click', () => {
//     console.log('diste click')
// })

// solucion
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        console.log('diste click')
    })
})

// Capturar el evento
enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        console.log(e.target.textContent)
        console.log(e.target.tagName)
        console.log(e.target.href)
    })
})


console.log(heading);