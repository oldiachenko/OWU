// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
const arrayNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// // 1. перебрати його циклом while

let i1 = 0;
while (i1 < arrayNew.length) {
  console.log(arrayNew[i1]);
  i1++;
}

// // 2. перебрати його циклом for

for (let i = 0; i < arrayNew.length; i++) {
  console.log(arrayNew[i]);
}

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i3 = 1;
while (i3 < arrayNew.length) {
  console.log(arrayNew[i3]);
  i3 += 2;
}

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 1; i < arrayNew.length; i += 2) {
  console.log(arrayNew[i]);
}

// // 5. перебрати циклом while та вивести  числа тільки парні  значення

let i5 = 0;
while (i5 < arrayNew.length) {
  console.log(arrayNew[i5]);
  i5 += 2;
}

// // 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arrayNew.length; i += 2) {
  console.log(arrayNew[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (i = 0; i < arrayNew.length; i++) {
  if (arrayNew[i] % 3 === 0) {
    arrayNew[i] = 'okten';
  }
}
console.log(arrayNew);

// 8. вивести масив в зворотньому порядку.

const arrayNew4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let arrayNew1 = [];
for (i = arrayNew4.length - 1; i >= 0; i--) {
  arrayNew1.push(arrayNew4[i]);
}
console.log(arrayNew1);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arrayNew2 = [];
let i2 = arrayNew4.length - 1;
while (i2 >= 0) {
  arrayNew2.push(arrayNew4[i2]);
  i2--;
}
console.log(arrayNew2);

let arrayNew3 = [];
let i4 = arrayNew4.length - 1;
while (i4 >= 0) {
  if (i4 % 2 != 0) {
    arrayNew3.push(arrayNew4[i4]);
  }
  i4--;
}
console.log(arrayNew3);

let arrayNew5 = [];
for (i = arrayNew4.length - 1; i >= 0; i--) {
  if (i % 2 != 0) {
     arrayNew5.push(arrayNew4[i]);
  }
}
console.log(arrayNew5);

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
let arrayNew101 = [];

for (let i = 0, j=0; i <=50; i+=2, j++) {
  arrayNew101[j] = i
}
console.log(arrayNew101)

let arrayNew102 = [];

for (let i = 1, j = 0; i <= 50; i += 2, j++) {
  arrayNew102[j] = i;
}
console.log(arrayNew102);