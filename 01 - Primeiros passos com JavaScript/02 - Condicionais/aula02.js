//_______________ESTRUTURAS CONDICIONAIS E DE REPETIÇÕES ___________________
//--------------------------------------------------------------------------

// IF e ELSE
const number = 2;
const numberPar = (number % 2) === 0;

if (numberPar) { // se par imprimi true
    console.log("true");
} else { //senão imprimi false
    console.log("false");
}

// IF e ELSE aninhados  

const number2 = 15;
const numberDivBy5 = (number2 % 5) === 0;
const isPar = (number2 % 2) === 0;

// number é divisivel por 5 e é par?
if (numberDivBy5) {
    if (isPar) {
        console.log("true");
    } else {
        console.log("false");
    }
} else {
    console.log("false");
}

 // DO WHILE
let i = 0;
do {
    console.log('Do while: ' + i);
    i++;
} while (i < 10);

// FOR
for (let j = 0; j < 10; j++) {
    console.log('For: '+ j);
}

// WHILE
let k = 0;
while (k < 10) {
    console.log('while: ' + k);
    k++;
}
