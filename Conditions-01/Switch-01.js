const data = new Date('2021-01-01');
const diaSemana = data.getDay();
// console.log(diaSemana);

// let diaSemanaTexto;
// if(diaSemana === 0){
//   diaSemanaTexto = 'Domingo';
// } else if(diaSemana === 1) {
//   diaSemanaTexto = 'Segunda';
// } else if(diaSemana === 2) {
//   diaSemanaTexto = 'Terça';
// }else if(diaSemana === 3) {
//   diaSemanaTexto = 'Quarta';
// }else if(diaSemana === 4) {
//   diaSemanaTexto = 'Quinta';
// }else if(diaSemana === 5) {
//   diaSemanaTexto = 'Sexta';
// }else if(diaSemana === 6) {
//   diaSemanaTexto = 'Sábado';
// }

// console.log('dia da semana', diaSemanaTexto);

switch (diaSemana) {
  case 0:
    console.log('dia da semana Domingo');
    break;
  case 1:
    console.log('dia da semana Segunda');
    break;
  case 2:
    console.log('dia da semana Terça');
    break;
  case 3:
  console.log('dia da semana Quata');
    break;
  case 4:
    console.log('dia da semana Quinta');
    break;
  case 5:
    console.log('dia da semana Sexta');
    break;
  case 6:
    console.log('dia da semana Sábado');
    break;
  default:
    console.log("Dia da semana inválido!");
    break;
}