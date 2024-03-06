const form = document.querySelector("#formulario")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  const inputPeso = e.target.querySelector("#peso")
  const inputAltura = e.target.querySelector("#altura")

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  console.log(peso, altura)

  const imc = calculoImc(peso, altura)

  const msg = `Seu IMC é ${imc}`

  pushText(msg)

})

function pushText(msg) {
  const mensagem = document.querySelector("#resultado")

  const p = document.createElement("p")

  p.innerHTML = msg
  mensagem.appendChild(p)
}
  
  function calculoImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
  }