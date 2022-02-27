// // 1) Создать объект, в котором создать 5 произвольных полей со значениями разных типов данных

let admin = {
  name: "Виктор",
  age: 18,
  married: true,
  children: undefined,
  animals: {
    dogs: 2,
    cats: 1,
  },
};

//  2) Написать функцию, которая принимает 2 аргумента (name, age) и возвращает объект с полями name и age соответственно.
function createObj(name, age) {
  return {
    name,
    age,
  };
}
let b = createObj("Катя", 18);
console.log(b);

function User(name, age) {
  this.name = name;
  this.age = age;
}
let user = new User("Вася", 12);
console.log(user.name);

// 3) Написать функцию, которая проверяет поле объекта на значение с помощью условной конструкции switch-case.
let d = {
  year: 17,
};
function checkName(obj) {
  switch (obj.year) {
    case 10:
      console.log("Cлишко рано");
      break;
    case 17:
      console.log(`Правильно 17 лет`);
      break;
    case 30:
      console.log("Слишком много");
  }
}
checkName(d);

// 4) Написать функцию, которая вернёт все названия полей объекта, который мы ей передаём, и их значения.

let fruits = {
  aples: 4,
  bananas: 5,
  pineapples: 1,
};
getInformation = (obj) => Object.entries(obj);

console.log(getInformation(fruits));

//  5) Написать функцию которая объединяет 5 объектов в один.
getConcat = (obj1, obj2, obj3, obj4, obj5) =>
  Object.assign(obj1, obj2, obj3, obj4, obj5);
h = {
  name: "Борис",
};
b = {
  age: 18,
};
m = {
  children: 5,
};
l = {
  secondName: "Петров",
};
d = {
  city: "Брест",
};
user = getConcat(h, b, m, l, d);
console.log(user);

// 6) Создать объект, произвести с ним произвольные манипуляции, а потом заморозить, но только для создания новых полей, изменения текущих полей должны быть разблокированы.
let interes = "football";
let summer = {
  temp: "hot",
  name: "Федор",
  age: 19,
  [interes]: true,
};
Object.seal(summer);
summer.temp = 30;
summer.wind = "bitting";

console.log(summer);
// 7) Создать объект, использовав Object.create(другой объект) и попробавть обратиться к полям объекта, который мы передаём в Object.create, с помощью нового объекта.
let animals = {
  life: "forest",
  food: "grass",
};
let wolf = Object.create(animals);

console.log(wolf.food);
// 8) Создать метод объекта, который возвращает нам значения полей tovar, usluga, price текущего объекта. Напоминаю, что такой метод называют геттер (getter).
let mac = {
  tovar: "suit",
  usluga: "reparing",
  price: "70pyб",
  get allUsluga() {
    return `${this.tovar} ${this.usluga} ${this.price}`;
  },
  set allUsluga(value) {
    [this.tovar, this.usluga, this.price] = value.split(" ");
  },
};
mac.allUsluga = "skirt ironing 30руб";
console.log(mac.allUsluga);
// 9) Скопировать все поля одного объекта в другой.
let audi = {
  color: "read",
  year: 2006,
  speed: 100,
};
let clone = {};
for (let prop in audi) {
  clone[prop] = audi[prop];
}

Object.defineProperty(audi, "color", {
  writable: false,
});
audi.color = "green";
console.log(audi);
let clone2 = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(audi)
);
clone.color = "green";
clone2.color = "green";
console.log(clone);
console.log(clone2);

// 1) Создать функцию, которая проверяет пустой ли объект или нет и выводит соответствующее сообщение в консоль.
checkEmpty = (obj) => {
  for (let keey1 in obj) {
    return console.log(false);
  }
  return console.log(true);
};

let row = {};
let row1 = { name: "Борис", "go to school": true };
checkEmpty(row);
checkEmpty(row1);

// 2) Написать функцию, которая сравнивает 2 объекта на идентичность и выводит соответствующее сообщение в консоль.
function compare(kl, ko) {
  let fd = JSON.stringify(kl);
  let fp = JSON.stringify(ko);
  if ((fd = fp)) {
    return true;
  }
  return false;
}
let ppp = {
  name: "Ангелина",
  age: 18,
};
let mmm = {
  name: "Ангелина",
  age: 18,
};
let ooo = {
  name: "Екатерина",
  age: 12,
};
compare(ppp, mmm);
compare(ppp, ooo);
// // // 3) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
let object1 = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    return "метод3";
  },
};
let mia = object1.method3();
console.log(mia);
let via = object1.method1().method2().method3();
console.log(via);
