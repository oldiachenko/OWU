// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let div = document.getElementsByClassName('div')[0];

let text = 'Hello World';

let arr = text.split('');


function print(array, i = 0) {
  return new Promise(() => {
    let textInDiv = div.innerText;
      setTimeout(() => {
        textInDiv = textInDiv + array[i];
        div.innerText = textInDiv;
       i++
        if (i === array.length) {
          return
        }
        print(array,i)
      }, getRandom(100, 1000));
  });
}

async function printToDiv() {
  const result = await print(arr);
}

printToDiv();









