const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  console.log(typeof inputPeso);

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  console.log(typeof (peso, altura));

  const imc1 = peso / altura ** 2;
  const imc = imc1.toFixed(2)
  const nivelImc = nivelFunc(imc);

  if (!peso) {
    return setResultado("Peso Inválido", false);
  }
  if (!altura) {
    return setResultado("Altura Inválida", false);
  }

  setResultado(`Seu imc é ${imc} (${nivelImc})`, true);
});

function nivelFunc(imc) {
  const nivel = ["Abaixo do peso","Peso normal","Sobrepeso","Obesidade grau 1","Obesidade grau 2","Obesidade grau 3"];

  if (imc <= 18.5) return nivel[0];  
  if (imc <= 24.9) return nivel[1];
  if (imc <= 29.9) return nivel[2];
  if (imc <= 34.9) return nivel[3];
  if (imc <= 39.9) return nivel[4];
  if (imc >= 40)   return nivel[5];
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""

  const p = document.createElement("p")

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p)
}
