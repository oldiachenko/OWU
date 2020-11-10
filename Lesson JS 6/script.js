// - создать массив с 20 числами.

let numbers = [
  23,
  56,
  8795,
  874,
  300,
  6,
  231,
  764,
  5409,
  230,
  76,
  1,
  -75,
  0,
  34,
  -7654,
  645,
  879,
  523,
  67,
];

// -- при помощи метода sort и колбека  отсортировать массив.

numbers.sort((a, b) => a - b);
console.log(numbers);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

numbers.sort((a, b) => b - a);
console.log(numbers);

// -- при помощи filter получить числа кратные 3

let filterMultipleThree = numbers.filter((value) => value % 3 === 0);
console.log(filterMultipleThree);

// // -- при помощи filter получить числа кратные 10

let filterMultipleTen = numbers.filter((value) => value % 10 === 0);
console.log(filterMultipleTen);

// -- перебрать (проитерировать) массив при помощи foreach()

numbers.forEach((value) => {
console.log(numbers)
});

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let numbersMap = numbers.map((value) => value * 3);
console.log(numbersMap);

// - создать массив со словами на 15-20 элементов.

let words = [
  'Kiev',
  'Krakov',
  'Odessa',
  'Deli',
  'Bangkok',
  'Agra',
  'Naples',
  'Florence',
  'Budapesht',
  'Madrid',
  'Barcelona',
];

// -- отсортировать его по алфавиту в восходящем порядке.

let sortUp = words.sort();
console.log(sortUp);

// -- отсортировать его по алфавиту  в нисходящем порядке.

let sortDown = words.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  return 1;
});
console.log(sortDown);

// -- отфильтровать слова длиной менее 4х символов

let wordsFilter = words.filter((value) => value.length <= 4);
console.log(wordsFilter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let wordsMap = words.map((value) => `${value}!`);
console.log(wordsMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
  { name: 'vasya', age: 31, status: false },
  { name: 'petya', age: 30, status: true },
  { name: 'kolya', age: 29, status: true },
  { name: 'olya', age: 28, status: false },
  { name: 'max', age: 30, status: true },
  { name: 'anya', age: 31, status: false },
  { name: 'oleg', age: 28, status: false },
  { name: 'andrey', age: 29, status: true },
  { name: 'masha', age: 30, status: true },
  { name: 'olya', age: 31, status: false },
  { name: 'max', age: 31, status: true },
];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((a, b) => a.age - b.age);

users.sort((a, b) => b.age - a.age);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

users.sort((a, b) => a.name.length - b.name.length);

users.sort((a, b) => b.name.length - a.name.length);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let usersWithID = JSON.parse(JSON.stringify(users));

usersWithID.map((value, index) => (value.id = index));
console.log(usersWithID);

// - відсортувати його за індентифікатором

usersWithID.sort((a, b) => a.id - b.id);
console.log(usersWithID);

// -- наисать функцию калькулятора с 2мя числами и колбеком  - колбек еще не проходили

// -- наисать функцию калькулятора с 3мя числами и колбеком

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

let cars = [
  {
    producer: 'subaru',
    model: 'wrx',
    year: 2010,
    color: 'blue',
    type: 'sedan',
    engine: 'ej204x',
    volume: 2,
    power: 400,
  },
  {
    producer: 'subaru',
    model: 'legacy',
    year: 2007,
    color: 'silver',
    type: 'sedan',
    engine: 'ez30',
    volume: 3,
    power: 250,
  },
  {
    producer: 'subaru',
    model: 'tribeca',
    year: 2011,
    color: 'white',
    type: 'jeep',
    engine: 'ej20',
    volume: 2,
    power: 300,
  },
  {
    producer: 'subaru',
    model: 'leone',
    year: 1998,
    color: 'yellow',
    type: 'sedan',
    engine: 'ez20x',
    volume: 2,
    power: 140,
  },
  {
    producer: 'subaru',
    model: 'impreza',
    year: 2014,
    color: 'red',
    type: 'sedan',
    engine: 'ej204x',
    volume: 2,
    power: 200,
  },
  {
    producer: 'subaru',
    model: 'outback',
    year: 2014,
    color: 'red',
    type: 'hachback',
    engine: 'ej204',
    volume: 2,
    power: 165,
  },
  {
    producer: 'bmw',
    model: '115',
    year: 2013,
    color: 'red',
    type: 'hachback',
    engine: 'f15',
    volume: 1.5,
    power: 120,
  },
  {
    producer: 'bmw',
    model: '315',
    year: 2010,
    color: 'white',
    type: 'sedan',
    engine: 'f15',
    volume: 1.5,
    power: 120,
  },
  {
    producer: 'bmw',
    model: '650',
    year: 2009,
    color: 'black',
    type: 'coupe',
    engine: 'f60',
    volume: 6,
    power: 350,
  },
  {
    producer: 'bmw',
    model: '320',
    year: 2012,
    color: 'red',
    type: 'sedan',
    engine: 'f20',
    volume: 2,
    power: 180,
  },
  {
    producer: 'mercedes',
    model: 'e200',
    year: 1990,
    color: 'silver',
    type: 'sedan',
    engine: 'eng200',
    volume: 2,
    power: 180,
  },
  {
    producer: 'mercedes',
    model: 'e63',
    year: 2017,
    color: 'yellow',
    type: 'sedan',
    engine: 'amg63',
    volume: 3,
    power: 400,
  },
  {
    producer: 'mercedes',
    model: 'c250',
    year: 2017,
    color: 'red',
    type: 'sedan',
    engine: 'eng25',
    volume: 2.5,
    power: 230,
  },
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

let carsVolumeLarge = cars.filter((value) => value.volume > 3);
console.log(carsVolumeLarge);

// - двигун = 2л

let carsVolumeSmall = cars.filter((value) => value.volume === 2);
console.log(carsVolumeSmall);

// - виробник мерс

let carsProducerMerc = cars.filter((value) => value.producer === 'mercedes');
console.log(carsProducerMerc);

// - двигун більше 3х літрів + виробник мерседес

let carsVolumeMerc = cars.filter(
  (value) => value.producer === 'mercedes' && value.volume >= 3
);
console.log(carsVolumeMerc);

// - двигун більше 3х літрів + виробник субару

let carsVolumeSubaru = cars.filter(
  (value) => value.producer === 'subaru' && value.volume >= 3
);
console.log(carsVolumeSubaru);

// - сили більше ніж 300

let carsPower = cars.filter((value) => value.power > 300);
console.log(carsPower);

// - сили більше ніж 300 + виробник субару

let carsPowerSubaru = cars.filter(
  (value) => value.producer === 'subaru' && value.power > 300
);
console.log(carsPowerSubaru);

// - мотор серіі ej

let carsEngine = cars.filter((value) => value.engine.includes('ej'));
console.log(carsEngine);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

let carPowerProducerEngine = cars.filter(
  (value) =>
    value.power > 300 &&
    value.producer === 'subaru' &&
    value.engine.includes('ej')
);
console.log(carPowerProducerEngine);

// - двигун меньше 3х літрів + виробник мерседес

let carVolumeMerc = cars.filter(
  (value) => value.volume < 3 && value.producer === 'mercedes'
);
console.log(carVolumeMerc);

// - двигун більше 2л + сили більше 250

let carVolumePower = cars.filter(
  (value) => value.volume > 2 && value.power > 250
);
console.log(carVolumePower);

// - сили більше 250  + виробник бмв

let carPowerProducer = cars.filter(
  (value) => value.power > 250 && value.producer === 'bmw'
);
console.log(carPowerProducer);

// - взять слдующий массив
let usersWithAddress = [
  {
    id: 2,
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
  },
  {
    id: 1,
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 1 },
  },
  {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
  },
  {
    id: 4,
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 90 },
  },
  {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Franko', number: 115 },
  },
  {
    id: 6,
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 2 },
  },
  {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 22 },
  },
  {
    id: 8,
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 43 },
  },
  {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 12 },
  },
  {
    id: 11,
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
  },
  {
    id: 10,
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
  },
];
// -- отсортировать его по id пользователей

