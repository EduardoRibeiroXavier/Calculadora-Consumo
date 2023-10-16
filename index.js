
var botao = document.querySelector("#button");

function getvalue(){
  var n1 = parseFloat(document.querySelector("#consumo").value);
  var n2 = parseFloat(document.querySelector("#valor").value);

  var soma = (n1+ n2);
 
  document.getElementById("result").textContent = `A soma é: ${soma.toFixed(2)}`;
}

botao.addEventListener("click", getvalue);