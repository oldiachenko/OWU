// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
let textByID = document.getElementById('div_id').textContent;
console.log(textByID);

let textByTag = document.getElementsByTagName('div');
for (tagContent of textByTag) {
  console.log(tagContent.innerText);
}

let textByClass = document.getElementsByClassName('div_class');
for (classContent of textByClass) {
  console.log(classContent.innerText);
}

// - змінити цей текст використовуючи селектори id, class,  tag
let changeDivId = document.getElementById('div_id');
changeDivId.innerText = 'First Change';

for (textChange of textByTag) {
  textChange.innerText = 'Second Change'
}

for (textChange of textByClass) {
  textChange.innerText = 'Third Change';
}

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

changeDivId.style.height = '10px';
changeDivId.style.width = '1px';

for (styleChange of textByTag) {
  styleChange.style.height = '20px';
  styleChange.style.width = '20px';
}

for (styleChange of textByClass) {
  styleChange.style.height = '30px';
  styleChange.style.width = '30px';
}


// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

let table = document.createElement('table');
let tr = document.createElement('tr');
tr.innerHTML = '<td>1</td>' + '<td>2</td>' + '<td>3</td>';

table.appendChild(tr);

document.body.appendChild(table);



// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

let table2 = document.createElement('table');

for (let i = 0; i < 10; i++) {
let tr2 = document.createElement('tr')

for (let i = 0; i < 3; i++) {
  let td2 = document.createElement('td');
  tr2.appendChild(td2);
}
 table2.appendChild(tr2)
}
document.body.appendChild(table2);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

let table3 = document.createElement('table');

for (let i = 0; i < 10; i++) {
  let tr3 = document.createElement('tr');

  for (let i = 0; i < 5; i++) {
    let td3 = document.createElement('td');
    tr3.appendChild(td3);
  }
  table3.appendChild(tr3);
}
document.body.appendChild(table3);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let table4 = document.createElement('table');
let n = prompt('Enter number of rows');
let m = prompt('Enter number of cells');

for (let i = 0; i < n; i++) {
  let tr4 = document.createElement('tr');

  for (let i = 0; i < m; i++) {
    let td4 = document.createElement('td');
    tr4.appendChild(td4);
  }
  table4.appendChild(tr4);
}
document.body.appendChild(table4);