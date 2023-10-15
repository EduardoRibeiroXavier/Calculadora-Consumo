
var botao = document.querySelector("#button");

function getvalue(){
  var n1 = parseFloat(document.querySelector("#num1").value);
  var n2 = parseFloat(document.querySelector("#num2").value);

  var soma = (n1+ n2);
 
  document.getElementById("result").textContent = `A soma é: ${soma}`;
}

botao.addEventListener("click", getvalue);