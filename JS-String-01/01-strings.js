// let umaString = "Um texto de exeplo com 'aspas simples'"
// console.log(umaString)
// let umaOutraString = 'Uma string com "aspas duplas"'
// console.log(umaOutraString)
// let umaStringComEscape = "Uma string com \"aspas duplas\" usando escape"
// console.log(umaStringComEscape)
// //adicionando caracteres especiais
// let texto = "Quando precisamos de barra invertida \\ usamos duas barras no código"
// console.log(texto)
// características das strings é ser uma cadeia de caracters - como vetor iteravél
// let umaStringQualquer = "John Wick - de volta ao Jogo"
// console.log(umaStringQualquer[0])
// //pegar um elemento qualquer do vetor de caracteres (string)
// console.log(umaStringQualquer.charAt(8));
// //concatenar strings 
// console.log(umaStringQualquer.concat(' Teste de concatenar'));
// console.log(`${umaStringQualquer} em um lindo dia`);
//buscar sequências de strings
// console.log(palavra.indexOf('pouco'))
// //como delimitar busca por indices
// console.log(palavra.indexOf('de', 6))
// //lastIndiceOf - ele começa do final a leitura da string
// console.log(palavra.lastIndexOf('de', palavra.length-8))
//replace - match
// console.log(palavra.match(/[a-z]/))
// //return index ou key caractere - aceita expressões regulares
// console.log(palavra.search(/x/))
//repitir ou substituir
// console.log(palavra.replace(/o/g, '##'))
let palavra = "cASA"
let palavraCap = palavra[0].toUpperCase()
palavraCap += palavra.slice(1, palavra.length).toLowerCase()

console.log(palavraCap);
// console.log(palavra.length)
// console.log(palavra.slice(5, 11))
//caso precise usar lendo a string menos o valor final
// console.log(palavra.slice(-9, -2))
// console.log(palavra.substring(palavra.length -9, palavra.length))

//começando a quebrar ou dividir as strings
// console.log(palavra.split(' ', 2));
