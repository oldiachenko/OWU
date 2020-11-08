// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

class CarNew {
  constructor(model, engine, name, age, experience, price, year) {
    this.model = model;
    this.engine = engine;
    this.owner = { name: name, age: age, experience: experience };
    this.price = price;
    this.year = year;
  }
}

let lexus = new CarNew('lexus', 200, 'Fil', 38, 18, 50000, 2019);
let fiat = new CarNew('fiat', 100, 'Ann', 25, 5, 15000, 2018);
let mazda = new CarNew('mazda', 120, 'Jane', 30, 7, 18000, 2019);
let bmw = new CarNew('bmw', 250, 'Jack', 30, 11, 20000, 2020);
let honda = new CarNew('honda', 150, 'Susan', 32, 6, 22000, 2017);
let lanos = new CarNew('lanos', 90, 'Oleg', 20, 2, 8000, 2018);
let kia = new CarNew('kia', 120, 'Anton', 35, 15, 15000, 2019);


// Зробити половині автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

function engineRepaire (car) {
  car.engine *= 1.1;
}


engineRepaire(fiat);
engineRepaire(bmw);
engineRepaire(lanos);
engineRepaire(kia);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

function newDrivers(car, name, age, experience) {
 car.owner.name = name;
 car.owner.age = age;
 car.owner.experience = experience;
};

newDrivers(fiat, 'Ivan', 35, 15)
newDrivers(bmw, 'Dima', 28, 3);
newDrivers(lanos, 'Max', 33, 5);
newDrivers(kia, 'Igor', 40, 20);


// Для початку вкладіть всі наші створені автомобілі в масив cars.

let cars = [lexus, fiat, mazda, bmw, honda, lanos, kia];

// Далі необхідно  брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

for (let key in cars) {
 if (key%2 !== 0) {
   cars[key].engine *= 1.1;
   cars[key].price *= 1.05;
 }
}


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

for (let key in cars) {
  for (let key2 in cars[key]) {
    if (cars[key][key2].experience <= 5 && cars[key][key2].age >= 25) {
      ++cars[key][key2].experience
    }
  }
}


// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let totalPrice = 0;
for (let value in cars) {
totalPrice += cars[value].price;
}


console.log(totalPrice)