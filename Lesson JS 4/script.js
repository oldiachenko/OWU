// - створити функцію яка виводить масив

let array = [76, 32, 56, 372, 584];
function arrayF(arr) {
  console.log(arr);
}

arrayF(array);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function arrayRandomF(length, n) {
  let arrayRandom = [];
  for (let i = 0; i < length; i++) {
    arrayRandom.push(Math.floor(Math.random() * n));
  }
  return arrayRandom;
}

arrayF(arrayRandomF(10, 100));

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function minNumber(a, b, c) {
  if (a <= b && a <= c) {
    return console.log(a);
  } else if (b <= a && b <= c) {
    return console.log(b);
  }
  return console.log(c);
}

minNumber(5, 56, 1);

let minN = (a, b, c) => console.log(Math.min(a, b, c));

minN(450, 88, 90);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

let maxN = (a, b, c) => console.log(Math.max(a, b, c));
maxN(874, 65, 900);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function anyNumber() {
  let arrayArg = [...arguments];
  console.log(Math.max(...arrayArg));
  return Math.min(...arrayArg);
}

//variant 2

function anyNumber2(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i] > max ? (max = array[i]) : max;
    array[i] < min ? (min = array[i]) : min;
  }
  console.log(max);
  return min;
}

console.log(anyNumber(576, 9382, 76, 8, 7, 90, 45, 67, 23));
console.log(anyNumber2([45, 10, 78, 0, 43, 65]))

// - створити функцію яка повертає найбільше число з масиву

function maxNumberArray(array) {
  let max = array[0];
  for (let value of array) {
    value > max ? (max = value) : max;
  }
  return max;
}
let arrMax = [40, 7, 68, 3];
console.log(maxNumberArray(arrMax));

// - створити функцію яка повертає найменьше число з масиву
function minNumberArray(array) {
  let min = array[0];
  for (let value of array) {
    value < min ? (min = value) : min;
  }
  return min;
}

let arrayMin = [456, 76, 3456, 234];
console.log(minNumberArray(arrayMin));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function arraySumator(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
let arraySum = [1, -2, -3, 8];
console.log(arraySumator(arraySum));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrayAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}

let arrayAv = [3, 5, 8, 10];
console.log(arrayAverage(arrayAv));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// если в массиве только объекты:
let quantityF = (array) => array.length;

let objectsArray = [
  { name: 'tom', age: 25 },
  { name: 'nick', age: 34, status: true, car: { first: 1, second: 2 } },
];
console.log(quantityF(objectsArray));

//проверка на тип данных
function objectsQuantity(array) {
  let quantity = 0;
  for (let value of array) {
    if (typeof value === 'object') {
      quantity++;
    }
  }
  return quantity;
}

console.log(objectsQuantity(objectsArray));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

//смотрит только в первый уровень вложенности
function keysNumber(array) {
  let number = 0;
  for (let value of array) {
    if (typeof value === 'object') {
      for (let keys in value) {
        number++;
      }
    }
  }
  return number;
}
console.log(keysNumber(objectsArray));

//смотрит во второй уровень вложенности
function keysNumber2(array) {
  let number = 0;
  for (let value of array) {
    if (typeof value === 'object') {
      for (let keys in value) {
        number++;
        if (typeof value[keys] === 'object') {
          for (let keys2 in value[keys]) {
            number++;
          }
        }
      }
    }
  }
  return number;
}
console.log(keysNumber2(objectsArray));

// - створити функцію  яка складає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function arraySumIndex(array1, array2) {
  let arrayResult = [];
  for (let i = 0; i < array1.length; i++) {
    arrayResult[i] = array1[i] + array2[i];
  }
  return arrayResult;
}

let arrayToSum1 = [1, 2, 3, 4];
let arrayToSum2 = [2, 3, 4, 5];

console.log(arraySumIndex(arrayToSum1, arrayToSum2));

