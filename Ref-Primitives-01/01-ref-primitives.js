/*
  Primitivos(imutáveis) - string -number - boolean, undefined, null, (bigint, symbol)
  Valores copiados diretamente
  Tipos não primitivos - passagem por referência - array, object, function, os valores apontam
  por meio de referência do objeto criado
*/ 
//variaveis primitivas
let a = 19
let b = a
console.log(a, b);

//não primitivas
let numbers = [1,2,3,4]
// let numbersPast = numbers
// console.log(numbers, numbersPast)
// numbersPast.pop()
// console.log(numbers, numbersPast)
//usando o operador spread ...
///passagem de valores e não de referência para o array
let numberNotRef = [...numbers]
let numberOfRef = numberNotRef
console.log(numberNotRef);
numbers.pop()
numberOfRef.shift()
//observe que não temos a mesma referência do objeto apontado ao 
//realizar as alterações no array numbers e numberRef
console.log(numberNotRef,numberOfRef, numbers);

const personObject = {
  name: 'Lucas',
  lastName: 'Neto'
}
console.log(personObject)

const personObject2 = personObject
//passando os valores e criando uma nova referência personObject3
const personObject3 = {...personObject}
personObject.name = 'Paulo'
console.log(personObject2)
console.log(personObject3)
personObject3.name = 'Lilian'
console.log(personObject3)

