console.log("Javascript carregado");


function verificarDigito(cpf, posicaoDigitoVerificador) {
    var aux = 0;

    if (posicaoDigitoVerificador == 0) {
        aux = 9
    } else if (posicaoDigitoVerificador == 1) {
        aux = 10
    }
    var numeros = cpf.substring(0, aux);
    var digitos = cpf.substring(9);
    var soma = 0;

    for (var i = (aux + 1); i > 1; i--) {
        soma += numeros.charAt((aux + 1) - i) * i;
    }

    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(posicaoDigitoVerificador)) {
        return false
    }

    return true
}

function validaCPF(cpf) {

    if (cpf.length == 11) {

        var primeiroDigitoValido = verificarDigito(cpf, 0);
        var segundoDigitoValido = verificarDigito(cpf, 1);

        if (primeiroDigitoValido && segundoDigitoValido) {
            return true
        }
    }

    return false;
}

function validacao() {
    console.log("Iniciando validação CPF");
    var cpf = document.getElementById('cpf_digitado').value;
    var resultadoValidacao = validaCPF(cpf);

    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'none';

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}