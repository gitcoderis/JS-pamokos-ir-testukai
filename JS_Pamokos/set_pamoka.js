"use strict";

//set neturi keys

//setai leidzia prideti tik nesikartojancias reiksmes (islaiko tik unikalius kintamuosius)

let set = new Set();

let john = { name: "john" };
let pete = { name: "pete" };
let mary = { name: "mary" };

//visits, some users come multiple times
set.add(john);  // pridejimas i seta skiriasi nuo pridejimo i map
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

//set keeps only unique values

console.log(set.size); // 3

for(let user of set) {
  console.log(user.name); // john (then pete and mary)
}

//----------------------------

//seta galima  spausdinti forEach ir for...of metodais
//taciau for...of metodu greiciau veikia

let setas = new Set(["orange", "apple", "xxxxx"]);

console.log(setas.keys()); //grazina values (ne keys)
console.log(setas.values()); // lygiai taip pat, kaip set.keys, grazina values
console.log(setas.entries()); //grazina [value, value]



for (let value of setas) console.log(value); //shorthandas taciau
for (let value of setas.entries()) console.log(value);

// setas.forEach((value, valueAgain, setas) => { console.log(value)});

//-------------------------

//WeakSet yra speciali kolekcija, kuri neleidzia JS'ui pasalinti elementu is atminties
//WeakMap yra speciali duomeu kolekcija, kuri neleidzia pasalinti is atminties
