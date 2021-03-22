//criando uma função sem retorno
function Hello(name) {
  console.log(`Hello World ${name} !`)
}
Hello('Dantas')

//função com retorno do valor 
function Hello2(name) {
  return `Hello ${name}`
}
const valueFuntion = Hello2('Paulo Luan')
console.log(valueFuntion)

function soma(value, value2) {
  return value + value2
}
const resultado = soma(5, 7)
console.log(resultado)

//funções anônimas
const raiz = function (number) {
  return Math.sqrt(number)
}
console.log(raiz(9));
console.log(raiz(49));
//arrow funtions - retono de valores funções 
// const raizQuadrada = (number) => {
//   return Math.sqrt(number)
// }

const raizQuadrada = (number) => Math.sqrt(number)

console.log(raizQuadrada(25))