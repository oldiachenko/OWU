// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые
//                  являются ссылками...`,
//         attrs: [
//              {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//              {/*some props and values*/},
//              {/*...*/},
//              {/*...*/},
//         ]

//    }
// ==============================================

function TagDescription(titleOfTag, action, attrs) {
  this.titleOfTag = titleOfTag;
  this.action = action;
  this.attrs = attrs;
}

function AttrDescription(titleOfAttr, actionOfAttr) {
  this.titleOfAttr = titleOfAttr;
  this.actionOfAttr = actionOfAttr;
}

const aAttrAccesskey = new AttrDescription(
  'accesskey',
  'Активация ссылки с помощью комбинации клавиш.'
);

const aAttrCoords = new AttrDescription(
  'coords',
  'Устанавливает координаты активной области.'
);

const a = new TagDescription('a', 'предназначен для создания ссылок', [
  aAttrAccesskey,
  aAttrCoords,
]);

console.log(a);

//---------------

const divAttrAlign = new AttrDescription(
  'align',
  'Задает выравнивание содержимого тега'
);

const divAttrTitle = new AttrDescription(
  'title',
  'Добавляет всплывающую подсказку к содержимому.'
);

const div = new TagDescription(
  'div',
  'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
  [divAttrAlign, divAttrTitle]
);

console.log(div);

//---------------

const h1Align = new AttrDescription(
  'align',
  'Определяет выравнивание заголовка.'
);

const h1Accesskey = new AttrDescription(
  'accesskey',
  'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
);

const h1 = new TagDescription(
  'h1',
  'представляет собой наиболее важный заголовок первого уровня',
  [h1Align, h1Accesskey]
);

console.log(h1);

//---------------

const spanClass = new AttrDescription(
  'class',
  'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
);

const spanContenteditable = new AttrDescription(
  'contenteditable',
  'Сообщает, что элемент доступен для редактирования пользователем.'
);

const span = new TagDescription(
  'span',
  'предназначен для определения строчных элементов документа',
  [spanClass, spanContenteditable]
);

console.log(span);

//---------------

const inputAccept = new AttrDescription(
  'accept',
  'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
);

const inputAccesskey = new AttrDescription(
  'accesskey',
  'Переход к элементу с помощью комбинации клавиш.'
);

const input = new TagDescription(
  'input',
  'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
  [inputAccept, inputAccesskey]
);

console.log(input);

//---------------

const formAcceptCharset = new AttrDescription(
  'accept-charset',
  'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
);

const formAction = new AttrDescription(
  'action',
  'Адрес программы или документа, который обрабатывает данные формы.'
);

const form = new TagDescription('form', 'устанавливает форму на веб-странице', [
  formAcceptCharset,
  formAction,
]);

console.log(form);

//---------------

const optionDisabled = new AttrDescription(
  'disabled',
  'Заблокировать для доступа элемент списка.'
);

const optionLabel = new AttrDescription(
  'label',
  'Указание метки пункта списка.'
);

const option = new TagDescription(
  'option',
  'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
  [optionDisabled, optionLabel]
);

console.log(option);

//---------------

const selectAutofocus = new AttrDescription(
  'autofocus',
  'Устанавливает, что список получает фокус после загрузки страницы.'
);

const selectForm = new AttrDescription('form', 'Связывает список с формой.');

const select = new TagDescription(
  'select',
  'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
  [selectAutofocus, selectForm]
);

console.log(select);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class TagDescription1 {
  constructor(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
  }
}

class AttrDescription1 {
  constructor(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
  }
}

const aAttrAccesskey1 = new AttrDescription1(
  'accesskey',
  'Активация ссылки с помощью комбинации клавиш.'
);

const aAttrCoords1 = new AttrDescription1(
  'coords',
  'Устанавливает координаты активной области.'
);

const a1 = new TagDescription1('a', 'предназначен для создания ссылок', [
  aAttrAccesskey1,
  aAttrCoords1,
]);

