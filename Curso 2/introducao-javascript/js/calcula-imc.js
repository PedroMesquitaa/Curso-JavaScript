var titulo = document.querySelector("h1");  // querySelector retorna no console para nós o h1
titulo.textContent = "Aparecida Nutricionista"; // Usando o textContext muda o que esta dentro.

var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll retorna todos o conteudo que tem a mesma classe

// fazendo o calculo para todos os pacientes que tem no formulário sem precisar fazer um código para cada um

for(var i = 0; i < pacientes.length; i++){   // variavel i igual a 0; enquanto o total(length) for menos que i; adiciona(++) na varial 1, ou seja, percorre o loop mais uma vez. 

	var paciente = pacientes[i];  // a variavel paciente vai receber o conteudo de pacientes a cada loop.

	var tdPeso = paciente.querySelector(".info-peso"); // varialvel tdPeso vai receber a classe info-peso que esta dentro do paciente.
	var peso = tdPeso.textContent; // variavel peso ira receber o conteudo do tdPeso

	var tdAltura = paciente.querySelector(".info-altura"); // varialvel tdAltura vai receber a classe info-altura que esta dentro do paciente.
	var altura = tdAltura.textContent // variavel altura ira receber o conteudo do tdaltura


	var tdImc = paciente.querySelector(".info-imc"); // varialvel tdImc vai receber a classe info-imc que esta dentro do paciente.

	var pesoValido = validaPeso(peso); // valor da variavel pesoValido inicial é verdadeiro e usaremos isso para validação
	var alturaValida = validaAltura(altura); // valor da variavel alturaValida inicial é verdadeiro e usaremos isso para validação

	// fazendo validação

	if(!pesoValido){
		tdImc.textContent = "Peso inválido!";  // Se o peso for invalido a var tdImc ira mostrar um conteudo de texto
		pesoValido = false;  // o valor do pesoValido sera falso
		paciente.classList.add("paciente-invalido"); // sendo falso o valor ele ira usar classList.add do css para usar o estilo de la
	}

	if(!alturaValida){
		tdImc.textContent = "Altura inválida";
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if(alturaValida == true && pesoValido == true){
		var imc = calculaImc(peso,altura); // a var imc ira receber a funcao calculaImc
		tdImc.textContent = imc; // e a var tdImc ira nos mostrar como um conteudo de texto o valor do calculo
	}
}



function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}


function validaAltura(altura){
	if(altura >= 0 && altura < 2.40){
		return true;
	}else{
		return false;
	}
}

// funcao para fazer o calculo onde podera ser reutilizado em outro lugar, como por exemplo para fazer o calculo direto quando for adicionado paciente novo

function calculaImc(peso,altura){  // funcao calculaImc tera os valores puxados das var peso e altura
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);	// ira retornar o valor do imc usando .toFixed(2) para só ter 2 casa decimais
}