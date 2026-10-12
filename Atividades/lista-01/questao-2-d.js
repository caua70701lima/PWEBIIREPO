function ehPrimo(num) {

  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  var limite = Math.sqrt(num);
  for (var i = 3; i <= limite; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

var n = parseInt(prompt("Quantos números você vai informar? (n):"), 10);

if (isNaN(n) || n <= 0) {

  alert("Quantidade inválida. Informe um inteiro positivo.");

} else {

  var soma = 0;

  for (var k = 1; k <= n; k++) {
    var valor = parseInt(prompt("Informe o " + k + "º número inteiro positivo:"), 10);
    if (isNaN(valor) || valor < 0) {
      alert("Valor ignorado (não é inteiro positivo).");
      continue;
    }
    if (ehPrimo(valor)) {
      soma += valor;
    }
  }

  alert("A soma dos números primos é: " + soma);
  console.log("Soma dos primos: " + soma);

}
