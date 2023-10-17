
var botao = document.querySelector("#button");

function getvalue(){
  var input_consumo = (document.querySelector("#consumo"));
  var input_valor = (document.querySelector("#valor"));

  var value_consumo = parseFloat(input_consumo.value);
  var value_valor = parseFloat(input_valor.value);

  if(input_consumo.value === "" && input_valor.value != ""){
  alert("Preencha com seu consumo!");
  }else if (input_valor.value === "" && input_consumo.value != ""){
    alert("Preencha com o valor do KWH!");
  } else if (input_consumo.value === "" && input_valor.value === ""){
    alert("Preencha todos os campos!")
  }
  var soma = (value_consumo * value_valor);
 
  document.getElementById("result").textContent = `O valor da sua conta será: ${soma.toFixed(2)}`;
}

botao.addEventListener("click", getvalue);