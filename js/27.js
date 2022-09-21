

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault() // Permite validar el formulario 

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    // console.log(nombre)
    // console.log(password)

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')
    
    // console.log(alerta)


    if(nombre === '' || password === '') {
        // console.log('Todos los campos son obligatorios')
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien...'
        alerta.classList.add('exito')
        // console.log('Todo bien, enviando...')
    }
    // console.log('Enviaste formulario')
    // console.log(alerta)
    formulario.appendChild(alerta)
})