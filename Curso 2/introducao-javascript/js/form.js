var botaoAdicionar = document.querySelector("#adicionar-paciente");

// criando dentro da var botaoAdicionar um evento de escuta que sera o click do mouse e fazendo uma funcao anonima

// e que quando clicado no botao adicionar ira fazer essa funcao de criacao de formulario

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault(); // serve para o padrao do evento nao ser usado.

	var form = document.querySelector("#form-adiciona");  

    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
	
	
    //sera criado um elemento no html tr e td
	var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    // adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");  // a var tabela ira pegar o conteudo do id tabela-pacientes

	tabela.appendChild(pacienteTr);  // cria o pacienTr dentro tabela

    form.reset();
    var mensagensErro = document.querySelector("#mensagemErro");
    mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagemErro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


// Extraindo informacoes do paciente do form
function obtemPacienteDoFormulario(form){
    // criando um OBJETO paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,      // o .value ele extrai informacoes do paciente do form
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


//sera criado um elemento no html tr e td
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));     // o appendChild serve para ensinar a maquina a saber qual var ira ser o pai de outra var, ou seja, a tag tr é pai da td pois a td fica dentro da tr
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

//sera criado td com a class
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválido!");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!");
    }
    

    return erros;
}