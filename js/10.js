// Map y For Each
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];


for(let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i])
}

// foreach se ejecuta una vez por cada elemento del array
tecnologias.forEach( tecnologia => {
    console.log(tecnologia)
})

tecnologias.map( tecnologia => {
    console.log(tecnologia)
})

// La diferencia es que map te retorna un nuevo array
const arrayForEcah =  tecnologias.forEach( tecnologia => tecnologia)
const arrayMap =  tecnologias.map( tecnologia => tecnologia)
