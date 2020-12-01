// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// function wakeUp(ring, time, cb) {
//   setTimeout(() => {
//     if (!ring) {
//       cb(`Проспала! Вже ${time} година`);
//       return;
//     }
//     console.log('Будильник дзвонить....');
//     cb(null, `Доброго ранку! ${time} година`);
//   }, 500);
// }
//
// function bath(water, cb) {
//   setTimeout(() => {
//     if (!water) {
//       cb('Нема води!');
//       return;
//     }
//     cb(null, 'Приймаю душ');
//   }, 1000);
// }
//
// function breakfast(food, cb) {
//   setTimeout(() => {
//     if (!food) {
//       cb('Нема що їсти');
//       return;
//     }
//     cb(null, `Їм ${food}`);
//   }, 800);
// }
//
// function transport(money, cb) {
//   setTimeout(() => {
//     if (money < 8) {
//       cb('Сиди вдома');
//       return;
//     }
//     if (money < 100) {
//       cb(null, 'Їдеш на маршрутці');
//       return;
//     }
//     cb(null, 'Їдеш на таксі');
//   }, 400);
// }
//
// function swim(card, cb) {
//   setTimeout(() => {
//     if (!card) {
//       cb('Закінчився абонемент');
//       return;
//     }
//     cb(null, 'Пішли плавати в басейн');
//   }, 300);
// }
//
// function movie(name, cb) {
//   setTimeout(() => {
//     if (!name) {
//       cb(`Вільний вечір`);
//       return;
//     }
//     cb(null, `${name} запросив у кіно`);
//   }, 1500);
// }
//
// function weather(rain, cb) {
//   setTimeout(() => {
//     if (!rain) {
//       cb(null, 'Нема дощу');
//       return;
//     }
//     cb('Візьми парасолю');
//   }, 400);
// }
//
// wakeUp(true, 9, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
//   bath(true, (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//     breakfast('яйце', (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(data);
//       transport(9, (err, data) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(data);
//         swim(true, (err, data) => {
//           if (err) {
//             console.log(err);
//             return;
//           }
//           console.log(data);
//           movie('Андрій', (err, data) => {
//             if (err) {
//               console.log(err);
//               return;
//             }
//             console.log(data);
//             transport(150, (err, data) => {
//               if (err) {
//                 console.log(err);
//                 return;
//               }
//               console.log(data);
//               weather(true, (err, data) => {
//                 if (err) {
//                   console.log(err);
//                   return;
//                 }
//                 console.log(data);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

//-----------------------

function wakeUp(ring, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ring) {
        reject(`Проспала! Вже ${time} година`);
      }
      console.log();
      resolve(`Будильник дзвонить....
Доброго ранку! ${time} година`);
    }, 500);
  });
}

function bath(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!water) {
        reject('Нема води!');
      }
      resolve('Приймаю душ');
    }, 1000);
  });
}

function breakfast(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!food) {
        reject('Нема що їсти');
      }
      resolve(`Їм ${food}`);
    }, 800);
  });
}

function transport(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 8) {
        reject('Сиди вдома');
      }
      if (money < 100) {
        resolve('Їдеш на маршрутці');
      }
      resolve('Їдеш на таксі');
    }, 400);
  });
}

function swim(card) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!card) {
        reject('Закінчився абонемент');
      }
      resolve('Пішли плавати в басейн');
    }, 300);
  });
}

function movie(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) {
        reject(`Вільний вечір`);
      }
      resolve(`${name} запросив у кіно`);
    }, 1500);
  });
}

function weather(rain) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!rain) {
        resolve('Нема дощу');
      }
      reject('Візьми парасолю');
    }, 400);
  });
}

wakeUp(true, 7)
  .then((value) => {
    console.log(value);
    return bath(true);
  })
  .then((value) => {
    console.log(value);
    return breakfast('яйце');
  })
  .then((value) => {
    console.log(value);
    return transport(10);
  })
  .then((value) => {
    console.log(value);
    return swim(true);
  })
  .then((value) => {
    console.log(value);
    return movie('Anton');
  })
  .then((value) => {
    console.log(value);
    return weather(false);
  })
  .then((value) => {
    console.log(value);
    return transport(150);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

async function day() {
  try {
    const ring = await wakeUp(true, 8);
    console.log(ring);
    const water = await bath(true);
    console.log(water);
    const eat = await breakfast('egg');
    console.log(eat);
    const trans = await transport(8);
    console.log(trans);
    const swimming = await swim(true);
    console.log(swimming);
    const evening = await movie('Dima');
    console.log(evening);
    const rain = await weather(false);
    console.log(rain);
    const trans2 = await transport(200);
    console.log(trans2);
  } catch (err) {
    console.log(err);
  }
}

day();

