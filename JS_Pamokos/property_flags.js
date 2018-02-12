"use strict";

let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
                      // tavo objektas, null??, kuris objektas
console.log(JSON.stringify(descriptor, null, 2));

//--------------------------- Writable: Read-only

let user2 = {
  name: "Nameas"
};

Object.defineProperty(user2, 'name', { writable: false });
// user2.name = "Pete"; //error: Cannot assign to read only property 'name' of object '#<Object>'
// console.log(user2.name);


//--------------------------- tas pats, tik tikrina, ar egzistuoja

let user3 = { };

Object.defineProperty(user3, 'name', {
  value: "Pete",
  //for new properties need to explicitly list what's true
  enumerable: true ,
  configurable: true
});
// user3.name = "Pete"; //error
// console.log(user3.name);



//--------------------------- Non-enumerable

let user4 = {
  name: "John",
  toString() {
    return this.name;
  }
};
// naudojam, kai nenorim loope imti kurio nors objekto parametro, pvz metodu
Object.defineProperty(user4, "toString", {enumerable: false});

for(let key in user4) alert(key);


//------------------------- Non-configurable (configurable: false/true)
//nebeleidzia daryti pakitimu (jei pvz jau nustatem, kad writable:true ir pridejom po juo configurable: false, tai jau ktia kaarta, jei bandysim ta pati key daryti writable, tai neleis)
let user5 = {};
//.....


//------------------------- Object.defineProperties
// leidzia define'inti daugiau savybiu vienu metodu
//
// Object.defineProperties(obj, {
//   prop1: descriptor1,
//   prop2: descriptor2
// });


// PVZ:
// Object.defineProperties(user, {
//   name: {value: "john", writable: false},
//   surname: {value: "doe", writable: false},
// });

//-----------------------------------------------------------------
// Klonuoti objekta galima taip:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

//arba

for(let key in user) {
  clone[key] = user[key];
}
