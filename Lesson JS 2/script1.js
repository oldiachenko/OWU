// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let num = [1, 2, 3, 4, 5];
let str = ['Ann', 'Jane', 'Nik', 'Max', 'Ivan'];
let array = [true, 5, 8, false, 'Hello'];

console.log(num);
console.log(str);
console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array2 = [];
array2[0] = 'Oleg';
array2[1] = 387;
array2[2] = true;

console.log(array2);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i <= 10; i++) {
  document.write('<div>Text</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i <= 10; i++) {
  document.write(`<div>Text ${i} </div>`);
}

document.write('<br/>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i <= 20) {
  document.write('<h1>Text H1</h1>');
  i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let ii = 0;
while (ii <= 20) {
  document.write(`<h1>Text H1 ${ii} </h1>`);
  ii++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array7.length; i++) {
  console.log(array7[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array8 = [
  'text1',
  'text2',
  'text3',
  'text4',
  'text5',
  'text6',
  'text7',
  'text8',
  'text9',
  'text10',
];

for (let i = 0; i < array8.length; i++) {
  console.log(array8[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array9 = [56755, 'Ann', true, 34, null, 'cat', 'dog', 'mouse', 'bird', 12];

for (let i = 0; i < array9.length; i++) {
  console.log(array9[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array10 = [34, 55, 'text', true, 9, true, false, 67, 'text2', true];

for (let i = 0; i < array10.length; i++) {
  if (typeof array10[i] === 'boolean') {
    console.log(array10[i]);
  }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < array10.length; i++) {
  if (typeof array10[i] === 'number') {
    console.log(array10[i]);
  }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let i = 0; i < array10.length; i++) {
  if (typeof array10[i] === 'string') {
    console.log(array10[i]);
  }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let array13 = [];

array13[0] = 34;
array13[1] = true;
array13[2] = 'hello';
array13[3] = null;
array13[4] = false;
array13[5] = 'text';
array13[6] = {
  type: 'dog',
  name: 'Spark',
  age: 3,
};
array13[7] = {
  type: 'cat',
  name: 'Tom',
  age: 4,
};
array13[8] = {
  type: 'mouse',
  name: 'Jerry',
  age: 2,
};
array13[9] = 58;

for (let i = 0; i < array13.length; i++) {
  console.log(array13[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 10; i++) {
  console.log(i);
  document.write(i, '<br/>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 100; i++) {
  console.log(i);
  document.write(i, '<br/>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
  document.write(i, '<br/>');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
  document.write(i, '<br/>');
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let iM = 0; iM <= 2; iM++) {
  for (let iS = 0; iS <= 60; iS++) {
    console.log(`${iS} sec ${iM} min`);
  }
}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let iH = 0; iH <= 2; iH++) {
  let iM = 0;
  let iS = 0;
  if (iH < 2) {
    for (iM = 0; iM <= 60; iM++) {
      for (iS = 0; iS <= 60; iS++) {
        console.log(`${iS} sec ${iM} min ${iH} hour`);
      }
    }
  } else {
    for (iM = 0; iM <= 20; iM++) {
      for (iS = 0; iS <= 60; iS++) {
        console.log(`${iH} hour ${iM} min ${iS} sec`);
      }
    }
  }
}

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let array22 = ['a', 'b', 'c'];
for (let i = 0; i < array22.length; i++) {
  document.write(array22[i]);
}
document.write('<br/>');

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i23 = 0;
while (i23 < array22.length) {
  document.write(array22[i23]);
  i23++;
}
document.write('<br/>');

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (let value of array22) {
  document.write(value);
}
