// Fetch API 

const url = "http://localhost:3000/productos";

fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => {
        console.log(resultado[0])
        resultado.forEach(producto =>  console.log(producto))
    })