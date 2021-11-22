// Veamos otros tipos de datos en JS

// 1.- Undefined - Cuando creas una variable, este tipo de dato se asigna automaticamente, es hasta que le das un valor cuando cambia, pero si inicias tu variable sin valores, ese será el tipo de dato

let cliente

console.log(cliente)

typeof cliente


// 2.- Boolean - Solo acepta valores true o false, un usuario esta autenticado o no, ya realizó un pago o no
const descuento = true;


// 3.- Number - EN otros lenguajes existen diferentes tipos de Numeros, flotantes para numeros con fracciones, enteros, etc, en JS solo existen 2, Number y BigInt 

const numero1 = 20.20;
const numero2 = 30;
const numero3 = -30;

// 4.- Los Strings o Cadenas de Texto es un tipo de dato utilizado para representar  texto; el nombre de un producto, el nombre de un cliente, etc.

let alumno = "Juan"
let producto = "Monitor 20 pulgadas"

// 5.- BigInt - Es un constructor para representar numeros muy grandes en JS

const numeroGrande = BigInt(219819831893981389)

// Una de sus caracteristicas es que no se pueden mezclar con los numeros normales

console.log(numeroGrande + 20 )

// 6.- Un Symbol es un tipo de dato que es único y no se puede modificar
let primerSimbol = Symbol(30)
let segundoSimbol = Symbol(30)

console.log( primerSimbol ===  segundoSimbol)

primerSimbol.valueOf()
primerSimbol.toString()

// 7.-Null
// El valor null representa un valor nulo o "vacío".
const descuento = null
typeof descuento





// 9.- Funciones