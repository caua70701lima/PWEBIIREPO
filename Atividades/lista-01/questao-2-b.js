var raio = parseFloat(prompt("Informe o valor do raio do círculo:"));

if (isNaN(raio) || raio < 0) {
  alert("Raio inválido. Informe um número maior ou igual a zero.");

} else {

  var perimetro = 2 * Math.PI * raio;
  alert("O perímetro do círculo de raio " + raio + " é " + perimetro.toFixed(2));
  console.log("Perímetro: " + perimetro);

}
