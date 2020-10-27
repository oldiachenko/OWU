// Задание 1

let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';

console.log('str =', typeof str);
console.log('num =', typeof num);
console.log('flag =', typeof flag);
console.log('txt =', typeof txt);

// Задание 2

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1, a2, a3, a4, a5);

// Задание 3

let a6 = 5 % 3;
let a7 = 3 % 3;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6, a7, a8, a9, a10);

// Задание 4

let height = 23;
let width = 10;
let s = width * height

console.log(s);

// Задание 5

let heightC = 10;
let dC = 4;
let v = 3.14159 * Math.pow((dC/2), 2) * heightC;

console.log(v);

// Задание 6

let n = 3;
let m = 4;
let k = Math.sqrt(n**2 + m**2);

console.log(k);

// Задание 7

let strHello = 'Hello world';
console.log(strHello);
alert(strHello);
document.write(strHello, '<br/>');

// Задание 8

alert('Дяченко Е.С. \n34 \nпутешествия');

// Задание 9

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2 + str3;

document.write(concatenation, '<br/>');

// Задание 10 - не проходили?
// Задание 11 - не проходили

// Задание 12

let str10 = prompt('Enter your name', 'Name');
console.log(str10);

// Задание 13

let number01 = +prompt('Enter first number', 'any number');
let number02 = +prompt('Enter second number', 'any number');
alert(number01 + number02);

// Задание 14

let userName = prompt('Ведите имя', 'Имя');
let userSurname = prompt('Введите фамилию', 'Фамилия');
let userAge = prompt('Введите возраст', 'Возраст');

alert(
  'Доброго вечера, ' + userName + ' ' + userSurname + ', ' + 'мои поздравления, что вам' + ' ' + userAge
);
