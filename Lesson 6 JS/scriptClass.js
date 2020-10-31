// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let array11 = ['a', 'b', 'c'];

for (let i = 1; i <= 3; i++ ){
  array11.push(i)
}
console.log(array11)


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let array99 = [1, 2, 3];
let array999 = [];

for (let i = array99.length-1; i >= 0; i--) {
let element = array99.pop(array99[i]);
array999.push(element);
}
console.log(array999);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let array30 = [1, 2, 3];
array30.push(4, 5, 6);
console.log(array30);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let array20 = [1, 2, 3];
array20.unshift(4, 5, 6);
console.log(array20);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let array40 = ['js', 'css', 'jq'];
document.write(array40.shift());
document.write('<br/>');

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

document.write(array22.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let array33 = [1, 2, 3, 4, 5];

console.log(array33.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

console.log(array33.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

array33.splice(1, 2);
console.log(array33);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let array44 = [1, 2, 3, 4, 5];
array44.splice(3, 0, 'a', 'b', 'c');
console.log(array44);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let array55 = [1, 2, 3, 4, 5];
array55.splice(1, 0, 'a', 'b');
array55.splice(6, 0, 'c');
array55.splice(8, 0, 'e');
console.log(array55);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let array66 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < array66.length; i+=2) {
  console.log(array66[i]);
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let array77 = [];

for (let i = 0; i < array66.length; i++) {
  array77.push(array66[i]);
}
console.log(array77);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let array88 = [];

for (let i = 0; i < array66.length; i++) {
array88[i] = array66[i]
}
console.log(array88);