usersWithAddress.sort((a, b) => a.id - b.id);

// -- отсортировать его по id пользователей в обратном опрядке
usersWithAddress.sort((a, b) => b.id - a.id);

// -- отсортировать его по возрасту пользователей
usersWithAddress.sort((a, b) => a.age - b.age);

// -- отсортировать его по возрасту пользователей в обратном порядке
usersWithAddress.sort((a, b) => b.age - a.age);

// -- отсортировать его по имени пользователей
usersWithAddress.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});

// -- отсортировать его по имени пользователей в обратном порядке
usersWithAddress.sort((a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  return 1;
});

// -- отсортировать его по названию улицы  в алфавитном порядке

usersWithAddress.sort((a, b) => {
  if (a.address.street > b.address.street) {
    return -1;
  }
  return 1;
});

// -- отсортировать его по номеру дома по возрастанию

usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(usersWithAddress);

// -- отфильтровать (оставить) тех, кто младше 30

let usersYounger = usersWithAddress.filter((value) => value.age < 30);
console.log(usersYounger);

// -- отфильтровать (оставить) тех у кого отрицательный статус

let usersStatus = usersWithAddress.filter((value) => !value.status);
console.log(usersStatus);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let usersStatusYounger = usersWithAddress.filter(
  (value) => !value.status && value.age < 30
);
console.log(usersStatusYounger);

// -- отфильтровать (оставить) тех у кого номер дома четный

let usersNumberEven = usersWithAddress.filter(
  (value) => value.address.number % 2 === 0
);
console.log(usersNumberEven);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

//Зроблено із завданням 5 уроку

// _________________________________

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

let key = 4;

let minIndex = arr.indexOf(key);
let maxIndex = arr.lastIndexOf(key);
console.log(`MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`);

//----------

let minIndex2 = arr.findIndex((value) => value === key);

let maxIndex2;
for (let i = arr.length-1; i>=0; i--) {
  if (arr[i] === key) {
      maxIndex2 = i
      break
  } else (
    maxIndex2 = -1
  )
}

console.log(`MinIndex = ${minIndex2}, MaxIndex = ${maxIndex2}`);

