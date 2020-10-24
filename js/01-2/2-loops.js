// for (let i = 0; i < 5; i+=1) {
//     console.log(`i = ${i}`)
// }

//цикл FOR
// let userInput = prompt('Введите число');
// userInput = Number(userInput);
// let sum = 0;
// for (let i = 1; i <= userInput; i += 1) {
//   sum += i;
// }
// console.log(`Сумма чисел = ${sum}`);

//цикл WHILE
// const number = 5;
// let sum = 0;
// let i = 1;
// while (i <= number) {
//     sum += i;
//     i += 1;
// }
// console.log(`Сумма чисел = ${sum}`);

// //цикл DO WHILE
// const number = 10;
// let userInput;
// do {
//   userInput = prompt(`Введи ${number}`);
//   if (userInput === null) {
//     break;
//   }
//   userInput = Number(userInput);
// } while (userInput !== number);

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


let sum = 0;
while (true) {
  let input = prompt("Введи число");
  if (input === null) {
    console.log('Отменено пользователем');
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    console.log("Было введено не число");
    continue;
  }
    sum += input;
} 
console.log(`Общая сумма = ${sum}`);

