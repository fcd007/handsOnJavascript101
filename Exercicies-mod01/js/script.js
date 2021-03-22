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
    //nunca adicione os valores em passar os acessos aos campos, resulta em lixo no obj
    const tempObj = {
      name: name.value, 
      lastname: lastname.value, 
      weight: weight.value, 
      height: height.value
    }
//mostrando os valores do objeto
    console.log(tempObj)
    persons.push(tempObj)
    resultado.innerHTML += `<p>
      ${name.value} 
      ${lastname.value} 
      ${weight.value} 
      ${height.value} 
    </p>`;
  }

  form.addEventListener('submit',handleForm)
}

person()