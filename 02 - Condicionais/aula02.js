//_______________________ESTRUTURAS CONDICIONAIS ___________________________
//--------------------------------------------------------------------------

// IF e ELSE
const number = 2;
const numberPar = (numero % 2) === 0;

if (numberPar) { // se par imprimi true
    console.log("true");
} else { //senão imprimi false
    console.log("false");
}

// IF e ELSE aninhados  

const number2 = 15;
const numberDivBy5 = (number % 5) === 0;
const isPar = (number % 2) === 0;

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
    console.log(i);
    i++;
} while (i < 10);

// FOR
for (let j = 0; j < 10; j++) {
    console.log(j);
}

// WHILE
let k = 0;
while (k < 10) {
    console.log(k);
    k++;
}
