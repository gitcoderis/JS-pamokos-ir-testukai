"use strict";

// ---------------------- this--------------------------

// this reiksme nuolat keiciasi. JS kodo vykdymo metu.

// this grazina esamo objekto reiksmes (nebutinai objektui galima naudoti this, taciau neveikia ant array)


let useris = {name: "john"};
let adminas = {name: "admin"};

function sayHi() {
  console.log( this.name );
}


//sukuriam metoda f
useris.f = sayHi;
adminas.f = sayHi;

useris.f(); // john (this == useris)
adminas.f(); // admin (this == adminas)



//-----------------------------------

//sudetinguose metodu panaudojimuose 'this' gali pradingti

let user = {
  name: 'johnas',
  hi() { alert(this.name); },
  bye() { alert("bye"); }
};

user.hi(); //veikia

// (user.name=="johnas" ? user.hi : user.bye)(); // error, nes 'this' pradingsta


//----------------------------

//rodyklines funkcijos neturi "this" metodo. Jei naudosime  "this" rodyklineje funkcijoje, kuri yra kitoje funkcijoje, tai "this" reiksme paims is tos aukstesnes funkcjios

let useriukas = {
  firstName : "Ilja",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow()
  }
};
useriukas.sayHi(); //Ilja

//---------------------------


let userN = {
  name: "jonukas",
  go: function() { console.log(this.name);}
};

userN.go();
