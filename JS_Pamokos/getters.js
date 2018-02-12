"use strict";

// naudojant get, galime prideti fullName savybe, todel galime sukurti accessor:

let user = {
  name: "jon",
  surname: "smit",
  //galim atvaizduoti greitai reiksmes (bet negalim ju perrasyti, pvz user.fullName = ... bus klaida):
  get fullName() { //get neturi argumentu niekada
    return `${this.name} ${this.surname}`;
  },

  //galim lengvai priskirti naujas reiksmes per fullName (funkciju pavadinimai turi sutapti) (dabar jau veiks user.fullName= ..)
  set fullName(value) { // set funkcijos gali tureti viena argumenta
    //masyvas = masyvas, nes split gauna masyva is value. cia tas pats, kas [a,b]=[1,2]  ---> a=1, b=2
    [this.name, this.surname] = value.split(' ');
  }
};

alert(user.fullName); //jon smit

user.fullName = "Alice Cooper"
alert(user.name); //alice
alert(user.surname); //cooper


//------------------------------- prideti objektas get ir set metodus galime taip:

let useris = {
  name: "jonas",
  surname: "jon"
};

// taip pridedam set ir get metodus objektams
Object.defineProperty(useris, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(useris.fullName); // jonas jon

for(let key in useris) alert(key);


//--------------------------------------------

//get metodas negali keisti value (grazinti kita value nei buvo)



//------------------------------- SMARTER GETTERS/SETTERS

let vartotojas = {
  get name() {
    return this._name; // tas bruksnelis, kad nesimaisytu pavadinimai su metodo pavadinimu
  },

  set name(value) {
    if (value.length < 4) {
      alert('name too short, reikia bent 4');
      return;
    }
    this._name = value;
  }
};

vartotojas.name = "Pete";
alert(vartotojas.name);

vartotojas.name = ""; // name too short, ...


//-------------------------- kitas pvz, su konstruktorine funkcija:

function Vart(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  //age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let jon = new Vart("Jon", new Date(1992,6,1));

console.log(jon.birthday); // getters.js:94 Wed Jul 01 1992 00:00:00 GMT+0300 (FLE Daylight Time)
console.log(jon.age);  // 26
