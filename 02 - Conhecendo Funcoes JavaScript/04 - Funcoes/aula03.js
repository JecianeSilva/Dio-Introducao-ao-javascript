//_______________________________ FUNÇÕES __________________________________
//--------------------------------------------------------------------------

// Função
function teste () {
    console.log('teste');
}

// Função com parametros
function test (value) {
    console.log('valor: ' + value);
}

//chamada da função Teste
teste();
test(10);


// Função com parametros e retorno
function getValue (value) {
    return value;
}

//chamada da função getValue, imprimindo  o retorno da função
console.log(getValue(20));
