//_______________ESTRUTURAS CONDICIONAIS ___________________
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