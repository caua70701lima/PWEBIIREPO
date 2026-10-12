var valorReais = parseFloat(prompt("Informe o valor em R$ (reais):"));
var cotacao = parseFloat(prompt("Informe a cotação atual do dólar americano (R$ por US$ 1):"));

if (isNaN(valorReais) || isNaN(cotacao) || cotacao <= 0) {

  alert("Valores inválidos. Informe números válidos e cotação maior que zero.");

} else {

  var valorDolares = valorReais / cotacao;
  
  alert("R$ " + valorReais.toFixed(2) + " com cotação de R$ " + cotacao.toFixed(2) + " equivale a US$ " + valorDolares.toFixed(2));
  console.log("Valor em US$: " + valorDolares.toFixed(2));

}
