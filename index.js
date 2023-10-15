
var botao = document.querySelector("#button");

function getvalue(){
  var consumo = parseFloat(document.querySelector("#consumo").value);
  var valor = parseFloat(document.querySelector("#valor").value);

  var soma = (consumo * valor);
 
  document.getElementById("result").textContent = `O valor da sua conta será: ${soma.toFixed(2)}`;
}

botao.addEventListener("click", getvalue);