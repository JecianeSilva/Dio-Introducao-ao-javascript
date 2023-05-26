/*  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de  1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    - Dados de entrada: 5, 50 , 10, 98, 23
    - Dados de saída: 98
*/

function getValueMax(data){
    var valueMax = data[0];

    for(let i = 1; i < data.length; i++){
        if (data[i] >= valueMax)
        valueMax = data[i];        
    }

    return valueMax;
}

module.exports = { getValueMax};