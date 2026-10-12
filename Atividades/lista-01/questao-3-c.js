function fatorial(n) {
  
  n = Number(n);
  if (!Number.isInteger(n) || n < 0) {
    return "Erro: informe um inteiro não-negativo.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);

}

var entrada = parseInt(prompt("Informe um número para calcular o fatorial:"), 10);
var resultado = fatorial(entrada);

if (typeof resultado === "number") {
  alert("O fatorial de " + entrada + " é " + resultado);

} else {
  alert(resultado);
}

console.log("fatorial(" + entrada + ") = " + resultado);
