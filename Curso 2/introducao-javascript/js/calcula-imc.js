var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true;

	if(peso <= 0 || peso >= 400){
		tdImc.textContent = "Peso inválido!";
		pesoValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 2.40){
		tdImc.textContent = "Altura inválida";
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if(alturaValida == true && pesoValido == true){
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
}