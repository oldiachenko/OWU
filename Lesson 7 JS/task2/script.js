// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let person = {
  name: 'Vasya',
  age: 17,
  country: 'Ukraine',
};
let book = {
  title: 'War and Peace',
  author: 'Lev Tolstoy',
  year: 1863,
};
let cat = {
  tale: true,
  color: 'red',
  breed: 'siamese',
};
let film = {
  screenwriter: 'J. Russel',
  producer: 'A. Jones',
  oscar: true,
};
let student = {
  number: 1,
  grade: 78,
  status: true,
};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let jobPosition = {
  job: 'dev',
  skills: ['java', 'js'],
  sallary: {
    firstYear: 300,
    next: 700,
  },
};

let animals = {
  dog: {
    tale: true,
    legs: 4,
    color: 'grey',
  },
  rabbit: {
    fur: true,
    nickname: 'Whity',
  },
  bird: ['brown', 'black', 'yellow'],
};

let car = {
  repaire: true,
  used: true,
  brand: {
    name: 'shkoda',
    country: 'Czech',
  },
  colorsAvailable: ['green', 'pink', 'silver', 'white'],
};

let coat = {
  colorCoat: ['brown', 'yellow', 'red'],
  produced: {
    origin: 'China',
    season: 'autumn-winter',
  },
  buttons: [true, 7],
  belt: true,
  sex: 'female',
};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (let value in person) {
  console.log(value)
};

for (let value in book) {
  console.log(value)

};for (let value in cat) {
  console.log(value)

};for (let value in film) {
  console.log(value)
};

for (let value in student) {
  console.log(value)
};

for (let value in jobPosition) {
  console.log(value);
}
for (let value in jobPosition.sallary) {
  console.log(value);
}

for (let value in animals) {
  console.log(value);
}
for (let value in animals.dog) {
  console.log(value);
}
for (let value in animals.rabbit) {
  console.log(value);
}

for (let value in car) {
  console.log(value);
}
for (let value in car.brand) {
  console.log(value);
}

for (let value in coat) {
  console.log(value);
}
for (let value in coat.produced) {
  console.log(value);
}

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
let personKeys = Object.keys(person);
console.log(personKeys)

let bookKeys = Object.keys(book);
console.log(bookKeys);

let catKeys = Object.keys(cat);
console.log(catKeys);

let filmKeys = Object.keys(film);
console.log(filmKeys);

let studentKeys = Object.keys(student);
console.log(studentKeys);

let jobPositionKeys = [
  ...Object.keys(jobPosition),
  ...Object.keys(jobPosition.sallary),
];
console.log(jobPositionKeys);

let animalsKeys = [
  ...Object.keys(animals),
  ...Object.keys(animals.dog),
  ...Object.keys(animals.rabbit),
];
console.log(animalsKeys);

let carKeys = [...Object.keys(car), ...Object.keys(car.brand)];
console.log(carKeys);

let coatKeys = [...Object.keys(coat), ...Object.keys(coat.produced)];
console.log(coatKeys);

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
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

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
  {
    name: 'Brussel',
    population: 19238474,
    country: 'Belgium',
    region: 'Brussels-Capital Region',
  },
  {
    name: 'Kyiv',
    population: 4580657,
    country: 'Ukraine',
    region: 'Kyiv',
  },
  {
    name: 'Barcelona',
    population: 489567,
    country: 'Spain',
    region: 'northeastern Spain',
  },
  {
    name: 'Agra',
    population: 478579856,
    country: 'India',
    region: 'Uttar Pradesh',
  },
  {
    name: 'Izmail',
    population: 78362,
    country: 'Ukraine',
    region: 'Odessa region',
  },
  {
    name: 'Fastiv',
    population: 57867,
    country: 'Ukraine',
    region: 'Kyiv region',
  },
  {
    name: 'Bila Tserkva',
    population: 8596077,
    country: 'Ukraine',
    region: 'Kyiv region',
  },
  {
    name: 'Konotop',
    population: 78345,
    country: 'Ukraine',
    region: 'Sumy region',
  },
  {
    name: 'Dubno',
    population: 594765,
    country: 'Ukraine',
    region: 'Rivne region',
  },
  {
    name: 'Ostrog',
    population: 7487954,
    country: 'Ukraine',
    region: 'Rivne region',
  },
];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let carsDriver = [
  {
    model: 'fiat',
    year: 1976,
    power: 78,
    color: 'red',
    driver: {
      name: 'Petro',
      age: 34,
      sex: 'male',
      experience: 5,
    },
  },
  {
    model: 'honda',
    year: 2010,
    power: 87,
    color: 'grey',
    driver: {
      name: 'Oleg',
      age: 43,
      sex: 'male',
      experience: 8,
    },
  },
  {
    model: 'mazda',
    year: 2009,
    power: 90,
    color: 'white',
    driver: {
      name: 'Ira',
      age: 39,
      sex: 'female',
      experience: 10,
    },
  },
  {
    model: 'volvo',
    year: 2012,
    power: 97,
    color: 'yellow',
    driver: {
      name: 'Tetiana',
      age: 23,
      sex: 'female',
      experience: 4,
    },
  },
  {
    model: 'ford',
    year: 2018,
    power: 92,
    color: 'black',
    driver: {
      name: 'Igor',
      age: 48,
      sex: 'male',
      experience: 15,
    },
  },
  {
    model: 'chevrolet',
    year: 2019,
    power: 88,
    color: 'pink',
    driver: {
      name: 'Vadim',
      age: 44,
      sex: 'male',
      experience: 25,
    },
  },
  {
    model: 'dodge',
    year: 2017,
    power: 97,
    color: 'blue',
    driver: {
      name: 'Anton',
      age: 19,
      sex: 'male',
      experience: 1,
    },
  },
  {
    model: 'bentley',
    year: 2000,
    power: 90,
    color: 'brown',
    driver: {
      name: 'Dima',
      age: 46,
      sex: 'male',
      experience: 9,
    },
  },
  {
    model: 'audi',
    year: 1999,
    power: 79,
    color: 'silver',
    driver: {
      name: 'Ivanna',
      age: 45,
      sex: 'female',
      experience: 25,
    },
  },
  {
    model: 'kia',
    year: 2004,
    power: 82,
    color: 'green',
    driver: {
      name: 'Vlad',
      age: 34,
      sex: 'male',
      experience: 13,
    },
  },
];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

