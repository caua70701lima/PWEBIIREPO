function produtorio() {

  var numeros = Array.prototype.slice.call(arguments);

  if (numeros.length === 0) {
    return 0;
  }

  var produto = 1;

  for (var i = 0; i < numeros.length; i++) {
    var n = Number(numeros[i]);
    
    if (isNaN(n)) {
      return "Erro: todos os argumentos devem ser números.";
    }
    
    produto *= n;
  }
  
  return produto;
}

console.log("produtorio(2, 3, 4) = " + produtorio(2, 3, 4));
console.log("produtorio(5) = " + produtorio(5));
console.log("produtorio() = " + produtorio());

var entrada = prompt("Informe números separados por espaço (ex.: 2 3 4):");

if (entrada !== null && entrada.trim() !== "") {
 
  var lista = entrada.trim().split(/\s+/).map(Number);
  var total = produtorio.apply(null, lista);
 
  alert("O produtório é: " + total);
  console.log("Produtório de [" + lista + "] = " + total);
}
