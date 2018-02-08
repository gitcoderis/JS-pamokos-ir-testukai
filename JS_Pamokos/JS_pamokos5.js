// objekto konstruktoriaus funkcijos prasideda is didziosios raides.
// kitaip sakant, funkcijos, kurios konstruoja objektus, rasomos is didziosios raides.

"user strict";

function Useris(name) {
  this.name = name;
  this.isAdmin = false;
}

let useris = new Useris("Jack");

console.log(useris.name);


//---------------

// new.target naudojamas , kai norima patikrinti, ar toks objektas jau buvo panaudotas (sukurtas)


function User(name) {
  if(!new.target) { // jei apacioje buvo paleistas konstruktorius (let john = User('john')) be new zodelio, tada sukuria nauja objekta
    return new User(name);
  }
  this.name = name;  // o jei jau tas objektas yra, tada perraso jo reiksme
}

let john = User("john");
console.log(john.name);


//---------------------------

function BigUser() {
  this.name = 'John';

  return { name: 'Godzilla' }; // <-- grazina objekta
}
console.log( new BigUser().name );  // Godzilla


//-----------------
// returnas sustabdo funkcija:

function SmallUser() {
  this.name = "john";

  return;  //sustabdo koda, grazina 'this', jei nieko neirasau i 'returna'

}

console.log( new SmallUser().name ); // john

//-------------------

let newUseris = new User; // be skliaustu, jei nenoriu prideti jokiu metodu
let newUseris2 = new User(); // jei noriu prideti metodus. reiktu sus skliaustais naudoti, nes taip lengviau skaitosi




//------------ UZDUOTYS ------------------

function Calculator() {

  this.read = function() {
      this.sk1 = parseInt(prompt("SK1"));
      this.sk2 = parseInt(prompt("SK2"));
  };

  this.sum = function() {
    return this.sk1 + this.sk2;
  };

  this.mul = function() {
    return this.sk1 * this.sk2;
  };
}

let calcUser = new Calculator();

calcUser.read();
console.log(calcUser.sum());
console.log(calcUser.mul());

//--------------

// 2 uzduotis -----------------

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("sk1");
  };

}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
console.log(accumulator.value);