let iCars = 0;
while (iCars < cars.length) {
  console.log(cars[iCars]);
  iCars++;
}

let iCities = 0;
while (iCities < cities.length) {
  console.log(cities[iCities]);
  iCities++;
}

let iCarsDriver = 0;
while (iCarsDriver < carsDriver.length) {
  console.log(carsDriver[iCarsDriver]);
  iCarsDriver++;
}

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars.length; i++) {
 console.log(cars[i])
}

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

for (let i = 0; i < carsDriver.length; i++) {
  console.log(carsDriver[i]);
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (let value of cars) {
  console.log(value)
};

for (let value of cities) {
  console.log(value)
};

for (let value of carsDriver) {
  console.log(value)
};

// - взять объекты из задания 1 и превратить каждый в json.

let personJSON = JSON.stringify(person);
let bookJSON = JSON.stringify(book);
let catJSON = JSON.stringify(cat);
let filmJSON = JSON.stringify(film);
let studentJSON = JSON.stringify(student);

// - взять json из задания 11 и превратить их обратно в объекты.

let clonedPerson = JSON.parse(personJSON);
let cloneBook = JSON.parse(bookJSON);
let clonedCat = JSON.parse(catJSON);
let clonedFilm = JSON.parse(filmJSON);
let clonedStudent = JSON.parse(studentJSON);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (let value of cars) {
  let carsJSON = JSON.stringify(value);
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let value of cities) {
  let citiesJSON = JSON.stringify(value);
}

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

for (let value of carsDriver) {
  let carsDriverJSON = JSON.stringify(value);
  let clonedCarsDriver = JSON.parse(carsDriverJSON);
}

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users = [
  {
    name: 'John',
    age: 35,
    skills: ['node js', 'java'],
  },
  {
    name: 'Jane',
    age: 28,
    skills: ['C++', 'Angular'],
  },
  {
    name: 'Jack',
    age: 25,
    skills: ['React', 'js'],
  },
];

for (let value of users) {
  console.log(value)
  for (let value2 in value.skills) {
    console.log(value.skills[value2]);
  }
}

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let skillsArray = [];
for (let value of users) {
  for (let value2 in value.skills) {
    skillsArray.push(value.skills[value2]);
  }
}
console.log(skillsArray);

// - За допомогою 2х циклів проітеррувати  даний масив і масив кожного об'єкта.
let users1 = [
  { name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
  { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
  { name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo'] },
  { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
  { name: 'max', age: 30, status: true, skills: ['mysql', 'mongo'] },
];

for (let value of users1) {
  console.log(value);
  for (let value2 in value.skills) {
    console.log(value.skills[value2]);
  }
}

// - З масиву users2 за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let users2 = [
  {
    name: 'vasya',
    age: 31,
    status: false,
    address: {
      city: 'Lviv',
      country: 'Ukraine',
      street: 'Shevchenko',
      houseNumber: 1,
    },
  },
  {
    name: 'petya',
    age: 30,
    status: true,
    address: {
      city: 'New York',
      country: 'USA',
      street: 'East str',
      houseNumber: 21,
    },
  },
  {
    name: 'kolya',
    age: 29,
    status: true,
    address: {
      city: 'Budapest',
      country: 'Hungary',
      street: 'Kuraku',
      houseNumber: 78,
    },
  },
  {
    name: 'olya',
    age: 28,
    status: false,
    address: {
      city: 'Prague',
      country: 'Czech',
      street: 'Paster',
      houseNumber: 56,
    },
  },
  {
    name: 'max',
    age: 30,
    status: true,
    address: {
      city: 'Istanbul',
      country: 'Turkey',
      street: 'Mikar',
      houseNumber: 39,
    },
  },
  {
    name: 'anya',
    age: 31,
    status: false,
    address: {
      city: 'Rio',
      country: 'Brasil',
      street: 'Ronaldi',
      houseNumber: 5,
    },
  },
  {
    name: 'oleg',
    age: 28,
    status: false,
    address: {
      city: 'Montreal',
      country: 'Canada',
      street: 'Acusto',
      houseNumber: 90,
    },
  },
  {
    name: 'andrey',
    age: 29,
    status: true,
    address: {
      city: 'Quebeck',
      country: 'Canada',
      street: 'Binaro',
      houseNumber: 33,
    },
  },
  {
    name: 'masha',
    age: 30,
    status: true,
    address: {
      city: 'Moscow',
      country: 'Russia',
      street: 'Gogolia',
      houseNumber: 1,
    },
  },
  {
    name: 'olya',
    age: 31,
    status: false,
    address: {
      city: 'Portland',
      country: 'USA',
      street: 'Forest str',
      houseNumber: 4,
    },
  },
  {
    name: 'max',
    age: 31,
    status: true,
    address: {
      city: 'Cairo',
      country: 'Egypt',
      street: 'Seashore',
      houseNumber: 45,
    },
  },
];

let usersAddress = [];

for (let value of users2) {
  for (let value2 in value) {
    if (value2 === 'address') {
      usersAddress.push(value[value2]);
    }
  }
}
console.log(usersAddress);

// - За допомоги циклу проітерувати  масив users2, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

let bodyDiv = document.createElement('div');
document.body.appendChild(bodyDiv);

for (let userElement of users2) {
  let userDiv = document.createElement('div');
  userDiv.innerText = `Name: ${userElement.name}, Age: ${userElement.age}, Status: ${userElement.status}, Address: city - ${userElement.address.city}, country - ${userElement.address.country}, street - ${userElement.address.street}, house number - ${userElement.address.houseNumber}`;
  bodyDiv.appendChild(userDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let bodyDiv2 = document.createElement('div');
document.body.appendChild(bodyDiv2);

for (let userElement of users2) {
  let userDiv2 = document.createElement('div');
  bodyDiv2.appendChild(userDiv2);
  let userNameDiv = document.createElement('div');
  userNameDiv.innerText = `Name: ${userElement.name}`;
  let userAgeDiv = document.createElement('div');
  userAgeDiv.innerText = `Age: ${userElement.age}`;
  let userStatusDiv = document.createElement('div');
  userStatusDiv.innerText = `Status: ${userElement.status}`;
  let userAddressDiv = document.createElement('div');
  userAddressDiv.innerText = `Address: city - ${userElement.address.city}, country - ${userElement.address.country}, street - ${userElement.address.street}, house number - ${userElement.address.houseNumber}`;
  userDiv2.appendChild(userNameDiv);
  userDiv2.appendChild(userAgeDiv);
  userDiv2.appendChild(userStatusDiv);
  userDiv2.appendChild(userAddressDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let bodyDiv3 = document.createElement('div');
document.body.appendChild(bodyDiv3);

for (let userElement of users2) {
  let userDiv3 = document.createElement('div');
  bodyDiv3.appendChild(userDiv3);
  let userNameDiv = document.createElement('div');
  userNameDiv.innerText = `Name: ${userElement.name}`;
  userDiv3.appendChild(userNameDiv);
  let userAgeDiv = document.createElement('div');
  userAgeDiv.innerText = `Age: ${userElement.age}`;
  userDiv3.appendChild(userAgeDiv);
  let userStatusDiv = document.createElement('div');
  userStatusDiv.innerText = `Status: ${userElement.status}`;
  userDiv3.appendChild(userStatusDiv);
  let userAddressDiv = document.createElement('div');
  userDiv3.appendChild(userAddressDiv);
  let userAddressCity = document.createElement('div');
  userAddressCity.innerText = `Address: city - ${userElement.address.city}`;
  userAddressDiv.appendChild(userAddressCity);
  let userAddressCountry = document.createElement('div');
  userAddressCountry.innerText = `Country - ${userElement.address.country}`;
  userAddressDiv.appendChild(userAddressCountry);
  let userAddressStreet = document.createElement('div');
  userAddressStreet.innerText = `Street - ${userElement.address.street}`;
  userAddressDiv.appendChild(userAddressStreet);
  let userAddressHNumber = document.createElement('div');
  userAddressHNumber.innerText = `House number - ${userElement.address.houseNumber}`;
  userAddressDiv.appendChild(userAddressHNumber);
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

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
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив


for (let users of usersWithId) {
  for (let cities of citiesWithId) {
    if (users.id === cities.user_id) {
      users.address = cities;
    }
  }
}

console.log(usersWithId);


// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]




