// var numbers = [3, 56, 2, 48, 5];

//Map - Cria um novo array percorrendo o array realizando operacoes

// const newNumbers = numbers.map(function double(x) {
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - Cria um novo array com os valores que retornam true

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//Reduce - Soma os valores do array

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - Acha o primeiro item que passa  no critério no array

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

//FindIndex - Acha a posição do primeiro item que

import emojipedia from "./emojipedia";

console.log(emojipedia[1]["id"]);

const newArrays = emojipedia.map(function (mea) {
  return mea.meaning.substring(0, 100);
});

newArrays.map(function (arr) {
  console.log(arr);
});
