function formData() {

const form = document.querySelector(".form")
const resultado = document.querySelector(".resultado")

  function capValores(event) {

    event.preventDefault()

    const nome = form.querySelector(".nome").value
    const sobrenome = form.querySelector(".sobrenome").value

    
        resultado.innerHTML += `<p>${nome}, ${sobrenome}</p>`

   
  }

  form.addEventListener("submit", capValores)

}
formData()