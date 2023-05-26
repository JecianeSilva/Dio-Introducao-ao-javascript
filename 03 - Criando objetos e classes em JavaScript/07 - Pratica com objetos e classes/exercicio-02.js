/* 
    1 - Crie uma classe para representar Pessoas.
    Para casa pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé para
    dizer o valor do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    getClassificationImc() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularIMC());

const henry = new pessoa('Henry', 58, 1.8);
console.log(henry);
console.log(henry.calcularIMC());
console.log(henry.getClassificationImc());