// - *** приймає масив та число "i", та міняє місцями обєкт який знаходиться в індексі "i" на "i+1"

function changePlace(array, a) {
  for (let i = 0; i < array.length; i++) {
    if (a > array.length - 2) {
      return 'Given number is larger than array length';
    } else if (i === a) {
      let elementA = array[i];
      let elementAA = array[i + 1];
      array[i] = elementAA;
      array[i + 1] = elementA;
      return array;
    }
  }
}

console.log(changePlace(arrayToSum1, 2));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function replace(array) {
  let zero = [];
  let number = [];
  for (value of array) {
    if (value === 0) {
      zero.push(value);
    } else {
      number.push(value);
    }
  }
  return number.concat(zero);
}

function replace2(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      array.splice(i, 1);
      array.push(0);
    }
  }
  return array;
}

let arrayToReplace = [0, 0, 1, 0];

console.log(replace(arrayToReplace));
console.log(replace2(arrayToReplace));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function addDiv() {
  let div = document.createElement('div');
  div.innerText = 'Hello owu';
  document.body.appendChild(div);
}

addDiv();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function newElement(elementType, text) {
  let element = document.createElement(elementType);
  element.innerText = text;
  document.body.appendChild(element);
}

newElement('h1', 'Hello');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

function carList(array, id) {
  let element = document.getElementById(id);
  let ul = document.createElement('ul');
  for (let i = 0; i < array.length; i++) {
    let car = array[i];
    let li = document.createElement('li');
    li.innerText = `Car: ${car.model}, year: ${car.year}, power: ${car.power}, color: ${car.color}`;
    ul.appendChild(li);
  }
  element.appendChild(ul);
}

let cars = [
  {
    model: 'fiat',
    year: 1976,
    power: 78,
    color: 'red',
  },
  {
    model: 'honda',
    year: 2010,
    power: 87,
    color: 'grey',
  },
  {
    model: 'mazda',
    year: 2009,
    power: 90,
    color: 'white',
  },
  {
    model: 'volvo',
    year: 2012,
    power: 97,
    color: 'yellow',
  },
  {
    model: 'ford',
    year: 2018,
    power: 92,
    color: 'black',
  },
  {
    model: 'chevrolet',
    year: 2019,
    power: 88,
    color: 'pink',
  },
  {
    model: 'dodge',
    year: 2017,
    power: 97,
    color: 'blue',
  },
  {
    model: 'bentley',
    year: 2000,
    power: 90,
    color: 'brown',
  },
  {
    model: 'audi',
    year: 1999,
    power: 79,
    color: 'silver',
  },
  {
    model: 'kia',
    year: 2004,
    power: 82,
    color: 'green',
  },
];

carList(cars, 'cars');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function carListBlock(array, id) {
  let element = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    let car = array[i];
    let carBlock = document.createElement('div');
    carBlock.innerText = `Car: ${car.model}, year: ${car.year}, power: ${car.power}, color: ${car.color}`;
    element.appendChild(carBlock);
  }
}

carListBlock(cars, 'carsBlocks');

// Для кожної властивості створити всередені блока автомоблія свій блок

function carListBlockInBlock(array, id) {
  let element = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    let car = array[i];
    let carBlock = document.createElement('div');
    let carBlockModel = document.createElement('div');
    carBlockModel.innerText = `Car: ${car.model}`;
    carBlock.appendChild(carBlockModel);
    let carBlockYear = document.createElement('div');
    carBlockYear.innerText = `Year: ${car.year}`;
    carBlock.appendChild(carBlockYear);
    let carBlockPower = document.createElement('div');
    carBlockPower.innerText = `Power: ${car.power}`;
    carBlock.appendChild(carBlockPower);
    let carBlockColor = document.createElement('div');
    carBlockColor.innerText = `Color: ${car.color}`;
    carBlock.appendChild(carBlockColor);
    element.appendChild(carBlock);
  }
}

carListBlockInBlock(cars, 'carsBlocksInBlock');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

