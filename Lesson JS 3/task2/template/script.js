// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class

let classElements = document.getElementsByTagName('*');

for (element of classElements) {
if (element.className) {
  console.log(element)
}
}


//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let p = document.getElementsByTagName('p');

for (element in p) {
p[element].innerText = 'hello oktenweb!';
}


//  - знайти всі div та змінити ім колір на червоний
let div = document.getElementsByTagName('div');


for (element in div) {
  div[element].style.backgroundColor = 'red';
}