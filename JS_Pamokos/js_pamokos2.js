"use strict";


// primityvai yra: string, number, null, undefined, boolean, NaN, enum



//typeof null === 0;
//------------------
//alert, prompt, confirm funkcijos sustabdo kitu funkciju veikima, kol jos yra iskviestos.


// function sum(a=1, b=2){
//   alert(a+b);
// }
// sum();
// sum(3,4);


//----------------- objektai -------------------

let user = {
  name: 'John',
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

alert( user[key] );


///----------------------------------------------//

let fruit = prompt("Which fruit to buy", "apple");

let bag = {
  [fruit]: 5,  //norint persiusti kintamaji vietoj KEY, tada reikia rasyti tarp lauztiniu skliaustu
  // [fruit + 'computers']: 5,  // cia jei pvz noretume kintamaji ir stringa gauti kaip KEY
};

alert(bag.apple);

///////////// greitesnis variantas:

let fruitB = prompt("Which fruit to buy", "apple");
let bagB = [];

bagB[fruitB] = 5;


alert( "apple" in bagB ); // grazins true, jei toks KEY egzistuoja, ir false, jei nera


//------------------ Shorthand -----------------------

// si koda...

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ..kitos reiksmes
  };
}

//..galima sutrumpinti taip:

function makeUser2(name, age) {
  return {
    name, //tas pats, kaip name: name
    age //tas pats, kaip age: age
  };
}

//---------------- FOR...IN ciklas -------------------
//
// for(key in object) {
//   //ima kiekviena KEY is eiles ir galima daryti su tuo kazkokius veiksmus;
// }

let useris ={
  name: "John",
  age: 30,
  isAdmin: true
};
for(let key in useris) {
  //keys
  console.log(key);
  console.log(useris[key]);
}

//jei objekte KEY yra tik skaiciai, tai objektas atsivaizduos apgal skaiciu eiliskuma
// {
//   "1": "John",
//   "3": 25,
//   "2": true;
// } tai gausis reiksmes  1 , 2 , 3



// ------------------ OBJEKTU KOPIJAVIMAS NERA KAIP KITU PRIMITYVU  -----

let vartotojoas = { name: "John" };

// bandymasa kopijuoti si objekta:
let admin = vartotojoas;
admin.name = 'Pete'; //changed the "admin" reference
alert(vartotojas.name);  //gausim Pete. Nes vartotojas ir admin naudoja ta pacia duomenu struktura (abu kintamieji kreipiasi i ta pati objekta)


// ------------------ OBJEKTU KLONAVIMAS  ----------------------

let naudotojas = {
  name: "John",
  age: 30
};

let clone = {}; //sukuriamas naujas tuscias objektas

//jo reiksmes perrasomos i nauja objekta:
for (let key in naudotojas) {
  clone[key] = user[key];
}

//dabar clone objektas yra visiskai atskiras objektas
clone.name = 'Pete'; //pakeicia clone objeko duomenis

alert(naudotojas.name); // vis dar "John"


//----------------- Object.assign ------------

let naudot = {name: "john"};

let permission1 = {canView: true};
let permission2 = {canEdit: true};

//nukopijuos permission1 ir permission2 i naudot
Object.assign(naudot, permission1, permission2);  //dabar naudot = {name: "John", canView: true, canEdit: true}

//----------------------------

//jei jau turi savy parametra name, tada ji pakeis nauju:
let objektukas = {name: "jon"};

//perraso name ir prideda isAdmin
Object.assign(user, {name: "Pete", isAdmin: true});


//---------- klonavimas i kita objekta:

let useriukas = {
  name: "jon", age: 19
};

let clone = Object.assign({}, useriukas); // dabar clone objektas nebus suristas su useriukas




// ------------- Objektai gali tureti objektus savyje: -----

// let user = {
//   name: 19,
//   age: {
//     id: 15
//   }
// };
//
// pasiekti id reiktu taip:
// user.age.id;

//klonavimas jau nebeveiks tokiuose dvimaciuose objektuose