console.log(a1);

//---------------

const divAttrAlign1 = new AttrDescription1(
  'align',
  'Задает выравнивание содержимого тега'
);

const divAttrTitle1 = new AttrDescription1(
  'title',
  'Добавляет всплывающую подсказку к содержимому.'
);

const div1 = new TagDescription1(
  'div',
  'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
  [divAttrAlign1, divAttrTitle1]
);

console.log(div1);

//---------------

const h1Align1 = new AttrDescription1(
  'align',
  'Определяет выравнивание заголовка.'
);

const h1Accesskey1 = new AttrDescription1(
  'accesskey',
  'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
);

const h11 = new TagDescription1(
  'h1',
  'представляет собой наиболее важный заголовок первого уровня',
  [h1Align1, h1Accesskey1]
);

console.log(h11);

//---------------

const spanClass1 = new AttrDescription1(
  'class',
  'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
);

const spanContenteditable1 = new AttrDescription1(
  'contenteditable',
  'Сообщает, что элемент доступен для редактирования пользователем.'
);

const span1 = new TagDescription1(
  'span',
  'предназначен для определения строчных элементов документа',
  [spanClass1, spanContenteditable1]
);

console.log(span1);

//---------------

const inputAccept1 = new AttrDescription1(
  'accept',
  'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
);

const inputAccesskey1 = new AttrDescription1(
  'accesskey',
  'Переход к элементу с помощью комбинации клавиш.'
);

const input1 = new TagDescription1(
  'input',
  'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
  [inputAccept1, inputAccesskey1]
);

console.log(input1);

//---------------

const formAcceptCharset1 = new AttrDescription1(
  'accept-charset',
  'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
);

const formAction1 = new AttrDescription1(
  'action',
  'Адрес программы или документа, который обрабатывает данные формы.'
);

const form1 = new TagDescription1(
  'form',
  'устанавливает форму на веб-странице',
  [formAcceptCharset1, formAction1]
);

console.log(form1);

//---------------

const optionDisabled1 = new AttrDescription1(
  'disabled',
  'Заблокировать для доступа элемент списка.'
);

const optionLabel1 = new AttrDescription1(
  'label',
  'Указание метки пункта списка.'
);

const option1 = new TagDescription1(
  'option',
  'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
  [optionDisabled1, optionLabel1]
);

console.log(option1);

//---------------

const selectAutofocus1 = new AttrDescription1(
  'autofocus',
  'Устанавливает, что список получает фокус после загрузки страницы.'
);

const selectForm1 = new AttrDescription1('form', 'Связывает список с формой.');

const select1 = new TagDescription1(
  'select',
  'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
  [selectAutofocus1, selectForm1]
);

console.log(select1);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
  model: 'GTA',
  producer: 'BMW LTD',
  year: 2020,
  maxSpeed: 200,
  volume: '2l',
  drive: function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
  },
  info: function () {
    console.log(
      `Модель ${this.model}, виробник ${this.producer}, макс швидкість ${this.maxSpeed}, об'єм двигуна ${this.volume}`
    );
  },
  increaseMaxSpeed: function (newSpeed) {
    this.maxSpeed += newSpeed;
    return this.maxSpeed;
  },
  changeYear: function (newValue) {
    this.year = newValue;
    return this.year;
  },
  addDriver: function (driver) {
    this.driver = driver;
    return this.driver;
  },
};

car.drive();
car.info();
console.log(car.increaseMaxSpeed(50));
console.log(car.changeYear(2019));

let driver = {
  name: 'John',
  exp: 5,
  status: true,
};

console.log(car.addDriver(driver));
console.log(car);

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Car(model, producer, year, maxSpeed, volume) {
  this.model = model;
  this.producer = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.volume = volume;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
  };
  this.info = function () {
    console.log(
      `Модель ${this.model}, виробник ${this.producer}, макс швидкість ${this.maxSpeed}, об'єм двигуна ${this.volume}`
    );
  };
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
    return this.maxSpeed;
  };
  this.changeYear = function (newValue) {
    this.year = newValue;
    return this.year;
  };
  this.addDriver = function (driver) {
    this.driver = driver;
    return this.driver;
  };
}

