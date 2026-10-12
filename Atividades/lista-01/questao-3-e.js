function calcularTotal(valorUnitario, quantidade, desconto) {
  if (desconto === undefined) {
    desconto = 0;
  }
  valorUnitario = Number(valorUnitario);
  quantidade = Number(quantidade);
  desconto = Number(desconto);
  if (isNaN(valorUnitario) || isNaN(quantidade) || isNaN(desconto) || valorUnitario < 0 || quantidade < 0 || desconto < 0 || desconto > 1) {
    return "Erro: informe valor >= 0, quantidade >= 0 e desconto entre 0 e 1.";
  }
  var subtotal = valorUnitario * quantidade;
  return subtotal - subtotal * desconto;
}
console.log("Sem desconto: " + calcularTotal(100, 2));
console.log("Com 10%: " + calcularTotal(100, 2, 0.1));
var valor = parseFloat(prompt("Informe o valor unitário do produto:"));
var qtd = parseInt(prompt("Informe a quantidade:"), 10);
var descEntrada = prompt("Informe o desconto (0 a 1, ex.: 0.1 = 10%). Deixe vazio para 0:");
var desconto = descEntrada === null || descEntrada.trim() === "" ? 0 : parseFloat(descEntrada);
var total = calcularTotal(valor, qtd, desconto);
alert("Valor total da compra: R$ " + (typeof total === "number" ? total.toFixed(2) : total));
console.log("Total: " + total);
