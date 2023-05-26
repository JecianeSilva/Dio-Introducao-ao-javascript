/* 2) Crie um programa que seja capaz de percorrer uma lista de npumeros e imprime
 cada número Par encontrado */

 const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

 for (let i = 0; i < lista.length; i++) {
     if (lista[i] % 2 === 0) {
         console.log(lista[i]);
     }
 }
