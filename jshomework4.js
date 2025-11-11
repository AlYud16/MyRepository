'use strict'

function checkProbabilityTheory(number) {
   let pairedNumbers = 0;
   let unpairedNumbers = 0;

   for (let i = 0; i < number; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

      if (randomNumber % 2 === 0) {
         pairedNumbers++;

      } else {
         unpairedNumbers++;
    }

   }
   
   let pairedParcent = (pairedNumbers / number) * 100;
   let unpairedParcent = (unpairedNumbers / number) * 100;

console.log('Кількість згенерованих чисел: ' + number);   
console.log('Парних чисел: ' + pairedNumbers);
console.log('Непарних чисел: ' + unpairedNumbers);
console.log('Відсоток парних: ' + pairedParcent.toFixed(2) + '%');
console.log('Відсоток непарних: ' + unpairedParcent.toFixed(2) + '%');

}

checkProbabilityTheory(73);