function arrayConnect(users, cities) {
  let usersWithId = JSON.parse(JSON.stringify(users));
  let citiesWithId = JSON.parse(JSON.stringify(cities));
  for (let value of usersWithId) {
    for (let value2 of citiesWithId) {
      if (value.id === value2.user_id) {
        value.address = value2;
      }
    }
  }
  return usersWithId;
}

let usersWithId = [
  { id: 1, name: 'vasya', age: 31, status: false },
  { id: 2, name: 'petya', age: 30, status: true },
  { id: 3, name: 'kolya', age: 29, status: true },
  { id: 4, name: 'olya', age: 28, status: false },
];
let citiesWithId = [
  { user_id: 3, country: 'USA', city: 'Portland' },
  { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
  { user_id: 2, country: 'Poland', city: 'Krakow' },
  { user_id: 4, country: 'USA', city: 'Miami' },
];

console.log(arrayConnect(usersWithId, citiesWithId));
console.log(usersWithId);
console.log(citiesWithId);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

function rulesBlocks() {
  let ruleBlock = document.createElement('div');
  document.body.appendChild(ruleBlock);

  for (let value in arguments) {
    for (let value2 of arguments[value]) {
      let ruleTitle = document.createElement('h2');
      ruleTitle.innerText = `${value2.title}`;
      ruleBlock.appendChild(ruleTitle);
      let ruleBody = document.createElement('p');
      ruleBody.innerText = `${value2.body}`;
      ruleBlock.appendChild(ruleBody);
    }
  }
}

let rules = [
  {
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.',
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.',
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.',
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.',
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.',
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.',
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body:
      'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.',
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.',
  },
];

rulesBlocks(rules);


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// let isExponentTwo = (num) => (num & (num - 1) ? false : true);
// console.log(isExponentTwo(16));

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

let car = {
  model: 'fiat',
  year: 1976,
  power: 78,
  color: {
    one: 'red',
    two: 'white',
    three: {
      first: 'blue',
      second: 'light blue',
    },
  },
  driver: {
    one: 'Dima',
    two: 'Petro',
  },
};


let carNew = {};
function deepCopyObject(object) {
  for (let key in object) {
    carNew[key] = object[key];
  }
  return carNew;
}

console.log(deepCopyObject(car));


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

let arrayWithArrays = [1, 3, ['Hello', 'World', [9, 6, 1]], ['oops'], 9];

let arrayFlat = arrayWithArrays.flat(2);
console.log(arrayFlat);

//variant2

function arrayFlatFunction2(array) {
  let arrayFlat2 = [];
  for (let value of array) {
    if (typeof value !== 'object') {
      arrayFlat2.push(value);
    } else if (typeof value === 'object') {
      for (let value2 of value) {
        if (typeof value2 !== 'object') {
          arrayFlat2.push(value2);
        } else if (typeof value2 == 'object') {
          for (let value3 of value2) {
            arrayFlat2.push(value3);
          }
        }
      }
    }
  }
  return arrayFlat2;
}

console.log(arrayFlatFunction2(arrayWithArrays));

// найти в массиве уникальное значение, пример:
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(array) {
  let count = {};
  for (let value of array) {
    count[value] ? count[value]++ : (count[value] = 1);
  }
  let keys = Object.keys(count)
  for (let key of keys) {
    if (count[key] > 1) {
      delete count[key]
    }
  }
  return count;
}

console.log(findUniq([0, 0, 0.55, 0, 0]));

// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз

let smth = [3, 5, 5, 3, 3, 1, 1, 2, 2];

function findNumber (array) {
let counter = {};
for (let value of array) {
  counter[value] ? counter[value]++ : (counter[value] = 1);
}
let keys = Object.keys(counter)
for (let value of keys) {
  if (counter[value]%2 == 0) {
    delete counter[value]
  }
}

return counter;
}

console.log(findNumber(smth))
