// Múltiples Awaits 
const url = "http://localhost:3000/productos";
const url2 = 'https://jsonplaceholder.typicode.com/comments'


async function consultarAPI() {
    const inicio = performance.now()


    const [ respuesta, respuesta2 ] = await  Promise.all( [ fetch(url), fetch(url2) ] )

//    const respuesta = await fetch(url);
    console.log(respuesta)


//    const respuesta2 = await fetch(url2);
    console.log(respuesta2)

    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()
    
    console.log(resultado)
    console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecución ${fin - inicio} ms`)

}
consultarAPI()

