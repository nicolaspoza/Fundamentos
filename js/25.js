// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function(e) {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input',functionPassword)

function functionPassword(e) {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password' //timeout permite modificar tiempo en el que se muestra o se oculta
    }, 50);
}