let bmw = new Car('GTA', 'BMW LTD', 2020, 200, '2l');

console.log(bmw);
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(100);
bmw.changeYear(2021);
bmw.addDriver({ name: 'John', exp: 5, status: true });
console.log(bmw);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class CarClass {
  constructor(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
  }

  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }
  info() {
    console.log(
      `Модель ${this.model}, виробник ${this.producer}, макс швидкість ${this.maxSpeed}, об'єм двигуна ${this.volume}`
    );
  }
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
    return this.maxSpeed;
  }
  changeYear(newValue) {
    this.year = newValue;
    return this.year;
  }
  addDriver(driver) {
    this.driver = driver;
    return this.driver;
  }
}

let bmwClass = new CarClass('GTA', 'BMW LTD', 2020, 200, '2l');

console.log(bmwClass);
bmwClass.drive();
bmwClass.info();
bmwClass.increaseMaxSpeed(100);
bmwClass.changeYear(2021);
bmwClass.addDriver({ name: 'John', exp: 5, status: true });
console.log(bmwClass);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Cinderella {
  constructor(name, age, legSize) {
    this.name = name;
    this.age = age;
    this.legSize = legSize;
  }
}

let ann = new Cinderella('Ann', 20, 37);
let jane = new Cinderella('Jane', 22, 36);
let katrin = new Cinderella('Katrin', 19, 37);
let oksana = new Cinderella('Oksana', 22, 35);
let olga = new Cinderella('Olga', 28, 38);
let joanna = new Cinderella('Joanna', 25, 36);
let kate = new Cinderella('Kate', 18, 36);
let lily = new Cinderella('Lily', 18, 37);
let sandra = new Cinderella('Sandra', 26, 38);
let susan = new Cinderella('Susan', 30, 37);

let cinderellaArray = [];
cinderellaArray.push(
  ann,
  jane,
  katrin,
  oksana,
  olga,
  joanna,
  kate,
  lily,
  sandra,
  susan
);

class Prince {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}

let john = new Prince('John', 24, 35);

for (let value in cinderellaArray) {
  if (cinderellaArray[value].legSize === john.shoeSize) {
    console.log(`${john.name} and ${cinderellaArray[value].name} are couple`);
  }
}

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Cinderella1 (name, age, legSize) {
  this.name = name;
  this.age = age;
  this.legSize = legSize;
}

let ann1 = new Cinderella1('Ann', 20, 37);
let jane1 = new Cinderella1('Jane', 22, 36);
let katrin1 = new Cinderella1('Katrin', 19, 37);
let oksana1 = new Cinderella1('Oksana', 22, 35);
let olga1 = new Cinderella1('Olga', 28, 38);
let joanna1 = new Cinderella1('Joanna', 25, 36);
let kate1 = new Cinderella1('Kate', 18, 36);
let lily1 = new Cinderella1('Lily', 18, 37);
let sandra1 = new Cinderella1('Sandra', 26, 38);
let susan1 = new Cinderella1('Susan', 30, 37);

let cinderellaArray1 = [ann1, jane1, katrin1, oksana1, olga1, joanna1, kate1, lily1, sandra1, susan1]

function Prince1 (name, age, shoeSize) {
  this.name = name;
  this.age = age;
  this.shoeSize = shoeSize;
  this.cinderellaSearch = function (array) {
    for (let value  in array) {
      if (array[value].legSize === this.shoeSize) {
        console.log(
          `${this.name} and ${array[value].name} are couple`
        );
      }
    }
  }
}

let jack = new Prince1('Jack', 24, 35);

jack.cinderellaSearch(cinderellaArray1);