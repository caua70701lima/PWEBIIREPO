function somenteImpares(numeros) {
  
  if (!Array.isArray(numeros)) {
    return "Erro: o argumento deve ser um array de números.";
  }
  
  return numeros.filter(function (n) {
    return typeof n === "number" && n % 2 !== 0;
  });
}

var exemplo = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Entrada: [" + exemplo + "]");
console.log("Ímpares: [" + somenteImpares(exemplo) + "]");

var entrada = prompt("Informe números separados por vírgula (ex.: 1,2,3,4,5):");

if (entrada !== null && entrada.trim() !== "") {

  var lista = entrada.split(",").map(function (x) {
    return Number(x.trim());
  });
  
  var impares = somenteImpares(lista);
  
  alert("Números ímpares encontrados: [" + impares + "]");
  console.log("Ímpares de [" + lista + "] = [" + impares + "]");
}
