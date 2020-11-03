// Задание 1

let num1 = +prompt('Введите число', 'первое число');
let num2 = +prompt('Введите число', 'второе число');
let num3 = +prompt('Введите число', 'тертье число');

if (num1 < num2 && num1 < num3) {
  console.log(num1);
} else if (num2 < num1 && num2 < num3) {
  console.log(num2);
} else if (num3 < num1 && num3 < num2) {
  console.log(num3);
}

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
  console.log(num1);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
  console.log(num2);
} else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
  console.log(num3);
}

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else if (num3 > num1 && num3 > num2) {
  console.log(num3);
}

// Задание 2

let color = prompt('Введите цвет светофора:', 'зеленый, желтый или красный');

switch (color) {
  case 'зеленый':
    alert('Иди');
    break;
  case 'желтый':
    alert('Подожди');
    break;
  case 'красный':
    alert('Стой');
    break;
  default:
    alert('Делай что хочешь!');
}

// Задание 3

let isRoadClear = confirm('Дорога пустая?');

if ((color === 'зеленый' && isRoadClear)) {
  alert('Иди');
} else if ((color === 'зеленый' && !isRoadClear)) {
  alert('Подожди пока нарушители проедут');
} else if ((color === 'желтый' && !isRoadClear)) {
  alert('Жди');
} else if ((color === 'желтый' && isRoadClear)) {
  alert('Все рано жди');
} else if ((color === 'красный' && isRoadClear)) {
  alert('Стой все равно');
} else if ((color === 'красный' && !isRoadClear)) {
  alert('Стой и жди');
}else {
  alert('Делай что хочешь');
}



