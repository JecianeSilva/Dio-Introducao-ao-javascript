
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre
    da faculdade calcule e imprima a sua média e a sua classificação conforme a 
    tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    Média menor que 5, reprovação;
    Média entre 5 e 7, recuperação;
    Média acima de 7, passou de semestre;
*/

const note1 = 8.5;
const note2 = 10;
const note3 = 9;

const media = (note1 + note2 + note3) / 3;

if (media < 5) { 
    console.log('Nota: ' + media.toFixed(1) + ' - Reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('Nota: ' + media.toFixed(1) + ' - Recuperação');
} else {
    console.log('Nota: ' + media.toFixed(1) + ' - Passou de semestre');
}




