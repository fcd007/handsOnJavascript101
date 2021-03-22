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
let numberRef = [...numbers]
console.log(numberRef);
