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

// ????????????

// -------------------------
// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

let arrReduce = [1, 6, 9, 0, 17, 88, 4, 7];

let reduce = arrReduce.reduce((acc, value) =>
  value > acc ? (acc = value) : acc
);
console.log(reduce);

// -------------------------
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// 2176491947586100 -> 3

function count(numbers, key) {
  let numbersArr = [];
  let keyCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbersArr.push(numbers.charAt(i));
  }
  numbersArr.forEach((value) => {
    if (value == key) {
      ++keyCount;
    }
  });
  return keyCount;
}

console.log(count('2176491947586100', 1));

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

console.log(missedLetter(arrayLetters))

