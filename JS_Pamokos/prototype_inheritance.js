"use strict";

// kiekvienas objektas turi prototype. jo reiksme gali buti null arba nuoroda i kita objekta.

let objekt = {};
console.log(objekt); // __proto__ yra objektas, turintis metodus


//-------------

let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; //pririsam animal objekta prie rabbit objekto. paveldejimas is kito objekto. dabar rabbit turi animal savybes
console.log(rabbit.eats); //true
console.log(rabbit.jumps); //true
console.log(animal.jumps);  //undefined


//paveldejimas turetu buti taip (didesni objekta turetu paveldeti mazesnis)
let animalas = {
  eats: true,
  walk() {
    alert("animal walk");
  }
};

let rabbitas = {
  jumps: true,
  __proto__: animalas
};

rabbitas.walk(); // animal walk


// savybes yra chain principu. jei priskiriu C paveldejo savybes is B, o B is A, tai C tures A ir B objektu savybes
// SVARBU: prototipas naudojamas tik savybiu skaitymui. Jis nenaudojamas savybiu irasymui


//-------- panaudojimas su SETTERS/GETTERS

let user = {
  name: "john",
  surname: "smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John smith

admin.fullName = "Alice Cooper";

//dabar admin Alice Cooper


// UZDUOTIS  ---------------------------------

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen); // 3



//---------------- uzduotis 2

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

speedy.eat("apple");
console.log(speedy.stomach); //apple

console.log(lazy.stomach); 
