// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_header = document.getElementById('main_header');
main_header.style.color = 'green';

// -- робить шириниу елементу ul 400 пікселів
let ul = document.getElementsByTagName('ul');
for (let ulElement of ul) {
  ulElement.style.width = '400px';
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let classLinkList = document.getElementsByClassName('linkList');
for (let classLinkListElem of classLinkList) {
  classLinkListElem.style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (let textListElement2 of listElement2) {
  let text = textListElement2.textContent;
  console.log(text);
}

// -- отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
for (let liElem of li) {
  liElem.style.backgroundColor = 'grey';
}

// -- отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (let aElem of a) {
  aElem.classList.add('anchor');
  console.log(aElem);
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let aElem of a) {
  let textAElem = aElem.textContent;
  if (textAElem === 'link3') {
    aElem.style.fontSize = '40px';
  }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let aElem of a) {
  let XXX = aElem.textContent;
  aElem.classList.add(`element_${XXX}`);
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
let bgColor = prompt('Enter BG color');

for (subHeaderElem of subHeader) {
  subHeaderElem.style.backgroundColor = bgColor;
}

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let textColor = prompt('Enter text color');
for (subHeaderElem of subHeader) {
  if (subHeaderElem.textContent === 'content 2 segment') {
    subHeaderElem.style.color = textColor;
  }
}

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
let content1Text = prompt('Enter text');
for (content1Elem of content1) {
  content1Elem.innerText = content1Text;
}

// -- отримати елементи p та змінити їм paddin на довільне значення
let p = document.getElementsByTagName('p');
for (pElem of p) {
  pElem.style.padding = '60px';
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2 = document.getElementsByClassName('text2');
for (text2Elem of text2) {
  text2Elem.innerText = 'Hello World';
}
