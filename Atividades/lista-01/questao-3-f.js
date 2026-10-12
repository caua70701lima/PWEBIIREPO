var contaBancaria = {
  numero: "12345-6",
  saldo: 0,
  depositar: function (valor) {
    valor = Number(valor);
    if (isNaN(valor) || valor <= 0) {
      alert("Valor de depósito inválido. Informe um número maior que zero.");
      return;
    }
    this.saldo += valor;
    alert("Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso.");
  },
  sacar: function (valor) {
    valor = Number(valor);
    if (isNaN(valor) || valor <= 0) {
      alert("Valor de saque inválido. Informe um número maior que zero.");
      return;
    }
    if (valor > this.saldo) {
      alert("Saldo insuficiente. Seu saldo atual é R$ " + this.saldo.toFixed(2) + ".");
      return;
    }
    this.saldo -= valor;
    alert("Saque de R$ " + valor.toFixed(2) + " realizado com sucesso.");
  },
  informarSaldo: function () {
    var mensagem = "Conta " + this.numero + " — Saldo atual: R$ " + this.saldo.toFixed(2);
    alert(mensagem);
    console.log(mensagem);
    return this.saldo;
  }
};
contaBancaria.informarSaldo();
var deposito = parseFloat(prompt("Informe um valor para depositar:"));
if (!isNaN(deposito)) {
  contaBancaria.depositar(deposito);
}
var saque = parseFloat(prompt("Informe um valor para sacar:"));
if (!isNaN(saque)) {
  contaBancaria.sacar(saque);
}
contaBancaria.informarSaldo();
