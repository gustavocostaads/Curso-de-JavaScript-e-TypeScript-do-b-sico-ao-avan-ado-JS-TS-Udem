const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)
  console.log(peso, altura);

  if (!peso) {
    setResultado("Peso Inválido", false)
    return
  }

  if (!altura) {
    setResultado("Altura Inválida", false)
    return
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)

  const msg


});
