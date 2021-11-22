// Añadir elementos a un array 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Push (Muta el Array)
tecnologias.push('GraphQL')

// Spread No muta el array
const tecnologias2 = [...tecnologias, 'GraphQL']


const tecnologias2022 = ['GraphQL', 'Prisma', 'TypeScript']

// Unir 2 arrays
const tecnologias3 = [...tecnologias, ...tecnologias2022]