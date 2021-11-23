// Async Await 

const url = "http://localhost:3000/productos";

fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => {
        console.log(resultado[0])
        resultado.forEach(producto =>  console.log(producto))
    })

async function consultarAPI() {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
}

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
}
consultarAPI();