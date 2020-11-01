// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let divContent = document.getElementById('content').textContent;
console.log(divContent);

// - отримує текст з блоку з id "rules"
let divRules = document.getElementById('rules').textContent;
console.log(divRules);

// - замініть текст параграфа з id 'content' на будь-який інший
let divContentChange = document.getElementById('content');
divContentChange.innerText = 'Any Text';

// - замініть текст параграфа з id 'rules' на будь-який інший
let divRulesChage = document.getElementById('rules');
divRulesChage.innerText = 'Other text';

// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій

let div = document.getElementsByTagName ('div');
let p = document.getElementsByTagName ('p');
let ul = document.getElementsByTagName ('ul');

for (let divElement of div) {
  divElement.classList.add('color-red', 'font-blue')
};

for (let pElement of p) {
  pElement.classList.add('color-red', 'font-blue');
};
for (let ulElement of ul) {
  ulElement.classList.add('color-red', 'font-blue');
};


// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let classRules = divRulesChage.classList;
for (let classRulesElem of classRules) {
  console.log(classRulesElem);
}

// - отримати всі елементи з класом fc_rules
let fc = document.getElementsByClassName('fc_rules');
console.log(fc);

// - поміняти колір тексту у всіх елементів fc_rules на білий

for (let fcElem of fc) {
  fcElem.style.color = 'white'
};