// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

const titles = document.getElementsByTagName('h2');
const content = document.getElementById('content');
const wrap = document.getElementById('wrap');

const ul = document.createElement('ul');

for (let i = 0; i < titles.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = titles[i].innerText;

  titles[i].setAttribute('id', i);
  a.href = '#' + i;

  li.appendChild(a);
  ul.appendChild(li);
}

content.appendChild(ul);
ul.style.width = '30%';
content.style.float = 'left';
