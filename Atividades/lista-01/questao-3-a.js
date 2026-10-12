function calcular(num1, num2, operador) {

  var a = Number(num1);
  var b = Number(num2);

  if (isNaN(a) || isNaN(b)) {
    return "Erro: os dois primeiros argumentos devem ser números.";
  }

  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Erro: divisão por zero.";
      }
      return a / b;
    default:
      return "Erro: operador inválido. Use '+', '-', '*' ou '/'.";
  }

}

var v1 = parseFloat(prompt("Informe o primeiro número:"));
var op = prompt("Informe a operação (+, -, * ou /):");
var v2 = parseFloat(prompt("Informe o segundo número:"));
var resultado = calcular(v1, v2, op);

alert("Resultado: " + resultado);
console.log("calcular(" + v1 + ", " + v2 + ", '" + op + "') = " + resultado);
