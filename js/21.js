// Eventos del DOM (Inputs)

const inputNombre = document.querySelector('.nombre');
const inputPassword = document.querySelector('.password');

inputNombre.addEventListener('input', function(e) { //keydown, keyup o input
    console.log(e.target.value)
})

inputPassword.addEventListener('input', function(e) { //keydown, keyup o input
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000);
})
