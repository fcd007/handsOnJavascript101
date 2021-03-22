// const Person = {
//   name: 'Lucas',
//   lastName: 'Lima'
// }

// console.log(Person);
function createPerson(name, lastName, age) {
  return { // abreviados name, lastName, age - se os parâmetros forem iguais
    name: name,
    lastName: lastName,
    age: age,

    showData() {
      console.log(`Ola ${name}`);
    },

    incrementalAge() {
      this.age++
    } 
  }
}
// argumentos são passados para parâmetros da função
const person = createPerson('Claudeilton', 'Dantas', 31)
// const person2 = createPerson('Lucas', 'Moura', 19)
// const person3 = createPerson('Paulo', 'Silva', 25)
console.log(`Nome completo: ${person.name} ${person.lastName}, idade: ${person.age}`);
person.showData()
person.incrementalAge()
console.log(`Nome completo: ${person.name} ${person.lastName}, idade: ${person.age}`);
// console.log(`Nome completo: ${person2.name} ${person2.lastName}, idade: ${person2.age}`);
// console.log(`Nome completo: ${person3.name} ${person3.lastName}, idade: ${person3.age}`);