// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Valor médio de gasto do carro;
// 3 - Distânia em KM da viagem;

// ----------------------------------------------------------------

const priceCombustion = 5.32; // Preço do combustivel
const valueMedioKm = 13 // Valor médio (Kilometros por Litro )
const distancedByKm = 90 // Distância em KM da viagem.

function calc(priceCombustion, valueMedioKm, distancedByKm) {
    const consume = distancedByKm / valueMedioKm;
    return (consume * priceCombustion).toFixed(2);
}

console.log(calc(priceCombustion, valueMedioKm, distancedByKm));