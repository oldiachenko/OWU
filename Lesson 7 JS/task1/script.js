// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

const dog = {
  name: 'Sparky',
  tale: true,
  color: 'white',
  age: 5,
  legs: 4,
};

const man = {
  name: 'Ivan',
  age: 35,
  wife: true,
  child: 1,
  height: 179,
};

const car = {
  color: 'black',
  style: 'sedan',
  year: '2019',
  mark: 'BMW',
  registered: true,
};

const flat = {
  meters: 48,
  address: {
    city: 'Kyiv',
    street: 'Schevchenko',
    building: 23,
    app: 45,
  },
  gas: false,
  tel: '0445679803',
  owner: 'Petrov. A.I.',
};

const book = {
  title: 'Harry Potter',
  author: 'J. Rowling',
  film: true,
  published: 1997,
  pages: 356,
};

// -- Створити масив та вивести його в консоль:
// - з 5 собак

const dogs = {
  pitbul: {
    name: 'Jack',
    age: 3,
    sex: 'male',
  },
  terrier: {
    name: 'Rose',
    age: 2,
    sex: 'female',
  },
  bigl: {
    name: 'Russel',
    age: 2.4,
    sex: 'male',
  },
  haski: {
    name: 'Lussy',
    age: 1,
    sex: 'female',
  },
  poodle: {
    name: 'Suzy',
    age: 0.7,
    sex: 'female',
  },
};

console.log(dogs);
// - 3 5 людей

const students = {
  number1: {
    name: 'Petro',
    surname: 'Ivanov',
    avvGrade: 96,
    group: 3,
  },
  number2: {
    name: 'Oleg',
    surname: 'Semenov',
    avvGrade: 98,
    group: 3,
  },
  number3: {
    name: 'Iryna',
    surname: 'Baieva',
    avvGrade: 95,
    group: 4,
  },
  number4: {
    name: 'Olena',
    surname: 'Bashtova',
    avvGrade: 99,
    group: 4,
  },
  number5: {
    name: 'Olga',
    surname: 'Orlova',
    avvGrade: 87,
    group: 4,
  },
};
console.log(students);
// - з 5 автомобілів

const carColors = {
  mercedes: 'black',
  shkoda: 'white',
  toyota: 'silver',
  fiat: 'pink',
  lexus: 'grey',
};

console.log(carColors);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок

const house = {
  rooms: 5,
  floors: 2,
  address: {
    country: 'Ukraine',
    city: 'Odessa',
    street: 'Deribasivska',
    building: 3,
  },
  facilities: ['kitchen', 'conditioner', 'parking', 'WiFi'],
  location: 'center'
};

// - водій

const driver = {
  person: {
    name: 'Igor',
    surname: 'Petrov',
    age: 30,
  },
  license: true,
  experienceYears: 10,
  experienceCars: ['Audi', 'BMW', 'Peugeot'],
  crash: 0,
};

// - іграшку

const toy = {
  type: 'doll',
  height: 40,
  price: 300,
  dress: {
    color: 'pink',
    material: 'cotton'
  },
  suppliers: ['Toy land', 'Ghildren Joy', 'Happy Baby']
}

// - стіл
const table = {
  height: 40,
  weight: 2,
  material: 'wood',
  materialType: ['pine', 'oak', 'ash'],
  parameters: {
    legs: 4,
    purpose: 'office',
    color: ['dark brown', 'brown', 'light brown']
  },
};

// - сумка

const bag = {
  style: 'shopper',
  color: ['black', 'grey', 'red'],
  price: 300,
  prodused: {
    country: 'Indonesia',
    supplier: 'Gucci LLC',
    countryOfOrigin: 'Italy',
  },
  store: 'Gucci'
}

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
      ];
      
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users [7].status);
// - статус Максима
console.log(users[10].status);
// - ім'я передостаннього об'єкту
console.log(users[9].name);
// - ім'я третього об'єкта
console.log(users[2].name);
// - вік Олега
console.log(users[6].age);
// - вік Олі
console.log(users[9].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].age, users[4].name);
// - вік + сатус Анни
console.log(users[5].age, users[5].status);

