var num1 = "";
var num2 = "";
var sex = "";
var IMC = "";


function enviap(){
  num1 = document.getElementById("dpeso").value;
}

function enviaA(){
  num2 = document.getElementById("daltura").value;
  IMC = num1/(num2 * num2);
}

function sexo(){
  sex = document.getElementById("daltura").value;
  document.getElementById("imc1").value = IMC;
  
}

function resp(){
 alert("Se você é do sexo masculino seu IMC deve estar entre 20.7 e 27.8 para você estar saudavel.Se estiver abaixo disso voce precisa comer mais,se estiver acima você precisa comer menos.Se você é do sexo feminino seu IMC deve estar entre 19.1 e 27.3.Abaixo disso você esta com IMC baixo e deve se alimentar melhor,acima deve comer menos");
  
}

function limpa(){
  document.getElementById("dpeso").value = "";
  document.getElementById("daltura").value = "";
  document.getElementById("imc1").value = "";
}

function refaz(){
  document.getElementById("dpeso").value = "";
  document.getElementById("daltura").value = "";
  document.getElementById("imc1").value = "";
  num1 = "";
  num2 = "";
  sex = "";
  IMC = "";
}