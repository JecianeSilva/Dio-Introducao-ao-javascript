 // ________________ ARRAYS E ESTRUTURAS DE REPETIÇÃO _______________________
// ---------------------------------------------------------------------------

// Arrays

// const numbers = []; // vazio
const numbers = [2, 4, 6, 8];
console.log(numbers);

numbers.push(10);
console.log(numbers);


 // Estrutura de repetição - FOR

 const num = []
 for (let j = 0; j < 10; j++) {
    num.push(j);
 }
 console.log(num);

 //example 2
const name = "Francisca Jeciane";

for(let i = 0 ; i < name.length; i++) {
    console.log(name[i]);
}


// Estrutura de repetição - DO WHILE
 let count = 1;
 console.log('contando...');
 do {
     console.log(count);
     count++;
 } while (count <= 10);

 // Estrutura de repetição - WHILE
 let i = 0;
 while (i < 10) {
     console.log('while: ' + i);
     i++;
 }
 