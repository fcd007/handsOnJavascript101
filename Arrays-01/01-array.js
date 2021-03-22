
let names = ['Carlos', 'Lucas', 'Maria', 'Paulo', 'Juliana']
//exibir elementos do array via loop for
// for (const name of names) {
//   console.log(name);
// }
//exibindo lista de names
// console.log(names);
//exibindo os elementos pelo indice do array
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
//não temos elemento no indice 5 que equivale ao 6º elemento
// console.log(names[5]); // undefined
// add elementos no array
// names[5] = 'Lisa'
// console.log(names);
//saber o tamanho do array
// console.log(`Array possui ${names.length} elementos`);
//adicionando com métodos do array push ao final do array
// names.push('Lilian')
// console.log(names)
// //adicionando elementos no inicio do array
// names.unshift('Fabiana')
// console.log(names)
// names.unshift('Luana')
// console.log(names)
//remove elementos do fim do array
const element = names.pop()
console.log(names);
console.log(element)
//apagando elementos pelo indice
// delete names[1] //elimina o valor, não o elemento do array
// names.pop()
// console.log(names);

//fatiando os elementos por faixa de indices
// console.log(names.slice(1,3));
// console.log(names.slice(1,-1));
//verificar o tipo de dado usado 
console.log(typeof names);
console.log(names instanceof Array);