"use strict";

let john = {name: "john"};

let visitCountMap = new Map();

visitCountMap.set(john, 123);

console.log(visitCountMap.get(john)); //123




//----------------------------------------



let map = new Map(Object.entries({
  name: "John",
  age: 27
}));
console.log(map);


//----------------------------------------
// kaip gauti duomenis is Mapu

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);


//ATKREIPTI DEMESI, KAD GAUTI IS MAPU DUOMENIS SU FOR LOOPSU REIKIA FOR...OF
// o objektuose yra for...in loopsas

//iterate over keys (vegetables)
for(let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

//iterate over values (amounts)
for(let amount of recipeMap.values()) {
  console.log(amount);
}

//iterate over [key.value] entries
for(let entry of recipeMap) {
  console.log(entry);
}
