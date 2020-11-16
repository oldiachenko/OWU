//выравнивание массива через рекурсию

let array1 = [1, 3, 5, [3, 86, 46], [56, 8], [465, [[67], [54]]], 56, 34];

function flat(array, arrayCopy) {
  arrayCopy = arrayCopy || [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      flat(array[i], arrayCopy);
    } else {
      arrayCopy.push(array[i]);
    }
  }
  return arrayCopy;
}

console.log(flat(array1));

// --------------------------

// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"



function numberToText(number) {
  let arrayN = [];
  let str = '';
  while (number) {
    arrayN.push(number % 10);
    number = Math.floor(number / 10);
  }
for (let i = arrayN.length-1 ; i >= 0; i--) {
  const tmp = arrayN[i] * (10 ** i);
str += i === 0 ? tmp : tmp + ' + ';
}
return str
}


console.log(numberToText(3275))


// -------------------------
// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

let arrReduce = [1, 6, 9, 0, 17, 88, 4, 7];

let reduce = arrReduce.reduce((acc, value) => (value > acc ? value : acc));
console.log(reduce);

// -------------------------
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// 2176491947586100 -> 3

function count1(string, number) {
  let doubleZero = string.indexOf('00');
  let stringArr = string.split('');
  stringArr.splice(doubleZero, stringArr.length - doubleZero);

  let count1 = 0;

  stringArr.forEach((value) => {
    +value === number ? count1++ : count1;
  });
  return (count1);
}

console.log(count1('2176491947586100', 1));

// function count(numbers, key) {
//   let numbersArr = [];
//   let keyCount = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     numbersArr.push(numbers.charAt(i));
//   }
//   numbersArr.forEach((value) => {
//     if (+value === key) {
//       ++keyCount;
//     }
//   });
//   return keyCount;
// }

// console.log(count('2176491947586100', 1));

// -------------------------
// найти приопущенную букву в массиве:

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// Спойлер. Вам потрібно дізнатися ASCII букв.
let arrayLetters = ['O', 'Q', 'R', 'S'];

function missedLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1].charCodeAt() - array[i].charCodeAt() > 1) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}

console.log(missedLetter(arrayLetters));

// сложить цифры числа:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

//Считает без учета минуса

function sumDigits1(numbers) {
  numbers = String(numbers).split('');

  numbers[0] === '-' ? numbers.splice(0, 1) : numbers;

  numbers = numbers.reduce((acc, value) => +acc + +value);
  return numbers;
}

console.log(sumDigits1(-32));

//Считает с учетом минуса

function sumDigits(numbers) {
  numbers = String(numbers).split('');

  if (numbers[0] === '-') {
    let number = numbers[0] + numbers[1];
    numbers.splice(0, 2, number);
  }
  let arr = [];
  numbers.forEach((value) => {
    arr.push(+value);
  });

  arr = arr.reduce((acc, value) => acc + value);
  return arr;
}

console.log(sumDigits(-32));

// Проверьте, имеет ли строка одинаковое количество "" x "" и "" o "". Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любые символы.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // потому что нет ни того ни другого
// XO("zzoo") => false

function compare(string, a, b) {
  string = string.toUpperCase();

  let arr = string.split('');

  let numberA = 0;
  let numberB = 0;

  arr.forEach((value) => {
    value === a ? numberA++ : numberA;
    value === b ? numberB++ : numberB;
  });

  return console.log(numberA === numberB);
}

compare('zzoo', 'X', 'O');
