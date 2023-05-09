// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distânia em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

// ----------------------------------------------------------------

const priceEtanol = 4.12; // Preço do Etanol
const priceGasolina = 5.32; // Preço do combustivel
const typeCombustion = 0; // 0 para Etanol e 1 para Gasolina
const valueMedioKm = 13 // Valor médio (Kilometros por Litro )
const distancedByKm = 90 // Distância em KM da viagem.

function calc(priceCombustion, valueMedioKm, distancedByKm) {
    const consume = distancedByKm / valueMedioKm;
    return (consume * priceCombustion).toFixed(2);
}
if (typeCombustion === 0){
    console.log(calc(priceEtanol, valueMedioKm, distancedByKm));
} else if(typeCombustion === 1){
    console.log(calc(priceGasolina, valueMedioKm, distancedByKm));
} else {
    console.log("Tipo de combustível inválido");
}