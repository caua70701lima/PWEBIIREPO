var n1 = parseFloat(prompt("Informe a nota da etapa N1 (0 a 10):"));
var n2 = parseFloat(prompt("Informe a nota da etapa N2 (0 a 10):"));

if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {

  alert("Notas inválidas. Informe valores entre 0 e 10.");

} else {

  var notaFinal = (n1 * 2 + n2 * 3) / 5;
  var situacao = notaFinal >= 7 ? "APROVADO" : "REPROVADO";

  alert("Sua nota final é " + notaFinal.toFixed(2) + ". Você está " + situacao + ".");
  console.log("Nota final: " + notaFinal.toFixed(2) + " — " + situacao);

}
