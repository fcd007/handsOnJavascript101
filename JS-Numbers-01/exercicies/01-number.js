//verificando os tipos e conversões de tipos number
//padrão IEEE 745-2008 - usado pelo Javascript ECMASCRIPT
let value = 0.7
let value2 = 0.1
value +=value2
value +=value2
value +=value2
console.log(value);
//revolver problema de valores com imprecisão
// let valueOfPrecision = parseFloat(value.toFixed(2))
let valueOfPrecision = Number(value.toFixed(2))
console.log(valueOfPrecision);
console.log(Number.isInteger(valueOfPrecision));
// let temp = '5' * value
// console.log(Number.isNaN(temp));
// console.log(Number.isInteger(value));
// console.log(value.toFixed(3));
// console.log(value.toString(2));
// console.log(value.toString() + value2);
// console.log(typeof value);
// console.log(typeof value2);