function person() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  const persons = []

  function handleForm(event) {
    event.preventDefault() //evita o envio do submit do button

    const name = form.querySelector('.name')
    const lastname = form.querySelector('.lastname')
    const weight = form.querySelector('.weight')
    const height = form.querySelector('.height')
    //mostrando os valores
    // console.log(name.value, lastname.value, weight.value, height.value)
    
    const tempObj = { name, lastname, weight, height }
    persons.push({...tempObj})
    resultado.innerHTML += `<p>
      ${persons[0].name.value} 
      ${persons[0].lastname.value} 
      ${persons[0].weight.value} 
      ${persons[0].height.value} 
    </p>`;
  }

  form.addEventListener('submit',handleForm)
}

person()