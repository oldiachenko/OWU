// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let div = document.createElement('div');
div.setAttribute('id', 'text');
div.style.backgroundColor = 'green';
div.style.width = '100px';
div.style.height = '100px';

let btn = document.createElement('button');
btn.innerText = 'Click to delete green element';

document.body.appendChild(div);
document.body.appendChild(btn);

btn.onclick = () => {
div.hidden ? div.hidden = false : div.hidden = true
};

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btnHideItself = document.createElement('button');
btnHideItself.innerText = 'Btn which hides itself';
btnHideItself.style.marginLeft = '30px';

document.body.appendChild(btnHideItself);

btnHideItself.onclick = () => {
  btnHideItself.style.display = 'none';
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btnAge = document.getElementById('btnAge');
let input = document.forms.formAge.age;

btnAge.addEventListener('click', (ev) => {
  ev.preventDefault();
  let age = input.value;
  age >= 18 ? alert(`It's OK`) : alert(`${age} is less than 18`);
});

// - Создайте меню, которое раскрывается/сворачивается при клике

let btnMenu = document.querySelector('.btnMenu');
let menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
  if (menu.hasAttribute('class', 'hidden')) {
    menu.removeAttribute('class', 'hidden');
    btnMenu.innerText = 'Hide menu';
  } else {
    menu.setAttribute('class', 'hidden');
    btnMenu.innerText = 'Show menu';
  }
});

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
  {
    title: 'Title1',
    body: 'dkfjkdfjg',
  },
  {
    title: 'Title2',
    body: 'dghruiur',
  },
  {
    title: 'Title3',
    body: 'nmjdhe',
  },
  {
    title: 'Title4',
    body: 'njhey',
  },
  {
    title: 'Title5',
    body: 'mkhdga',
  },
];

comments.forEach((value) => {
  let title = document.createElement('h4');
  title.innerText = `Title: ${value.title}`;
  let body = document.createElement('p');
  body.innerText = `Comment: ${value.body}`;

  title.style.color = 'brown';

  let btnComments = document.createElement('button');
  btnComments.innerText = 'Hide Comment';

  btnComments.onclick = () => {
    if (!body.hasAttribute('class', 'hidden')) {
      body.setAttribute('class', 'hidden');
      btnComments.innerText = 'Show Comment';
    } else {
      body.removeAttribute('class', 'hidden');
      btnComments.innerText = 'Hide Comment';
    }
  };

  document.body.appendChild(title);
  document.body.appendChild(body);
  document.body.appendChild(btnComments);
});

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.forms.form1;
let form2 = document.forms.form2;
let btnForms = document.querySelector('.btnForms');

btnForms.onclick = () => {
  console.log(
    form1.input1.value,
    form1.input2.value,
    form2.input1.value,
    form2.input2.value
  );
};

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

function table(trNumber, tdNumber, element) {
  let table = document.createElement('table');

  for (let i = 0; i < trNumber; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < tdNumber; i++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }
  }
  element.appendChild(table);
}

table(5, 3, document.body);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const trFromForm = document.forms.form3.rowNumber;
const tdFromForm = document.forms.form3.cellNumber;
const contentFromForm = document.forms.form3.content;
const btnTable = document.forms.form3.submit;

const tableDiv = document.getElementById('tableDiv');

btnTable.onclick = (ev) => {
  ev.preventDefault();
  const table = document.createElement('table');
  for (let i = 0; i < trFromForm.value; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < tdFromForm.value; i++) {
      let td = document.createElement('td');
      td.innerText = contentFromForm.value;
      tr.appendChild(td);
    }
  }
  tableDiv.appendChild(table);

};

// (Додаткова частина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let imgArray = [
  {
    id: 1,
    img: '1.jpg',
  },
  {
    id: 2,
    img: '2.jpg',
  },
  {
    id: 3,
    img: '3.jpg',
  },
];

let divCarousel = document.getElementById('carousel');
let img = document.createElement('img');
let btnLeft = document.createElement('button');
let btnRight = document.createElement('button');

btnLeft.innerText = 'Left';
btnRight.innerText = 'Right';

img.style.width = '400px';

let index = 0;

img.src = imgArray[index].img;

divCarousel.appendChild(img);
divCarousel.appendChild(btnLeft);
divCarousel.appendChild(btnRight);

btnRight.onclick = () => {
  index + 1 > imgArray.length - 1 ? (index = 0) : (index = index + 1);
  img.src = imgArray[index].img;
};

btnLeft.onclick = () => {
  index - 1 < 0 ? (index = imgArray.length - 1) : (index = index - 1);
  img.src = imgArray[index].img;
};

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let words = ['yes', 'no', 'hi'];

const btnWords = document.forms.form4.submitWords;

btnWords.onclick = (ev) => {
  ev.preventDefault();
  const wordFromForm = document.forms.form4.words.value;
  for (let i = 0; i < words.length; i++) {
    if (wordFromForm === words[i]) {
      alert('Forbidden Word');
    }
  }
};

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

const btnSent = document.forms.form5.submitSent;

btnSent.onclick = (ev) => {
  ev.preventDefault();
  const sentFromForm = document.forms.form5.sentence.value;
  for (let i = 0; i < words.length; i++) {
    if (sentFromForm.includes(words[i])) {
      alert('Forbidden Word');
    }
  }
};

// -- взять массив пользователей
let usersWithAddress = [
  {
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
  },
  {
    id: 2,
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'Kyiv', street: 'Shevchenko', number: 1 },
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
    address: { city: 'Ternopil', street: 'Shevchenko', number: 90 },
  },
  {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 115 },
  },
  {
    id: 6,
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Kyiv', street: 'Shevchenko', number: 2 },
  },
  {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Ternopil', street: 'Shevchenko', number: 22 },
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
    address: { city: 'Kyiv', street: 'Shevchenko', number: 12 },
  },
  {
    id: 10,
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
  },
  {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Ternopil', street: 'Shevchenko', number: 121 },
  },
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let result = document.getElementById('result');
let btnFilter = document.getElementById('btnFilter');
let checkFalse = document.forms.form6.false;
let checkAge = document.forms.form6.age;
let checkCity = document.forms.form6.city;

function render (array) {
  array.forEach((value) => {
    let content = document.createElement('div');
    content.innerText = `Name: ${value.name}, Age: ${value.age}, Status: ${value.status}, City: ${value.address.city}`
result.appendChild(content)
  })
  return result
}

render(usersWithAddress);

btnFilter.onclick = () => {
  arrayCopy = JSON.parse(JSON.stringify(usersWithAddress))

checkFalse.checked ? arrayCopy = arrayCopy.filter(value => !value.status) : arrayCopy;
checkAge.checked
  ? (arrayCopy = arrayCopy.filter((value) => value.age >= 29))
  : arrayCopy;
checkCity.checked
  ? (arrayCopy = arrayCopy.filter((value) => value.address.city === 'Kyiv'))
  : arrayCopy;

  result.innerText = '';
  render(arrayCopy)
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


document.onmouseup = function () {
  let selectedText = window.getSelection().toString();
  console.log(selectedText)

}

