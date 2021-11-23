// Eventos del DOM (Enviar Formulario)
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if(nombre === '' || password === '') {
        console.log('Ambos campos son obligatorios')
    } else {
        console.log('Todo bien')
    }
})