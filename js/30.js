// Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

// const consultarAPI = () => {
//     fetch(url)
//         .then( respuesta => respuesta.json())
//         .then( resultado => {
//             resultado.forEach( comentario => {
//                 console.log(comentario)
//             })
//         })
// }

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    console.log('despues de respuesta')
    const resultado = await respuesta.json() // ejecuta lineas hasta que estan listas
    console.log('despues de resultado')
    // resultado.forEach( comentario => {
    //     console.log(comentario)
    //     })
}
consultarAPI();