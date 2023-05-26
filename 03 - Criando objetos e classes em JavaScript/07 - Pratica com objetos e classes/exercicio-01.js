/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    calcularValorGasto(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedio * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno);
console.log(uno.calcularValorGasto(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio);
console.log(palio.calcularValorGasto(70, 5));