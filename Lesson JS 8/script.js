// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textarea = document.getElementById('textarea');
textarea.oninput = function () {
  let text = textarea.value;
  localStorage.setItem('text', text);
};
textarea.value = localStorage.getItem('text');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

let formElements = document.forms.form;

function saveToLS (element) {
  for (let i = 0; i < element.length; i++) {
    let elem = element[i];
    if (elem.type === 'checkbox' || elem.type === 'radio' ) {
      elem.checked ? elem.value = true : elem.value = false
    }
      localStorage.setItem(elem.id, elem.value);
  }
}

function saveFromLS (element) {
  for (let i = 0; i < element.length; i++) {
   element[i].value = localStorage.getItem(element[i].id)
   if (element[i].value === 'true') {
     element[i].setAttribute('checked', 'checked')
   }
  }
}

saveFromLS(formElements);

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let area = document.forms.form1.text1;
let save = document.forms.form1.btnSave;
let left = document.getElementById("btn_left");
let right = document.getElementById('btn_right');

save.onclick = (ev) => {
  ev.preventDefault()
  localStorage.setItem(localStorage.length+1, area.value)
}

left.onclick = () => {
  let index;
  for (key in localStorage) {
    if (area.value === localStorage.getItem(key)) {
      index = key
    }

  }
  if (index === '1') {
    return
  }
  area.value = localStorage.getItem(index-1)
}

right.onclick = () => {
  let index;
  for (key in localStorage) {
    if (area.value === localStorage.getItem(key)) {
      index = key;
    }
  }
   if (index === localStorage.length.toString()) {
    return;
  }

  area.value = localStorage.getItem(+index + 1);
};

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let form = document.forms.form2;
const usersLS = 'Users';
let tempUser = {};
let card = document.getElementById('card');

form.submit.onclick = (ev) => {
  let user = { ...tempUser };
  tempUser = {};
  for (let i = 0; i < form.children.length; i++) {
    let userElement = form.children[i];
    if (userElement.id && userElement.id !== 'submit') {
      user[userElement.id] = userElement.value;
    }
  }
  if (!user.id) {
    user.id = new Date().getTime();
  }

  saveUser(user);
};
getDataFromLS();

function saveUser(user) {
  if (localStorage.hasOwnProperty(usersLS)) {
    let arrayUser = JSON.parse(localStorage.getItem(usersLS));
    let find = arrayUser.find((value) => value.id === user.id);
    if (find) {
      let filter = arrayUser.filter((value) => value.id !== user.id);
      filter.push(user);
      localStorage.setItem('Users', JSON.stringify(filter));
    } else {
      arrayUser.push(user);
      localStorage.setItem('Users', JSON.stringify(arrayUser));
    }
  } else {
    localStorage.setItem('Users', JSON.stringify([user]));
  }
}

function getDataFromLS() {
  if (localStorage.hasOwnProperty(usersLS)) {
    let arrayUser = JSON.parse(localStorage.getItem(usersLS));
    for (let user of arrayUser) {
      card.appendChild(createCard(user));
    }
  }
}

function createCard(user) {
  let div = document.createElement('div');
  for (let key in user) {
    let p = document.createElement('p');
    p.innerText = key + ' : ' + user[key];
    div.appendChild(p);
  }
  div.style = 'width: 200px; border: black 1px solid; float: left';

  let btnDelete = document.createElement('button');
  let btnEdit = document.createElement('button');

  btnDelete.innerText = 'DELETE';
  btnEdit.innerText = 'EDIT';

  btnDelete.onclick = () => {
    deleteUser(user.id);
  };

  btnEdit.onclick = () => {
    editUser(user.id);
  };
  div.appendChild(btnDelete);
  div.appendChild(btnEdit);

  return div;
}

function deleteUser(id) {
  let arrayUser = JSON.parse(localStorage.getItem(usersLS));
  let filter = arrayUser.filter((value) => value.id !== id);
  localStorage.setItem(usersLS, JSON.stringify(filter));
  location.reload();
}

function editUser(id) {
  let arrayUser = JSON.parse(localStorage.getItem(usersLS));
  let find = arrayUser.find((value) => value.id === id);
  for (let i = 0; i < form.children.length; i++) {
    let userElement = form.children[i];
    if (userElement.id && userElement.id !== 'submit') {
      for (let key in find) {
        if (userElement.id === key) {
          userElement.value = find[key];
        }
      }
    }
  }
  tempUser = find;
}
