"use strict";


// function checkAge(age) {
//   return age > 18 ? true : confirm('Do you have permission?');
//
// }

function checkAge(age) {
  return (age > 18) || confirm('Do you have permission?');

}

checkAge(18);



//-----------------------------------------//


function minCheck(num1, num2) {
  return (num1 >= num2) ? console.log(num2) : console.log(num1);
}

minCheck(2, 5);
minCheck(2, -1);
minCheck(1, 1);


//-----------------------------------------//


function calcNumber(a, b) {
  return console.log(a**b); //kelia laipsniu
}

// calcNumber(prompt("Num1"), prompt("Num2"));


//-----------------------------------------//



function checkPrimal(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {return false};
  }
  return num > 1;
}

console.log(checkPrimal(1));  // returns false
console.log(checkPrimal(2));  // returns true
console.log(checkPrimal(9));  // returns false
console.log(checkPrimal(11)); // returns true
console.log(checkPrimal(7919));




//-----------------------------------------//



function ask(question, yes, no) {
  if (confirm(question)) yes() // tie skliausteliai po 'yes' reiskia, kad funkcija iskart iskvieciama gavus argumenta.
  else no();
}

function showOk() {
  alert("You agreed");
}

function showCancel() {
  alert("You canceled the execution");
}

ask("Do you agree?", showOk, showCancel);

//greitesnis variantas:
ask(
  "Do you agree",
  function() { alert("You agreed.");},
  function() { alert("You canceled the execution.");},
);

//  `hello ${name}`  --> cia, taip galima parasyti kintamuosius su tekstu, kad nereiketu stringu pliusais jungti



// --------------- arrow function ------------------//

let sum = (a, b) => a + b;

/* arrow funkcija yra trumpesnis sios funkcijos atitikmuo:

let sum = function(a,b) {
  return a + b;
}; */
alert( sum(1,2) );  // 3


//-------------------------------//

let double = (n) => n*2;

/* jei butu daugiau veiksmu, reiketu tarp { } rasyti koda, pvz:

let double = n => {
  let hello = "helloWORLD";
  n = n*2*1000;
  return n + hello;

};

*/


alert(double(3));

// jei nenaudojam argumentu:
let sayHi = () => alert("hello");

//------------------


// cia IF'as pridetas. taciau toks veiksmas veiktu tik shorthandu (if(...) {..} else {..} neveiktu)
let age = 19;
let welcome = (age > 18) ?
  () => alert('hello') :
  () => alert('greetings');

welcome(); //hello


//----------------- Funkcijos su callback iskvietimas --------

function countUp(callback) {
  callback(1);
  callback(2);
  callback(3);
}

function callback(sentence) {
  console.log(sentence);
}

countUp(callback);

// ------------------ Funkcijus sutrumpinimas rodyklinemis funkcijomis ------------------

/* perrasom sia funkcija:

  function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
  }

  ask(
    "Do you agree?",
    function() { alert("You agreed"); },
    function() { alert("You canceled the exectution"); } 
  );

i apacioje esancia: */

let askQ = (question, yes, no) => {confirm(question) ? yes() : no()};


askQ(
  "Do you agree?",
  () => alert("SUTINKI"),
  () => alert("NESUTINKI")
);
